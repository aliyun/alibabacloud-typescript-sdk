import * as $dara from '@darabonba/typescript';
export declare class DisablePolarClawPluginRequest extends $dara.Model {
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
     * The ID of the plug-in to disable.
     *
     * This parameter is required.
     *
     * @example
     * openclaw-lark
     */
    pluginId?: string;
    /**
     * @remarks
     * Specifies whether to restart the gateway after the plug-in is disabled. Default value: true.
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
