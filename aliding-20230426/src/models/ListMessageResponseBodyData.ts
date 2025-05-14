// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMessageResponseBodyDataContent } from "./ListMessageResponseBodyDataContent";


export class ListMessageResponseBodyData extends $dara.Model {
  /**
   * @example
   * []
   */
  content?: ListMessageResponseBodyDataContent[];
  /**
   * @example
   * 1642448000000
   */
  createAt?: number;
  /**
   * @example
   * messageId123
   */
  id?: string;
  /**
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * thread.message
   */
  object?: string;
  /**
   * @example
   * user
   */
  role?: string;
  /**
   * @example
   * runId123
   */
  runId?: string;
  /**
   * @example
   * threadId123
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createAt: 'createAt',
      id: 'id',
      metadata: 'metadata',
      object: 'object',
      role: 'role',
      runId: 'runId',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': ListMessageResponseBodyDataContent },
      createAt: 'number',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
      role: 'string',
      runId: 'string',
      threadId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
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

