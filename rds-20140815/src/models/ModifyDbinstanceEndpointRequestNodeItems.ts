// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceEndpointRequestNodeItems extends $dara.Model {
  /**
   * @remarks
   * The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
   * 
   * @example
   * rm-****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * You can query the node ID by using the following methods:
   * 
   * *   Log on the ApsaraDB RDS console, go to the instance details page, and then view the ID of the node in the instance topology in the lower part of the instance details page.
   * *   Call the DescribeDBInstanceAttribute operation to query the node ID.
   * 
   * @example
   * rn-xxxx-****
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

