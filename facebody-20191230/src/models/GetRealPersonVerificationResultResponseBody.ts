// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealPersonVerificationResultResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  passed?: boolean;
  static names(): { [key: string]: string } {
    return {
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passed: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealPersonVerificationResultResponseBody extends $dara.Model {
  data?: GetRealPersonVerificationResultResponseBodyData;
  /**
   * @example
   * 10FC953D-7C0C-4915-8949-34E3246E5B79
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
      data: GetRealPersonVerificationResultResponseBodyData,
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

