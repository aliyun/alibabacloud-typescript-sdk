// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDIJobLogRequest extends $dara.Model {
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. Use the Id parameter instead.
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
   * The node ID.
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
   * The node type. This parameter is applicable only to tasks that run on resource group 2.0. Valid values:
   * 
   * * **MASTER**: retrieves the JobManager logs.
   * * **WORKER**: retrieves the TaskManager logs.
   * 
   * @example
   * MASTER
   */
  nodeType?: string;
  /**
   * @remarks
   * The page number for paging. The value must be a positive integer greater than or equal to 1.
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

