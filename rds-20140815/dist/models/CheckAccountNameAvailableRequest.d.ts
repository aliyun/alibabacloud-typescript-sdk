import * as $dara from '@darabonba/typescript';
export declare class CheckAccountNameAvailableRequest extends $dara.Model {
    /**
     * @remarks
     * The name of the account that you want to create.
     *
     * This parameter is required.
     *
     * @example
     * DatabaseTest
     */
    accountName?: string;
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
     *
     * @example
     * ETnLKlblzczshOTUbOCz****
     */
    clientToken?: string;
    /**
     * @remarks
     * The instance ID. You can call DescribeDBInstances to query the instance ID.
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
