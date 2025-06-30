// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeRoleWithOIDCRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the STS token. Unit: seconds.
   * 
   * Default value: 3600. Minimum value: 900. Maximum value: the value of the `MaxSessionDuration` parameter.
   * 
   * For more information about how to specify `MaxSessionDuration`, see [CreateRole](https://help.aliyun.com/document_detail/28710.html) or [UpdateRole](https://help.aliyun.com/document_detail/28712.html).
   * 
   * @example
   * 3600
   */
  durationSeconds?: number;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the OIDC IdP.
   * 
   * You can view the ARN in the RAM console or by calling operations.
   * 
   * *   For more information about how to view the ARN in the RAM console, see [View the information about an OIDC IdP](https://help.aliyun.com/document_detail/327123.html).
   * *   For more information about how to view the ARN by calling operations, see [GetOIDCProvider](https://help.aliyun.com/document_detail/327126.html) or [ListOIDCProviders](https://help.aliyun.com/document_detail/327127.html).
   * 
   * @example
   * acs:ram::113511544585****:oidc-provider/TestOidcIdp
   */
  OIDCProviderArn?: string;
  /**
   * @remarks
   * The OIDC token that is issued by the external IdP.
   * 
   * The OIDC token must be 4 to 20,000 characters in length.
   * 
   * > You must enter the original OIDC token. You do not need to enter the Base64-encoded OIDC token.
   * 
   * @example
   * eyJraWQiOiJKQzl3eHpyaHFKMGd0****
   */
  OIDCToken?: string;
  /**
   * @remarks
   * The policy that specifies the permissions of the returned STS token. You can use this parameter to grant the STS token fewer permissions than the permissions granted to the RAM role.
   * 
   * *   If you specify this parameter, the permissions of the returned STS token are the permissions that are included in the value of this parameter and owned by the RAM role.
   * *   If you do not specify this parameter, the returned STS token has all the permissions of the RAM role.
   * 
   * The value must be 1 to 2,048 characters in length.
   * 
   * @example
   * {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
   */
  policy?: string;
  /**
   * @remarks
   * The ARN of the RAM role.
   * 
   * You can view the ARN in the RAM console or by calling operations.
   * 
   * *   For more information about how to view the ARN in the RAM console, see [How do I view the ARN of the RAM role?](https://help.aliyun.com/document_detail/39744.html)
   * *   For more information about how to view the ARN by calling operations, see [ListRoles](https://help.aliyun.com/document_detail/28713.html) or [GetRole](https://help.aliyun.com/document_detail/28711.html).
   * 
   * @example
   * acs:ram::113511544585****:role/testoidc
   */
  roleArn?: string;
  /**
   * @remarks
   * The custom name of the role session.
   * 
   * Set this parameter based on your business requirements. In most cases, this parameter is set to the identity of the user who calls the operation, for example, the username. In ActionTrail logs, you can distinguish the users who assume the same RAM role to perform operations based on the value of the RoleSessionName parameter. This way, you can perform user-specific auditing.
   * 
   * The value can contain letters, digits, periods (.), at signs (@), hyphens (-), and underscores (_).
   * 
   * The value must be 2 to 64 characters in length.
   * 
   * @example
   * TestOidcAssumedRoleSession
   */
  roleSessionName?: string;
  static names(): { [key: string]: string } {
    return {
      durationSeconds: 'DurationSeconds',
      OIDCProviderArn: 'OIDCProviderArn',
      OIDCToken: 'OIDCToken',
      policy: 'Policy',
      roleArn: 'RoleArn',
      roleSessionName: 'RoleSessionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSeconds: 'number',
      OIDCProviderArn: 'string',
      OIDCToken: 'string',
      policy: 'string',
      roleArn: 'string',
      roleSessionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

