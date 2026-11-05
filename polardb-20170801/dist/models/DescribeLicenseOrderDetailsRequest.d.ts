import * as $dara from '@darabonba/typescript';
export declare class DescribeLicenseOrderDetailsRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the Alibaba Cloud order or virtual order.
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
