// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserFlowStatisticsRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway app instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The instance ID of the Smart Access Gateway app instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-mfkg*****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The statistical date in the YYYYMM format.
   * 
   * > If this parameter is not specified, the current month is used by default.
   * 
   * @example
   * 201905
   */
  statisticsDate?: string;
  /**
   * @remarks
   * The list of usernames. The list can contain up to 50 usernames.
   * 
   * This parameter is required.
   */
  userNames?: string[];
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      smartAGId: 'SmartAGId',
      statisticsDate: 'StatisticsDate',
      userNames: 'UserNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      smartAGId: 'string',
      statisticsDate: 'string',
      userNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userNames)) {
      $dara.Model.validateArray(this.userNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

