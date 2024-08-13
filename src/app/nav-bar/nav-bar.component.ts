import { NgClass } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      const nav = document.querySelector(".nav"),
        searchIcon = document.querySelector("#searchIcon"),
        navOpenBtn = document.querySelector(".navOpenBtn"),
        navCloseBtn = document.querySelector(".navCloseBtn");

      searchIcon?.addEventListener("click", () => {
        nav?.classList.toggle("openSearch");
        nav?.classList.remove("openNav");
        if (nav?.classList.contains("openSearch")) {
          searchIcon.classList.replace("uil-search", "uil-times");
        } else {
          searchIcon.classList.replace("uil-times", "uil-search");
        }
      });

      navOpenBtn?.addEventListener("click", () => {
        nav?.classList.add("openNav");
        nav?.classList.remove("openSearch");
        searchIcon?.classList.replace("uil-times", "uil-search");
      });

      navCloseBtn?.addEventListener("click", () => {
        nav?.classList.remove("openNav");
      });
    }
  }
}