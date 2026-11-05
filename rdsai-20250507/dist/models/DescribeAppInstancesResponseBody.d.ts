import * as $dara from '@darabonba/typescript';
export declare class DescribeAppInstancesResponseBodyInstancesComponents extends $dara.Model {
    /**
     * @remarks
     * The component status.
     */
    status?: string;
    /**
     * @remarks
     * The component type.
     */
    type?: string;
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
export declare class DescribeAppInstancesResponseBodyInstances extends $dara.Model {
    /**
     * @remarks
     * The name of the AI application.
     *
     * @example
     * test-supabase
     */
    appName?: string;
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
     * The list of components.
     */
    components?: DescribeAppInstancesResponseBodyInstancesComponents[];
    /**
     * @remarks
     * The instance ID of the RDS PostgreSQL database to which the AI application is connected.
     *
     * @example
     * pgm-2ze49qv594vi****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The instance type.
     *
     * @example
     * rdsai.supabase.basic
     */
    instanceClass?: string;
    /**
     * @remarks
     * The minor version of the AI application instance.
     *
     * @example
     * 20241231
     */
    instanceMinorVersion?: string;
    /**
     * @remarks
     * The instance ID of the AI application.
     *
     * @example
     * ra-supabase-8moov5lxba****
     */
    instanceName?: string;
    /**
     * @remarks
     * The public endpoint of the AI application.
     *
     * @example
     * 8.152. XXX.XXX:8000
     */
    publicConnectionString?: string;
    /**
     * @remarks
     * The region ID.
     *
     * @example
     * cn-beijing
     */
    regionId?: string;
    /**
     * @remarks
     * The instance status. For more information, see [Instance status table](https://help.aliyun.com/document_detail/2623972.html).
     *
     * @example
     * Running
     */
    status?: string;
    /**
     * @remarks
     * The vSwitch ID.
     *
     * @example
     * vsw-2zeaepb8k4ku05ov2****
     */
    vSwitchId?: string;
    /**
     * @remarks
     * The internal endpoint of the AI application.
     *
     * @example
     * 172.16.XXX.XXX:8000
     */
    vpcConnectionString?: string;
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
export declare class DescribeAppInstancesResponseBody extends $dara.Model {
    /**
     * @remarks
     * The list of instances.
     */
    instances?: DescribeAppInstancesResponseBodyInstances[];
    /**
     * @remarks
     * A reserved parameter. You can ignore it.
     *
     * @example
     * None
     */
    maxResults?: number;
    /**
     * @remarks
     * The page number.
     *
     * @example
     * 1
     */
    pageNumber?: number;
    /**
     * @remarks
     * The number of entries per page.
     *
     * @example
     * 10
     */
    pageSize?: number;
    /**
     * @remarks
     * The request ID.
     *
     * @example
     * 32DEFB4A-861F-5D1D-ADD5-918E4FD7AB8C
     */
    requestId?: string;
    /**
     * @remarks
     * The total number of entries.
     *
     * @example
     * 20
     */
    totalCount?: number;
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
