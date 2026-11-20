import * as $dara from '@darabonba/typescript';
export declare class ChatMessagesShrinkRequest extends $dara.Model {
    /**
     * @remarks
     * The conversation ID.
     *
     * @example
     * fea7bdca-e848-44dd-b1ae-852472b8****
     */
    conversationId?: string;
    /**
     * @remarks
     * The event output type. Valid values: inline and separate. Default value: inline. When set to inline, tool calling invoke events, child node events, and document events are unified into the answer field of the event = message. When set to separate, tool calling invoke events, child node events, and document events have their own respective events.
     *
     * @example
     * inline
     */
    eventMode?: string;
    /**
     * @remarks
     * The list of attachments included in the current conversation round. References uploaded files by using UploadFileId.
     */
    filesShrink?: string;
    /**
     * @remarks
     * The task input.
     */
    inputsShrink?: string;
    /**
     * @remarks
     * The parent message ID.
     *
     * @example
     * 84dc9f9b-424a-404d-9c36-35e9d000****
     */
    parentMessageId?: string;
    /**
     * @remarks
     * The query content.
     *
     * @example
     * Instance rm-bp14as9914vd3**** disk usage, and whether capacity expansion is required
     */
    query?: string;
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
