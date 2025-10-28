// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the namespace. You can call the ListUserDefineRegion operation to query the namespace ID. For more information, see [ListUserDefineRegion](https://help.aliyun.com/document_detail/149377.html).
   * 
   * *   If this parameter is left empty, the clusters in the default namespace are queried.
   * *   If this parameter is specified, the clusters in the specified namespace are queried.
   * 
   * @example
   * cn-beijing:test
   */
  logicalRegionId?: string;
  /**
   * @remarks
   * The ID of the resource group. You can call the ListResourceGroup operation to query the resource group ID. For more information, see [ListResourceGroup](https://help.aliyun.com/document_detail/62055.html).
   * 
   * *   If this parameter is left empty, the clusters in the default resource group are queried.
   * *   If this parameter is specified, the clusters in the specified resource group are queried.
   * 
   * @example
   * 461
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      logicalRegionId: 'LogicalRegionId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logicalRegionId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

