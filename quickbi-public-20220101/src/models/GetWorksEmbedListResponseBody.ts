// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorksEmbedListResponseBodyResult } from "./GetWorksEmbedListResponseBodyResult";


export class GetWorksEmbedListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 38C0F*****0-415****9F1-*****422BDB65
   */
  requestId?: string;
  /**
   * @remarks
   * Array of report objects
   */
  result?: GetWorksEmbedListResponseBodyResult;
  /**
   * @remarks
   * Whether the request was successful
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetWorksEmbedListResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

