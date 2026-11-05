import * as $dara from '@darabonba/typescript';
export declare class LoginPolarClawChannelRequest extends $dara.Model {
    /**
     * @remarks
     * The application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The ID of the PolarClaw channel to log into.
     *
     * This parameter is required.
     *
     * @example
     * openclaw-weixin
     */
    channelId?: string;
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
