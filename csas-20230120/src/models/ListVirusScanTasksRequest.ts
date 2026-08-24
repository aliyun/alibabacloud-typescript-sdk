// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanTasksRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 1762135466
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  performanceModes?: string[];
  scanModes?: string[];
  /**
   * @example
   * 1754150421
   */
  startTime?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  taskIds?: string[];
  /**
   * @example
   * usergroup-9d4f2a7b3c1e****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      performanceModes: 'PerformanceModes',
      scanModes: 'ScanModes',
      startTime: 'StartTime',
      status: 'Status',
      taskIds: 'TaskIds',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      pageSize: 'number',
      performanceModes: { 'type': 'array', 'itemType': 'string' },
      scanModes: { 'type': 'array', 'itemType': 'string' },
      startTime: 'number',
      status: 'number',
      taskIds: { 'type': 'array', 'itemType': 'string' },
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performanceModes)) {
      $dara.Model.validateArray(this.performanceModes);
    }
    if(Array.isArray(this.scanModes)) {
      $dara.Model.validateArray(this.scanModes);
    }
    if(Array.isArray(this.taskIds)) {
      $dara.Model.validateArray(this.taskIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

