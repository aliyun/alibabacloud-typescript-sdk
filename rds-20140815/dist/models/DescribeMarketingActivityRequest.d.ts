import * as $dara from '@darabonba/typescript';
export declare class DescribeMarketingActivityRequest extends $dara.Model {
    /**
     * @remarks
     * The Alibaba Cloud account ID.
     *
     * This parameter is required.
     *
     * @example
     * 20725049
     */
    aliUid?: number;
    /**
     * @remarks
     * - China site: 26842
     * - International site: 26888
     *
     * @example
     * 26842
     */
    bid?: string;
    /**
     * @remarks
     * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
     *
     * @example
     * ETnLKlblzczshOTUbOCzxxxxxxx
     */
    clientToken?: string;
    ownerId?: number;
    /**
     * @remarks
     * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/26243.html) operation to query the region ID.
     *
     * This parameter is required.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The resource group ID.
     *
     * @example
     * rg-acfmy*****
     */
    resourceGroupId?: string;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The product name.
     *
     * This parameter is required.
     *
     * @example
     * series
     */
    upgradeCode?: string;
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
