import * as $dara from '@darabonba/typescript';
export declare class ModifyBackupSetExpireTimeResponseBody extends $dara.Model {
    /**
     * @remarks
     * The response code.
     *
     * @example
     * 200
     */
    code?: string;
    /**
     * @remarks
     * The returned fields.
     *
     * @example
     * {expectExpireTime=1752581423000, dbClusterId=rm-7xv8f2zcia0e4****, backupId=262186****}
     */
    data?: string;
    /**
     * @remarks
     * The response message.
     *
     * @example
     * success
     */
    message?: string;
    /**
     * @remarks
     * The ID of the request.
     *
     * @example
     * 76364A52-E0AB-5CC8-9818-CF1DC482C092
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request was successful. Valid values:
     *
     * - **true**: The request was successful.
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
