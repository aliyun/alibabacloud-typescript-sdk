import * as $dara from '@darabonba/typescript';
export declare class DescribeApplicationUsageRequest extends $dara.Model {
    /**
     * @remarks
     * The Hermes application ID.
     *
     * This parameter is required.
     *
     * @example
     * pa-123456
     */
    applicationId?: string;
    /**
     * @remarks
     * The number of recent days to query. Valid values: 1 to 365. Default value: 30.
     *
     * @example
     * 30
     */
    days?: number;
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
