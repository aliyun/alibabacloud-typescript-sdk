import * as $dara from '@darabonba/typescript';
export declare class LockAccountRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the account to lock. You can lock only one account at a time.
     *
     * This parameter is required.
     *
     * @example
     * testaccount
     */
    accountName?: string;
    /**
     * @remarks
     * The instance ID. You can call DescribeDBInstances to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pgm-bp****
     */
    DBInstanceId?: string;
    ownerId?: number;
    resourceOwnerAccount?: string;
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
