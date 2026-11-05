import * as $dara from '@darabonba/typescript';
export declare class ModifyAccountDescriptionRequest extends $dara.Model {
    /**
     * @remarks
     * The description of the account. The description must be 2 to 256 characters in length. It must start with a Chinese character or a letter and can contain digits, Chinese characters, letters, underscores (_), and hyphens (-).
     * > The description cannot start with http:// or https://.
     *
     * This parameter is required.
     *
     * @example
     * testuser
     */
    accountDescription?: string;
    /**
     * @remarks
     * The account name. You can call DescribeAccounts to obtain the account name.
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
