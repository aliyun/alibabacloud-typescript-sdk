// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectVehicleICongestionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/objectdet/DetectVehicleICongestion/DetectVehicleICongestion1.jpg
   */
  imageURL?: string;
  preRegionIntersectFeaturesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roadRegionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      imageURL: 'ImageURL',
      preRegionIntersectFeaturesShrink: 'PreRegionIntersectFeatures',
      roadRegionsShrink: 'RoadRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageURL: 'string',
      preRegionIntersectFeaturesShrink: 'string',
      roadRegionsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

