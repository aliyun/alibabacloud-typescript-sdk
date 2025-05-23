// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDeploymentPackageResponseBodyDataDeployedItems } from "./GetDeploymentPackageResponseBodyDataDeployedItems";
import { GetDeploymentPackageResponseBodyDataDeployment } from "./GetDeploymentPackageResponseBodyDataDeployment";


export class GetDeploymentPackageResponseBodyData extends $dara.Model {
  deployedItems?: GetDeploymentPackageResponseBodyDataDeployedItems[];
  deployment?: GetDeploymentPackageResponseBodyDataDeployment;
  static names(): { [key: string]: string } {
    return {
      deployedItems: 'DeployedItems',
      deployment: 'Deployment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedItems: { 'type': 'array', 'itemType': GetDeploymentPackageResponseBodyDataDeployedItems },
      deployment: GetDeploymentPackageResponseBodyDataDeployment,
    };
  }

  validate() {
    if(Array.isArray(this.deployedItems)) {
      $dara.Model.validateArray(this.deployedItems);
    }
    if(this.deployment && typeof (this.deployment as any).validate === 'function') {
      (this.deployment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

