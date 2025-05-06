// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceRelationsResponseBodyResourceRelationsResourceRelationList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The type of the relationship between the resource and the object.
   * 
   * Valid values:
   * 
   * *   IsContained: The object is included as part of the resource.
   * *   IsAttachedTo: The object is added to the resource.
   * *   IsAssociatedIn: The object is associated with the resource.
   * *   Contains: The object contains the resource.
   * 
   * @example
   * IsAttachedTo
   */
  relationType?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-j6cajg9yrfoh4sas****
   */
  sourceResourceId?: string;
  /**
   * @remarks
   * The ID of the region in which the resource resides.
   * 
   * @example
   * cn-shanghai
   */
  sourceResourceRegionId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ACS::ECS::Instance
   */
  sourceResourceType?: string;
  /**
   * @remarks
   * The ID of the associated resource.
   * 
   * @example
   * d-j6c8k731qbrc7fxi****
   */
  targetResourceId?: string;
  /**
   * @remarks
   * The type of the associated resource.
   * 
   * @example
   * ACS::ECS::Disk
   */
  targetResourceType?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      relationType: 'RelationType',
      sourceResourceId: 'SourceResourceId',
      sourceResourceRegionId: 'SourceResourceRegionId',
      sourceResourceType: 'SourceResourceType',
      targetResourceId: 'TargetResourceId',
      targetResourceType: 'TargetResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      relationType: 'string',
      sourceResourceId: 'string',
      sourceResourceRegionId: 'string',
      sourceResourceType: 'string',
      targetResourceId: 'string',
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

