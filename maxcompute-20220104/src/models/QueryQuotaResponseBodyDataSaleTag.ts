// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryQuotaResponseBodyDataSaleTag extends $dara.Model {
  /**
   * @remarks
   * The identifier of a MaxCompute quota object. This identifier exists in the Alibaba Cloud sales bill. You can use this identifier to associate the cost of a quota object with a tag.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The object type. Valid values: quota and project.
   * 
   * @example
   * project
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

