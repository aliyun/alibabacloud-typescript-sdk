// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAlertHistoriesRequest extends $dara.Model {
  alertId?: number;
  alertType?: number;
  currentPage?: number;
  endTime?: number;
  pageSize?: number;
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
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertType: 'number',
      currentPage: 'number',
      endTime: 'number',
      pageSize: 'number',
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

