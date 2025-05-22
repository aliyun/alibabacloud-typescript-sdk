// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserDetailSolutionsResponseBodyData extends $dara.Model {
  /**
   * @example
   * S20211222161651000001
   */
  bizId?: string;
  /**
   * @example
   * esp.wangwen
   */
  bizType?: string;
  /**
   * @example
   * 15556223433
   */
  createTime?: number;
  /**
   * @example
   * P20211222161651000001
   */
  deliveryOrderBizId?: string;
  /**
   * @example
   * {}
   */
  extInfo?: string;
  /**
   * @example
   * A20211222161651000001
   */
  intentionAssignBizId?: string;
  /**
   * @example
   * I20211222161651000001
   */
  intentionBizId?: string;
  /**
   * @example
   * jinsan
   */
  partnerCode?: string;
  reason?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 15556223433
   */
  updateTime?: number;
  /**
   * @example
   * 1219541161213057
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      createTime: 'CreateTime',
      deliveryOrderBizId: 'DeliveryOrderBizId',
      extInfo: 'ExtInfo',
      intentionAssignBizId: 'IntentionAssignBizId',
      intentionBizId: 'IntentionBizId',
      partnerCode: 'PartnerCode',
      reason: 'Reason',
      status: 'Status',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      createTime: 'number',
      deliveryOrderBizId: 'string',
      extInfo: 'string',
      intentionAssignBizId: 'string',
      intentionBizId: 'string',
      partnerCode: 'string',
      reason: 'string',
      status: 'number',
      updateTime: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

