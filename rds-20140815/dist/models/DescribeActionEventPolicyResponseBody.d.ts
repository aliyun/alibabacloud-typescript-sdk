import * as $dara from '@darabonba/typescript';
export declare class DescribeActionEventPolicyResponseBody extends $dara.Model {
    /**
     * @remarks
     * The status of the historical events feature.
     *
     * @example
     * True
     */
    enableEventLog?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-hangzhou
     */
    regionId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * CCECD3CD-AB2D-4F6D-BEDE-47BC90A398D2
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
