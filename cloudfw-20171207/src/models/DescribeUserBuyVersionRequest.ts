// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserBuyVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID. If you specify an instance ID, the system queries the specified instance. If you leave this parameter empty, the system queries the most recent instance by default.
   * 
   * @example
   * cfw_elasticity_public_cn-*******
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

