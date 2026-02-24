// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDiscoveredResourceResponseBodyDiscoveredResourceDetail extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that owns the resource.
   * 
   * @example
   * 120886317861****
   */
  accountId?: number;
  /**
   * @remarks
   * The zone where the resource resides.
   * 
   * @example
   * cn-hangzhou-h
   */
  availabilityZone?: string;
  /**
   * @remarks
   * The compliance type.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The complete configuration information of the resource.
   * 
   * @example
   * {"ResourceGroupId":"","Memory":4096,"InstanceChargeType":"PostPaid","Cpu":2,"OSName":"Windows Server 2022 Datacenter 64-bit (Simplified Chinese)","InstanceNetworkType":"vpc","InnerIpAddress":{"IpAddress":[]},"ExpiredTime":"2099-12-31T15:59Z","ImageId":"win2022_21H2_x64_dtc_zh-cn_40G_alibase_20240110.vhd","EipAddress":{"AllocationId":"","IpAddress":"","InternetChargeType":""},"ImageOptions":{},"VlanId":"","HostName":"iZl4i0brknq****","Status":"Stopped","HibernationOptions":{"Configured":false},"MetadataOptions":{"HttpTokens":"","HttpEndpoint":""},"InstanceId":"i-bp12g4xbl4i0brkn****","StoppedMode":"KeepCharging","CpuOptions":{"ThreadsPerCore":2,"Numa":"ON","CoreCount":1},"StartTime":"2024-02-29T07:08Z","DeletionProtection":false,"VpcAttributes":{"PrivateIpAddress":{"IpAddress":["172.16.XX.XX"]},"VpcId":"vpc-bp1wjaw8t272wwmkg****","VSwitchId":"vsw-bp103i8xzww5132ul****","NatIpAddress":""},"SecurityGroupIds":{"SecurityGroupId":["sg-bp1h96fz9fagaegp****"]},"InternetChargeType":"PayByTraffic","InstanceName":"test123","DeploymentSetId":"","InternetMaxBandwidthOut":5,"SerialNumber":"6764f567-28fb-4a39-bfc3-48404995****","OSType":"windows","CreationTime":"2024-02-29T07:08Z","AutoReleaseTime":"","Description":"","InstanceTypeFamily":"ecs.c7","DedicatedInstanceAttribute":{"Tenancy":"","Affinity":""},"PublicIpAddress":{"IpAddress":["47.98.XX.XX"]},"GPUSpec":"","NetworkInterfaces":{"NetworkInterface":[{"Type":"Primary","PrimaryIpAddress":"172.16.XX.XX","MacAddress":"00:16:3e:0c:**:**","NetworkInterfaceId":"eni-bp19uj35v8won3x9****","PrivateIpSets":{"PrivateIpSet":[{"PrivateIpAddress":"172.16.XX.XX","Primary":true}]}}]},"SpotPriceLimit":0.0,"SaleCycle":"","DeviceAvailable":true,"InstanceType":"ecs.c7.large","OSNameEn":"Windows Server  2022 DataCenter Edition 64bit Chinese Edition","SpotStrategy":"NoSpot","IoOptimized":true,"ZoneId":"cn-hangzhou-b","ClusterId":"","EcsCapacityReservationAttr":{"CapacityReservationPreference":"","CapacityReservationId":""},"DedicatedHostAttribute":{"DedicatedHostId":"","DedicatedHostName":"","DedicatedHostClusterId":""},"GPUAmount":0,"OperationLocks":{"LockReason":[]},"InternetMaxBandwidthIn":2000,"Recyclable":false,"RegionId":"cn-hangzhou","CreditSpecification":""}
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
   * 1709190480000
   */
  resourceCreationTime?: number;
  /**
   * @remarks
   * The deletion status of the resource. Valid values:
   * 
   * - 1: The resource is not deleted.
   * 
   * - 0: The resource is deleted.
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
   * The status of the resource. The status of a resource is defined by the corresponding Alibaba Cloud service. This parameter can be empty. Examples:
   * 
   * - If the resource type is ACS::ECS::Instance, the resource is stateful. In this case, the value of this parameter is Running or Stopped.
   * 
   * - If the resource type is ACS::OSS::Bucket, the resource is stateless. In this case, this parameter is empty.
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
   * The tags of the resource.
   * 
   * @example
   * {"key":"value"}
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the resource belongs. The ID is in the vsw-t4n7pokxxxxxxxxxxxxxx format. If multiple vSwitch IDs are returned, they are separated by commas (,). Example: vsw-t4n7pokxxxxxxxxxxxxxx,vsw-t4n7pokxxxxxxxxxxxxxx. If the resource does not belong to a vSwitch, an empty string "" is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-t4n7pokxxxxxxxxxxxxxx
   * 
   * **if can be null:**
   * true
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the resource belongs. The ID is in the vpc-t4nhheyvay74fp7n0hxxx format. If the resource does not belong to a VPC, an empty string "" is returned.
   * 
   * This parameter is required.
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

export class GetDiscoveredResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the resource.
   */
  discoveredResourceDetail?: GetDiscoveredResourceResponseBodyDiscoveredResourceDetail;
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
      discoveredResourceDetail: GetDiscoveredResourceResponseBodyDiscoveredResourceDetail,
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

