// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryQualificationDetailResponseBodyCredentialsQualificationCredential extends $dara.Model {
  /**
   * @example
   * 92610725MA7G2E****
   */
  credentialNo?: string;
  /**
   * @example
   * SHSQB
   */
  credentialType?: string;
  credentialUrl?: string;
  static names(): { [key: string]: string } {
    return {
      credentialNo: 'CredentialNo',
      credentialType: 'CredentialType',
      credentialUrl: 'CredentialUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialNo: 'string',
      credentialType: 'string',
      credentialUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQualificationDetailResponseBodyCredentials extends $dara.Model {
  qualificationCredential?: QueryQualificationDetailResponseBodyCredentialsQualificationCredential[];
  static names(): { [key: string]: string } {
    return {
      qualificationCredential: 'QualificationCredential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualificationCredential: { 'type': 'array', 'itemType': QueryQualificationDetailResponseBodyCredentialsQualificationCredential },
    };
  }

  validate() {
    if(Array.isArray(this.qualificationCredential)) {
      $dara.Model.validateArray(this.qualificationCredential);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQualificationDetailResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  auditStatus?: number;
  credentials?: QueryQualificationDetailResponseBodyCredentials;
  /**
   * @example
   * 9DFCF6F8-243C-****-8035-4B12FEFD7D48
   */
  requestId?: string;
  /**
   * @example
   * 943a1662898a****0acbdbeca91
   */
  trackId?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      credentials: 'Credentials',
      requestId: 'RequestId',
      trackId: 'TrackId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'number',
      credentials: QueryQualificationDetailResponseBodyCredentials,
      requestId: 'string',
      trackId: 'string',
    };
  }

  validate() {
    if(this.credentials && typeof (this.credentials as any).validate === 'function') {
      (this.credentials as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

