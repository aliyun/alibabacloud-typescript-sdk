// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunInstancesRequestCpuOptions } from "./RunInstancesRequestCpuOptions";
import { RunInstancesRequestHibernationOptions } from "./RunInstancesRequestHibernationOptions";
import { RunInstancesRequestPrivatePoolOptions } from "./RunInstancesRequestPrivatePoolOptions";
import { RunInstancesRequestSchedulerOptions } from "./RunInstancesRequestSchedulerOptions";
import { RunInstancesRequestSecurityOptions } from "./RunInstancesRequestSecurityOptions";
import { RunInstancesRequestSystemDisk } from "./RunInstancesRequestSystemDisk";
import { RunInstancesRequestArn } from "./RunInstancesRequestArn";
import { RunInstancesRequestDataDisk } from "./RunInstancesRequestDataDisk";
import { RunInstancesRequestImageOptions } from "./RunInstancesRequestImageOptions";
import { RunInstancesRequestNetworkInterface } from "./RunInstancesRequestNetworkInterface";
import { RunInstancesRequestNetworkOptions } from "./RunInstancesRequestNetworkOptions";
import { RunInstancesRequestPrivateDnsNameOptions } from "./RunInstancesRequestPrivateDnsNameOptions";
import { RunInstancesRequestTag } from "./RunInstancesRequestTag";


