// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetThreadDataResponseBodyMessages extends $dara.Model {
  /**
   * @example
   * 205190712643664705
   */
  callerUid?: string;
  /**
   * @example
   * test
   */
  digitalEmployeeName?: string;
  items?: { [key: string]: any }[];
  /**
   * @example
   * 7F0000012B1B668BC3D59A7EF8A00063
   */
  messageId?: string;
  /**
   * @example
   * 1560138499250147
   */
  ownerUid?: string;
  /**
   * @example
   * xxxx
   */
  parentMessageId?: string;
  /**
   * @example
   * cn-qingdao
   */
  region?: string;
  /**
   * @example
   * user
   */
  role?: string;
  /**
   * @example
   * jr-c2b000da0e41b543
   */
  runId?: string;
  /**
   * @example
   * 98958d65-6cdb-4f40-8f46-f5e49f13c860
   */
  threadId?: string;
  /**
   * @example
   * 1765359068
   */
  timestamp?: string;
  /**
   * @example
   * 3b5287ba17572104610774286d0096
   */
  traceId?: string;
  variables?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      callerUid: 'callerUid',
      digitalEmployeeName: 'digitalEmployeeName',
      items: 'items',
      messageId: 'messageId',
      ownerUid: 'ownerUid',
      parentMessageId: 'parentMessageId',
      region: 'region',
      role: 'role',
      runId: 'runId',
      threadId: 'threadId',
      timestamp: 'timestamp',
      traceId: 'traceId',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerUid: 'string',
      digitalEmployeeName: 'string',
      items: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      messageId: 'string',
      ownerUid: 'string',
      parentMessageId: 'string',
      region: 'string',
      role: 'string',
      runId: 'string',
      threadId: 'string',
      timestamp: 'string',
      traceId: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetThreadDataResponseBody extends $dara.Model {
  /**
   * @example
   * test
   */
  digitalEmployeeName?: string;
  /**
   * @example
   * 2
   */
  maxResults?: number;
  messages?: GetThreadDataResponseBodyMessages[];
  /**
   * @example
   * xxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FDE2569-626B-5176-9844-28877A*****
   */
  requestId?: string;
  /**
   * @example
   * aliding_thread_448d05c048a3481f8c19bc1a6038f8f6
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      digitalEmployeeName: 'digitalEmployeeName',
      maxResults: 'maxResults',
      messages: 'messages',
      nextToken: 'nextToken',
      requestId: 'requestId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digitalEmployeeName: 'string',
      maxResults: 'number',
      messages: { 'type': 'array', 'itemType': GetThreadDataResponseBodyMessages },
      nextToken: 'string',
      requestId: 'string',
      threadId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

