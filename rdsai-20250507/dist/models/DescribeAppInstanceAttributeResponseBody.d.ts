import * as $dara from '@darabonba/typescript';
export declare class DescribeAppInstanceAttributeResponseBodyComponents extends $dara.Model {
    /**
     * @remarks
     * The component status.
     *
     * @example
     * enable
     */
    status?: string;
    /**
     * @remarks
     * The component type.
     *
     * @example
     * supabase
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
export declare class DescribeAppInstanceAttributeResponseBodyUploadKeyList extends $dara.Model {
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    isSystemKey?: boolean;
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    remark?: string;
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    slsStorageBytes?: number;
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    status?: string;
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    uploadKey?: string;
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
export declare class DescribeAppInstanceAttributeResponseBody extends $dara.Model {
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
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    branchName?: string;
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    branchingEnabled?: string;
    /**
     * @remarks
     * The component list.
     */
    components?: DescribeAppInstanceAttributeResponseBodyComponents[];
    /**
     * @remarks
     * The instance ID of the RDS PostgreSQL database instance associated with the AI application.
     *
     * @example
     * pgm-2ze49qv594vi****
     */
    DBInstanceName?: string;
    /**
     * @remarks
     * The EIP instance ID.
     *
     * @example
     * eip-wz9sfo01afag4hxc0utq0
     */
    eipId?: string;
    /**
     * @remarks
     * The activation status of the EIP.
     *
     * @example
     * on
     */
    eipStatus?: string;
    /**
     * @remarks
     * The instance type of the AI application.
     *
     * @example
     * rdsai.supabase.basic
     */
    instanceClass?: string;
    /**
     * @remarks
     * The latest minor version of the RDS AI application instance.
     *
     * @example
     * 20260903
     */
    instanceLatestVersion?: string;
    /**
     * @remarks
     * The minor version of the RDS AI application instance.
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
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    loginToken?: string;
    /**
     * @remarks
     * The minor versions of each component in the RDS AI application instance.
     *
     * @example
     * {\\"studio\\":\\"20260602r1\\",\\"storage\\":\\"v1.48.9\\",\\"auth\\":\\"v2.188.1\\",\\"kong\\":\\"3.9.0\\",\\"rest\\":\\"v12.2.12\\",\\"meta\\":\\"v0.89.3\\",\\"realtime-dev\\":\\"v2.34.47\\",\\"postgres\\":\\"rds_postgres_1700_20260830\\"}
     */
    minorVersionDetail?: string;
    /**
     * @remarks
     * The release notes for the minor version of the RDS AI application instance.
     *
     * @example
     * {\\"20260915\\":\\"realtime：1xxx；auth：2xxx；storage：3xxx\\",\\"20260917\\":\\"studio：4xxx；auth：5xxx\\"}
     */
    minorVersionReleaseNotes?: string;
    /**
     * @remarks
     * The creator of the NAT gateway.
     *
     * @example
     * user
     */
    natCreatedBy?: string;
    /**
     * @remarks
     * The ID of the NAT gateway.
     *
     * @example
     * ngw-bp1l82hw87m2y77ci1hie
     */
    natGatewayId?: string;
    /**
     * @remarks
     * The activation status of the NAT gateway.
     *
     * @example
     * off
     */
    natStatus?: string;
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
     * The request ID.
     *
     * @example
     * FE9C65D7-930F-57A5-A207-8C396329241C
     */
    requestId?: string;
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    retentionHours?: string;
    /**
     * @remarks
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    sqlExtendMoInstanceId?: string;
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
     * The reserved parameter.
     *
     * @example
     * Reserved parameter
     */
    uploadKey?: string;
    /**
     * @remarks
     * The reserved parameter.
     */
    uploadKeyList?: DescribeAppInstanceAttributeResponseBodyUploadKeyList[];
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
    /**
     * @remarks
     * The zone ID.
     *
     * @example
     * cn-beijing-i
     */
    zoneId?: string;
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
