import * as $dara from '@darabonba/typescript';
export declare class DescribeCrossCloudRegionMappingToAliyunRequest extends $dara.Model {
    /**
     * @remarks
     * The region ID of Alibaba Cloud.
     *
     * @example
     * cn-beijing
     */
    aliyunRegionId?: string;
    /**
     * @remarks
     * The cloud provider. Valid values:
     *
     * - HuaweiCloud
     *
     * - Azure
     *
     * @example
     * HuaweiCloud
     */
    cloudProvider?: string;
    /**
     * @remarks
     * The region ID of the third-party cloud.
     *
     * @example
     * cn-east-3
     */
    crossCloudRegionId?: string;
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
