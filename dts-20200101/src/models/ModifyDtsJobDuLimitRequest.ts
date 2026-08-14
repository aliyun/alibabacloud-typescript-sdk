// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDtsJobDuLimitRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DTS migration, synchronization, or change tracking task.
   * 
   * This parameter is required.
   * 
   * @example
   * dtsxxx
   */
  dtsJobId?: string;
  /**
   * @remarks
   * The DU upper limit of the task.
   * 
   * > The minimum value is **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  duLimit?: number;
  ownerId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      dtsJobId: 'DtsJobId',
      duLimit: 'DuLimit',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dtsJobId: 'string',
      duLimit: 'number',
      ownerId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

