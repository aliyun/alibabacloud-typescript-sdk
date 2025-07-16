// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateThreadResponseBodyThread extends $dara.Model {
  createAt?: number;
  id?: string;
  static names(): { [key: string]: string } {
    return {
      createAt: 'createAt',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createAt: 'number',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateThreadResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  thread?: CreateThreadResponseBodyThread;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      thread: 'thread',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      thread: CreateThreadResponseBodyThread,
    };
  }

  validate() {
    if(this.thread && typeof (this.thread as any).validate === 'function') {
      (this.thread as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

