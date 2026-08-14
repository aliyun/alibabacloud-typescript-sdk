// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigLayer4RealLimitRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  limitValue?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      limitValue: 'LimitValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      limitValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

