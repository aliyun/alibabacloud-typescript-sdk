// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSAMLProviderRequest extends $dara.Model {
  /**
   * @remarks
   * The signature algorithm supported by the Alibaba Cloud service provider (SP). Valid values:
   * 
   * - rsa-sha256
   * 
   * - rsa-sha1
   * 
   * @example
   * rsa-sha1
   */
  authnSignAlgo?: string;
  /**
   * @remarks
   * The new description.
   * 
   * > Specify at least one of the `NewDescription` and `NewEncodedSAMLMetadataDocument` parameters.
   * 
   * @example
   * This is a new provider.
   */
  newDescription?: string;
  /**
   * @remarks
   * The new metadata file.
   * 
   * > Specify at least one of the `NewDescription` and `NewEncodedSAMLMetadataDocument` parameters.
   * 
   * @example
   * PD94bWwgdmVy****
   */
  newEncodedSAMLMetadataDocument?: string;
  /**
   * @remarks
   * The name of the identity provider to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * test-provider
   */
  SAMLProviderName?: string;
  static names(): { [key: string]: string } {
    return {
      authnSignAlgo: 'AuthnSignAlgo',
      newDescription: 'NewDescription',
      newEncodedSAMLMetadataDocument: 'NewEncodedSAMLMetadataDocument',
      SAMLProviderName: 'SAMLProviderName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authnSignAlgo: 'string',
      newDescription: 'string',
      newEncodedSAMLMetadataDocument: 'string',
      SAMLProviderName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

