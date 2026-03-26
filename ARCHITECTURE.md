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
## 6. The Vetted Gateway & Clear-Sign Engine
To eliminate the "Trust Gap" in Web3, the Syndicate Suite includes a native, curated dApp browser.
* **The Sandbox:** The integrated browser only interacts with a whitelist of "Syndicate-Vetted" Smart Contract IDs.
* **Human-Readable Signing:** Every transaction includes a "Pre-Flight" simulation. Instead of complex hex code, users see a clear summary: "You are swapping 100 SUI for 3,400 JUICY."
* **Security Sentinels:** Parrot OS nodes monitor the real-time health of integrated apps, automatically flagging suspicious state changes.

## 7. Temporal Data Management (Self-Destruct)
Privacy is enforced through time-based logic, moving beyond traditional "permanent" blockchain storage.
* **24-Hour Detonation:** High-sensitivity SuiMail objects are programmed with a 24-hour TTL (Time-To-Live). Upon expiration, the Move contract revokes access keys and triggers a deletion command for the associated Walrus Blob.
* **Auto-Purge (15/30 Days):** Users can toggle automated "Digital Hygiene" for non-essential business data, leveraging Walrus’s native deletability to reduce storage costs.

## 8. Economic Engine: Juicy Coin ($JUICY)
The Suite is fueled by a hyper-deflationary economy designed to reward "Diamond Hand" long-term holders.
* **Hyper-Deflationary Logic:** A 2% Burn Tax is hard-coded into the Move transfer function. 2% of every transaction is permanently destroyed, reducing the 1 Billion hard-cap supply over time.
* **The Juicy Elite NFT Collection:** 200 unique assets (20 Rare / 180 Standard) launched on BlueMove to fund initial liquidity.
    * **The Rare 20:** Holders receive a 2x "Bonus Rate" multiplier on $JUICY staking rewards.
* **Liquidity Guarantee:** 100% of the $20,000 NFT mint proceeds are locked into the SUI/JUICY liquidity pool with LP keys burned, ensuring a permanent, rug-proof exchange for all users.
