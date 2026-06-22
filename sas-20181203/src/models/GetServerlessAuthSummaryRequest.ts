// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServerlessAuthSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The region ID of the application.
   * 
   * @example
   * cn-hangzhou
   */
  appRegionId?: string;
  /**
   * @remarks
   * The server type. Valid values:
   * - **RunD**
   * - **ECI**.
   * 
   * @example
   * RunD
   */
  machineType?: string;
  /**
   * @remarks
   * The cloud service to which the resource belongs. Valid values:
   * - **ASK**
   * - **SAE**
   * - **ACS**.
   * 
   * @example
   * SAE
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      appRegionId: 'AppRegionId',
      machineType: 'MachineType',
      vendorType: 'VendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

