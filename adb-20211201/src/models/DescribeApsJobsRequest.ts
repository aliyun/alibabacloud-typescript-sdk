// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApsJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the APS job.
   * 
   * @example
   * aps-xxxxx
   */
  apsJobName?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * @example
   * 2022-04-23T01:10Z
   */
  createTimeEnd?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * @example
   * 2022-03-23T01:10Z
   */
  createTimeStart?: string;
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
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      apsJobName: 'ApsJobName',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsJobName: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

