// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutDataEventSelectorRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"EventName":{"Equals":["GetObject","CopyObject","AppendObject"]},"ReadWriteType":"All","ServiceName":"Oss"}]
   */
  eventSelectors?: string;
  /**
   * @example
   * true
   */
  isTrailAllRegion?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * trail-name
   */
  trailName?: string;
  /**
   * @example
   * cn-shanghai,cn-hangzhou
   */
  trailRegionIds?: string;
  static names(): { [key: string]: string } {
    return {
      eventSelectors: 'EventSelectors',
      isTrailAllRegion: 'IsTrailAllRegion',
      trailName: 'TrailName',
      trailRegionIds: 'TrailRegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSelectors: 'string',
      isTrailAllRegion: 'boolean',
      trailName: 'string',
      trailRegionIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

