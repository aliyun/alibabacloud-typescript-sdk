// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServerlessAppAuthDetailRequest extends $dara.Model {
  /**
   * @remarks
   * SAE application ID.
   * 
   * > Obtain through the [ListMachineApps](~~ListMachineApps~~) interface.
   * 
   * @example
   * 3de9f2ac-f***769226df
   */
  appId?: string;
  /**
   * @remarks
   * Application region ID.
   * 
   * @example
   * cn-hangzhou
   */
  appRegionId?: string;
  /**
   * @remarks
   * Server type: 
   * - **RunD**
   * - **ECI**
   * 
   * @example
   * RunD
   */
  machineType?: string;
  /**
   * @remarks
   * Cloud product: 
   * - **ASK**
   * - **SAE**
   * - **ACS**
   * 
   * @example
   * SAE
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appRegionId: 'AppRegionId',
      machineType: 'MachineType',
      vendorType: 'VendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appRegionId: 'string',
      machineType: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

