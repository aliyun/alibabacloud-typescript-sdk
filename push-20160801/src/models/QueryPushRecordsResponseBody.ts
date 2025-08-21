// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPushRecordsResponseBodyPushInfosPushInfo extends $dara.Model {
  /**
   * @example
   * 333526247
   */
  appKey?: number;
  /**
   * @example
   * abcd
   */
  body?: string;
  /**
   * @example
   * ANDROID
   */
  deviceType?: string;
  /**
   * @example
   * 510431
   */
  messageId?: string;
  /**
   * @example
   * 2021-09-15T02:05:24Z
   */
  pushTime?: string;
  /**
   * @example
   * NOTICE
   */
  pushType?: string;
  /**
   * @example
   * DEVICE
   */
  source?: string;
  /**
   * @example
   * SENT
   */
  status?: string;
  /**
   * @example
   * DEVICE
   */
  target?: string;
  /**
   * @example
   * sssss
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      body: 'Body',
      deviceType: 'DeviceType',
      messageId: 'MessageId',
      pushTime: 'PushTime',
      pushType: 'PushType',
      source: 'Source',
      status: 'Status',
      target: 'Target',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      body: 'string',
      deviceType: 'string',
      messageId: 'string',
      pushTime: 'string',
      pushType: 'string',
      source: 'string',
      status: 'string',
      target: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushRecordsResponseBodyPushInfos extends $dara.Model {
  pushInfo?: QueryPushRecordsResponseBodyPushInfosPushInfo[];
  static names(): { [key: string]: string } {
    return {
      pushInfo: 'PushInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushInfo: { 'type': 'array', 'itemType': QueryPushRecordsResponseBodyPushInfosPushInfo },
    };
  }

  validate() {
    if(Array.isArray(this.pushInfo)) {
      $dara.Model.validateArray(this.pushInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * i91D***********kXIh/dVBEQ==
   */
  nextToken?: string;
  /**
   * @example
   * 11
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  pushInfos?: QueryPushRecordsResponseBodyPushInfos;
  /**
   * @example
   * 9B24B396-249D-55E4-8CA1-66C9B50BB734
   */
  requestId?: string;
  /**
   * @example
   * 193
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      page: 'Page',
      pageSize: 'PageSize',
      pushInfos: 'PushInfos',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      page: 'number',
      pageSize: 'number',
      pushInfos: QueryPushRecordsResponseBodyPushInfos,
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.pushInfos && typeof (this.pushInfos as any).validate === 'function') {
      (this.pushInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

