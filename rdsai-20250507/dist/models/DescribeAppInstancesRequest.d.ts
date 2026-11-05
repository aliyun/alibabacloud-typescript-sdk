import * as $dara from '@darabonba/typescript';
export declare class DescribeAppInstancesRequest extends $dara.Model {
    /**
     * @remarks
     * The application type. Currently, only **supabase** is supported, which indicates [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html).
     *
     * @example
     * supabase
     */
    appType?: string;
    /**
     * @remarks
     * The instance ID of the RDS PostgreSQL database to which the AI application is connected. If you specify this parameter, the API queries the AI application instances associated with the specified RDS PostgreSQL instance.
     *
     * @example
     * pgm-2ze49qv594vi****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The page number. Valid values: integers greater than 0 and up to the maximum value of the Integer type.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page. Valid values: **1** to **50**.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
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
