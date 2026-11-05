import * as $dara from '@darabonba/typescript';
export declare class ListAppPluginFilesRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the gateway plugin.
     *
     * @example
     * aliplayer-react
     */
    pluginId?: string;
    /**
     * @remarks
     * The version number. If you do not specify this parameter, the currently active version is used.
     *
     * @example
     * 1.1.3
     */
    pluginVersion?: string;
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
