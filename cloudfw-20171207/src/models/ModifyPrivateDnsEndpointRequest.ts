// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrivateDnsEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pd-12345
   */
  accessInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  accessInstanceName?: string;
  /**
   * @example
   * 1.1.1.1
   */
  primaryDns?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Custom
   */
  privateDnsType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
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

