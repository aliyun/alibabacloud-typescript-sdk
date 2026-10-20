// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeRoleForWorkloadIdentityRequest extends $dara.Model {
  durationSeconds?: number;
  policy?: string;
  roleSessionName?: string;
  workloadAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      durationSeconds: 'DurationSeconds',
      policy: 'Policy',
      roleSessionName: 'RoleSessionName',
      workloadAccessToken: 'WorkloadAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSeconds: 'number',
      policy: 'string',
      roleSessionName: 'string',
      workloadAccessToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

