import * as $dara from '@darabonba/typescript';
export declare class ListExternalAgentsRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of entries to return per page. Valid values: 0 to 100. If this parameter is omitted or set to 0, the default value is 20.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The pagination token. You can leave this parameter empty for the first call. For subsequent calls, use the nextToken value returned in the previous response.
     *
     * @example
     * next-token-1
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
