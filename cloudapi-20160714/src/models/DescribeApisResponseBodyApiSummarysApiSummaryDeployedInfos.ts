// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfosDeployedInfo } from "./DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfosDeployedInfo";


export class DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfos extends $dara.Model {
  deployedInfo?: DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfosDeployedInfo[];
  static names(): { [key: string]: string } {
    return {
      deployedInfo: 'DeployedInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedInfo: { 'type': 'array', 'itemType': DescribeApisResponseBodyApiSummarysApiSummaryDeployedInfosDeployedInfo },
    };
  }

  validate() {
    if(Array.isArray(this.deployedInfo)) {
      $dara.Model.validateArray(this.deployedInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

