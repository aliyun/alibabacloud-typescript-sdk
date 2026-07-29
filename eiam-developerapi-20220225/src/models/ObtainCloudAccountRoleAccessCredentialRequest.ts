// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ObtainCloudAccountRoleAccessCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The business identifier of the cloud account role.
   * 
   * This parameter is required.
   * 
   * @example
   * acs:ram::xxx:role/role-test
   */
  cloudAccountRoleExternalId?: string;
  /**
   * @remarks
   * Specifies the validity duration of the temporary security credentials (STS Token) for the cloud account role, in seconds. Valid values: 900 to 43200 (15 minutes to 12 hours).
   * Constraints:
   * - The minimum value cannot be less than 900 seconds.
   * - The maximum value is subject to the maximum session duration of the cloud provider role or service account. For example, the default maximum session duration for an AWS role is 3600 seconds.
   * 
   * @example
   * 1800
   */
  durationSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      cloudAccountRoleExternalId: 'cloudAccountRoleExternalId',
      durationSeconds: 'durationSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountRoleExternalId: 'string',
      durationSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

