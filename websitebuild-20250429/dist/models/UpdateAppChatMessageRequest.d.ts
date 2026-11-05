import * as $dara from '@darabonba/typescript';
export declare class UpdateAppChatMessageRequest extends $dara.Model {
    /**
     * @remarks
     * The appended message metadata in JSON format.
     *
     * @example
     * 123
     */
    addedMetaData?: string;
    /**
     * @remarks
     * The message content.
     *
     * @example
     * FormatVersion: OOS-2019-06-01nTasks:n  - Name: runCommandn    Action: \\"ACS::ECS::RunCommand\\"n    Properties:n      commandContent: \\" echo Hksqj@@883289
     */
    content?: string;
    /**
     * @remarks
     * The conversation ID.
     *
     * @example
     * 81bc5a34-1d8d-4ef7-a208-7401c51b054b
     */
    conversationId?: string;
    /**
     * @remarks
     * The message ID.
     *
     * @example
     * 7baf7d67-1897-42ed-a380-f6ae825d6907
     */
    messageId?: string;
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
