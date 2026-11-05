import * as $dara from '@darabonba/typescript';
export declare class UpdateAppPluginRequest extends $dara.Model {
    /**
     * @remarks
     * The category.
     *
     * @example
     * DataManagement
     */
    category?: string;
    /**
     * @remarks
     * The configuration form in React JSON Schema format.
     *
     * @example
     * ***
     */
    configItems?: string;
    /**
     * @remarks
     * The description of the application.
     *
     * @example
     * myapp
     */
    description?: string;
    /**
     * @remarks
     * The additional extension information in JSON format for subsequent parameter extensions.
     *
     * @example
     * {}
     */
    extend?: string;
    /**
     * @remarks
     * The hook definitions.
     *
     * @example
     * []
     */
    hooks?: string;
    /**
     * @remarks
     * The description of the plugin.
     *
     * @example
     * https://img.alicdn.com/imgextra/i4/O1CN01ANcLnQ1bCX7tZPVMJ_!!6000000003429-2-tps-100-100.png
     */
    icon?: string;
    /**
     * @remarks
     * The ID of the gateway plugin.
     *
     * @example
     * 1bae9ceaceea432d91c7069fab0dfc02
     */
    pluginId?: string;
    /**
     * @remarks
     * The name of the plugin.
     *
     * @example
     * alisecguard
     */
    pluginName?: string;
    /**
     * @remarks
     * The plugin version.
     *
     * @example
     * v2
     */
    pluginVersion?: string;
    /**
     * @remarks
     * The skill header information for model selection.
     *
     * @example
     * {}
     */
    skillHeader?: string;
    /**
     * @remarks
     * The tags.
     *
     * @example
     * []
     */
    tags?: string;
    /**
     * @remarks
     * The visibility.
     *
     * @example
     * private
     */
    visibility?: string;
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
