// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > You can call the [DescribeDBInstances](https://help.aliyun.com/document_detail/86911.html) operation to query details about all AnalyticDB for PostgreSQL instances within a region, including instance IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * *   **master**: coordinator node.
   * *   **segment**: compute node.
   * 
   * > If you do not specify this parameter, the information about all nodes is returned.
   * 
   * @example
   * master
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

