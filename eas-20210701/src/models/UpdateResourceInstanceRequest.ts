// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateResourceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Updates the schedulable behavior of the machine instance in the dedicated resource group. Valid values:
   * - Uncordon: Allows services to be scheduled to this instance.
   * - Cordon: Prevents services from being scheduled to this instance.
   * - Drain: Evicts service instances that are already scheduled to this instance.
   * 
   * This parameter is required.
   * 
   * @example
   * Cordon
   */
  action?: string;
  /**
   * @remarks
   * The size of the system cloud disk after scaling, in GiB.
   * 
   * @example
   * 500
   */
  newDiskSize?: string;
  /**
   * @remarks
   * Takes effect when Action is set to Cordon or Drain. Records the reason for the operation.
   * 
   * @example
   * Node maintenance
   */
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

