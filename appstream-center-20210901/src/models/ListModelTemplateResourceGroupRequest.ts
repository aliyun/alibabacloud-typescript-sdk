// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelTemplateResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the model group.
   * 
   * This parameter is required.
   * 
   * @example
   * mt-xxxxx
   */
  modelTemplateId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Both 0 and 1 return the same result.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of resource group IDs.
   */
  resourceGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      modelTemplateId: 'ModelTemplateId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupIds: 'ResourceGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelTemplateId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupIds)) {
      $dara.Model.validateArray(this.resourceGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

