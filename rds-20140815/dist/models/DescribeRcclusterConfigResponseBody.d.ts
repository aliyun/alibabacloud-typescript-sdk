import * as $dara from '@darabonba/typescript';
export declare class DescribeRCClusterConfigResponseBody extends $dara.Model {
    /**
     * @remarks
     * The cluster access configuration.
     *
     * @example
     * apiVersion: v1****
     */
    config?: string;
    /**
     * @remarks
     * The expiration time of the KubeConfig. The time is in UTC and follows the RFC 3339 format.
     *
     * @example
     * 2024-03-10T09:56:17Z
     */
    expiration?: string;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * E9DD55F4-1A5F-48CA-BA57-DFB3CA8C4C34
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
