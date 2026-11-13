// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayQuotaRuleSubjectUsageExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * An optional token used for request idempotency. The maximum length is 128 bytes after leading and trailing whitespaces are removed. Use ASCII characters.
   * 
   * When the same user retries with the same token and request parameters in the current region, the existing task is reused and its current status is returned. If the same token corresponds to different parameters, a parameter error is returned. The compared parameters include gatewayId, ruleId, subjectId, filterFailedRequests, format, and whether startTime and endTime are passed and their values. Omitting the time is not equivalent to explicitly passing 0.
   * 
   * Reusing a task does not recalculate the time range or regenerate the file. When you need to re-export data, including when the original task fails or the file expires, use a new token.
   * 
   * @example
   * usage-export-20260729-001
   */
  clientToken?: string;
  /**
   * @remarks
   * The end time of the export time range. Use a non-negative UNIX timestamp in seconds. This time is exclusive.
   * 
   * If only endTime is specified, one rule period before this time is deduced as the startTime. If neither is specified, the end time is the task creation time. If both are specified, endTime must be greater than or equal to startTime, and the span cannot exceed one rule period.
   * 
   * @example
   * 1783935200
   */
  endTime?: number;
  /**
   * @remarks
   * Specifies whether to export only consumption details with valid usage. Default value: false.
   * 
   * - false: Does not filter records by usage.
   * - true: Filters records with zero usage based on the token or credit metering dimension of the rule, and retains only records with usage.
   * 
   * @example
   * true
   */
  filterFailedRequests?: boolean;
  /**
   * @remarks
   * The export file format. Only CSV_GZIP is supported. If omitted or an empty string is passed, this format is used by default. The file is a GZIP-compressed CSV file named {taskId}.csv.gz. Decompress the file before reading.
   * 
   * @example
   * CSV_GZIP
   */
  format?: string;
  /**
   * @remarks
   * The start time of the export time range. Use a non-negative UNIX timestamp in seconds. This time is inclusive.
   * 
   * - If neither startTime nor endTime is specified: The start point of the current rule period to the task creation time is used.
   * - If only startTime is specified: One rule period after this time is deduced as the endTime.
   * - If both are specified: endTime must be greater than or equal to startTime, and the span cannot exceed one rule period.
   * 
   * The actual export start point is also limited by the rule creation time, rule reset, or the effective start point of clearing history records. You can confirm this by querying the effectiveWindowStart returned by the task.
   * 
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

