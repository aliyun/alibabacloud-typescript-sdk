// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFeatureDetailsResponseBodyDriftDetection extends $dara.Model {
  /**
   * @remarks
   * The resource types that are supported by the drift detection feature.
   */
  supportedResourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedResourceTypes)) {
      $dara.Model.validateArray(this.supportedResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyResourceCleanerSupportedResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The resource type that supports the resource cleaner feature.
   * 
   * @example
   * ECS:Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The names of the side effects that may be caused by the cleanup operation performed on the resources of the specified type.
   */
  sideEffects?: string[];
  /**
   * @remarks
   * The names of the filters that are supported by the resource type.
   */
  supportedFilters?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      sideEffects: 'SideEffects',
      supportedFilters: 'SupportedFilters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      sideEffects: { 'type': 'array', 'itemType': 'string' },
      supportedFilters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sideEffects)) {
      $dara.Model.validateArray(this.sideEffects);
    }
    if(Array.isArray(this.supportedFilters)) {
      $dara.Model.validateArray(this.supportedFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyResourceCleaner extends $dara.Model {
  /**
   * @remarks
   * The resource types that can be cleaned up.
   */
  supportedResourceTypes?: GetFeatureDetailsResponseBodyResourceCleanerSupportedResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyResourceCleanerSupportedResourceTypes },
    };
  }

  validate() {
    if(Array.isArray(this.supportedResourceTypes)) {
      $dara.Model.validateArray(this.supportedResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyResourceImportSupportedResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The resource identifiers.
   */
  resourceIdentifiers?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::Disk
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIdentifiers: 'ResourceIdentifiers',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIdentifiers: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIdentifiers)) {
      $dara.Model.validateArray(this.resourceIdentifiers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyResourceImport extends $dara.Model {
  /**
   * @remarks
   * The resource types that are supported by the resource import feature.
   */
  supportedResourceTypes?: GetFeatureDetailsResponseBodyResourceImportSupportedResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyResourceImportSupportedResourceTypes },
    };
  }

  validate() {
    if(Array.isArray(this.supportedResourceTypes)) {
      $dara.Model.validateArray(this.supportedResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTemplateParameterConstraintsSupportedResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The names of properties that are supported by the resource type.
   */
  properties?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::Disk
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'Properties',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTemplateParameterConstraints extends $dara.Model {
  /**
   * @remarks
   * The resource types that support the template parameter constraint feature.
   */
  supportedResourceTypes?: GetFeatureDetailsResponseBodyTemplateParameterConstraintsSupportedResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyTemplateParameterConstraintsSupportedResourceTypes },
    };
  }

  validate() {
    if(Array.isArray(this.supportedResourceTypes)) {
      $dara.Model.validateArray(this.supportedResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTemplateScratchSupportedResourceTypes extends $dara.Model {
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::ECS::Disk
   */
  resourceType?: string;
  /**
   * @remarks
   * Indicates whether the resource scope can be specified by source resource group. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  sourceResourceGroupSupported?: boolean;
  /**
   * @remarks
   * Indicates whether the resource scope can be specified by source resource. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  sourceResourcesSupported?: boolean;
  /**
   * @remarks
   * Indicates whether the resource scope can be specified by source tag, resource group, or resource. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  sourceSupported?: boolean;
  /**
   * @remarks
   * Indicates whether the resource scope can be specified by source tag. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  sourceTagSupported?: boolean;
  /**
   * @remarks
   * The scenario types that are supported.
   */
  supportedTemplateScratchTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      sourceResourceGroupSupported: 'SourceResourceGroupSupported',
      sourceResourcesSupported: 'SourceResourcesSupported',
      sourceSupported: 'SourceSupported',
      sourceTagSupported: 'SourceTagSupported',
      supportedTemplateScratchTypes: 'SupportedTemplateScratchTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      sourceResourceGroupSupported: 'boolean',
      sourceResourcesSupported: 'boolean',
      sourceSupported: 'boolean',
      sourceTagSupported: 'boolean',
      supportedTemplateScratchTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedTemplateScratchTypes)) {
      $dara.Model.validateArray(this.supportedTemplateScratchTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTemplateScratch extends $dara.Model {
  /**
   * @remarks
   * The resource types that are supported by the scenario feature.
   */
  supportedResourceTypes?: GetFeatureDetailsResponseBodyTemplateScratchSupportedResourceTypes[];
  static names(): { [key: string]: string } {
    return {
      supportedResourceTypes: 'SupportedResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedResourceTypes: { 'type': 'array', 'itemType': GetFeatureDetailsResponseBodyTemplateScratchSupportedResourceTypes },
    };
  }

  validate() {
    if(Array.isArray(this.supportedResourceTypes)) {
      $dara.Model.validateArray(this.supportedResourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFeatureDetailsResponseBodyTerraformSupportedResourceTypesStackOperationRisk extends $dara.Model {
  /**
   * @remarks
   * The resource types that support the risk check performed to detect risks caused by a stack deletion operation.
   */
  deleteStack?: string[];
  static names(): { [key: string]: string } {
    return {
      deleteStack: 'DeleteStack',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteStack: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.deleteStack)) {
      $dara.Model.validateArray(this.deleteStack);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetFeatureDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the drift detection feature.
   */
  driftDetection?: GetFeatureDetailsResponseBodyDriftDetection;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EBF833DA-D0E2-52BE-92E2-59CA56BE834E
   */
  requestId?: string;
  /**
   * @remarks
   * Details of the resource cleaner feature.
   */
  resourceCleaner?: GetFeatureDetailsResponseBodyResourceCleaner;
  /**
   * @remarks
   * Details of the resource import feature.
   */
  resourceImport?: GetFeatureDetailsResponseBodyResourceImport;
  /**
   * @remarks
   * Details of the template parameter constraint feature.
   */
  templateParameterConstraints?: GetFeatureDetailsResponseBodyTemplateParameterConstraints;
  /**
   * @remarks
   * Details of the scenario feature.
   */
  templateScratch?: GetFeatureDetailsResponseBodyTemplateScratch;
  /**
   * @remarks
   * Details of the Terraform hosting feature.
   */
  terraform?: GetFeatureDetailsResponseBodyTerraform;
  static names(): { [key: string]: string } {
    return {
      driftDetection: 'DriftDetection',
      requestId: 'RequestId',
      resourceCleaner: 'ResourceCleaner',
      resourceImport: 'ResourceImport',
      templateParameterConstraints: 'TemplateParameterConstraints',
      templateScratch: 'TemplateScratch',
      terraform: 'Terraform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driftDetection: GetFeatureDetailsResponseBodyDriftDetection,
      requestId: 'string',
      resourceCleaner: GetFeatureDetailsResponseBodyResourceCleaner,
      resourceImport: GetFeatureDetailsResponseBodyResourceImport,
      templateParameterConstraints: GetFeatureDetailsResponseBodyTemplateParameterConstraints,
      templateScratch: GetFeatureDetailsResponseBodyTemplateScratch,
      terraform: GetFeatureDetailsResponseBodyTerraform,
    };
  }

  validate() {
    if(this.driftDetection && typeof (this.driftDetection as any).validate === 'function') {
      (this.driftDetection as any).validate();
    }
    if(this.resourceCleaner && typeof (this.resourceCleaner as any).validate === 'function') {
      (this.resourceCleaner as any).validate();
    }
    if(this.resourceImport && typeof (this.resourceImport as any).validate === 'function') {
      (this.resourceImport as any).validate();
    }
    if(this.templateParameterConstraints && typeof (this.templateParameterConstraints as any).validate === 'function') {
      (this.templateParameterConstraints as any).validate();
    }
    if(this.templateScratch && typeof (this.templateScratch as any).validate === 'function') {
      (this.templateScratch as any).validate();
    }
    if(this.terraform && typeof (this.terraform as any).validate === 'function') {
      (this.terraform as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

