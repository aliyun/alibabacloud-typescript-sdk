// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupportedResourceRelationConfigResponseBodyResourceRelationConfigList extends $dara.Model {
  /**
   * @remarks
   * The type of the relationship between the resource and the object. Valid values:
   * 
   * *   IsContained: The object is included as part of the resource.
   * *   IsAttachedTo: The object is added to the resource.
   * *   IsAssociatedIn: The object is associated with the resource.
   * *   Contains: The actual value contains the expected value.
   * 
   * @example
   * IsAttachedTo
   */
  relationType?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::ECS::Disk
   */
  targetResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      relationType: 'RelationType',
      targetResourceType: 'TargetResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relationType: 'string',
      targetResourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

