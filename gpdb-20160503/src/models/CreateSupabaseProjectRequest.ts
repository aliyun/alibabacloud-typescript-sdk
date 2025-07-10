// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSupabaseProjectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Pw123456
   */
  accountPassword?: string;
  /**
   * @example
   * 0c593ea1-3bea-11e9-b96b-88888888****
   */
  clientToken?: string;
  /**
   * @example
   * PL0
   */
  diskPerformanceLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * saas_iot_x86_modbustcp_lqt01
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1C1G
   */
  projectSpec?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @example
   * 2
   */
  storageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vsw-bp1cpq8mr64paltkb****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-bp*******************
   */
  vpcId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountPassword: 'AccountPassword',
      clientToken: 'ClientToken',
      diskPerformanceLevel: 'DiskPerformanceLevel',
      projectName: 'ProjectName',
      projectSpec: 'ProjectSpec',
      regionId: 'RegionId',
      securityIPList: 'SecurityIPList',
      storageSize: 'StorageSize',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountPassword: 'string',
      clientToken: 'string',
      diskPerformanceLevel: 'string',
      projectName: 'string',
      projectSpec: 'string',
      regionId: 'string',
      securityIPList: 'string',
      storageSize: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
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

