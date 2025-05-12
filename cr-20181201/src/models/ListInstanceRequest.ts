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
   * The status of the instance. Valid values:
   * 
   * *   `PENDING`: The instance is being initialized.
   * *   `INIT_ERROR`: The initialization of the instance fails.
   * *   `STARTING`: The instance is being started.
   * *   `RUNNING`: The instance is running.
   * *   `STOPPING`: The instance is being stopped.
   * *   `STOPPED`: The instance is stopped.
   * *   `DELETING`: The instance is being deleted.
   * *   `DELETED`: The instance is deleted.
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
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
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

