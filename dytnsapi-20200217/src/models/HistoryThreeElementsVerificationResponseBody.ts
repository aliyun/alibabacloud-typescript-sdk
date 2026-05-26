// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HistoryThreeElementsVerificationResponseBodyData extends $dara.Model {
  /**
   * @example
   * 72
   */
  isConsistent?: number;
  /**
   * @example
   * CMCC
   */
  requestCarrier?: string;
  static names(): { [key: string]: string } {
    return {
      isConsistent: 'IsConsistent',
      requestCarrier: 'RequestCarrier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isConsistent: 'number',
      requestCarrier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HistoryThreeElementsVerificationResponseBody extends $dara.Model {
  /**
   * @example
   * -
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: HistoryThreeElementsVerificationResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: HistoryThreeElementsVerificationResponseBodyData,
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

