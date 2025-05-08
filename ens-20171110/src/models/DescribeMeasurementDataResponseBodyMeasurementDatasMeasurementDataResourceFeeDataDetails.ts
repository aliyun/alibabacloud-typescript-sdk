// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail } from "./DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail";


export class DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetails extends $dara.Model {
  resourceFeeDataDetail?: DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail[];
  static names(): { [key: string]: string } {
    return {
      resourceFeeDataDetail: 'ResourceFeeDataDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceFeeDataDetail: { 'type': 'array', 'itemType': DescribeMeasurementDataResponseBodyMeasurementDatasMeasurementDataResourceFeeDataDetailsResourceFeeDataDetail },
    };
  }

  validate() {
    if(Array.isArray(this.resourceFeeDataDetail)) {
      $dara.Model.validateArray(this.resourceFeeDataDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

