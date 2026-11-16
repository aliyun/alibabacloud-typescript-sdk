// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstagramPageResponseBodyDataAgentInfo extends $dara.Model {
  /**
   * @remarks
   * The configurations related to human agents.
   * 
   * @example
   * aaa,bbb
   */
  agentKeywords?: string;
  /**
   * @remarks
   * The configurations related to human agents.
   * 
   * @example
   * Y
   */
  agentNoKeywords?: string;
  static names(): { [key: string]: string } {
    return {
      agentKeywords: 'AgentKeywords',
      agentNoKeywords: 'AgentNoKeywords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKeywords: 'string',
      agentNoKeywords: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstagramPageResponseBodyDataBeebotInfo extends $dara.Model {
  /**
   * @remarks
   * The Chatbot instance ID.
   * 
   * @example
   * instance1
   */
  beebotInstanceId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * name1
   */
  beebotNamespaceId?: string;
  static names(): { [key: string]: string } {
    return {
      beebotInstanceId: 'BeebotInstanceId',
      beebotNamespaceId: 'BeebotNamespaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beebotInstanceId: 'string',
      beebotNamespaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstagramPageResponseBodyDataInstagramInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated account.
   * 
   * @example
   * 176546546464
   */
  accountId?: string;
  /**
   * @remarks
   * The account name.
   * 
   * @example
   * matrryhtr
   */
  accountName?: string;
  /**
   * @remarks
   * The endpoint connection status. Valid values:
   * 
   * - **Pending**: Modifying.
   * 
   * - **Connecting**: Connecting.
   * 
   * - **Connected**: Connected.
   * 
   * - **Disconnecting**: Disconnecting.
   * 
   * - **Disconnected**: Disconnected.
   * 
   * - **Deleting**: Deleting.
   * 
   * - **ServiceDeleted**: The service corresponding to the endpoint is deleted.
   * 
   * @example
   * connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * Specifies whether to use HTTP to receive receipts. Valid values:
   * - Y: Yes.
   * - N: No.
   * 
   * @example
   * Y
   */
  httpFlag?: string;
  /**
   * @remarks
   * The page ID.
   * 
   * @example
   * 213254324532523
   */
  pageId?: string;
  /**
   * @remarks
   * The name of the page.
   * 
   * @example
   * iwhaclecloud-2
   */
  pageName?: string;
  /**
   * @remarks
   * Specifies whether to use a queue to receive receipts. Valid values:
   * 
   * - Y: Yes.
   * 
   * - N: No.
   * 
   * @example
   * Y
   */
  queueFlag?: string;
  /**
   * @remarks
   * The name of the queue.
   * 
   * @example
   * aaa
   */
  queueName?: string;
  /**
   * @remarks
   * The callback URL for the status report API over HTTP.
   * 
   * @example
   * HTTP://WWW.***.COM
   */
  statusCallbackUrl?: string;
  /**
   * @remarks
   * The queue for status report notifications.
   * 
   * @example
   * AAA
   */
  statusQueue?: string;
  /**
   * @remarks
   * The callback URL for the upstream message API over HTTP.
   * 
   * @example
   * HTTP://WWW.***.COM
   */
  upCallbackUrl?: string;
  /**
   * @remarks
   * The queue for upstream message notifications.
   * 
   * @example
   * BBB
   */
  upQueue?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      connectionStatus: 'ConnectionStatus',
      httpFlag: 'HttpFlag',
      pageId: 'PageId',
      pageName: 'PageName',
      queueFlag: 'QueueFlag',
      queueName: 'QueueName',
      statusCallbackUrl: 'StatusCallbackUrl',
      statusQueue: 'StatusQueue',
      upCallbackUrl: 'UpCallbackUrl',
      upQueue: 'UpQueue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      connectionStatus: 'string',
      httpFlag: 'string',
      pageId: 'string',
      pageName: 'string',
      queueFlag: 'string',
      queueName: 'string',
      statusCallbackUrl: 'string',
      statusQueue: 'string',
      upCallbackUrl: 'string',
      upQueue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstagramPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The human agent information.
   */
  agentInfo?: ListInstagramPageResponseBodyDataAgentInfo;
  /**
   * @remarks
   * The Chatbot information.
   */
  beebotInfo?: ListInstagramPageResponseBodyDataBeebotInfo;
  /**
   * @remarks
   * The Instagram page information.
   */
  instagramInfo?: ListInstagramPageResponseBodyDataInstagramInfo;
  static names(): { [key: string]: string } {
    return {
      agentInfo: 'AgentInfo',
      beebotInfo: 'BeebotInfo',
      instagramInfo: 'InstagramInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInfo: ListInstagramPageResponseBodyDataAgentInfo,
      beebotInfo: ListInstagramPageResponseBodyDataBeebotInfo,
      instagramInfo: ListInstagramPageResponseBodyDataInstagramInfo,
    };
  }

  validate() {
    if(this.agentInfo && typeof (this.agentInfo as any).validate === 'function') {
      (this.agentInfo as any).validate();
    }
    if(this.beebotInfo && typeof (this.beebotInfo as any).validate === 'function') {
      (this.beebotInfo as any).validate();
    }
    if(this.instagramInfo && typeof (this.instagramInfo as any).validate === 'function') {
      (this.instagramInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstagramPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The status code of the request.
   * 
   * - A value of OK indicates that the request is successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data object returned in the response.
   */
  data?: ListInstagramPageResponseBodyData;
  /**
   * @remarks
   * The message returned in the response.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request. The ID is generated by Alibaba Cloud for the request and can be used to troubleshoot and locate issues.
   * 
   * @example
   * dsfdsf-3jfj***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values:
   * 
   * - true: Successful.
   * 
   * - false: Failed.
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ListInstagramPageResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

