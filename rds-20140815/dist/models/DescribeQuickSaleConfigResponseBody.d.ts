import * as $dara from '@darabonba/typescript';
export declare class DescribeQuickSaleConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The commodity code. Valid values:
     *
     * - rds: subscription
     *
     * - bards: pay-as-you-go
     *
     * @example
     * rds
     */
    commodity?: string;
    /**
     * @remarks
     * The product configuration details.
     */
    items?: {
        [key: string]: any;
    };
    /**
     * @remarks
     * Id of the request
     *
     * @example
     * 5DFFE9EC-3369-5937-A4E2-507C0C86A4C6
     */
    requestId?: string;
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
