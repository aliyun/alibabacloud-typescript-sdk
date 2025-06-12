// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportCustomCallTaggingResponseBodyData } from "./ImportCustomCallTaggingResponseBodyData";


export class ImportCustomCallTaggingResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ImportCustomCallTaggingResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
   * @example
   * BA03159C-E808-4FF1-B27E-A61B6E888D7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ImportCustomCallTaggingResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

