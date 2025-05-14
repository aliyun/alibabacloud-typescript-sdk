// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateMediaConnectFlowResponseBodyContent } from "./CreateMediaConnectFlowResponseBodyContent";


export class CreateMediaConnectFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response body.
   */
  content?: CreateMediaConnectFlowResponseBodyContent;
  /**
   * @remarks
   * The returned message.
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
   * 86D92F9D-65E8-58A2-85D1-9DEEECC172E8
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
      content: CreateMediaConnectFlowResponseBodyContent,
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

