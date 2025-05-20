// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeepfakeDetectIntlResponseBodyResultObject } from "./DeepfakeDetectIntlResponseBodyResultObject";


export class DeepfakeDetectIntlResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 8FC3D6AC-9FED-4311-8DA7-C4BF47D9F260
   */
  requestId?: string;
  resultObject?: DeepfakeDetectIntlResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: DeepfakeDetectIntlResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

