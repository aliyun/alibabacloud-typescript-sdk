import * as $dara from '@darabonba/typescript';
export declare class ListMemoryStoresRequest extends $dara.Model {
    /**
     * @remarks
     * The maximum number of records per page. Default value: 10. Valid values: 1 to 100.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The pagination token for the next page.
     *
     * @example
     * eyJvZmZzZXQiOjEwfQ==
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
