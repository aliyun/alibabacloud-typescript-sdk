// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceSupportRequest extends $dara.Model {
  /**
   * @remarks
   * List of instance IDs to check
   * 
   * @example
   * ["i-2zxxxxxx"]
   */
  instances?: string[];
  /**
   * @remarks
   * Region to which the instances belong. Ensure that all instance IDs passed in the instances list belong to the same region.
   * 
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

