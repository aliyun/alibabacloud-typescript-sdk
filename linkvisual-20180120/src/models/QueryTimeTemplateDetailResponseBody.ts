// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTimeTemplateDetailResponseBodyDataTimeSectionList extends $dara.Model {
  /**
   * @remarks
   * The start time of each day, in seconds.
   * 
   * @example
   * 20000
   */
  begin?: number;
  /**
   * @remarks
   * The day of the week. Valid values: 0 to 6, where 0 indicates Sunday and 6 indicates Saturday.
   * 
   * @example
   * 0
   */
  dayOfWeek?: number;
  /**
   * @remarks
   * The end time of each day, in seconds.
   * 
   * @example
   * 60000
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

export class QueryTimeTemplateDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether 24/7 recording is enabled:
   * 
   * - **1**: Yes.
   * - **0**: No. For detailed configuration, see the **TimeSectionList** parameter.
   * 
   * @example
   * 0
   */
  allDay?: number;
  /**
   * @remarks
   * Indicates whether the template is the default template:
   * 
   * - **1**: Default template.
   * - **0**: Custom template.
   * 
   * @example
   * 1
   */
  default?: number;
  /**
   * @remarks
   * The name of the time template.
   * 
   * @example
   * test
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
   * The list of time sections in the time template.
   */
  timeSectionList?: QueryTimeTemplateDetailResponseBodyDataTimeSectionList[];
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
      timeSectionList: { 'type': 'array', 'itemType': QueryTimeTemplateDetailResponseBodyDataTimeSectionList },
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

export class QueryTimeTemplateDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code:
   * 
   * - **200**: The call is successful.
   * - Other values: error codes. For more information, see [Error codes](https://help.aliyun.com/document_detail/145071.html).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The time template information returned when the call was successful.
   */
  data?: QueryTimeTemplateDetailResponseBodyData;
  /**
   * @remarks
   * The error message returned when the call failed.
   * 
   * @example
   * template owner error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06DC77A0-4622-42DB-9EE0-25FIOHS82JK1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful:
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
      data: QueryTimeTemplateDetailResponseBodyData,
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

