// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @example
   * test-supabase
   */
  appName?: string;
  /**
   * @example
   * supabase
   */
  appType?: string;
  /**
   * @example
   * pgm-2ze49qv594vi****
   */
  DBInstanceName?: string;
  eipStatus?: string;
  /**
   * @example
   * rdsai.supabase.basic
   */
  instanceClass?: string;
  /**
   * @example
   * 20241231
   */
  instanceMinorVersion?: string;
  /**
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  natStatus?: string;
  /**
   * @example
   * 8.152. XXX.XXX:8000
   */
  publicConnectionString?: string;
  /**
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329241C
   */
  requestId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * vsw-2zeaepb8k4ku05ov2****
   */
  vSwitchId?: string;
  /**
   * @example
   * 172.16.XXX.XXX:8000
   */
  vpcConnectionString?: string;
  /**
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

