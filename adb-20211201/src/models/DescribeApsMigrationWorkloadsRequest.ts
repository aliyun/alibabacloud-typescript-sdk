// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsMigrationWorkloadsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-*******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2021-07-20T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URL.
   * 
   * @example
   * oss://******
   */
  ossLocation?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The start of the time range to query.
   * 
   * @example
   * 2021-06-20T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The name of the workload.
   * 
   * @example
   * test
   */
  workloadName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      ossLocation: 'OssLocation',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      workloadName: 'WorkloadName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      ossLocation: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      workloadName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

