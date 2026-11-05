import * as $dara from '@darabonba/typescript';
export declare class CreateAppLlmApiKeyForPartnerRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID of the application instance.
     *
     * @example
     * WD20250814102215000001
     */
    bizId?: string;
    /**
     * @remarks
     * The idempotency token. This parameter is reserved for future use.
     *
     * @example
     * xxxxx-xxxx
     */
    clientToken?: string;
    /**
     * @remarks
     * The description of the API key usage.
     *
     * @example
     * success
     */
    description?: string;
    /**
     * @remarks
     * The custom IP address whitelist defined by the invoker. The system default IP ranges are appended by the backend.
     */
    ipWhiteList?: string[];
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
