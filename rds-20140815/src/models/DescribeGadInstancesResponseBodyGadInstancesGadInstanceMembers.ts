// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGadInstancesResponseBodyGadInstancesGadInstanceMembers extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * rm-bp1npi2j8********
   */
  DBInstanceID?: string;
  /**
   * @remarks
   * A JSON array that consists of the details about the Data Transmission Service (DTS) synchronization task.
   * 
   * >  Each unit node (secondary node) synchronizes data from the central node (primary node) by using DTS. This parameter contains the synchronization link ID and request ID of DTS.
   * 
   * @example
   * {\\"dtsInstanceId\\":\\"dtsm9t107c********\\",\\"dtsRequestId\\":\\"190F0C6C-4BE6-5676-989B-DBDE6D34CD9C\\"}
   */
  dtsInstance?: string;
  /**
   * @remarks
   * The database engine that is run by the node.
   * 
   * >  The value of this parameter is fixed as **mysql**.
   * 
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version that is run by the node.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The ID of the region where the node resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   **CENTRAL**: The node is a central node. Each global active database cluster has only one central node. All unit nodes synchronize data from the central node.
   * *   **UNIT**: The node is a unit node. Each global active database cluster can have up to 10 unit nodes. All unit nodes synchronize data from the central node.
   * 
   * @example
   * CENTRAL
   */
  role?: string;
  /**
   * @remarks
   * The node status. Valid values:
   * 
   * *   **activation**: The node is running.
   * *   **creating**: The node is being created.
   * 
   * @example
   * activation
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceID: 'DBInstanceID',
      dtsInstance: 'DtsInstance',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      role: 'Role',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceID: 'string',
      dtsInstance: 'string',
      engine: 'string',
      engineVersion: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      role: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

