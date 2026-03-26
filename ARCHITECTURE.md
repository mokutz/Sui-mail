ARCHITECTURE.md: The Syndicate Suite & SuiMail
1. Executive Vision
The Syndicate Suite is a decentralized alternative to traditional office productivity tools (Legacy Email, Sheets, Forms, Slides). By leveraging Sui’s object-centric data model, we transform "data rows" into "owned assets," giving users true sovereignty over their digital professional life.

2. Technical Stack
Smart Contracts: Sui Move (Logic, Ownership, & Permissions)

Blob Storage: Walrus Protocol (Large media, attachments, and document states)

Identity: Sui zkLogin (Web2-to-Web3 onboarding)

Frontend: React / JavaScript (The "Command Desk" interface)

Connectivity: Sui TypeScript SDK & Programmable Transaction Blocks (PTBs)

3. Core Components
A. SuiMail: The Sovereign Communication Layer
Unlike traditional email, SuiMail treats each message as a Sui Object.

Logic: Messages are minted as non-transferable objects until "delivered."

Storage: The message body and attachments are stored as Walrus Blobs. Only the BlobID and metadata live on-chain.

Privacy: End-to-end encryption using Sui’s native cryptographic primitives.

B. The Legacy Protocol (Dead Man's Switch)
A specialized Move module designed for data and asset inheritance.

Function: A programmable timer (3, 5, or 7 years) that monitors account activity.

Trigger: If the switch is not "checked-in" by the owner, ownership of the SuiMail objects and linked assets is automatically transferred to a designated "Next-of-Kin" address.

C. SuiSheets & SuiSuite
Expanding the communication layer into a collaborative office environment.

SuiSheets: Utilizes Dynamic Fields in Move to allow cell-level updates without rewriting the entire document object.

SuiForms: Uses zkLogin to allow anonymous, verified data collection where form responses are encrypted objects.

SuiSlides: Presentations stored on Walrus, where access is controlled by Sui Kiosks (allowing for gated or "pay-per-view" professional content).

4. Data Flow & Security
Authentication: User logs in via zkLogin (Google/Twitch/Apple), removing the friction of seed phrases.

Creation: When a document or email is created, the heavy data is sharded and stored on Walrus.

On-Chain Reference: A Sui Object is created containing the Walrus BlobID.

Execution: IronClaw sentinels ensure that transaction execution is hardware-authenticated, protecting against unauthorized access.

Traffic: Parrot OS nodes act as read-only sentinels to anonymize traffic and audit network health.

5. Development Roadmap
Phase 1 (Current): Core Move modules for SuiMail and Legacy Protocol (Testnet).

Phase 2: Integration of Walrus Protocol for multi-media attachments.

Phase 3: Beta launch of SuiSheets and SuiForms with collaborative "Command Desk" UI.
