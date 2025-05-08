// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEpnMeasurementDataResponseBodyMeasurementDatas } from "./DescribeEpnMeasurementDataResponseBodyMeasurementDatas";


export class DescribeEpnMeasurementDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metering data returned.
   */
  measurementDatas?: DescribeEpnMeasurementDataResponseBodyMeasurementDatas;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A6328C33-6304-5291-8641-0A00A99D0DD0
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
      measurementDatas: DescribeEpnMeasurementDataResponseBodyMeasurementDatas,
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

