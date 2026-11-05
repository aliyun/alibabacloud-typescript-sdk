import * as $dara from '@darabonba/typescript';
export declare class DescribeMaskingRulesRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the instance.
     *
     * This parameter is required.
     *
     * @example
     * rm-t4n8t18o******5
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The name of the database.
     *
     * @example
     * myDB
     */
    DBName?: string;
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
     * The names of the rules, separated by commas.
     *
     * @example
     * test1,test2
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
