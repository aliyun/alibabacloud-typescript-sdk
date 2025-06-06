// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VehicleMetaVerifyV2ResponseBodyResultObject } from "./VehicleMetaVerifyV2responseBodyResultObject";


export class VehicleMetaVerifyV2ResponseBody extends $dara.Model {
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
   * 5A6229C0-E156-48E4-B6EC-0F528B******
   */
  requestId?: string;
  resultObject?: VehicleMetaVerifyV2ResponseBodyResultObject;
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
      resultObject: VehicleMetaVerifyV2ResponseBodyResultObject,
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

