// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTopRiskyResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource category.
   * 
   * @example
   * rc-000***123
   */
  resourceCategoryId?: string;
  resourceOwnerIds?: number[];
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCategoryId: 'ResourceCategoryId',
      resourceOwnerIds: 'ResourceOwnerIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCategoryId: 'string',
      resourceOwnerIds: { 'type': 'array', 'itemType': 'number' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceOwnerIds)) {
      $dara.Model.validateArray(this.resourceOwnerIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

