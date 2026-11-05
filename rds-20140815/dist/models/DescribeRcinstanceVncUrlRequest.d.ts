import * as $dara from '@darabonba/typescript';
export declare class DescribeRCInstanceVncUrlRequest extends $dara.Model {
    /**
     * @remarks
     * The database engine type. Valid values:
     *
     * - **mssql**: SQL Server
     * - **mysql**: MySQL
     *
     * @example
     * mysql
     */
    dbType?: string;
    /**
     * @remarks
     * The instance ID.
     *
     * @example
     * rc-e6e3757b8px27oa5****
     */
    instanceId?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-chengdu
     */
    regionId?: string;
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
