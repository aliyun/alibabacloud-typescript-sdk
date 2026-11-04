// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTimeTemplateRequestTimeSections extends $dara.Model {
  /**
   * @remarks
   * The start time of the day. Valid values: 0 to 86399. Unit: seconds.
   * 
   * @example
   * 20000
   */
  begin?: number;
  /**
   * @remarks
   * The day of the week. Valid values: 0 to 6, which indicate Sunday to Saturday.
   * 
   * @example
   * 0
   */
  dayOfWeek?: number;
  /**
   * @remarks
   * The end time of the day. Valid values: 1 to 86399. Unit: seconds.
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

export class UpdateTimeTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether 24/7 recording is enabled.
   * 
   * Valid values:
   * - 1: yes.
   * - 0: no. For detailed configurations, see the TimeSections.N.DayOfWeek, TimeSections.N.Begin, and TimeSections.N.End parameters.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  allDay?: number;
  /**
   * @remarks
   * The name of the time template.
   * 
   * The name must be less than 48 characters in length and can contain letters, digits, and the following special characters: hyphens (-), underscores (_), at signs (@), periods (.), and colons (:).
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the time template. You can call the [QueryTimeTemplate](https://help.aliyun.com/document_detail/107890.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * fc82774fa749485bad7d719f9670****
   */
  templateId?: string;
  /**
   * @remarks
   * The list of time sections.
   */
  timeSections?: UpdateTimeTemplateRequestTimeSections[];
  static names(): { [key: string]: string } {
    return {
      allDay: 'AllDay',
      name: 'Name',
      templateId: 'TemplateId',
      timeSections: 'TimeSections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allDay: 'number',
      name: 'string',
      templateId: 'string',
      timeSections: { 'type': 'array', 'itemType': UpdateTimeTemplateRequestTimeSections },
    };
  }

  validate() {
    if(Array.isArray(this.timeSections)) {
      $dara.Model.validateArray(this.timeSections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

