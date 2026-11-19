// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityRuleTaskResponseBodyRuleTaskInfo extends $dara.Model {
  /**
   * @remarks
   * The business date in the YYYY-MM-DD format.
   * 
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  /**
   * @remarks
   * The business date format.
   * 
   * @example
   * yyyy-MM-dd
   */
  bizDateFormat?: string;
  /**
   * @remarks
   * The creation time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * The creator.
   * 
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @remarks
   * The end time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The rule task ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The ID of the last updater.
   * 
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @remarks
   * The update time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 11
   */
  ruleId?: number;
  /**
   * @remarks
   * The start time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * running
   */
  status?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 11
   */
  templateId?: number;
  /**
   * @remarks
   * The name of the checked object.
   * 
   * @example
   * test
   */
  validateObjectName?: string;
  /**
   * @remarks
   * The checked object type.
   * 
   * @example
   * column
   */
  validateObjectType?: string;
  /**
   * @remarks
   * The checked partition.
   * 
   * @example
   * 20251011
   */
  validatePartition?: string;
  /**
   * @remarks
   * Indicates whether the check is successful.
   */
  validateSuccess?: boolean;
  /**
   * @remarks
   * The associated monitoring ID.
   * 
   * @example
   * 1
   */
  watchId?: number;
  /**
   * @remarks
   * The monitoring task ID. This ID is empty for trial-run rule tasks.
   * 
   * @example
   * 1
   */
  watchTaskId?: number;
  static names(): { [key: string]: string } {
    return {
      bizDate: 'BizDate',
      bizDateFormat: 'BizDateFormat',
      createTime: 'CreateTime',
      creator: 'Creator',
      endTime: 'EndTime',
      id: 'Id',
      modifier: 'Modifier',
      modifyTime: 'ModifyTime',
      ruleId: 'RuleId',
      startTime: 'StartTime',
      status: 'Status',
      templateId: 'TemplateId',
      validateObjectName: 'ValidateObjectName',
      validateObjectType: 'ValidateObjectType',
      validatePartition: 'ValidatePartition',
      validateSuccess: 'ValidateSuccess',
      watchId: 'WatchId',
      watchTaskId: 'WatchTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizDate: 'string',
      bizDateFormat: 'string',
      createTime: 'string',
      creator: 'string',
      endTime: 'string',
      id: 'number',
      modifier: 'string',
      modifyTime: 'string',
      ruleId: 'number',
      startTime: 'string',
      status: 'string',
      templateId: 'number',
      validateObjectName: 'string',
      validateObjectType: 'string',
      validatePartition: 'string',
      validateSuccess: 'boolean',
      watchId: 'number',
      watchTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityRuleTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * The rule task details.
   */
  ruleTaskInfo?: GetQualityRuleTaskResponseBodyRuleTaskInfo;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      ruleTaskInfo: 'RuleTaskInfo',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      ruleTaskInfo: GetQualityRuleTaskResponseBodyRuleTaskInfo,
      success: 'boolean',
    };
  }

  validate() {
    if(this.ruleTaskInfo && typeof (this.ruleTaskInfo as any).validate === 'function') {
      (this.ruleTaskInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

