// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateDiscoveredResourceResponseBodyDiscoveredResourceDetail extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the resource belongs.
   * 
   * @example
   * 100931896542****
   */
  accountId?: number;
  /**
   * @remarks
   * The ID of the zone where the resource resides.
   * 
   * @example
   * cn-hangzhou-h
   */
  availabilityZone?: string;
  /**
   * @remarks
   * The compliance evaluation result. Valid values:
   * 
   * - COMPLIANT: The resource is compliant.
   * 
   * - NON_COMPLIANT: The resource is non-compliant.
   * 
   * - NOT_APPLICABLE: The rule did not apply to your resource.
   * 
   * - INSUFFICIENT_DATA: No data is available.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The configuration of the resource.
   * 
   * @example
   * {\\"ResourceGroupId\\":\\"\\",\\"Memory\\":4096,\\"InstanceChargeType\\":\\"PostPaid\\",\\"Cpu\\":2,\\"OSName\\":\\"Windows Server  2022 数据中心版 64位中文版\\",\\"InstanceNetworkType\\":\\"vpc\\",\\"InnerIpAddress\\":{\\"IpAddress\\":[]},\\"ExpiredTime\\":\\"2099-12-31T15:59Z\\",\\"ImageId\\":\\"win2022_21H2_x64_dtc_zh-cn_40G_alibase_20240110.vhd\\",\\"EipAddress\\":{\\"AllocationId\\":\\"\\",\\"IpAddress\\":\\"\\",\\"InternetChargeType\\":\\"\\"},\\"ImageOptions\\":{},\\"VlanId\\":\\"\\",\\"HostName\\":\\"iZl4i0brknq****\\",\\"Status\\":\\"Stopped\\",\\"HibernationOptions\\":{\\"Configured\\":false},\\"MetadataOptions\\":{\\"HttpTokens\\":\\"\\",\\"HttpEndpoint\\":\\"\\"},\\"InstanceId\\":\\"i-bp12g4xbl4i0brkn****\\",\\"StoppedMode\\":\\"KeepCharging\\",\\"CpuOptions\\":{\\"ThreadsPerCore\\":2,\\"Numa\\":\\"ON\\",\\"CoreCount\\":1},\\"StartTime\\":\\"2024-02-29T07:08Z\\",\\"DeletionProtection\\":false,\\"VpcAttributes\\":{\\"PrivateIpAddress\\":{\\"IpAddress\\":[\\"172.16.XX.XX\\"]},\\"VpcId\\":\\"vpc-bp1wjaw8t272wwmkg****\\",\\"VSwitchId\\":\\"vsw-bp103i8xzww5132ul****\\",\\"NatIpAddress\\":\\"\\"},\\"SecurityGroupIds\\":{\\"SecurityGroupId\\":[\\"sg-bp1h96fz9fagaegp****\\"]},\\"InternetChargeType\\":\\"PayByTraffic\\",\\"InstanceName\\":\\"test123\\",\\"DeploymentSetId\\":\\"\\",\\"InternetMaxBandwidthOut\\":5,\\"SerialNumber\\":\\"6764f567-28fb-4a39-bfc3-48404995****\\",\\"OSType\\":\\"windows\\",\\"CreationTime\\":\\"2024-02-29T07:08Z\\",\\"AutoReleaseTime\\":\\"\\",\\"Description\\":\\"\\",\\"InstanceTypeFamily\\":\\"ecs.c7\\",\\"DedicatedInstanceAttribute\\":{\\"Tenancy\\":\\"\\",\\"Affinity\\":\\"\\"},\\"PublicIpAddress\\":{\\"IpAddress\\":[\\"47.98.XX.XX\\"]},\\"GPUSpec\\":\\"\\",\\"NetworkInterfaces\\":{\\"NetworkInterface\\":[{\\"Type\\":\\"Primary\\",\\"PrimaryIpAddress\\":\\"172.16.XX.XX\\",\\"MacAddress\\":\\"00:16:3e:0c:**:**\\",\\"NetworkInterfaceId\\":\\"eni-bp19uj35v8won3x9****\\",\\"PrivateIpSets\\":{\\"PrivateIpSet\\":[{\\"PrivateIpAddress\\":\\"172.16.XX.XX\\",\\"Primary\\":true}]}}]},\\"SpotPriceLimit\\":0.0,\\"SaleCycle\\":\\"\\",\\"DeviceAvailable\\":true,\\"InstanceType\\":\\"ecs.c7.large\\",\\"OSNameEn\\":\\"Windows Server  2022 DataCenter Edition 64bit Chinese Edition\\",\\"SpotStrategy\\":\\"NoSpot\\",\\"IoOptimized\\":true,\\"ZoneId\\":\\"cn-hangzhou-b\\",\\"ClusterId\\":\\"\\",\\"EcsCapacityReservationAttr\\":{\\"CapacityReservationPreference\\":\\"\\",\\"CapacityReservationId\\":\\"\\"},\\"DedicatedHostAttribute\\":{\\"DedicatedHostId\\":\\"\\",\\"DedicatedHostName\\":\\"\\",\\"DedicatedHostClusterId\\":\\"\\"},\\"GPUAmount\\":0,\\"OperationLocks\\":{\\"LockReason\\":[]},\\"InternetMaxBandwidthIn\\":2000,\\"Recyclable\\":false,\\"RegionId\\":\\"cn-hangzhou\\",\\"CreditSpecification\\":\\"\\"}
   */
  configuration?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The timestamp when the resource was created.
   * 
   * @example
   * 1624961112000
   */
  resourceCreationTime?: number;
  /**
   * @remarks
   * Indicates whether the resource was deleted. Valid values:
   * 
   * - 1: The resource was not deleted.
   * 
   * - 0: The resource was deleted.
   * 
   * @example
   * 1
   */
  resourceDeleted?: number;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-bp12g4xbl4i0brkn****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * test123
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource status. The value of this parameter varies based on the resource type and may be empty. For example:
   * 
   * - If the ResourceType parameter is set to ACS::ECS::Instance, the resource is an ECS instance that has a specific state. In this case, the valid values of this parameter are Running and Stopped.
   * 
   * - If the ResourceType parameter is ACS::OSS::Bucket, the resource is an Object Storage Service (OSS) bucket that is not in a specific state. In this case, this parameter is left empty.
   * 
   * @example
   * Stopped
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
   * The resource tags.
   * 
   * @example
   * {\\"\\"hc\\"\\":[\\"\\"value2\\"\\"]}
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the resource belongs, in the format of vsw-t4n7pokxxxxxxxxxxxxxx. If the resource belongs to multiple vSwitches, the IDs are separated by commas, such as vsw-t4n7pokxxxxxxxxxxxxxx, vsw-t4n7pokxxxxxxxxxxxxxx. If the resource does not belong to any vSwitch, an empty string is returned: ""
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-t4n7pokxxxxxxxxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the resource belongs, in the format of vpc-t4nhheyvay74fp7n0hxxx. If the resource does not belong to a VPC, an empty string is returned: ""
   * 
   * @example
   * vpc-t4nhheyvay74fp7n0hxxx
   * 
   * **if can be null:**
   * true
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      availabilityZone: 'AvailabilityZone',
      complianceType: 'ComplianceType',
      configuration: 'Configuration',
      region: 'Region',
      resourceCreationTime: 'ResourceCreationTime',
      resourceDeleted: 'ResourceDeleted',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      availabilityZone: 'string',
      complianceType: 'string',
      configuration: 'string',
      region: 'string',
      resourceCreationTime: 'number',
      resourceDeleted: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceStatus: 'string',
      resourceType: 'string',
      tags: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAggregateDiscoveredResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the resource.
   */
  discoveredResourceDetail?: GetAggregateDiscoveredResourceResponseBodyDiscoveredResourceDetail;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E4D71ACE-6B0A-46E0-8352-56952378CC7F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      discoveredResourceDetail: 'DiscoveredResourceDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      discoveredResourceDetail: GetAggregateDiscoveredResourceResponseBodyDiscoveredResourceDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.discoveredResourceDetail && typeof (this.discoveredResourceDetail as any).validate === 'function') {
      (this.discoveredResourceDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

