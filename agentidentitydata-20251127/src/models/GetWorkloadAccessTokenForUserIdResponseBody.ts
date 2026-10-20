// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkloadAccessTokenForUserIdResponseBodyUserContext extends $dara.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkloadAccessTokenForUserIdResponseBody extends $dara.Model {
  requestId?: string;
  userContext?: GetWorkloadAccessTokenForUserIdResponseBodyUserContext;
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
      userContext: GetWorkloadAccessTokenForUserIdResponseBodyUserContext,
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

