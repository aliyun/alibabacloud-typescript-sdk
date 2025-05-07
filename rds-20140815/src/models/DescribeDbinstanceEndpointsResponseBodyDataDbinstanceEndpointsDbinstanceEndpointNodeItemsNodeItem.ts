// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceEndpointsResponseBodyDataDBInstanceEndpointsDBInstanceEndpointNodeItemsNodeItem extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-u****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * rn-****13p6tum4289h
   */
  nodeId?: string;
  /**
   * @remarks
   * The weight of the node. Read requests are distributed based on the weight.
   * 
   * Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      nodeId: 'NodeId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      nodeId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

