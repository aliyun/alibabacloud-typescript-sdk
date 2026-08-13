// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDiagnosisResultRequest extends $dara.Model {
  /**
   * @remarks
   * Evaluation dimension.
   * 
   * @example
   * table_analysis
   */
  dimension?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number for paged queries. The default value is 1.
   * 
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of authorized entries displayed per page for paged queries. The default value is 10, and the maximum value is 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Report time.
   * 
   * @example
   * 2026-03-08
   */
  reportDate?: string;
  /**
   * @remarks
   * Status collection.
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

