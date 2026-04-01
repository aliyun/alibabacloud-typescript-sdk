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

export class DescribeGadInstancesResponseBodyGadInstances extends $dara.Model {
  /**
   * @remarks
   * The time when the global active database cluster was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-10-21T02:57:08Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * GadTest
   */
  description?: string;
  /**
   * @remarks
   * The information about each node in the cluster.
   */
  gadInstanceMembers?: DescribeGadInstancesResponseBodyGadInstancesGadInstanceMembers[];
  /**
   * @remarks
   * The ID of the global active database cluster.
   * 
   * @example
   * gad-rm-bp1npi2j8********
   */
  gadInstanceName?: string;
  /**
   * @remarks
   * The time when the most recent modification was made to the global active database cluster. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-10-21T03:01:20Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The database engine that is run by the global active database cluster.
   * 
   * >  The value of this parameter is fixed as **mysql**.
   * 
   * @example
   * mysql
   */
  service?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   **activation**: The cluster is running.
   * *   **creating**: The cluster is being created.
   * *   **replica_adding**: Nodes are being added to the cluster.
   * 
   * @example
   * activation
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      gadInstanceMembers: 'GadInstanceMembers',
      gadInstanceName: 'GadInstanceName',
      modificationTime: 'ModificationTime',
      service: 'Service',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      gadInstanceMembers: { 'type': 'array', 'itemType': DescribeGadInstancesResponseBodyGadInstancesGadInstanceMembers },
      gadInstanceName: 'string',
      modificationTime: 'string',
      service: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gadInstanceMembers)) {
      $dara.Model.validateArray(this.gadInstanceMembers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGadInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the global active database cluster.
   */
  gadInstances?: DescribeGadInstancesResponseBodyGadInstances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 76AF0609-4195-5DFC-BC78-3AD76FF872BB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gadInstances: 'GadInstances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gadInstances: { 'type': 'array', 'itemType': DescribeGadInstancesResponseBodyGadInstances },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.gadInstances)) {
      $dara.Model.validateArray(this.gadInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

