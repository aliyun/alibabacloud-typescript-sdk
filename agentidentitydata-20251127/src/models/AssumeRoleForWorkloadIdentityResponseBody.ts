// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AssumeRoleForWorkloadIdentityResponseBodyAssumedRoleUser extends $dara.Model {
  arn?: string;
  assumedRoleId?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      assumedRoleId: 'AssumedRoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      assumedRoleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleForWorkloadIdentityResponseBodyCredentials extends $dara.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  expiration?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      expiration: 'Expiration',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      expiration: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleForWorkloadIdentityResponseBodyWorkloadContextInfoUserContextJwtClaims extends $dara.Model {
  audiences?: string;
  issuer?: string;
  JTI?: string;
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      audiences: 'Audiences',
      issuer: 'Issuer',
      JTI: 'JTI',
      subject: 'Subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audiences: 'string',
      issuer: 'string',
      JTI: 'string',
      subject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleForWorkloadIdentityResponseBodyWorkloadContextInfoUserContext extends $dara.Model {
  jwtClaims?: AssumeRoleForWorkloadIdentityResponseBodyWorkloadContextInfoUserContextJwtClaims;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      jwtClaims: 'JwtClaims',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtClaims: AssumeRoleForWorkloadIdentityResponseBodyWorkloadContextInfoUserContextJwtClaims,
      userId: 'string',
    };
  }

  validate() {
    if(this.jwtClaims && typeof (this.jwtClaims as any).validate === 'function') {
      (this.jwtClaims as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleForWorkloadIdentityResponseBodyWorkloadContextInfo extends $dara.Model {
  userContext?: AssumeRoleForWorkloadIdentityResponseBodyWorkloadContextInfoUserContext;
  workloadIdentityArn?: string;
  static names(): { [key: string]: string } {
    return {
      userContext: 'UserContext',
      workloadIdentityArn: 'WorkloadIdentityArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userContext: AssumeRoleForWorkloadIdentityResponseBodyWorkloadContextInfoUserContext,
      workloadIdentityArn: 'string',
    };
  }

  validate() {
    if(this.userContext && typeof (this.userContext as any).validate === 'function') {
      (this.userContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleForWorkloadIdentityResponseBody extends $dara.Model {
  assumedRoleUser?: AssumeRoleForWorkloadIdentityResponseBodyAssumedRoleUser;
  credentials?: AssumeRoleForWorkloadIdentityResponseBodyCredentials;
  requestId?: string;
  workloadContextInfo?: AssumeRoleForWorkloadIdentityResponseBodyWorkloadContextInfo;
  static names(): { [key: string]: string } {
    return {
      assumedRoleUser: 'AssumedRoleUser',
      credentials: 'Credentials',
      requestId: 'RequestId',
      workloadContextInfo: 'WorkloadContextInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumedRoleUser: AssumeRoleForWorkloadIdentityResponseBodyAssumedRoleUser,
      credentials: AssumeRoleForWorkloadIdentityResponseBodyCredentials,
      requestId: 'string',
      workloadContextInfo: AssumeRoleForWorkloadIdentityResponseBodyWorkloadContextInfo,
    };
  }

  validate() {
    if(this.assumedRoleUser && typeof (this.assumedRoleUser as any).validate === 'function') {
      (this.assumedRoleUser as any).validate();
    }
    if(this.credentials && typeof (this.credentials as any).validate === 'function') {
      (this.credentials as any).validate();
    }
    if(this.workloadContextInfo && typeof (this.workloadContextInfo as any).validate === 'function') {
      (this.workloadContextInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

