// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

