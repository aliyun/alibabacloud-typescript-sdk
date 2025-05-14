// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddMediaConnectFlowOutputResponseBodyContent } from "./AddMediaConnectFlowOutputResponseBodyContent";


export class AddMediaConnectFlowOutputResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response body.
   */
  content?: AddMediaConnectFlowOutputResponseBodyContent;
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
   * 11AA9E73-FBA0-58DC-97BA-D606D847BCB6
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
      content: AddMediaConnectFlowOutputResponseBodyContent,
      description: 'string',
      requestId: 'string',
      retCode: 'number',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

