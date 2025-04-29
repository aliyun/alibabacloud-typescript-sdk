// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeployedApisResponseBodyDeployedApisDeployedApiItem } from "./DescribeDeployedApisResponseBodyDeployedApisDeployedApiItem";


export class DescribeDeployedApisResponseBodyDeployedApis extends $dara.Model {
  deployedApiItem?: DescribeDeployedApisResponseBodyDeployedApisDeployedApiItem[];
  static names(): { [key: string]: string } {
    return {
      deployedApiItem: 'DeployedApiItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedApiItem: { 'type': 'array', 'itemType': DescribeDeployedApisResponseBodyDeployedApisDeployedApiItem },
    };
  }

  validate() {
    if(Array.isArray(this.deployedApiItem)) {
      $dara.Model.validateArray(this.deployedApiItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

