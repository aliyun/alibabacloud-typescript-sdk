// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployPolicyInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of policy instances.
   */
  instances?: string[];
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

