// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGadInstancesResponseBodyGadInstancesGadInstanceMembers extends $dara.Model {
  /**
   * @remarks
   * The ID of the node in the cluster.
   * 
   * @example
   * rm-bp1npi2j8****
   */
  DBInstanceID?: string;
  /**
   * @remarks
   * A JSON array that contains DTS synchronization information.
   * >Each unit node (secondary node) synchronizes data with the central node (primary node) through DTS. This parameter contains the synchronization task ID and request ID of DTS.
   * 
   * @example
   * {\\"dtsInstanceId\\":\\"dtsm9t107c****\\",\\"dtsRequestId\\":\\"190F0C6C-4BE6-5676-989B-DBDE6D34CD9C\\"}
   */
  dtsInstance?: string;
  /**
   * @remarks
   * The database engine of the node in the cluster.
   * >Only **mysql** is supported.
   * 
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the node in the cluster.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The region ID of the node in the cluster.
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
   * rg-acfmy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The node type in the active geo-redundancy database cluster. Valid values:
   * * **CENTRAL**: central node. The only primary node in the cluster. All unit nodes synchronize data from this node.
   * * **UNIT**: unit node. A cluster can contain up to 10 unit nodes. All unit nodes synchronize data from the central node.
   * 
   * @example
   * CENTRAL
   */
  role?: string;
  /**
   * @remarks
   * The node status. Valid values:
   * * **activation**: running.
   * * **creating**: being created.
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
   * The time when the cluster was created. The time follows the ISO 8601 standard in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-10-21T02:57:08Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * GadTest
   */
  description?: string;
  /**
   * @remarks
   * The list of nodes in the cluster.
   */
  gadInstanceMembers?: DescribeGadInstancesResponseBodyGadInstancesGadInstanceMembers[];
  /**
   * @remarks
   * The ID of the active geo-redundancy database cluster.
   * 
   * @example
   * gad-rm-bp1npi2j8****
   */
  gadInstanceName?: string;
  /**
   * @remarks
   * The time when the cluster was last modified. The time follows the ISO 8601 standard in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2021-10-21T03:01:20Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The engine of the active geo-redundancy database cluster.
   * >Only **mysql** is supported.
   * 
   * @example
   * mysql
   */
  service?: string;
  /**
   * @remarks
   * The cluster status. Valid values:
   * * **activation**: running.
   * * **creating**: being created.
   * * **replica_adding**: a node is being added.
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
   * The list of active geo-redundancy database clusters.
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

