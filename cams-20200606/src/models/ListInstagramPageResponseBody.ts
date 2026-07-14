// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstagramPageResponseBodyDataAgentInfo extends $dara.Model {
  /**
   * @remarks
   * The agent-related configurations.
   * 
   * @example
   * aaa,bbb
   */
  agentKeywords?: string;
  /**
   * @remarks
   * The agent-related configurations.
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
   * The ID of the account to which the page belongs.
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
   * - **Pending**: Being modified.
   * 
   * - **Connecting**: Connecting.
   * 
   * - **Connected**: Connected.
   * 
   * - **Disconnecting**: Disconnecting.
   * 
   * - **Disconnected**: Not connected.
   * 
   * - **Deleting**: Being deleted.
   * 
   * - **ServiceDeleted**: The service associated with the endpoint has been deleted.
   * 
   * @example
   * connected
   */
  connectionStatus?: string;
  /**
   * @remarks
   * Indicates whether receipts are received through HTTP. Valid values:
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
   * The page name.
   * 
   * @example
   * iwhaclecloud-2
   */
  pageName?: string;
  /**
   * @remarks
   * Indicates whether receipts are received through a queue. Valid values:
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
   * The queue name.
   * 
   * @example
   * aaa
   */
  queueName?: string;
  /**
   * @remarks
   * The callback URL for status reports over HTTP.
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
   * The callback URL for upstream messages over HTTP.
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
   * The agent information.
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
   * The request status code.
   * 
   * - A value of OK indicates that the request was successful.
   * 
   * - For other error codes, see [Error codes](https://help.aliyun.com/document_detail/196974.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data object.
   */
  data?: ListInstagramPageResponseBodyData;
  /**
   * @remarks
   * The message returned with the result.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID. It is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting.
   * 
   * @example
   * dsfdsf-3jfj***
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
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

