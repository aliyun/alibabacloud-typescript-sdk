// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserFlowStatisticsRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the SAG APP instance is deployed.
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
   * The ID of the SAG APP instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-mfkg*****
   */
  smartAGId?: string;
  /**
   * @remarks
   * The month during which the data transfer statistics are collected.
   * 
   * If you do not specify a month, the current month is queried.
   * 
   * @example
   * 201905
   */
  statisticsDate?: string;
  /**
   * @remarks
   * The list of usernames of client accounts. Maximum value of N: 50.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
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

