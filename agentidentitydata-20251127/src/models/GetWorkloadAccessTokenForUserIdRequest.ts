// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkloadAccessTokenForUserIdRequest extends $dara.Model {
  /**
   * @example
   * externalUser1
   */
  userId?: string;
  /**
   * @example
   * test-workload-identity
   */
  workloadIdentityName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      workloadIdentityName: 'WorkloadIdentityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
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

