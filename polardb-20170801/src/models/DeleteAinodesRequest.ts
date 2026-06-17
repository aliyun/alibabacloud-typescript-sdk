// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAINodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > Call the [DescribeAIDBClusters](https://api.aliyun.com/api/polardb/2017-08-01/DescribeAIDBClusters) operation to view the cluster ID.
   * 
   * @example
   * pm-xxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The IDs of the nodes to delete.
   */
  DBNodeId?: string[];
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBNodeId: 'DBNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBNodeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.DBNodeId)) {
      $dara.Model.validateArray(this.DBNodeId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

