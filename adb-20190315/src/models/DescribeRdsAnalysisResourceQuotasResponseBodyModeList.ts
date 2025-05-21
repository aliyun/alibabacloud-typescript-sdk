// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRdsAnalysisResourceQuotasResponseBodyModeListMode } from "./DescribeRdsAnalysisResourceQuotasResponseBodyModeListMode";


export class DescribeRdsAnalysisResourceQuotasResponseBodyModeList extends $dara.Model {
  mode?: DescribeRdsAnalysisResourceQuotasResponseBodyModeListMode[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: { 'type': 'array', 'itemType': DescribeRdsAnalysisResourceQuotasResponseBodyModeListMode },
    };
  }

  validate() {
    if(Array.isArray(this.mode)) {
      $dara.Model.validateArray(this.mode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

