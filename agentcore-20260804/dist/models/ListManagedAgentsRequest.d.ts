import * as $dara from '@darabonba/typescript';
export declare class ListManagedAgentsRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of entries to return per page. Default value: 20. Valid values: 1 to 100.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The pagination token. Leave this parameter empty for the first call. For subsequent calls, use the nextToken value returned in the previous response.
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
