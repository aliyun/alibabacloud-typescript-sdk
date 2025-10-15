// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkZoneRequest extends $dara.Model {
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * IDaaS的网络区域主键id
   * 
   * This parameter is required.
   * 
   * @example
   * network_11111
   */
  networkZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkZoneId: 'NetworkZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkZoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

