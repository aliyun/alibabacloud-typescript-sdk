// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeploymentRollbackCmd } from "./DeploymentRollbackCmd";


export class RollbackPdpServiceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  body?: DeploymentRollbackCmd;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DeploymentRollbackCmd,
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

