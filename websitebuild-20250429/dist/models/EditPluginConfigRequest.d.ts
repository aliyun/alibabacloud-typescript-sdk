import * as $dara from '@darabonba/typescript';
export declare class EditPluginConfigRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The plug-in configuration.
     *
     * @example
     * {}
     */
    pluginConfig?: string;
    /**
     * @remarks
     * The plug-in description.
     *
     * @example
     * Query relevant GitHub repositories based on keywords
     */
    pluginDesc?: string;
    /**
     * @remarks
     * The plug-in ID.
     *
     * @example
     * aliplayer-react
     */
    pluginId?: string;
    /**
     * @remarks
     * The plug-in name.
     *
     * @example
     * alisecguard
     */
    pluginName?: string;
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
