import * as $dara from '@darabonba/typescript';
export declare class ListAppPluginVersionsRequest extends $dara.Model {
    /**
     * @remarks
     * The page number. Valid values: integers greater than 0. Default value: 1.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The ID of the gateway plug-in.
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
