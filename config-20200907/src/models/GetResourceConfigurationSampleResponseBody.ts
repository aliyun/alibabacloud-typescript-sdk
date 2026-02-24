// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceConfigurationSampleResponseBodySample extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 101339776561****
   */
  accountId?: string;
  /**
   * @remarks
   * The zone.
   * 
   * @example
   * cn-shanghai-g
   */
  availabilityZone?: string;
  /**
   * @remarks
   * The complete configuration information of the resource.
   * 
   * @example
   * {\\"Status\\":\\"Running\\",\\"HibernationOptions\\":{\\"Configured\\":\\"false\\"},\\"ResourceGroupId\\":\\"rg-bp67acfmxazb4p****\\",\\"MetadataOptions\\":{\\"HttpPutResponseHopLimit\\":\\"0\\",\\"HttpTokens\\":\\"optional\\",\\"HttpEndpoint\\":\\"enabled\\"},\\"InstanceId\\":\\"i-bp67acfmxazb4p****\\",\\"InstanceChargeType\\":\\"PostPaid\\",\\"Memory\\":\\"16384\\",\\"StoppedMode\\":\\"KeepCharging\\",\\"CpuOptions\\":{\\"ThreadsPerCore\\":\\"4\\",\\"Numa\\":\\"2\\",\\"CoreCount\\":\\"2\\"},\\"StartTime\\":\\"2017-12-10T04:04Z\\",\\"Cpu\\":\\"8\\",\\"OSName\\":\\"CentOS 7.4 64 bit\\",\\"DeletionProtection\\":\\"false\\",\\"SecurityGroupIds\\":{\\"SecurityGroupId\\":[null]},\\"InstanceNetworkType\\":\\"vpc\\",\\"InnerIpAddress\\":{\\"IpAddress\\":[\\"``42.112.**.**``\\"]},\\"ExpiredTime\\":\\"2017-12-10T04:04Z\\",\\"EipAddress\\":{\\"AllocationId\\":\\"eip-2ze88m67qx5z****\\",\\"Bandwidth\\":\\"5\\",\\"IpAddress\\":\\"``42.112.**.**``\\",\\"IsSupportUnassociate\\":\\"true\\",\\"InternetChargeType\\":\\"PayByTraffic\\"},\\"ImageId\\":\\"m-bp67acfmxazb4p****\\",\\"ImageOptions\\":{\\"LoginAsNonRoot\\":\\"false\\"},\\"HostName\\":\\"testHostName\\",\\"Tags\\":{\\"Tag\\":[null]},\\"VlanId\\":\\"10\\"}
   */
  configuration?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 1646362560000
   */
  resourceCreationTime?: string;
  /**
   * @remarks
   * The deletion status of the resource. Valid values:
   * 
   * - 1: The resource is retained.
   * 
   * - 0: The resource is deleted.
   * 
   * @example
   * 1
   */
  resourceDeleted?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-bp1aaegapahkh880****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * my-ecs
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * Running
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag.
   * 
   * @example
   * {\\"key\\":\\"value\\"}
   */
  tags?: string;
  /**
   * @remarks
   * The version information.
   * 
   * @example
   * 5
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      configuration: 'Configuration',
      region: 'Region',
      resourceCreationTime: 'ResourceCreationTime',
      resourceDeleted: 'ResourceDeleted',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      tags: 'Tags',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      availabilityZone: 'string',
      configuration: 'string',
      region: 'string',
      resourceCreationTime: 'string',
      resourceDeleted: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceStatus: 'string',
      resourceType: 'string',
      tags: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceConfigurationSampleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC300244-FCE3-5061-8214-C27ECB66****
   */
  requestId?: string;
  /**
   * @remarks
   * The sample.
   */
  sample?: GetResourceConfigurationSampleResponseBodySample;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sample: 'Sample',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sample: GetResourceConfigurationSampleResponseBodySample,
    };
  }

  validate() {
    if(this.sample && typeof (this.sample as any).validate === 'function') {
      (this.sample as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

