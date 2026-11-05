import * as $dara from '@darabonba/typescript';
export declare class GetAppDatabaseTableSchemasRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The table name.
     *
     * @example
     * default.ai_advertising_material_rec_train_v1103
     */
    tableName?: string;
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
