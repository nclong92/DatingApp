export interface Message {
    id: number;
    senderId: number;
    senderKnowsAs: string;
    senderPhotoUrl: string;
    recipientId: number;
    recipientKnowsAs: string;
    recipientPhotoUrl: string;
    content: string;
    isRead: boolean;
    dateRead: Date;
    messageSent: Date;
}
