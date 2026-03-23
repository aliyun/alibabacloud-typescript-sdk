// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSendMailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * xxx
   */
  envId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 12D086F6-8F31-4658-84C1-006DED011A85
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      envId: 'EnvId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

