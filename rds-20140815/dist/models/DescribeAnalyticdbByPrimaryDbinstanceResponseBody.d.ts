import * as $dara from '@darabonba/typescript';
export declare class DescribeAnalyticdbByPrimaryDBInstanceResponseBody extends $dara.Model {
    /**
     * @remarks
     * The number of associated analytical instances.
     *
     * @example
     * 0
     */
    analyticDBCount?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 77862BFF-ED59-552A-A2E8-692FEAFC9527
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
