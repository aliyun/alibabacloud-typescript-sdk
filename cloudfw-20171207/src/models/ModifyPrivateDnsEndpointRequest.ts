// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrivateDnsEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pd-12345
   */
  accessInstanceId?: string;
  /**
   * @remarks
   * The name of the private instance.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  accessInstanceName?: string;
  /**
   * @remarks
   * The primary DNS server.
   * 
   * @example
   * 1.1.1.1
   */
  primaryDns?: string;
  /**
   * @remarks
   * The private DNS type. Valid values:
   * 
   * - **PrivateZone**
   * 
   * - **Custom**
   * 
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  privateDnsType?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The secondary DNS server.
   * 
   * @example
   * 1.1.1.2
   */
  standbyDns?: string;
  static names(): { [key: string]: string } {
    return {
      accessInstanceId: 'AccessInstanceId',
      accessInstanceName: 'AccessInstanceName',
      primaryDns: 'PrimaryDns',
      privateDnsType: 'PrivateDnsType',
      regionNo: 'RegionNo',
      standbyDns: 'StandbyDns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessInstanceId: 'string',
      accessInstanceName: 'string',
      primaryDns: 'string',
      privateDnsType: 'string',
      regionNo: 'string',
      standbyDns: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

