// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResolveCountSummaryResponseBodyResolveSummary extends $dara.Model {
  doh?: number;
  /**
   * @example
   * 123
   */
  http?: number;
  /**
   * @example
   * 123
   */
  http6?: number;
  httpAes?: string;
  /**
   * @example
   * 123
   */
  https?: number;
  /**
   * @example
   * 123
   */
  https6?: number;
  httpsAes?: string;
  static names(): { [key: string]: string } {
    return {
      doh: 'Doh',
      http: 'Http',
      http6: 'Http6',
      httpAes: 'HttpAes',
      https: 'Https',
      https6: 'Https6',
      httpsAes: 'HttpsAes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      doh: 'number',
      http: 'number',
      http6: 'number',
      httpAes: 'string',
      https: 'number',
      https6: 'number',
      httpsAes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResolveCountSummaryResponseBody extends $dara.Model {
  /**
   * @example
   * 3106FFF3-3612-542A-B2CD-3CF4CD48****
   */
  requestId?: string;
  resolveSummary?: GetResolveCountSummaryResponseBodyResolveSummary;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resolveSummary: 'ResolveSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resolveSummary: GetResolveCountSummaryResponseBodyResolveSummary,
    };
  }

  validate() {
    if(this.resolveSummary && typeof (this.resolveSummary as any).validate === 'function') {
      (this.resolveSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

