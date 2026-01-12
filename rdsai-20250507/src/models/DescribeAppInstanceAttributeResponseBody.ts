// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
   * The application type. Only **supabase** is supported. For more information, see [RDS Supabase](https://help.aliyun.com/document_detail/2938735.html).
   * 
   * @example
   * supabase
   */
  appType?: string;
  /**
   * @remarks
   * The ID of the RDS for PostgreSQL instance with which the RDS Supabase instances are associated.
   * 
   * @example
   * pgm-2ze49qv594vi****
   */
  DBInstanceName?: string;
  eipStatus?: string;
  /**
   * @remarks
   * The instance type of the RDS Supabase instance.
   * 
   * @example
   * rdsai.supabase.basic
   */
  instanceClass?: string;
  /**
   * @remarks
   * The minor version number of RDS Supabase instance.
   * 
   * @example
   * 20241231
   */
  instanceMinorVersion?: string;
  /**
   * @remarks
   * The ID of the RDS Supabase instance.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
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
   * The status of the instance. For more information, see [Instance state table](https://help.aliyun.com/document_detail/2623972.html).
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
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
      DBInstanceName: 'DBInstanceName',
      eipStatus: 'EipStatus',
      instanceClass: 'InstanceClass',
      instanceMinorVersion: 'InstanceMinorVersion',
      instanceName: 'InstanceName',
      natStatus: 'NatStatus',
      publicConnectionString: 'PublicConnectionString',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcConnectionString: 'VpcConnectionString',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appType: 'string',
      DBInstanceName: 'string',
      eipStatus: 'string',
      instanceClass: 'string',
      instanceMinorVersion: 'string',
      instanceName: 'string',
      natStatus: 'string',
      publicConnectionString: 'string',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcConnectionString: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

