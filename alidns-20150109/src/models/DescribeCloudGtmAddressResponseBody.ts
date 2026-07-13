// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudGtmAddressResponseBodyHealthTasksHealthTask extends $dara.Model {
  monitorStatus?: string;
  port?: number;
  templateId?: string;
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

export class DescribeCloudGtmAddressResponseBodyHealthTasks extends $dara.Model {
  healthTask?: DescribeCloudGtmAddressResponseBodyHealthTasksHealthTask[];
  static names(): { [key: string]: string } {
    return {
      healthTask: 'HealthTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthTask: { 'type': 'array', 'itemType': DescribeCloudGtmAddressResponseBodyHealthTasksHealthTask },
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

export class DescribeCloudGtmAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address or domain name.
   * 
   * @example
   * 223.5.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The unique ID of the address.
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
   * 当前版本不支持此参数，不会返回地址归属信息。
   */
  attributeInfo?: string;
  /**
   * @remarks
   * The switchover mode for the address when a health check detects an exception:
   * 
   * - auto: Automatic mode. The system determines whether to stop or resume DNS resolution for the address based on health check results. DNS resolution is stopped if the address is abnormal and is resumed if the address becomes normal.
   * 
   * - manual: Manual mode. You manually control the address status. If the address is set to abnormal, DNS resolution is stopped and is not resumed even if the health check result is normal. If the address is set to normal, DNS resolution is performed. An alert is triggered but DNS resolution is not stopped if a health check detects an exception.
   * 
   * @example
   * auto
   */
  availableMode?: string;
  /**
   * @remarks
   * The availability status of the address:
   * 
   * - available: The address is available.
   * 
   * - unavailable: The address is unavailable.
   * 
   * @example
   * available
   */
  availableStatus?: string;
  /**
   * @remarks
   * The time when the address was created.
   * 
   * @example
   * 2024-03-23T13:09Z
   */
  createTime?: string;
  /**
   * @remarks
   * The UNIX timestamp when the address was created.
   * 
   * @example
   * 1527690629357
   */
  createTimestamp?: number;
  /**
   * @remarks
   * The enabled status of the address:
   * 
   * enable: The address is enabled.
   * 
   * disable: The address is disabled.
   * 
   * @example
   * enable
   */
  enableStatus?: string;
  /**
   * @remarks
   * The health determination condition for the address:
   * 
   * - any_ok: At least one health check probe is normal.
   * 
   * - p30_ok: At least 30% of health check probes are normal.
   * 
   * - p50_ok: At least 50% of health check probes are normal.
   * 
   * - p70_ok: At least 70% of health check probes are normal.
   * 
   * - all_ok: All health check probes are normal.
   * 
   * @example
   * p50_ok
   */
  healthJudgement?: string;
  /**
   * @remarks
   * The health check result of the address:
   * 
   * - ok: All health check tasks that are associated with the address are normal.
   * 
   * - ok_alert: Some health check tasks that are associated with the address are abnormal, but the address is still considered normal.
   * 
   * - ok_no_monitor: The address is not associated with any health check tasks.
   * 
   * - exceptional: Some or all health check tasks that are associated with the address are abnormal, and the address is considered abnormal.
   * 
   * @example
   * ok
   */
  healthStatus?: string;
  healthTasks?: DescribeCloudGtmAddressResponseBodyHealthTasks;
  /**
   * @remarks
   * The availability status of the address that is set when the switchover mode is manual:
   * 
   * - available: The address is available. DNS resolution is performed for the address. If a health check detects an exception, an alert is triggered but DNS resolution is not stopped.
   * 
   * - unavailable: The address is unavailable. DNS resolution is stopped for the address and is not resumed even if the health check result is normal.
   * 
   * @example
   * available
   */
  manualAvailableStatus?: string;
  /**
   * @remarks
   * The name of the address.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * test1
   */
  remark?: string;
  /**
   * @remarks
   * The unique request ID.
   * 
   * @example
   * B57C121B-A45F-44D8-A9B2-13E5A5044195
   */
  requestId?: string;
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
   * @example
   * IPv4
   */
  type?: string;
  /**
   * @remarks
   * The time when the address configuration was last modified.
   * 
   * @example
   * 2024-03-29T13:20Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The UNIX timestamp when the address was last modified.
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
      requestId: 'RequestId',
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
      healthTasks: DescribeCloudGtmAddressResponseBodyHealthTasks,
      manualAvailableStatus: 'string',
      name: 'string',
      remark: 'string',
      requestId: 'string',
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

