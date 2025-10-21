// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceSpec } from "./ResourceSpec";


export class CreateDeploymentTargetRequest extends $dara.Model {
  body?: ResourceSpec;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-dt
   */
  deploymentTargetName?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      deploymentTargetName: 'deploymentTargetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: ResourceSpec,
      deploymentTargetName: 'string',
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

