import * as $dara from '@darabonba/typescript';
export declare class ListAppSecretIdsResponseBodyAppSecretsAppSecret extends $dara.Model {
    appId?: string;
    appSecretId?: string;
    createDate?: string;
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
export declare class ListAppSecretIdsResponseBodyAppSecrets extends $dara.Model {
    appSecret?: ListAppSecretIdsResponseBodyAppSecretsAppSecret[];
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
export declare class ListAppSecretIdsResponseBody extends $dara.Model {
    appSecrets?: ListAppSecretIdsResponseBodyAppSecrets;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 5F2FD500-7173-47D6-BD2F-EB60879B4F16
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
