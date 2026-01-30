// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProcessApprovalResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * id of request
   * 
   * @example
   * 23309219-4A34-589D-A3E0-9B2A3BFFD24F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
      message: 'string',
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

