import * as $dara from '@darabonba/typescript';
export declare class ExecuteCrossCloudOpenAPIRequest extends $dara.Model {
    /**
     * @remarks
     * The information required to call the cross-cloud OpenAPI.
     *
     * @example
     * {"Action":"DescribeDBClusters"}
     */
    proxyInfo?: string;
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
