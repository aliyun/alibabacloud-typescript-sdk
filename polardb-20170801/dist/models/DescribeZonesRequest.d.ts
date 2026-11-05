import * as $dara from '@darabonba/typescript';
export declare class DescribeZonesRequest extends $dara.Model {
    /**
     * @remarks
     * The database engine.
     *
     * @example
     * POLARDB
     */
    engine?: string;
    /**
     * @remarks
     * The engine extension.
     *
     * @example
     * local
     */
    extra?: string;
    /**
     * @remarks
     * The region ID.
     *
     * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view information about all available regions for your account, including region IDs.
     *
     * @example
     * cn-zhangjiakou
     */
    regionId?: string;
    resourceOwnerId?: number;
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
