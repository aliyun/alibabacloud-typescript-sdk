// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectLungNoduleResponseBodyDataSeriesElements extends $dara.Model {
  /**
   * @example
   * 1
   */
  category?: string;
  /**
   * @example
   * 0.7012705768508907
   */
  confidence?: number;
  /**
   * @example
   * 9.730626493692398
   */
  diameter?: number;
  /**
   * @example
   * 308.9676976455463
   */
  imageX?: number;
  /**
   * @example
   * 198.3552282631497
   */
  imageY?: number;
  /**
   * @example
   * 20.434030793471255
   */
  imageZ?: number;
  /**
   * @example
   * up
   */
  lobe?: string;
  /**
   * @example
   * left
   */
  lung?: string;
  majorAxis?: number[];
  /**
   * @example
   * 261.37589112119247
   */
  meanValue?: number;
  minorAxis?: number[];
  /**
   * @remarks
   * 结节最大径位置所在帧的ID标识。
   * 
   * @example
   * 1.3.6.1.4.1.14519.5.2.1.6279.6001.468208655866166788627471660948
   */
  recistSOPInstanceUID?: string;
  /**
   * @remarks
   * 结节为恶性的置信度。取值范围0~1。
   * 
   * @example
   * 0.173
   */
  risk?: number;
  /**
   * @example
   * 1.3.6.1.4.1.14519.5.2.1.6279.6001.261151233960269013402330853013
   */
  SOPInstanceUID?: string;
  /**
   * @example
   * 10959.220491175074
   */
  volume?: number;
  /**
   * @example
   * 51.24291240631416
   */
  x?: number;
  /**
   * @example
   * -32.23147700784307
   */
  y?: number;
  /**
   * @example
   * -46.81608170781766
   */
  z?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      confidence: 'Confidence',
      diameter: 'Diameter',
      imageX: 'ImageX',
      imageY: 'ImageY',
      imageZ: 'ImageZ',
      lobe: 'Lobe',
      lung: 'Lung',
      majorAxis: 'MajorAxis',
      meanValue: 'MeanValue',
      minorAxis: 'MinorAxis',
      recistSOPInstanceUID: 'RecistSOPInstanceUID',
      risk: 'Risk',
      SOPInstanceUID: 'SOPInstanceUID',
      volume: 'Volume',
      x: 'X',
      y: 'Y',
      z: 'Z',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      confidence: 'number',
      diameter: 'number',
      imageX: 'number',
      imageY: 'number',
      imageZ: 'number',
      lobe: 'string',
      lung: 'string',
      majorAxis: { 'type': 'array', 'itemType': 'number' },
      meanValue: 'number',
      minorAxis: { 'type': 'array', 'itemType': 'number' },
      recistSOPInstanceUID: 'string',
      risk: 'number',
      SOPInstanceUID: 'string',
      volume: 'number',
      x: 'number',
      y: 'number',
      z: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.majorAxis)) {
      $dara.Model.validateArray(this.majorAxis);
    }
    if(Array.isArray(this.minorAxis)) {
      $dara.Model.validateArray(this.minorAxis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

