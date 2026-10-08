// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCDeploymentSetResponseBody extends $dara.Model {
  deploymentSetId?: string;
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

