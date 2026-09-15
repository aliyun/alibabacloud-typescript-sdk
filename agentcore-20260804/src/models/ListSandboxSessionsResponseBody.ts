// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSandboxSessionsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The external channel type, such as DINGTALK, FEISHU, or WECOM. This parameter is empty for non-external channels.
   */
  channelType?: string;
  sessionId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'channelType',
      sessionId: 'sessionId',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      sessionId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSandboxSessionsResponseBody extends $dara.Model {
  code?: string;
  httpStatusCode?: number;
  items?: ListSandboxSessionsResponseBodyItems[];
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      items: 'items',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListSandboxSessionsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

