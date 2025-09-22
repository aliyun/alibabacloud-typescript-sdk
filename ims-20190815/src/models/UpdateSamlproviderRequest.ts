// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSAMLProviderRequest extends $dara.Model {
  authnSignAlgo?: string;
  /**
   * @remarks
   * The new description.
   * 
   * >  You must specify at least one of the `NewDescription` and `NewEncodedSAMLMetadataDocument` parameters.
   * 
   * @example
   * This is a new provider.
   */
  newDescription?: string;
  /**
   * @remarks
   * The new metadata file.
   * 
   * >  You must specify at least one of the `NewDescription` and `NewEncodedSAMLMetadataDocument` parameters.
   * 
   * @example
   * PD94bWwgdmVy****
   */
  newEncodedSAMLMetadataDocument?: string;
  /**
   * @remarks
   * The name of the IdP whose information you want to modify.
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

