// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkloadAccessTokenResponseBody extends $dara.Model {
  requestId?: string;
  workloadAccessToken?: string;
  workloadIdentityArn?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workloadAccessToken: 'WorkloadAccessToken',
      workloadIdentityArn: 'WorkloadIdentityArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workloadAccessToken: 'string',
      workloadIdentityArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

