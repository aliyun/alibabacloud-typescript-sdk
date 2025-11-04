// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForbidMediaConnectFlowOutputResponseBody extends $dara.Model {
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
   * The request ID.
   * 
   * @example
   * 1BCA0CFC-CBD4-5656-9D04-21B1FADBB92A
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

