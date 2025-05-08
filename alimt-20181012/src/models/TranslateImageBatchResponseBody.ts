// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TranslateImageBatchResponseBodyData } from "./TranslateImageBatchResponseBodyData";


export class TranslateImageBatchResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: TranslateImageBatchResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * D774D33D-F1CB-5A2C-A787-E0A2179239CE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: TranslateImageBatchResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

