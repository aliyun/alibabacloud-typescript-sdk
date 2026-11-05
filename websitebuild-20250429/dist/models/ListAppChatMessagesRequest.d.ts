import * as $dara from '@darabonba/typescript';
export declare class ListAppChatMessagesRequest extends $dara.Model {
    /**
     * @remarks
     * The chat ID.
     *
     * @example
     * 20833ba4-d189-4c50-9a44-a6bcbda2c93b
     */
    chatId?: string;
    /**
     * @remarks
     * The conversation ID.
     *
     * @example
     * 593fe1a2-d0b4-4fde-a2b0-78ad6a438d41
     */
    conversationId?: string;
    /**
     * @remarks
     * The maximum number of results per query. Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The token used to start the next query. This parameter is empty if there is no next query.
     *
     * @example
     * FFh3Xqm+JgZ/U9Jyb7wdVr9LWk80Tghn5UZjbcWEVEderBcbVF+Y6PS0i8PpCL4PQZ3e0C9oEH0Asd4tJEuGtkl2WuKdiWZpEwadNydQdJPFM=
     */
    nextToken?: string;
    /**
     * @remarks
     * The section ID.
     *
     * @example
     * 169
     */
    sectionId?: string;
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
