import * as $dara from '@darabonba/typescript';
export declare class DescribeDBInstanceAttributeRequest extends $dara.Model {
    /**
     * @remarks
     * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
     * >Warning: Do not specify multiple instance IDs for batch queries. Otherwise, the query times out and fails.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    /**
     * @remarks
     * The expiration status of the instance. Valid values:
     *
     * * **True**: The instance has expired.
     * * **False**: The instance has not expired.
     *
     * @example
     * False
     */
    expired?: string;
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
