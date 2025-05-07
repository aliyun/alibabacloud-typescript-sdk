// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryNotifyResponseBodyDataNotifyItemList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 22973492**********
   */
  aliUid?: number;
  /**
   * @remarks
   * Indicates whether the notification has been confirmed. You can call the [ConfirmNotify](https://help.aliyun.com/document_detail/610444.html) operation to mark the notification as confirmed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  confirmFlag?: boolean;
  /**
   * @remarks
   * The UID of the contact who called the [ConfirmNotify](https://help.aliyun.com/document_detail/610444.html) operation to mark the notification as confirmed. The contact belongs to the current Alibaba Cloud account.
   * 
   * The value **0** indicates that the notification is automatically confirmed by the system.
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
   * The ID of the notification.
   * 
   * @example
   * 103499
   */
  id?: number;
  /**
   * @remarks
   * The number of times that repeatedly sent notifications are blocked.
   * 
   * @example
   * 0
   */
  idempotentCount?: string;
  /**
   * @remarks
   * This parameter ensures the idempotence of the notification and prevents the notification from being repeatedly sent.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxxxxx
   */
  idempotentId?: string;
  /**
   * @remarks
   * The level of the notification. Valid values:
   * 
   * *   **help**
   * *   **success**
   * *   **warning**
   * *   **error**
   * *   **loading**
   * *   **notice**
   * 
   * @example
   * error
   */
  level?: string;
  /**
   * @remarks
   * The element in the notification template. This parameter is a JSON string. Fields in the JSON string vary based on the value of the **TemplateName** parameter.
   * 
   * *   If the **TemplateName** parameter is **RenewalRecommend**, the JSON string contains the following fields:
   * 
   *     *   **instanceName**: the ID of the instance that is about to expire
   *     *   **reservedTime**: the remaining validity period of the instance in days
   * 
   * *   If the **TemplateName** parameter is **InstanceCreateFailed**, the JSON string contains the following fields:
   * 
   *     *   **orderId**: the ID of the order to purchase the instance
   *     *   **reason**: the cause of the instance creation failure
   * 
   * @example
   * {\\"orderId\\":21466**********}
   */
  notifyElement?: string;
  /**
   * @remarks
   * The template of the notification. Valid values:
   * 
   * *   **RenewalRecommend**: The template that is used to notify of renewal suggestions.
   * *   **InstanceCreateFailed**: The template that is used to notify that an instance fails to be created and is refunded.
   * 
   * @example
   * InstanceCreateFailed
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the notification. Valid values:
   * 
   * *   **Sell**: sales notification
   * *   **Operation**: O\\&M notification
   * *   **Promotion**: promotion notification
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

