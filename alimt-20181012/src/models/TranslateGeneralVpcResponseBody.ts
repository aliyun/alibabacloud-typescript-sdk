// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TranslateGeneralVpcResponseBodyData } from "./TranslateGeneralVpcResponseBodyData";


export class TranslateGeneralVpcResponseBody extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 200
   */
  code?: number;
  data?: TranslateGeneralVpcResponseBodyData;
  /**
   * @example
   * translate from source to target not support
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DC2DCCC9-C3DF-4F59-8D8E-78185729F16D
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
      data: TranslateGeneralVpcResponseBodyData,
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

