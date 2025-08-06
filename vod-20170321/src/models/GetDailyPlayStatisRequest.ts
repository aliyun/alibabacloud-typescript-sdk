// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDailyPlayStatisRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mediaId?: string;
  mediaRegion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endDate: 'EndDate',
      mediaId: 'MediaId',
      mediaRegion: 'MediaRegion',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endDate: 'string',
      mediaId: 'string',
      mediaRegion: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

