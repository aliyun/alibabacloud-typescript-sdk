// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFeatureDetailsResponseBodyTerraformSupportedResourceTypes } from "./GetFeatureDetailsResponseBodyTerraformSupportedResourceTypes";
import { GetFeatureDetailsResponseBodyTerraformSupportedVersions } from "./GetFeatureDetailsResponseBodyTerraformSupportedVersions";


export class GetFeatureDetailsResponseBodyTerraform extends $dara.Model {
  /**
   * @remarks
   * The resource types that support the scenario feature.
   */
  supportedResourceTypes?: GetFeatureDetailsResponseBodyTerraformSupportedResourceTypes;
  /**
   * @remarks
   * The Terraform versions.
   */
  supportedVersions?: GetFeatureDetailsResponseBodyTerraformSupportedVersions[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
      supportedVersions: 'SupportedVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: GetFeatureDetailsResponseBodyTerraformSupportedResourceTypes,
      supportedVersions: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyTerraformSupportedVersions },
    };
  }

  validate() {
    if(this.supportedResourceTypes && typeof (this.supportedResourceTypes as any).validate === 'function') {
      (this.supportedResourceTypes as any).validate();
    }
    if(Array.isArray(this.supportedVersions)) {
      $dara.Model.validateArray(this.supportedVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

