// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttributePassingSettingResponseBodyAttributePassingSetting extends $dara.Model {
  /**
   * @remarks
   * The SourceIdentity pass-through mode. If not configured, Disabled is returned by default. Valid values:
   * 
   * - IdP: Uses the SourceIdentity attribute value carried in the SAML assertion from the external identity provider (IdP). The attribute value must be 2 to 64 characters in length and can contain only letters, digits, and the following special characters: =,.@-_.
   * - UserName: Uses the CloudSSO username as the SourceIdentity. The system automatically adds a reserved prefix, resulting in the format acs:sso:<username>. The total length cannot exceed 64 characters.
   * - Disabled: Does not pass through the SourceIdentity.
   * 
   * @example
   * Disabled
   */
  sourceIdentityPassing?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIdentityPassing: 'SourceIdentityPassing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIdentityPassing: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAttributePassingSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The attribute passing settings.
   */
  attributePassingSetting?: GetAttributePassingSettingResponseBodyAttributePassingSetting;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6F90F3D-4502-5877-B80B-97476F6AE2CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attributePassingSetting: 'AttributePassingSetting',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributePassingSetting: GetAttributePassingSettingResponseBodyAttributePassingSetting,
      requestId: 'string',
    };
  }

  validate() {
    if(this.attributePassingSetting && typeof (this.attributePassingSetting as any).validate === 'function') {
      (this.attributePassingSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

