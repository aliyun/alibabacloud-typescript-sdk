// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlarmHistoryRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  cursor?: string;
  /**
   * @example
   * 1548927491223
   */
  endTime?: string;
  /**
   * @example
   * 1a775e37-dfba-430c-ab9f-7036475c8bfb_2dbe619b-0483-402e-9437-7c7a38fba7ed
   */
  id?: string;
  regionId?: string;
  /**
   * @example
   * 3
   */
  size?: number;
  /**
   * @example
   * 1548913091223
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      cursor: 'Cursor',
      endTime: 'EndTime',
      id: 'Id',
      regionId: 'RegionId',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cursor: 'string',
      endTime: 'string',
      id: 'string',
      regionId: 'string',
      size: 'number',
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

