import * as $dara from '@darabonba/typescript';
export declare class ModifyEncryptionDBSecretResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-***************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The message returned for the request.
     * >If the request is successful, **Successful** is returned. If the request fails, an error message such as an error code is returned.
     *
     * @example
     * Successful
     */
    message?: string;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 4CE6DF97-AEA4-484F-906F-C407EE******
     */
    requestId?: string;
    /**
     * @remarks
     * The result of the request. Valid values:
     *
     * - **true**: The request is successful.
     *
     * - **false**: The request fails.
     *
     * @example
     * true
     */
    success?: boolean;
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
