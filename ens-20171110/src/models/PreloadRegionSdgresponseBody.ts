// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreloadRegionSDGResponseBodyData } from "./PreloadRegionSdgresponseBodyData";


export class PreloadRegionSDGResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data object.
   */
  data?: PreloadRegionSDGResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C0003E8B-B930-4F59-ADC0-0E209A9012A8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: PreloadRegionSDGResponseBodyData,
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

