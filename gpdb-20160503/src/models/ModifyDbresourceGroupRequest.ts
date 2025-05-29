// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDBResourceGroupRequestResourceGroupItems } from "./ModifyDbresourceGroupRequestResourceGroupItems";


export class ModifyDBResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * >  You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The information about the resource group.
   * 
   * This parameter is required.
   */
  resourceGroupItems?: ModifyDBResourceGroupRequestResourceGroupItems[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      resourceGroupItems: 'ResourceGroupItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      ownerId: 'number',
      resourceGroupItems: { 'type': 'array', 'itemType': ModifyDBResourceGroupRequestResourceGroupItems },
    };
  }

  validate() {
    if(Array.isArray(this.resourceGroupItems)) {
      $dara.Model.validateArray(this.resourceGroupItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

