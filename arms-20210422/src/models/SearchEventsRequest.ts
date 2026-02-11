// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchEventsRequest extends $dara.Model {
  alertId?: number;
  alertType?: number;
  appType?: string;
  currentPage?: number;
  endTime?: number;
  isTrigger?: number;
  pageSize?: number;
  pid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertType: 'AlertType',
      appType: 'AppType',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      isTrigger: 'IsTrigger',
      pageSize: 'PageSize',
      pid: 'Pid',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertType: 'number',
      appType: 'string',
      currentPage: 'number',
      endTime: 'number',
      isTrigger: 'number',
      pageSize: 'number',
      pid: 'string',
      regionId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

