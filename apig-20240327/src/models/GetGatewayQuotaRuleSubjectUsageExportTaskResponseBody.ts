// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayQuotaRuleSubjectUsageExportTaskResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The temporary signed download URL of the exported file. It is returned only when status=Success and the file is not expired. It is dynamically generated for each query and is valid for 10 minutes from the generation time. If the link expires but fileExpiredAt is not reached, you can call this operation again to obtain the link. You do not need to pass the internal storage path as a request parameter.
   * 
   * @example
   * https://example.oss-cn-hangzhou.aliyuncs.com/export.csv.gz
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The expiration time of the downloadUrl returned in this response. It is a UNIX timestamp in seconds. It is provided only when a download link is returned and is approximately 10 minutes after the link generation time. It can be updated by querying again and cannot be used to replace fileExpiredAt.
   * 
   * @example
   * 1783938800
   */
  downloadUrlExpiredAt?: number;
  /**
   * @remarks
   * The start time of the actual export time range. It is a UNIX timestamp in seconds. The actual start time is also limited by the rule creation time, rule reset, or the effective start time of purging history records. No details are available if the start time is not earlier than the end time.
   * 
   * @example
   * 1783931600
   */
  effectiveWindowStart?: number;
  /**
   * @remarks
   * Indicates whether the exported file has exceeded the period during which the server provides download links. A value of true indicates that the file has expired, downloadUrl and downloadUrlExpiredAt are not returned, and you need to create a new export task. This field may be omitted if the value is false. To determine whether the file is downloadable, check both status and downloadUrl.
   * 
   * @example
   * false
   */
  fileExpired?: boolean;
  /**
   * @remarks
   * The time when the file stops providing new download links. It is a UNIX timestamp in seconds and is usually 24 hours after the file is successfully uploaded. After this time is reached, this operation returns fileExpired=true and no longer generates downloadUrl. The task remains in the Success state. This time is different from downloadUrlExpiredAt of a single signed link.
   * 
   * @example
   * 1784021600
   */
  fileExpiredAt?: number;
  /**
   * @remarks
   * The size of the successfully generated and uploaded GZIP compressed file, in bytes. This field may be omitted if the task has not succeeded.
   * 
   * @example
   * 1024
   */
  fileSize?: number;
  /**
   * @remarks
   * The usage filter switch specified when the task was created. A value of true filters out records with 0 usage and retains only records with usage. This field may be omitted if the value is false.
   * 
   * @example
   * true
   */
  filterFailedRequests?: boolean;
  /**
   * @remarks
   * The format of the exported file. The value is currently fixed as CSV_GZIP. The downloaded file is a .csv.gz file, which becomes a CSV file after decompression.
   * 
   * @example
   * CSV_GZIP
   */
  format?: string;
  /**
   * @remarks
   * The end time of the request time range determined when the task was created. It is a UNIX timestamp in seconds and excludes this moment. If no time range is specified, this value is the task creation time and is not updated when the task is queried.
   * 
   * @example
   * 1783935200
   */
  queryWindowEnd?: number;
  /**
   * @remarks
   * The start time of the request time range determined when the task was created. It is a UNIX timestamp in seconds and includes this moment. If only one time parameter is passed, this value may be derived from the rule period. For the actual export start time, see effectiveWindowStart.
   * 
   * @example
   * 1783931600
   */
  queryWindowStart?: number;
  /**
   * @remarks
   * The quota metering dimension determined when the task was created. token indicates token usage, and credit indicates credit usage. The CSV file outputs the corresponding column based on this dimension. Credit usage retains decimal places.
   * 
   * @example
   * token
   */
  quotaDimension?: string;
  /**
   * @remarks
   * The number of successfully exported usage detail rows, excluding the CSV header. This field may be omitted if the task has not succeeded or the export result contains 0 rows. If the task succeeds but no matching details are found, the file contains only the header.
   * 
   * @example
   * 100
   */
  rowCount?: number;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'downloadUrl',
      downloadUrlExpiredAt: 'downloadUrlExpiredAt',
      effectiveWindowStart: 'effectiveWindowStart',
      fileExpired: 'fileExpired',
      fileExpiredAt: 'fileExpiredAt',
      fileSize: 'fileSize',
      filterFailedRequests: 'filterFailedRequests',
      format: 'format',
      queryWindowEnd: 'queryWindowEnd',
      queryWindowStart: 'queryWindowStart',
      quotaDimension: 'quotaDimension',
      rowCount: 'rowCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      downloadUrlExpiredAt: 'number',
      effectiveWindowStart: 'number',
      fileExpired: 'boolean',
      fileExpiredAt: 'number',
      fileSize: 'number',
      filterFailedRequests: 'boolean',
      format: 'string',
      queryWindowEnd: 'number',
      queryWindowStart: 'number',
      quotaDimension: 'string',
      rowCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayQuotaRuleSubjectUsageExportTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The error summary when the task fails, which is used to troubleshoot issues such as disabled logs, query failures, exceeded detail limits, processing timeouts, or file generation failures. This field may be omitted if no errors occur.
   * 
   * @example
   * log delivery is not enabled
   */
  errorMessage?: string;
  /**
   * @remarks
   * The gateway ID recorded when the task was created.
   * 
   * @example
   * gw-123456
   */
  gatewayId?: string;
  /**
   * @remarks
   * The number of detail rows written to the exported file, excluding the header. This value is used to check the processing progress. Even if this value equals totalCount, determine whether the file is downloadable based on status=Success.
   * 
   * @example
   * 100
   */
  processedCount?: number;
  /**
   * @remarks
   * The export conditions and file results determined when the task was created. The time range, format, and metering dimension may be returned even in non-Success states. File and download information is available only after success. Fields with values of 0, false, or empty strings are omitted.
   */
  result?: GetGatewayQuotaRuleSubjectUsageExportTaskResponseBodyDataResult;
  /**
   * @remarks
   * The quota rule ID recorded when the task was created.
   * 
   * @example
   * qr-123456
   */
  ruleId?: string;
  /**
   * @remarks
   * The current status of the task.
   * 
   * - Pending: The task is submitted and pending processing.
   * - Running: The system is querying details, generating files, or uploading files.
   * - Success: The file is generated and uploaded. You still need to check whether the file is expired.
   * - Failed: The task failed. For the cause, see errorMessage.
   * 
   * Tasks that are not completed within 10 minutes after creation are processed as Failed. After the file expires, the task remains in the Success state.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The consumer or consumer group ID recorded when the task was created.
   * 
   * @example
   * cs-123456
   */
  subjectId?: string;
  /**
   * @remarks
   * The subject name recorded when the task was created, which is used to match usage logs. Subsequent changes to the subject name do not modify the name recorded for this task.
   * 
   * @example
   * consumer-name
   */
  subjectName?: string;
  /**
   * @remarks
   * The export task ID, which is the same as the taskId request parameter.
   * 
   * @example
   * finops-export-abcdef1234567890
   */
  taskId?: string;
  /**
   * @remarks
   * The task type. The value is fixed as FinOpsUsageDetailExport, which indicates the export of usage details for a quota rule subject.
   * 
   * @example
   * FinOpsUsageDetailExport
   */
  taskType?: string;
  /**
   * @remarks
   * The total number of detail rows to be exported as counted by backend queries, excluding the CSV header. This value may be 0 before counting is completed. Do not determine whether the result is empty or the task is completed based solely on this value.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      gatewayId: 'gatewayId',
      processedCount: 'processedCount',
      result: 'result',
      ruleId: 'ruleId',
      status: 'status',
      subjectId: 'subjectId',
      subjectName: 'subjectName',
      taskId: 'taskId',
      taskType: 'taskType',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      gatewayId: 'string',
      processedCount: 'number',
      result: GetGatewayQuotaRuleSubjectUsageExportTaskResponseBodyDataResult,
      ruleId: 'string',
      status: 'string',
      subjectId: 'string',
      subjectName: 'string',
      taskId: 'string',
      taskType: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGatewayQuotaRuleSubjectUsageExportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetGatewayQuotaRuleSubjectUsageExportTaskResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID of this OpenAPI query call, which is used to troubleshoot call issues. This is different from the request_id of each usage record in the exported file.
   * 
   * @example
   * 1234567890
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetGatewayQuotaRuleSubjectUsageExportTaskResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

