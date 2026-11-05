import * as $dara from '@darabonba/typescript';
export declare class GetAppSecretResponseBodyAppSecret extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * @example
     * 472457090344041****
     */
    appId?: string;
    /**
     * @remarks
     * The app secret ID.
     *
     * @example
     * 2efd5004-005c-4f05-83c6-5b1dd176****
     */
    appSecretId?: string;
    /**
     * @remarks
     * The app secret content.
     *
     * @example
     * ai78ZmmxnlUG1jXlBZRDFKos9DIjY4m17Q7dCpMwn1rqXsTGb1X1XmrmveMp****
     */
    appSecretValue?: string;
    /**
     * @remarks
     * The creation time.
     *
     * Format: RFC 3339 (UTC). Example: 2020-10-26T02:52:31Z.
     *
     * @example
     * 2020-10-26T02:52:31Z
     */
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
export declare class GetAppSecretResponseBody extends $dara.Model {
    /**
     * @remarks
     * The app secret information.
     */
    appSecret?: GetAppSecretResponseBodyAppSecret;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * EE46FC3C-3BDE-4771-B531-27B7B6EB533D
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
