import * as $dara from '@darabonba/typescript';
export declare class DeleteAccountRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the database account that you want to delete.
     *
     * This parameter is required.
     *
     * @example
     * test1
     */
    accountName?: string;
    /**
     * @remarks
     * The instance ID. You can call DescribeDBInstances to obtain the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    ownerAccount?: string;
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
