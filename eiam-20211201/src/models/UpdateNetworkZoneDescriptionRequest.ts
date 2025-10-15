// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateNetworkZoneDescriptionRequest extends $dara.Model {
  /**
   * @example
   * client-token-examplexxxx
   */
  clientToken?: string;
  /**
   * @remarks
   * 网络区域描述
   * 
   * This parameter is required.
   * 
   * @example
   * 测试描述
   */
  description?: string;
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
      clientToken: 'ClientToken',
      description: 'Description',
      instanceId: 'InstanceId',
      networkZoneId: 'NetworkZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
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

