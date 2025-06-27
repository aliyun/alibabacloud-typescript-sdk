// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasks } from "./SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasks";


export class SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddress extends $dara.Model {
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
   * The address ID. This ID uniquely identifies the address.
   * 
   * @example
   * addr-895182181143688192
   */
  addressId?: string;
  /**
   * @remarks
   * Address ownership information, not supported in the current version.
   * 
   * @example
   * Not supported in the current version.
   */
  attributeInfo?: string;
  /**
   * @remarks
   * The failover method that is used if the address fails health checks. Valid values:
   * 
   * *   auto: the automatic mode. The system determines whether to return an address based on the health check results. If the address fails health checks, the system does not return the address. If the address passes health checks, the system returns the address.
   * *   manual: the manual mode. If an address is in the unavailable state, the address is not returned for DNS requests even if the address passes health checks. If an address is in the available state, the address is returned for DNS requests even if an alert is triggered when the address fails health checks.
   * 
   * @example
   * auto
   */
  availableMode?: string;
  /**
   * @remarks
   * Address availability status:
   * - available: Address is available
   * - unavailable: Address is unavailable
   * 
   * @example
   * available
   */
  availableStatus?: string;
  /**
   * @remarks
   * Address creation time.
   * 
   * @example
   * 2024-03-15T01:46Z
   */
  createTime?: string;
  /**
   * @remarks
   * Address creation time (timestamp).
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Address enable status, indicating whether the address is currently available:
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
   * any_ok
   */
  healthJudgement?: string;
  /**
   * @remarks
   * The health check state of the address. Valid values:
   * 
   * *   ok: The address passes all health checks of the referenced health check templates.
   * *   ok_alert: The address fails some health checks of the referenced health check templates but the address is deemed normal.
   * *   ok_no_monitor: The address does not reference a health check template and is normal.
   * *   exceptional: The address fails some or all health checks of the referenced health check templates and the address is deemed abnormal.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * The health check tasks.
   */
  healthTasks?: SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasks;
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
   * Request source, referring to the source of the request. GTM schedules based on the exit IP of the LocalDNS used by the terminal. If the LocalDNS supports ECS (edns-client-subnet), intelligent scheduling can also be performed based on the IP of the visiting terminal.
   * 
   * @example
   * default
   */
  requestSource?: string;
  /**
   * @remarks
   * Sequence number, indicating the priority of address return, where smaller numbers have higher priority.
   * 
   * @example
   * 1
   */
  serialNumber?: number;
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
   * The last time the address was modified.
   * 
   * @example
   * 2024-03-15T01:46Z
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
  /**
   * @remarks
   * Weight value (an integer between 1 and 100), allowing different weight values to be set for each address, enabling resolution queries to return addresses according to the weighted ratio.
   * 
   * @example
   * 1
   */
  weightValue?: number;
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
      requestSource: 'RequestSource',
      serialNumber: 'SerialNumber',
      type: 'Type',
      updateTime: 'UpdateTime',
      updateTimestamp: 'UpdateTimestamp',
      weightValue: 'WeightValue',
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
      healthTasks: SearchCloudGtmAddressPoolsResponseBodyAddressPoolsAddressPoolAddressesAddressHealthTasks,
      manualAvailableStatus: 'string',
      name: 'string',
      remark: 'string',
      requestSource: 'string',
      serialNumber: 'number',
      type: 'string',
      updateTime: 'string',
      updateTimestamp: 'number',
      weightValue: 'number',
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

