// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGadInstancesResponseBodyGadInstancesGadInstanceMembers } from "./DescribeGadInstancesResponseBodyGadInstancesGadInstanceMembers";


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

