// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGatewayQuotaRuleSubjectUsageExportTaskResponseBodyData extends $dara.Model {
  /**
   * @example
   * Pending
   */
  status?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * {
   *   "taskId": "finops-export-abcdef1234567890",
   *   "status": "Pending"
   * }
   */
  data?: CreateGatewayQuotaRuleSubjectUsageExportTaskResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
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

