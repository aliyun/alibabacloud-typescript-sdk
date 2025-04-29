// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSet } from "./DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSet";


export class DescribeDeploymentSetsResponseBodyDeploymentSets extends $dara.Model {
  deploymentSet?: DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSet[];
  static names(): { [key: string]: string } {
    return {
      deploymentSet: 'DeploymentSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSet: { 'type': 'array', 'itemType': DescribeDeploymentSetsResponseBodyDeploymentSetsDeploymentSet },
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

