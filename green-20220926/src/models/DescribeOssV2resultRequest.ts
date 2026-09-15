// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssV2ResultRequest extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket.
   * 
   * @example
   * buckect_test
   */
  bucket?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-09-14 16:08:38
   */
  endDate?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The start time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-09-14 16:08:38
   */
  startDate?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Image batch task 20240914100517757
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      riskLevel: 'RiskLevel',
      startDate: 'StartDate',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      riskLevel: 'string',
      startDate: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

