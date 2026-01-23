// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityRuleTaskResponseBodyRuleTaskInfo extends $dara.Model {
  /**
   * @example
   * 2025-06-30
   */
  bizDate?: string;
  /**
   * @example
   * yyyy-MM-dd
   */
  bizDateFormat?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  createTime?: string;
  /**
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  endTime?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  modifyTime?: string;
  /**
   * @example
   * 11
   */
  ruleId?: number;
  /**
   * @example
   * 2025-06-30 00:00:00
   */
  startTime?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * 11
   */
  templateId?: number;
  /**
   * @example
   * test
   */
  validateObjectName?: string;
  /**
   * @example
   * column
   */
  validateObjectType?: string;
  /**
   * @example
   * 20251011
   */
  validatePartition?: string;
  validateSuccess?: boolean;
  /**
   * @example
   * 1
   */
  watchId?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
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
  ruleTaskInfo?: GetQualityRuleTaskResponseBodyRuleTaskInfo;
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

