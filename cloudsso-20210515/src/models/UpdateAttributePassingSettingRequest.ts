// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAttributePassingSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The SourceIdentity pass-through mode. Three pass-through modes are supported. If this parameter is not specified, the existing configuration is not modified.
   * 
   * Valid values:
   * 
   * - IdP: Uses the SourceIdentity attribute value carried in the SAML assertion from the external identity provider (IdP). The attribute value must be 2 to 64 characters in length and can contain only letters, digits, and the following special characters: =,.@-_.
   * - UserName: Uses the CloudSSO username as the SourceIdentity. The system automatically adds a reserved prefix, resulting in the format acs:sso:<username>, with a total length of no more than 64 characters.
   * - Disabled: Does not pass through SourceIdentity.
   * 
   * @example
   * Disabled
   */
  sourceIdentityPassing?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      sourceIdentityPassing: 'SourceIdentityPassing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
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

