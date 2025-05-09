// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDIJobRequestResourceSettingsRealtimeResourceSettings extends $dara.Model {
  /**
   * @remarks
   * The number of CUs in the resource group for Data Integration that are used for real-time synchronization.
   * 
   * @example
   * 2.0
   */
  requestedCu?: number;
  /**
   * @remarks
   * The name of the resource group for Data Integration used for real-time synchronization.
   * 
   * @example
   * S_res_group_111_222
   */
  resourceGroupIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      requestedCu: 'RequestedCu',
      resourceGroupIdentifier: 'ResourceGroupIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestedCu: 'number',
      resourceGroupIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

