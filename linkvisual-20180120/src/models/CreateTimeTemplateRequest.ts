// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTimeTemplateRequestTimeSections extends $dara.Model {
  /**
   * @remarks
   * The start time of each day. Valid values: 0 to 86399. Unit: seconds.
   * 
   * @example
   * 20000
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

export class CreateTimeTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable 24/7 recording. Valid values:
   * - 1: Yes.
   * - 0: No. You must configure the TimeSections.N.DayOfWeek, TimeSections.N.Begin, and TimeSections.N.End parameters.
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
   * The name must be fewer than 48 characters in length and can contain letters, digits, and the following special characters: hyphens (-), underscores (_), at signs (@), periods (.), and colons (:).
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The list of time ranges.
   */
  timeSections?: CreateTimeTemplateRequestTimeSections[];
  static names(): { [key: string]: string } {
    return {
      allDay: 'AllDay',
      name: 'Name',
      timeSections: 'TimeSections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allDay: 'number',
      name: 'string',
      timeSections: { 'type': 'array', 'itemType': CreateTimeTemplateRequestTimeSections },
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

