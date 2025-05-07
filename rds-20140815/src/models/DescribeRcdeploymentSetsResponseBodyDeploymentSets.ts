// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSet } from "./DescribeRcdeploymentSetsResponseBodyDeploymentSetsDeploymentSet";


export class DescribeRCDeploymentSetsResponseBodyDeploymentSets extends $dara.Model {
  deploymentSet?: DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSet[];
  static names(): { [key: string]: string } {
    return {
      deploymentSet: 'DeploymentSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSet: { 'type': 'array', 'itemType': DescribeRCDeploymentSetsResponseBodyDeploymentSetsDeploymentSet },
    };
  }

  validate() {
    if(Array.isArray(this.deploymentSet)) {
      $dara.Model.validateArray(this.deploymentSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

