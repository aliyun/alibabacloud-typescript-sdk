// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppInstanceAttributeResponseBodyComponents extends $dara.Model {
  status?: string;
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
  isSystemKey?: boolean;
  remark?: string;
  slsStorageBytes?: number;
  status?: string;
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
  components?: DescribeAppInstanceAttributeResponseBodyComponents[];
  /**
   * @remarks
   * The instance ID of the ApsaraDB RDS for PostgreSQL database to which the AI application is connected.
   * 
   * @example
   * pgm-2ze49qv594vi****
   */
  DBInstanceName?: string;
  eipId?: string;
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
  loginToken?: string;
  natCreatedBy?: string;
  natGatewayId?: string;
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
  retentionHours?: string;
  sqlExtendMoInstanceId?: string;
  /**
   * @remarks
   * The instance status. For more information, see [Instance status](https://help.aliyun.com/document_detail/2623972.html).
   * 
   * @example
   * Running
   */
  status?: string;
  uploadKey?: string;
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
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appType: 'AppType',
      components: 'Components',
      DBInstanceName: 'DBInstanceName',
      eipId: 'EipId',
      eipStatus: 'EipStatus',
      instanceClass: 'InstanceClass',
      instanceMinorVersion: 'InstanceMinorVersion',
      instanceName: 'InstanceName',
      loginToken: 'LoginToken',
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
      components: { 'type': 'array', 'itemType': DescribeAppInstanceAttributeResponseBodyComponents },
      DBInstanceName: 'string',
      eipId: 'string',
      eipStatus: 'string',
      instanceClass: 'string',
      instanceMinorVersion: 'string',
      instanceName: 'string',
      loginToken: 'string',
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

