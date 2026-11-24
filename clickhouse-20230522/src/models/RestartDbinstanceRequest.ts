// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartDBInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The compute group ID. This parameter is required when NodeList is specified. If only ComputingGroupId is specified without NodeList, the entire compute group is restarted. If neither is specified, the entire instance is restarted.
   * 
   * @example
   * cc-2zek7uow3827*****-clickhouse
   */
  computingGroupId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The list of node IDs to restart. The elements are the NodeId values returned by DescribeDBInstanceNodes. The parameter format is NodeList.N. If this parameter is not specified or is empty, the entire instance or compute group is restarted based on the original logic. If this parameter is not empty, ComputingGroupId is required, and a maximum of 50 nodes can be specified at a time.
   */
  nodeList?: string[];
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      computingGroupId: 'ComputingGroupId',
      DBInstanceId: 'DBInstanceId',
      nodeList: 'NodeList',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computingGroupId: 'string',
      DBInstanceId: 'string',
      nodeList: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeList)) {
      $dara.Model.validateArray(this.nodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

