import * as $dara from '@darabonba/typescript';
export declare class DescribeGlobalDataNetworkListRequest extends $dara.Model {
    /**
     * @remarks
     * The page number of the query results.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of records per page.
     *
     * @example
     * 30
     */
    pageSize?: number;
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
