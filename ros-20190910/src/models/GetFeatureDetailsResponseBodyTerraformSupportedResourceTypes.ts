// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetFeatureDetailsResponseBodyTerraformSupportedResourceTypesStackOperationRisk } from "./GetFeatureDetailsResponseBodyTerraformSupportedResourceTypesStackOperationRisk";


export class GetFeatureDetailsResponseBodyTerraformSupportedResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The resource types that support the custom tag feature.
   */
  customTag?: string[];
  /**
   * @remarks
   * The resource types that support the price inquiry feature.
   */
  estimateCost?: string[];
  /**
   * @remarks
   * The resource types that support the resource group feature.
   */
  resourceGroup?: string[];
  /**
   * @remarks
   * The resource type that support the risk check feature.
   */
  stackOperationRisk?: GetFeatureDetailsResponseBodyTerraformSupportedResourceTypesStackOperationRisk;
  /**
   * @remarks
   * The resource types that support the system tag `acs:ros:stackId`.
   */
  systemTag?: string[];
  static names(): { [key: string]: string } {
    return {
      customTag: 'CustomTag',
      estimateCost: 'EstimateCost',
      resourceGroup: 'ResourceGroup',
      stackOperationRisk: 'StackOperationRisk',
      systemTag: 'SystemTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customTag: { 'type': 'array', 'itemType': 'string' },
      estimateCost: { 'type': 'array', 'itemType': 'string' },
      resourceGroup: { 'type': 'array', 'itemType': 'string' },
      stackOperationRisk: GetFeatureDetailsResponseBodyTerraformSupportedResourceTypesStackOperationRisk,
      systemTag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.customTag)) {
      $dara.Model.validateArray(this.customTag);
    }
    if(Array.isArray(this.estimateCost)) {
      $dara.Model.validateArray(this.estimateCost);
    }
    if(Array.isArray(this.resourceGroup)) {
      $dara.Model.validateArray(this.resourceGroup);
    }
    if(this.stackOperationRisk && typeof (this.stackOperationRisk as any).validate === 'function') {
      (this.stackOperationRisk as any).validate();
    }
    if(Array.isArray(this.systemTag)) {
      $dara.Model.validateArray(this.systemTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

