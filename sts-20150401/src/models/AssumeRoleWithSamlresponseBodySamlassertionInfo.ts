// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssumeRoleWithSAMLResponseBodySAMLAssertionInfo extends $dara.Model {
  /**
   * @remarks
   * The value in the `Issuer` element in the SAML assertion.
   * 
   * @example
   * http://example.com/adfs/services/trust
   */
  issuer?: string;
  /**
   * @remarks
   * The `Recipient` attribute of the SubjectConfirmationData sub-element. SubjectConfirmationData is a sub-element of the `Subject` element in the SAML assertion.
   * 
   * @example
   * https://signin.aliyun.com/saml-role/SSO
   */
  recipient?: string;
  /**
   * @remarks
   * The value in the NameID sub-element of the `Subject` element in the SAML assertion.
   * 
   * @example
   * alice@example.com
   */
  subject?: string;
  /**
   * @remarks
   * The Format attribute of the `NameID` element in the SAML assertion. If the Format attribute is prefixed with `urn:oasis:names:tc:SAML:2.0:nameid-format:`, the prefix is not included in the value of this parameter. For example, if the value of the Format attribute is urn:oasis:names:tc:SAML:2.0:nameid-format:persistent/transient, the value of this parameter is `persistent/transient`.
   * 
   * @example
   * persistent
   */
  subjectType?: string;
  static names(): { [key: string]: string } {
    return {
      issuer: 'Issuer',
      recipient: 'Recipient',
      subject: 'Subject',
      subjectType: 'SubjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issuer: 'string',
      recipient: 'string',
      subject: 'string',
      subjectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

