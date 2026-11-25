import * as $dara from '@darabonba/typescript';
export declare class ListAppCommoditySpecificationsV2ForPartnerRequest extends $dara.Model {
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
     * The token used to start the next query. This value is empty if there are no more results.
     *
     * @example
     * 0l45bkwM022Dt+rOvPi/oQ==
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
