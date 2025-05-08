// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateImageTranslateTaskResponseBodyData } from "./CreateImageTranslateTaskResponseBodyData";


export class CreateImageTranslateTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: CreateImageTranslateTaskResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * A41F6E25-8520-4AF0-90EF-AF7E32840108
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
      data: CreateImageTranslateTaskResponseBodyData,
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

