import * as $dara from '@darabonba/typescript';
export declare class QuerySupabaseInstanceInfoForAdminRequest extends $dara.Model {
    /**
     * @remarks
     * The business instance ID.
     *
     * This parameter is required.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The environment identifier.
     *
     * This parameter is required.
     *
     * @example
     * staging
     */
    env?: string;
    /**
     * @remarks
     * The field used for sorting.
     *
     * @example
     * gmtCreated
     */
    orderColumn?: string;
    /**
     * @remarks
     * The sort order. Valid values: ASC and DESC.
     *
     * @example
     * ASC
     */
    orderType?: string;
    /**
     * @remarks
     * The page number. Default value: 1.
     *
     * @example
     * 1
     */
    pageNum?: number;
    /**
     * @remarks
     * The number of entries per page. Default value: 10.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The user ID.
     *
     * @example
     * 123
     */
    userId?: string;
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
