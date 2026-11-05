import * as $dara from '@darabonba/typescript';
export declare class DeleteAppPluginRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the gateway plugin.
     *
     * @example
     * aliplayer-react
     */
    pluginId?: string;
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
