// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Deployment } from "./Deployment";


export class UpdateDeploymentByNameRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of fields to update. Partial updates are supported.
   * 
   * This parameter is required.
   */
  body?: Deployment;
  /**
   * @remarks
   * The deployment job name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  deploymentName?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      deploymentName: 'deploymentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Deployment,
      deploymentName: 'string',
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

