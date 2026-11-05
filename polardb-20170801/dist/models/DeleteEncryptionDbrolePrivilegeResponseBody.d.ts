import * as $dara from '@darabonba/typescript';
export declare class DeleteEncryptionDBRolePrivilegeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-**************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The message returned for the request.
     *
     * > If the request is successful, `Successful` is returned. If the request fails, an error message is returned, such as an error code.
     *
     * @example
     * Successful
     */
    message?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 24A1990B-4F6E-482B-B8CB-75C612******
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful. Valid values:
     *
     * - **true**: The request was successful.
     *
     * - **false**: The request failed.
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
