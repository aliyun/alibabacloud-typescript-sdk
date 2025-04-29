// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the command task.
   * 
   * @example
   * f-7d2a745b412b46****
   */
  invokeId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
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

