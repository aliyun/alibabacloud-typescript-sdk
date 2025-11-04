// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaConnectFlowAllOutputNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response body, as an array of strings.
   */
  content?: string[];
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
   * 559E9828-245D-5CBA-9C7A-4E01453F091F
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
      content: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      requestId: 'string',
      retCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

