// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQualityRuleTasksResponseBodyPageResultQualityRuleTaskList extends $dara.Model {
  /**
   * @remarks
   * The business date.
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
   * The creation time.
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
   * The end time.
   * 
   * @example
   * 2025-06-30 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the rule task.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The ID of the user who last modified the task.
   * 
   * @example
   * 30012011
   */
  modifier?: string;
  /**
   * @remarks
   * The modification time.
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
   * The start time.
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
   * The name of the validated object.
   * 
   * @example
   * test
   */
  validateObjectName?: string;
  /**
   * @remarks
   * The object type of the validated object.
   * 
   * @example
   * column
   */
  validateObjectType?: string;
  /**
   * @remarks
   * The validation partition.
   * 
   * @example
   * 20251011
   */
  validatePartition?: string;
  /**
   * @remarks
   * Indicates whether the validation passed.
   */
  validateSuccess?: boolean;
  /**
   * @remarks
   * The ID of the associated quality watchtask.
   * 
   * @example
   * 1
   */
  watchId?: number;
  /**
   * @remarks
   * The ID of the quality watchtask. This ID is empty for trial-run rule tasks.
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

export class ListQualityRuleTasksResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The list of quality rule tasks.
   */
  qualityRuleTaskList?: ListQualityRuleTasksResponseBodyPageResultQualityRuleTaskList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      qualityRuleTaskList: 'QualityRuleTaskList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityRuleTaskList: { 'type': 'array', 'itemType': ListQualityRuleTasksResponseBodyPageResultQualityRuleTaskList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qualityRuleTaskList)) {
      $dara.Model.validateArray(this.qualityRuleTaskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQualityRuleTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
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
   * The error details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paged query result.
   */
  pageResult?: ListQualityRuleTasksResponseBodyPageResult;
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
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListQualityRuleTasksResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

