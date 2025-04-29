// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDeployApiTaskResponseBodyDeployedResultsDeployedResult } from "./DescribeDeployApiTaskResponseBodyDeployedResultsDeployedResult";


export class DescribeDeployApiTaskResponseBodyDeployedResults extends $dara.Model {
  deployedResult?: DescribeDeployApiTaskResponseBodyDeployedResultsDeployedResult[];
  static names(): { [key: string]: string } {
    return {
      deployedResult: 'DeployedResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedResult: { 'type': 'array', 'itemType': DescribeDeployApiTaskResponseBodyDeployedResultsDeployedResult },
    };
  }

  validate() {
    if(Array.isArray(this.deployedResult)) {
      $dara.Model.validateArray(this.deployedResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

