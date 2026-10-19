// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetListGpuClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the region to query.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The query time range, in milliseconds, in the format of [start, end]. Example: [13254125000, 52451241000].
   * 
   * @example
   * [1757820000, 1757823600]
   */
  timeRegion?: any;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      timeRegion: 'timeRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      timeRegion: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

