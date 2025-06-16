// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyExpressConnectTrafficQosRequestRemoveInstanceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated instance.
   * 
   * @example
   * pc-bp1j37am632492qzw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of the associated instance. Set the value to **PHYSICALCONNECTION**.
   * 
   * @example
   * PHYSICALCONNECTION
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

