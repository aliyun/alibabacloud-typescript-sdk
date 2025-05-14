// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMessageResponseBodyContent } from "./CreateMessageResponseBodyContent";


export class CreateMessageResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  content?: CreateMessageResponseBodyContent[];
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
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * user
   */
  role?: string;
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
      requestId: 'requestId',
      role: 'role',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': CreateMessageResponseBodyContent },
      createAt: 'number',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
      requestId: 'string',
      role: 'string',
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

