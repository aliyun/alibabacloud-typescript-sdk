// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFeatureDetailsResponseBodyTerraformSupportedVersionsProviderVersions } from "./GetFeatureDetailsResponseBodyTerraformSupportedVersionsProviderVersions";


export class GetFeatureDetailsResponseBodyTerraformSupportedVersions extends $dara.Model {
  /**
   * @remarks
   * The names and versions of the providers that correspond to the Terraform versions.
   */
  providerVersions?: GetFeatureDetailsResponseBodyTerraformSupportedVersionsProviderVersions[];
  /**
   * @remarks
   * The Terraform version.
   * 
   * @example
   * 1.0.11
   */
  terraformVersion?: string;
  /**
   * @remarks
   * The Terraform version that is supported by ROS. The parameter value is the same as the value of the Transform parameter in a Terraform template.
   * 
   * @example
   * Aliyun::Terraform-v1.0
   */
  transform?: string;
  /**
   * @remarks
   * The Terraform versions that can be updated in ROS.
   */
  updateAllowedTransforms?: string[];
  static names(): { [key: string]: string } {
    return {
      providerVersions: 'ProviderVersions',
      terraformVersion: 'TerraformVersion',
      transform: 'Transform',
      updateAllowedTransforms: 'UpdateAllowedTransforms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      providerVersions: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyTerraformSupportedVersionsProviderVersions },
      terraformVersion: 'string',
      transform: 'string',
      updateAllowedTransforms: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.providerVersions)) {
      $dara.Model.validateArray(this.providerVersions);
    }
    if(Array.isArray(this.updateAllowedTransforms)) {
      $dara.Model.validateArray(this.updateAllowedTransforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

