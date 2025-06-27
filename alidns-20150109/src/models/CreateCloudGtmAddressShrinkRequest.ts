// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudGtmAddressShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en-US (default): English
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * IP address or domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * 223.5.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * Address ownership information.
   * 
   * @example
   * 当前版本不支持传入此参数，请不要传入参数。
   */
  attributeInfo?: string;
  /**
   * @remarks
   * The failover mode that is used when address exceptions are identified. Valid values:
   * 
   * *   auto: the automatic mode. The system determines whether to return an address based on the health check results. If the address fails health checks, the system does not return the address. If the address passes health checks, the system returns the address.
   * *   manual: the manual mode. If an address is in the unavailable state, the address is not returned for DNS requests even if the address passes health checks. If an address is in the available state, the address is returned for DNS requests even if an alert is triggered when the address fails health checks.
   * 
   * This parameter is required.
   * 
   * @example
   * auto
   */
  availableMode?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * 1ae05db4-10e7-11ef-b126-00163e24**22
   */
  clientToken?: string;
  /**
   * @remarks
   * Indicates the current enabled status of the address:
   * - enable: Enabled status 
   * - disable: Disabled status
   * 
   * This parameter is required.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The condition for determining the health status of the address. This parameter is required when HealthTasks is specified. Valid values:
   * 
   * *   any_ok: The health check results of at least one health check template are normal.
   * *   p30_ok: The health check results of at least 30% of health check templates are normal.
   * *   p50_ok: The health check results of at least 50% of health check templates are normal.
   * *   p70_ok: The health check results of at least 70% of health check templates are normal.
   * *   all_ok: The health check results of all health check templates are normal.
   * 
   * This parameter is required.
   * 
   * @example
   * p50_ok
   */
  healthJudgement?: string;
  /**
   * @remarks
   * The health check tasks associated with the address.
   */
  healthTasksShrink?: string;
  /**
   * @remarks
   * The availability state of the address. This parameter is required when AvailableMode is set to **manual**. Valid values:
   * 
   * *   available: The address is normal. In this state, the address is returned for DNS requests even if an alert is triggered when the address fails health checks.
   * *   unavailable: The address is abnormal. In this state, the address is not returned for DNS requests even if the address passes health checks.
   * 
   * @example
   * available
   */
  manualAvailableStatus?: string;
  /**
   * @remarks
   * Address name.
   * 
   * This parameter is required.
   * 
   * @example
   * Address-1
   */
  name?: string;
  /**
   * @remarks
   * Remarks.
   * 
   * @example
   * test
   */
  remark?: string;
  /**
   * @remarks
   * Address type:
   * - IPv4
   * - IPv6
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
      healthTasksShrink: 'HealthTasks',
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
      healthTasksShrink: 'string',
      manualAvailableStatus: 'string',
      name: 'string',
      remark: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

