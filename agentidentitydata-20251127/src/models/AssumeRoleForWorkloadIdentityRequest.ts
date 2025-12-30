// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeRoleForWorkloadIdentityRequest extends $dara.Model {
  /**
   * @example
   * 3600
   */
  durationSeconds?: number;
  /**
   * @example
   * {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
   */
  policy?: string;
  /**
   * @example
   * session-name
   */
  roleSessionName?: string;
  /**
   * @example
   * eyAgImFsZyI6ICJSUzI1NiIsIC****
   */
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

