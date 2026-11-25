import * as $dara from '@darabonba/typescript';
export declare class CreateAIStaffChatRequestMessages extends $dara.Model {
    /**
     * @remarks
     * The message content.
     *
     * @example
     * {\"CodeRevision\": \"1750040991876284109\"}
     */
    content?: string;
    /**
     * @remarks
     * The content type.
     *
     * @example
     * application/octet-stream
     */
    contentType?: string;
    /**
     * @remarks
     * The business extension metadata in map format. The value must be a JSON string.
     *
     * @example
     * {}
     */
    metaData?: {
        [key: string]: string;
    };
    /**
     * @remarks
     * The conversation role.
     *
     * @example
     * polarx_dn
     */
    role?: string;
    /**
     * @remarks
     * The file type.
     *
     * @example
     * risk
     */
    type?: string;
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
export declare class CreateAIStaffChatRequest extends $dara.Model {
    /**
     * @remarks
     * The site ID.
     *
     * @example
     * WS20250801154628000001
     */
    bizId?: string;
    /**
     * @remarks
     * The chat ID. Pass this parameter when resuming from an interruption.
     *
     * @example
     * 3b465fe1-6f06-4899-af9f-d43d9338df25
     */
    chatId?: string;
    /**
     * @remarks
     * The conversation ID.
     *
     * @example
     * 5b7105a2-2999-430b-ba23-ba09149d5434
     */
    conversationId?: string;
    /**
     * @remarks
     * The list of conversation messages.
     */
    messages?: CreateAIStaffChatRequestMessages[];
    /**
     * @remarks
     * The additional conversation information.
     *
     * @example
     * {}
     */
    metaData?: {
        [key: string]: string;
    };
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
