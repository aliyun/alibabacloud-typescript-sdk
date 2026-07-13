// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudGtmAddressRequestHealthTasks extends $dara.Model {
  /**
   * @remarks
   * The service port of the destination address for the health check. This parameter is not supported for health checks that use the ping protocol.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The ID of the health check template.
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

export class CreateCloudGtmAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh-CN: Chinese.
   * 
   * - en-US (default): English.
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The IP address or domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * 223.5.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The attribution information of the address.
   * 
   * @example
   * 当前版本不支持传入此参数，请不要传入参数。
   */
  attributeInfo?: string;
  /**
   * @remarks
   * The switchover mode for the address when a health check is abnormal. Valid values:
   * 
   * - auto: The system automatically manages the address status based on health check results. If an address is unhealthy, DNS resolution for it stops. If the address becomes healthy, DNS resolution resumes.
   * 
   * - manual: You manually manage the address status. If you set an address to abnormal, DNS resolution for it stops. It does not resume even if the address becomes healthy. If you set an address to normal, DNS resolution for it resumes. If a healthy address becomes unhealthy, the system sends an alert but does not stop DNS resolution.
   * 
   * This parameter is required.
   * 
   * @example
   * auto
   */
  availableMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Make sure that the token is unique for each request. The token can contain a maximum of 64 ASCII characters.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24****
   */
  clientToken?: string;
  /**
   * @remarks
   * The status of the address. Valid values:
   * 
   * - enable: The address is enabled.
   * 
   * - disable: The address is disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The condition for determining the health of the address. This parameter is required if you specify HealthTasks. Valid values:
   * 
   * - any_ok: At least one health check is successful.
   * 
   * - p30_ok: At least 30% of health checks are successful.
   * 
   * - p50_ok: At least 50% of health checks are successful.
   * 
   * - p70_ok: At least 70% of health checks are successful.
   * 
   * - all_ok: All health checks are successful.
   * 
   * This parameter is required.
   * 
   * @example
   * p50_ok
   */
  healthJudgement?: string;
  /**
   * @remarks
   * The health check tasks for the address.
   */
  healthTasks?: CreateCloudGtmAddressRequestHealthTasks[];
  /**
   * @remarks
   * The availability status of the address when the health check-based switchover mode is set to **manual**. Valid values:
   * 
   * - available: The address is available. In this state, DNS resolution for the address is normal. If a health check is abnormal, the system only sends an alert and does not stop DNS resolution.
   * 
   * - unavailable: The address is unavailable. In this state, DNS resolution for the address is stopped. DNS resolution is not resumed even if a health check is normal.
   * 
   * @example
   * available
   */
  manualAvailableStatus?: string;
  /**
   * @remarks
   * The name of the address.
   * 
   * This parameter is required.
   * 
   * @example
   * Address-1
   */
  name?: string;
  /**
   * @remarks
   * The remarks about the address.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * The type of the address. Valid values:
   * 
   * - IPv4
   * 
   * - IPv6
   * 
   * - domain
   * 
   * This parameter is required.
   * 
   * @example
   * IPv4
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      address: 'Address',
      attributeInfo: 'AttributeInfo',
      availableMode: 'AvailableMode',
      clientToken: 'ClientToken',
      enableStatus: 'EnableStatus',
      healthJudgement: 'HealthJudgement',
      healthTasks: 'HealthTasks',
      manualAvailableStatus: 'ManualAvailableStatus',
      name: 'Name',
      remark: 'Remark',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      address: 'string',
      attributeInfo: 'string',
      availableMode: 'string',
      clientToken: 'string',
      enableStatus: 'string',
      healthJudgement: 'string',
      healthTasks: { 'type': 'array', 'itemType': CreateCloudGtmAddressRequestHealthTasks },
      manualAvailableStatus: 'string',
      name: 'string',
      remark: 'string',
      type: 'string',
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

