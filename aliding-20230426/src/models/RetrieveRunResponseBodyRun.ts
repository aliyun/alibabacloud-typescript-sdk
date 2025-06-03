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

