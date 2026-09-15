// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSandboxesResponseBodyItems extends $dara.Model {
  activeSessionCount?: number;
  createdAt?: string;
  lastActiveAt?: string;
  lastHeartbeatAt?: string;
  maxConcurrentSessions?: number;
  phase?: string;
  sandboxId?: string;
  static names(): { [key: string]: string } {
    return {
      activeSessionCount: 'activeSessionCount',
      createdAt: 'createdAt',
      lastActiveAt: 'lastActiveAt',
      lastHeartbeatAt: 'lastHeartbeatAt',
      maxConcurrentSessions: 'maxConcurrentSessions',
      phase: 'phase',
      sandboxId: 'sandboxId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeSessionCount: 'number',
      createdAt: 'string',
      lastActiveAt: 'string',
      lastHeartbeatAt: 'string',
      maxConcurrentSessions: 'number',
      phase: 'string',
      sandboxId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSandboxesResponseBody extends $dara.Model {
  code?: string;
  httpStatusCode?: number;
  items?: ListSandboxesResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': ListSandboxesResponseBodyItems },
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

