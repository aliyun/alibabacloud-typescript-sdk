// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyDomainOwnerResponseBodyVerifyResult extends $dara.Model {
  /**
   * @remarks
   * The reasons why the verification fails. Valid values:
   * 
   * *   DnsTxtVerifyFailed: The DNS TXT record and the domain name do not match.
   * *   DnsServerError: The DNS server is abnormal.
   * *   VerifyFileNotExist: The verification file does not exist.
   * *   VerifyDomainNotAccess: The access to the domain name failed.
   * *   FileContentVerifyFailed: The content of the verification file and the domain name do not match.
   * 
   * @example
   * DnsTxtVerifyFailed
   */
  failCode?: string;
  /**
   * @remarks
   * The verification result. Valid values:
   * 
   * *   **true**: The verification succeeds.
   * *   **false**: The verification fails.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      failCode: 'FailCode',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCode: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDomainOwnerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D****E840
   */
  requestId?: string;
  /**
   * @remarks
   * The verification result.
   */
  verifyResult?: VerifyDomainOwnerResponseBodyVerifyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      verifyResult: 'VerifyResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      verifyResult: VerifyDomainOwnerResponseBodyVerifyResult,
    };
  }

  validate() {
    if(this.verifyResult && typeof (this.verifyResult as any).validate === 'function') {
      (this.verifyResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

