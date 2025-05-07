// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePickUpWaybillPreQueryResponseBodyDataCpTimeSelectListAppointTimesTimeList extends $dara.Model {
  /**
   * @remarks
   * The end of the time range.
   * 
   * @example
   * 12:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The tip displayed when the scheduled pickup is not available.
   * 
   * @example
   * Appointment Full
   */
  selectDisableTip?: string;
  /**
   * @remarks
   * Indicates whether the time range can be selected for the scheduled pickup.
   * 
   * @example
   * true
   */
  selectable?: boolean;
  /**
   * @remarks
   * The beginning of the time range.
   * 
   * @example
   * 10:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      selectDisableTip: 'SelectDisableTip',
      selectable: 'Selectable',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      selectDisableTip: 'string',
      selectable: 'boolean',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

