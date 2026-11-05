import * as $dara from '@darabonba/typescript';
export declare class ListAppConversationsRequest extends $dara.Model {
    /**
     * @remarks
     * The bot ID.
     *
     * @example
     * Zero2
     */
    botId?: string;
    /**
     * @remarks
     * The end modification time in ISO 8601 format.
     *
     * @example
     * 20201212
     */
    endModifyTime?: string;
    /**
     * @remarks
     * The maximum number of results to return for a single query. Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The token that is used to start the next query. If no next query is available, this parameter is empty.
     *
     * @example
     * 0l45bkwM022Dt+rOvPi/oQ==
     */
    nextToken?: string;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNum?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The site ID.
     *
     * @example
     * 1168642640022064
     */
    siteId?: string;
    /**
     * @remarks
     * The start modification time in ISO 8601 format.
     *
     * @example
     * 20200101
     */
    startModifyTime?: string;
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
