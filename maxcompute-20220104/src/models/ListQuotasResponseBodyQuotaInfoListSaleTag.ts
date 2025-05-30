// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotasResponseBodyQuotaInfoListSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of an object in a MaxCompute quota. This identifier exists in the sales bill of Alibaba Cloud. You can use this identifier to associate the cost of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The type of the object. Valid values: quota and project.
   * 
   * @example
   * "project"
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

