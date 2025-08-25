// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssessSharpnessResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  sharpness?: number;
  static names(): { [key: string]: string } {
    return {
      sharpness: 'Sharpness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sharpness: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessSharpnessResponseBody extends $dara.Model {
  data?: AssessSharpnessResponseBodyData;
  /**
   * @example
   * C0B594A1-383E-4F97-A740-0D51CF8E37D2
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
      data: AssessSharpnessResponseBodyData,
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

