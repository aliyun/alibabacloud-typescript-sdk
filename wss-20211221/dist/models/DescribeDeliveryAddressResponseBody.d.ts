import * as $dara from '@darabonba/typescript';
export declare class DescribeDeliveryAddressResponseBodyAddressesArea extends $dara.Model {
    /**
     * @remarks
     * The district ID.
     *
     * @example
     * 33****
     */
    areaId?: number;
    /**
     * @remarks
     * The district name.
     *
     * @example
     * Xihu District
     */
    areaName?: string;
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
export declare class DescribeDeliveryAddressResponseBodyAddressesCity extends $dara.Model {
    /**
     * @remarks
     * The city ID.
     *
     * @example
     * 33****
     */
    cityId?: number;
    /**
     * @remarks
     * The city name.
     *
     * @example
     * Hangzhou
     */
    cityName?: string;
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
export declare class DescribeDeliveryAddressResponseBodyAddressesProvince extends $dara.Model {
    /**
     * @remarks
     * The province ID. For more information, see [Codes for regions, countries, and areas in China](https://help.aliyun.com/document_detail/167926.html). For example, **110000** indicates Beijing, and **120000** indicates Tianjin.
     *
     * @example
     * 330000
     */
    provinceId?: number;
    /**
     * @remarks
     * The province name.
     *
     * @example
     * Zhejiang Province
     */
    provinceName?: string;
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
export declare class DescribeDeliveryAddressResponseBodyAddressesTown extends $dara.Model {
    /**
     * @remarks
     * The town ID.
     *
     * @example
     * 3001****
     */
    townId?: number;
    /**
     * @remarks
     * The town name.
     *
     * @example
     * Sandun Town
     */
    townName?: string;
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
export declare class DescribeDeliveryAddressResponseBodyAddresses extends $dara.Model {
    /**
     * @remarks
     * The district.
     */
    area?: DescribeDeliveryAddressResponseBodyAddressesArea;
    /**
     * @remarks
     * The city.
     */
    city?: DescribeDeliveryAddressResponseBodyAddressesCity;
    /**
     * @remarks
     * The contact.
     *
     * @example
     * Alice
     */
    contacts?: string;
    /**
     * @remarks
     * Indicates whether the address is the default address.
     *
     * @example
     * true
     */
    defaultAddress?: boolean;
    /**
     * @remarks
     * The detailed address, which must be accurate down to the street and building number.
     *
     * @example
     * Test Center, Building 2, Cloud Park, No. 1008 Dengcai Street
     */
    detail?: string;
    /**
     * @remarks
     * The mobile phone number.
     *
     * @example
     * 1381111****
     */
    mobile?: string;
    /**
     * @remarks
     * The postal code.
     *
     * @example
     * 03****
     */
    postalCode?: string;
    /**
     * @remarks
     * The province.
     */
    province?: DescribeDeliveryAddressResponseBodyAddressesProvince;
    /**
     * @remarks
     * The town.
     */
    town?: DescribeDeliveryAddressResponseBodyAddressesTown;
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
export declare class DescribeDeliveryAddressResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of addresses.
     */
    addresses?: DescribeDeliveryAddressResponseBodyAddresses[];
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 72481C12-69AB-5CE1-8A35-A8EFA921****
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of addresses. A maximum of 20 addresses are supported.
     *
     * @example
     * 6
     */
    totalCount?: number;
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
