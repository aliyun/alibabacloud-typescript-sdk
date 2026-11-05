import * as $dara from '@darabonba/typescript';
export declare class DescribeDBClusterConnectivityResponseBody extends $dara.Model {
    /**
     * @remarks
     * The connection check error code. Valid values:
     *
     * - **SRC_IP_NOT_IN_USER_WHITELIST**: The source IP address is not in the whitelist.
     *
     * - **CONNECTION_ABNORMAL**: The connection is abnormal.
     *
     * @example
     * SRC_IP_NOT_IN_USER_WHITELIST
     */
    connCheckErrorCode?: string;
    /**
     * @remarks
     * The connection check error message.
     *
     * @example
     * Src ip:192.***.***.1 not in user whitelist
     */
    connCheckErrorMessage?: string;
    /**
     * @remarks
     * The connection check result. Valid values:
     *
     * - **Success**
     *
     * - **Failed**
     *
     * @example
     * Failed
     */
    connCheckResult?: string;
    /**
     * @remarks
     * The cluster ID.
     *
     * @example
     * pc-xxxxxxxxxxxxx
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 73A85BAF-1039-4CDE-A83F-1A140F******
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
