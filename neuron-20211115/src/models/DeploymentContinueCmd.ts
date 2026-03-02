// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeploymentContinueCmd extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  deploymentId?: number;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'deploymentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

