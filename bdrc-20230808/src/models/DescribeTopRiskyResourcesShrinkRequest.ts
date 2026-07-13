// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTopRiskyResourcesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource category.
   * 
   * @example
   * rc-000***123
   */
  resourceCategoryId?: string;
  resourceOwnerIdsShrink?: string;
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
      resourceOwnerIdsShrink: 'ResourceOwnerIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCategoryId: 'string',
      resourceOwnerIdsShrink: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

