// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssessExposureResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0.1
   */
  exposure?: number;
  static names(): { [key: string]: string } {
    return {
      exposure: 'Exposure',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exposure: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssessExposureResponseBody extends $dara.Model {
  data?: AssessExposureResponseBodyData;
  /**
   * @example
   * 4EF3C65B-C3CC-425B-AFB3-2FE6B98C578B
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
      data: AssessExposureResponseBodyData,
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

