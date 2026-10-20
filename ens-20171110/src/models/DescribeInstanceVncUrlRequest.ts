// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceVncUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. The instance must be in the Running state. You can call DescribeInstances to query the current state.
   * 
   * This parameter is required.
   * 
   * @example
   * i-5bp1hzoinajzkh91h****
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

