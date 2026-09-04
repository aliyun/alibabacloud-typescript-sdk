// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppInstanceAttributeResponseBodyComponents extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInstanceAttributeResponseBodyUploadKeyList extends $dara.Model {
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  isSystemKey?: boolean;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  remark?: string;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  slsStorageBytes?: number;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  status?: string;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  uploadKey?: string;
  static names(): { [key: string]: string } {
    return {
      isSystemKey: 'IsSystemKey',
      remark: 'Remark',
      slsStorageBytes: 'SlsStorageBytes',
      status: 'Status',
      uploadKey: 'UploadKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSystemKey: 'boolean',
      remark: 'string',
      slsStorageBytes: 'number',
      status: 'string',
      uploadKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInstanceAttributeResponseBody extends $dara.Model {
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
   * Reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  branchName?: string;
  /**
   * @remarks
   * Reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  branchingEnabled?: string;
  /**
   * @remarks
   * The list of components.
   */
  components?: DescribeAppInstanceAttributeResponseBodyComponents[];
  /**
   * @remarks
   * The ID of the RDS PostgreSQL database instance that the AI application is connected to.
   * 
   * @example
   * pgm-2ze49qv594vi****
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * The instance ID of the EIP.
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
   * The instance class of the AI application.
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
   * Reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  loginToken?: string;
  /**
   * @remarks
   * The minor version details of each component of the RDS AI application instance.
   * 
   * @example
   * {\\"studio\\":\\"20260602r1\\",\\"storage\\":\\"v1.48.9\\",\\"auth\\":\\"v2.188.1\\",\\"kong\\":\\"3.9.0\\",\\"rest\\":\\"v12.2.12\\",\\"meta\\":\\"v0.89.3\\",\\"realtime-dev\\":\\"v2.34.47\\",\\"postgres\\":\\"rds_postgres_1700_20260830\\"}
   */
  minorVersionDetail?: string;
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
   * The public connection string of the AI application.
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
   * Reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  retentionHours?: string;
  /**
   * @remarks
   * Reserved parameter.
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
   * Reserved parameter.
   * 
   * @example
   * Reserved parameter
   */
  uploadKey?: string;
  /**
   * @remarks
   * Reserved parameter.
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
   * The internal connection string of the AI application.
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
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      branchName: 'BranchName',
      branchingEnabled: 'BranchingEnabled',
      components: 'Components',
      DBInstanceName: 'DBInstanceName',
      eipId: 'EipId',
      eipStatus: 'EipStatus',
      instanceClass: 'InstanceClass',
      instanceLatestVersion: 'InstanceLatestVersion',
      instanceMinorVersion: 'InstanceMinorVersion',
      instanceName: 'InstanceName',
      loginToken: 'LoginToken',
      minorVersionDetail: 'MinorVersionDetail',
      natCreatedBy: 'NatCreatedBy',
      natGatewayId: 'NatGatewayId',
      natStatus: 'NatStatus',
      publicConnectionString: 'PublicConnectionString',
      regionId: 'RegionId',
      requestId: 'RequestId',
      retentionHours: 'RetentionHours',
      sqlExtendMoInstanceId: 'SqlExtendMoInstanceId',
      status: 'Status',
      uploadKey: 'UploadKey',
      uploadKeyList: 'UploadKeyList',
      vSwitchId: 'VSwitchId',
      vpcConnectionString: 'VpcConnectionString',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'string',
      branchName: 'string',
      branchingEnabled: 'string',
      components: { 'type': 'array', 'itemType': DescribeAppInstanceAttributeResponseBodyComponents },
      DBInstanceName: 'string',
      eipId: 'string',
      eipStatus: 'string',
      instanceClass: 'string',
      instanceLatestVersion: 'string',
      instanceMinorVersion: 'string',
      instanceName: 'string',
      loginToken: 'string',
      minorVersionDetail: 'string',
      natCreatedBy: 'string',
      natGatewayId: 'string',
      natStatus: 'string',
      publicConnectionString: 'string',
      regionId: 'string',
      requestId: 'string',
      retentionHours: 'string',
      sqlExtendMoInstanceId: 'string',
      status: 'string',
      uploadKey: 'string',
      uploadKeyList: { 'type': 'array', 'itemType': DescribeAppInstanceAttributeResponseBodyUploadKeyList },
      vSwitchId: 'string',
      vpcConnectionString: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    if(Array.isArray(this.uploadKeyList)) {
      $dara.Model.validateArray(this.uploadKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

