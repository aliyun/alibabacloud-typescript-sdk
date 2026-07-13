// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCloudGtmInstanceConfigLogSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Generate a unique value for this parameter. The client token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId of each API request may be different.
   * 
   * @example
   * F4D7C841-A1C9-50B4-88B7-F5****
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the instance configuration. A and AAAA records can be configured for the same connected domain name and GTM instance. In this case, the GTM instance has two instance configurations. ConfigId uniquely identifies an instance configuration. To find the ConfigId for a domain name instance, call the [ListCloudGtmInstanceConfigs](https://help.aliyun.com/document_detail/2797349.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * Config-000****
   */
  configId?: string;
  /**
   * @remarks
   * The ID of the Global Traffic Manager (GTM) 3.0 instance.
   * 
   * @example
   * gtm-cn-wwo3a3h****
   */
  instanceId?: string;
  /**
   * @remarks
   * The status of the network traffic analysis feature:
   * 
   * - enable
   * 
   * - disable
   * 
   * This parameter is required.
   * 
   * @example
   * enable
   * disable
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      configId: 'ConfigId',
      instanceId: 'InstanceId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      configId: 'string',
      instanceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

