// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

