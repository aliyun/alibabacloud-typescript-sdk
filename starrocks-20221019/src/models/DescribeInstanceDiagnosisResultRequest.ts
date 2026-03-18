// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDiagnosisResultRequest extends $dara.Model {
  /**
   * @example
   * table_analysis
   */
  dimension?: string;
  /**
   * @example
   * c-b25e21e24388****
   */
  instanceId?: string;
  /**
   * @example
   * 3
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2026-03-08
   */
  reportDate?: string;
  /**
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

