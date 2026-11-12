import * as $dara from '@darabonba/typescript';
export declare class DescribeActivationCodesRequest extends $dara.Model {
    /**
     * @remarks
     * The Alibaba Cloud order ID, including virtual orders. Usage note: Append the following to the end of the AliyunOrderId description: If an empty string is passed, all activation codes are returned. This parameter is actually optional.
     *
     * This parameter is required.
     *
     * @example
     * 2233****445566
     */
    aliyunOrderId?: string;
    /**
     * @remarks
     * The MAC address used to filter the activation codes.
     *
     * @example
     * aa:bb:cc:dd:ee:ff
     */
    macAddress?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 30
     */
    pageSize?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * The system identifier used to filter the activation codes.
     *
     * @example
     * 3312548696141831911
     */
    systemIdentifier?: string;
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
