// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateRunResponseBodyContent } from "./CreateRunResponseBodyContent";
import { CreateRunResponseBodyData } from "./CreateRunResponseBodyData";
import { CreateRunResponseBodyDelta } from "./CreateRunResponseBodyDelta";


export class CreateRunResponseBody extends $dara.Model {
  /**
   * @example
   * 1642448000000
   */
  cancelledAt?: number;
  /**
   * @example
   * 1642448000000
   */
  completedAt?: number;
  /**
   * @example
   * {}
   */
  content?: CreateRunResponseBodyContent;
  /**
   * @example
   * 1642448000000
   */
  createAt?: number;
  data?: CreateRunResponseBodyData;
  /**
   * @example
   * {}
   */
  delta?: CreateRunResponseBodyDelta;
  /**
   * @example
   * 1642448000000
   */
  expiresAt?: number;
  /**
   * @example
   * 1642448000000
   */
  failedAt?: number;
  /**
   * @example
   * runId123
   */
  id?: string;
  /**
   * @example
   * errorMsg
   */
  lastErrorMsg?: string;
  /**
   * @example
   * {}
   */
  metadata?: { [key: string]: any };
  /**
   * @example
   * thread.run
   */
  object?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 1642448000000
   */
  startedAt?: number;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * threadId123
   */
  threadId?: string;
  static names(): { [key: string]: string } {
    return {
      cancelledAt: 'cancelledAt',
      completedAt: 'completedAt',
      content: 'content',
      createAt: 'createAt',
      data: 'data',
      delta: 'delta',
      expiresAt: 'expiresAt',
      failedAt: 'failedAt',
      id: 'id',
      lastErrorMsg: 'lastErrorMsg',
      metadata: 'metadata',
      object: 'object',
      requestId: 'requestId',
      startedAt: 'startedAt',
      status: 'status',
      threadId: 'threadId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledAt: 'number',
      completedAt: 'number',
      content: CreateRunResponseBodyContent,
      createAt: 'number',
      data: CreateRunResponseBodyData,
      delta: CreateRunResponseBodyDelta,
      expiresAt: 'number',
      failedAt: 'number',
      id: 'string',
      lastErrorMsg: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      object: 'string',
      requestId: 'string',
      startedAt: 'number',
      status: 'string',
      threadId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(this.delta && typeof (this.delta as any).validate === 'function') {
      (this.delta as any).validate();
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

