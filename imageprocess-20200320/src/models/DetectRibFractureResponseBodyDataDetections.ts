// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectRibFractureResponseBodyDataDetections extends $dara.Model {
  coordinateImage?: number[];
  coordinates?: number[];
  /**
   * @example
   * None
   */
  fracSOPInstanceUID?: string;
  /**
   * @example
   * 1
   */
  fractureCategory?: string;
  /**
   * @example
   * 0.7916666666666667
   */
  fractureConfidence?: number;
  /**
   * @example
   * 2
   */
  fractureId?: number;
  /**
   * @example
   * L4
   */
  fractureLocation?: string;
  /**
   * @example
   * 0
   */
  fractureSegment?: number;
  static names(): { [key: string]: string } {
    return {
      coordinateImage: 'CoordinateImage',
      coordinates: 'Coordinates',
      fracSOPInstanceUID: 'FracSOPInstanceUID',
      fractureCategory: 'FractureCategory',
      fractureConfidence: 'FractureConfidence',
      fractureId: 'FractureId',
      fractureLocation: 'FractureLocation',
      fractureSegment: 'FractureSegment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinateImage: { 'type': 'array', 'itemType': 'number' },
      coordinates: { 'type': 'array', 'itemType': 'number' },
      fracSOPInstanceUID: 'string',
      fractureCategory: 'string',
      fractureConfidence: 'number',
      fractureId: 'number',
      fractureLocation: 'string',
      fractureSegment: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.coordinateImage)) {
      $dara.Model.validateArray(this.coordinateImage);
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

