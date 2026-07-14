// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMarketingFlowRequest extends $dara.Model {
  /**
   * @remarks
   * The campaign code. You can use the system code or modify it to use a custom code.
   * 
   * @example
   * rewrwerw
   */
  activityCode?: string;
  /**
   * @remarks
   * The name of the node task instance.
   * 
   * @example
   * werewew
   */
  activityName?: string;
  /**
   * @remarks
   * The campaign status.
   * 
   * @example
   * sucess
   */
  activityStatus?: string;
  /**
   * @remarks
   * The business tenant code. Default value: ALICOM_OPAAS.
   * 
   * @example
   * ALICOM_OPAAS
   */
  bizCode?: string;
  /**
   * @remarks
   * The business extension information. Default value: "{}".
   * 
   * @example
   * {}
   */
  bizExtend?: { [key: string]: any };
  ownerId?: number;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageIndex?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageSize?: string;
  /**
   * @remarks
   * The ID of the associated flow.
   * 
   * @example
   * asdfsdfdsfs
   */
  relatedFlowCode?: string;
  /**
   * @remarks
   * The ID of the associated group.
   * 
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

