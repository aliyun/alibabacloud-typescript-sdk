// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRestoreJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The unique identifier of the server on which the restoration task is run. For example, you can use the IP address or the name of the server.
   * 
   * @example
   * 1.1.XX.XX
   */
  machineRemark?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the restoration task. Valid values:
   * 
   * *   **RUNNING**: The task is running.
   * *   **COMPLETE**: The task is complete.
   * *   **FAILED**: The task fails.
   * *   **CANCELING**: The task is being canceled.
   * *   **CANCELED**: The task is canceled.
   * *   **PARTIAL_COMPLETE**: The task is partially successful.
   * *   **CREATED**: The task is created but is not run.
   * *   **EXPIRED**: The task is not updated.
   * *   **QUEUED**: The task is waiting to be run.
   * *   **CLIENT_DELETED**: The task fails because the anti-ransomware agent is uninstalled.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      machineRemark: 'MachineRemark',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      machineRemark: 'string',
      pageSize: 'number',
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

