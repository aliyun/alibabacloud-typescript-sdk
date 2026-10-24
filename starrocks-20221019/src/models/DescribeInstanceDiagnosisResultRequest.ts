// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDiagnosisResultRequest extends $dara.Model {
  /**
   * @remarks
   * The evaluation dimension.
   * 
   * @example
   * table_analysis
   */
  dimension?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number for paging. Default value: 1.
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of authorization entries returned per page when paging. Default value: 10. Maximum value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The report date in the YYYY-MM-DD format.
   * 
   * @example
   * 2026-03-08
   */
  reportDate?: string;
  /**
   * @remarks
   * The status collection.
   * 
   * @example
   * healthy
   */
  statuses?: string;
  static names(): { [key: string]: string } {
    return {
      dimension: 'Dimension',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reportDate: 'ReportDate',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimension: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      reportDate: 'string',
      statuses: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

