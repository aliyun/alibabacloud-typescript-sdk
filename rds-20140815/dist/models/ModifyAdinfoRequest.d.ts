import * as $dara from '@darabonba/typescript';
export declare class ModifyADInfoRequest extends $dara.Model {
    /**
     * @remarks
     * The username of the Active Directory (AD) domain.
     *
     * @example
     * test_account
     */
    ADAccountName?: string;
    /**
     * @remarks
     * The Domain Name System (DNS) name of the Active Directory (AD) domain.
     *
     * @example
     * example.com
     */
    ADDNS?: string;
    /**
     * @remarks
     * The password of the Active Directory (AD) domain.
     *
     * @example
     * test_password
     */
    ADPassword?: string;
    /**
     * @remarks
     * The IP address of the Active Directory (AD) domain.
     *
     * @example
     * 47.100.XX.XX
     */
    ADServerIpAddress?: string;
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and can be up to 64 ASCII characters in length. The value cannot contain non-ASCII characters.
     *
     * @example
     * ETnLKlblzczshOTUbOCz****
     */
    clientToken?: string;
    /**
     * @remarks
     * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * rm-uf6wjk5****
     */
    DBInstanceId?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the DescribeRegions operation to query the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
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
