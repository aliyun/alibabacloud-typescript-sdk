// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssV2ResultRequest extends $dara.Model {
  /**
   * @example
   * buckect_test
   */
  bucket?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2024-09-14 16:08:38
   */
  endDate?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @example
   * 2024-09-14 16:08:38
   */
  startDate?: string;
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

