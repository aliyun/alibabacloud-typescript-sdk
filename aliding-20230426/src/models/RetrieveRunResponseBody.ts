// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RetrieveRunResponseBodyRun extends $dara.Model {
  cancelledAt?: number;
  completedAt?: number;
  createAt?: number;
  expiresAt?: number;
  failedAt?: number;
  id?: string;
  lastErrorMsg?: string;
  startedAt?: number;
  status?: string;
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
      startedAt: 'number',
      status: 'string',
      threadId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetrieveRunResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  run?: RetrieveRunResponseBodyRun;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      run: 'run',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      run: RetrieveRunResponseBodyRun,
    };
  }

  validate() {
    if(this.run && typeof (this.run as any).validate === 'function') {
      (this.run as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

