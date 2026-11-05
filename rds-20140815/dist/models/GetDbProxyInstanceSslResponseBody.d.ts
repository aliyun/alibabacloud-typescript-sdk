import * as $dara from '@darabonba/typescript';
export declare class GetDbProxyInstanceSslResponseBodyDbProxyCertListItemsDbProxyCertListItems extends $dara.Model {
    certCommonName?: string;
    dbInstanceName?: string;
    endpointName?: string;
    endpointType?: string;
    sslExpiredTime?: string;
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
export declare class GetDbProxyInstanceSslResponseBodyDbProxyCertListItems extends $dara.Model {
    dbProxyCertListItems?: GetDbProxyInstanceSslResponseBodyDbProxyCertListItemsDbProxyCertListItems[];
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
export declare class GetDbProxyInstanceSslResponseBody extends $dara.Model {
    dbProxyCertListItems?: GetDbProxyInstanceSslResponseBodyDbProxyCertListItems;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * D330E60C-8AAA-4D63-8F64-5B78F4692F98
     */
    requestId?: string;
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
