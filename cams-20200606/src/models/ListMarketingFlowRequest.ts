// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMarketingFlowRequest extends $dara.Model {
  /**
   * @example
   * rewrwerw
   */
  activityCode?: string;
  /**
   * @example
   * werewew
   */
  activityName?: string;
  /**
   * @example
   * sucess
   */
  activityStatus?: string;
  /**
   * @example
   * ALICOM_OPAAS
   */
  bizCode?: string;
  /**
   * @example
   * {}
   */
  bizExtend?: { [key: string]: any };
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: string;
  /**
   * @example
   * 1
   */
  pageSize?: string;
  /**
   * @example
   * asdfsdfdsfs
   */
  relatedFlowCode?: string;
  /**
   * @example
   * 68
   */
  relatedGroupId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      activityCode: 'ActivityCode',
      activityName: 'ActivityName',
      activityStatus: 'ActivityStatus',
      bizCode: 'BizCode',
      bizExtend: 'BizExtend',
      ownerId: 'OwnerId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      relatedFlowCode: 'RelatedFlowCode',
      relatedGroupId: 'RelatedGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityCode: 'string',
      activityName: 'string',
      activityStatus: 'string',
      bizCode: 'string',
      bizExtend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      ownerId: 'number',
      pageIndex: 'string',
      pageSize: 'string',
      relatedFlowCode: 'string',
      relatedGroupId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(this.bizExtend) {
      $dara.Model.validateMap(this.bizExtend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

