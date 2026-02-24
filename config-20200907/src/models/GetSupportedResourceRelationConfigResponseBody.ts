// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSupportedResourceRelationConfigResponseBodyResourceRelationConfigList extends $dara.Model {
  /**
   * @remarks
   * The type of the resource relation. Valid values:
   * 
   * - IsContained: Is contained in.
   * 
   * - IsAttachedTo: Is attached to.
   * 
   * - IsAssociatedIn: Is associated with.
   * 
   * - Contains: Contains.
   * 
   * @example
   * IsAttachedTo
   */
  relationType?: string;
  /**
   * @remarks
   * The resource type of the relation target.
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

export class GetSupportedResourceRelationConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 409D022F-394C-5AAB-A74A-2F1DC9F6375E
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resource relations.
   */
  resourceRelationConfigList?: GetSupportedResourceRelationConfigResponseBodyResourceRelationConfigList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRelationConfigList: 'ResourceRelationConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRelationConfigList: { 'type': 'array', 'itemType': GetSupportedResourceRelationConfigResponseBodyResourceRelationConfigList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceRelationConfigList)) {
      $dara.Model.validateArray(this.resourceRelationConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

