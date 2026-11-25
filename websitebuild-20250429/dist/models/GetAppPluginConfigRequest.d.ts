import * as $dara from '@darabonba/typescript';
export declare class GetAppPluginConfigRequest extends $dara.Model {
    /**
     * @remarks
     * The customer business ID.
     *
     * This parameter is required.
     *
     * @example
     * WS20250801154628000001
     */
    bizId?: string;
    /**
     * @remarks
     * The gateway plugin ID.
     *
     * This parameter is required.
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
