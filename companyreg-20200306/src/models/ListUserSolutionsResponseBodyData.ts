// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserSolutionsResponseBodyData extends $dara.Model {
  /**
   * @example
   * S20210924151843000001
   */
  bizId?: string;
  /**
   * @example
   * esp.logo
   */
  bizType?: string;
  /**
   * @example
   * 164454443222
   */
  createTime?: number;
  /**
   * @example
   * P20210924151843000001
   */
  deliveryOrderBizId?: string;
  /**
   * @example
   * A20210924151843000001
   */
  intentionAssignBizId?: string;
  /**
   * @example
   * I20210924151843000001
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
   * 164454443222
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

