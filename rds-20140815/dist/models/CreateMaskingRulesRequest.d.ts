import * as $dara from '@darabonba/typescript';
export declare class CreateMaskingRulesRequestRuleConfig extends $dara.Model {
    /**
     * @remarks
     * The list of columns.
     */
    columns?: string[];
    /**
     * @remarks
     * The list of databases.
     */
    databases?: string[];
    /**
     * @remarks
     * The list of tables.
     */
    tables?: string[];
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
export declare class CreateMaskingRulesRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-t4n8t18o3*****d5
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The name of the database.
     *
     * @example
     * testdb
     */
    DBName?: string;
    /**
     * @remarks
     * The name of the default encryption or masking algorithm.
     *
     * @example
     * aes-128-gcm
     */
    defaultAlgo?: string;
    /**
     * @remarks
     * The rule algorithm. You can specify multiple algorithms. Additional parameters can be added for masking algorithms. Format: {name: Algorithm 1}, {name: Algorithm 2, params: {encryption position, number of encrypted digits}}.
     *
     * @example
     * [{"name": "aes-128-gcm"},
     *         {"name":"sm4-128-gcm"}]
     */
    maskingAlgo?: string;
    ownerId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * ap-southeast-1
     */
    regionId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The rule configuration. The value is a JSON string that contains the matching rules for databases, tables, and columns.
     */
    ruleConfig?: CreateMaskingRulesRequestRuleConfig;
    /**
     * @remarks
     * The name of the rule. Only one rule name can be specified at a time.
     *
     * This parameter is required.
     *
     * @example
     * rulename1
     */
    ruleName?: string;
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
