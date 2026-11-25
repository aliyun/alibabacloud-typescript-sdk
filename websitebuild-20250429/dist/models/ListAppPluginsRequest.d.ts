import * as $dara from '@darabonba/typescript';
export declare class ListAppPluginsRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID of the application instance.
     *
     * @example
     * WD20250820143531000001
     */
    bizId?: string;
    /**
     * @remarks
     * The maximum number of results to return per query. Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The token used to start the next query. If no next query is available, this parameter is empty.
     *
     * @example
     * 0l45bkwM022Dt+rOvPi/oQ==
     */
    nextToken?: string;
    /**
     * @remarks
     * The status of the Dataset Accelerator instance. Valid values:
     * - Created: Initialized.
     * - Running: Running.
     * - Stopped: Stopped.
     *
     * @example
     * http_whitelist
     */
    phase?: string;
    /**
     * @remarks
     * The platform.
     *
     * @example
     * linux/amd64
     */
    platform?: string;
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
