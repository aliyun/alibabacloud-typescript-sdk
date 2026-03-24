// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainVerifyDataResponseBodyContent extends $dara.Model {
  rootDomain?: string;
  verifyCode?: string;
  verifyKey?: string;
  static names(): { [key: string]: string } {
    return {
      rootDomain: 'RootDomain',
      verifyCode: 'verifyCode',
      verifyKey: 'verifyKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rootDomain: 'string',
      verifyCode: 'string',
      verifyKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainVerifyDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The verification content.
   * 
   * @example
   * {
   *     "verifiCode": "uy0-DbxL4HBmUtSUXpkXctaSnCAUKhhNH6WKl-JnJY4",
   *     "verifyKey": "_acme-challenge"
   *   }
   */
  content?: DescribeDomainVerifyDataResponseBodyContent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: DescribeDomainVerifyDataResponseBodyContent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

