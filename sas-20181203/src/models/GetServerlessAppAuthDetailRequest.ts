// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServerlessAppAuthDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Serverless App Engine (SAE) application. You can obtain the ID by calling the [ListMachineApps](~~ListMachineApps~~) operation. This parameter is required. If you do not specify this parameter, the API returns an HTTP 400 error with the error code missingParams.
   * 
   * @example
   * 3de9f2ac-f***769226df
   */
  appId?: string;
  /**
   * @remarks
   * The region ID of the application. This parameter is required. If you do not specify this parameter, the API returns an HTTP 400 error with the error code missingParams.
   * 
   * @example
   * cn-hangzhou
   */
  appRegionId?: string;
  /**
   * @remarks
   * The server type. Valid values:
   * - **RunD**
   * - **ECI**
   * 
   * @example
   * RunD
   */
  machineType?: string;
  /**
   * @remarks
   * The cloud service to which the application belongs. Valid values:
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

