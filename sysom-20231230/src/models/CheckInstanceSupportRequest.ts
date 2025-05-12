// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceSupportRequest extends $dara.Model {
  /**
   * @example
   * ["i-2zxxxxxx"]
   */
  instances?: string[];
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': 'string' },
      region: 'string',
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

