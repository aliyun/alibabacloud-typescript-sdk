// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiResponseBodyDeployedInfosDeployedInfo } from "./DescribeApiResponseBodyDeployedInfosDeployedInfo";


export class DescribeApiResponseBodyDeployedInfos extends $dara.Model {
  deployedInfo?: DescribeApiResponseBodyDeployedInfosDeployedInfo[];
  static names(): { [key: string]: string } {
    return {
      deployedInfo: 'DeployedInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedInfo: { 'type': 'array', 'itemType': DescribeApiResponseBodyDeployedInfosDeployedInfo },
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

