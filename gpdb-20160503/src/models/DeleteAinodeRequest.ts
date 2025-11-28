// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAINodeRequest extends $dara.Model {
  /**
   * @remarks
   * The number of AINodes to be deleted.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  AINodeNum?: number;
  /**
   * @remarks
   * The ID of the AINode resource pool.
   * 
   * @example
   * aipool-xxxx
   */
  AINodePoolId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query the information about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The list of AINodes to be deleted.
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

