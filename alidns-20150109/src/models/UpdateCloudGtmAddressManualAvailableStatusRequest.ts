// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmAddressManualAvailableStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The ID of the address. This ID uniquely identifies the address.
   * 
   * This parameter is required.
   * 
   * @example
   * addr-89518218114368**92
   */
  addressId?: string;
  /**
   * @remarks
   * The failover mode that is used when address exceptions are identified. Valid values:
   * 
   * *   auto: the automatic mode. The system determines whether to return an address based on health check results. If the address fails health checks, the system does not return the address. If the address passes health checks, the system returns the address.
   * *   manual: the manual mode. If an address is in the unavailable state, the address is not returned for DNS requests even if the address passes health checks. If an address is in the available state, the address is returned for DNS requests even if an alert is triggered when the address fails health checks.
   * 
   * @example
   * manual
   */
  availableMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can specify a custom value for this parameter, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * The availability state of the address when AvailableMode is set to manual. Valid values:
   * 
   * *   available: The address is normal. In this state, the address is returned for DNS requests even if an alert is triggered when the address fails health checks.
   * *   unavailable: The address is abnormal. In this state, the address is not returned for DNS requests even if the address passes health checks.
   * 
   * @example
   * available
   */
  manualAvailableStatus?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      addressId: 'AddressId',
      availableMode: 'AvailableMode',
      clientToken: 'ClientToken',
      manualAvailableStatus: 'ManualAvailableStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      addressId: 'string',
      availableMode: 'string',
      clientToken: 'string',
      manualAvailableStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

