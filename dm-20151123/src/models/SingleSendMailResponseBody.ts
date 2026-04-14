// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SingleSendMailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Event ID
   * 
   * @example
   * 600000xxxxxxxxxx642
   */
  envId?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 2D086F6-xxxx-xxxx-xxxx-006DED011A85
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

