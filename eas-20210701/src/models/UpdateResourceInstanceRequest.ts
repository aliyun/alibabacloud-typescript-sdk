// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The operation that updates the scheduling state of the instance in a dedicated resource group. Valid values:
   * 
   * *   Uncordon: allows scheduling the service to this instance.
   * *   Cordon: prohibits scheduling the service to this instance.
   * *   Drain: evicts the service that has been scheduled to this instance.
   * 
   * This parameter is required.
   * 
   * @example
   * Cordon
   */
  action?: string;
  newDiskSize?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      newDiskSize: 'NewDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      newDiskSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

