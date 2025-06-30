// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeRoleWithSAMLRequest extends $dara.Model {
  /**
   * @remarks
   * The validity period of the STS token. Unit: seconds.
   * 
   * Minimum value: 900. Maximum value: the value of the `MaxSessionDuration` parameter. Default value: 3600.
   * 
   * You can call the CreateRole or UpdateRole operation to configure the `MaxSessionDuration` parameter. For more information, see [CreateRole](https://help.aliyun.com/document_detail/28710.html) or [UpdateRole](https://help.aliyun.com/document_detail/28712.html).
   * 
   * @example
   * 3600
   */
  durationSeconds?: number;
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
   * url_encoded_policy
   */
  policy?: string;
  /**
   * @remarks
   * The ARN of the RAM role.
   * 
   * The trust entity of the RAM role is a SAML IdP. For more information, see [Create a RAM role for a trusted IdP](https://help.aliyun.com/document_detail/116805.html) or [CreateRole](https://help.aliyun.com/document_detail/28710.html).
   * 
   * Format: `acs:ram::<account_id>:role/<role_name>`.
   * 
   * You can view the ARN in the RAM console or by calling operations.
   * 
   * *   For more information about how to view the ARN in the RAM console, see [How do I view the ARN of the RAM role?](https://help.aliyun.com/document_detail/39744.html).
   * *   For more information about how to view the ARN by calling operations, see [ListRoles](https://help.aliyun.com/document_detail/28713.html) or [GetRole](https://help.aliyun.com/document_detail/28711.html).
   * 
   * @example
   * acs:ram::123456789012****:role/adminrole
   */
  roleArn?: string;
  /**
   * @remarks
   * The Base64-encoded SAML assertion.
   * 
   * The value must be 4 to 100,000 characters in length.
   * 
   * > A complete SAML response rather than a single SAMLAssertion field must be retrieved from the external IdP.
   * 
   * @example
   * base64_encoded_saml_assertion
   */
  SAMLAssertion?: string;
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the SAML IdP that is created in the RAM console.
   * 
   * Format: `acs:ram::<account_id>:saml-provider/<saml_provider_id>`.
   * 
   * You can view the ARN in the RAM console or by calling operations.
   * 
   * *   For more information about how to view the ARN in the RAM console, see [How do I view the ARN of a RAM role?](https://help.aliyun.com/document_detail/116795.html)
   * *   For more information about how to view the ARN by calling operations, see [GetSAMLProvider](https://help.aliyun.com/document_detail/186833.html) or [ListSAMLProviders](https://help.aliyun.com/document_detail/186851.html).
   * 
   * @example
   * acs:ram::123456789012****:saml-provider/company1
   */
  SAMLProviderArn?: string;
  static names(): { [key: string]: string } {
    return {
      durationSeconds: 'DurationSeconds',
      policy: 'Policy',
      roleArn: 'RoleArn',
      SAMLAssertion: 'SAMLAssertion',
      SAMLProviderArn: 'SAMLProviderArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationSeconds: 'number',
      policy: 'string',
      roleArn: 'string',
      SAMLAssertion: 'string',
      SAMLProviderArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

