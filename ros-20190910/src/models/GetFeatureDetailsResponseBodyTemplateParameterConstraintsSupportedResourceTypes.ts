// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

