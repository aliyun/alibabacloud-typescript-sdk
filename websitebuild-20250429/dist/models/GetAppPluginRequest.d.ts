import * as $dara from '@darabonba/typescript';
export declare class GetAppPluginRequest extends $dara.Model {
    /**
     * @remarks
     * The ID of the gateway plugin.
     *
     * @example
     * 1bae9ceaceea432d91c7069fab0dfc02
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
