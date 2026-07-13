// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmAddressManualAvailableStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh-CN: Chinese
   * 
   * - en-US (Default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The unique ID of the address.
   * 
   * This parameter is required.
   * 
   * @example
   * addr-89518218114368****
   */
  addressId?: string;
  /**
   * @remarks
   * The failover method for the address. Valid values:
   * 
   * - auto: Automatic. The address status is determined by health check results. If a health check fails, DNS resolution stops. If it succeeds, DNS resolution resumes.
   * 
   * - manual: Manual. You control the address status. If set to abnormal, DNS resolution stops and does not resume even if health checks succeed. If set to normal, DNS resolution resumes. If a health check fails, an alert is triggered but resolution does not stop.
   * 
   * @example
   * manual
   */
  availableMode?: string;
  /**
   * @remarks
   * A client-generated token that is used to ensure the idempotence of the request. Make sure that the token is unique among different requests. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The availability status of the address. This parameter takes effect only when AvailableMode is set to manual. Valid values:
   * 
   * - available: Normal. The address is available. If a health check fails, an alert is triggered but DNS resolution continues.
   * 
   * - unavailable: Abnormal. DNS resolution for the address is stopped. It does not resume even if health checks succeed.
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

