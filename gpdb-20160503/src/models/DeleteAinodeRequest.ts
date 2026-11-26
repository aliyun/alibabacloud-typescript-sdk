// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAINodeRequest extends $dara.Model {
  /**
   * @remarks
   * The number of AI nodes to delete.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  AINodeNum?: number;
  /**
   * @remarks
   * The ID of the AI node pool.
   * 
   * @example
   * aipool-xxxx
   */
  AINodePoolId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to view the details of all AnalyticDB for PostgreSQL instances in the target region, including the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The list of AI nodes to delete.
   */
  nodeNames?: string[];
  static names(): { [key: string]: string } {
    return {
      AINodeNum: 'AINodeNum',
      AINodePoolId: 'AINodePoolId',
      DBInstanceId: 'DBInstanceId',
      nodeNames: 'NodeNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AINodeNum: 'number',
      AINodePoolId: 'string',
      DBInstanceId: 'string',
      nodeNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

