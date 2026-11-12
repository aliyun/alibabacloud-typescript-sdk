import * as $dara from '@darabonba/typescript';
export declare class DisableDBClusterOrcaResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster ID.
     * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/98094.html) operation to query the details of all clusters under your account, including their cluster IDs.
     *
     * @example
     * pc-***************
     */
    DBClusterId?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * D0CEC6AC-7760-409A-A0D5-E6CD86******
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
