// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainRealNameVerificationInfoResponseBody extends $dara.Model {
  /**
   * @example
   * aliyundoc.com
   */
  domainName?: string;
  /**
   * @example
   * dGVzdA==
   */
  identityCredential?: string;
  /**
   * @example
   * 5****************9
   */
  identityCredentialNo?: string;
  /**
   * @example
   * SFZ
   */
  identityCredentialType?: string;
  /**
   * @example
   * http://dbu-nap-p.oss-cn-hangzhou.aliyuncs.com/20190219/140692647406xxxx_5d6baea3e7314fd986afdd86e33exxxx.jpg
   */
  identityCredentialUrl?: string;
  /**
   * @example
   * S2019270W570****
   */
  instanceId?: string;
  /**
   * @example
   * 4DF9D693-0D5B-4EB7-8922-7ECA6BD59314
   */
  requestId?: string;
  /**
   * @example
   * 2018-03-28 00:41:42
   */
  submissionDate?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      identityCredential: 'IdentityCredential',
      identityCredentialNo: 'IdentityCredentialNo',
      identityCredentialType: 'IdentityCredentialType',
      identityCredentialUrl: 'IdentityCredentialUrl',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      submissionDate: 'SubmissionDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      identityCredential: 'string',
      identityCredentialNo: 'string',
      identityCredentialType: 'string',
      identityCredentialUrl: 'string',
      instanceId: 'string',
      requestId: 'string',
      submissionDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

