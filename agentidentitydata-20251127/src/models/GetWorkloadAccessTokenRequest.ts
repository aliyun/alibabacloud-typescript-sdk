// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkloadAccessTokenRequest extends $dara.Model {
  /**
   * @example
   * test-workload-identity
   */
  workloadIdentityName?: string;
  static names(): { [key: string]: string } {
    return {
      workloadIdentityName: 'WorkloadIdentityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

