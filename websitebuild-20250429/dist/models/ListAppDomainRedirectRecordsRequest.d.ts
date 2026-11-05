import * as $dara from '@darabonba/typescript';
export declare class ListAppDomainRedirectRecordsRequest extends $dara.Model {
    /**
     * @remarks
     * The business ID of the application instance.
     *
     * @example
     * WD20250703155602000001
     */
    bizId?: string;
    /**
     * @remarks
     * The maximum number of results to return per query.
     *
     * Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 1
     */
    maxResults?: number;
    /**
     * @remarks
     * The token used to start the next query. This parameter is empty if no next query is available.
     *
     * @example
     * yPkgBbQln0gmUnIZSGizGw==
     */
    nextToken?: string;
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
