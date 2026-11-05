import * as $dara from '@darabonba/typescript';
export declare class GetAppConversationLockStatusRequest extends $dara.Model {
    /**
     * @remarks
     * The session ID.
     *
     * @example
     * 5b7105a2-2999-430b-ba23-ba09149d5434
     */
    conversationId?: string;
    static names(): {
        [key: string]: string;
    };
    static types(): {
        [key: string]: any;
    };
    validate(): void;
    constructor(map?: {
        [key: string]: any;
    });
}
