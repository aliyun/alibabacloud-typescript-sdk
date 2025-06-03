// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList } from "./DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList";


export class DescribeQualityAreaDistributionStatDataResponseBody extends $dara.Model {
  qualityStatDataList?: DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qualityStatDataList: 'QualityStatDataList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityStatDataList: { 'type': 'array', 'itemType': DescribeQualityAreaDistributionStatDataResponseBodyQualityStatDataList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.qualityStatDataList)) {
      $dara.Model.validateArray(this.qualityStatDataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

