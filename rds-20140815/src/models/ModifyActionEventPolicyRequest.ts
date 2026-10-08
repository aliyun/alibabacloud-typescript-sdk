// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyActionEventPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the historical events feature. Valid values:
   * * **True**
   * * **False**
   * 
   * This parameter is required.
   * 
   * @example
   * True
   */
  enableEventLog?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call DescribeRegions to query the available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      enableEventLog: 'EnableEventLog',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableEventLog: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

