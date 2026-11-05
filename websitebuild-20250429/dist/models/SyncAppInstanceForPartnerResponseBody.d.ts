import * as $dara from '@darabonba/typescript';
export declare class SyncAppInstanceForPartnerResponseBodyDataAppInstance extends $dara.Model {
    /**
     * @remarks
     * The customer business ID.
     *
     * @example
     * WD20250626114752000001
     */
    bizId?: string;
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
export declare class SyncAppInstanceForPartnerResponseBodyData extends $dara.Model {
    /**
     * @remarks
     * The website instance information.
     */
    appInstance?: SyncAppInstanceForPartnerResponseBodyDataAppInstance;
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
export declare class SyncAppInstanceForPartnerResponseBody extends $dara.Model {
    /**
     * @remarks
     * The request result.
     */
    data?: SyncAppInstanceForPartnerResponseBodyData;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 6C6B99AC-39EC-5350-874C-204128C905E6
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
