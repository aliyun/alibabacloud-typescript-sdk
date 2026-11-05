import * as $dara from '@darabonba/typescript';
export declare class OperateSupabaseForAdminRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * This parameter is required.
     *
     * @example
     * WS20250801154628000001
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
     * The SQL statement.
     *
     * @example
     * select * from profiles
     */
    executeSql?: string;
    /**
     * @remarks
     * The operation type.
     *
     * @example
     * vul_fix
     */
    operateType?: string;
    /**
     * @remarks
     * The ORDER BY clause.
     *
     * @example
     * null
     */
    orderByClause?: string;
    /**
     * @remarks
     * The sort field.
     *
     * @example
     * CreationTime
     */
    orderColumn?: string;
    /**
     * @remarks
     * The sort type. Valid values: ASC and DESC.
     *
     * @example
     * DESC
     */
    orderType?: string;
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
     * The page size.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The table name.
     *
     * @example
     * default.ai_advertising_material_rec_train_v1103
     */
    tableName?: string;
    /**
     * @remarks
     * The user ID.
     *
     * @example
     * 111
     */
    userId?: string;
    /**
     * @remarks
     * The WHERE clause.
     *
     * @example
     * null
     */
    whereClause?: string;
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
