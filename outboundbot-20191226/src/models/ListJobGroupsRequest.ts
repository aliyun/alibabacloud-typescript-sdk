// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobGroupsRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  asyncQuery?: boolean;
  /**
   * @example
   * 1579965079000
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 174952ab-9825-4cc9-a5e2-de82d7fa4cdd
   */
  instanceId?: string;
  jobGroupStatusFilter?: string;
  onlyMinConcurrencyEnabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  searchText?: string;
  /**
   * @example
   * 1578965079000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      asyncQuery: 'AsyncQuery',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobGroupStatusFilter: 'JobGroupStatusFilter',
      onlyMinConcurrencyEnabled: 'OnlyMinConcurrencyEnabled',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchText: 'SearchText',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncQuery: 'boolean',
      endTime: 'number',
      instanceId: 'string',
      jobGroupStatusFilter: 'string',
      onlyMinConcurrencyEnabled: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      searchText: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

