// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveRunResponseBody extends $dara.Model {
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
   * 1642448000000
   */
  createAt?: number;
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
      createAt: 'createAt',
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
      createAt: 'number',
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
    if(this.metadata) {
      $dara.Model.validateMap(this.metadata);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

