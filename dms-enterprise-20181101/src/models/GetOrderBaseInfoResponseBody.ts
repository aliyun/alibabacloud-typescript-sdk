// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserList extends $dara.Model {
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserNickList extends $dara.Model {
  userNicks?: string[];
  static names(): { [key: string]: string } {
    return {
      userNicks: 'UserNicks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userNicks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userNicks)) {
      $dara.Model.validateArray(this.userNicks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderBaseInfoResponseBodyOrderBaseInfo extends $dara.Model {
  /**
   * @remarks
   * The Key of the ticket attachment. This information is returned only when an attachment is uploaded when a ticket is created.
   * 
   * @example
   * upload_order_info_856887_f356366f-f0f8-42fc-ba57-4a509303e814_18072d8a9bce876e3073bc655c2865f.png
   */
  attachmentKey?: string;
  /**
   * @remarks
   * The remarks of the ticket.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The applicant.
   * 
   * @example
   * xxx
   */
  committer?: string;
  /**
   * @remarks
   * The ID of the applicant. Note: The ID is different from the Alibaba Cloud account ID of the applicant.
   * 
   * @example
   * 1
   */
  committerId?: number;
  /**
   * @remarks
   * The time when the ticket was created.
   * 
   * @example
   * 2019-10-10 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the ticket was last modified.
   * 
   * @example
   * 2019-10-10 00:00:00
   */
  lastModifyTime?: string;
  /**
   * @remarks
   * The ID of the ticket.
   * 
   * @example
   * 12345
   */
  orderId?: number;
  /**
   * @remarks
   * The original file name of the ticket attachment. This information is returned only when an attachment is uploaded when a ticket is created.
   * 
   * @example
   * 18072d8a9bce876e3073bc655c2865f.png
   */
  originAttachmentName?: string;
  /**
   * @remarks
   * The type of the ticket. For more information about the value of this parameter, see the request parameters of the [CreateOrder](https://help.aliyun.com/document_detail/465865.html) operation.
   * 
   * @example
   * DC_COMMON
   */
  pluginType?: string;
  /**
   * @remarks
   * The IDs of the operators that are related to the ticket.
   */
  relatedUserList?: GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserList;
  /**
   * @remarks
   * The nicknames of the operators that are related to the ticket.
   */
  relatedUserNickList?: GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserNickList;
  /**
   * @remarks
   * The status code of the ticket. Valid values:
   * 
   * *   **new**: The ticket is created.
   * *   **toaudit**: The ticket is being reviewed.
   * *   **Approved**: The ticket is approved.
   * *   **reject**: The ticket is rejected.
   * *   **processing**: The ticket is being executed.
   * *   **success**: The ticket is executed.
   * *   **closed**: The ticket is closed.
   * 
   * @example
   * success
   */
  statusCode?: string;
  /**
   * @remarks
   * The description of the status.
   * 
   * @example
   * success
   */
  statusDesc?: string;
  /**
   * @remarks
   * The ID of the approval process.
   * 
   * @example
   * 1
   */
  workflowInstanceId?: number;
  /**
   * @remarks
   * The description of the approval process.
   * 
   * @example
   * approved
   */
  workflowStatusDesc?: string;
  static names(): { [key: string]: string } {
    return {
      attachmentKey: 'AttachmentKey',
      comment: 'Comment',
      committer: 'Committer',
      committerId: 'CommitterId',
      createTime: 'CreateTime',
      lastModifyTime: 'LastModifyTime',
      orderId: 'OrderId',
      originAttachmentName: 'OriginAttachmentName',
      pluginType: 'PluginType',
      relatedUserList: 'RelatedUserList',
      relatedUserNickList: 'RelatedUserNickList',
      statusCode: 'StatusCode',
      statusDesc: 'StatusDesc',
      workflowInstanceId: 'WorkflowInstanceId',
      workflowStatusDesc: 'WorkflowStatusDesc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentKey: 'string',
      comment: 'string',
      committer: 'string',
      committerId: 'number',
      createTime: 'string',
      lastModifyTime: 'string',
      orderId: 'number',
      originAttachmentName: 'string',
      pluginType: 'string',
      relatedUserList: GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserList,
      relatedUserNickList: GetOrderBaseInfoResponseBodyOrderBaseInfoRelatedUserNickList,
      statusCode: 'string',
      statusDesc: 'string',
      workflowInstanceId: 'number',
      workflowStatusDesc: 'string',
    };
  }

  validate() {
    if(this.relatedUserList && typeof (this.relatedUserList as any).validate === 'function') {
      (this.relatedUserList as any).validate();
    }
    if(this.relatedUserNickList && typeof (this.relatedUserNickList as any).validate === 'function') {
      (this.relatedUserNickList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrderBaseInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The basic information about the ticket.
   */
  orderBaseInfo?: GetOrderBaseInfoResponseBodyOrderBaseInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7133DF67-5B25-460F-8285-C4CC93472C2F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      orderBaseInfo: 'OrderBaseInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      orderBaseInfo: GetOrderBaseInfoResponseBodyOrderBaseInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.orderBaseInfo && typeof (this.orderBaseInfo as any).validate === 'function') {
      (this.orderBaseInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

