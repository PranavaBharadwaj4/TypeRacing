# TypeRacing
Compete with friends online to determine who is the fastest typer!
Made with minimal yet aesthetic style choices, it's the perfect way to get good at typing while tracking your score.
## This website was built using the following technologies:
1. React JS(With React Router).
2. Sass.
3. Socket.io.
4. MongoDB.
5. QuotableAPI.

## To boot the project:
1. Install the server-side node dependencies.
2. Install the client-side node dependencies.
3. Run both the server and the client.
4. Can be opened in different tabs to simulate multiple users.

## A quick walkthrough.
1. Home Page.
- User has the option to create or join a game.
<img width="1440" alt="Screenshot 2023-01-07 at 11 59 16 PM" src="https://user-images.githubusercontent.com/90324990/211166399-d8f45456-4a18-48e2-938a-3c7e1faa4dfb.png">

2. Game Creation Page.
- The user is allowed to create a gain with a unique room ID.
<img width="1440" alt="Screenshot 2023-01-07 at 11 59 39 PM" src="https://user-images.githubusercontent.com/90324990/211166414-7a673040-0034-4342-94f4-4f13371ebdff.png">

3. Game Joining Page.
 - User has to enter the unique room ID to enter a specific game room.
<img width="1440" alt="Screenshot 2023-01-08 at 12 00 17 AM" src="https://user-images.githubusercontent.com/90324990/211166439-f85ddabe-8b08-42cc-a2e0-d1240faa0545.png">

4. Pre-Game Phase.
 - Before the game starts, the host has the option of inviting other users to join the game.
 - The game starts when the host clicks on the "Start Game" button.
<img width="1440" alt="Screenshot 2023-01-08 at 12 35 17 AM" src="https://user-images.githubusercontent.com/90324990/211166595-61651dba-aa37-4bfa-97a9-e2ab20c4c339.png">

5. Game Phase.
 - After every user has joined the game room and the host starts the game, we enter this phase. 
 - The progress of each player is tracked using a cubic progress bar, each player is made aware of the progress of other players.
 - A quote provided by the QuotableAPI turns green as the words from the quote are typed correctly.
 <img width="1440" alt="Screenshot 2023-01-07 at 11 56 41 PM" src="https://user-images.githubusercontent.com/90324990/211166774-d1f89a08-6321-4c79-bd27-0b1ce4e3d7b3.png">

6. Post-Game Phase.
- The winners screen is showered with graffiti.
- The scores of the contest are displayed on every screen.

<img width="1440" alt="Screenshot 2023-01-07 at 11 58 39 PM" src="https://user-images.githubusercontent.com/90324990/211166833-ad18a8fc-03a3-4d0a-8f5d-f12a0cc6ff8f.png">
