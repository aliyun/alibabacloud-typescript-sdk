import * as $dara from '@darabonba/typescript';
export declare class ListMcpToolsRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of results to return per request. Default value: 10. Maximum value: 100.
     *
     * @example
     * 6
     */
    maxResults?: number;
    /**
     * @remarks
     * The pagination token.
     *
     * @example
     * 2
     */
    nextToken?: string;
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
