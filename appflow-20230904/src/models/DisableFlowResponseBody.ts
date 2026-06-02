// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableFlowResponseBody extends $dara.Model {
  data?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C0CEBCD9-CE5D-5BDE-B8E5-F3ADD1BB943F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

