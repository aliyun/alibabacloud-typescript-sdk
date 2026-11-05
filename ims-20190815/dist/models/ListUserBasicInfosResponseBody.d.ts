import * as $dara from '@darabonba/typescript';
export declare class ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfo extends $dara.Model {
    displayName?: string;
    status?: string;
    userId?: string;
    userPrincipalName?: string;
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
export declare class ListUserBasicInfosResponseBodyUserBasicInfos extends $dara.Model {
    userBasicInfo?: ListUserBasicInfosResponseBodyUserBasicInfosUserBasicInfo[];
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
export declare class ListUserBasicInfosResponseBody extends $dara.Model {
    /**
     * @remarks
     * Indicates whether the response is truncated. Valid values:
     *
     * - true
     *
     * - false
     *
     * @example
     * true
     */
    isTruncated?: boolean;
    /**
     * @remarks
     * The `marker`. This parameter is returned only if the value of `IsTruncated` is `true`. If the parameter is returned, you can call this operation again and set this parameter to obtain the truncated part.\\`\\`
     *
     * @example
     * EXAMPLE
     */
    marker?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * EF2B25FD-CADE-445B-BE4D-E082E0FF1A0F
     */
    requestId?: string;
    userBasicInfos?: ListUserBasicInfosResponseBodyUserBasicInfos;
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
