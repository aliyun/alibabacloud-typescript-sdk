// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFeatureDetailsResponseBodyTerraformSupportedVersionsProviderVersions extends $dara.Model {
  /**
   * @remarks
   * The name of the provider.
   * 
   * @example
   * alicloud
   */
  providerName?: string;
  /**
   * @remarks
   * The provider versions.
   */
  supportedVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      providerName: 'ProviderName',
      supportedVersions: 'SupportedVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      providerName: 'string',
      supportedVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedVersions)) {
      $dara.Model.validateArray(this.supportedVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

