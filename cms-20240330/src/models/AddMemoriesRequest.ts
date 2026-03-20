// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddMemoriesRequestMessages extends $dara.Model {
  /**
   * @example
   * My name is Zhang San and I live in Hangzhou.
   */
  content?: string;
  /**
   * @example
   * user
   */
  role?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemoriesRequest extends $dara.Model {
  /**
   * @example
   * 952730733889060865
   */
  agentId?: string;
  /**
   * @example
   * mm_480d961a1b5e4efe84603f4cbc0f
   */
  appId?: string;
  /**
   * @example
   * true
   */
  asyncMode?: boolean;
  /**
   * @example
   * Your custom instructions here
   */
  customInstructions?: string;
  /**
   * @example
   * true
   */
  infer?: boolean;
  messages?: AddMemoriesRequestMessages[];
  /**
   * @example
   * {"sessionId":"test_session_001"}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * jr-80ded1d6953c64ea
   */
  runId?: string;
  /**
   * @example
   * 12312314214
   */
  timestamp?: number;
  /**
   * @example
   * test_user_001
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agentId',
      appId: 'appId',
      asyncMode: 'asyncMode',
      customInstructions: 'customInstructions',
      infer: 'infer',
      messages: 'messages',
      metadata: 'metadata',
      runId: 'runId',
      timestamp: 'timestamp',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      appId: 'string',
      asyncMode: 'boolean',
      customInstructions: 'string',
      infer: 'boolean',
      messages: { 'type': 'array', 'itemType': AddMemoriesRequestMessages },
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      runId: 'string',
      timestamp: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.messages)) {
      $dara.Model.validateArray(this.messages);
    }
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

