// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCloudGtmAddressRequestHealthTasks extends $dara.Model {
  /**
   * @remarks
   * The service port of the target address for the health check. You cannot configure a service port if the health check uses the ping protocol.
   * 
   * - If you leave this parameter empty, the currently configured port is deleted.
   * 
   * - If you specify a value for this parameter, the port is updated to the specified value.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The ID of the health check template associated with the address. This parameter is required if you configure a health check port.
   * 
   * - If you leave this parameter empty, the currently configured health check template is deleted.
   * 
   * - If you specify a value for this parameter, the health check template is updated to the specified value.
   * 
   * @example
   * mtp-89518052425100****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCloudGtmAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh-CN: Chinese
   * 
   * - en-US (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The updated IP address or domain name.
   * 
   * @example
   * 223.5.XX.XX
   */
  address?: string;
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
   * The attribution information of the address.
   * 
   * @example
   * 当前版本不支持此参数，不需要传入此参数。
   */
  attributeInfo?: string;
  /**
   * @remarks
   * A client token that is used to ensure the idempotence of the request. You can specify a custom value for this parameter, but you must make sure that the value is unique among different requests. The value can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The updated condition for determining the health status of the address:
   * 
   * - any_ok: At least one probe is normal for all health check templates.
   * 
   * - p30_ok: At least 30% of the probes are normal for all health check templates.
   * 
   * - p50_ok: At least 50% of the probes are normal for all health check templates.
   * 
   * - p70_ok: At least 70% of the probes are normal for all health check templates.
   * 
   * - all_ok: All probes are normal for all health check templates.
   * 
   * @example
   * p50_ok
   */
  healthJudgement?: string;
  /**
   * @remarks
   * The list of health check tasks.
   */
  healthTasks?: UpdateCloudGtmAddressRequestHealthTasks[];
  /**
   * @remarks
   * The updated name of the address.
   * 
   * @example
   * Address-1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      address: 'Address',
      addressId: 'AddressId',
      attributeInfo: 'AttributeInfo',
      clientToken: 'ClientToken',
      healthJudgement: 'HealthJudgement',
      healthTasks: 'HealthTasks',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      address: 'string',
      addressId: 'string',
      attributeInfo: 'string',
      clientToken: 'string',
      healthJudgement: 'string',
      healthTasks: { 'type': 'array', 'itemType': UpdateCloudGtmAddressRequestHealthTasks },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.healthTasks)) {
      $dara.Model.validateArray(this.healthTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

