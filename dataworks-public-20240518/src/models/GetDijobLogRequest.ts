// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDIJobLogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the Id parameter instead.
   * 
   * @example
   * 10000
   * 
   * @deprecated
   */
  DIJobId?: number;
  /**
   * @remarks
   * The failover ID.
   * 
   * @example
   * 10
   */
  failoverId?: number;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 10000
   */
  id?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 6153616438
   */
  instanceId?: number;
  /**
   * @remarks
   * The type of the node. This parameter is applicable only to the tasks that are run on serverless resource groups. Valid values:
   * 
   * *   **MASTER**: the master node, which is used to query the logs of JobManagers.
   * *   **WORKER**: the worker node, which is used to query the logs of TaskManagers.
   * 
   * @example
   * MASTER
   */
  nodeType?: string;
  /**
   * @remarks
   * The page number of the pagination query. The value is a positive integer greater than or equal to 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      failoverId: 'FailoverId',
      id: 'Id',
      instanceId: 'InstanceId',
      nodeType: 'NodeType',
      pageNumber: 'PageNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      failoverId: 'number',
      id: 'number',
      instanceId: 'number',
      nodeType: 'string',
      pageNumber: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

