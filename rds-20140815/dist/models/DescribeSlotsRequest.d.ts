import * as $dara from '@darabonba/typescript';
export declare class DescribeSlotsRequest extends $dara.Model {
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request. You can generate the token on your client. Make sure that the token is unique among different requests. The ClientToken parameter supports only ASCII characters.
     *
     * @example
     * ETnLKlblzczshOTUbOC****
     */
    clientToken?: string;
    /**
     * @remarks
     * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
     *
     * This parameter is required.
     *
     * @example
     * pgm-bp102g323jd4****
     */
    DBInstanceId?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The resource group ID. This parameter can be left empty.
     *
     * @example
     * rg-acfmy****
     */
    resourceGroupId?: string;
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
