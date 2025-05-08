// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData } from "./DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData";


export class DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatas extends $dara.Model {
  bandWidthFeeData?: DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData[];
  static names(): { [key: string]: string } {
    return {
      bandWidthFeeData: 'BandWidthFeeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidthFeeData: { 'type': 'array', 'itemType': DescribeEpnMeasurementDataResponseBodyMeasurementDatasMeasurementDataBandWidthFeeDatasBandWidthFeeData },
    };
  }

  validate() {
    if(Array.isArray(this.bandWidthFeeData)) {
      $dara.Model.validateArray(this.bandWidthFeeData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

