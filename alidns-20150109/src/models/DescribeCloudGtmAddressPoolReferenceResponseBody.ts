// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudGtmAddressPoolReferenceResponseBodyInstanceConfigsInstanceConfig extends $dara.Model {
  addressPoolLbStrategy?: string;
  availableStatus?: string;
  configId?: string;
  enableStatus?: string;
  healthStatus?: string;
  instanceId?: string;
  instanceName?: string;
  remark?: string;
  scheduleDomainName?: string;
  scheduleHostname?: string;
  scheduleRrType?: string;
  scheduleZoneName?: string;
  sequenceLbStrategyMode?: string;
  ttl?: number;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      addressPoolLbStrategy: 'AddressPoolLbStrategy',
      availableStatus: 'AvailableStatus',
      configId: 'ConfigId',
      enableStatus: 'EnableStatus',
      healthStatus: 'HealthStatus',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      remark: 'Remark',
      scheduleDomainName: 'ScheduleDomainName',
      scheduleHostname: 'ScheduleHostname',
      scheduleRrType: 'ScheduleRrType',
      scheduleZoneName: 'ScheduleZoneName',
      sequenceLbStrategyMode: 'SequenceLbStrategyMode',
      ttl: 'Ttl',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPoolLbStrategy: 'string',
      availableStatus: 'string',
      configId: 'string',
      enableStatus: 'string',
      healthStatus: 'string',
      instanceId: 'string',
      instanceName: 'string',
      remark: 'string',
      scheduleDomainName: 'string',
      scheduleHostname: 'string',
      scheduleRrType: 'string',
      scheduleZoneName: 'string',
      sequenceLbStrategyMode: 'string',
      ttl: 'number',
      versionCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudGtmAddressPoolReferenceResponseBodyInstanceConfigs extends $dara.Model {
  instanceConfig?: DescribeCloudGtmAddressPoolReferenceResponseBodyInstanceConfigsInstanceConfig[];
  static names(): { [key: string]: string } {
    return {
      instanceConfig: 'InstanceConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConfig: { 'type': 'array', 'itemType': DescribeCloudGtmAddressPoolReferenceResponseBodyInstanceConfigsInstanceConfig },
    };
  }

  validate() {
    if(Array.isArray(this.instanceConfig)) {
      $dara.Model.validateArray(this.instanceConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudGtmAddressPoolReferenceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the address pool. This ID uniquely identifies the address pool.
   * 
   * @example
   * pool-89528023225442**16
   */
  addressPoolId?: string;
  /**
   * @remarks
   * Address pool name.
   * 
   * @example
   * app
   */
  addressPoolName?: string;
  instanceConfigs?: DescribeCloudGtmAddressPoolReferenceResponseBodyInstanceConfigs;
  /**
   * @remarks
   * Unique request identification code.
   * 
   * @example
   * 853805EA-3D47-47D5-9A1A-A45C24313ABD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addressPoolId: 'AddressPoolId',
      addressPoolName: 'AddressPoolName',
      instanceConfigs: 'InstanceConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressPoolId: 'string',
      addressPoolName: 'string',
      instanceConfigs: DescribeCloudGtmAddressPoolReferenceResponseBodyInstanceConfigs,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceConfigs && typeof (this.instanceConfigs as any).validate === 'function') {
      (this.instanceConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

