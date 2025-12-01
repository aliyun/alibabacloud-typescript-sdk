// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSuspEventPageRequest extends $dara.Model {
  /**
   * @remarks
   * Alarm end time.
   * 
   * @example
   * 1732515522000
   */
  alarmEndTime?: number;
  /**
   * @remarks
   * Alarm start time.
   * 
   * @example
   * 1722515522000
   */
  alarmStartTime?: number;
  /**
   * @remarks
   * Current page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Alarm source.
   * 
   * @example
   * SUSP_EVENT
   */
  source?: string;
  /**
   * @remarks
   * Disposal status.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      alarmEndTime: 'AlarmEndTime',
      alarmStartTime: 'AlarmStartTime',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      source: 'Source',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEndTime: 'number',
      alarmStartTime: 'number',
      currentPage: 'number',
      pageSize: 'number',
      source: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

