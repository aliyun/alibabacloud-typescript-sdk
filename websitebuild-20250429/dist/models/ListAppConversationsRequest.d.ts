import * as $dara from '@darabonba/typescript';
export declare class ListAppConversationsRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the bot.
     *
     * @example
     * Zero2
     */
    botId?: string;
    /**
     * @remarks
     * The end time for the modification in ISO 8601 format.
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
     * The token used to start the next query. If there is no next query, this parameter is empty.
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
     * The number of items per page.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The ID of the site.
     *
     * @example
     * 1168642640022064
     */
    siteId?: string;
    /**
     * @remarks
     * The start time for the modification in ISO 8601 format.
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
