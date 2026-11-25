import * as $dara from '@darabonba/typescript';
export declare class GetAppPluginConfigResponseBodyModule extends $dara.Model {
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
     * The creation time.
     *
     * @example
     * 1740479834
     */
    gmtCreate?: string;
    /**
     * @remarks
     * The update time.
     *
     * @example
     * 2025-08-28T02:25:41Z
     */
    gmtModified?: string;
    /**
     * @remarks
     * The primary key.
     *
     * @example
     * 16257
     */
    id?: number;
    /**
     * @remarks
     * The specific component configuration in JSON string format. Refer to the toJsonString method of the subclasses of the com.alibaba.dataphin.pipeline.common.facade.openapi.model.plugin.OABasePluginConfig utility class. Developers must inherit this component configuration class to implement the corresponding component configuration. Each component configuration has the same structure as the pipeline configuration created on the Dataphin page.
     *
     * @example
     * {}
     */
    pluginConfig?: string;
    /**
     * @remarks
     * The description.
     *
     * @example
     * a simple test plugin
     */
    pluginDesc?: string;
    /**
     * @remarks
     * The ID of the associated API gateway plugin.
     *
     * @example
     * 1bae9ceaceea432d91c7069fab0dfc02
     */
    pluginId?: string;
    /**
     * @remarks
     * The plugin name. It must be 4 to 50 characters in length and can contain uppercase and lowercase letters, Chinese characters, digits, and underscores (_). It cannot start with an underscore.
     *
     * @example
     * tf_testaccapigatewayplugin29311
     */
    pluginName?: string;
    /**
     * @remarks
     * The user ID.
     *
     * @example
     * 123
     */
    userId?: string;
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
export declare class GetAppPluginConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The API status code or POP error code.
     *
     * @example
     * OK
     */
    code?: string;
    /**
     * @remarks
     * The additional information.
     *
     * @example
     * Instance `wget h33E1En5.popscan.xaliyun.com` does not exist.
     */
    message?: string;
    /**
     * @remarks
     * The response data.
     */
    module?: GetAppPluginConfigResponseBodyModule;
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 6C6B99AC-39EC-5350-874C-204128C905E6
     */
    requestId?: string;
    /**
     * @remarks
     * Indicates whether the request is successful.
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
