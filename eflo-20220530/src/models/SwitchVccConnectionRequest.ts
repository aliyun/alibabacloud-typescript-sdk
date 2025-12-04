// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchVccConnectionRequest extends $dara.Model {
  /**
   * @remarks
   * CEN
   * 
   * @example
   * cen-bkiw0x1347roek****
   */
  cenId?: string;
  /**
   * @remarks
   * Connection type, CENTR/VPC
   * 
   * @example
   * CENTR
   */
  connectionType?: string;
  /**
   * @remarks
   * Region ID
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * vSwitch ID
   * 
   * @example
   * vsw-t4nahb0pxckgktxfv****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * Cloud Connect Network (CCN) ID
   * 
   * This parameter is required.
   * 
   * @example
   * vcc-cn-zvp2w22****
   */
  vccId?: string;
  /**
   * @remarks
   * VPC ID
   * 
   * @example
   * vpc-uf6aa4ddo97frj22t****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      connectionType: 'ConnectionType',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      vccId: 'VccId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      connectionType: 'string',
      regionId: 'string',
      vSwitchId: 'string',
      vccId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

