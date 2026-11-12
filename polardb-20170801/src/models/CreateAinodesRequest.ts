// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAINodesRequestDBNodes extends $dara.Model {
  /**
   * @remarks
   * The node specifications.
   * 
   * @example
   * polar.mysql.g4.xlarge.gu10
   */
  DBNodeClass?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeClass: 'DBNodeClass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeClass: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAINodesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeAIDBClusters](https://api.aliyun.com/api/polardb/2017-08-01/DescribeAIDBClusters) operation to query the information about all clusters under your account, including the cluster ID.
   * 
   * > The AiNodeType of the target cluster must be vnode or container. The maas type is not supported. You can query the AiNodeType by calling DescribeAIDBClusters.
   * 
   * @example
   * pm-xxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The list of node information to add.
   * 
   * > You must specify at least 1 and at most 100 DBNode elements when you call this operation. If you omit this parameter or pass an empty array, the InvalidNewNodeNum.Malformed error is returned.
   */
  DBNodes?: CreateAINodesRequestDBNodes[];
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBNodes: 'DBNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBNodes: { 'type': 'array', 'itemType': CreateAINodesRequestDBNodes },
    };
  }

  validate() {
    if(Array.isArray(this.DBNodes)) {
      $dara.Model.validateArray(this.DBNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

