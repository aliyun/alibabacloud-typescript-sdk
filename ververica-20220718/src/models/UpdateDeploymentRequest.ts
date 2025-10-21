// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Deployment } from "./Deployment";


export class UpdateDeploymentRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the deployment that you want to update.
   * 
   * This parameter is required.
   */
  body?: Deployment;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Deployment,
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

