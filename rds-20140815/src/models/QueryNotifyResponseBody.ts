// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryNotifyResponseBodyDataNotifyItemList extends $dara.Model {
  /**
   * @remarks
   * The ID of the current Alibaba Cloud account.
   * 
   * @example
   * 22973492****
   */
  aliUid?: number;
  /**
   * @remarks
   * Indicates whether the notification has been received. This indicates whether the [ConfirmNotify](https://help.aliyun.com/document_detail/610444.html) operation was called to mark the notification as confirmed. Valid values:
   * * **true**: Yes.
   * * **false**: No.
   * 
   * @example
   * true
   */
  confirmFlag?: boolean;
  /**
   * @remarks
   * The UID of the user who received the notification under the current Alibaba Cloud account. This user called the [ConfirmNotify](https://help.aliyun.com/document_detail/610444.html) operation to mark the notification as confirmed.
   * 
   * A value of **0** indicates that the notification was automatically received by the system.
   * 
   * @example
   * 0
   */
  confirmor?: number;
  /**
   * @remarks
   * The time when the notification was created.
   * 
   * @example
   * 2022-04-21T02:04:04Z
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the notification was modified.
   * 
   * @example
   * 2022-04-21T02:10:47Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The notification ID.
   * 
   * @example
   * 103499
   */
  id?: number;
  /**
   * @remarks
   * The number of times that duplicate notifications were blocked.
   * 
   * @example
   * 0
   */
  idempotentCount?: string;
  /**
   * @remarks
   * The ID used to ensure the idempotence of the notification and prevent duplicate notifications.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  idempotentId?: string;
  /**
   * @remarks
   * The level of the notification. Valid values:
   * * **help**: Help level.
   * * **success**: Success level.
   * * **warning**: Warning level.
   * * **error**: Error level.
   * * **loading**: In progress.
   * * **notice**: Notice level.
   * 
   * @example
   * error
   */
  level?: string;
  /**
   * @remarks
   * The elements in the notification template, which consist of a JSON string. The parameters contained in the JSON string vary based on the **TemplateName**.
   * * If **TemplateName** is **RenewalRecommend**:
   *     * **instanceName**: the ID of the instance that is about to expire.
   *     * **reservedTime**: the number of remaining days.
   * * If **TemplateName** is **InstanceCreateFailed**:
   *     * **orderId**: the order ID for purchasing the instance.
   *     * **reason**: the reason why the instance failed to be created.
   * 
   * @example
   * {\\"orderId\\":21466****}
   */
  notifyElement?: string;
  /**
   * @remarks
   * The notification template. Valid values:
   * * **RenewalRecommend**: Renewal recommendation.
   * * **InstanceCreateFailed**: Instance creation failure and refund.
   * 
   * @example
   * InstanceCreateFailed
   */
  templateName?: string;
  /**
   * @remarks
   * The notification type. Valid values:
   * * **Sell**: Sales notification.
   * * **Operation**: O&M notification.
   * * **Promotion**: Promotional notification.
   * 
   * @example
   * Sell
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      confirmFlag: 'ConfirmFlag',
      confirmor: 'Confirmor',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      idempotentCount: 'IdempotentCount',
      idempotentId: 'IdempotentId',
      level: 'Level',
      notifyElement: 'NotifyElement',
      templateName: 'TemplateName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      confirmFlag: 'boolean',
      confirmor: 'number',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      idempotentCount: 'string',
      idempotentId: 'string',
      level: 'string',
      notifyElement: 'string',
      templateName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNotifyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of notifications.
   */
  notifyItemList?: QueryNotifyResponseBodyDataNotifyItemList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 25
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      notifyItemList: 'NotifyItemList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      notifyItemList: { 'type': 'array', 'itemType': QueryNotifyResponseBodyDataNotifyItemList },
      pageNumber: 'number',
      pageSize: 'number',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.notifyItemList)) {
      $dara.Model.validateArray(this.notifyItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryNotifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned fields.
   */
  data?: QueryNotifyResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 94CB8D93-017A-5AE7-A118-6E0F89D93C0A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryNotifyResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

