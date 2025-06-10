// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScreenChestCTResponseBodyDataAnalyzeChestVesselAortaInfo extends $dara.Model {
  /**
   * @remarks
   * 1
   */
  area?: number[];
  coordinates?: number[][];
  /**
   * @example
   * 2
   */
  labelValue?: number;
  /**
   * @example
   * 2722
   */
  maxArea?: number;
  /**
   * @example
   * 416
   */
  maxAreaIndex?: number;
  /**
   * @example
   * 63
   */
  maxDiameter?: number;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      coordinates: 'Coordinates',
      labelValue: 'LabelValue',
      maxArea: 'MaxArea',
      maxAreaIndex: 'MaxAreaIndex',
      maxDiameter: 'MaxDiameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: { 'type': 'array', 'itemType': 'number' },
      coordinates: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
      labelValue: 'number',
      maxArea: 'number',
      maxAreaIndex: 'number',
      maxDiameter: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.area)) {
      $dara.Model.validateArray(this.area);
    }
    if(Array.isArray(this.coordinates)) {
      $dara.Model.validateArray(this.coordinates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

