// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMediaConnectFlowResponseBodyContent } from "./GetMediaConnectFlowResponseBodyContent";


export class GetMediaConnectFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response body.
   */
  content?: GetMediaConnectFlowResponseBodyContent;
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
   * FB503AEF-118E-1516-89E2-7B227EA1AC20
   */
  requestId?: string;
  /**
   * @remarks
   * The returned code. A value of 0 indicates the call is successful.
   * 
   * @example
   * 0
   */
  retcode?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      requestId: 'RequestId',
      retcode: 'Retcode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: GetMediaConnectFlowResponseBodyContent,
      description: 'string',
      requestId: 'string',
      retcode: 'number',
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

