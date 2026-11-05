import * as $dara from '@darabonba/typescript';
export declare class ChatMessagesTaskStopRequest extends $dara.Model {
    /**
     * @remarks
     * The unique ID of the task.
     *
     * @example
     * 09a81048-0528-4de5-9dbd-12c8a12b****
     */
    taskId?: string;
    /**
     * @remarks
     * The ContextDB workspace ID.
     *
     * @example
     * 00000000-0000-4000-8000-000000000001
     */
    workspaceId?: string;
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
