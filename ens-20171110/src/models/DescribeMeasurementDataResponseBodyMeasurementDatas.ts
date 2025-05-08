// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementData } from "./DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementData";


export class DescribeMeasurementDataResponseBodyMeasurementDatas extends $dara.Model {
  measurementData?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementData[];
  static names(): { [key: string]: string } {
    return {
      measurementData: 'MeasurementData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurementData: { 'type': 'array', 'itemType': DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementData },
    };
  }

  validate() {
    if(Array.isArray(this.measurementData)) {
      $dara.Model.validateArray(this.measurementData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

