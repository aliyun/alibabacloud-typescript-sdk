// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingActivityResult extends $dara.Model {
  /**
   * @remarks
   * 实例ID。
   * 
   * @example
   * i-bp1cudc25w2bfwl5****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

