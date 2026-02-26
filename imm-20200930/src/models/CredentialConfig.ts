// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialConfigChain extends $dara.Model {
  /**
   * @remarks
   * The ID of the account that you use to grant permissions.
   * 
   * @example
   * 10232100246xxxxx
   */
  assumeRoleFor?: string;
  /**
   * @remarks
   * The RAM role that can be assumed.
   * 
   * @example
   * AliyunOSSRole
   */
  role?: string;
  /**
   * @remarks
   * The role type. Valid values:
   * 
   * *   user: Alibaba Cloud account.
   * *   service: Alibaba Cloud service.
   * 
   * @example
   * user
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      role: 'Role',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'string',
      role: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialConfig extends $dara.Model {
  /**
   * @remarks
   * The authorization chains. All roles in the array must have the `sts:AssumeRole` permission. You need to only grant other permissions, such as read and write permissions on OSS, to the last role in the array. You can grant permissions in the RAM console.
   */
  chain?: CredentialConfigChain[];
  /**
   * @remarks
   * The policy that is attached to the role specified by the ServiceRole parameter. For example, the policy allows access to OSS. This parameter is optional.
   * 
   * @example
   * {"Statement": [{"Action": "oss:*","Effect": "Allow","Resource": "*"}],"Version": "1"}
   */
  policy?: string;
  /**
   * @remarks
   * The service role in the account that is used to call an IMM API operation. The role must have the `sts:AssumeRole` permission. You can configure permissions for the role in the Resource Access Management (RAM) console.
   * 
   * @example
   * AliyunSTSAssumeForIMMServiceRole
   */
  serviceRole?: string;
  static names(): { [key: string]: string } {
    return {
      chain: 'Chain',
      policy: 'Policy',
      serviceRole: 'ServiceRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chain: { 'type': 'array', 'itemType': CredentialConfigChain },
      policy: 'string',
      serviceRole: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.chain)) {
      $dara.Model.validateArray(this.chain);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

