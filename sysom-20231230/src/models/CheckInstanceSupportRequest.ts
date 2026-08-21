// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceSupportRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The list of instance IDs to check.
   * 
   * @example
   * ["i-2zxxxxxx"]
   */
  instances?: string[];
  /**
   * @remarks
   * The region to which the instances belong. All instance IDs specified in instances must belong to the same region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      instances: 'instances',
      region: 'region',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      instances: { 'type': 'array', 'itemType': 'string' },
      region: 'string',
      xSysomInvokeSource: 'string',
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

