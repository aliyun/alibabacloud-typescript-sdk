// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayQuotaRuleSubjectUsageExportTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current status of create task. Valid values:
   * 
   * - Pending: Create task is submitted and waiting to be processed.
   * - Running: The system is querying details, generating the file, or uploading the file.
   * - Success: The export is successful. Call the query operation to obtain the file information.
   * - Failed: The export failed. Call the query operation to view the errorMessage.
   * 
   * A newly created task returns Pending. When an existing task is reused through clientToken, the current status of create task is returned, which is not guaranteed to be Pending.
   * 
   * @example
   * Pending
   */
  status?: string;
  /**
   * @remarks
   * The export task ID. When you call GetGatewayQuotaRuleSubjectUsageExportTask, pass this value along with the gatewayId, ruleId, and subjectId from this request.
   * 
   * @example
   * finops-export-abcdef1234567890
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayQuotaRuleSubjectUsageExportTaskResponseBody extends $dara.Model {
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
   * 
   * @example
   * {
   *   "taskId": "finops-export-abcdef1234567890",
   *   "status": "Pending"
   * }
   */
  data?: CreateGatewayQuotaRuleSubjectUsageExportTaskResponseBodyData;
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
   * The request ID of this OpenAPI call, which is used to troubleshoot call issues. This is different from the request_id of each consumption record in the exported file.
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
      data: CreateGatewayQuotaRuleSubjectUsageExportTaskResponseBodyData,
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

