import * as $dara from '@darabonba/typescript';
export declare class QuerySupabaseAuthConfigsForAdminRequest extends $dara.Model {
    /**
     * @remarks
     * The authentication type.
     *
     * This parameter is required.
     *
     * @example
     * key
     */
    authType?: string;
    /**
     * @remarks
     * The business ID.
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
     * @example
     * staging
     */
    env?: string;
    /**
     * @remarks
     * The sort field.
     *
     * @example
     * gmtCreated
     */
    orderColumn?: string;
    /**
     * @remarks
     * The sort order. Valid values: ASC, DESC.
     *
     * @example
     * DESC
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
     * 111
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
