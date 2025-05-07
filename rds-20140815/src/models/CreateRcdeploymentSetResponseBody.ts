// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCDeploymentSetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deployment set ID.
   * 
   * @example
   * ds-uf6c8qerk019bj1l****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8B993DA9-5272-5414-94E3-4CA8BA0146C2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentSetId: 'DeploymentSetId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentSetId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

