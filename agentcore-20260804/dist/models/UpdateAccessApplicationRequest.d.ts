import * as $dara from '@darabonba/typescript';
export declare class UpdateAccessApplicationRequestBody extends $dara.Model {
    /**
     * @remarks
     * The name of the access application.
     *
     * @example
     * my-access-application
     */
    applicationName?: string;
    /**
     * @remarks
     * The list of redirect URIs.
     */
    redirectUris?: string[];
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
export declare class UpdateAccessApplicationRequest extends $dara.Model {
    /**
     * @remarks
     * The request body for updating the access application.
     *
     * This parameter is required.
     */
    body?: UpdateAccessApplicationRequestBody;
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
