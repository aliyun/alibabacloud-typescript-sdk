import * as $dara from '@darabonba/typescript';
export declare class EnablePolarClawPluginRequest extends $dara.Model {
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
     * The ID of the plugin to enable.
     *
     * This parameter is required.
     *
     * @example
     * openclaw-lark
     */
    pluginId?: string;
    /**
     * @remarks
     * Indicates whether to restart the gateway after the plugin is enabled. Default value: `true`.
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
