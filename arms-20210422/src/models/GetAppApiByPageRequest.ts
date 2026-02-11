// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppApiByPageRequest extends $dara.Model {
  currentPage?: number;
  endTime?: number;
  intervalMills?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  PId?: string;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      intervalMills: 'IntervalMills',
      PId: 'PId',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endTime: 'number',
      intervalMills: 'number',
      PId: 'string',
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

