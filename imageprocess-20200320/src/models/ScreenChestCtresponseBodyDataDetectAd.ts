// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenChestCTResponseBodyDataDetectAD extends $dara.Model {
  distanceMap?: string;
  mask?: string;
  possibility?: string;
  seriesInstanceUid?: string;
  sliceVal?: number;
  static names(): { [key: string]: string } {
    return {
      distanceMap: 'DistanceMap',
      mask: 'Mask',
      possibility: 'Possibility',
      seriesInstanceUid: 'SeriesInstanceUid',
      sliceVal: 'SliceVal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distanceMap: 'string',
      mask: 'string',
      possibility: 'string',
      seriesInstanceUid: 'string',
      sliceVal: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

