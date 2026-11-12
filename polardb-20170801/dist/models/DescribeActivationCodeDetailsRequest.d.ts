import * as $dara from '@darabonba/typescript';
export declare class DescribeActivationCodeDetailsRequest extends $dara.Model {
    /**
     * @remarks
     * The activation code ID. This parameter is required. If it is not provided, the API returns a 400 error.
     *
     * @example
     * 123
     */
    activationCodeId?: number;
    /**
     * @remarks
     * The Alibaba Cloud order ID, including virtual orders.
     *
     * This parameter is required.
     *
     * @example
     * 2233****445566
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
