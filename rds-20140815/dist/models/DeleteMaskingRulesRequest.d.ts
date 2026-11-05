import * as $dara from '@darabonba/typescript';
export declare class DeleteMaskingRulesRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-t4n8t18o******6d5
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
     * The name of the rule to delete.
     *
     * This parameter is required.
     *
     * @example
     * test
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
