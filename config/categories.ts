export const categories: Array<CategoriesType> = [
    {
      name: "Civil Lines",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBhbG10cmVlIj48cGF0aCBkPSJNMTMgOGMwLTIuNzYtMi40Ni01LTUuNS01UzIgNS4yNCAyIDhoMmwxLTEgMSAxaDQiLz48cGF0aCBkPSJNMTMgNy4xNEE1LjgyIDUuODIgMCAwIDEgMTYuNSA2YzMuMDQgMCA1LjUgMi4yNCA1LjUgNWgtM2wtMS0xLTEgMWgtMyIvPjxwYXRoIGQ9Ik01Ljg5IDkuNzFjLTIuMTUgMi4xNS0yLjMgNS40Ny0uMzUgNy40M2w0LjI0LTQuMjUuNy0uNy43MS0uNzEgMi4xMi0yLjEyYy0xLjk1LTEuOTYtNS4yNy0xLjgtNy40Mi4zNXoiLz48cGF0aCBkPSJNMTEgMTUuNWMuNSAyLjUtLjE3IDQuNS0xIDYuNWg0YzItNS41LS41LTEyLTEtMTQiLz48L3N2Zz4=",
    },
    {
      name: "Swaroop Nagar",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdhdmVzIj48cGF0aCBkPSJNMiA2Yy42LjUgMS4yIDEgMi41IDFDNyA3IDcgNSA5LjUgNWMyLjYgMCAyLjQgMiA1IDIgMi41IDAgMi41LTIgNS0yIDEuMyAwIDEuOS41IDIuNSAxIi8+PHBhdGggZD0iTTIgMTJjLjYuNSAxLjIgMSAyLjUgMSAyLjUgMCAyLjUtMiA1LTIgMi42IDAgMi40IDIgNSAyIDIuNSAwIDIuNS0yIDUtMiAxLjMgMCAxLjkuNSAyLjUgMSIvPjxwYXRoIGQ9Ik0yIDE4Yy42LjUgMS4yIDEgMi41IDEgMi41IDAgMi41LTIgNS0yIDIuNiAwIDIuNCAyIDUgMiAyLjUgMCAyLjUtMiA1LTIgMS4zIDAgMS45LjUgMi41IDEiLz48L3N2Zz4=",
    },
    {
      name: "Shyam Nagar",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNodXJjaCI+PHBhdGggZD0ibTE4IDcgNCAydjExYTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjlsNC0yIi8+PHBhdGggZD0iTTE0IDIydi00YTIgMiAwIDAgMC0yLTJ2MGEyIDIgMCAwIDAtMiAydjQiLz48cGF0aCBkPSJNMTggMjJWNWwtNi0zLTYgM3YxNyIvPjxwYXRoIGQ9Ik0xMiA3djUiLz48cGF0aCBkPSJNMTAgOWg0Ii8+PC9zdmc+",
    },
    {
      name: "Kidwai Nagar",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNodXJjaCI+PHBhdGggZD0ibTE4IDcgNCAydjExYTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjlsNC0yIi8+PHBhdGggZD0iTTE0IDIydi00YTIgMiAwIDAgMC0yLTJ2MGEyIDIgMCAwIDAtMiAydjQiLz48cGF0aCBkPSJNMTggMjJWNWwtNi0zLTYgM3YxNyIvPjxwYXRoIGQ9Ik0xMiA3djUiLz48cGF0aCBkPSJNMTAgOWg0Ii8+PC9zdmc+",
    },
    {
      name: "Kakadeo",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdyaWQtMngyIj48cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHg9IjMiIHk9IjMiIHJ4PSIyIi8+PHBhdGggZD0iTTMgMTJoMTgiLz48cGF0aCBkPSJNMTIgM3YxOCIvPjwvc3ZnPg==",
    },
    {
      name: "Trending",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+",
    },
    {
      name: "Azad Nagar",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXJvdXRlciI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjgiIHg9IjIiIHk9IjE0IiByeD0iMiIvPjxwYXRoIGQ9Ik02LjAxIDE4SDYiLz48cGF0aCBkPSJNMTAuMDEgMThIMTAiLz48cGF0aCBkPSJNMTUgMTB2NCIvPjxwYXRoIGQ9Ik0xNy44NCA3LjE3YTQgNCAwIDAgMC01LjY2IDAiLz48cGF0aCBkPSJNMjAuNjYgNC4zNGE4IDggMCAwIDAtMTEuMzEgMCIvPjwvc3ZnPg==",
    },
    {
      name: "Saket Nagar",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXJvdXRlciI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjgiIHg9IjIiIHk9IjE0IiByeD0iMiIvPjxwYXRoIGQ9Ik02LjAxIDE4SDYiLz48cGF0aCBkPSJNMTAuMDEgMThIMTAiLz48cGF0aCBkPSJNMTUgMTB2NCIvPjxwYXRoIGQ9Ik0xNy44NCA3LjE3YTQgNCAwIDAgMC01LjY2IDAiLz48cGF0aCBkPSJNMjAuNjYgNC4zNGE4IDggMCAwIDAtMTEuMzEgMCIvPjwvc3ZnPg==",
    },
    {
      name: "Govind Nagar",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvZmZlZSI+PHBhdGggZD0iTTE3IDhoMWE0IDQgMCAxIDEgMCA4aC0xIi8+PHBhdGggZD0iTTMgOGgxNHY5YTQgNCAwIDAgMS00IDRIN2E0IDQgMCAwIDEtNC00WiIvPjxsaW5lIHgxPSI2IiB4Mj0iNiIgeTE9IjIiIHkyPSI0Ii8+PGxpbmUgeDE9IjEwIiB4Mj0iMTAiIHkxPSIyIiB5Mj0iNCIvPjxsaW5lIHgxPSIxNCIgeDI9IjE0IiB5MT0iMiIgeTI9IjQiLz48L3N2Zz4=",
    },
    {
      name: "Awas Vikas",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXR2Ij48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTUiIHg9IjIiIHk9IjciIHJ4PSIyIiByeT0iMiIvPjxwb2x5bGluZSBwb2ludHM9IjE3IDIgMTIgNyA3IDIiLz48L3N2Zz4=",
    },
    {
      name: "Jajmau",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWRyaWJiYmxlIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik0xOS4xMyA1LjA5QzE1LjIyIDkuMTQgMTAgMTAuNDQgMi4yNSAxMC45NCIvPjxwYXRoIGQ9Ik0yMS43NSAxMi44NGMtNi42Mi0xLjQxLTEyLjE0IDEtMTYuMzggNi4zMiIvPjxwYXRoIGQ9Ik04LjU2IDIuNzVjNC4zNyA2IDYgOS40MiA4IDE3LjcyIi8+PC9zdmc+",
    },
    {
      name: "Barra",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdpbmUiPjxwYXRoIGQ9Ik04IDIyaDgiLz48cGF0aCBkPSJNNyAxMGgxMCIvPjxwYXRoIGQ9Ik0xMiAxNXY3Ii8+PHBhdGggZD0iTTEyIDE1YTUgNSAwIDAgMCA1LTVjMC0yLS41LTQtMi04SDljLTEuNSA0LTIgNi0yIDhhNSA1IDAgMCAwIDUgNVoiLz48L3N2Zz4=",
    },
  
    {
      name: "Azad Nagar",
      icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJpa2UiPjxjaXJjbGUgY3g9IjE4LjUiIGN5PSIxNy41IiByPSIzLjUiLz48Y2lyY2xlIGN4PSI1LjUiIGN5PSIxNy41IiByPSIzLjUiLz48Y2lyY2xlIGN4PSIxNSIgY3k9IjUiIHI9IjEiLz48cGF0aCBkPSJNMTIgMTcuNVYxNGwtMy0zIDQtMyAyIDNoMiIvPjwvc3ZnPg==",
    },
  ];