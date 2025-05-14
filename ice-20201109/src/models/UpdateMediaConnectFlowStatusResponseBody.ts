// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMediaConnectFlowStatusResponseBody extends $dara.Model {
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
   * ok
   */
  description?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 20B3A1B6-4BD2-5DE6-BCBC-098C9B4F4E91
   */
  requestId?: string;
  /**
   * @remarks
   * The returned error code. A value of 0 indicates that the call is successful.
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

