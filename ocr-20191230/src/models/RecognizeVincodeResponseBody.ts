// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeVINCodeResponseBodyData extends $dara.Model {
  /**
   * @example
   * LVBB2FAF777999888
   */
  vinCode?: string;
  static names(): { [key: string]: string } {
    return {
      vinCode: 'VinCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vinCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVINCodeResponseBody extends $dara.Model {
  data?: RecognizeVINCodeResponseBodyData;
  /**
   * @example
   * 911FC8CF-CC27-477E-BE3B-7ED77DF4DFE0
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
      data: RecognizeVINCodeResponseBodyData,
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

