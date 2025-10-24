// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstanceHealerRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceIdList?: string[];
  /**
   * @example
   * Clean
   */
  strategy?: string;
  /**
   * @example
   * 30
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'InstanceIdList',
      strategy: 'Strategy',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
      strategy: 'string',
      timeout: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdList)) {
      $dara.Model.validateArray(this.instanceIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

