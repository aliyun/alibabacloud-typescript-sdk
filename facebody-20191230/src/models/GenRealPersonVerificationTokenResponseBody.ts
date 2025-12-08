// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenRealPersonVerificationTokenResponseBodyData extends $dara.Model {
  /**
   * @example
   * 9fca3791c158a479ead9f2ba65ab3XXX
   */
  verificationToken?: string;
  static names(): { [key: string]: string } {
    return {
      verificationToken: 'VerificationToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verificationToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenRealPersonVerificationTokenResponseBody extends $dara.Model {
  data?: GenRealPersonVerificationTokenResponseBodyData;
  /**
   * @example
   * A31006F2-22E7-4538-93BB-DE6B563643EE
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
      data: GenRealPersonVerificationTokenResponseBodyData,
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

