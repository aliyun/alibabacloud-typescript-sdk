// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenMediaConnectFlowFailoverResponseBody extends $dara.Model {
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
   * 11357BE8-4C54-58EA-890A-5AB646EDE4B2
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

