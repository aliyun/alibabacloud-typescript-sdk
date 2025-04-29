// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the command task.
   * 
   * @example
   * t-7d2a745b412b4601b2d47f6a768d****
   */
  invokeId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
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

