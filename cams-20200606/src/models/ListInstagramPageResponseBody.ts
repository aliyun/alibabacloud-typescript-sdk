// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstagramPageResponseBodyDataAgentInfo extends $dara.Model {
  /**
   * @example
   * aaa,bbb
   */
  agentKeywords?: string;
  /**
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
   * @example
   * instance1
   */
  beebotInstanceId?: string;
  /**
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
   * @example
   * 176546546464
   */
  accountId?: string;
  /**
   * @example
   * matrryhtr
   */
  accountName?: string;
  /**
   * @example
   * connected
   */
  connectionStatus?: string;
  /**
   * @example
   * Y
   */
  httpFlag?: string;
  /**
   * @example
   * 213254324532523
   */
  pageId?: string;
  /**
   * @example
   * iwhaclecloud-2
   */
  pageName?: string;
  /**
   * @example
   * Y
   */
  queueFlag?: string;
  /**
   * @example
   * aaa
   */
  queueName?: string;
  /**
   * @example
   * HTTP://WWW.***.COM
   */
  statusCallbackUrl?: string;
  /**
   * @example
   * AAA
   */
  statusQueue?: string;
  /**
   * @example
   * HTTP://WWW.***.COM
   */
  upCallbackUrl?: string;
  /**
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
  agentInfo?: ListInstagramPageResponseBodyDataAgentInfo;
  beebotInfo?: ListInstagramPageResponseBodyDataBeebotInfo;
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
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListInstagramPageResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * dsfdsf-3jfj***
   */
  requestId?: string;
  /**
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

