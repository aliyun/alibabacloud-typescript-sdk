// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchCloudGtmAddressesResponseBodyAddressesAddressHealthTasks } from "./SearchCloudGtmAddressesResponseBodyAddressesAddressHealthTasks";


export class SearchCloudGtmAddressesResponseBodyAddressesAddress extends $dara.Model {
  /**
   * @remarks
   * IP address or domain name.
   * 
   * @example
   * 223.5.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * ID of the address, unique identifier for the address.
   * 
   * @example
   * addr-89518218114368**92
   */
  addressId?: string;
  /**
   * @remarks
   * Address ownership information, not supported in the current version.
   * 
   * @example
   * The parameter should be none.
   */
  attributeInfo?: string;
  /**
   * @remarks
   * The failover method that is used if the address fails health checks. Valid values:
   * 
   * *   auto: the automatic mode. The system determines whether to return an address based on the health check results. If the address fails health checks, the system does not return the address. If the address passes health checks, the system returns the address.
   * *   manual: the manual mode. If an address is in the unavailable state, the address is not returned for Domain Name System (DNS) requests even if the address passes health checks. If an address is in the available state, the address is returned for DNS requests even if an alert is triggered when the address fails health checks.
   * 
   * @example
   * auto
   */
  availableMode?: string;
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
  availableStatus?: string;
  /**
   * @remarks
   * Creation time of the address.
   * 
   * @example
   * 2024-03-23T13:09Z
   */
  createTime?: string;
  /**
   * @remarks
   * Creation time of the address (timestamp).
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Current activation status of the address:
   * - enable: Enabled status
   * - disable: Disabled status
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The condition for determining the health status of the address. Valid values:
   * 
   * *   any_ok: The health check results of at least one health check template are normal.
   * *   p30_ok: The health check results of at least 30% of health check templates are normal.
   * *   p50_ok: The health check results of at least 50% of health check templates are normal.
   * *   p70_ok: The health check results of at least 70% of health check templates are normal.
   * *   all_ok: The health check results of all health check templates are normal.
   * 
   * @example
   * p50_ok
   */
  healthJudgement?: string;
  /**
   * @remarks
   * The health check state of the address. Valid values:
   * 
   * *   ok: The address passes all health checks of the referenced health check templates.
   * *   ok_alert: The address fails some health checks of the referenced health check templates, but the address is deemed available.
   * *   ok_no_monitor: The address does not reference any health check template.
   * *   exceptional: The address fails some or all health checks of the referenced health check templates, and the address is deemed unavailable.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * The health check tasks.
   */
  healthTasks?: SearchCloudGtmAddressesResponseBodyAddressesAddressHealthTasks;
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
  /**
   * @remarks
   * Address name.
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
   * - IPv4: ipv4 address - IPv6: ipv6 address - domain: domain name
   * 
   * @example
   * IPv4
   */
  type?: string;
  /**
   * @remarks
   * The last modification time of the address.
   * 
   * @example
   * 2024-03-29T13:20Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The last modification time of the address (timestamp).
   * 
   * @example
   * 1527690629357
   */
  updateTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      addressId: 'AddressId',
      attributeInfo: 'AttributeInfo',
      availableMode: 'AvailableMode',
      availableStatus: 'AvailableStatus',
      createTime: 'CreateTime',
      createTimestamp: 'CreateTimestamp',
      enableStatus: 'EnableStatus',
      healthJudgement: 'HealthJudgement',
      healthStatus: 'HealthStatus',
      healthTasks: 'HealthTasks',
      manualAvailableStatus: 'ManualAvailableStatus',
      name: 'Name',
      remark: 'Remark',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      addressId: 'string',
      attributeInfo: 'string',
      availableMode: 'string',
      availableStatus: 'string',
      createTime: 'string',
      createTimestamp: 'number',
      enableStatus: 'string',
      healthJudgement: 'string',
      healthStatus: 'string',
      healthTasks: SearchCloudGtmAddressesResponseBodyAddressesAddressHealthTasks,
      manualAvailableStatus: 'string',
      name: 'string',
      remark: 'string',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
    };
  }

  validate() {
    if(this.healthTasks && typeof (this.healthTasks as any).validate === 'function') {
      (this.healthTasks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

