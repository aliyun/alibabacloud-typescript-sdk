// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeContainerGroupsResponseBodyContainerGroupsContainers } from "./DescribeContainerGroupsResponseBodyContainerGroupsContainers";
import { DescribeContainerGroupsResponseBodyContainerGroupsDnsConfig } from "./DescribeContainerGroupsResponseBodyContainerGroupsDnsConfig";
import { DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContext } from "./DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContext";
import { DescribeContainerGroupsResponseBodyContainerGroupsEvents } from "./DescribeContainerGroupsResponseBodyContainerGroupsEvents";
import { DescribeContainerGroupsResponseBodyContainerGroupsHostAliases } from "./DescribeContainerGroupsResponseBodyContainerGroupsHostAliases";
import { DescribeContainerGroupsResponseBodyContainerGroupsInitContainers } from "./DescribeContainerGroupsResponseBodyContainerGroupsInitContainers";
import { DescribeContainerGroupsResponseBodyContainerGroupsTags } from "./DescribeContainerGroupsResponseBodyContainerGroupsTags";
import { DescribeContainerGroupsResponseBodyContainerGroupsVolumes } from "./DescribeContainerGroupsResponseBodyContainerGroupsVolumes";


export class DescribeContainerGroupsResponseBodyContainerGroups extends $dara.Model {
  /**
   * @remarks
   * The computing power type of the elastic container instance. Valid values:
   * 
   * *   economy: economic computing power.
   * *   general: general-purpose computing power.
   * 
   * @example
   * economy
   */
  computeCategory?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * eci-bp1jrgfqqy54kg5hc****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   */
  containerGroupName?: string;
  /**
   * @remarks
   * The information about containers in the elastic container instance.
   */
  containers?: DescribeContainerGroupsResponseBodyContainerGroupsContainers[];
  /**
   * @remarks
   * The number of vCPUs that are allocated to the elastic container instance.
   * 
   * @example
   * 2.0
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the instance was created. The time follows the RFC 3339 standard. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The discount.
   * 
   * @example
   * 9
   */
  discount?: number;
  /**
   * @remarks
   * The Domain Name System (DNS) settings.
   */
  dnsConfig?: DescribeContainerGroupsResponseBodyContainerGroupsDnsConfig;
  /**
   * @remarks
   * The Domain Name System (DNS) policy. Valid values:
   * 
   * - None: uses the DNS that is specified by DnsConfig.
   * - Default: uses the DNS that is specified for the runtime environment.
   * 
   * @example
   * None
   */
  dnsPolicy?: string;
  /**
   * @remarks
   * The security context of the elastic container instance.
   */
  eciSecurityContext?: DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContext;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI).
   * 
   * @example
   * eni-bp14rzqi6fd8satm****
   */
  eniInstanceId?: string;
  /**
   * @remarks
   * The size of the temporary storage space. Unit: GiB.
   * 
   * @example
   * 20
   */
  ephemeralStorage?: number;
  /**
   * @remarks
   * The events of the elastic container instance. A maximum of 50 events can be returned.
   */
  events?: DescribeContainerGroupsResponseBodyContainerGroupsEvents[];
  /**
   * @remarks
   * The time when the elastic container instance failed to run due to overdue payments. The time follows the RFC 3339 standard. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The time when the instance failed to run. The time follows the RFC 3339 standard. The time is displayed in UTC.
   * 
   * @example
   * 2018-08-02T15:00:00Z
   */
  failedTime?: string;
  /**
   * @remarks
   * The hostnames and IP addresses for a container that are added to the hosts file of the elastic container instance.
   */
  hostAliases?: DescribeContainerGroupsResponseBodyContainerGroupsHostAliases[];
  /**
   * @remarks
   * The information about the init containers.
   */
  initContainers?: DescribeContainerGroupsResponseBodyContainerGroupsInitContainers[];
  /**
   * @remarks
   * The instance type of the specified Elastic Compute Service (ECS) instance.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 192.0.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 172.16.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The IPv6 address of the instance.
   * 
   * @example
   * 2001:XXXX:4:4:4:4:4:4
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The memory size of the instance. Unit: GiB.
   * 
   * @example
   * 4.0
   */
  memory?: number;
  /**
   * @remarks
   * The name of the instance RAM role. The elastic container instance and the ECS instance share a RAM role. For more information, see [Use an instance RAM role by calling API operations](https://help.aliyun.com/document_detail/61178.html).
   * 
   * @example
   * ram:PassRole
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-8db03793gfrz****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The restart policy of the elastic container instance. Valid values:
   * 
   * *   Never: Never restarts the instance if a container in the instance exits upon termination.
   * *   Always: Always restarts the instance if a container in the instance exits upon termination.
   * *   OnFailure: Restarts the instance only if a container in the instance exists upon failure with a status code of non-zero.
   * 
   * @example
   * Never
   */
  restartPolicy?: string;
  /**
   * @remarks
   * The ID of the security group to which the instances belong.
   * 
   * @example
   * sg-bp12ujq5zpxuyjfo3o8r
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The maximum hourly price for the preemptible elastic container instance.
   * 
   * This parameter is returned only when SpotStrategy is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.025
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bid policy for the instance. Default value: NoSpot. Valid values:
   * 
   * *   NoSpot: The instance is a regular pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is a preemptible instance that has a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   Pending: The instance is being started.
   * *   Running: The instance is running.
   * *   Succeeded: The instance successfully runs.
   * *   Failed: The instance fails to run.
   * *   Scheduling: The instance is being created.
   * *   ScheduleFailed: The instance fails to be created.
   * *   Restarting: The instance is being restarted.
   * *   Updating: The instance is being updated.
   * *   Terminating: The instance is being terminated.
   * *   Expired: The instance is expired.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when all containers exited on success. The time follows the RFC 3339 standard. The time is displayed in UTC.
   * 
   * @example
   * 2019-12-11T04:33:42Z
   */
  succeededTime?: string;
  /**
   * @remarks
   * The tags that are added to the instance.
   */
  tags?: DescribeContainerGroupsResponseBodyContainerGroupsTags[];
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * i-xxx
   */
  tenantEniInstanceId?: string;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * 10.10.XX.XX
   */
  tenantEniIp?: string;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * sg-xxx
   */
  tenantSecurityGroupId?: string;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * vsw-xxx
   */
  tenantVSwitchId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the instance is connected.
   * 
   * @example
   * vsw-bp1vzjjflab6wvjox****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The information about the volumes.
   */
  volumes?: DescribeContainerGroupsResponseBodyContainerGroupsVolumes[];
  /**
   * @remarks
   * The ID of the VPC to which the instance belongs.
   * 
   * @example
   * vpc-1vzjjflab6wvjox****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone to which the instance belongs.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      computeCategory: 'ComputeCategory',
      containerGroupId: 'ContainerGroupId',
      containerGroupName: 'ContainerGroupName',
      containers: 'Containers',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      discount: 'Discount',
      dnsConfig: 'DnsConfig',
      dnsPolicy: 'DnsPolicy',
      eciSecurityContext: 'EciSecurityContext',
      eniInstanceId: 'EniInstanceId',
      ephemeralStorage: 'EphemeralStorage',
      events: 'Events',
      expiredTime: 'ExpiredTime',
      failedTime: 'FailedTime',
      hostAliases: 'HostAliases',
      initContainers: 'InitContainers',
      instanceType: 'InstanceType',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ipv6Address: 'Ipv6Address',
      memory: 'Memory',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      restartPolicy: 'RestartPolicy',
      securityGroupId: 'SecurityGroupId',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      status: 'Status',
      succeededTime: 'SucceededTime',
      tags: 'Tags',
      tenantEniInstanceId: 'TenantEniInstanceId',
      tenantEniIp: 'TenantEniIp',
      tenantSecurityGroupId: 'TenantSecurityGroupId',
      tenantVSwitchId: 'TenantVSwitchId',
      vSwitchId: 'VSwitchId',
      volumes: 'Volumes',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeCategory: 'string',
      containerGroupId: 'string',
      containerGroupName: 'string',
      containers: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsContainers },
      cpu: 'number',
      creationTime: 'string',
      discount: 'number',
      dnsConfig: DescribeContainerGroupsResponseBodyContainerGroupsDnsConfig,
      dnsPolicy: 'string',
      eciSecurityContext: DescribeContainerGroupsResponseBodyContainerGroupsEciSecurityContext,
      eniInstanceId: 'string',
      ephemeralStorage: 'number',
      events: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsEvents },
      expiredTime: 'string',
      failedTime: 'string',
      hostAliases: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsHostAliases },
      initContainers: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsInitContainers },
      instanceType: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ipv6Address: 'string',
      memory: 'number',
      ramRoleName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      restartPolicy: 'string',
      securityGroupId: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      status: 'string',
      succeededTime: 'string',
      tags: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsTags },
      tenantEniInstanceId: 'string',
      tenantEniIp: 'string',
      tenantSecurityGroupId: 'string',
      tenantVSwitchId: 'string',
      vSwitchId: 'string',
      volumes: { 'type': 'array', 'itemType': DescribeContainerGroupsResponseBodyContainerGroupsVolumes },
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containers)) {
      $dara.Model.validateArray(this.containers);
    }
    if(this.dnsConfig && typeof (this.dnsConfig as any).validate === 'function') {
      (this.dnsConfig as any).validate();
    }
    if(this.eciSecurityContext && typeof (this.eciSecurityContext as any).validate === 'function') {
      (this.eciSecurityContext as any).validate();
    }
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    if(Array.isArray(this.hostAliases)) {
      $dara.Model.validateArray(this.hostAliases);
    }
    if(Array.isArray(this.initContainers)) {
      $dara.Model.validateArray(this.initContainers);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.volumes)) {
      $dara.Model.validateArray(this.volumes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

