// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEventRecordPlanDetailResponseBodyDataTemplateInfoTimeSectionList extends $dara.Model {
  /**
   * @remarks
   * The start time of each day. Valid values: 0 to 86399. Unit: seconds.
   * 
   * @example
   * 6000
   */
  begin?: number;
  /**
   * @remarks
   * The day of the week. Valid values: 0 to 6, which represent Sunday through Saturday.
   * 
   * @example
   * 0
   */
  dayOfWeek?: number;
  /**
   * @remarks
   * The end time of each day. Valid values: 1 to 86399. Unit: seconds.
   * 
   * @example
   * 20000
   */
  end?: number;
  static names(): { [key: string]: string } {
    return {
      begin: 'Begin',
      dayOfWeek: 'DayOfWeek',
      end: 'End',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begin: 'number',
      dayOfWeek: 'number',
      end: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDetailResponseBodyDataTemplateInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether 24/7 recording is enabled.
   * 
   * - 1: Yes.
   * - 0: No. For detailed configurations, see the TimeSectionList parameter.
   * 
   * @example
   * 0
   */
  allDay?: number;
  /**
   * @remarks
   * The templatetype. Valid values:
   * - 1: default template.
   * - 0: custom template.
   * 
   * @example
   * 0
   */
  default?: number;
  /**
   * @remarks
   * The name of the time template.
   * 
   * @example
   * temp1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the time template.
   * 
   * @example
   * 36f06322442e4e3f85a5ae8862c9****
   */
  templateId?: string;
  /**
   * @remarks
   * The details of the time template when AllDay is set to 0.
   */
  timeSectionList?: QueryEventRecordPlanDetailResponseBodyDataTemplateInfoTimeSectionList[];
  static names(): { [key: string]: string } {
    return {
      allDay: 'AllDay',
      default: 'Default',
      name: 'Name',
      templateId: 'TemplateId',
      timeSectionList: 'TimeSectionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allDay: 'number',
      default: 'number',
      name: 'string',
      templateId: 'string',
      timeSectionList: { 'type': 'array', 'itemType': QueryEventRecordPlanDetailResponseBodyDataTemplateInfoTimeSectionList },
    };
  }

  validate() {
    if(Array.isArray(this.timeSectionList)) {
      $dara.Model.validateArray(this.timeSectionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the intelligent alert event recording plan.
   * 
   * @example
   * record1
   */
  name?: string;
  /**
   * @remarks
   * The ID of the intelligent alert event recording plan.
   * 
   * @example
   * 5b60bf0dd55944c19d7817442bc9****
   */
  planId?: string;
  /**
   * @remarks
   * The pre-recording duration. Unit: seconds.
   * 
   * @example
   * 30
   */
  preRecordDuration?: number;
  /**
   * @remarks
   * The recording duration, including the pre-recording duration. Unit: seconds.
   * 
   * @example
   * 120
   */
  recordDuration?: number;
  /**
   * @remarks
   * The ID of the time template.
   * 
   * @example
   * 36f06322442e4e3f85a5ae8862c9****
   */
  templateId?: string;
  /**
   * @remarks
   * The details of the time template.
   */
  templateInfo?: QueryEventRecordPlanDetailResponseBodyDataTemplateInfo;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      planId: 'PlanId',
      preRecordDuration: 'PreRecordDuration',
      recordDuration: 'RecordDuration',
      templateId: 'TemplateId',
      templateInfo: 'TemplateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      planId: 'string',
      preRecordDuration: 'number',
      recordDuration: 'number',
      templateId: 'string',
      templateInfo: QueryEventRecordPlanDetailResponseBodyDataTemplateInfo,
    };
  }

  validate() {
    if(this.templateInfo && typeof (this.templateInfo as any).validate === 'function') {
      (this.templateInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryEventRecordPlanDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details of the intelligent alert event recording plan.
   */
  data?: QueryEventRecordPlanDetailResponseBodyData;
  /**
   * @remarks
   * The error message returned if the call fails.
   * 
   * @example
   * tenant auth error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The unique identifier generated by Alibaba Cloud for the request.
   * 
   * @example
   * 06DC77A0-4622-42DB-9EE0-25FIOHS82JK1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: The call was successful.
   * - **false**: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryEventRecordPlanDetailResponseBodyData,
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
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

