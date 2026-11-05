import * as $dara from '@darabonba/typescript';
export declare class EnablePolarClawChannelRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the application.
     *
     * This parameter is required.
     *
     * @example
     * pa-**************
     */
    applicationId?: string;
    /**
     * @remarks
     * The ID of the channel.
     *
     * This parameter is required.
     *
     * @example
     * feishu
     */
    channelId?: string;
    /**
     * @remarks
     * Specifies whether to restart the gateway after the channel is enabled. The default value is `true`.
     *
     * @example
     * true
     */
    restart?: boolean;
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
