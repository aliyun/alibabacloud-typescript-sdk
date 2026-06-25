// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The scheduling behavior to update for the instance in the dedicated resource group. Valid values:
   * 
   * - Uncordon: Allows services to be scheduled to the instance.
   * 
   * - Cordon: Prevents services from being scheduled to the instance.
   * 
   * - Drain: Evicts the service instances that are running on the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * Cordon
   */
  action?: string;
  newDiskSize?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      newDiskSize: 'NewDiskSize',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      newDiskSize: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

