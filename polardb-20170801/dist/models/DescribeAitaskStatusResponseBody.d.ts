import * as $dara from '@darabonba/typescript';
export declare class DescribeAITaskStatusResponseBody extends $dara.Model {
    /**
     * @remarks
     * The most recently configured account name.
     *
     * @example
     * testacc
     */
    accountName?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-xxxxxxxxxx
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 9B7BFB11-C077-4FE3-B051-F69CEB******
     */
    requestId?: string;
    /**
     * @remarks
     * The status of the PolarDB for AI feature. Valid values:
     *
     * - **1**: Enabled
     *
     * - **2**: Disabled
     *
     * @example
     * 1
     */
    status?: string;
    /**
     * @remarks
     * A description of the feature status.
     *
     * @example
     * 关闭状态
     */
    statusName?: string;
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
