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
   * 
   * > Call the [DescribeAIDBClusters](https://api.aliyun.com/api/polardb/2017-08-01/DescribeAIDBClusters) operation to query information about all clusters in your account, including cluster IDs.
   * 
   * @example
   * pm-xxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The information about the nodes to add.
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

