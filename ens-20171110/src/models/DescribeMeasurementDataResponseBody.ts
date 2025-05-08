// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMeasurementDataResponseBodyMeasurementDatas } from "./DescribeMeasurementDataResponseBodyMeasurementDatas";


export class DescribeMeasurementDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metering data returned.
   */
  measurementDatas?: DescribeMeasurementDataResponseBodyMeasurementDatas;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 125B04C7-3D0D-4245-AF96-14E3758E3F06
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      measurementDatas: 'MeasurementDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurementDatas: DescribeMeasurementDataResponseBodyMeasurementDatas,
      requestId: 'string',
    };
  }

  validate() {
    if(this.measurementDatas && typeof (this.measurementDatas as any).validate === 'function') {
      (this.measurementDatas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

