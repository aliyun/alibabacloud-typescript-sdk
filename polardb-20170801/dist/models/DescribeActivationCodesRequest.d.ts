import * as $dara from '@darabonba/typescript';
export declare class DescribeActivationCodesRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the Alibaba Cloud order (including virtual orders) used to purchase the activation codes.
     *
     * This parameter is required.
     *
     * @example
     * 2233****445566
     */
    aliyunOrderId?: string;
    /**
     * @remarks
     * Filters the list to return only the activation code matching the specified MAC address.
     *
     * @example
     * aa:bb:cc:dd:ee:ff
     */
    macAddress?: string;
    ownerAccount?: string;
    ownerId?: number;
    /**
     * @remarks
     * Page number
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * Number of records to return per page
     *
     * @example
     * 30
     */
    pageSize?: number;
    resourceOwnerAccount?: string;
    resourceOwnerId?: number;
    /**
     * @remarks
     * Filters the list to return only the activation code matching the specified system identifier.
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
