// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

