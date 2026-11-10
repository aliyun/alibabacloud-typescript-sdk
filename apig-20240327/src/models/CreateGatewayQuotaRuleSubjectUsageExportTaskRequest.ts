// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayQuotaRuleSubjectUsageExportTaskRequest extends $dara.Model {
  /**
   * @example
   * usage-export-20260729-001
   */
  clientToken?: string;
  /**
   * @example
   * 1783935200
   */
  endTime?: number;
  /**
   * @example
   * true
   */
  filterFailedRequests?: boolean;
  /**
   * @example
   * CSV_GZIP
   */
  format?: string;
  /**
   * @example
   * 1783931600
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      endTime: 'endTime',
      filterFailedRequests: 'filterFailedRequests',
      format: 'format',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      endTime: 'number',
      filterFailedRequests: 'boolean',
      format: 'string',
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

