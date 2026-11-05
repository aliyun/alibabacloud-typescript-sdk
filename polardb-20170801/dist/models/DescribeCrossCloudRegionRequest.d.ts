import * as $dara from '@darabonba/typescript';
export declare class DescribeCrossCloudRegionRequest extends $dara.Model {
    /**
     * @remarks
     * The cloud service provider. Valid values:
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
     * The ID of the third-party cloud region.
     *
     * @example
     * cn-east-3
     */
    crossCloudRegionId?: string;
    /**
     * @remarks
     * The database engine type. Valid values:
     *
     * - MySQL
     *
     * - PostgreSQL
     *
     * - Oracle
     *
     * @example
     * MySQL
     */
    DBType?: string;
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
