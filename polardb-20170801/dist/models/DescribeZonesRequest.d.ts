import * as $dara from '@darabonba/typescript';
export declare class DescribeZonesRequest extends $dara.Model {
    /**
     * @remarks
     * The database engine.
     *
     * @example
     * mysql
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
     * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query all available regions for the current account, including region IDs.
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
