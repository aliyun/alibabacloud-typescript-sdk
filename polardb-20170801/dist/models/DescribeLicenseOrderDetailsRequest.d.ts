import * as $dara from '@darabonba/typescript';
export declare class DescribeLicenseOrderDetailsRequest extends $dara.Model {
    /**
     * @remarks
     * The Alibaba Cloud order ID or virtual order ID. You can create a virtual order by calling CreateOrGetVirtualLicenseOrder or query existing orders by calling DescribeLicenseOrders to obtain a valid AliyunOrderId. Usage note: To obtain a valid AliyunOrderId, create a virtual order by calling CreateOrGetVirtualLicenseOrder or query existing orders by calling DescribeLicenseOrders.
     *
     * This parameter is required.
     *
     * @example
     * 239618016570503
     */
    aliyunOrderId?: string;
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
