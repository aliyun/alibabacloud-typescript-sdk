// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerlessTopNAppsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: number;
  limit?: number;
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      limit: 'Limit',
      orderBy: 'OrderBy',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      limit: 'number',
      orderBy: 'string',
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

