// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfoTimeSectionList extends $dara.Model {
  /**
   * @remarks
   * The start time of each day. Valid values: 0 to 86399. Unit: seconds.
   * 
   * @example
   * 0
   */
  begin?: number;
  /**
   * @remarks
   * The day of the week. Valid values: 0 to 6, representing Sunday through Saturday.
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
   * 86399
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

export class QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether 24/7 recording is enabled. Valid values:
   * 
   * - **1**: enabled.
   * - **0**: disabled. For detailed configuration, see the **TimeSectionList** parameter.
   * 
   * @example
   * 0
   */
  allDay?: number;
  /**
   * @remarks
   * The templatetype of the time template. Valid values:
   * - **1**: default template
   * - **0**: custom template
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
   * testtime1
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
   * The list of time templates.
   */
  timeSectionList?: QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfoTimeSectionList[];
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
      timeSectionList: { 'type': 'array', 'itemType': QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfoTimeSectionList },
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

export class QueryEventRecordPlanDeviceByDeviceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the intelligent alert event recording.
   * 
   * @example
   * planAA
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
   * The pre-recording duration, in seconds.
   * 
   * @example
   * 5
   */
  preRecordDuration?: number;
  /**
   * @remarks
   * The recording duration, including the pre-recording duration, in seconds.
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
  templateInfo?: QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfo;
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
      templateInfo: QueryEventRecordPlanDeviceByDeviceResponseBodyDataTemplateInfo,
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

export class QueryEventRecordPlanDeviceByDeviceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * - **200**: success.
   * - Other values: error codes. For more information, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The query result.
   */
  data?: QueryEventRecordPlanDeviceByDeviceResponseBodyData;
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
   * Indicates whether the call was successful. Valid values:
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
      data: QueryEventRecordPlanDeviceByDeviceResponseBodyData,
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