export class RunInstancesRequest extends $dara.Model {
  cpuOptions?: RunInstancesRequestCpuOptions;
  hibernationOptions?: RunInstancesRequestHibernationOptions;
  privatePoolOptions?: RunInstancesRequestPrivatePoolOptions;
  schedulerOptions?: RunInstancesRequestSchedulerOptions;
  securityOptions?: RunInstancesRequestSecurityOptions;
  systemDisk?: RunInstancesRequestSystemDisk;
  /**
   * @remarks
   * Specifies whether to associate an instance on a dedicated host with the dedicated host. Valid values:
   * 
   * *   default: does not associate the instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance is automatically deployed to another dedicated host in the automatic deployment resource pool if the available resources of the original dedicated host are insufficient.
   * *   host: associates the instance with the dedicated host. When you start an instance that was stopped in economical mode, the instance remains on the original dedicated host. If the available resources of the original dedicated host are insufficient, the instance cannot be started.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  affinity?: string;
  /**
   * @remarks
   * The desired number of ECS instances that you want to create. Valid values: 1 to 100.
   * 
   * The number of ECS instances that can be created varies based on the Amount and MinAmount values.
   * 
   * *   If you do not specify MinAmount, the RunInstances operation creates ECS instances based on the Amount value. If the available resources are insufficient to create the desired number of ECS instances, the RunInstances operation returns an error response and no ECS instances are created.
   * 
   * *   If you specify MinAmount, take note of the following items:
   * 
   *     *   If the available resources are insufficient to create the minimum number of ECS instances, no ECS instances are created and the RunInstances operation returns an error response.
   *     *   If the available resources are insufficient to create the desired number of ECS instances but are sufficient to create the minimum number of ECS instances, the RunInstances operation uses the available resources to create ECS instances and returns a success response. In this case, the number of ECS instances that can be created is less than the desired number of ECS instances.
   *     *   If the available resources are sufficient to create the desired number of ECS instances, the RunInstances operation uses the available resources to create the desired number of ECS instances and returns a success response.
   * 
   * Default value: 1.
   * 
   * @example
   * 3
   */
  amount?: number;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   */
  arn?: RunInstancesRequestArn[];
  /**
   * @remarks
   * Specifies whether to automatically complete the payment for instance creation. Valid values:
   * 
   * *   true: The payment is automatically completed.
   * 
   *     **
   * 
   *     **Note** Make sure that your account balance is sufficient. Otherwise, your order becomes invalid and is canceled. If your account balance is insufficient, you can set `AutoPay` to `false` to generate an unpaid order. Then, you can log on to the ECS console to pay for the order.
   * 
   * *   false: An order is generated but no payment is made.
   * 
   *     **
   * 
   *     **Note** When `InstanceChargeType` is set to `PostPaid`, `AutoPay` cannot be set to `false`.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The time when to automatically release the pay-as-you-go instance. Specify the time in the [ISO 8601 standard](https://help.aliyun.com/document_detail/25696.html) in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * *   If the value of seconds (`ss`) is not `00`, the start time is automatically rounded to the nearest minute based on the value of minutes (`mm`).
   * *   The specified time must be at least 30 minutes later than the current time.
   * *   The specified time can be at most three years later than the current time.
   * 
   * @example
   * 2018-01-01T12:05:00Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. This parameter is valid only when the `InstanceChargeType` parameter is set to `PrePaid`. Valid values:
   * 
   * *   true: enables auto-renewal.
   * *   false: does not enable auto-renewal.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period of the instance. Valid values:
   * 
   * *   Valid values when PeriodUnit is set to Week: 1, 2, and 3.
   * *   Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.**** For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The performance mode of the burstable instance. Valid values:
   * 
   * *   Standard: the standard mode. For more information, see the "Standard mode" section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * *   Unlimited: the unlimited mode. For more information, see the "Unlimited mode" section in [Burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The data disks.
   */
  dataDisk?: RunInstancesRequestDataDisk[];
  /**
   * @remarks
   * The ID of the dedicated host on which to create the instance. Preemptible instances cannot be created on dedicated hosts. If you specify `DedicatedHostId`, `SpotStrategy` and `SpotPriceLimit` are ignored.
   * 
   * You can call the [DescribeDedicatedHosts](https://help.aliyun.com/document_detail/134242.html) operation to query the list of dedicated host IDs.
   * 
   * @example
   * dh-bp67acfmxazb4p****
   */
  dedicatedHostId?: string;
  /**
   * @remarks
   * Specifies whether to enable release protection for the instance. This parameter determines whether you can use the ECS console or call the [DeleteInstance](https://help.aliyun.com/document_detail/25507.html) operation to release the instance. Valid values:
   * 
   * *   true: enables release protection for the instance.
   * *   false: disables release protection for the instance.
   * 
   * Default value: false.
   * 
   * > This parameter is applicable to only pay-as-you-go instances. It can protect instances against manual releases, but not against automatic releases.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The number of the deployment set group to which to deploy the instance. If the deployment set specified by the DeploymentSetId parameter uses the high availability group strategy (AvailabilityGroup), you can use the DeploymentSetGroupNo parameter to specify a deployment set group in the deployment set. Valid values: 1 to 7.
   * 
   * @example
   * 1
   */
  deploymentSetGroupNo?: number;
  /**
   * @remarks
   * The ID of the deployment set to which to deploy the instance.
   * 
   * @example
   * ds-bp1brhwhoqinyjd6****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The description of the instance. The description must be 2 to 256 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * Instance_Description
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to check the validity of the request without actually making the request. Default value: false. Valid values:
   * 
   * *   true: The validity of the request is checked but the request is not made. Check items include whether required parameters are specified, the request format, service limits, and available ECS resources. If the check fails, the corresponding error code is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * *   false: The validity of the request is checked, and the request is made if the check succeeds.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The hostname of the instance. Take note of the following items:
   * 
   * *   The hostname cannot start or end with a period (.) or hyphen (-). It cannot contain consecutive periods (.) or hyphens (-).
   * 
   * *   For Windows instances, the hostname must be 2 to 15 characters in length and cannot contain periods (.) or contain only digits. It can contain letters, digits, and hyphens (-).
   * 
   * *   For instances that run other operating systems such as Linux, take note of the following items:
   * 
   *     *   The hostname must be 2 to 64 characters in length. You can use periods (.) to separate a hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
   *     *   You can use the `${instance_id}` placeholder to pass instance IDs into the hostname specified by `HostName`. For example, if you set `HostName` to k8s-${instance_id} and the instance is assigned an ID of `i-123abc****`, the hostname of the instance is `k8s-i-123abc****`.
   * 
   * When you create multiple instances, you can perform the following operations:
   * 
   * *   Batch configure sequential hostnames for the instances. For more information, see [Batch configure sequential names or hostnames for multiple instances](https://help.aliyun.com/document_detail/196048.html).
   * *   Use the `HostNames.N` parameter to configure different hostnames for instances. You cannot specify both the `HostName` and `HostNames.N` parameters.
   * 
   * @example
   * k8s-node-[1,4]-ecshost
   */
  hostName?: string;
  /**
   * @remarks
   * The hostname of instance N. You can use this parameter to specify different hostnames for multiple instances.
   * 
   * @example
   * ecs-host-01
   */
  hostNames?: string[];
  /**
   * @remarks
   * The ID of the high performance computing (HPC) cluster to which the instance belongs.
   * 
   * This parameter is required when you create instances of a Supper Computing Cluster (SCC) instance type. For information about how to create an HPC cluster, see [CreateHpcCluster](https://help.aliyun.com/document_detail/109138.html).
   * 
   * @example
   * hpc-bp67acfmxazb4p****
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable the access channel for instance metadata. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * Default value: enabled.
   * 
   * > For more information about instance metadata, see [Overview of ECS instance metadata](https://help.aliyun.com/document_detail/49122.html).
   * 
   * @example
   * enabled
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * 3
   */
  httpPutResponseHopLimit?: number;
  /**
   * @remarks
   * Specifies whether to forcefully use the security-enhanced mode (IMDSv2) to access instance metadata. Valid values:
   * 
   * *   optional: does not forcefully use the security-enhanced mode (IMDSv2).
   * *   required: forcefully uses the security-enhanced mode (IMDSv2). After you set this parameter to required, you cannot access instance metadata in normal mode.
   * 
   * Default value: optional.
   * 
   * > For more information about the modes of accessing instance metadata, see [Access mode of instance metadata](https://help.aliyun.com/document_detail/150575.html).
   * 
   * @example
   * optional
   */
  httpTokens?: string;
  /**
   * @remarks
   * The name of the image family. You can set this parameter to obtain the latest available custom image from the specified image family to create instances.
   * 
   * The name must be 2 to 128 characters in length. The name cannot start with a digit, a special character, http://, or https://. The name can contain letters, digits, periods (.), underscores (_), hyphens (-), and colons (:).
   * 
   * Take note of the following items:
   * 
   * *   If you specify `ImageId`, you cannot specify ImageFamily.
   * *   If you do not specify `ImageId` but use `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template that has `ImageId` specified, you cannot specify ImageFamily.
   * *   If you do not specify `ImageId` but use `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template that does not have `ImageId` specified, you can specify ImageFamily.
   * *   If you do not specify `ImageId`, `LaunchTemplateId`, or `LaunchTemplateName`, you can specify ImageFamily.
   * 
   * >  For information about image families that are associated with Alibaba Cloud official images, see [Overview of public images](https://help.aliyun.com/document_detail/108393.html).
   * 
   * @example
   * hangzhou-daily-update
   */
  imageFamily?: string;
  /**
   * @remarks
   * The ID of the image. You can call the [DescribeImages](https://help.aliyun.com/document_detail/25534.html) operation to query available images. If you do not use `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template and do not set `ImageFamily` to obtain the latest available custom image from a specified image family, you must specify `ImageId`.
   * 
   * @example
   * aliyun_2_1903_x64_20G_alibase_20200324.vhd
   */
  imageId?: string;
  /**
   * @remarks
   * Details about the image options.
   */
  imageOptions?: RunInstancesRequestImageOptions;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PrePaid: subscription
   * *   PostPaid: pay-as-you-go
   * 
   * Default value: PostPaid.
   * 
   * If you set this parameter to PrePaid, make sure that your account has sufficient balance or credit. Otherwise, an `InvalidPayMethod` error is returned.
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name of the ECS instance. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-). The default value of this parameter is the `InstanceId` value.
   * 
   * When you batch create instances, you can batch configure sequential names for the instances. The sequential names can contain brackets ([ ]) and commas (,). For more information, see [Batch configure sequential names or hostnames for multiple instances](https://help.aliyun.com/document_detail/196048.html).
   * 
   * @example
   * k8s-node-[1,4]-alibabacloud
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type. If you do not use `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template, you must set the `InstanceType` parameter.
   * 
   * *   Select an instance type. See [Instance families](https://help.aliyun.com/document_detail/25378.html) or call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the performance data of an instance type, or see [Best practices for instance type selection](https://help.aliyun.com/document_detail/58291.html) to learn about how to select instance types.
   * *   Query available resources. Call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/66186.html) operation to query available resources in a specific region or zone.
   * 
   * @example
   * ecs.g6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * *   PayByBandwidth: pay-by-bandwidth
   * *   PayByTraffic: pay-by-traffic
   * 
   * Default value: PayByTraffic.
   * 
   * > When the **pay-by-traffic** billing method for network usage is used, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios where demand outstrips resource supplies, these maximum bandwidth values may not be reached. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s. Valid values:
   * 
   * *   When the purchased outbound public bandwidth is less than or equal to 10 Mbit/s, the valid values of InternetMaxBandwidthIn are 1 to 10, and the default value is 10.
   * *   When the purchased outbound public bandwidth is greater than 10 Mbit/s, the valid values of this parameter are 1 to the `InternetMaxBandwidthOut` value and the default value is the `InternetMaxBandwidthOut` value.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s. Valid values: 0 to 100.
   * 
   * Default value: 0.
   * 
   * @example
   * 10
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Specifies whether the instance is I/O optimized. For instances of [retired instance types](https://help.aliyun.com/document_detail/55263.html), the default value is none. For instances of other instance types, the default value is optimized. Valid values:
   * 
   * *   none: The instance is not I/O optimized.
   * *   optimized: The instance is I/O optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * IPv6 address N to be assigned to the primary ENI. Valid values of N: 1 to 10.
   * 
   * Example: `Ipv6Address.1=2001:db8:1234:1a00::***`.
   * 
   * Take note of the following items:
   * 
   * *   If the `Ipv6Address.N` parameter is specified, you must set the `Amount` parameter to 1 and leave the `Ipv6AddressCount` parameter empty.
   * *   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot set `Ipv6Addresses.N` or `Ipv6AddressCount` and must set `NetworkInterface.N.Ipv6Addresses.N` or `NetworkInterface.N.Ipv6AddressCount`.
   * 
   * @example
   * Ipv6Address.1=2001:db8:1234:1a00::***
   */
  ipv6Address?: string[];
  /**
   * @remarks
   * The number of IPv6 addresses to randomly generate for the primary ENI. Valid values: 1 to 10.
   * 
   * Take note of the following items:
   * 
   * *   You cannot specify both the `Ipv6Addresses.N` and `Ipv6AddressCount` parameters.
   * *   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `Ipv6Address.N` or `Ipv6AddressCount` but can specify `NetworkInterface.N.Ipv6Address.N` or `NetworkInterface.N.Ipv6AddressCount`.
   * 
   * @example
   * 1
   */
  ipv6AddressCount?: number;
  /**
   * @remarks
   * > This parameter is in invitational preview and is unavailable.
   * 
   * @example
   * null
   */
  isp?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * > For Windows instances, this parameter is ignored. This parameter is empty by default. The `Password` parameter takes effect even if the KeyPairName parameter is specified.
   * 
   * @example
   * KeyPair_Name
   */
  keyPairName?: string;
  /**
   * @remarks
   * The ID of the launch template. For more information, call the [DescribeLaunchTemplates](https://help.aliyun.com/document_detail/73759.html) operation.
   * 
   * To use a launch template to create an instance, you must use the `LaunchTemplateId` or `LaunchTemplateName` parameter to specify the launch template.
   * 
   * @example
   * lt-bp1apo0bbbkuy0rj****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The name of the launch template.
   * 
   * To use a launch template to create an instance, you must use the `LaunchTemplateId` or `LaunchTemplateName` parameter to specify the launch template.
   * 
   * @example
   * LaunchTemplate_Name
   */
  launchTemplateName?: string;
  /**
   * @remarks
   * The version of the launch template. If you set the `LaunchTemplateId` or `LaunchTemplateName` parameter but do not set the version number of the launch template, the default template version is used.
   * 
   * @example
   * 3
   */
  launchTemplateVersion?: number;
  /**
   * @remarks
   * The minimum number of ECS instances that you want to create. Valid values: 1 to 100.
   * 
   * The number of ECS instances that can be created varies based on the Amount and MinAmount values.
   * 
   * *   If you do not specify MinAmount, the RunInstances operation creates ECS instances based on the Amount value. If the available resources are insufficient to create the desired number of ECS instances, the RunInstances operation returns an error response and no ECS instances are created.
   * 
   * *   If you specify MinAmount, take note of the following items:
   * 
   *     *   If the available resources are insufficient to create the minimum number of ECS instances, no ECS instances are created and the RunInstances operation returns an error response.
   *     *   If the available resources are insufficient to create the desired number of ECS instances but are sufficient to create the minimum number of ECS instances, the RunInstances operation uses the available resources to create ECS instances and returns a success response. In this case, the number of ECS instances that can be created is less than the desired number of ECS instances.
   *     *   If the available resources are sufficient to create the desired number of ECS instances, the RunInstances operation uses the available resources to create the desired number of ECS instances and returns a success response.
   * 
   * @example
   * 2
   */
  minAmount?: number;
  /**
   * @remarks
   * The information of the elastic network interfaces (ENIs).
   */
  networkInterface?: RunInstancesRequestNetworkInterface[];
  /**
   * @remarks
   * The number of queues supported by the primary ENI. Take note of the following items:
   * 
   * *   The value of this parameter cannot exceed the maximum number of queues per ENI allowed for the instance type.
   * *   The total number of queues for all ENIs on the instance cannot exceed the queue quota for the instance type. To query the maximum number of queues per ENI and the queue quota for an instance type, you can call the [DescribeInstanceTypes](https://help.aliyun.com/document_detail/25620.html) operation to query the `MaximumQueueNumberPerEni` and `TotalEniQueueQuantity` values.
   * *   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `NetworkInterfaceQueueNumber` but can specify `NetworkInterface.N.QueueNumber`.
   * 
   * @example
   * 8
   */
  networkInterfaceQueueNumber?: number;
  /**
   * @remarks
   * Details about network options.
   */
  networkOptions?: RunInstancesRequestNetworkOptions;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The password of the instance. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Special characters include:
   * 
   *     ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * 
   * For Windows instances, the password cannot start with a forward slash (/).
   * 
   * > If the `Password` parameter is specified, we recommend that you send requests over HTTPS to prevent password leaks.
   * 
   * @example
   * EcsV587!
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the password preset in the image. Valid values:
   * 
   * *   true: uses the preset password.
   * *   false: does not use the preset password.
   * 
   * Default value: false.
   * 
   * > If you set this parameter to true, make sure that you leave the Password parameter empty and the selected image has a preset password.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The subscription period of the instance. The unit is specified by the `PeriodUnit` parameter. This parameter is valid and required only when `InstanceChargeType` is set to `PrePaid`. If the `DedicatedHostId` parameter is specified, the value of Period must not exceed the subscription period of the specified dedicated host. Valid values:
   * 
   * *   Valid values when PeriodUnit is set to Week: 1, 2, 3, and 4.
   * *   Valid values when PeriodUnit is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period. Default value: Month. Valid values:
   * 
   * *   Week
   * *   Month
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The private domain name options of the instance.
   * 
   * For information about the resolution of ECS private domain names, see [ECS private DNS resolution](https://help.aliyun.com/document_detail/2844797.html).
   */
  privateDnsNameOptions?: RunInstancesRequestPrivateDnsNameOptions;
  /**
   * @remarks
   * The private IP address to assign to the instance. To assign a private IP address to an instance that resides in a VPC, make sure that the IP address is an idle IP address within the CIDR block of the vSwitch specified by `VSwitchId`.
   * 
   * Take note of the following items:
   * 
   * *   If `PrivateIpAddress` is specified, take note of the following items:
   * 
   *     *   If `Amount` is set to 1, a single instance is created and the specified private IP address is assigned to the instance.
   *     *   If `Amount` is set to a numeric value greater than 1, the specified number of instances are created and consecutive private IP addresses starting from the specified one are assigned to the instances. In this case, you cannot specify parameters that start with `NetworkInterface.N` to attach secondary ENIs to the instances.
   * 
   * *   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `PrivateIpAddress` but can specify `NetworkInterface.N.PrimaryIpAddress`.
   * 
   * >  The first IP address and last three IP addresses of each vSwitch CIDR block are reserved. You cannot specify the IP addresses. For example, if a vSwitch CIDR block is 192.168.1.0/24, the IP addresses 192.168.1.0, 192.168.1.253, 192.168.1.254, and 192.168.1.255 are reserved.
   * 
   * @example
   * ``10.1.**.**``
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The name of the Resource Access Management (RAM) role. You can call the [ListRoles](https://help.aliyun.com/document_detail/28713.html) operation provided by RAM to query the instance RAM roles that you created.
   * 
   * @example
   * RAM_Name
   */
  ramRoleName?: string;
  /**
   * @remarks
   * The ID of the region in which to create the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the instance.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable security hardening. Valid values:
   * 
   * *   Active: enables security hardening. This value is applicable only to public images.
   * *   Deactive: does not enable security hardening. This value is applicable to all images.
   * 
   * @example
   * Active
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The ID of the security group to which you want to assign the instance. Instances in the same security group can communicate with each other. The maximum number of instances allowed in a security group varies based on the type of the security group. For more information, see the "Security group limits" section in [Limits and quotas](~~25412#SecurityGroupQuota~~).
   * 
   * >  The network type of the new instance is the same as the network type of the security group specified by `SecurityGroupId`. For example, if the specified security group is of the VPC type, the new instance is also of the VPC type and you must specify `VSwitchId`.
   * 
   * If you do not use `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template, you must specify a security group ID. When you specify this parameter, take note of the following items:
   * 
   * *   You can set `SecurityGroupId` to specify a single security group or set `SecurityGroupIds.N` to specify one or more security groups. However, you cannot specify both `SecurityGroupId` and `SecurityGroupIds.N` in the same request.
   * *   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `SecurityGroupId` or `SecurityGroupIds.N` but can specify `NetworkInterface.N.SecurityGroupId` or `NetworkInterface.N.SecurityGroupIds.N`.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of security groups to which to assign the instance. The valid values of N vary based on the maximum number of security groups to which an instance can belong. For more information, see the [Security group limits](https://help.aliyun.com/document_detail/101348.html) section of the "Limits" topic.
   * 
   * When you specify this parameter, take note of the following items:
   * 
   * *   You cannot specify both `SecurityGroupId` and `SecurityGroupIds.N` in the same request.
   * *   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `SecurityGroupId` or `SecurityGroupIds.N` but can specify `NetworkInterface.N.SecurityGroupId` or `NetworkInterface.N.SecurityGroupIds.N`.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg7****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The protection period of the preemptible instance. Unit: hours. Default value: 1. Valid values:
   * 
   * *   1: After a preemptible instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * *   0: After a preemptible instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * 
   * Alibaba Cloud sends an ECS system event to notify you 5 minutes before the instance is released. The preemptible instance is billed by second. We recommend that you specify an appropriate protection period based on your business requirements.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption mode of the preemptible instance. Valid values:
   * 
   * *   Terminate: The instance is released.
   * 
   * *   Stop: The instance is stopped in economical mode.
   * 
   *     For information about the economical mode, see [Economical mode](https://help.aliyun.com/document_detail/63353.html).
   * 
   * Default value: Terminate.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The maximum hourly price of the instance. The value is accurate to three decimal places. This parameter is valid only when the `SpotStrategy` parameter is set to `SpotWithPriceLimit`.
   * 
   * @example
   * 0.97
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding policy for the pay-as-you-go instance. This parameter is valid only when the `InstanceChargeType` parameter is set to `PostPaid`. Valid values:
   * 
   * *   NoSpot: The instance is created as a pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The ID of the storage set.
   * 
   * @example
   * ss-bp67acfmxazb4p****
   */
  storageSetId?: string;
  /**
   * @remarks
   * The maximum number of partitions in the storage set. Valid values: integers greater than or equal to 1.
   * 
   * @example
   * 2
   */
  storageSetPartitionNumber?: number;
  /**
   * @remarks
   * The tags to add to the instance, disks, and primary ENI.
   */
  tag?: RunInstancesRequestTag[];
  /**
   * @remarks
   * Specifies whether to create the instance on a dedicated host. Valid values:
   * 
   * *   default: creates the instance on a non-dedicated host.
   * *   host: creates the instance on a dedicated host. If you do not set the `DedicatedHostId` parameter, Alibaba Cloud selects a dedicated host for the instance.
   * 
   * Default value: default.
   * 
   * @example
   * default
   */
  tenancy?: string;
  /**
   * @remarks
   * Specifies whether to automatically append incremental suffixes to the hostname specified by the `HostName` parameter and to the instance name specified by the `InstanceName` parameter when you batch create instances. The incremental suffixes can range from 001 to 999. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * When the `HostName` or `InstanceName` value is set in the `name_prefix[begin_number,bits]` format without `name_suffix`, the `UniqueSuffix` parameter does not take effect. The names are sorted in the specified sequence.
   * 
   * For more information, see [Batch configure sequential names or hostnames for multiple instances](https://help.aliyun.com/document_detail/196048.html).
   * 
   * @example
   * true
   */
  uniqueSuffix?: boolean;
  /**
   * @remarks
   * The user data of the instance. You must specify Base64-encoded data. The instance user data cannot exceed 32 KB in size before Base64 encoding.
   * 
   * For information about the limits, formats, and running frequencies of instance user data, see [Instance user data](https://help.aliyun.com/document_detail/49121.html).
   * 
   * >  To ensure security, we recommend that you do not use plaintext to pass in confidential information, such as passwords or private keys, as user data. If you need to pass in confidential information, we recommend that you encrypt and encode the information in Base64 and then decode and decrypt the information in the same manner in the instance.
   * 
   * @example
   * ZWNobyBoZWxsbyBlY3Mh
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which to connect to the instance. You must set this parameter when you create an instance of the VPC type. The specified vSwitch and security group must belong to the same VPC. You can call the [DescribeVSwitches](https://help.aliyun.com/document_detail/35748.html) operation to query available vSwitches.
   * 
   * Take note of the following items:
   * 
   * *   If you specify the `VSwitchId` parameter, the zone specified by the `ZoneId` parameter must be the zone where the specified vSwitch is located. You can also leave the `ZoneId` parameter empty. Then, the system selects the zone where the specified vSwitch resides.
   * *   If `NetworkInterface.N.InstanceType` is set to `Primary`, you cannot specify `VSwitchId` but can specify `NetworkInterface.N.VSwitchId`.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws0****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone in which to create the instance. You can call the [DescribeZones](https://help.aliyun.com/document_detail/25610.html) operation to query the most recent zone list.
   * 
   * > If you specify the `VSwitchId` parameter, the zone specified by the `ZoneId` parameter must be the zone where the vSwitch is located. You can also leave the `ZoneId` parameter empty. Then, the system selects the zone where the specified vSwitch is located.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cpuOptions: 'CpuOptions',
      hibernationOptions: 'HibernationOptions',
      privatePoolOptions: 'PrivatePoolOptions',
      schedulerOptions: 'SchedulerOptions',
      securityOptions: 'SecurityOptions',
      systemDisk: 'SystemDisk',
      affinity: 'Affinity',
      amount: 'Amount',
      arn: 'Arn',
      autoPay: 'AutoPay',
      autoReleaseTime: 'AutoReleaseTime',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      creditSpecification: 'CreditSpecification',
      dataDisk: 'DataDisk',
      dedicatedHostId: 'DedicatedHostId',
      deletionProtection: 'DeletionProtection',
      deploymentSetGroupNo: 'DeploymentSetGroupNo',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      dryRun: 'DryRun',
      hostName: 'HostName',
      hostNames: 'HostNames',
      hpcClusterId: 'HpcClusterId',
      httpEndpoint: 'HttpEndpoint',
      httpPutResponseHopLimit: 'HttpPutResponseHopLimit',
      httpTokens: 'HttpTokens',
      imageFamily: 'ImageFamily',
      imageId: 'ImageId',
      imageOptions: 'ImageOptions',
      instanceChargeType: 'InstanceChargeType',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      ipv6Address: 'Ipv6Address',
      ipv6AddressCount: 'Ipv6AddressCount',
      isp: 'Isp',
      keyPairName: 'KeyPairName',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      launchTemplateVersion: 'LaunchTemplateVersion',
      minAmount: 'MinAmount',
      networkInterface: 'NetworkInterface',
      networkInterfaceQueueNumber: 'NetworkInterfaceQueueNumber',
      networkOptions: 'NetworkOptions',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      privateDnsNameOptions: 'PrivateDnsNameOptions',
      privateIpAddress: 'PrivateIpAddress',
      ramRoleName: 'RamRoleName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      storageSetId: 'StorageSetId',
      storageSetPartitionNumber: 'StorageSetPartitionNumber',
      tag: 'Tag',
      tenancy: 'Tenancy',
      uniqueSuffix: 'UniqueSuffix',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuOptions: RunInstancesRequestCpuOptions,
      hibernationOptions: RunInstancesRequestHibernationOptions,
      privatePoolOptions: RunInstancesRequestPrivatePoolOptions,
      schedulerOptions: RunInstancesRequestSchedulerOptions,
      securityOptions: RunInstancesRequestSecurityOptions,
      systemDisk: RunInstancesRequestSystemDisk,
      affinity: 'string',
      amount: 'number',
      arn: { 'type': 'array', 'itemType': RunInstancesRequestArn },
      autoPay: 'boolean',
      autoReleaseTime: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      creditSpecification: 'string',
      dataDisk: { 'type': 'array', 'itemType': RunInstancesRequestDataDisk },
      dedicatedHostId: 'string',
      deletionProtection: 'boolean',
      deploymentSetGroupNo: 'number',
      deploymentSetId: 'string',
      description: 'string',
      dryRun: 'boolean',
      hostName: 'string',
      hostNames: { 'type': 'array', 'itemType': 'string' },
      hpcClusterId: 'string',
      httpEndpoint: 'string',
      httpPutResponseHopLimit: 'number',
      httpTokens: 'string',
      imageFamily: 'string',
      imageId: 'string',
      imageOptions: RunInstancesRequestImageOptions,
      instanceChargeType: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      ipv6Address: { 'type': 'array', 'itemType': 'string' },
      ipv6AddressCount: 'number',
      isp: 'string',
      keyPairName: 'string',
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      launchTemplateVersion: 'number',
      minAmount: 'number',
      networkInterface: { 'type': 'array', 'itemType': RunInstancesRequestNetworkInterface },
      networkInterfaceQueueNumber: 'number',
      networkOptions: RunInstancesRequestNetworkOptions,
      ownerAccount: 'string',
      ownerId: 'number',
      password: 'string',
      passwordInherit: 'boolean',
      period: 'number',
      periodUnit: 'string',
      privateDnsNameOptions: RunInstancesRequestPrivateDnsNameOptions,
      privateIpAddress: 'string',
      ramRoleName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      storageSetId: 'string',
      storageSetPartitionNumber: 'number',
      tag: { 'type': 'array', 'itemType': RunInstancesRequestTag },
      tenancy: 'string',
      uniqueSuffix: 'boolean',
      userData: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.cpuOptions && typeof (this.cpuOptions as any).validate === 'function') {
      (this.cpuOptions as any).validate();
    }
    if(this.hibernationOptions && typeof (this.hibernationOptions as any).validate === 'function') {
      (this.hibernationOptions as any).validate();
    }
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    if(this.schedulerOptions && typeof (this.schedulerOptions as any).validate === 'function') {
      (this.schedulerOptions as any).validate();
    }
    if(this.securityOptions && typeof (this.securityOptions as any).validate === 'function') {
      (this.securityOptions as any).validate();
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.arn)) {
      $dara.Model.validateArray(this.arn);
    }
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    if(Array.isArray(this.hostNames)) {
      $dara.Model.validateArray(this.hostNames);
    }
    if(this.imageOptions && typeof (this.imageOptions as any).validate === 'function') {
      (this.imageOptions as any).validate();
    }
    if(Array.isArray(this.ipv6Address)) {
      $dara.Model.validateArray(this.ipv6Address);
    }
    if(Array.isArray(this.networkInterface)) {
      $dara.Model.validateArray(this.networkInterface);
    }
    if(this.networkOptions && typeof (this.networkOptions as any).validate === 'function') {
      (this.networkOptions as any).validate();
    }
    if(this.privateDnsNameOptions && typeof (this.privateDnsNameOptions as any).validate === 'function') {
      (this.privateDnsNameOptions as any).validate();
    }
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

