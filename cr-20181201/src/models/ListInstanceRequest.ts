// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   * 
   * @deprecated
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * - `PENDING`: Initializing.
   * 
   * - `INIT_ERROR`: Initialization failed.
   * 
   * - `STARTING`: Starting.
   * 
   * - `RUNNING`: Running.
   * 
   * - `STOPPING`: Stopping.
   * 
   * - `STOPPED`: Stopped.
   * 
   * - `DELETING`: Deleting.
   * 
   * - `DELETED`: Deleted.
   * 
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmv36i4is****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      instanceStatus: 'string',
      pageNo: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

