// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaConnectFlowOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response body.
   * 
   * @example
   * ""
   */
  content?: string;
  /**
   * @remarks
   * The call description.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D737D0BC-4CB5-55AA-8119-B540C95DFE6A
   */
  requestId?: string;
  /**
   * @remarks
   * The returned error code. A value of 0 indicates the call is successful.
   * 
   * @example
   * 0
   */
  retCode?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      requestId: 'RequestId',
      retCode: 'RetCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      requestId: 'string',
      retCode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

