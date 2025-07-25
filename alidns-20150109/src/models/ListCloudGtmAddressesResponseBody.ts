// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmAddressesResponseBodyAddressesAddressHealthTasksHealthTask extends $dara.Model {
  /**
   * @remarks
   * The state of the health check task. Valid values:
   * 
   * *   ok: The task is normal.
   * *   alert: An alert is triggered.
   * *   no_data: No data is available. In most cases, the health check task is newly created and no data is collected.
   * 
   * @example
   * ok
   */
  monitorStatus?: string;
  /**
   * @remarks
   * The target service port for health check probes. When the health check protocol is set to Ping, configuration of the service port is not supported.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The ID of the health check template associated with the address.
   * 
   * @example
   * mtp-89518052425100**80
   */
  templateId?: string;
  /**
   * @remarks
   * Health check template name.
   * 
   * @example
   * Ping-IPv4
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      monitorStatus: 'MonitorStatus',
      port: 'Port',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorStatus: 'string',
      port: 'number',
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudGtmAddressesResponseBodyAddressesAddressHealthTasks extends $dara.Model {
  healthTask?: ListCloudGtmAddressesResponseBodyAddressesAddressHealthTasksHealthTask[];
  static names(): { [key: string]: string } {
    return {
      healthTask: 'HealthTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthTask: { 'type': 'array', 'itemType': ListCloudGtmAddressesResponseBodyAddressesAddressHealthTasksHealthTask },
    };
  }

  validate() {
    if(Array.isArray(this.healthTask)) {
      $dara.Model.validateArray(this.healthTask);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudGtmAddressesResponseBodyAddressesAddress extends $dara.Model {
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
   * addr-89518218114368**92
   */
  addressId?: string;
  /**
   * @remarks
   * Address ownership information.
   * 
   * @example
   * Not supported in current version, this parameter should be none.
   */
  attributeInfo?: string;
  /**
   * @remarks
   * The failover method that is used if the address fails health checks. Valid values:
   * 
   * auto: the automatic mode. The system determines whether to return an address based on the health check results. If the address fails health checks, the system does not return the address. If the address passes health checks, the system returns the address.
   * 
   * manual: the manual mode. If an address is in the unavailable state, the address is not returned for Domain Name System (DNS) requests even if the address passes health checks. If an address is in the available state, the address is returned for DNS requests even if an alert is triggered when the address fails health checks.
   * 
   * @example
   * auto
   */
  availableMode?: string;
  /**
   * @remarks
   * The availability state of the address. Valid values:
   * 
   * *   available: The address is available.
   * *   unavailable: The address is unavailable.
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
   * 2024-03-23T13:09Z
   */
  createTime?: string;
  /**
   * @remarks
   * Creation time (timestamp).
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * Indicates the current availability of the address:
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
   * *   ok_alert: The address fails some health checks of the referenced health check templates but the address is deemed normal.
   * *   ok_no_monitor: The address does not reference a health check template.
   * *   exceptional: The address fails some or all health checks of the referenced health check templates and the address is deemed abnormal.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  /**
   * @remarks
   * The health check tasks referenced by the address.
   */
  healthTasks?: ListCloudGtmAddressesResponseBodyAddressesAddressHealthTasks;
  /**
   * @remarks
   * The availability state of the address when AvailableMode is set to manual. Valid values:
   * 
   * available: The address is normal. In this state, the address is returned for DNS requests even if an alert is triggered when the address fails health checks.
   * 
   * unavailable: The address is abnormal. In this state, the address is not returned for DNS requests even if the address passes health checks.
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
   * app
   */
  remark?: string;
  /**
   * @remarks
   * Address type:
   * - IPv4
   * - IPv6
   * - domain
   * 
   * @example
   * IPv4
   */
  type?: string;
  /**
   * @remarks
   * Address modification time.
   * 
   * @example
   * 2024-03-29T13:20Z
   */
  updateTime?: string;
  /**
   * @remarks
   * Update time (timestamp).
   * 
   * @example
   * 1527690824357
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
      healthTasks: ListCloudGtmAddressesResponseBodyAddressesAddressHealthTasks,
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

export class ListCloudGtmAddressesResponseBodyAddresses extends $dara.Model {
  address?: ListCloudGtmAddressesResponseBodyAddressesAddress[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: { 'type': 'array', 'itemType': ListCloudGtmAddressesResponseBodyAddressesAddress },
    };
  }

  validate() {
    if(Array.isArray(this.address)) {
      $dara.Model.validateArray(this.address);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudGtmAddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The addresses.
   */
  addresses?: ListCloudGtmAddressesResponseBodyAddresses;
  /**
   * @remarks
   * Current page number, starting from **1**, default is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page when paginating queries, with a maximum value of 100 and a default of 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 536E9CAD-DB30-4647-AC87-AA5CC38C5382
   */
  requestId?: string;
  /**
   * @remarks
   * Get the total number of addresses in the address list.
   * 
   * @example
   * 30
   */
  totalItems?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 2
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalItems: 'TotalItems',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: ListCloudGtmAddressesResponseBodyAddresses,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalItems: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(this.addresses && typeof (this.addresses as any).validate === 'function') {
      (this.addresses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

