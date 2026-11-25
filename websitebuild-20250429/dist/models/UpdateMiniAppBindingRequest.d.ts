import * as $dara from '@darabonba/typescript';
export declare class UpdateMiniAppBindingRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WS20250801154628000001
     */
    bizId?: string;
    /**
     * @remarks
     * The channel.
     *
     * @example
     * WECHAT
     */
    channel?: string;
    /**
     * @remarks
     * The configuration key.
     *
     * @example
     * SERVER_DOMAIN
     */
    settingKey?: string;
    /**
     * @remarks
     * The configuration value.
     *
     * @example
     * {"requestDomains":[{"domain":"https://api.example.com"}],"wsRequestDomains":[],"uploadDomains":[],"downloadDomains":[],"udpDomains":[],"tcpDomains":[]}
     */
    settingValue?: string;
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
