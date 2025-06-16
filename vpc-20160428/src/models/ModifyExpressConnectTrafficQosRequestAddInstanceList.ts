// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyExpressConnectTrafficQosRequestAddInstanceList extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance to be associated.
   * 
   * @example
   * pc-bp159zj8zujwy3p07****
   */
  instanceId?: string;
  /**
   * @remarks
   * The type of instance to be associated. Set the value to **PHYSICALCONNECTION**.
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

