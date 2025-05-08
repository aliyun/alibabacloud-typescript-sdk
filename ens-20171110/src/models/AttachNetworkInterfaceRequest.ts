// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance
   * 
   * This parameter is required.
   * 
   * @example
   * i-5p67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * This parameter is required.
   * 
   * @example
   * eni-58z57orgmt6d1****
   */
  networkInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkInterfaceId: 'NetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkInterfaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

