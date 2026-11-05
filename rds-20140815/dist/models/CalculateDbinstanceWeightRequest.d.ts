import * as $dara from '@darabonba/typescript';
export declare class CalculateDBInstanceWeightRequest extends $dara.Model {
    /**
     * @remarks
     * Instance ID of the primary instance. You can call the DescribeDBInstances operation to query instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    resourceOwnerId?: number;
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
