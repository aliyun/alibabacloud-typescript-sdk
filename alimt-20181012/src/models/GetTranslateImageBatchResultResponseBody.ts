// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTranslateImageBatchResultResponseBodyData } from "./GetTranslateImageBatchResultResponseBodyData";


export class GetTranslateImageBatchResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetTranslateImageBatchResultResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * DACD263C-C068-5116-83EC-117245AA35CF
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
      data: GetTranslateImageBatchResultResponseBodyData,
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

