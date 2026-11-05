import * as $dara from '@darabonba/typescript';
export declare class ListPromotionActivitiesForPartnerRequest extends $dara.Model {
    /**
     * @remarks
     * The channel.
     *
     * @example
     * WECHAT
     */
    channel?: string;
    /**
     * @remarks
     * The employee code.
     *
     * @example
     * 1234
     */
    employeeCode?: string;
    /**
     * @remarks
     * The number of entries per query.
     *
     * Valid values: 10 to 100. Default value: 20.
     *
     * @example
     * 10
     */
    maxResults?: number;
    /**
     * @remarks
     * The token for the next query. This parameter is empty if no more results exist.
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
