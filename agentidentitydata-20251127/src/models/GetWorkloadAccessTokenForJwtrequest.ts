// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkloadAccessTokenForJWTRequest extends $dara.Model {
  /**
   * @example
   * eyAgImFsZyI6ICJSUzI1NiIsI*******
   */
  userToken?: string;
  /**
   * @example
   * test-workload-identity
   */
  workloadIdentityName?: string;
  static names(): { [key: string]: string } {
    return {
      userToken: 'UserToken',
      workloadIdentityName: 'WorkloadIdentityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userToken: 'string',
      workloadIdentityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

