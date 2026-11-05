import * as $dara from '@darabonba/typescript';
export declare class ListAppCommoditySpecificationsV2ForPartnerRequest extends $dara.Model {
    /**
     * @remarks
     * The number of results per query.
     *
     * Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The token for the next query. This parameter is empty when there is no next query.
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
