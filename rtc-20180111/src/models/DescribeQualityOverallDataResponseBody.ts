// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeQualityOverallDataResponseBodyQualityOverallData } from "./DescribeQualityOverallDataResponseBodyQualityOverallData";


export class DescribeQualityOverallDataResponseBody extends $dara.Model {
  qualityOverallData?: DescribeQualityOverallDataResponseBodyQualityOverallData[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityOverallData: 'QualityOverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityOverallData: { 'type': 'array', 'itemType': DescribeQualityOverallDataResponseBodyQualityOverallData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.qualityOverallData)) {
      $dara.Model.validateArray(this.qualityOverallData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

