import * as $dara from '@darabonba/typescript';
export declare class PrecheckDuckDBDependencyResponseBodyFailedCheckItems extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the issue can be fixed with one click.
     *
     * - **true**: Yes. You can call the [ModifyDBInstanceConfig](https://help.aliyun.com/document_detail/2623684.html) operation to fix the issue with one click.
     * - **false**: No.
     *
     *
     * >Notice: If the major version of the database instance does not meet the requirements, you must [manually upgrade](https://help.aliyun.com/document_detail/2623684.html) the major version.
     *
     * @example
     * false
     */
    allowAutoModify?: boolean;
    /**
     * @remarks
     * The current value of the check item.
     *
     * @example
     * 15.0
     */
    currentValue?: string;
    /**
     * @remarks
     * The name of the check item.
     *
     * @example
     * MajorVersion
     */
    name?: string;
    /**
     * @remarks
     * The target value or target range of the check item.
     *
     * @example
     * 17.0
     */
    requiredValue?: string;
    /**
     * @remarks
     * The check item. Valid values:
     *
     * - **Parameter**: parameter.
     * - **MinorVersion**: minor engine version.
     * - **MajorVersion**: major database version.
     *
     * @example
     * Parameter
     */
    type?: string;
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
export declare class PrecheckDuckDBDependencyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The check items that do not meet the prerequisites for creating a DuckDB-based analytical instance.
     */
    failedCheckItems?: PrecheckDuckDBDependencyResponseBodyFailedCheckItems[];
    /**
     * @remarks
     * Indicates whether the precheck for creating a DuckDB-based analytical instance is passed. Valid values:
     *
     * - **true**: Yes.
     * - **false**: No.
     *
     * @example
     * false
     */
    result?: boolean;
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
