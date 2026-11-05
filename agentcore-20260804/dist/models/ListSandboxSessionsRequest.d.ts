import * as $dara from '@darabonba/typescript';
export declare class ListSandboxSessionsRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of records per page. Default value: 20.
     *
     * @example
     * 20
     */
    maxResults?: number;
    /**
     * @remarks
     * The pagination token for querying the next page.
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
