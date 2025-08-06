// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDailyPlayRegionStatisRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2025-03-20
   */
  date?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  mediaRegion?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      mediaRegion: 'MediaRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      mediaRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

