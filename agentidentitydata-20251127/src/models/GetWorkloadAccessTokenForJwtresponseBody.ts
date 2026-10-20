// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkloadAccessTokenForJWTResponseBodyUserContextJwtClaims extends $dara.Model {
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

export class GetWorkloadAccessTokenForJWTResponseBodyUserContext extends $dara.Model {
  jwtClaims?: GetWorkloadAccessTokenForJWTResponseBodyUserContextJwtClaims;
  static names(): { [key: string]: string } {
    return {
      jwtClaims: 'JwtClaims',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtClaims: GetWorkloadAccessTokenForJWTResponseBodyUserContextJwtClaims,
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

export class GetWorkloadAccessTokenForJWTResponseBody extends $dara.Model {
  requestId?: string;
  userContext?: GetWorkloadAccessTokenForJWTResponseBodyUserContext;
  workloadAccessToken?: string;
  workloadIdentityArn?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userContext: 'UserContext',
      workloadAccessToken: 'WorkloadAccessToken',
      workloadIdentityArn: 'WorkloadIdentityArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userContext: GetWorkloadAccessTokenForJWTResponseBodyUserContext,
      workloadAccessToken: 'string',
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

