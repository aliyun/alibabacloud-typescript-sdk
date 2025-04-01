// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class ResourceInstanceLabels extends $dara.Model {
  labelKey?: string;
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceLabels extends $dara.Model {
  labelKey?: string;
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachGatewayDomainRequestCustomDomain extends $dara.Model {
  /**
   * @remarks
   * The ID of the SSL certificate bound to the domain name. Obtain the certificate ID after you upload or purchase a certificate in the [Certificate Management Service](https://yundunnext.console.aliyun.com/?spm=5176.2020520163.console-base_help.2.4b3baJixaJixOc\\&p=cas) console.
   * 
   * @example
   * 1473**25
   */
  certificateId?: string;
  /**
   * @remarks
   * The custom domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @remarks
   * The domain name type.
   * 
   * Valid value:
   * 
   * *   intranet: internal network.
   * *   internet: public network.
   * 
   * This parameter is required.
   * 
   * @example
   * intranet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      domain: 'Domain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      domain: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclPolicyRequestAclPolicyList extends $dara.Model {
  /**
   * @remarks
   * The comment on the IP CIDR block in the VPC that can access the private gateway.
   * 
   * @example
   * default
   */
  comment?: string;
  /**
   * @remarks
   * The IP CIDR block in the VPC that can access the private gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * 10.23.XX.XX/32
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayIntranetLinkedVpcPeerRequestPeerVpcs extends $dara.Model {
  /**
   * @remarks
   * The region where the VPC peer resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The ID of the VPC peer. To obtain the VPC ID, see [DescribeVpcs](https://help.aliyun.com/document_detail/35739.html).
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
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

export class CreateResourceRequestSelfManagedResourceOptionsNodeTolerations extends $dara.Model {
  /**
   * @remarks
   * The result.
   * 
   * Valid values:
   * 
   * *   PreferNoSchedule
   * *   NoSchedule
   * *   NoExecute
   * 
   * @example
   * NoSchedule
   */
  effect?: string;
  /**
   * @remarks
   * The key name.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The relationship between key names and key values.
   * 
   * Valid values:
   * 
   * *   Equal
   * *   Exists
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The key value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRequestSelfManagedResourceOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the self-managed cluster.
   * 
   * @example
   * cf0386f250f2545689ca7fdd1cd******
   */
  externalClusterId?: string;
  /**
   * @remarks
   * The tag key-value pairs of the node.
   */
  nodeMatchLabels?: { [key: string]: string };
  /**
   * @remarks
   * The tolerations for the node taint.
   */
  nodeTolerations?: CreateResourceRequestSelfManagedResourceOptionsNodeTolerations[];
  /**
   * @remarks
   * The name of the RAM user to which the permissions on Elastic Algorithm Service (EAS) of Platform for AI (PAI) are granted.
   * 
   * @example
   * clusterrole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      externalClusterId: 'ExternalClusterId',
      nodeMatchLabels: 'NodeMatchLabels',
      nodeTolerations: 'NodeTolerations',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalClusterId: 'string',
      nodeMatchLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      nodeTolerations: { 'type': 'array', 'itemType': CreateResourceRequestSelfManagedResourceOptionsNodeTolerations },
      roleName: 'string',
    };
  }

  validate() {
    if(this.nodeMatchLabels) {
      $dara.Model.validateMap(this.nodeMatchLabels);
    }
    if(Array.isArray(this.nodeTolerations)) {
      $dara.Model.validateArray(this.nodeTolerations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequestBehaviorOnZero extends $dara.Model {
  /**
   * @remarks
   * The time window that is required before the number of instances is reduced to 0. The number of instances can be reduced to 0 only if no request is available or no traffic exists in the specified time window. Default value: 600.
   * 
   * @example
   * 600
   */
  scaleDownGracePeriodSeconds?: number;
  /**
   * @remarks
   * The number of instances that you want to create at a time if the number of instances is 0. Default value: 1.
   * 
   * @example
   * 1
   */
  scaleUpActivationReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      scaleDownGracePeriodSeconds: 'scaleDownGracePeriodSeconds',
      scaleUpActivationReplicas: 'scaleUpActivationReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleDownGracePeriodSeconds: 'number',
      scaleUpActivationReplicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequestBehaviorScaleDown extends $dara.Model {
  /**
   * @remarks
   * The time window that is required before the scale-in operation is performed. The scale-in operation can be performed only if the specified metric drops below the specified threshold in the specified time window. Default value: 300.
   * 
   * @example
   * 300
   */
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      stabilizationWindowSeconds: 'stabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stabilizationWindowSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequestBehaviorScaleUp extends $dara.Model {
  /**
   * @remarks
   * The time window that is required before the scale-out operation is performed. The scale-out operation can be performed only if the specified metric exceeds the specified threshold in the specified time window. Default value: 0.
   * 
   * @example
   * 0
   */
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      stabilizationWindowSeconds: 'stabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stabilizationWindowSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequestBehavior extends $dara.Model {
  /**
   * @remarks
   * The operation that reduces the number of instances to 0.
   */
  onZero?: CreateServiceAutoScalerRequestBehaviorOnZero;
  /**
   * @remarks
   * The scale-in operation.
   */
  scaleDown?: CreateServiceAutoScalerRequestBehaviorScaleDown;
  /**
   * @remarks
   * The scale-out operation.
   */
  scaleUp?: CreateServiceAutoScalerRequestBehaviorScaleUp;
  static names(): { [key: string]: string } {
    return {
      onZero: 'onZero',
      scaleDown: 'scaleDown',
      scaleUp: 'scaleUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onZero: CreateServiceAutoScalerRequestBehaviorOnZero,
      scaleDown: CreateServiceAutoScalerRequestBehaviorScaleDown,
      scaleUp: CreateServiceAutoScalerRequestBehaviorScaleUp,
    };
  }

  validate() {
    if(this.onZero && typeof (this.onZero as any).validate === 'function') {
      (this.onZero as any).validate();
    }
    if(this.scaleDown && typeof (this.scaleDown as any).validate === 'function') {
      (this.scaleDown as any).validate();
    }
    if(this.scaleUp && typeof (this.scaleUp as any).validate === 'function') {
      (this.scaleUp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequestScaleStrategies extends $dara.Model {
  /**
   * @remarks
   * The name of the metric for triggering auto scaling. Valid values:
   * 
   * *   qps: the queries per second (qps) for an individual instance.
   * *   cpu: the cpu utilization.
   * * gpu[util]: gpu utilization.
   * 
   * This parameter is required.
   * 
   * @example
   * qps
   */
  metricName?: string;
  /**
   * @remarks
   * The service for which the metric is specified. If you do not set this parameter, the current service is specified by default.
   * 
   * @example
   * demo_svc
   */
  service?: string;
  /**
   * @remarks
   * The threshold of the metric that triggers auto scaling.
   * 
   * *   If you set metricName to qps, scale-out is triggered when the average qps for a single instance is greater than this threshold.
   * *   If you set metricName to cpu, scale-out is triggered when the average cpu utilization for a single instance is greater than this threshold.
   * *   If you set metricName to gpu, scale-out is triggered when the average gpu utilization for a single instance is greater than this threshold.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      metricName: 'metricName',
      service: 'service',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      service: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceCronScalerRequestScaleJobs extends $dara.Model {
  /**
   * @remarks
   * The name of the CronHPA job.
   * 
   * @example
   * scale-job-1
   */
  name?: string;
  /**
   * @remarks
   * The cron expression that is used to configure the execution time of the CronHPA job. For more information about how to configure cron expressions, see **Description of special characters** in this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 18 * * * *
   */
  schedule?: string;
  /**
   * @remarks
   * The number of instances that you want to configure for the CronHPA job.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  targetSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      schedule: 'Schedule',
      targetSize: 'TargetSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schedule: 'string',
      targetSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualResourceRequestResources extends $dara.Model {
  /**
   * @remarks
   * The instance type of the public resource group.
   * 
   * >  You must specify one and only one of the InstanceType, ResourceId, and QuotaId parameters.
   * 
   * @example
   * ecs.s6-c1m2.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The priority of resource scheduling. A greater number indicates a higher priority.
   * 
   * @example
   * 6
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the Lingjun resource quota.
   * 
   * >  You must specify one and only one of the InstanceType, ResourceId, and QuotaId parameters.
   * 
   * @example
   * quota185lqxxxxxx
   */
  quotaId?: string;
  /**
   * @remarks
   * The region in which the resource resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the dedicated resource group. For information about how to obtain the ID of a dedicated resource group, see [ListResources](https://help.aliyun.com/document_detail/412133.html).
   * 
   * >  You must specify one and only one of the InstanceType, ResourceId, and QuotaId parameters.
   * 
   * @example
   * eas-r-g55ieatgg3buxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The maximum price of preemptible instances in a public resource group.
   * 
   * >  If you leave this parameter empty, preemptible instances are not used.
   * 
   * @example
   * 10.05
   */
  spotPriceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      priority: 'Priority',
      quotaId: 'QuotaId',
      region: 'Region',
      resourceId: 'ResourceId',
      spotPriceLimit: 'SpotPriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priority: 'number',
      quotaId: 'string',
      region: 'string',
      resourceId: 'string',
      spotPriceLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclPolicyRequestAclPolicyList extends $dara.Model {
  /**
   * @remarks
   * The comment on the IP CIDR block in the VPC that can access the private gateway.
   * 
   * @example
   * default
   */
  comment?: string;
  /**
   * @remarks
   * The IP CIDR block in the VPC that can access the private gateway.
   * 
   * @example
   * 10.23.XX.XX/32
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayIntranetLinkedVpcPeerRequestPeerVpcs extends $dara.Model {
  /**
   * @remarks
   * The region where the VPC peer resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The ID of the VPC peer.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
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

export class DescribeGroupEndpointsResponseBodyEndpoints extends $dara.Model {
  backendId?: string;
  endpointType?: string;
  internetEndpoints?: string[];
  intranetEndpoints?: string[];
  pathType?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      endpointType: 'EndpointType',
      internetEndpoints: 'InternetEndpoints',
      intranetEndpoints: 'IntranetEndpoints',
      pathType: 'PathType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      endpointType: 'string',
      internetEndpoints: { 'type': 'array', 'itemType': 'string' },
      intranetEndpoints: { 'type': 'array', 'itemType': 'string' },
      pathType: 'string',
      port: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.internetEndpoints)) {
      $dara.Model.validateArray(this.internetEndpoints);
    }
    if(Array.isArray(this.intranetEndpoints)) {
      $dara.Model.validateArray(this.intranetEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMachineSpecResponseBodyInstanceMetas extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores in the instance type.
   * 
   * @example
   * 32
   */
  CPU?: number;
  /**
   * @remarks
   * The GPU type in the instance type. If the instance type is not a GPU-based instance type, this parameter does not exist.
   * 
   * @example
   * GU30
   */
  GPU?: string;
  /**
   * @remarks
   * The number of GPUs in the instance type.
   * 
   * @example
   * 1
   */
  GPUAmount?: number;
  /**
   * @remarks
   * The GPU memory in the instance type. Unit: GB.
   * 
   * @example
   * 24
   */
  GPUMemory?: number;
  /**
   * @remarks
   * The name of the instance type.
   * 
   * @example
   * ml.gu7i.c32m188.1-gu30
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether the instance type is available.
   * 
   * @example
   * true
   */
  isAvailable?: boolean;
  /**
   * @remarks
   * The memory size in the instance type. Unit: GB.
   * 
   * @example
   * 188
   */
  memory?: number;
  /**
   * @remarks
   * The minimum discount that can be accepted when the preemptible instance type does not include a usage duration. 0.1 indicates one fold. If this parameter is not returned, the bidding feature is not supported.
   * 
   * @example
   * 0.1
   */
  nonProtectSpotDiscount?: number;
  /**
   * @remarks
   * The minimum discount that can be accepted when the preemptible instance type has the 1-hour protection duration. 0.1 indicates one fold. If this parameter is not returned, the bidding feature is not supported.
   * 
   * @example
   * 0.12
   */
  spotDiscount?: number;
  /**
   * @remarks
   * The inventory status of the instance type.
   * 
   * Valid values:
   * 
   * *   WithStock
   * *   ClosedWithStock
   * *   NoStock
   * 
   * @example
   * WithStock
   */
  stockStatus?: string;
  /**
   * @remarks
   * The source of the instance type.
   * 
   * Valid values:
   * 
   * *   ECS
   * *   BareMetal
   * *   Lingjun
   * 
   * @example
   * ECS
   */
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUAmount: 'GPUAmount',
      GPUMemory: 'GPUMemory',
      instanceType: 'InstanceType',
      isAvailable: 'IsAvailable',
      memory: 'Memory',
      nonProtectSpotDiscount: 'NonProtectSpotDiscount',
      spotDiscount: 'SpotDiscount',
      stockStatus: 'StockStatus',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'number',
      GPU: 'string',
      GPUAmount: 'number',
      GPUMemory: 'number',
      instanceType: 'string',
      isAvailable: 'boolean',
      memory: 'number',
      nonProtectSpotDiscount: 'number',
      spotDiscount: 'number',
      stockStatus: 'string',
      vendor: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMachineSpecResponseBodyTypes extends $dara.Model {
  /**
   * @remarks
   * Valid values:
   * 
   * @example
   * 1
   */
  CPU?: number;
  /**
   * @remarks
   * The optional values for memory when CPU is set to a specific value as above.
   */
  memory?: number[];
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'number',
      memory: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.memory)) {
      $dara.Model.validateArray(this.memory);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      regionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceAutoScalerResponseBodyCurrentMetrics extends $dara.Model {
  /**
   * @remarks
   * The metric name. Valid values:
   * 
   * *   QPS
   * *   CPU
   * 
   * @example
   * qps
   */
  metricName?: string;
  /**
   * @remarks
   * The service for which the metric is specified.
   * 
   * @example
   * demo_svc
   */
  service?: string;
  /**
   * @remarks
   * The metric value.
   * 
   * @example
   * 10
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      metricName: 'metricName',
      service: 'service',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      service: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceAutoScalerResponseBodyScaleStrategies extends $dara.Model {
  /**
   * @remarks
   * The metric name. Valid values:
   * 
   * *   QPS: the queries per second (QPS) for an individual instance.
   * *   CPU: the CPU utilization.
   * 
   * @example
   * QPS
   */
  metricName?: string;
  /**
   * @remarks
   * The service for which the metric is specified. If you do not set this parameter, the current service is specified by default.
   * 
   * @example
   * demo_svc
   */
  service?: string;
  /**
   * @remarks
   * The threshold of the metric that triggers auto scaling.
   * 
   * *   If you set metricName to QPS, scale-out is triggered when the average QPS for a single instance is greater than this threshold.
   * *   If you set metricName to CPU, scale-out is triggered when the average CPU utilization for a single instance is greater than this threshold.
   * 
   * @example
   * 10
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      metricName: 'metricName',
      service: 'service',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      service: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceCronScalerResponseBodyScaleJobs extends $dara.Model {
  /**
   * @remarks
   * The time when the most recent CronHPA job was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-06-24T02:11:30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the most recent CronHPA job ran. The time is displayed in UTC.
   * 
   * @example
   * 2022-02-24T06:31:00Z
   */
  lastProbeTime?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * "cron hpa job scale-jobs-0 executed successfully. current replicas:3, desired replicas:2."
   */
  message?: string;
  /**
   * @remarks
   * The name of the CronHPA job.
   * 
   * @example
   * scale-job-1
   */
  name?: string;
  /**
   * @remarks
   * The cron expression that is used to configure the execution time of the CronHPA job.
   * 
   * @example
   * 0 18 * * * *
   */
  schedule?: string;
  /**
   * @remarks
   * The status of the most recent CronHPA job.
   * 
   * @example
   * Succeed
   */
  state?: string;
  /**
   * @remarks
   * The number of instances that you expect to configure for the CronHPA job.
   * 
   * @example
   * 1
   */
  targetSize?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastProbeTime: 'LastProbeTime',
      message: 'Message',
      name: 'Name',
      schedule: 'Schedule',
      state: 'State',
      targetSize: 'TargetSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      lastProbeTime: 'string',
      message: 'string',
      name: 'string',
      schedule: 'string',
      state: 'string',
      targetSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceDiagnosisResponseBodyDiagnosisList extends $dara.Model {
  /**
   * @remarks
   * The suggestions about how to handle the errors.
   */
  advices?: string[];
  /**
   * @remarks
   * The causes of the errors.
   */
  causes?: string[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Container worker0 failed to pull image.
   */
  error?: string;
  static names(): { [key: string]: string } {
    return {
      advices: 'Advices',
      causes: 'Causes',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advices: { 'type': 'array', 'itemType': 'string' },
      causes: { 'type': 'array', 'itemType': 'string' },
      error: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.advices)) {
      $dara.Model.validateArray(this.advices);
    }
    if(Array.isArray(this.causes)) {
      $dara.Model.validateArray(this.causes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceEndpointsResponseBodyEndpoints extends $dara.Model {
  backendId?: string;
  endpointType?: string;
  internetEndpoints?: string[];
  intranetEndpoints?: string[];
  pathType?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      backendId: 'BackendId',
      endpointType: 'EndpointType',
      internetEndpoints: 'InternetEndpoints',
      intranetEndpoints: 'IntranetEndpoints',
      pathType: 'PathType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backendId: 'string',
      endpointType: 'string',
      internetEndpoints: { 'type': 'array', 'itemType': 'string' },
      intranetEndpoints: { 'type': 'array', 'itemType': 'string' },
      pathType: 'string',
      port: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.internetEndpoints)) {
      $dara.Model.validateArray(this.internetEndpoints);
    }
    if(Array.isArray(this.intranetEndpoints)) {
      $dara.Model.validateArray(this.intranetEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceEventResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The returned message. The message is formatted and returned in the JSON format.
   * 
   * @example
   * {\\"versionId\\":1,\\"message\\":\\"Stage scale complete\\",\\"availableInstance\\":1,\\"unavailableInstance\\":0}
   */
  message?: string;
  /**
   * @remarks
   * The cause of the event. The information about the change in the service status is returned.
   * 
   * @example
   * Updating
   */
  reason?: string;
  /**
   * @remarks
   * The time when the event occurred. The time must be in UTC.
   * 
   * @example
   * 2022-04-09 06:30:00
   */
  time?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * *   Normal
   * *   Warning
   * 
   * @example
   * Normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      reason: 'Reason',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      reason: 'string',
      time: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceInstanceDiagnosisResponseBodyDiagnosis extends $dara.Model {
  /**
   * @remarks
   * The solutions to the errors.
   */
  advices?: string[];
  /**
   * @remarks
   * The causes of the errors.
   */
  causes?: string[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Container worker0 failed to pull image.
   */
  error?: string;
  static names(): { [key: string]: string } {
    return {
      advices: 'Advices',
      causes: 'Causes',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advices: { 'type': 'array', 'itemType': 'string' },
      causes: { 'type': 'array', 'itemType': 'string' },
      error: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.advices)) {
      $dara.Model.validateArray(this.advices);
    }
    if(Array.isArray(this.causes)) {
      $dara.Model.validateArray(this.causes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotDiscountHistoryResponseBodySpotDiscounts extends $dara.Model {
  /**
   * @remarks
   * The type of the ECS instance.
   * 
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The discount for the preemptible instance. For example, 0.1 represents a 90% discount.
   * 
   * @example
   * 0.1
   */
  spotDiscount?: string;
  /**
   * @remarks
   * The time when the discount is available. The time must be in UTC.
   * 
   * @example
   * 2024-04-10T10:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotDiscount: 'SpotDiscount',
      timestamp: 'Timestamp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotDiscount: 'string',
      timestamp: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualResourceResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The instance type of the public resource group.
   * 
   * @example
   * ecs.s6-c1m2.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The priority of resource scheduling. A greater number specifies a higher priority.
   * 
   * @example
   * 3
   */
  priority?: number;
  /**
   * @remarks
   * The instance type of the public resource group.
   * 
   * @example
   * quota185lqxxxxxx
   */
  quotaId?: string;
  /**
   * @remarks
   * The region where the resource resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the dedicated resource group.
   * 
   * @example
   * eas-r-g55ieatgg3buxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The maximum price of preemptible instances in a public resource group.
   * 
   * @example
   * 10.05
   */
  spotPriceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      priority: 'Priority',
      quotaId: 'QuotaId',
      region: 'Region',
      resourceId: 'ResourceId',
      spotPriceLimit: 'SpotPriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priority: 'number',
      quotaId: 'string',
      region: 'string',
      resourceId: 'string',
      spotPriceLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachGatewayDomainRequestCustomDomain extends $dara.Model {
  /**
   * @remarks
   * The custom domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @remarks
   * The domain name type.
   * 
   * Valid value:
   * 
   * *   intranet: internal network.
   * *   internet: public network.
   * 
   * This parameter is required.
   * 
   * @example
   * intranet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyResponseBodyInternetAclPolicyListAclPolicyList extends $dara.Model {
  /**
   * @remarks
   * The comment on the IP CIDR block in the VPC that can access the private gateway over the Internet.
   * 
   * @example
   * default
   */
  comment?: string;
  /**
   * @remarks
   * The IP CIDR block in the VPC that can access the private gateway over the Internet.
   * 
   * @example
   * 10.23.XX.XX/32
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyResponseBodyInternetAclPolicyList extends $dara.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway over the Internet.
   */
  aclPolicyList?: ListAclPolicyResponseBodyInternetAclPolicyListAclPolicyList[];
  static names(): { [key: string]: string } {
    return {
      aclPolicyList: 'AclPolicyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyInternetAclPolicyListAclPolicyList },
    };
  }

  validate() {
    if(Array.isArray(this.aclPolicyList)) {
      $dara.Model.validateArray(this.aclPolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyResponseBodyIntranetVpcAclPolicyListAclPolicyList extends $dara.Model {
  /**
   * @remarks
   * The comment on the IP CIDR block in the VPC that can access the private gateway over the internal network.
   * 
   * @example
   * Test Entry
   */
  comment?: string;
  /**
   * @remarks
   * The IP CIDR block in the VPC that can access the private gateway over the internal network.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyResponseBodyIntranetVpcAclPolicyList extends $dara.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway over the internal network.
   */
  aclPolicyList?: ListAclPolicyResponseBodyIntranetVpcAclPolicyListAclPolicyList[];
  /**
   * @remarks
   * The VPC ID. For more information about how to obtain the VPC ID, see DescribeVpcs.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclPolicyList: 'AclPolicyList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyIntranetVpcAclPolicyListAclPolicyList },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclPolicyList)) {
      $dara.Model.validateArray(this.aclPolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBenchmarkTaskResponseBodyTasks extends $dara.Model {
  /**
   * @remarks
   * The number of instances that are available for stress testing.
   * 
   * @example
   * 2
   */
  availableAgent?: number;
  /**
   * @remarks
   * The time when the stress testing task was created.
   * 
   * @example
   * 2020-12-04T02:43:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmark task [benchmark-larec-test-1076] is Running
   */
  message?: string;
  /**
   * @remarks
   * The region ID of the stress testing task.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The name of the service on which you want to perform a stress testing.
   * 
   * @example
   * test_quota
   */
  serviceName?: string;
  /**
   * @remarks
   * The state of the stress testing task.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Starting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DeleteFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopping
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Error
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Updating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CreateFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the stress testing task.
   * 
   * @example
   * eas-b-gv4y86uvgt****i
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the stress testing task.
   * 
   * @example
   * benchmark-larec-test-1076
   */
  taskName?: string;
  /**
   * @remarks
   * The time when the stress testing task was updated.
   * 
   * @example
   * 2020-06-24T03:11:30Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      availableAgent: 'AvailableAgent',
      createTime: 'CreateTime',
      message: 'Message',
      region: 'Region',
      serviceName: 'ServiceName',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAgent: 'number',
      createTime: 'string',
      message: 'string',
      region: 'string',
      serviceName: 'string',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBodyGateways extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PrePaid: subscription.
   * *   PostPaid: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the private gateway was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-05-19T14:19:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The private gateway alias.
   * 
   * @example
   * mygateway1
   */
  gatewayName?: string;
  /**
   * @remarks
   * The type of instances used for the private gateway.
   * 
   * @example
   * 2c4g
   */
  instanceType?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * gw-1uhcqmsc7x22******-1801786532******.cn-wulanchabu.pai-eas.aliyuncs.com
   */
  internetDomain?: string;
  /**
   * @remarks
   * Indicates whether Internet access is enabled.
   * 
   * @example
   * true
   */
  internetEnabled?: boolean;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * gw-1uhcqmsc7x22******-1801786532******-vpc.cn-wulanchabu.pai-eas.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @remarks
   * Indicates whether it is the default private gateway.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The number of nodes in the private gateway.
   * 
   * @example
   * 2
   */
  replicas?: number;
  /**
   * @remarks
   * Specifies whether to enable HTTP to HTTPS redirection.
   * 
   * @example
   * true
   */
  SSLRedirectionEnabled?: boolean;
  /**
   * @remarks
   * The state of the private gateway.
   * 
   * Valid values:
   * 
   * *   Creating
   * *   Stopped
   * *   Failed
   * *   Running
   * *   Deleted
   * *   Deleting
   * *   Waiting
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the private gateway was updated. The time is displayed in UTC.
   * 
   * @example
   * 2021-02-24T11:52:17Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      instanceType: 'InstanceType',
      internetDomain: 'InternetDomain',
      internetEnabled: 'InternetEnabled',
      intranetDomain: 'IntranetDomain',
      isDefault: 'IsDefault',
      replicas: 'Replicas',
      SSLRedirectionEnabled: 'SSLRedirectionEnabled',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      createTime: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
      instanceType: 'string',
      internetDomain: 'string',
      internetEnabled: 'boolean',
      intranetDomain: 'string',
      isDefault: 'boolean',
      replicas: 'number',
      SSLRedirectionEnabled: 'boolean',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayDomainsResponseBodyCustomDomains extends $dara.Model {
  /**
   * @remarks
   * The ID of the SSL certificate bound to the domain name. Obtain the certificate ID after you upload or purchase a certificate in the [Certificate Management Service](https://yundunnext.console.aliyun.com/?spm=5176.2020520163.console-base_help.2.4b3baJixaJixOc\\&p=cas) console.
   * 
   * @example
   * 1473**25
   */
  certificateId?: string;
  /**
   * @remarks
   * The custom domain name.
   * 
   * @example
   * test.com
   */
  domain?: string;
  /**
   * @remarks
   * The domain name type.
   * 
   * Valid value:
   * 
   * *   intranet: internal network.
   * *   internet: public network.
   * 
   * @example
   * intranet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      domain: 'Domain',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      domain: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList extends $dara.Model {
  authoritativeDnsEnabled?: boolean;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.10.11
   */
  ip?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-2ze4pgstgszvgq******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The state of the private gateway.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The private gateway is being created.
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The private gateway is running.
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vb2qjoiio6m9pg******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-2zetuli9ws0qgjd******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      authoritativeDnsEnabled: 'AuthoritativeDnsEnabled',
      ip: 'Ip',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authoritativeDnsEnabled: 'boolean',
      ip: 'string',
      securityGroupId: 'string',
      status: 'string',
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

export class ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcListPeerVpcs extends $dara.Model {
  /**
   * @remarks
   * The region where the VPC peer resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The ID of the VPC peer.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: 'string',
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

export class ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcList extends $dara.Model {
  /**
   * @remarks
   * The ID of the VPC peers.
   */
  peerVpcs?: ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcListPeerVpcs[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2zetuli9ws0qgjd******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      peerVpcs: 'PeerVpcs',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peerVpcs: { 'type': 'array', 'itemType': ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcListPeerVpcs },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.peerVpcs)) {
      $dara.Model.validateArray(this.peerVpcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceVersionsResponseBodyVersions extends $dara.Model {
  /**
   * @remarks
   * The time when the service version was created. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-29T22:02:14Z
   */
  buildTime?: string;
  /**
   * @remarks
   * Indicates whether the image is available. Valid values:
   * 
   * *   true: The image is available.
   * *   false: The image is unavailable.
   * *   unknown: The availability of the image is unknown.
   * 
   * @example
   * true
   */
  imageAvailable?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * 4
   */
  imageId?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Service is Running
   */
  message?: string;
  /**
   * @remarks
   * The service deployment configurations. This parameter is returned only if the service is deployed by using a custom image.
   * 
   * @example
   * {
   *     "metadata": {
   *         "cpu": 1,
   *         "instance": 1,
   *         "memory": 1024
   *     },
   *     "name": "echo"
   * }
   */
  serviceConfig?: string;
  /**
   * @remarks
   * Indicates whether Elastic Algorithm service (EAS) is activated. Valid values:
   * 
   * *   true: EAS is activated.
   * *   false: EAS is not activated.
   * *   unknown: The activation of EAS is unknown.
   * 
   * @example
   * true
   */
  serviceRunnable?: string;
  static names(): { [key: string]: string } {
    return {
      buildTime: 'BuildTime',
      imageAvailable: 'ImageAvailable',
      imageId: 'ImageId',
      message: 'Message',
      serviceConfig: 'ServiceConfig',
      serviceRunnable: 'ServiceRunnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTime: 'string',
      imageAvailable: 'string',
      imageId: 'number',
      message: 'string',
      serviceConfig: 'string',
      serviceRunnable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantAddonsResponseBodyAddons extends $dara.Model {
  /**
   * @remarks
   * The attributes of the plug-in.
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * prometheus_discovery
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualResourceResponseBodyVirtualResources extends $dara.Model {
  /**
   * @remarks
   * The time when the virtual resource group was created.
   * 
   * @example
   * 2024-10-16T17:52:49Z
   */
  createTime?: string;
  /**
   * @remarks
   * The number of deployed services.
   * 
   * @example
   * 1
   */
  serviceCount?: number;
  /**
   * @remarks
   * The time when the virtual resource group was last updated.
   * 
   * @example
   * 2024-10-16T19:52:49Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the virtual resource group.
   * 
   * @example
   * eas-vr-npovr28onap1xxxxxx
   */
  virtualResourceId?: string;
  /**
   * @remarks
   * The name of the virtual resource group.
   * 
   * @example
   * MyVirtualResource
   */
  virtualResourceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      serviceCount: 'ServiceCount',
      updateTime: 'UpdateTime',
      virtualResourceId: 'VirtualResourceId',
      virtualResourceName: 'VirtualResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      serviceCount: 'number',
      updateTime: 'string',
      virtualResourceId: 'string',
      virtualResourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRequestSelfManagedResourceOptionsNodeTolerations extends $dara.Model {
  /**
   * @remarks
   * The effect.
   * Valid values:
   * - PreferNoSchedule
   * - NoSchedule
   * - NoExecute
   * 
   * @example
   * NoSchedule
   */
  effect?: string;
  /**
   * @remarks
   * The key name.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * Relationship between key names and key values.
   * Valid values:
   * - Equal
   * - Exists
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The key value.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRequestSelfManagedResourceOptions extends $dara.Model {
  /**
   * @remarks
   * Tag tag key-value pairs for nodes.
   */
  nodeMatchLabels?: { [key: string]: string };
  /**
   * @remarks
   * Tolerations for nodes.
   */
  nodeTolerations?: UpdateResourceRequestSelfManagedResourceOptionsNodeTolerations[];
  static names(): { [key: string]: string } {
    return {
      nodeMatchLabels: 'NodeMatchLabels',
      nodeTolerations: 'NodeTolerations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeMatchLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      nodeTolerations: { 'type': 'array', 'itemType': UpdateResourceRequestSelfManagedResourceOptionsNodeTolerations },
    };
  }

  validate() {
    if(this.nodeMatchLabels) {
      $dara.Model.validateMap(this.nodeMatchLabels);
    }
    if(Array.isArray(this.nodeTolerations)) {
      $dara.Model.validateArray(this.nodeTolerations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerRequestBehaviorOnZero extends $dara.Model {
  /**
   * @remarks
   * The time window that is required before the number of instances is reduced to 0. Default value: 600. The number of instances can be reduced to 0 only if no request is available or no traffic exists in the specified time window.
   * 
   * @example
   * 600
   */
  scaleDownGracePeriodSeconds?: number;
  /**
   * @remarks
   * The number of instances that you want to create at a time if the number of instances is scaled out from 0. Default value: 1.
   * 
   * @example
   * 1
   */
  scaleUpActivationReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      scaleDownGracePeriodSeconds: 'scaleDownGracePeriodSeconds',
      scaleUpActivationReplicas: 'scaleUpActivationReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleDownGracePeriodSeconds: 'number',
      scaleUpActivationReplicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerRequestBehaviorScaleDown extends $dara.Model {
  /**
   * @remarks
   * The time window that is required before the scale-in operation is performed. Default value: 300. The scale-in operation can be performed only if the specified metric drops below the threshold in the specified time window.
   * 
   * @example
   * 300
   */
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      stabilizationWindowSeconds: 'stabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stabilizationWindowSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerRequestBehaviorScaleUp extends $dara.Model {
  /**
   * @remarks
   * The time window that is required before the scale-out operation is performed. Default value: 0. The scale-out operation can be performed only if the specified metric exceeds the specified threshold in the specified time window.
   * 
   * @example
   * 0
   */
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      stabilizationWindowSeconds: 'stabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stabilizationWindowSeconds: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerRequestBehavior extends $dara.Model {
  /**
   * @remarks
   * The operation that reduces the number of instances to 0.
   */
  onZero?: UpdateServiceAutoScalerRequestBehaviorOnZero;
  /**
   * @remarks
   * The scale-in operation.
   */
  scaleDown?: UpdateServiceAutoScalerRequestBehaviorScaleDown;
  /**
   * @remarks
   * The scale-out operation.
   */
  scaleUp?: UpdateServiceAutoScalerRequestBehaviorScaleUp;
  static names(): { [key: string]: string } {
    return {
      onZero: 'onZero',
      scaleDown: 'scaleDown',
      scaleUp: 'scaleUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onZero: UpdateServiceAutoScalerRequestBehaviorOnZero,
      scaleDown: UpdateServiceAutoScalerRequestBehaviorScaleDown,
      scaleUp: UpdateServiceAutoScalerRequestBehaviorScaleUp,
    };
  }

  validate() {
    if(this.onZero && typeof (this.onZero as any).validate === 'function') {
      (this.onZero as any).validate();
    }
    if(this.scaleDown && typeof (this.scaleDown as any).validate === 'function') {
      (this.scaleDown as any).validate();
    }
    if(this.scaleUp && typeof (this.scaleUp as any).validate === 'function') {
      (this.scaleUp as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerRequestScaleStrategies extends $dara.Model {
  /**
   * @remarks
   * The name of the metric for triggering auto scaling. Valid values:
   * 
   * *   qps: the queries per second (QPS) for an individual instance.
   * *   cpu: the CPU utilization.
   * 
   * This parameter is required.
   * 
   * @example
   * qps
   */
  metricName?: string;
  /**
   * @remarks
   * The service for which the metric is specified. If you do not set this parameter, the current service is specified by default.
   * 
   * @example
   * demo_svc
   */
  service?: string;
  /**
   * @remarks
   * The threshold of the metric that triggers auto scaling.
   * 
   * *   If you set metricName to QPS, scale-out is triggered when the average QPS for a single instance is greater than this threshold.
   * *   If you set metricName to CPU, scale-out is triggered when the average CPU utilization for a single instance is greater than this threshold.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      metricName: 'metricName',
      service: 'service',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      service: 'string',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceCronScalerRequestScaleJobs extends $dara.Model {
  /**
   * @remarks
   * The name of the CronHPA job.
   * 
   * @example
   * scale-job-1
   */
  name?: string;
  /**
   * @remarks
   * The cron expression that is used to configure the execution time of the CronHPA job. For more information about how to configure cron expressions, see **Description of special characters** in this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 18 * * * *
   */
  schedule?: string;
  /**
   * @remarks
   * The number of instances that you want to configure for the CronHPA job.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  targetSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      schedule: 'Schedule',
      targetSize: 'TargetSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schedule: 'string',
      targetSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualResourceRequestResources extends $dara.Model {
  /**
   * @remarks
   * The instance type of the public resource group.
   * 
   * >  You must specify one and only one of the InstanceType, ResourceId, and QuotaId parameters.
   * 
   * @example
   * ecs.s6-c1m2.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The priority of resource scheduling. A greater number indicates a higher priority.
   * 
   * @example
   * 6
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the Lingjun resource quota.
   * 
   * >  You must specify one and only one of the InstanceType, ResourceId, and QuotaId parameters.
   * 
   * @example
   * quota185lqf994k6
   */
  quotaId?: string;
  /**
   * @remarks
   * The region in which the resource resides.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the dedicated resource group. For information about how to obtain the ID of a dedicated resource group, see [ListResources](https://help.aliyun.com/document_detail/412133.html).
   * 
   * >  You must specify one and only one of the InstanceType, ResourceId, and QuotaId parameters.
   * 
   * @example
   * eas-r-g55ieatgg3butwrn7a
   */
  resourceId?: string;
  /**
   * @remarks
   * The maximum price of preemptible instances in a public resource group.
   * 
   * >  If you leave this parameter empty, preemptible instances are not used.
   * 
   * @example
   * 10.05
   */
  spotPriceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      priority: 'Priority',
      quotaId: 'QuotaId',
      region: 'Region',
      resourceId: 'ResourceId',
      spotPriceLimit: 'SpotPriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      priority: 'number',
      quotaId: 'string',
      region: 'string',
      resourceId: 'string',
      spotPriceLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContainerInfo extends $dara.Model {
  currentReaon?: string;
  currentStatus?: string;
  currentTimestamp?: string;
  image?: string;
  lastReason?: string;
  lastStatus?: string;
  lastTimestamp?: string;
  name?: string;
  port?: number;
  ready?: boolean;
  restartCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentReaon: 'CurrentReaon',
      currentStatus: 'CurrentStatus',
      currentTimestamp: 'CurrentTimestamp',
      image: 'Image',
      lastReason: 'LastReason',
      lastStatus: 'LastStatus',
      lastTimestamp: 'LastTimestamp',
      name: 'Name',
      port: 'Port',
      ready: 'Ready',
      restartCount: 'RestartCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentReaon: 'string',
      currentStatus: 'string',
      currentTimestamp: 'string',
      image: 'string',
      lastReason: 'string',
      lastStatus: 'string',
      lastTimestamp: 'string',
      name: 'string',
      port: 'number',
      ready: 'boolean',
      restartCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Group extends $dara.Model {
  accessToken?: string;
  clusterId?: string;
  createTime?: string;
  internetEndpoint?: string;
  intranetEndpoint?: string;
  name?: string;
  queueService?: string;
  trafficMode?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      name: 'Name',
      queueService: 'QueueService',
      trafficMode: 'TrafficMode',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      clusterId: 'string',
      createTime: 'string',
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      name: 'string',
      queueService: 'string',
      trafficMode: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Instance extends $dara.Model {
  /**
   * @example
   * 0.444
   */
  currentAmount?: number;
  /**
   * @example
   * 192.168.1.100
   */
  externalIP?: string;
  /**
   * @example
   * 8080
   */
  externalInstancePort?: number;
  hostIP?: string;
  hostName?: string;
  innerIP?: string;
  instanceName?: string;
  instancePort?: number;
  /**
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  /**
   * @example
   * false
   */
  isSpot?: boolean;
  /**
   * @example
   * false
   */
  isolated?: boolean;
  lastState?: { [key: string]: any }[];
  namespace?: string;
  /**
   * @example
   * 2.2
   */
  originalAmount?: number;
  readyProcesses?: number;
  reason?: string;
  /**
   * @example
   * PublicResource
   */
  resourceType?: string;
  restartCount?: number;
  /**
   * @example
   * Standard
   */
  role?: string;
  /**
   * @deprecated
   */
  startAt?: string;
  startTime?: string;
  status?: string;
  /**
   * @example
   * 192.168.0.39
   */
  tenantHostIP?: string;
  /**
   * @example
   * 192.168.0.39
   */
  tenantInstanceIP?: string;
  totalProcesses?: number;
  /**
   * @example
   * cn-shanghai-a
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      currentAmount: 'CurrentAmount',
      externalIP: 'ExternalIP',
      externalInstancePort: 'ExternalInstancePort',
      hostIP: 'HostIP',
      hostName: 'HostName',
      innerIP: 'InnerIP',
      instanceName: 'InstanceName',
      instancePort: 'InstancePort',
      instanceType: 'InstanceType',
      isSpot: 'IsSpot',
      isolated: 'Isolated',
      lastState: 'LastState',
      namespace: 'Namespace',
      originalAmount: 'OriginalAmount',
      readyProcesses: 'ReadyProcesses',
      reason: 'Reason',
      resourceType: 'ResourceType',
      restartCount: 'RestartCount',
      role: 'Role',
      startAt: 'StartAt',
      startTime: 'StartTime',
      status: 'Status',
      tenantHostIP: 'TenantHostIP',
      tenantInstanceIP: 'TenantInstanceIP',
      totalProcesses: 'TotalProcesses',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentAmount: 'number',
      externalIP: 'string',
      externalInstancePort: 'number',
      hostIP: 'string',
      hostName: 'string',
      innerIP: 'string',
      instanceName: 'string',
      instancePort: 'number',
      instanceType: 'string',
      isSpot: 'boolean',
      isolated: 'boolean',
      lastState: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      namespace: 'string',
      originalAmount: 'number',
      readyProcesses: 'number',
      reason: 'string',
      resourceType: 'string',
      restartCount: 'number',
      role: 'string',
      startAt: 'string',
      startTime: 'string',
      status: 'string',
      tenantHostIP: 'string',
      tenantInstanceIP: 'string',
      totalProcesses: 'number',
      zone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.lastState)) {
      $dara.Model.validateArray(this.lastState);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Resource extends $dara.Model {
  clusterId?: string;
  cpuCount?: number;
  createTime?: string;
  extraData?: { [key: string]: any };
  gpuCount?: number;
  instanceCount?: number;
  message?: string;
  postPaidInstanceCount?: number;
  prePaidInstanceCount?: number;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  status?: string;
  updateTime?: string;
  vendor?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      cpuCount: 'CpuCount',
      createTime: 'CreateTime',
      extraData: 'ExtraData',
      gpuCount: 'GpuCount',
      instanceCount: 'InstanceCount',
      message: 'Message',
      postPaidInstanceCount: 'PostPaidInstanceCount',
      prePaidInstanceCount: 'PrePaidInstanceCount',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      status: 'Status',
      updateTime: 'UpdateTime',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      cpuCount: 'number',
      createTime: 'string',
      extraData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gpuCount: 'number',
      instanceCount: 'number',
      message: 'string',
      postPaidInstanceCount: 'number',
      prePaidInstanceCount: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      status: 'string',
      updateTime: 'string',
      vendor: 'string',
    };
  }

  validate() {
    if(this.extraData) {
      $dara.Model.validateMap(this.extraData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceInstance extends $dara.Model {
  arch?: string;
  autoRenewal?: boolean;
  chargeType?: string;
  createTime?: string;
  expiredTime?: string;
  instanceCpuCount?: number;
  instanceGpuCount?: number;
  instanceGpuMemory?: string;
  instanceId?: string;
  instanceIp?: string;
  instanceMemory?: string;
  instanceName?: string;
  instanceStatus?: string;
  instanceSystemDiskSize?: number;
  instanceTenantIp?: string;
  instanceType?: string;
  instanceUsedCpu?: number;
  instanceUsedGpu?: number;
  instanceUsedGpuMemory?: string;
  instanceUsedMemory?: string;
  labels?: ResourceInstanceLabels[];
  region?: string;
  resourceId?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      arch: 'Arch',
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      instanceCpuCount: 'InstanceCpuCount',
      instanceGpuCount: 'InstanceGpuCount',
      instanceGpuMemory: 'InstanceGpuMemory',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instanceMemory: 'InstanceMemory',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceSystemDiskSize: 'InstanceSystemDiskSize',
      instanceTenantIp: 'InstanceTenantIp',
      instanceType: 'InstanceType',
      instanceUsedCpu: 'InstanceUsedCpu',
      instanceUsedGpu: 'InstanceUsedGpu',
      instanceUsedGpuMemory: 'InstanceUsedGpuMemory',
      instanceUsedMemory: 'InstanceUsedMemory',
      labels: 'Labels',
      region: 'Region',
      resourceId: 'ResourceId',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arch: 'string',
      autoRenewal: 'boolean',
      chargeType: 'string',
      createTime: 'string',
      expiredTime: 'string',
      instanceCpuCount: 'number',
      instanceGpuCount: 'number',
      instanceGpuMemory: 'string',
      instanceId: 'string',
      instanceIp: 'string',
      instanceMemory: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceSystemDiskSize: 'number',
      instanceTenantIp: 'string',
      instanceType: 'string',
      instanceUsedCpu: 'number',
      instanceUsedGpu: 'number',
      instanceUsedGpuMemory: 'string',
      instanceUsedMemory: 'string',
      labels: { 'type': 'array', 'itemType': ResourceInstanceLabels },
      region: 'string',
      resourceId: 'string',
      zone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceInstanceWorker extends $dara.Model {
  cpuLimit?: number;
  cpuRequest?: number;
  gpuLimit?: number;
  gpuRequest?: number;
  memoryLimit?: number;
  memoryRquest?: number;
  name?: string;
  ready?: boolean;
  restartCount?: number;
  serviceName?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cpuLimit: 'CpuLimit',
      cpuRequest: 'CpuRequest',
      gpuLimit: 'GpuLimit',
      gpuRequest: 'GpuRequest',
      memoryLimit: 'MemoryLimit',
      memoryRquest: 'MemoryRquest',
      name: 'Name',
      ready: 'Ready',
      restartCount: 'RestartCount',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuLimit: 'number',
      cpuRequest: 'number',
      gpuLimit: 'number',
      gpuRequest: 'number',
      memoryLimit: 'number',
      memoryRquest: 'number',
      name: 'string',
      ready: 'boolean',
      restartCount: 'number',
      serviceName: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Service extends $dara.Model {
  accessToken?: string;
  appConfig?: string;
  appSpecName?: string;
  appType?: string;
  appVersion?: string;
  callerUid?: string;
  cpu?: number;
  createTime?: string;
  currentVersion?: number;
  extraData?: string;
  gateway?: string;
  gpu?: number;
  image?: string;
  internetEndpoint?: string;
  intranetEndpoint?: string;
  labels?: ServiceLabels[];
  latestVersion?: number;
  memory?: number;
  message?: string;
  namespace?: string;
  parentUid?: string;
  pendingInstance?: number;
  quotaId?: string;
  reason?: string;
  region?: string;
  requestId?: string;
  resource?: string;
  resourceAlias?: string;
  role?: string;
  roleAttrs?: string;
  runningInstance?: number;
  safetyLock?: string;
  secondaryInternetEndpoint?: string;
  secondaryIntranetEndpoint?: string;
  serviceConfig?: string;
  serviceGroup?: string;
  serviceId?: string;
  serviceName?: string;
  serviceUid?: string;
  source?: string;
  status?: string;
  totalInstance?: number;
  trafficState?: string;
  updateTime?: string;
  weight?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      appConfig: 'AppConfig',
      appSpecName: 'AppSpecName',
      appType: 'AppType',
      appVersion: 'AppVersion',
      callerUid: 'CallerUid',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      currentVersion: 'CurrentVersion',
      extraData: 'ExtraData',
      gateway: 'Gateway',
      gpu: 'Gpu',
      image: 'Image',
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      memory: 'Memory',
      message: 'Message',
      namespace: 'Namespace',
      parentUid: 'ParentUid',
      pendingInstance: 'PendingInstance',
      quotaId: 'QuotaId',
      reason: 'Reason',
      region: 'Region',
      requestId: 'RequestId',
      resource: 'Resource',
      resourceAlias: 'ResourceAlias',
      role: 'Role',
      roleAttrs: 'RoleAttrs',
      runningInstance: 'RunningInstance',
      safetyLock: 'SafetyLock',
      secondaryInternetEndpoint: 'SecondaryInternetEndpoint',
      secondaryIntranetEndpoint: 'SecondaryIntranetEndpoint',
      serviceConfig: 'ServiceConfig',
      serviceGroup: 'ServiceGroup',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceUid: 'ServiceUid',
      source: 'Source',
      status: 'Status',
      totalInstance: 'TotalInstance',
      trafficState: 'TrafficState',
      updateTime: 'UpdateTime',
      weight: 'Weight',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      appConfig: 'string',
      appSpecName: 'string',
      appType: 'string',
      appVersion: 'string',
      callerUid: 'string',
      cpu: 'number',
      createTime: 'string',
      currentVersion: 'number',
      extraData: 'string',
      gateway: 'string',
      gpu: 'number',
      image: 'string',
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      labels: { 'type': 'array', 'itemType': ServiceLabels },
      latestVersion: 'number',
      memory: 'number',
      message: 'string',
      namespace: 'string',
      parentUid: 'string',
      pendingInstance: 'number',
      quotaId: 'string',
      reason: 'string',
      region: 'string',
      requestId: 'string',
      resource: 'string',
      resourceAlias: 'string',
      role: 'string',
      roleAttrs: 'string',
      runningInstance: 'number',
      safetyLock: 'string',
      secondaryInternetEndpoint: 'string',
      secondaryIntranetEndpoint: 'string',
      serviceConfig: 'string',
      serviceGroup: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceUid: 'string',
      source: 'string',
      status: 'string',
      totalInstance: 'number',
      trafficState: 'string',
      updateTime: 'string',
      weight: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachGatewayDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The custom domain name information.
   * 
   * This parameter is required.
   */
  customDomain?: AttachGatewayDomainRequestCustomDomain;
  static names(): { [key: string]: string } {
    return {
      customDomain: 'CustomDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomain: AttachGatewayDomainRequestCustomDomain,
    };
  }

  validate() {
    if(this.customDomain && typeof (this.customDomain as any).validate === 'function') {
      (this.customDomain as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachGatewayDomainShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The custom domain name information.
   * 
   * This parameter is required.
   */
  customDomainShrink?: string;
  static names(): { [key: string]: string } {
    return {
      customDomainShrink: 'CustomDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomainShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachGatewayDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the private gateway. To obtain the private gateway ID, see the GatewayId parameter in the response parameters of the [ListGateway](https://apiworkbench.aliyun-inc.com/document/eas/2021-07-01/ListGateway?spm=openapi-amp.newDocPublishment.0.0.765e281fL2IcjJ\\&ampEnv=online) operation.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Successfully update custom endpoint for gateway gw-1uhcqmsc7x22******
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachGatewayDomainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachGatewayDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachGatewayDomainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The label of the service to be cloned.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The request body. For more information, see [CreateService](https://help.aliyun.com/document_detail/412086.html).
   * 
   * @example
   * {   "name": "foo",   "model_path": "http://path/to/model.tar.gz",   "processor": "tensorflow_cpu",   "metadata": {     "instance": 2,     "memory": 7000,     "cpu": 4   } }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneServiceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The label of the service to be cloned.
   */
  labelsShrink?: string;
  /**
   * @remarks
   * The request body. For more information, see [CreateService](https://help.aliyun.com/document_detail/412086.html).
   * 
   * @example
   * {   "name": "foo",   "model_path": "http://path/to/model.tar.gz",   "processor": "tensorflow_cpu",   "metadata": {     "instance": 2,     "memory": 7000,     "cpu": 4   } }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      labelsShrink: 'Labels',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelsShrink: 'string',
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The public endpoint of the service.
   * 
   * @example
   * http://10123*****.cn-shanghai.aliyuncs.com/api/predict/echo
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The private endpoint of the service.
   * 
   * @example
   * http://10123*****.vpc.cn-shanghai.aliyuncs.com/api/predict/echo
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * eas-m-r9knx7n9guf2p*****
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  /**
   * @remarks
   * The service status.
   * 
   * @example
   * Creating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CloneServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CommitServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CommitServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway.
   * 
   * This parameter is required.
   */
  aclPolicyList?: CreateAclPolicyRequestAclPolicyList[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). For more information about how to obtain the VPC ID, see DescribeVpcs.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclPolicyList: 'AclPolicyList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyList: { 'type': 'array', 'itemType': CreateAclPolicyRequestAclPolicyList },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclPolicyList)) {
      $dara.Model.validateArray(this.aclPolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway.
   * 
   * This parameter is required.
   */
  aclPolicyListShrink?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). For more information about how to obtain the VPC ID, see DescribeVpcs.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclPolicyListShrink: 'AclPolicyList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyListShrink: 'string',
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

export class CreateAclPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successfully add acl policy for gateway
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAclPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAclPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * abcdef
   */
  quotaId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  /**
   * @remarks
   * The application service type.
   * 
   * Valid values:
   * 
   * *   LLM
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * LLM
   */
  appType?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * v1
   */
  appVersion?: string;
  /**
   * @remarks
   * The additional configurations that are required for service deployment.
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The number of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  replicas?: number;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  /**
   * @remarks
   * The service specifications. Valid values:
   * 
   * *   llama_7b_fp16
   * *   llama_7b_int8
   * *   llama_13b_fp16
   * *   llama_7b_int8
   * *   chatglm_6b_fp16
   * *   chatglm_6b_int8
   * *   chatglm2_6b_fp16
   * *   baichuan_7b_int8
   * *   baichuan_13b_fp16
   * *   baichuan_7b_fp16
   * 
   * This parameter is required.
   * 
   * @example
   * llama_7b_fp16
   */
  serviceSpec?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      workspaceId: 'WorkspaceId',
      appType: 'AppType',
      appVersion: 'AppVersion',
      config: 'Config',
      replicas: 'Replicas',
      serviceName: 'ServiceName',
      serviceSpec: 'ServiceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      workspaceId: 'string',
      appType: 'string',
      appVersion: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      replicas: 'number',
      serviceName: 'string',
      serviceSpec: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The public endpoint of the service.
   * 
   * @example
   * http://pai-eas.cn-shanghai.****
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The internal endpoint of the service.
   * 
   * @example
   * http://pai-eas-vpc.cn-shanghai.****
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * The region ID of the service.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * eas-m-aaxxxddf
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  /**
   * @remarks
   * The service state.
   * 
   * @example
   * Creating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      region: 'Region',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      region: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateAppServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBenchmarkTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The request body. The body includes the parameters that are set to create a stress testing task.
   * 
   * @example
   * {
   *     "base": {
   *         "duration": 600
   *     },
   *     "service": {
   *         "serviceName": "test_service",
   *         "requestToken": "test_token"
   *     },
   *     "data": {
   *         "path": "https://larec-benchmark-cd.oss-cn-chengdu.aliyuncs.com/youbei/sv_dbmtl/data/youbei.warmup.tf.bin",
   *         "dataType": "binary"
   *     },
   *     "optional": {
   *        "maxRt": 100
   *     }
   * }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBenchmarkTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmark  task [foo] is Creating
   */
  message?: string;
  /**
   * @remarks
   * The ID of the region where the stress testing task is performed.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82********
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the stress testing task.
   * 
   * @example
   * benchmark-larec-test-1076
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      region: 'Region',
      requestId: 'RequestId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      region: 'string',
      requestId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBenchmarkTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBenchmarkTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBenchmarkTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The resource group ID. To obtain a resource group ID, see the ResourceId field in the response of the [ListResources](https://help.aliyun.com/document_detail/412133.html) operation.
   * 
   * @example
   * eas-r-4gt8twzwllfo******
   */
  resourceName?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   false (default)
   * *   true
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PrePaid: subscription.
   * *   PostPaid: pay-as-you-go.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * Specifies whether to enable Internet access. Default value: false.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableInternet?: boolean;
  /**
   * @remarks
   * Specifies whether to enable private access. Default value: true.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableIntranet?: boolean;
  /**
   * @remarks
   * The instance type used by the private gateway. Valid values:
   * 
   * *   2c4g
   * *   4c8g
   * *   8c16g
   * *   16c32g
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.c6.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The alias of the private gateway.
   * 
   * @example
   * mygateway1
   */
  name?: string;
  /**
   * @remarks
   * The number of nodes in the private gateway.
   * 
   * @example
   * 2
   */
  replicas?: number;
  static names(): { [key: string]: string } {
    return {
      resourceName: 'ResourceName',
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      enableInternet: 'EnableInternet',
      enableIntranet: 'EnableIntranet',
      instanceType: 'InstanceType',
      name: 'Name',
      replicas: 'Replicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceName: 'string',
      autoRenewal: 'boolean',
      chargeType: 'string',
      enableInternet: 'boolean',
      enableIntranet: 'boolean',
      instanceType: 'string',
      name: 'string',
      replicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The region ID of the private gateway.
   * 
   * @example
   * cn-hangzhou
   */
  clusterId?: string;
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successfully create gateway.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGatewayResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayIntranetLinkedVpcRequest extends $dara.Model {
  enableAuthoritativeDns?: boolean;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vbqn2at0kljjxxxx****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      enableAuthoritativeDns: 'EnableAuthoritativeDns',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAuthoritativeDns: 'boolean',
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

export class CreateGatewayIntranetLinkedVpcResponseBody extends $dara.Model {
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successfully add intranet linked vpc for gateway
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayIntranetLinkedVpcResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewayIntranetLinkedVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGatewayIntranetLinkedVpcResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayIntranetLinkedVpcPeerRequest extends $dara.Model {
  /**
   * @remarks
   * The list of VPC peers.
   */
  peerVpcs?: CreateGatewayIntranetLinkedVpcPeerRequestPeerVpcs[];
  /**
   * @remarks
   * The VPC ID. To obtain the VPC ID, see [ListGatewayIntranetLinkedVpc](https://help.aliyun.com/document_detail/2621223.html).
   * 
   * @example
   * vpc-2zetuli9ws0qgjd******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      peerVpcs: 'PeerVpcs',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peerVpcs: { 'type': 'array', 'itemType': CreateGatewayIntranetLinkedVpcPeerRequestPeerVpcs },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.peerVpcs)) {
      $dara.Model.validateArray(this.peerVpcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayIntranetLinkedVpcPeerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of VPC peers.
   */
  peerVpcsShrink?: string;
  /**
   * @remarks
   * The VPC ID. To obtain the VPC ID, see [ListGatewayIntranetLinkedVpc](https://help.aliyun.com/document_detail/2621223.html).
   * 
   * @example
   * vpc-2zetuli9ws0qgjd******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      peerVpcsShrink: 'PeerVpcs',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peerVpcsShrink: 'string',
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

export class CreateGatewayIntranetLinkedVpcPeerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the private gateway.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * Successfully add intranet linked vpc Peer for gateway
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayIntranetLinkedVpcPeerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewayIntranetLinkedVpcPeerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGatewayIntranetLinkedVpcPeerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PrePaid: the subscription billing method.
   * *   PostPaid: the pay-as-you-go billing method.
   * 
   * >  This parameter is required when the ResourceType parameter is set to Dedicated.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of ECS instances.
   * 
   * >  This parameter is required when the ResourceType parameter is set to Dedicated.
   * 
   * @example
   * 5
   */
  ecsInstanceCount?: number;
  /**
   * @remarks
   * The type of the Elastic Compute Service (ECS) instance.
   * 
   * >  This parameter is required when the ResourceType parameter is set to Dedicated.
   * 
   * @example
   * ecs.c6.8xlarge
   */
  ecsInstanceType?: string;
  /**
   * @remarks
   * The custom tag.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   Dedicated: the dedicated resource group.
   * *   SelfManaged: the self-managed resource group.
   * 
   * >  If you use a self-managed resource group, you must configure a whitelist.
   * 
   * @example
   * Dedicated
   */
  resourceType?: string;
  /**
   * @remarks
   * The configurations of the self-managed resource group.
   */
  selfManagedResourceOptions?: CreateResourceRequestSelfManagedResourceOptions;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values: 200 to 2000. Default value: 200.
   * 
   * @example
   * 200
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The ID of the zone in which the instance resides.
   * 
   * @example
   * cn-shanghai-f
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      ecsInstanceCount: 'EcsInstanceCount',
      ecsInstanceType: 'EcsInstanceType',
      labels: 'Labels',
      resourceType: 'ResourceType',
      selfManagedResourceOptions: 'SelfManagedResourceOptions',
      systemDiskSize: 'SystemDiskSize',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      chargeType: 'string',
      ecsInstanceCount: 'number',
      ecsInstanceType: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resourceType: 'string',
      selfManagedResourceOptions: CreateResourceRequestSelfManagedResourceOptions,
      systemDiskSize: 'number',
      zone: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.selfManagedResourceOptions && typeof (this.selfManagedResourceOptions as any).validate === 'function') {
      (this.selfManagedResourceOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to which the resource group belongs.
   * 
   * @example
   * cn-shanghai
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The user ID (UID) of the resource group owner.
   * 
   * @example
   * 14401087478****
   */
  ownerUid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * eas-r-h7lcw24dyqztwxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * MyResource
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceIds: 'InstanceIds',
      ownerUid: 'OwnerUid',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ownerUid: 'string',
      requestId: 'string',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PrePaid: subscription.
   * *   PostPaid: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of instances that you want to create. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  ecsInstanceCount?: number;
  /**
   * @remarks
   * The type of the Elastic Compute Service (ECS) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.s6-c1m2.xlarge
   */
  ecsInstanceType?: string;
  /**
   * @remarks
   * The custom service tag.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values: 200 to 2000. Default value: 200.
   * 
   * @example
   * 200
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The user-defined information. This parameter is not in use.
   * 
   * @example
   * x112223333
   */
  userData?: string;
  /**
   * @remarks
   * The zone to which the instance belongs.
   * 
   * @example
   * cn-shanghai-f
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      ecsInstanceCount: 'EcsInstanceCount',
      ecsInstanceType: 'EcsInstanceType',
      labels: 'Labels',
      systemDiskSize: 'SystemDiskSize',
      userData: 'UserData',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      chargeType: 'string',
      ecsInstanceCount: 'number',
      ecsInstanceType: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      systemDiskSize: 'number',
      userData: 'string',
      zone: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Create 5 new ecs instance(s) in resource [eas-r-asdasdasd] successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateResourceInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceLogRequest extends $dara.Model {
  /**
   * @remarks
   * The Logstore of Log Service. For more information about how to query a Logstore, see [ListLogStores](https://help.aliyun.com/document_detail/426970.html).
   * 
   * This parameter is required.
   * 
   * @example
   * access_log
   */
  logStore?: string;
  /**
   * @remarks
   * The Log Service project that is associated with the resource group. For more information about how to query the project, see [ListProject](https://help.aliyun.com/document_detail/74955.html).
   * 
   * This parameter is required.
   * 
   * @example
   * eas-r-asdasdasd-sls
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Resource [eas-r-asdasdasd] is deleted.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateResourceLogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enter development mode.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  develop?: string;
  /**
   * @remarks
   * The custom label.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  /**
   * @remarks
   * The request body. For more information about the key request parameters, see **Table 1. Request body parameters** and **Table 2. Metadata parameters**. For more information about all related parameters, see [Parameters of model services](https://help.aliyun.com/document_detail/450525.html).
   * 
   * @example
   * Service deployment by using an image:
   * {
   *   "name": "foo",
   *   "metadata": {
   *     "instance": 2,
   *     "memory": 7000,
   *     "cpu": 4
   *     },
   *   "containers": [
   *     {
   *       "image": "****",
   *       "script": "**** --listen=0.0.0.0 --server_port=8000 --headless",
   *       "port": 8000
   *     }
   *   ],
   *   "storage": [
   *     {
   *       "oss": {
   *         "path": "oss://examplebuket/data111/",
   *         "readOnly": false
   *       },
   *       "properties": {
   *         "resource_type": "model"
   *       },
   *       "mount_path": "/data"
   *     }
   *   ]
   * }
   * AI-Web application deployment by using an image:
   * {
   *   "name": "foo",
   *   "metadata": {
   *     "instance": 1,
   *     "memory": 7000,
   *     "cpu": 4,
   *     "enable_webservice": true
   *   },
   *   "containers": [
   *     {
   *       "image": "****",
   *       "script": "**** --listen=0.0.0.0 --server_port=8000 --headless",
   *       "port": 8000
   *     }
   *   ],
   *   "storage": [
   *     {
   *       "oss": {
   *         "path": "oss://examplebucket/data111/",
   *         "readOnly": false
   *       },
   *       "properties": {
   *       "resource_type": "model"
   *       },
   *       "mount_path": "/data"
   *     }
   *   ]
   * }
   * Service deployment by using models and processors:
   * {
   *   "metadata": {
   *     "instance": 1,
   *     "memory": 7000,
   *     "cpu": 4
   *   },
   *   "name": "foo",
   *   "model_config": {},
   *   "processor_type": "python",
   *   "processor_path": "oss://****",
   *   "processor_entry": "a.py",
   *   "model_path": "oss://****"
   * }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      develop: 'Develop',
      labels: 'Labels',
      workspaceId: 'WorkspaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      develop: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspaceId: 'string',
      body: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enter development mode.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  develop?: string;
  /**
   * @remarks
   * The custom label.
   */
  labelsShrink?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  /**
   * @remarks
   * The request body. For more information about the key request parameters, see **Table 1. Request body parameters** and **Table 2. Metadata parameters**. For more information about all related parameters, see [Parameters of model services](https://help.aliyun.com/document_detail/450525.html).
   * 
   * @example
   * Service deployment by using an image:
   * {
   *   "name": "foo",
   *   "metadata": {
   *     "instance": 2,
   *     "memory": 7000,
   *     "cpu": 4
   *     },
   *   "containers": [
   *     {
   *       "image": "****",
   *       "script": "**** --listen=0.0.0.0 --server_port=8000 --headless",
   *       "port": 8000
   *     }
   *   ],
   *   "storage": [
   *     {
   *       "oss": {
   *         "path": "oss://examplebuket/data111/",
   *         "readOnly": false
   *       },
   *       "properties": {
   *         "resource_type": "model"
   *       },
   *       "mount_path": "/data"
   *     }
   *   ]
   * }
   * AI-Web application deployment by using an image:
   * {
   *   "name": "foo",
   *   "metadata": {
   *     "instance": 1,
   *     "memory": 7000,
   *     "cpu": 4,
   *     "enable_webservice": true
   *   },
   *   "containers": [
   *     {
   *       "image": "****",
   *       "script": "**** --listen=0.0.0.0 --server_port=8000 --headless",
   *       "port": 8000
   *     }
   *   ],
   *   "storage": [
   *     {
   *       "oss": {
   *         "path": "oss://examplebucket/data111/",
   *         "readOnly": false
   *       },
   *       "properties": {
   *       "resource_type": "model"
   *       },
   *       "mount_path": "/data"
   *     }
   *   ]
   * }
   * Service deployment by using models and processors:
   * {
   *   "metadata": {
   *     "instance": 1,
   *     "memory": 7000,
   *     "cpu": 4
   *   },
   *   "name": "foo",
   *   "model_config": {},
   *   "processor_type": "python",
   *   "processor_path": "oss://****",
   *   "processor_entry": "a.py",
   *   "model_path": "oss://****"
   * }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      develop: 'Develop',
      labelsShrink: 'Labels',
      workspaceId: 'WorkspaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      develop: 'string',
      labelsShrink: 'string',
      workspaceId: 'string',
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The public endpoint of the created service.
   * 
   * @example
   * http://pai-eas.vpc.cn-shanghai.****
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The internal endpoint of the created service.
   * 
   * @example
   * http://pai-eas.cn-shanghai.****
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * The region ID of the created service.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the created service.
   * 
   * @example
   * eas-m-aaxxxddf
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the created service.
   * 
   * @example
   * yourname
   */
  serviceName?: string;
  /**
   * @remarks
   * The service state.
   * 
   * @example
   * Creating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      region: 'Region',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      region: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequest extends $dara.Model {
  /**
   * @remarks
   * The Autoscaler operation.
   */
  behavior?: CreateServiceAutoScalerRequestBehavior;
  /**
   * @remarks
   * The maximum number of instances in the service. The value of max must be greater than the value of min.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  max?: number;
  /**
   * @remarks
   * The minimum number of instances in the service.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  min?: number;
  /**
   * @remarks
   * The service for which the metric is specified. If you do not set this parameter, the current service is specified by default.
   * 
   * This parameter is required.
   */
  scaleStrategies?: CreateServiceAutoScalerRequestScaleStrategies[];
  static names(): { [key: string]: string } {
    return {
      behavior: 'behavior',
      max: 'max',
      min: 'min',
      scaleStrategies: 'scaleStrategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      behavior: CreateServiceAutoScalerRequestBehavior,
      max: 'number',
      min: 'number',
      scaleStrategies: { 'type': 'array', 'itemType': CreateServiceAutoScalerRequestScaleStrategies },
    };
  }

  validate() {
    if(this.behavior && typeof (this.behavior as any).validate === 'function') {
      (this.behavior as any).validate();
    }
    if(Array.isArray(this.scaleStrategies)) {
      $dara.Model.validateArray(this.scaleStrategies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Succeed to auto scale service [foo]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceAutoScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceAutoScalerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceCronScalerRequest extends $dara.Model {
  /**
   * @remarks
   * The points in time that are excluded when you schedule a CronHPA job. The points in time must be specified by using a cron expression.
   */
  excludeDates?: string[];
  /**
   * @remarks
   * The description of the CronHPA job.
   * 
   * This parameter is required.
   */
  scaleJobs?: CreateServiceCronScalerRequestScaleJobs[];
  static names(): { [key: string]: string } {
    return {
      excludeDates: 'ExcludeDates',
      scaleJobs: 'ScaleJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeDates: { 'type': 'array', 'itemType': 'string' },
      scaleJobs: { 'type': 'array', 'itemType': CreateServiceCronScalerRequestScaleJobs },
    };
  }

  validate() {
    if(Array.isArray(this.excludeDates)) {
      $dara.Model.validateArray(this.excludeDates);
    }
    if(Array.isArray(this.scaleJobs)) {
      $dara.Model.validateArray(this.scaleJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceCronScalerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Create cron scaler for service [foo] successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceCronScalerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceCronScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceCronScalerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceMirrorRequest extends $dara.Model {
  /**
   * @remarks
   * The percentage of the traffic that is mirrored to the destination service. Valid values: 0 to 100.
   * 
   * @example
   * 30
   */
  ratio?: number;
  /**
   * @remarks
   * The instances.
   */
  target?: string[];
  static names(): { [key: string]: string } {
    return {
      ratio: 'Ratio',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ratio: 'number',
      target: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.target)) {
      $dara.Model.validateArray(this.target);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceMirrorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Traffic mirroring is ON for service [foo] in region [cn-shanghia], ratio [70%]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceMirrorResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceMirrorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceMirrorResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the retention period of preemptible instances.
   * 
   * @example
   * true
   */
  disableSpotProtectionPeriod?: boolean;
  /**
   * @remarks
   * The resources in the virtual resource group.
   */
  resources?: CreateVirtualResourceRequestResources[];
  /**
   * @remarks
   * The name of the virtual resource group. Default value: the ID of the virtual resource group.
   * 
   * @example
   * MyVirtualResource
   */
  virtualResourceName?: string;
  static names(): { [key: string]: string } {
    return {
      disableSpotProtectionPeriod: 'DisableSpotProtectionPeriod',
      resources: 'Resources',
      virtualResourceName: 'VirtualResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableSpotProtectionPeriod: 'boolean',
      resources: { 'type': 'array', 'itemType': CreateVirtualResourceRequestResources },
      virtualResourceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successfully created virtual resource eas-vr-npovr28onap1xxxxxx
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the virtual resource group.
   * 
   * @example
   * eas-vr-npovr28onap1xxxxxx
   */
  virtualResourceId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      virtualResourceId: 'VirtualResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      virtualResourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVirtualResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateVirtualResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVirtualResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway.
   */
  aclPolicyList?: DeleteAclPolicyRequestAclPolicyList[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). For more information about how to obtain the VPC ID, see DescribeVpcs.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclPolicyList: 'AclPolicyList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyList: { 'type': 'array', 'itemType': DeleteAclPolicyRequestAclPolicyList },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclPolicyList)) {
      $dara.Model.validateArray(this.aclPolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway.
   */
  aclPolicyListShrink?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). For more information about how to obtain the VPC ID, see DescribeVpcs.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclPolicyListShrink: 'AclPolicyList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyListShrink: 'string',
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

export class DeleteAclPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successfully delete acl policy for gateway
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAclPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAclPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBenchmarkTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmark task [benchmark-test-service-234c] is Deleting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBenchmarkTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBenchmarkTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBenchmarkTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Gateway is deleted.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayIntranetLinkedVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-8vbqn2at0kljjxxxx****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteGatewayIntranetLinkedVpcResponseBody extends $dara.Model {
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successfully delete intranet linked vpc for gateway
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayIntranetLinkedVpcResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayIntranetLinkedVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayIntranetLinkedVpcResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayIntranetLinkedVpcPeerRequest extends $dara.Model {
  /**
   * @remarks
   * The VPC peer.
   */
  peerVpcs?: DeleteGatewayIntranetLinkedVpcPeerRequestPeerVpcs[];
  /**
   * @remarks
   * The ID of the associated VPC. To obtain the VPC ID, see [ListGatewayIntranetLinkedVpc](https://help.aliyun.com/document_detail/2621223.html).
   * 
   * @example
   * vpc-2zetuli9ws0qgjd******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      peerVpcs: 'PeerVpcs',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peerVpcs: { 'type': 'array', 'itemType': DeleteGatewayIntranetLinkedVpcPeerRequestPeerVpcs },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.peerVpcs)) {
      $dara.Model.validateArray(this.peerVpcs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayIntranetLinkedVpcPeerShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The VPC peer.
   */
  peerVpcsShrink?: string;
  /**
   * @remarks
   * The ID of the associated VPC. To obtain the VPC ID, see [ListGatewayIntranetLinkedVpc](https://help.aliyun.com/document_detail/2621223.html).
   * 
   * @example
   * vpc-2zetuli9ws0qgjd******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      peerVpcsShrink: 'PeerVpcs',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peerVpcsShrink: 'string',
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

export class DeleteGatewayIntranetLinkedVpcPeerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the private gateway.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * Successfully delete intranet linked vpc Peer for gateway
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayIntranetLinkedVpcPeerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayIntranetLinkedVpcPeerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGatewayIntranetLinkedVpcPeerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Resource [eas-r-asdasdasd] is deleted.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82-9624-EC2B1779848E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceDLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Network interfaces are deleting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceDLinkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceDLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceDLinkResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceInstanceLabelRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the delete operation takes effect on all instances in the resource group. If you set this parameter to true, the InstanceIds parameter does not take effect.
   */
  allInstances?: boolean;
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The keys of the tags that you want to delete.
   */
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      allInstances: 'AllInstances',
      instanceIds: 'InstanceIds',
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allInstances: 'boolean',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceInstanceLabelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the delete operation takes effect on all instances in the resource group. If you set this parameter to true, the InstanceIds parameter does not take effect.
   */
  allInstances?: boolean;
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The keys of the tags that you want to delete.
   */
  keysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      allInstances: 'AllInstances',
      instanceIdsShrink: 'InstanceIds',
      keysShrink: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allInstances: 'boolean',
      instanceIdsShrink: 'string',
      keysShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceInstanceLabelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceInstanceLabelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceInstanceLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceInstanceLabelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all the instances that fail to be created. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  allFailed?: boolean;
  /**
   * @remarks
   * The instances. Separate multiple instances with commas (,), such as `instanceId1,instanceId2`. For more information about how to query the instances, see [ListResourceInstances](https://help.aliyun.com/document_detail/412129.html).
   * 
   * @example
   * eas-i-xxxxxxx,eas-i-xxxxxxx
   */
  instanceList?: string;
  static names(): { [key: string]: string } {
    return {
      allFailed: 'AllFailed',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allFailed: 'boolean',
      instanceList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Instances eas-i-011227132046,eas-i-011227132046 are deleting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Log service for resource [eas-r-asdasdasd] is deleting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceLogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Service [foo] in region [cn-shanghai] is terminating
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceAutoScalerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Autoscaler for service [foo] deleted successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceAutoScalerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceAutoScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceAutoScalerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceCronScalerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Cronscaler for service [foo] deleted successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceCronScalerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceCronScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceCronScalerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the container whose process needs to be restarted. This parameter takes effect only if the SoftRestart parameter is set to true.
   * 
   * @example
   * worker0
   */
  container?: string;
  /**
   * @remarks
   * The instances that you want to restart. Separate multiple instance names with commas (,). For more information about how to query the instance name, see [ListServiceInstances](https://help.aliyun.com/document_detail/412108.html).
   * 
   * This parameter is required.
   * 
   * @example
   * foo-rdsbxxxx,foo-rdsaxxxx
   */
  instanceList?: string;
  /**
   * @remarks
   * Specifies whether to restart only the container process without recreating the instance. Default value: false. Valid values: true and false.
   * 
   * @example
   * true
   */
  softRestart?: boolean;
  static names(): { [key: string]: string } {
    return {
      container: 'Container',
      instanceList: 'InstanceList',
      softRestart: 'SoftRestart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      container: 'string',
      instanceList: 'string',
      softRestart: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Instance(s) [foo-rdsb,foo-rdsa]  for service [foo] in region [cn-shanghai] was deleted successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceLabelRequest extends $dara.Model {
  /**
   * @remarks
   * The service tags that you want to delete.
   * 
   * This parameter is required.
   */
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceLabelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The service tags that you want to delete.
   * 
   * This parameter is required.
   */
  keysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      keysShrink: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keysShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceLabelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Succeed to delete service [service_from_zxxx] labels.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceLabelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceLabelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceMirrorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Traffic mirroring is OFF for service [foo] in region [cn-shanghia], ratio [70%]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceMirrorResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceMirrorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServiceMirrorResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the operation result.
   * 
   * @example
   * Successfully deleted virtual resource eas-vr-npovr28onap1xxxxxx
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVirtualResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteVirtualResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteVirtualResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBenchmarkTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of instances that you can test.
   * 
   * @example
   * 4
   */
  availableAgent?: number;
  /**
   * @remarks
   * The ID of the operation caller.
   * 
   * @example
   * 1640133467****
   */
  callerUid?: string;
  /**
   * @remarks
   * The number of instances that you want to test.
   * 
   * @example
   * 4
   */
  desiredAgent?: number;
  /**
   * @remarks
   * The endpoint of the service gateway.
   * 
   * @example
   * 192342311234.pai-eas.cn-chengdu.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmar task is Running
   */
  message?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to call the operation.
   * 
   * @example
   * 1029728669****
   */
  parentUid?: string;
  /**
   * @remarks
   * The event or reason that causes the current state of the stress testing task.
   * 
   * @example
   * RUNNING
   */
  reason?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the service that you want to test.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  /**
   * @remarks
   * The state of the stress testing task.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Starting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DeleteFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopping
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Error
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Updating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CreateFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the stress testing task.
   * 
   * @example
   * eas-b-gv4y86u****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the stress testing task.
   * 
   * @example
   * benchmark-larec-test-ae70
   */
  taskName?: string;
  /**
   * @remarks
   * The token for authentication when a stress testing task is created.
   * 
   * @example
   * 6062787a-9301****
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      availableAgent: 'AvailableAgent',
      callerUid: 'CallerUid',
      desiredAgent: 'DesiredAgent',
      endpoint: 'Endpoint',
      message: 'Message',
      parentUid: 'ParentUid',
      reason: 'Reason',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAgent: 'number',
      callerUid: 'string',
      desiredAgent: 'number',
      endpoint: 'string',
      message: 'string',
      parentUid: 'string',
      reason: 'string',
      requestId: 'string',
      serviceName: 'string',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBenchmarkTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBenchmarkTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBenchmarkTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBenchmarkTaskReportRequest extends $dara.Model {
  /**
   * @remarks
   * The report type of the stress testing task. Valid values: RAW and Report.
   * 
   * @example
   * report
   */
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBenchmarkTaskReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * If the value of ReportType is set to RAW, the details about the stress testing report are returned.
   * 
   * @example
   * {
   *     "TimestampList": ["int64"],
   *     "QPSList": ["float32"],
   *     "RTList": [
   *       {
   *         "AVG": "float32",
   *         "TP100": "float32",
   *         "TP99": "float32",
   *         "TP90": "float32",
   *         "TP50": "float32",
   *         "TP10": "float32"
   *       }
   *     ],
   *     "TrafficList": [
   *       {
   *         "Send": "float64",
   *         "Receive": "float64"
   *       }
   *     ],
   *     "StatusCode": {
   *       "200": "uint64",
   *       "450": "uint64",
   *       "500": "uint64"
   *     },
   *     "Count": "uint64",
   *     "Total": "float64",
   *     "MinRT": "float32",
   *     "AvgRT": "float32",
   *     "MaxRT": "float32",
   *     "QPS": "float32",
   *     "TotalSend": "float64",
   *     "TotalReceive": "float64",
   *     "RTDistribution": [
   *       {
   *         "Latency": "float32",
   *         "Percentage": "int"
   *       }
   *     ],
   *     "RTHistogram": [
   *       {
   *         "Count": "int",
   *         "Mark": "float32",
   *         "Frequency": "float32"
   *       }
   *     ]
   *   }
   */
  data?: any;
  /**
   * @remarks
   * If the value of ReportType is set to Report, the URL of the stress testing report is returned.
   * 
   * @example
   * http://eas-benchmark.oss-cn-chengdu.aliyuncs.com/summary/benchmark-larec-test-015d-10007.html
   */
  reportUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      reportUrl: 'ReportUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      reportUrl: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBenchmarkTaskReportResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBenchmarkTaskReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeBenchmarkTaskReportResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the private gateway was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-05-19T14:19:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the self-managed cluster.
   * 
   * @example
   * c935eadf284c14c2da57a2a13ad6******
   */
  externalClusterId?: string;
  /**
   * @remarks
   * The ID of the private gateway.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The alias of the private gateway.
   * 
   * @example
   * mygateway1
   */
  gatewayName?: string;
  /**
   * @remarks
   * The instance type used by the private gateway.
   * 
   * Valid values:
   * 
   * *   8c16g
   * *   4c8g
   * *   2c4g
   * *   16c32g
   * 
   * @example
   * ecs.c6.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * gw-1uhcqmsc7x22******-1801786532******.cn-hangzhou.pai-eas.aliyuncs.com
   */
  internetDomain?: string;
  /**
   * @remarks
   * Indicates whether Internet access is enabled.
   * 
   * @example
   * true
   */
  internetEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether Internet access is enabled.
   * 
   * Valid values:
   * 
   * *   Creating: Internet access is being enabled.
   * *   Failed: Internet access failed to be enabled or deleted.
   * *   Running: Internet access is running.
   * *   Deleted: Internet access is deleted.
   * *   Deleting: Internet access is being deleted.
   * 
   * @example
   * Running
   */
  internetStatus?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * gw-1uhcqmsc7x22******-1801786532******-vpc.cn-hangzhou.pai-eas.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @remarks
   * Indicates whether it is the default private gateway.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The number of nodes in the private gateway.
   * 
   * @example
   * 2
   */
  replicas?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the HTTP to HTTPS redirection is enabled.
   * 
   * @example
   * true
   */
  SSLRedirectionEnabled?: boolean;
  /**
   * @remarks
   * The status of the private gateway.
   * 
   * Valid values:
   * 
   * *   Creating
   * *   Stopped
   * *   Failed
   * *   Running
   * *   Deleted
   * *   Deleting
   * *   Waiting
   * 
   * @example
   * PrivateGatewayRunning
   */
  status?: string;
  /**
   * @remarks
   * The time when the private gateway was updated. The time is displayed in UTC.
   * 
   * @example
   * 2021-02-24T11:52:17Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      externalClusterId: 'ExternalClusterId',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      instanceType: 'InstanceType',
      internetDomain: 'InternetDomain',
      internetEnabled: 'InternetEnabled',
      internetStatus: 'InternetStatus',
      intranetDomain: 'IntranetDomain',
      isDefault: 'IsDefault',
      replicas: 'Replicas',
      requestId: 'RequestId',
      SSLRedirectionEnabled: 'SSLRedirectionEnabled',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      externalClusterId: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
      instanceType: 'string',
      internetDomain: 'string',
      internetEnabled: 'boolean',
      internetStatus: 'string',
      intranetDomain: 'string',
      isDefault: 'boolean',
      replicas: 'number',
      requestId: 'string',
      SSLRedirectionEnabled: 'boolean',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGatewayResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Group;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Group,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service token.
   * 
   * @example
   * Nzc5N2FhNTM4OTQ0YzBmYTIy****ZTUxN2NkYjg4MTJmMWQxZmY1****
   */
  accessToken?: string;
  /**
   * @remarks
   * The endpoints of service groups.
   */
  endpoints?: DescribeGroupEndpointsResponseBodyEndpoints[];
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Execution successful.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 890772EF-3AD6-129A-8E15-8F349C944783
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      endpoints: 'Endpoints',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      endpoints: { 'type': 'array', 'itemType': DescribeGroupEndpointsResponseBodyEndpoints },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupEndpointsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGroupEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGroupEndpointsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMachineSpecRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @deprecated
   */
  instanceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMachineSpecShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @deprecated
   */
  instanceTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypesShrink: 'InstanceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMachineSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance types when the resources are specified.
   */
  instanceMetas?: DescribeMachineSpecResponseBodyInstanceMetas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  /**
   * @remarks
   * The values that can be supported when the number of CPUs and memory size are specified for deployment.
   */
  types?: DescribeMachineSpecResponseBodyTypes[];
  static names(): { [key: string]: string } {
    return {
      instanceMetas: 'InstanceMetas',
      requestId: 'RequestId',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMetas: { 'type': 'array', 'itemType': DescribeMachineSpecResponseBodyInstanceMetas },
      requestId: 'string',
      types: { 'type': 'array', 'itemType': DescribeMachineSpecResponseBodyTypes },
    };
  }

  validate() {
    if(Array.isArray(this.instanceMetas)) {
      $dara.Model.validateArray(this.instanceMetas);
    }
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMachineSpecResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeMachineSpecResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeMachineSpecResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $dara.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to which the resource group belongs.
   * 
   * @example
   * cn-beijing
   */
  clusterId?: string;
  /**
   * @remarks
   * The total number of CPU cores.
   * 
   * @example
   * 16
   */
  cpuCount?: number;
  /**
   * @remarks
   * The number of vCPUs that is used.
   * 
   * @example
   * 8
   */
  cpuUsed?: number;
  /**
   * @remarks
   * The time when the resource group was created.
   * 
   * @example
   * 2020-05-19T14:19:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The additional information, such as the connection status of a virtual private cloud (VPC) and the log status of Log Service.
   * 
   * @example
   * {"vswitch_id":"vsw-bp17uo6xebcusy****","gpu_share":true,"aux_vswitch_id_list":["vsw-bp13b3pvjap3vxn****","vsw-bp1nls8o5hk8mt8*****"],"security_group_id":"sg-bp1j1z7297hcink*****","vpc_id":"vpc-bp1kjr3rfyhx01*****","destination_cidr":"172.16.0.12/28","role_arn":"acs:ram::1157703270*****:role/AliyunServiceRoleForPaiEas","sls_project":"","sls_logstore":"","sls_status":"ResourceReady","sls_message":"","update_time":""}
   */
  extraData?: string;
  /**
   * @remarks
   * The total number of GPUs.
   * 
   * @example
   * 1
   */
  gpuCount?: number;
  /**
   * @remarks
   * The number of GPUs that is used.
   * 
   * @example
   * 2
   */
  gpuUsed?: number;
  /**
   * @remarks
   * The total number of instances in the resource group.
   * 
   * @example
   * 4
   */
  instanceCount?: number;
  /**
   * @remarks
   * The total memory size. Unit: MB.
   * 
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @remarks
   * The size of memory that is used. Unit: MB.
   * 
   * @example
   * 2048
   */
  memoryUsed?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Resource is ready
   */
  message?: string;
  /**
   * @remarks
   * The ID of the resource group owner.
   * 
   * @example
   * 14401087478****
   */
  ownerUid?: string;
  /**
   * @remarks
   * The total number of pay-as-you-go instances in the resource group.
   * 
   * @example
   * 3
   */
  postPaidInstanceCount?: number;
  /**
   * @remarks
   * The total number of subscription instances in the resource group.
   * 
   * @example
   * 1
   */
  prePaidInstanceCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 902976F2-6FAF-5404-8A4D-6CC223***
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the Elastic Algorithm Service (EAS) resource.
   * 
   * @example
   * eas-r-glkfpsxuw57x1h*****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the EAS resource.
   * 
   * @example
   * my-resouce****
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   Dedicated: the dedicated resource group.
   * *   SelfManaged: the self-managed resource group.
   * 
   * @example
   * Dedicated
   */
  resourceType?: string;
  /**
   * @remarks
   * The state of the resource group.
   * 
   * @example
   * ResourceReady
   */
  status?: string;
  /**
   * @remarks
   * The time when the resource group was last updated.
   * 
   * @example
   * 2021-02-24T11:52:17Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      cpuCount: 'CpuCount',
      cpuUsed: 'CpuUsed',
      createTime: 'CreateTime',
      extraData: 'ExtraData',
      gpuCount: 'GpuCount',
      gpuUsed: 'GpuUsed',
      instanceCount: 'InstanceCount',
      memory: 'Memory',
      memoryUsed: 'MemoryUsed',
      message: 'Message',
      ownerUid: 'OwnerUid',
      postPaidInstanceCount: 'PostPaidInstanceCount',
      prePaidInstanceCount: 'PrePaidInstanceCount',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      cpuCount: 'number',
      cpuUsed: 'number',
      createTime: 'string',
      extraData: 'string',
      gpuCount: 'number',
      gpuUsed: 'number',
      instanceCount: 'number',
      memory: 'number',
      memoryUsed: 'number',
      message: 'string',
      ownerUid: 'string',
      postPaidInstanceCount: 'number',
      prePaidInstanceCount: 'number',
      requestId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceDLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the secondary vSwitches that are directly connected.
   */
  auxVSwitchList?: string[];
  /**
   * @remarks
   * The CIDR blocks of the clients that you want to connect to. After this parameter is specified, the CIDR blocks are added to the back-to-origin route of the server. Either this parameter or the VSwitchIdList parameter can be used to determine CIDR blocks.
   * 
   * @example
   * 72.16.0.0/16
   */
  destinationCIDRs?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the security group that is directly connected.
   * 
   * @example
   * sg-bp1j1z7297hcink9d****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the primary vSwitch that is directly connected.
   * 
   * @example
   * vsw-8vbqn2at0kljjxxxx****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC that is directly connected.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      auxVSwitchList: 'AuxVSwitchList',
      destinationCIDRs: 'DestinationCIDRs',
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auxVSwitchList: { 'type': 'array', 'itemType': 'string' },
      destinationCIDRs: 'string',
      requestId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.auxVSwitchList)) {
      $dara.Model.validateArray(this.auxVSwitchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceDLinkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceDLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResourceDLinkResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Logstore of Log Service.
   * 
   * @example
   * access_log
   */
  logStore?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Network interfaces are updating
   */
  message?: string;
  /**
   * @remarks
   * The Log Service project that is associated with the resource group.
   * 
   * @example
   * eas-r-asdasdasd-sls
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the resource group.
   * 
   * @example
   * ResourceReady
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      message: 'Message',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      message: 'string',
      projectName: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeResourceLogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Service;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Service,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceAutoScalerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The additional information about the Autoscaler policy, such as the interval of triggering Autoscaler.
   * 
   * @example
   * {
   *   "behavior": {
   *     "scaleDown": {
   *       "stabilizationWindowSeconds": 150
   *     }
   *   }
   * }
   */
  behavior?: { [key: string]: any };
  /**
   * @remarks
   * The metrics.
   */
  currentMetrics?: DescribeServiceAutoScalerResponseBodyCurrentMetrics[];
  /**
   * @remarks
   * The maximum number of instances in the service.
   * 
   * @example
   * 8
   */
  maxReplica?: number;
  /**
   * @remarks
   * The minimum number of instances in the service.
   * 
   * @example
   * 3
   */
  minReplica?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The auto scaling policies.
   */
  scaleStrategies?: DescribeServiceAutoScalerResponseBodyScaleStrategies[];
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      behavior: 'Behavior',
      currentMetrics: 'CurrentMetrics',
      maxReplica: 'MaxReplica',
      minReplica: 'MinReplica',
      requestId: 'RequestId',
      scaleStrategies: 'ScaleStrategies',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      behavior: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      currentMetrics: { 'type': 'array', 'itemType': DescribeServiceAutoScalerResponseBodyCurrentMetrics },
      maxReplica: 'number',
      minReplica: 'number',
      requestId: 'string',
      scaleStrategies: { 'type': 'array', 'itemType': DescribeServiceAutoScalerResponseBodyScaleStrategies },
      serviceName: 'string',
    };
  }

  validate() {
    if(this.behavior) {
      $dara.Model.validateMap(this.behavior);
    }
    if(Array.isArray(this.currentMetrics)) {
      $dara.Model.validateArray(this.currentMetrics);
    }
    if(Array.isArray(this.scaleStrategies)) {
      $dara.Model.validateArray(this.scaleStrategies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceAutoScalerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceAutoScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceAutoScalerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceCronScalerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The points in time that are excluded when you schedule a CronHPA job. The points in time must be specified by using a cron expression.
   */
  excludeDates?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The CronHPA jobs.
   */
  scaleJobs?: DescribeServiceCronScalerResponseBodyScaleJobs[];
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      excludeDates: 'ExcludeDates',
      requestId: 'RequestId',
      scaleJobs: 'ScaleJobs',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeDates: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      scaleJobs: { 'type': 'array', 'itemType': DescribeServiceCronScalerResponseBodyScaleJobs },
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.excludeDates)) {
      $dara.Model.validateArray(this.excludeDates);
    }
    if(Array.isArray(this.scaleJobs)) {
      $dara.Model.validateArray(this.scaleJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceCronScalerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceCronScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceCronScalerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceDiagnosisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnostics list.
   */
  diagnosisList?: DescribeServiceDiagnosisResponseBodyDiagnosisList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosisList: 'DiagnosisList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosisList: { 'type': 'array', 'itemType': DescribeServiceDiagnosisResponseBodyDiagnosisList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnosisList)) {
      $dara.Model.validateArray(this.diagnosisList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceDiagnosisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceDiagnosisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceDiagnosisResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceEndpointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service token.
   * 
   * @example
   * Nzc5N2FhN****TQ0YzBmYTIyN2MxZTUxN2NkYjg4MTJmMWQxZmY1****
   */
  accessToken?: string;
  /**
   * @remarks
   * The service endpoints.
   */
  endpoints?: DescribeServiceEndpointsResponseBodyEndpoints[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Execution successful.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 739998B5-FB39-12A3-8323-0FA340317298
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      endpoints: 'Endpoints',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      endpoints: { 'type': 'array', 'itemType': DescribeServiceEndpointsResponseBodyEndpoints },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceEndpointsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceEndpointsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceEventRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. By default, the current point in time is the end of the time range to query.
   * 
   * @example
   * 2006-01-02 15:04:05
   */
  endTime?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * *   Normal
   * *   Warning
   * 
   * @example
   * Normal
   */
  eventType?: string;
  /**
   * @remarks
   * The instance name. For more information about how to obtain the instance name, see [ListServiceInstances](https://help.aliyun.com/document_detail/412108.html).
   * 
   * @example
   * echo-test-784xxxx85d-hhnd8
   */
  instanceName?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time must be in UTC. The default value is seven days ago.
   * 
   * @example
   * 2006-01-02 15:04:05
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventType: 'EventType',
      instanceName: 'InstanceName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventType: 'string',
      instanceName: 'string',
      pageNum: 'string',
      pageSize: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The events.
   */
  events?: DescribeServiceEventResponseBodyEvents[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D491C94-6239-5318-B4B4-799D859***
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 29
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 12
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeServiceEventResponseBodyEvents },
      pageNum: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceEventResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceEventResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceEventResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceInstanceDiagnosisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnostics information.
   */
  diagnosis?: DescribeServiceInstanceDiagnosisResponseBodyDiagnosis;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosis: 'Diagnosis',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosis: DescribeServiceInstanceDiagnosisResponseBodyDiagnosis,
      requestId: 'string',
    };
  }

  validate() {
    if(this.diagnosis && typeof (this.diagnosis as any).validate === 'function') {
      (this.diagnosis as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceInstanceDiagnosisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceInstanceDiagnosisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceInstanceDiagnosisResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLogRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the container that runs the service.
   * 
   * @example
   * worker0
   */
  containerName?: string;
  /**
   * @remarks
   * The end of the time range to query. The time must be in UTC.
   * 
   * @example
   * 2006-01-02 15:04:05
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the instance that runs the service. For more information about how to query the instance name, see [ListServiceInstances](https://help.aliyun.com/document_detail/412108.html).
   * 
   * @example
   * echo-da290ac8-7fckm
   */
  instanceName?: string;
  /**
   * @remarks
   * The IP address of the instance whose logs you want to query. For more information about how to query the IP address of an instance, see [ListServiceInstances](https://help.aliyun.com/document_detail/412108.html).
   * 
   * @example
   * 10.0.0.1
   */
  ip?: string;
  /**
   * @remarks
   * The keyword that you use to query the logs of the service.
   * 
   * @example
   * key
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 500.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to query the logs that are generated before the instance last restarts. This parameter is available only if the instance restarts.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  previous?: boolean;
  /**
   * @remarks
   * The beginning of the time range to query. The time must be in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2006-01-02 15:04:05
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      containerName: 'ContainerName',
      endTime: 'EndTime',
      instanceName: 'InstanceName',
      ip: 'Ip',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      previous: 'Previous',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerName: 'string',
      endTime: 'string',
      instanceName: 'string',
      ip: 'string',
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      previous: 'boolean',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned logs.
   */
  logs?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82********
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 500
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': 'string' },
      pageNum: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLogResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceLogResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMirrorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The percentage of traffic that you want to mirror. Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  ratio?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  /**
   * @remarks
   * The destination services to which you want to mirror traffic.
   * 
   * @example
   * foo2,foo3
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      ratio: 'Ratio',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ratio: 'string',
      requestId: 'string',
      serviceName: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMirrorResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceMirrorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceMirrorResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceSignedUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The period of time for which the URL expires.
   * 
   * @example
   * 43200
   */
  expire?: number;
  /**
   * @remarks
   * Specifies whether to use the VPC connection.
   * 
   * @example
   * false
   */
  internal?: boolean;
  /**
   * @remarks
   * The page type.
   * 
   * Valid values:
   * 
   * *   webview
   * *   monitor
   * 
   * @example
   * webview
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      expire: 'Expire',
      internal: 'Internal',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expire: 'number',
      internal: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceSignedUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The service URL.
   * 
   * @example
   * https://foo-115**.console.cn-hangzhou.eas.pai-ml.com?expire=1735202661&signature=ey*******
   */
  signedUrl?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      signedUrl: 'SignedUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      signedUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceSignedUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceSignedUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeServiceSignedUrlResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotDiscountHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the Elastic Algorithm Service (EAS) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.c6.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the preemptible instance has a protection period. During the 1-hour protection period of the preemptible instance, the preemptible instance will not be released.
   * 
   * @example
   * false
   */
  isProtect?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      isProtect: 'IsProtect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      isProtect: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotDiscountHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  /**
   * @remarks
   * The discount for the preemptible instance.
   */
  spotDiscounts?: DescribeSpotDiscountHistoryResponseBodySpotDiscounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spotDiscounts: 'SpotDiscounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spotDiscounts: { 'type': 'array', 'itemType': DescribeSpotDiscountHistoryResponseBodySpotDiscounts },
    };
  }

  validate() {
    if(Array.isArray(this.spotDiscounts)) {
      $dara.Model.validateArray(this.spotDiscounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotDiscountHistoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSpotDiscountHistoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeSpotDiscountHistoryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the virtual resource group was created.
   * 
   * @example
   * 2024-10-16T17:52:49Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the retention period of preemptible instances was disabled.
   * 
   * @example
   * true
   */
  disableSpotProtectionPeriod?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resources in the virtual resource group.
   */
  resources?: DescribeVirtualResourceResponseBodyResources[];
  /**
   * @remarks
   * The number of deployed services.
   * 
   * @example
   * 1
   */
  serviceCount?: number;
  /**
   * @remarks
   * The time when the virtual resource group was last updated.
   * 
   * @example
   * 2024-10-16T19:52:49Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the virtual resource group.
   * 
   * @example
   * eas-vr-npovr28onap1xxxxxx
   */
  virtualResourceId?: string;
  /**
   * @remarks
   * The name of the virtual resource group.
   * 
   * @example
   * MyVirtualResource
   */
  virtualResourceName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      disableSpotProtectionPeriod: 'DisableSpotProtectionPeriod',
      requestId: 'RequestId',
      resources: 'Resources',
      serviceCount: 'ServiceCount',
      updateTime: 'UpdateTime',
      virtualResourceId: 'VirtualResourceId',
      virtualResourceName: 'VirtualResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      disableSpotProtectionPeriod: 'boolean',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeVirtualResourceResponseBodyResources },
      serviceCount: 'number',
      updateTime: 'string',
      virtualResourceId: 'string',
      virtualResourceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVirtualResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeVirtualResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeVirtualResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachGatewayDomainRequest extends $dara.Model {
  /**
   * @remarks
   * The custom domain name information.
   * 
   * This parameter is required.
   */
  customDomain?: DetachGatewayDomainRequestCustomDomain;
  static names(): { [key: string]: string } {
    return {
      customDomain: 'CustomDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomain: DetachGatewayDomainRequestCustomDomain,
    };
  }

  validate() {
    if(this.customDomain && typeof (this.customDomain as any).validate === 'function') {
      (this.customDomain as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachGatewayDomainShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The custom domain name information.
   * 
   * This parameter is required.
   */
  customDomainShrink?: string;
  static names(): { [key: string]: string } {
    return {
      customDomainShrink: 'CustomDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomainShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachGatewayDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the private gateway. To obtain the private gateway ID, see the GatewayId parameter in the response parameters of the [ListGateway](https://apiworkbench.aliyun-inc.com/document/eas/2021-07-01/ListGateway?spm=openapi-amp.newDocPublishment.0.0.765e281fL2IcjJ\\&ampEnv=online) operation.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * Successfully delete custom endpoint for gateway gw-1uhcqmsc7x22******
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachGatewayDomainResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachGatewayDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachGatewayDomainResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DevelopServiceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to exit development mode. Valid values:
   * 
   * *   true: exits development mode.
   * *   false (default): enters development mode.
   * 
   * @example
   * true
   */
  exit?: string;
  static names(): { [key: string]: string } {
    return {
      exit: 'Exit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DevelopServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DevelopServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DevelopServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DevelopServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). For more information about how to obtain the VPC ID, see DescribeVpcs.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListAclPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The access control policies of the private gateway over the Internet.
   */
  internetAclPolicyList?: ListAclPolicyResponseBodyInternetAclPolicyList[];
  /**
   * @remarks
   * The access control policies of the private gateway over the internal network.
   */
  intranetVpcAclPolicyList?: ListAclPolicyResponseBodyIntranetVpcAclPolicyList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      internetAclPolicyList: 'InternetAclPolicyList',
      intranetVpcAclPolicyList: 'IntranetVpcAclPolicyList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      internetAclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyInternetAclPolicyList },
      intranetVpcAclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyIntranetVpcAclPolicyList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.internetAclPolicyList)) {
      $dara.Model.validateArray(this.internetAclPolicyList);
    }
    if(Array.isArray(this.intranetVpcAclPolicyList)) {
      $dara.Model.validateArray(this.intranetVpcAclPolicyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAclPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAclPolicyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBenchmarkTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword used to query required stress testing tasks. If this parameter is specified, the system returns stress testing tasks based on the names of the stress testing tasks in the matched Elastic Algorithm Service (EAS).
   * 
   * @example
   * test_bench
   */
  filter?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The name of the EAS service that corresponds to the stress testing task. For more information about how to query the service name, see [ListServices](https://help.aliyun.com/document_detail/412109.html).
   * 
   * @example
   * test_bench_srv
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBenchmarkTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The stress testing tasks.
   */
  tasks?: ListBenchmarkTaskResponseBodyTasks[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListBenchmarkTaskResponseBodyTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBenchmarkTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBenchmarkTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListBenchmarkTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The private gateway ID. To obtain the private gateway ID, see the private_gateway_id parameter in the response parameters of the ListResources operation.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The private gateway alias.
   * 
   * @example
   * mygateway1
   */
  gatewayName?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group. To obtain a resource group ID, see the ResourceId field in the response of the [ListResources](https://help.aliyun.com/document_detail/412133.html) operation.
   * 
   * @example
   * eas-r-4gt8twzwllfo******
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      gatewayName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The private gateways.
   */
  gateways?: ListGatewayResponseBodyGateways[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of private gateways returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      gateways: 'Gateways',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateways: { 'type': 'array', 'itemType': ListGatewayResponseBodyGateways },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.gateways)) {
      $dara.Model.validateArray(this.gateways);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewayResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of custom domain names.
   */
  customDomains?: ListGatewayDomainsResponseBodyCustomDomains[];
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * Successfully get custom domains
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      customDomains: 'CustomDomains',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomains: { 'type': 'array', 'itemType': ListGatewayDomainsResponseBodyCustomDomains },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customDomains)) {
      $dara.Model.validateArray(this.customDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayDomainsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGatewayDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewayDomainsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayIntranetLinkedVpcResponseBody extends $dara.Model {
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The internal endpoints.
   */
  intranetLinkedVpcList?: ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      intranetLinkedVpcList: 'IntranetLinkedVpcList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      intranetLinkedVpcList: { 'type': 'array', 'itemType': ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.intranetLinkedVpcList)) {
      $dara.Model.validateArray(this.intranetLinkedVpcList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayIntranetLinkedVpcResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGatewayIntranetLinkedVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewayIntranetLinkedVpcResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayIntranetLinkedVpcPeerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the associated VPC. To obtain the VPC ID, see [ListGatewayIntranetLinkedVpc](https://help.aliyun.com/document_detail/2621223.html).
   * 
   * *   If you specify a VPC ID, only VPC peers corresponding to the ID are queried.
   * *   Otherwise, all VPC peers are queried.
   * 
   * @example
   * vpc-2zetuli9ws0qgjd******
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListGatewayIntranetLinkedVpcPeerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the private gateway.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The list of VPC peers.
   */
  peerVpcList?: ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      peerVpcList: 'PeerVpcList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      peerVpcList: { 'type': 'array', 'itemType': ListGatewayIntranetLinkedVpcPeerResponseBodyPeerVpcList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.peerVpcList)) {
      $dara.Model.validateArray(this.peerVpcList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayIntranetLinkedVpcPeerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGatewayIntranetLinkedVpcPeerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewayIntranetLinkedVpcPeerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayIntranetSupportedZoneResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The zones that are supported by the region.
   */
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayIntranetSupportedZoneResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGatewayIntranetSupportedZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGatewayIntranetSupportedZoneResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the filter that is used to filter out unwanted service groups. Fuzzy match is supported.
   * 
   * @example
   * foo
   */
  filter?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service groups.
   */
  groups?: Group[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': Group },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groups)) {
      $dara.Model.validateArray(this.groups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstanceWorkerRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The worker name.
   * 
   * @example
   * test-fd95xxxxx-xxxxxx
   */
  workerName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workerName: 'WorkerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      workerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstanceWorkerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The workers.
   */
  pods?: ResourceInstanceWorker[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pods: 'Pods',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pods: { 'type': 'array', 'itemType': ResourceInstanceWorker },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pods)) {
      $dara.Model.validateArray(this.pods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstanceWorkerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceInstanceWorkerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceInstanceWorkerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PrePaid: subscription.
   * *   PostPaid: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The keyword used to query instances. Instances can be queried by instance ID or instance IP address.
   * 
   * @example
   * 10.224.xx.xx
   */
  filter?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.224.xx.xx
   */
  instanceIP?: string;
  /**
   * @remarks
   * The instance ID. For more information about how to query the instance ID, see [ListResourceInstances](https://help.aliyun.com/document_detail/412129.html).
   * 
   * @example
   * i-bp1jd6x3uotsv****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * e-xxxx***
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance state.
   * 
   * Valid values:
   * 
   * *   Ready-SchedulingDisabled
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instance is available but unschedulable
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Ready
   * 
   *     <!-- -->
   * 
   *     : The instance
   * 
   *     <!-- -->
   * 
   *     is running
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   NotReady
   * 
   *     <!-- -->
   * 
   *     : The instance is unready.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopped
   * 
   *     <!-- -->
   * 
   *     : The instance has stopped.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   NotReady-SchedulingDisabled
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instance is unavailable and unschedulable
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Attaching
   * 
   *     <!-- -->
   * 
   *     : The instance
   * 
   *     <!-- -->
   * 
   *     is starting
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Deleting
   * 
   *     <!-- -->
   * 
   *     : The instance is being deleted.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CreateFailed: The instance failed to be created.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Ready
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The tag.
   */
  label?: { [key: string]: string };
  /**
   * @remarks
   * The sorting order.
   * 
   * Valid values:
   * 
   * *   asc: The instances are sorted in ascending order.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   desc
   * 
   *     <!-- -->
   * 
   *     : The instances are sorted in descending order.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The field that you use to sort the query results.
   * 
   * Valid values:
   * 
   * *   CreateTime
   * 
   *     <!-- -->
   * 
   *     : The instances are sorted based on the time when the instances were created.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   MemoryUsed
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instances are sorted based on the memory usage of the instances
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   GpuUsed
   * 
   *     <!-- -->
   * 
   *     : The instances are sorted based on the
   * 
   *     <!-- -->
   * 
   *     GPU usage of the instances.
   * 
   *     <!-- -->
   * 
   * *   ExpireTime: The instances are sorted based on the time when the instances expired.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CpuUsed
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instances are sorted based on the CPU utilization of the instances.
   * 
   *     <!-- -->
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      filter: 'Filter',
      instanceIP: 'InstanceIP',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      label: 'Label',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      filter: 'string',
      instanceIP: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      label: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sort: 'string',
    };
  }

  validate() {
    if(this.label) {
      $dara.Model.validateMap(this.label);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PrePaid: subscription.
   * *   PostPaid: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The keyword used to query instances. Instances can be queried by instance ID or instance IP address.
   * 
   * @example
   * 10.224.xx.xx
   */
  filter?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.224.xx.xx
   */
  instanceIP?: string;
  /**
   * @remarks
   * The instance ID. For more information about how to query the instance ID, see [ListResourceInstances](https://help.aliyun.com/document_detail/412129.html).
   * 
   * @example
   * i-bp1jd6x3uotsv****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * e-xxxx***
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance state.
   * 
   * Valid values:
   * 
   * *   Ready-SchedulingDisabled
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instance is available but unschedulable
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Ready
   * 
   *     <!-- -->
   * 
   *     : The instance
   * 
   *     <!-- -->
   * 
   *     is running
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   NotReady
   * 
   *     <!-- -->
   * 
   *     : The instance is unready.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopped
   * 
   *     <!-- -->
   * 
   *     : The instance has stopped.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   NotReady-SchedulingDisabled
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instance is unavailable and unschedulable
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Attaching
   * 
   *     <!-- -->
   * 
   *     : The instance
   * 
   *     <!-- -->
   * 
   *     is starting
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Deleting
   * 
   *     <!-- -->
   * 
   *     : The instance is being deleted.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CreateFailed: The instance failed to be created.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Ready
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The tag.
   */
  labelShrink?: string;
  /**
   * @remarks
   * The sorting order.
   * 
   * Valid values:
   * 
   * *   asc: The instances are sorted in ascending order.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   desc
   * 
   *     <!-- -->
   * 
   *     : The instances are sorted in descending order.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The field that you use to sort the query results.
   * 
   * Valid values:
   * 
   * *   CreateTime
   * 
   *     <!-- -->
   * 
   *     : The instances are sorted based on the time when the instances were created.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   MemoryUsed
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instances are sorted based on the memory usage of the instances
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   GpuUsed
   * 
   *     <!-- -->
   * 
   *     : The instances are sorted based on the
   * 
   *     <!-- -->
   * 
   *     GPU usage of the instances.
   * 
   *     <!-- -->
   * 
   * *   ExpireTime: The instances are sorted based on the time when the instances expired.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CpuUsed
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instances are sorted based on the CPU utilization of the instances.
   * 
   *     <!-- -->
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      filter: 'Filter',
      instanceIP: 'InstanceIP',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      labelShrink: 'Label',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      filter: 'string',
      instanceIP: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      labelShrink: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instances.
   */
  instances?: ResourceInstance[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ResourceInstance },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The services.
   */
  services?: Service[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': Service },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceServicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceServicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   Desc
   * *   Asc
   * 
   * @example
   * Desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group. You can call the [CreateResource](https://help.aliyun.com/document_detail/412111.html) operation to query the ID of the resource group.
   * 
   * @example
   * eas-r-h7lcw24dyqztwxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource group. You can call the [CreateResource](https://help.aliyun.com/document_detail/412111.html) operation to query the name of the resource group.
   * 
   * @example
   * MyResource
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource group status.
   * 
   * @example
   * ResourceReady
   */
  resourceStatus?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   Dedicated: the dedicated resource group.
   * *   SelfManaged: the self-managed resource group.
   * 
   * @example
   * Dedicated
   */
  resourceType?: string;
  /**
   * @remarks
   * The condition by which the results are sorted. By default, the query results are sorted by the timestamp type in descending order.
   * 
   * Valid values:
   * 
   * *   PrePaidInstanceCount
   * *   CpuCount
   * *   Memory
   * *   CreateTime
   * *   PostPaidInstanceCount
   * *   MemoryUsed
   * *   GpuCount
   * *   GpuUsed
   * *   CpuUsed
   * *   ServiceCount
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceStatus: 'ResourceStatus',
      resourceType: 'ResourceType',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceStatus: 'string',
      resourceType: 'string',
      sort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The resource groups.
   */
  resources?: Resource[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': Resource },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceContainersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The containers of the service.
   */
  containers?: ContainerInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      containers: 'Containers',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containers: { 'type': 'array', 'itemType': ContainerInfo },
      requestId: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.containers)) {
      $dara.Model.validateArray(this.containers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceContainersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceContainersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceContainersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword used to query instances. Instances can be queried based on instance name, instance IP address, IP address of the server where the instance resides, and instance type.
   * 
   * @example
   * 10.118.xx.xx
   */
  filter?: string;
  /**
   * @remarks
   * The IP address of the server where the instance resides.
   * 
   * @example
   * 10.224.xx.xx
   */
  hostIP?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.224.xx.xx
   */
  instanceIP?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * foo-bdc5xxxx-8l7rk
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance state.
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the instance is a preemptible instance.
   * 
   * @example
   * false
   */
  isSpot?: boolean;
  /**
   * @remarks
   * The sorting order.
   * 
   * Valid values:
   * 
   * *   asc
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     The instances are sorted in ascending order.
   * 
   * *   desc
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     The instances are sorted in descending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the resource group to which the instance belongs.
   * 
   * Valid values:
   * 
   * *   PublicResource
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DedicatedResource
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * PublicResource
   */
  resourceType?: string;
  /**
   * @remarks
   * The service role.
   * 
   * Valid values:
   * 
   * *   DataSet
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     dataset service
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   SDProxy
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Stable-Diffusion proxy service
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Standard
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     standard service
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Queue
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     queue service
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * Queue
   */
  role?: string;
  /**
   * @remarks
   * The field that you use to sort the query results.
   * 
   * *   Set the value to StartTime.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     The value specifies that the query results are sorted based on the time when the instances were created
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * StartTime
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      hostIP: 'HostIP',
      instanceIP: 'InstanceIP',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      isSpot: 'IsSpot',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      role: 'Role',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      hostIP: 'string',
      instanceIP: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      isSpot: 'boolean',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
      role: 'string',
      sort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instances.
   */
  instances?: Instance[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': Instance },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceInstancesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E089D584-B6F4-50C4-9902-DA2295B7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 166
   */
  totalCount?: number;
  /**
   * @remarks
   * The historical versions of the service.
   */
  versions?: ListServiceVersionsResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      versions: { 'type': 'array', 'itemType': ListServiceVersionsResponseBodyVersions },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceVersionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceVersionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $dara.Model {
  /**
   * @remarks
   * The field that is used for fuzzy matches. The system performs fuzzy matches only by service name.
   * 
   * @example
   * foo
   */
  filter?: string;
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gateway?: string;
  /**
   * @remarks
   * The name of the service group. For more information about how to query the name of a service group, see [ListServices](https://help.aliyun.com/document_detail/412109.html).
   * 
   * @example
   * foo
   */
  groupName?: string;
  /**
   * @remarks
   * The tag that is used to filter services.
   */
  label?: { [key: string]: string };
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   desc (default): The query results are sorted in descending order.
   * *   asc: The query results are sorted in ascending order.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the primary service that corresponds to the Band member service.
   * 
   * @example
   * eas-m-ijafy3c8cxxxx
   */
  parentServiceUid?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * quota12345
   */
  quotaId?: string;
  /**
   * @remarks
   * The name or ID of the resource group to which the service belongs.
   * 
   * @example
   * eas-r-hd0qwy8cxxxx
   */
  resourceName?: string;
  resourceType?: string;
  /**
   * @remarks
   * The server role.
   * 
   * Valid values:
   * 
   * *   DataLoader
   * *   FrontEnd
   * *   DataSet
   * *   SDProxy
   * *   LLMSscheduler
   * *   ScalableJob
   * *   LLMGateway
   * *   Job
   * *   Queue
   * 
   * @example
   * LLMGateway
   */
  role?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * echo_test
   */
  serviceName?: string;
  /**
   * @remarks
   * The service state.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopped
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Failed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Complete
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Cloning
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopping
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Updating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Waiting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   HotUpdate
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Committing
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Starting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DeleteFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Developing
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Scaling
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleted
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Pending
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   Async
   * *   Standard
   * *   Offline Task
   * *   Proxima
   * 
   * Valid values:
   * 
   * *   Async
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Standard
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   OfflineTask
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Proxima
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Standard
   */
  serviceType?: string;
  /**
   * @remarks
   * The user ID (UID) of the service.
   * 
   * @example
   * eas-m-c9iw3yitxxxx
   */
  serviceUid?: string;
  /**
   * @remarks
   * The sort field. By default, the query results are sorted by the timestamp type in descending order.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      gateway: 'Gateway',
      groupName: 'GroupName',
      label: 'Label',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentServiceUid: 'ParentServiceUid',
      quotaId: 'QuotaId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      role: 'Role',
      serviceName: 'ServiceName',
      serviceStatus: 'ServiceStatus',
      serviceType: 'ServiceType',
      serviceUid: 'ServiceUid',
      sort: 'Sort',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      gateway: 'string',
      groupName: 'string',
      label: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentServiceUid: 'string',
      quotaId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      role: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
      serviceType: 'string',
      serviceUid: 'string',
      sort: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.label) {
      $dara.Model.validateMap(this.label);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The field that is used for fuzzy matches. The system performs fuzzy matches only by service name.
   * 
   * @example
   * foo
   */
  filter?: string;
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gateway?: string;
  /**
   * @remarks
   * The name of the service group. For more information about how to query the name of a service group, see [ListServices](https://help.aliyun.com/document_detail/412109.html).
   * 
   * @example
   * foo
   */
  groupName?: string;
  /**
   * @remarks
   * The tag that is used to filter services.
   */
  labelShrink?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   desc (default): The query results are sorted in descending order.
   * *   asc: The query results are sorted in ascending order.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the primary service that corresponds to the Band member service.
   * 
   * @example
   * eas-m-ijafy3c8cxxxx
   */
  parentServiceUid?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * quota12345
   */
  quotaId?: string;
  /**
   * @remarks
   * The name or ID of the resource group to which the service belongs.
   * 
   * @example
   * eas-r-hd0qwy8cxxxx
   */
  resourceName?: string;
  resourceType?: string;
  /**
   * @remarks
   * The server role.
   * 
   * Valid values:
   * 
   * *   DataLoader
   * *   FrontEnd
   * *   DataSet
   * *   SDProxy
   * *   LLMSscheduler
   * *   ScalableJob
   * *   LLMGateway
   * *   Job
   * *   Queue
   * 
   * @example
   * LLMGateway
   */
  role?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * echo_test
   */
  serviceName?: string;
  /**
   * @remarks
   * The service state.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopped
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Failed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Complete
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Cloning
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopping
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Updating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Waiting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   HotUpdate
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Committing
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Starting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DeleteFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Developing
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Scaling
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleted
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Pending
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   Async
   * *   Standard
   * *   Offline Task
   * *   Proxima
   * 
   * Valid values:
   * 
   * *   Async
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Standard
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   OfflineTask
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Proxima
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Standard
   */
  serviceType?: string;
  /**
   * @remarks
   * The user ID (UID) of the service.
   * 
   * @example
   * eas-m-c9iw3yitxxxx
   */
  serviceUid?: string;
  /**
   * @remarks
   * The sort field. By default, the query results are sorted by the timestamp type in descending order.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      gateway: 'Gateway',
      groupName: 'GroupName',
      labelShrink: 'Label',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentServiceUid: 'ParentServiceUid',
      quotaId: 'QuotaId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      role: 'Role',
      serviceName: 'ServiceName',
      serviceStatus: 'ServiceStatus',
      serviceType: 'ServiceType',
      serviceUid: 'ServiceUid',
      sort: 'Sort',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      gateway: 'string',
      groupName: 'string',
      labelShrink: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentServiceUid: 'string',
      quotaId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      role: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
      serviceType: 'string',
      serviceUid: 'string',
      sort: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The services.
   */
  services?: Service[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': Service },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServicesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantAddonsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the plug-in.
   */
  addons?: ListTenantAddonsResponseBodyAddons[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addons: 'Addons',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListTenantAddonsResponseBodyAddons },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addons)) {
      $dara.Model.validateArray(this.addons);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantAddonsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTenantAddonsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTenantAddonsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the virtual resource group.
   * 
   * @example
   * eas-vr-npovr28onap1xxxxxx
   */
  virtualResourceId?: string;
  /**
   * @remarks
   * The name of the virtual resource group.
   * 
   * @example
   * MyVirtualResource
   */
  virtualResourceName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      virtualResourceId: 'VirtualResourceId',
      virtualResourceName: 'VirtualResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      virtualResourceId: 'string',
      virtualResourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The virtual resource groups.
   */
  virtualResources?: ListVirtualResourceResponseBodyVirtualResources[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      virtualResources: 'VirtualResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      virtualResources: { 'type': 'array', 'itemType': ListVirtualResourceResponseBodyVirtualResources },
    };
  }

  validate() {
    if(Array.isArray(this.virtualResources)) {
      $dara.Model.validateArray(this.virtualResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirtualResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVirtualResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListVirtualResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReinstallTenantAddonResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Addon prometheus_discovery is successfully reinstalled
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReinstallTenantAddonResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReinstallTenantAddonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReinstallTenantAddonResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The traffic state. Valid values:
   * 
   * *   standalone: independent traffic.
   * *   grouping: grouped traffic.
   * 
   * @example
   * grouping
   */
  trafficState?: string;
  /**
   * @remarks
   * The weight of the service. Valid values: [-1, 1000].
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      trafficState: 'TrafficState',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficState: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Releasing service [foo] in region [cn-shanghai] with weight [40], service status: [Running]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ReleaseServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Service is restarting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RestartServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBenchmarkTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmark task [benchmark-larec-test-1076] is Starting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBenchmarkTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartBenchmarkTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartBenchmarkTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Service [foo] in region [cn-shanghai] is starting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBenchmarkTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmark task [benchmark-larec-test-1076] is Stopping
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBenchmarkTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopBenchmarkTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopBenchmarkTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Succeed to auto scale service [foo]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * abcdef
   */
  quotaId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  /**
   * @remarks
   * The application type.
   * 
   * Valid values:
   * 
   * *   LLM: the large language model (LLM) application
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * LLM
   */
  appType?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * v1
   */
  appVersion?: string;
  /**
   * @remarks
   * The additional configurations that are required for service deployment.
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The number of instances. This value must be greater than 0.
   * 
   * @example
   * 1
   */
  replicas?: number;
  /**
   * @remarks
   * The service specifications. Valid values:
   * 
   * *   llama_7b_fp16
   * *   llama_7b_int8
   * *   llama_13b_fp16
   * *   llama_7b_int8
   * *   chatglm_6b_fp16
   * *   chatglm_6b_int8
   * *   chatglm2_6b_fp16
   * *   baichuan_7b_int8
   * *   baichuan_13b_fp16
   * *   baichuan_7b_fp16
   * 
   * @example
   * llama_7b_fp16
   */
  serviceSpec?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      workspaceId: 'WorkspaceId',
      appType: 'AppType',
      appVersion: 'AppVersion',
      config: 'Config',
      replicas: 'Replicas',
      serviceSpec: 'ServiceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      workspaceId: 'string',
      appType: 'string',
      appVersion: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      replicas: 'number',
      serviceSpec: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAppServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateAppServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBenchmarkTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The request body. The body includes the parameters that are set to create a stress testing task. For more information, see **Table 1. Fields in the base parameter**.
   * 
   * @example
   * {
   *     "base":  {
   *          "qps": 200
   *     }
   * }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBenchmarkTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmark task [benchmark-larec-test-1076] is Updating
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBenchmarkTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBenchmarkTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateBenchmarkTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable Internet access. Default value: false.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableInternet?: boolean;
  /**
   * @remarks
   * Specifies whether to enable private access. Default value: true.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableIntranet?: boolean;
  /**
   * @remarks
   * Specifies whether to enable HTTP to HTTPS redirection. Default value: false.
   * 
   * @example
   * false
   */
  enableSSLRedirection?: boolean;
  /**
   * @remarks
   * The instance type used by the private gateway. Valid values:
   * 
   * *   2c4g
   * *   4c8g
   * *   8c16g
   * *   16c32g
   * 
   * @example
   * ecs.c6.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether it is the default private gateway.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The alias of the private gateway.
   * 
   * @example
   * mygateway1
   */
  name?: string;
  /**
   * @remarks
   * The number of nodes in the private gateway.
   * 
   * @example
   * 2
   */
  replicas?: number;
  static names(): { [key: string]: string } {
    return {
      enableInternet: 'EnableInternet',
      enableIntranet: 'EnableIntranet',
      enableSSLRedirection: 'EnableSSLRedirection',
      instanceType: 'InstanceType',
      isDefault: 'IsDefault',
      name: 'Name',
      replicas: 'Replicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInternet: 'boolean',
      enableIntranet: 'boolean',
      enableSSLRedirection: 'boolean',
      instanceType: 'string',
      isDefault: 'boolean',
      name: 'string',
      replicas: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Gateway is updated
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGatewayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateGatewayResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The new name of the resource group after the update. The name can be up to 27 characters in length.
   * 
   * @example
   * iot
   */
  resourceName?: string;
  /**
   * @remarks
   * The configuration items of the self-managed resource group.
   */
  selfManagedResourceOptions?: UpdateResourceRequestSelfManagedResourceOptions;
  static names(): { [key: string]: string } {
    return {
      resourceName: 'ResourceName',
      selfManagedResourceOptions: 'SelfManagedResourceOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceName: 'string',
      selfManagedResourceOptions: UpdateResourceRequestSelfManagedResourceOptions,
    };
  }

  validate() {
    if(this.selfManagedResourceOptions && typeof (this.selfManagedResourceOptions as any).validate === 'function') {
      (this.selfManagedResourceOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * eas-r-asdasdasd
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * iot
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceDLinkRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR blocks of the clients that you want to connect to. After this parameter is specified, the CIDR blocks are added to the back-to-origin route of the server. Either this parameter or the VSwitchIdList parameter can be used to determine CIDR blocks.
   * 
   * @example
   * 72.16.0.0/16
   */
  destinationCIDRs?: string;
  /**
   * @remarks
   * The ID of the security group to which the Elastic Compute Service (ECS) instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp149cedsfx2rfspd2d
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the peer primary vSwitch. After this parameter is specified, an elastic network interface (ENI) is created in the VSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The vSwitches of the clients that you want to connect to. After this parameter is specified, the CIDR blocks of these vSwitches are added to the back-to-origin route of the server.
   */
  vSwitchIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationCIDRs: 'DestinationCIDRs',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vSwitchIdList: 'VSwitchIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCIDRs: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vSwitchIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchIdList)) {
      $dara.Model.validateArray(this.vSwitchIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceDLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Network interfaces are updating
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceDLinkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceDLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResourceDLinkResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The operation that updates the scheduling state of the instance in a dedicated resource group. Valid values:
   * 
   * *   Uncordon: allows scheduling the service to this instance.
   * *   Cordon: prohibits scheduling the service to this instance.
   * *   Drain: evicts the service that has been scheduled to this instance.
   * 
   * This parameter is required.
   * 
   * @example
   * Cordon
   */
  action?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * eas-i-asdasdasd
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * eas-r-asdasdasd
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResourceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInstanceLabelRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the modification takes effect on all instances in the resource group. If you set this parameter to true, the InstanceIds parameter does not take effect.
   * 
   * @example
   * false
   */
  allInstances?: boolean;
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The custom tag.
   */
  labels?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      allInstances: 'AllInstances',
      instanceIds: 'InstanceIds',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allInstances: 'boolean',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInstanceLabelShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the modification takes effect on all instances in the resource group. If you set this parameter to true, the InstanceIds parameter does not take effect.
   * 
   * @example
   * false
   */
  allInstances?: boolean;
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIdsShrink?: string;
  /**
   * @remarks
   * The custom tag.
   */
  labels?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      allInstances: 'AllInstances',
      instanceIdsShrink: 'InstanceIds',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allInstances: 'boolean',
      instanceIdsShrink: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInstanceLabelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInstanceLabelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceInstanceLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResourceInstanceLabelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the service update. Valid values: merge and replace. By default, merge is used if you do not specify this parameter.
   * 
   * *   merge: If the JSON string configured for the existing service is `{"a":"b"}` and the JSON string specified in the body parameter is `{"c":"d"}`, the JSON string is `{"a":"b","c":"d"}` after the service update.
   * *   replace: If the JSON string configured for the existing service is `{"a":"b"}` and the JSON string specified in the body parameter is `{"c":"d"}`, the JSON string is `{"c":"d"}` after the service update.
   * 
   * @example
   * merge
   */
  updateType?: string;
  /**
   * @remarks
   * The request body. The body includes the request parameters that you want to update. For more information about the request parameters, see [CreateService](https://help.aliyun.com/document_detail/412086.html).
   * 
   * @example
   * {   "name": "foo",   "model_path": "http://path/to/model.tar.gz",   "processor": "tensorflow_cpu",   "metadata": {     "instance": 2,     "memory": 7000,     "cpu": 4   } }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      updateType: 'UpdateType',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateType: 'string',
      body: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Succeed to update service [foo] in region [cn-shanghai]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerRequest extends $dara.Model {
  /**
   * @remarks
   * The Autoscaler operation.
   */
  behavior?: UpdateServiceAutoScalerRequestBehavior;
  /**
   * @remarks
   * The maximum number of instances. The value must be greater than that of the min parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  max?: number;
  /**
   * @remarks
   * The minimum number of instances. The value must be greater than 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  min?: number;
  /**
   * @remarks
   * The auto scaling policies.
   * 
   * This parameter is required.
   */
  scaleStrategies?: UpdateServiceAutoScalerRequestScaleStrategies[];
  static names(): { [key: string]: string } {
    return {
      behavior: 'behavior',
      max: 'max',
      min: 'min',
      scaleStrategies: 'scaleStrategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      behavior: UpdateServiceAutoScalerRequestBehavior,
      max: 'number',
      min: 'number',
      scaleStrategies: { 'type': 'array', 'itemType': UpdateServiceAutoScalerRequestScaleStrategies },
    };
  }

  validate() {
    if(this.behavior && typeof (this.behavior as any).validate === 'function') {
      (this.behavior as any).validate();
    }
    if(Array.isArray(this.scaleStrategies)) {
      $dara.Model.validateArray(this.scaleStrategies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Update auto scale for service [foo] successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceAutoScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceAutoScalerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceCronScalerRequest extends $dara.Model {
  /**
   * @remarks
   * The points in time that are excluded when you schedule a CronHPA job. The points in time must be specified by using a cron expression.
   */
  excludeDates?: string[];
  /**
   * @remarks
   * The description of the CronHPA job.
   * 
   * This parameter is required.
   */
  scaleJobs?: UpdateServiceCronScalerRequestScaleJobs[];
  static names(): { [key: string]: string } {
    return {
      excludeDates: 'ExcludeDates',
      scaleJobs: 'ScaleJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeDates: { 'type': 'array', 'itemType': 'string' },
      scaleJobs: { 'type': 'array', 'itemType': UpdateServiceCronScalerRequestScaleJobs },
    };
  }

  validate() {
    if(Array.isArray(this.excludeDates)) {
      $dara.Model.validateArray(this.excludeDates);
    }
    if(Array.isArray(this.scaleJobs)) {
      $dara.Model.validateArray(this.scaleJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceCronScalerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Update cron scaler for service [foo] successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceCronScalerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceCronScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceCronScalerResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to isolate the service instance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isolate?: boolean;
  static names(): { [key: string]: string } {
    return {
      isolate: 'Isolate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolate: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceInstanceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceLabelRequest extends $dara.Model {
  /**
   * @remarks
   * The custom service tags.
   * 
   * This parameter is required.
   */
  labels?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceLabelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Succeed to update service [service_from_XXXX] labels.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceLabelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceLabelResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceLabelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceMirrorRequest extends $dara.Model {
  /**
   * @remarks
   * The percentage of traffic that you want to mirror. Valid values: 0 to 100.
   * 
   * @example
   * 30
   */
  ratio?: number;
  /**
   * @remarks
   * The service instances.
   */
  target?: string[];
  static names(): { [key: string]: string } {
    return {
      ratio: 'Ratio',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ratio: 'number',
      target: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.target)) {
      $dara.Model.validateArray(this.target);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceMirrorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Traffic mirroring is updating for service [foo] in region [cn-shanghia], ratio [70%]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceMirrorResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceMirrorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceMirrorResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSafetyLockRequest extends $dara.Model {
  /**
   * @remarks
   * The lock scope. Valid values:
   * 
   * *   all: locks all operations.
   * *   dangerous: locks dangerous operations such as delete and stop operations.
   * *   none: locks no operations.
   * 
   * This parameter is required.
   * 
   * @example
   * dangerous
   */
  lock?: string;
  static names(): { [key: string]: string } {
    return {
      lock: 'Lock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lock: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSafetyLockResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * service safety lock updated to dangerous
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E089D584-B6F4-50C4-9902-DA2295B7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSafetyLockResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceSafetyLockResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceSafetyLockResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The destination version of the service. The value must be of the INT type. The value must be greater than 0 and smaller than the current version of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Service [foo] in region [cn-shanghai] is starting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServiceVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to disable the retention period of preemptible instances.
   * 
   * @example
   * true
   */
  disableSpotProtectionPeriod?: boolean;
  /**
   * @remarks
   * The resources in the virtual resource group.
   * 
   * >  If you specify this parameter, previous data is overwritten.
   */
  resources?: UpdateVirtualResourceRequestResources[];
  /**
   * @remarks
   * The new name of the virtual resource group.
   * 
   * @example
   * NewMyVirtualResource
   */
  virtualResourceName?: string;
  static names(): { [key: string]: string } {
    return {
      disableSpotProtectionPeriod: 'DisableSpotProtectionPeriod',
      resources: 'Resources',
      virtualResourceName: 'VirtualResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableSpotProtectionPeriod: 'boolean',
      resources: { 'type': 'array', 'itemType': UpdateVirtualResourceRequestResources },
      virtualResourceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successfully updated virtual resource eas-vr-npovr28onap1xxxxxx
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVirtualResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateVirtualResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateVirtualResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-beijing': "pai-eas.cn-beijing.aliyuncs.com",
      'cn-zhangjiakou': "pai-eas.cn-zhangjiakou.aliyuncs.com",
      'cn-hangzhou': "pai-eas.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "pai-eas.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "pai-eas.cn-shenzhen.aliyuncs.com",
      'cn-hongkong': "pai-eas.cn-hongkong.aliyuncs.com",
      'ap-southeast-1': "pai-eas.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "pai-eas.ap-southeast-5.aliyuncs.com",
      'us-east-1': "pai-eas.us-east-1.aliyuncs.com",
      'us-west-1': "pai-eas.us-west-1.aliyuncs.com",
      'eu-central-1': "pai-eas.eu-central-1.aliyuncs.com",
      'ap-south-1': "pai-eas.ap-south-1.aliyuncs.com",
      'cn-shanghai-finance-1': "pai-eas.cn-shanghai-finance-1.aliyuncs.com",
      'cn-north-2-gov-1': "pai-eas.cn-north-2-gov-1.aliyuncs.com",
      'cn-chengdu': "pai-eas.cn-chengdu.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Binds a custom domain name to a private gateway.
   * 
   * @param tmpReq - AttachGatewayDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachGatewayDomainResponse
   */
  async attachGatewayDomainWithOptions(ClusterId: string, GatewayId: string, tmpReq: AttachGatewayDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AttachGatewayDomainResponse> {
    tmpReq.validate();
    let request = new AttachGatewayDomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customDomain)) {
      request.customDomainShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customDomain, "CustomDomain", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customDomainShrink)) {
      query["CustomDomain"] = request.customDomainShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "AttachGatewayDomain",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/domain/attach`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AttachGatewayDomainResponse>(await this.callApi(params, req, runtime), new AttachGatewayDomainResponse({}));
    } else {
      return $dara.cast<AttachGatewayDomainResponse>(await this.execute(params, req, runtime), new AttachGatewayDomainResponse({}));
    }

  }

  /**
   * Binds a custom domain name to a private gateway.
   * 
   * @param request - AttachGatewayDomainRequest
   * @returns AttachGatewayDomainResponse
   */
  async attachGatewayDomain(ClusterId: string, GatewayId: string, request: AttachGatewayDomainRequest): Promise<AttachGatewayDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.attachGatewayDomainWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Clones a service.
   * 
   * @param tmpReq - CloneServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneServiceResponse
   */
  async cloneServiceWithOptions(ClusterId: string, ServiceName: string, tmpReq: CloneServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CloneServiceResponse> {
    tmpReq.validate();
    let request = new CloneServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "Labels", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelsShrink)) {
      query["Labels"] = request.labelsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CloneService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CloneServiceResponse>(await this.callApi(params, req, runtime), new CloneServiceResponse({}));
    } else {
      return $dara.cast<CloneServiceResponse>(await this.execute(params, req, runtime), new CloneServiceResponse({}));
    }

  }

  /**
   * Clones a service.
   * 
   * @param request - CloneServiceRequest
   * @returns CloneServiceResponse
   */
  async cloneService(ClusterId: string, ServiceName: string, request: CloneServiceRequest): Promise<CloneServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Commits the Worker0 container in the custom container service and deploys the container as a new image.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CommitServiceResponse
   */
  async commitServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CommitServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CommitService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/commit`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CommitServiceResponse>(await this.callApi(params, req, runtime), new CommitServiceResponse({}));
    } else {
      return $dara.cast<CommitServiceResponse>(await this.execute(params, req, runtime), new CommitServiceResponse({}));
    }

  }

  /**
   * Commits the Worker0 container in the custom container service and deploys the container as a new image.
   * @returns CommitServiceResponse
   */
  async commitService(ClusterId: string, ServiceName: string): Promise<CommitServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.commitServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Creates an access control list (ACL) for a private gateway. The IP CIDR blocks added to the ACL can access the private gateway.
   * 
   * @param tmpReq - CreateAclPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAclPolicyResponse
   */
  async createAclPolicyWithOptions(ClusterId: string, GatewayId: string, tmpReq: CreateAclPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateAclPolicyResponse> {
    tmpReq.validate();
    let request = new CreateAclPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aclPolicyList)) {
      request.aclPolicyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aclPolicyList, "AclPolicyList", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aclPolicyListShrink)) {
      query["AclPolicyList"] = request.aclPolicyListShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAclPolicy",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/acl_policy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAclPolicyResponse>(await this.callApi(params, req, runtime), new CreateAclPolicyResponse({}));
    } else {
      return $dara.cast<CreateAclPolicyResponse>(await this.execute(params, req, runtime), new CreateAclPolicyResponse({}));
    }

  }

  /**
   * Creates an access control list (ACL) for a private gateway. The IP CIDR blocks added to the ACL can access the private gateway.
   * 
   * @param request - CreateAclPolicyRequest
   * @returns CreateAclPolicyResponse
   */
  async createAclPolicy(ClusterId: string, GatewayId: string, request: CreateAclPolicyRequest): Promise<CreateAclPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAclPolicyWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Creates an application service.
   * 
   * @param request - CreateAppServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppServiceResponse
   */
  async createAppServiceWithOptions(request: CreateAppServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateAppServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.quotaId)) {
      query["QuotaId"] = request.quotaId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.replicas)) {
      body["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceSpec)) {
      body["ServiceSpec"] = request.serviceSpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAppService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/app_services`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAppServiceResponse>(await this.callApi(params, req, runtime), new CreateAppServiceResponse({}));
    } else {
      return $dara.cast<CreateAppServiceResponse>(await this.execute(params, req, runtime), new CreateAppServiceResponse({}));
    }

  }

  /**
   * Creates an application service.
   * 
   * @param request - CreateAppServiceRequest
   * @returns CreateAppServiceResponse
   */
  async createAppService(request: CreateAppServiceRequest): Promise<CreateAppServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppServiceWithOptions(request, headers, runtime);
  }

  /**
   * Creates a stress testing task.
   * 
   * @param request - CreateBenchmarkTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBenchmarkTaskResponse
   */
  async createBenchmarkTaskWithOptions(request: CreateBenchmarkTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateBenchmarkTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new CreateBenchmarkTaskResponse({}));
    } else {
      return $dara.cast<CreateBenchmarkTaskResponse>(await this.execute(params, req, runtime), new CreateBenchmarkTaskResponse({}));
    }

  }

  /**
   * Creates a stress testing task.
   * 
   * @param request - CreateBenchmarkTaskRequest
   * @returns CreateBenchmarkTaskResponse
   */
  async createBenchmarkTask(request: CreateBenchmarkTaskRequest): Promise<CreateBenchmarkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createBenchmarkTaskWithOptions(request, headers, runtime);
  }

  /**
   * Creates a gateway.
   * 
   * @param request - CreateGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayResponse
   */
  async createGatewayWithOptions(request: CreateGatewayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateGatewayResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenewal)) {
      body["AutoRenewal"] = request.autoRenewal;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.enableInternet)) {
      body["EnableInternet"] = request.enableInternet;
    }

    if (!$dara.isNull(request.enableIntranet)) {
      body["EnableIntranet"] = request.enableIntranet;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.replicas)) {
      body["Replicas"] = request.replicas;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGateway",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateGatewayResponse>(await this.callApi(params, req, runtime), new CreateGatewayResponse({}));
    } else {
      return $dara.cast<CreateGatewayResponse>(await this.execute(params, req, runtime), new CreateGatewayResponse({}));
    }

  }

  /**
   * Creates a gateway.
   * 
   * @param request - CreateGatewayRequest
   * @returns CreateGatewayResponse
   */
  async createGateway(request: CreateGatewayRequest): Promise<CreateGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGatewayWithOptions(request, headers, runtime);
  }

  /**
   * Creates an internal endpoint of a private gateway.
   * 
   * @param request - CreateGatewayIntranetLinkedVpcRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayIntranetLinkedVpcResponse
   */
  async createGatewayIntranetLinkedVpcWithOptions(ClusterId: string, GatewayId: string, request: CreateGatewayIntranetLinkedVpcRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateGatewayIntranetLinkedVpcResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enableAuthoritativeDns)) {
      query["EnableAuthoritativeDns"] = request.enableAuthoritativeDns;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGatewayIntranetLinkedVpc",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/intranet_endpoint_linked_vpc`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateGatewayIntranetLinkedVpcResponse>(await this.callApi(params, req, runtime), new CreateGatewayIntranetLinkedVpcResponse({}));
    } else {
      return $dara.cast<CreateGatewayIntranetLinkedVpcResponse>(await this.execute(params, req, runtime), new CreateGatewayIntranetLinkedVpcResponse({}));
    }

  }

  /**
   * Creates an internal endpoint of a private gateway.
   * 
   * @param request - CreateGatewayIntranetLinkedVpcRequest
   * @returns CreateGatewayIntranetLinkedVpcResponse
   */
  async createGatewayIntranetLinkedVpc(ClusterId: string, GatewayId: string, request: CreateGatewayIntranetLinkedVpcRequest): Promise<CreateGatewayIntranetLinkedVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGatewayIntranetLinkedVpcWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Creates a VPC peering connection on an internal endpoint of a gateway.
   * 
   * @param tmpReq - CreateGatewayIntranetLinkedVpcPeerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayIntranetLinkedVpcPeerResponse
   */
  async createGatewayIntranetLinkedVpcPeerWithOptions(ClusterId: string, GatewayId: string, tmpReq: CreateGatewayIntranetLinkedVpcPeerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateGatewayIntranetLinkedVpcPeerResponse> {
    tmpReq.validate();
    let request = new CreateGatewayIntranetLinkedVpcPeerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.peerVpcs)) {
      request.peerVpcsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.peerVpcs, "PeerVpcs", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.peerVpcsShrink)) {
      query["PeerVpcs"] = request.peerVpcsShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateGatewayIntranetLinkedVpcPeer",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/intranet_endpoint_linked_vpc_peer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateGatewayIntranetLinkedVpcPeerResponse>(await this.callApi(params, req, runtime), new CreateGatewayIntranetLinkedVpcPeerResponse({}));
    } else {
      return $dara.cast<CreateGatewayIntranetLinkedVpcPeerResponse>(await this.execute(params, req, runtime), new CreateGatewayIntranetLinkedVpcPeerResponse({}));
    }

  }

  /**
   * Creates a VPC peering connection on an internal endpoint of a gateway.
   * 
   * @param request - CreateGatewayIntranetLinkedVpcPeerRequest
   * @returns CreateGatewayIntranetLinkedVpcPeerResponse
   */
  async createGatewayIntranetLinkedVpcPeer(ClusterId: string, GatewayId: string, request: CreateGatewayIntranetLinkedVpcPeerRequest): Promise<CreateGatewayIntranetLinkedVpcPeerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGatewayIntranetLinkedVpcPeerWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Creates a resource group.
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/144261.html) of Elastic Algorithm Service (EAS).
   * 
   * @param request - CreateResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceResponse
   */
  async createResourceWithOptions(request: CreateResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenewal)) {
      body["AutoRenewal"] = request.autoRenewal;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.ecsInstanceCount)) {
      body["EcsInstanceCount"] = request.ecsInstanceCount;
    }

    if (!$dara.isNull(request.ecsInstanceType)) {
      body["EcsInstanceType"] = request.ecsInstanceType;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.selfManagedResourceOptions)) {
      body["SelfManagedResourceOptions"] = request.selfManagedResourceOptions;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      body["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!$dara.isNull(request.zone)) {
      body["Zone"] = request.zone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateResourceResponse>(await this.callApi(params, req, runtime), new CreateResourceResponse({}));
    } else {
      return $dara.cast<CreateResourceResponse>(await this.execute(params, req, runtime), new CreateResourceResponse({}));
    }

  }

  /**
   * Creates a resource group.
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/144261.html) of Elastic Algorithm Service (EAS).
   * 
   * @param request - CreateResourceRequest
   * @returns CreateResourceResponse
   */
  async createResource(request: CreateResourceRequest): Promise<CreateResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceWithOptions(request, headers, runtime);
  }

  /**
   * Creates instances in a dedicated resource group.
   * 
   * @param request - CreateResourceInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceInstancesResponse
   */
  async createResourceInstancesWithOptions(ClusterId: string, ResourceId: string, request: CreateResourceInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateResourceInstancesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenewal)) {
      body["AutoRenewal"] = request.autoRenewal;
    }

    if (!$dara.isNull(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.ecsInstanceCount)) {
      body["EcsInstanceCount"] = request.ecsInstanceCount;
    }

    if (!$dara.isNull(request.ecsInstanceType)) {
      body["EcsInstanceType"] = request.ecsInstanceType;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.systemDiskSize)) {
      body["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!$dara.isNull(request.userData)) {
      body["UserData"] = request.userData;
    }

    if (!$dara.isNull(request.zone)) {
      body["Zone"] = request.zone;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateResourceInstancesResponse>(await this.callApi(params, req, runtime), new CreateResourceInstancesResponse({}));
    } else {
      return $dara.cast<CreateResourceInstancesResponse>(await this.execute(params, req, runtime), new CreateResourceInstancesResponse({}));
    }

  }

  /**
   * Creates instances in a dedicated resource group.
   * 
   * @param request - CreateResourceInstancesRequest
   * @returns CreateResourceInstancesResponse
   */
  async createResourceInstances(ClusterId: string, ResourceId: string, request: CreateResourceInstancesRequest): Promise<CreateResourceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceInstancesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Enables the LogShipper feature of Log Service for a resource group.
   * 
   * @param request - CreateResourceLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceLogResponse
   */
  async createResourceLogWithOptions(ClusterId: string, ResourceId: string, request: CreateResourceLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateResourceLogResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.logStore)) {
      body["LogStore"] = request.logStore;
    }

    if (!$dara.isNull(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateResourceLog",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/log`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateResourceLogResponse>(await this.callApi(params, req, runtime), new CreateResourceLogResponse({}));
    } else {
      return $dara.cast<CreateResourceLogResponse>(await this.execute(params, req, runtime), new CreateResourceLogResponse({}));
    }

  }

  /**
   * Enables the LogShipper feature of Log Service for a resource group.
   * 
   * @param request - CreateResourceLogRequest
   * @returns CreateResourceLogResponse
   */
  async createResourceLog(ClusterId: string, ResourceId: string, request: CreateResourceLogRequest): Promise<CreateResourceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceLogWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Creates a model service in Elastic Algorithm Service (EAS).
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/144261.html) of Elastic Algorithm Service (EAS).
   * 
   * @param tmpReq - CreateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceResponse
   */
  async createServiceWithOptions(tmpReq: CreateServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateServiceResponse> {
    tmpReq.validate();
    let request = new CreateServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "Labels", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.develop)) {
      query["Develop"] = request.develop;
    }

    if (!$dara.isNull(request.labelsShrink)) {
      query["Labels"] = request.labelsShrink;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateServiceResponse>(await this.callApi(params, req, runtime), new CreateServiceResponse({}));
    } else {
      return $dara.cast<CreateServiceResponse>(await this.execute(params, req, runtime), new CreateServiceResponse({}));
    }

  }

  /**
   * Creates a model service in Elastic Algorithm Service (EAS).
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/144261.html) of Elastic Algorithm Service (EAS).
   * 
   * @param request - CreateServiceRequest
   * @returns CreateServiceResponse
   */
  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceWithOptions(request, headers, runtime);
  }

  /**
   * Enables the Autoscaler feature and creates an Autoscaler controller for a service.
   * 
   * @param request - CreateServiceAutoScalerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceAutoScalerResponse
   */
  async createServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, request: CreateServiceAutoScalerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateServiceAutoScalerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.behavior)) {
      body["behavior"] = request.behavior;
    }

    if (!$dara.isNull(request.max)) {
      body["max"] = request.max;
    }

    if (!$dara.isNull(request.min)) {
      body["min"] = request.min;
    }

    if (!$dara.isNull(request.scaleStrategies)) {
      body["scaleStrategies"] = request.scaleStrategies;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/autoscaler`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new CreateServiceAutoScalerResponse({}));
    } else {
      return $dara.cast<CreateServiceAutoScalerResponse>(await this.execute(params, req, runtime), new CreateServiceAutoScalerResponse({}));
    }

  }

  /**
   * Enables the Autoscaler feature and creates an Autoscaler controller for a service.
   * 
   * @param request - CreateServiceAutoScalerRequest
   * @returns CreateServiceAutoScalerResponse
   */
  async createServiceAutoScaler(ClusterId: string, ServiceName: string, request: CreateServiceAutoScalerRequest): Promise<CreateServiceAutoScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceAutoScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Enables the Cron Horizontal Pod Autoscaler (CronHPA) feature for a service.
   * 
   * @param request - CreateServiceCronScalerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceCronScalerResponse
   */
  async createServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, request: CreateServiceCronScalerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateServiceCronScalerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeDates)) {
      body["ExcludeDates"] = request.excludeDates;
    }

    if (!$dara.isNull(request.scaleJobs)) {
      body["ScaleJobs"] = request.scaleJobs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceCronScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/cronscaler`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateServiceCronScalerResponse>(await this.callApi(params, req, runtime), new CreateServiceCronScalerResponse({}));
    } else {
      return $dara.cast<CreateServiceCronScalerResponse>(await this.execute(params, req, runtime), new CreateServiceCronScalerResponse({}));
    }

  }

  /**
   * Enables the Cron Horizontal Pod Autoscaler (CronHPA) feature for a service.
   * 
   * @param request - CreateServiceCronScalerRequest
   * @returns CreateServiceCronScalerResponse
   */
  async createServiceCronScaler(ClusterId: string, ServiceName: string, request: CreateServiceCronScalerRequest): Promise<CreateServiceCronScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceCronScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Enables the traffic mirroring feature for a service. After the feature is enabled, requests received by the service can be mirrored to another service.
   * 
   * @param request - CreateServiceMirrorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceMirrorResponse
   */
  async createServiceMirrorWithOptions(ClusterId: string, ServiceName: string, request: CreateServiceMirrorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateServiceMirrorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ratio)) {
      body["Ratio"] = request.ratio;
    }

    if (!$dara.isNull(request.target)) {
      body["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceMirror",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/mirror`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateServiceMirrorResponse>(await this.callApi(params, req, runtime), new CreateServiceMirrorResponse({}));
    } else {
      return $dara.cast<CreateServiceMirrorResponse>(await this.execute(params, req, runtime), new CreateServiceMirrorResponse({}));
    }

  }

  /**
   * Enables the traffic mirroring feature for a service. After the feature is enabled, requests received by the service can be mirrored to another service.
   * 
   * @param request - CreateServiceMirrorRequest
   * @returns CreateServiceMirrorResponse
   */
  async createServiceMirror(ClusterId: string, ServiceName: string, request: CreateServiceMirrorRequest): Promise<CreateServiceMirrorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceMirrorWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Creates a virtual resource group.
   * 
   * @param request - CreateVirtualResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVirtualResourceResponse
   */
  async createVirtualResourceWithOptions(request: CreateVirtualResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateVirtualResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disableSpotProtectionPeriod)) {
      body["DisableSpotProtectionPeriod"] = request.disableSpotProtectionPeriod;
    }

    if (!$dara.isNull(request.resources)) {
      body["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.virtualResourceName)) {
      body["VirtualResourceName"] = request.virtualResourceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVirtualResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/virtualresources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateVirtualResourceResponse>(await this.callApi(params, req, runtime), new CreateVirtualResourceResponse({}));
    } else {
      return $dara.cast<CreateVirtualResourceResponse>(await this.execute(params, req, runtime), new CreateVirtualResourceResponse({}));
    }

  }

  /**
   * Creates a virtual resource group.
   * 
   * @param request - CreateVirtualResourceRequest
   * @returns CreateVirtualResourceResponse
   */
  async createVirtualResource(request: CreateVirtualResourceRequest): Promise<CreateVirtualResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVirtualResourceWithOptions(request, headers, runtime);
  }

  /**
   * Deletes an access control list (ACL) for a private gateway. The IP CIDR block that is deleted from the ACL cannot access the private gateway.
   * 
   * @param tmpReq - DeleteAclPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAclPolicyResponse
   */
  async deleteAclPolicyWithOptions(ClusterId: string, GatewayId: string, tmpReq: DeleteAclPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteAclPolicyResponse> {
    tmpReq.validate();
    let request = new DeleteAclPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.aclPolicyList)) {
      request.aclPolicyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aclPolicyList, "AclPolicyList", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aclPolicyListShrink)) {
      query["AclPolicyList"] = request.aclPolicyListShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAclPolicy",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/acl_policy`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAclPolicyResponse>(await this.callApi(params, req, runtime), new DeleteAclPolicyResponse({}));
    } else {
      return $dara.cast<DeleteAclPolicyResponse>(await this.execute(params, req, runtime), new DeleteAclPolicyResponse({}));
    }

  }

  /**
   * Deletes an access control list (ACL) for a private gateway. The IP CIDR block that is deleted from the ACL cannot access the private gateway.
   * 
   * @param request - DeleteAclPolicyRequest
   * @returns DeleteAclPolicyResponse
   */
  async deleteAclPolicy(ClusterId: string, GatewayId: string, request: DeleteAclPolicyRequest): Promise<DeleteAclPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAclPolicyWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Deletes a stress testing task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBenchmarkTaskResponse
   */
  async deleteBenchmarkTaskWithOptions(ClusterId: string, TaskName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteBenchmarkTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(TaskName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new DeleteBenchmarkTaskResponse({}));
    } else {
      return $dara.cast<DeleteBenchmarkTaskResponse>(await this.execute(params, req, runtime), new DeleteBenchmarkTaskResponse({}));
    }

  }

  /**
   * Deletes a stress testing task.
   * @returns DeleteBenchmarkTaskResponse
   */
  async deleteBenchmarkTask(ClusterId: string, TaskName: string): Promise<DeleteBenchmarkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  /**
   * Deletes a private gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayResponse
   */
  async deleteGatewayWithOptions(ClusterId: string, GatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteGatewayResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGateway",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteGatewayResponse>(await this.callApi(params, req, runtime), new DeleteGatewayResponse({}));
    } else {
      return $dara.cast<DeleteGatewayResponse>(await this.execute(params, req, runtime), new DeleteGatewayResponse({}));
    }

  }

  /**
   * Deletes a private gateway.
   * @returns DeleteGatewayResponse
   */
  async deleteGateway(ClusterId: string, GatewayId: string): Promise<DeleteGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayWithOptions(ClusterId, GatewayId, headers, runtime);
  }

  /**
   * 删除网关内网访问端点
   * 
   * @param request - DeleteGatewayIntranetLinkedVpcRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayIntranetLinkedVpcResponse
   */
  async deleteGatewayIntranetLinkedVpcWithOptions(ClusterId: string, GatewayId: string, request: DeleteGatewayIntranetLinkedVpcRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteGatewayIntranetLinkedVpcResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewayIntranetLinkedVpc",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/intranet_endpoint_linked_vpc`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteGatewayIntranetLinkedVpcResponse>(await this.callApi(params, req, runtime), new DeleteGatewayIntranetLinkedVpcResponse({}));
    } else {
      return $dara.cast<DeleteGatewayIntranetLinkedVpcResponse>(await this.execute(params, req, runtime), new DeleteGatewayIntranetLinkedVpcResponse({}));
    }

  }

  /**
   * 删除网关内网访问端点
   * 
   * @param request - DeleteGatewayIntranetLinkedVpcRequest
   * @returns DeleteGatewayIntranetLinkedVpcResponse
   */
  async deleteGatewayIntranetLinkedVpc(ClusterId: string, GatewayId: string, request: DeleteGatewayIntranetLinkedVpcRequest): Promise<DeleteGatewayIntranetLinkedVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayIntranetLinkedVpcWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Deletes a VPC peering connection from an internal endpoint of a gateway.
   * 
   * @param tmpReq - DeleteGatewayIntranetLinkedVpcPeerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayIntranetLinkedVpcPeerResponse
   */
  async deleteGatewayIntranetLinkedVpcPeerWithOptions(ClusterId: string, GatewayId: string, tmpReq: DeleteGatewayIntranetLinkedVpcPeerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteGatewayIntranetLinkedVpcPeerResponse> {
    tmpReq.validate();
    let request = new DeleteGatewayIntranetLinkedVpcPeerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.peerVpcs)) {
      request.peerVpcsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.peerVpcs, "PeerVpcs", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.peerVpcsShrink)) {
      query["PeerVpcs"] = request.peerVpcsShrink;
    }

    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteGatewayIntranetLinkedVpcPeer",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/intranet_endpoint_linked_vpc_peer`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteGatewayIntranetLinkedVpcPeerResponse>(await this.callApi(params, req, runtime), new DeleteGatewayIntranetLinkedVpcPeerResponse({}));
    } else {
      return $dara.cast<DeleteGatewayIntranetLinkedVpcPeerResponse>(await this.execute(params, req, runtime), new DeleteGatewayIntranetLinkedVpcPeerResponse({}));
    }

  }

  /**
   * Deletes a VPC peering connection from an internal endpoint of a gateway.
   * 
   * @param request - DeleteGatewayIntranetLinkedVpcPeerRequest
   * @returns DeleteGatewayIntranetLinkedVpcPeerResponse
   */
  async deleteGatewayIntranetLinkedVpcPeer(ClusterId: string, GatewayId: string, request: DeleteGatewayIntranetLinkedVpcPeerRequest): Promise<DeleteGatewayIntranetLinkedVpcPeerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayIntranetLinkedVpcPeerWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Deletes a resource group that contains no resources or instances.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceResponse
   */
  async deleteResourceWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteResourceResponse>(await this.callApi(params, req, runtime), new DeleteResourceResponse({}));
    } else {
      return $dara.cast<DeleteResourceResponse>(await this.execute(params, req, runtime), new DeleteResourceResponse({}));
    }

  }

  /**
   * Deletes a resource group that contains no resources or instances.
   * @returns DeleteResourceResponse
   */
  async deleteResource(ClusterId: string, ResourceId: string): Promise<DeleteResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Disables the virtual private cloud (VPC) direct connection feature for a dedicated resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceDLinkResponse
   */
  async deleteResourceDLinkWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteResourceDLinkResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceDLink",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/dlink`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteResourceDLinkResponse>(await this.callApi(params, req, runtime), new DeleteResourceDLinkResponse({}));
    } else {
      return $dara.cast<DeleteResourceDLinkResponse>(await this.execute(params, req, runtime), new DeleteResourceDLinkResponse({}));
    }

  }

  /**
   * Disables the virtual private cloud (VPC) direct connection feature for a dedicated resource group.
   * @returns DeleteResourceDLinkResponse
   */
  async deleteResourceDLink(ClusterId: string, ResourceId: string): Promise<DeleteResourceDLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceDLinkWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Deletes the tags of an instance in a resource group.
   * 
   * @param tmpReq - DeleteResourceInstanceLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceInstanceLabelResponse
   */
  async deleteResourceInstanceLabelWithOptions(ClusterId: string, ResourceId: string, tmpReq: DeleteResourceInstanceLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteResourceInstanceLabelResponse> {
    tmpReq.validate();
    let request = new DeleteResourceInstanceLabelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "simple");
    }

    if (!$dara.isNull(tmpReq.keys)) {
      request.keysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keys, "Keys", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allInstances)) {
      query["AllInstances"] = request.allInstances;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.keysShrink)) {
      query["Keys"] = request.keysShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceInstanceLabel",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/label`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteResourceInstanceLabelResponse>(await this.callApi(params, req, runtime), new DeleteResourceInstanceLabelResponse({}));
    } else {
      return $dara.cast<DeleteResourceInstanceLabelResponse>(await this.execute(params, req, runtime), new DeleteResourceInstanceLabelResponse({}));
    }

  }

  /**
   * Deletes the tags of an instance in a resource group.
   * 
   * @param request - DeleteResourceInstanceLabelRequest
   * @returns DeleteResourceInstanceLabelResponse
   */
  async deleteResourceInstanceLabel(ClusterId: string, ResourceId: string, request: DeleteResourceInstanceLabelRequest): Promise<DeleteResourceInstanceLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceInstanceLabelWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Deletes instances in a dedicated resource group. You can delete only pay-as-you-go instances as a regular user.
   * 
   * @param request - DeleteResourceInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceInstancesResponse
   */
  async deleteResourceInstancesWithOptions(ClusterId: string, ResourceId: string, request: DeleteResourceInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteResourceInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allFailed)) {
      query["AllFailed"] = request.allFailed;
    }

    if (!$dara.isNull(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/instances`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteResourceInstancesResponse>(await this.callApi(params, req, runtime), new DeleteResourceInstancesResponse({}));
    } else {
      return $dara.cast<DeleteResourceInstancesResponse>(await this.execute(params, req, runtime), new DeleteResourceInstancesResponse({}));
    }

  }

  /**
   * Deletes instances in a dedicated resource group. You can delete only pay-as-you-go instances as a regular user.
   * 
   * @param request - DeleteResourceInstancesRequest
   * @returns DeleteResourceInstancesResponse
   */
  async deleteResourceInstances(ClusterId: string, ResourceId: string, request: DeleteResourceInstancesRequest): Promise<DeleteResourceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceInstancesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Disables the LogShipper feature of Log Service for a dedicated resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceLogResponse
   */
  async deleteResourceLogWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteResourceLogResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteResourceLog",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/log`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteResourceLogResponse>(await this.callApi(params, req, runtime), new DeleteResourceLogResponse({}));
    } else {
      return $dara.cast<DeleteResourceLogResponse>(await this.execute(params, req, runtime), new DeleteResourceLogResponse({}));
    }

  }

  /**
   * Disables the LogShipper feature of Log Service for a dedicated resource group.
   * @returns DeleteResourceLogResponse
   */
  async deleteResourceLog(ClusterId: string, ResourceId: string): Promise<DeleteResourceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceLogWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Deletes a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceResponse
   */
  async deleteServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteServiceResponse>(await this.callApi(params, req, runtime), new DeleteServiceResponse({}));
    } else {
      return $dara.cast<DeleteServiceResponse>(await this.execute(params, req, runtime), new DeleteServiceResponse({}));
    }

  }

  /**
   * Deletes a service.
   * @returns DeleteServiceResponse
   */
  async deleteService(ClusterId: string, ServiceName: string): Promise<DeleteServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Deletes the existing Autoscaler controller and disables the Autoscaler feature for a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceAutoScalerResponse
   */
  async deleteServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteServiceAutoScalerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/autoscaler`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new DeleteServiceAutoScalerResponse({}));
    } else {
      return $dara.cast<DeleteServiceAutoScalerResponse>(await this.execute(params, req, runtime), new DeleteServiceAutoScalerResponse({}));
    }

  }

  /**
   * Deletes the existing Autoscaler controller and disables the Autoscaler feature for a service.
   * @returns DeleteServiceAutoScalerResponse
   */
  async deleteServiceAutoScaler(ClusterId: string, ServiceName: string): Promise<DeleteServiceAutoScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceAutoScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Disables the Cronscaler feature for a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceCronScalerResponse
   */
  async deleteServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteServiceCronScalerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceCronScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/cronscaler`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteServiceCronScalerResponse>(await this.callApi(params, req, runtime), new DeleteServiceCronScalerResponse({}));
    } else {
      return $dara.cast<DeleteServiceCronScalerResponse>(await this.execute(params, req, runtime), new DeleteServiceCronScalerResponse({}));
    }

  }

  /**
   * Disables the Cronscaler feature for a service.
   * @returns DeleteServiceCronScalerResponse
   */
  async deleteServiceCronScaler(ClusterId: string, ServiceName: string): Promise<DeleteServiceCronScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceCronScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Restarts the instances of a service.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceInstancesResponse
   */
  async deleteServiceInstancesWithOptions(ClusterId: string, ServiceName: string, request: DeleteServiceInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteServiceInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.container)) {
      query["Container"] = request.container;
    }

    if (!$dara.isNull(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    if (!$dara.isNull(request.softRestart)) {
      query["SoftRestart"] = request.softRestart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/instances`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteServiceInstancesResponse>(await this.callApi(params, req, runtime), new DeleteServiceInstancesResponse({}));
    } else {
      return $dara.cast<DeleteServiceInstancesResponse>(await this.execute(params, req, runtime), new DeleteServiceInstancesResponse({}));
    }

  }

  /**
   * Restarts the instances of a service.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @returns DeleteServiceInstancesResponse
   */
  async deleteServiceInstances(ClusterId: string, ServiceName: string, request: DeleteServiceInstancesRequest): Promise<DeleteServiceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceInstancesWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Deletes existing service tags.
   * 
   * @param tmpReq - DeleteServiceLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceLabelResponse
   */
  async deleteServiceLabelWithOptions(ClusterId: string, ServiceName: string, tmpReq: DeleteServiceLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteServiceLabelResponse> {
    tmpReq.validate();
    let request = new DeleteServiceLabelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.keys)) {
      request.keysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keys, "Keys", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keysShrink)) {
      query["Keys"] = request.keysShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceLabel",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/label`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteServiceLabelResponse>(await this.callApi(params, req, runtime), new DeleteServiceLabelResponse({}));
    } else {
      return $dara.cast<DeleteServiceLabelResponse>(await this.execute(params, req, runtime), new DeleteServiceLabelResponse({}));
    }

  }

  /**
   * Deletes existing service tags.
   * 
   * @param request - DeleteServiceLabelRequest
   * @returns DeleteServiceLabelResponse
   */
  async deleteServiceLabel(ClusterId: string, ServiceName: string, request: DeleteServiceLabelRequest): Promise<DeleteServiceLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceLabelWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Disables the traffic mirroring feature for a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceMirrorResponse
   */
  async deleteServiceMirrorWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteServiceMirrorResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteServiceMirror",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/mirror`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteServiceMirrorResponse>(await this.callApi(params, req, runtime), new DeleteServiceMirrorResponse({}));
    } else {
      return $dara.cast<DeleteServiceMirrorResponse>(await this.execute(params, req, runtime), new DeleteServiceMirrorResponse({}));
    }

  }

  /**
   * Disables the traffic mirroring feature for a service.
   * @returns DeleteServiceMirrorResponse
   */
  async deleteServiceMirror(ClusterId: string, ServiceName: string): Promise<DeleteServiceMirrorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceMirrorWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Deletes a virtual resource group that contains no resources or instances.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVirtualResourceResponse
   */
  async deleteVirtualResourceWithOptions(ClusterId: string, VirtualResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteVirtualResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVirtualResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/virtualresources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(VirtualResourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteVirtualResourceResponse>(await this.callApi(params, req, runtime), new DeleteVirtualResourceResponse({}));
    } else {
      return $dara.cast<DeleteVirtualResourceResponse>(await this.execute(params, req, runtime), new DeleteVirtualResourceResponse({}));
    }

  }

  /**
   * Deletes a virtual resource group that contains no resources or instances.
   * @returns DeleteVirtualResourceResponse
   */
  async deleteVirtualResource(ClusterId: string, VirtualResourceId: string): Promise<DeleteVirtualResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVirtualResourceWithOptions(ClusterId, VirtualResourceId, headers, runtime);
  }

  /**
   * Queries details about the configurations of a stress testing task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBenchmarkTaskResponse
   */
  async describeBenchmarkTaskWithOptions(ClusterId: string, TaskName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeBenchmarkTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(TaskName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new DescribeBenchmarkTaskResponse({}));
    } else {
      return $dara.cast<DescribeBenchmarkTaskResponse>(await this.execute(params, req, runtime), new DescribeBenchmarkTaskResponse({}));
    }

  }

  /**
   * Queries details about the configurations of a stress testing task.
   * @returns DescribeBenchmarkTaskResponse
   */
  async describeBenchmarkTask(ClusterId: string, TaskName: string): Promise<DescribeBenchmarkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  /**
   * Queries the report of a stress testing task.
   * 
   * @param request - DescribeBenchmarkTaskReportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBenchmarkTaskReportResponse
   */
  async describeBenchmarkTaskReportWithOptions(ClusterId: string, TaskName: string, request: DescribeBenchmarkTaskReportRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeBenchmarkTaskReportResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.reportType)) {
      query["ReportType"] = request.reportType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeBenchmarkTaskReport",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(TaskName)}/report`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeBenchmarkTaskReportResponse>(await this.callApi(params, req, runtime), new DescribeBenchmarkTaskReportResponse({}));
    } else {
      return $dara.cast<DescribeBenchmarkTaskReportResponse>(await this.execute(params, req, runtime), new DescribeBenchmarkTaskReportResponse({}));
    }

  }

  /**
   * Queries the report of a stress testing task.
   * 
   * @param request - DescribeBenchmarkTaskReportRequest
   * @returns DescribeBenchmarkTaskReportResponse
   */
  async describeBenchmarkTaskReport(ClusterId: string, TaskName: string, request: DescribeBenchmarkTaskReportRequest): Promise<DescribeBenchmarkTaskReportResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeBenchmarkTaskReportWithOptions(ClusterId, TaskName, request, headers, runtime);
  }

  /**
   * Queries the details of a private gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGatewayResponse
   */
  async describeGatewayWithOptions(ClusterId: string, GatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeGatewayResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGateway",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeGatewayResponse>(await this.callApi(params, req, runtime), new DescribeGatewayResponse({}));
    } else {
      return $dara.cast<DescribeGatewayResponse>(await this.execute(params, req, runtime), new DescribeGatewayResponse({}));
    }

  }

  /**
   * Queries the details of a private gateway.
   * @returns DescribeGatewayResponse
   */
  async describeGateway(ClusterId: string, GatewayId: string): Promise<DescribeGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeGatewayWithOptions(ClusterId, GatewayId, headers, runtime);
  }

  /**
   * Queries the information about a service group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupResponse
   */
  async describeGroupWithOptions(ClusterId: string, GroupName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeGroupResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroup",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/groups/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GroupName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeGroupResponse>(await this.callApi(params, req, runtime), new DescribeGroupResponse({}));
    } else {
      return $dara.cast<DescribeGroupResponse>(await this.execute(params, req, runtime), new DescribeGroupResponse({}));
    }

  }

  /**
   * Queries the information about a service group.
   * @returns DescribeGroupResponse
   */
  async describeGroup(ClusterId: string, GroupName: string): Promise<DescribeGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeGroupWithOptions(ClusterId, GroupName, headers, runtime);
  }

  /**
   * Obtains a list of endpoints of service groups.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupEndpointsResponse
   */
  async describeGroupEndpointsWithOptions(ClusterId: string, GroupName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeGroupEndpointsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeGroupEndpoints",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/groups/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GroupName)}/endpoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeGroupEndpointsResponse>(await this.callApi(params, req, runtime), new DescribeGroupEndpointsResponse({}));
    } else {
      return $dara.cast<DescribeGroupEndpointsResponse>(await this.execute(params, req, runtime), new DescribeGroupEndpointsResponse({}));
    }

  }

  /**
   * Obtains a list of endpoints of service groups.
   * @returns DescribeGroupEndpointsResponse
   */
  async describeGroupEndpoints(ClusterId: string, GroupName: string): Promise<DescribeGroupEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeGroupEndpointsWithOptions(ClusterId, GroupName, headers, runtime);
  }

  /**
   * Queries a list of instance types for an available instance in a shared resource group.
   * 
   * @param tmpReq - DescribeMachineSpecRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeMachineSpecResponse
   */
  async describeMachineSpecWithOptions(tmpReq: DescribeMachineSpecRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeMachineSpecResponse> {
    tmpReq.validate();
    let request = new DescribeMachineSpecShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceTypes)) {
      request.instanceTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceTypes, "InstanceTypes", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceTypesShrink)) {
      query["InstanceTypes"] = request.instanceTypesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeMachineSpec",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/public/instance_types`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeMachineSpecResponse>(await this.callApi(params, req, runtime), new DescribeMachineSpecResponse({}));
    } else {
      return $dara.cast<DescribeMachineSpecResponse>(await this.execute(params, req, runtime), new DescribeMachineSpecResponse({}));
    }

  }

  /**
   * Queries a list of instance types for an available instance in a shared resource group.
   * 
   * @param request - DescribeMachineSpecRequest
   * @returns DescribeMachineSpecResponse
   */
  async describeMachineSpec(request: DescribeMachineSpecRequest): Promise<DescribeMachineSpecResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeMachineSpecWithOptions(request, headers, runtime);
  }

  /**
   * 查询可用的地域信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeRegions",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
    } else {
      return $dara.cast<DescribeRegionsResponse>(await this.execute(params, req, runtime), new DescribeRegionsResponse({}));
    }

  }

  /**
   * 查询可用的地域信息
   * @returns DescribeRegionsResponse
   */
  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

  /**
   * Queries the information about a resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceResponse
   */
  async describeResourceWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeResourceResponse>(await this.callApi(params, req, runtime), new DescribeResourceResponse({}));
    } else {
      return $dara.cast<DescribeResourceResponse>(await this.execute(params, req, runtime), new DescribeResourceResponse({}));
    }

  }

  /**
   * Queries the information about a resource group.
   * @returns DescribeResourceResponse
   */
  async describeResource(ClusterId: string, ResourceId: string): Promise<DescribeResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Queries detailed configurations about a virtual private cloud (VPC) direct connection of a dedicated resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceDLinkResponse
   */
  async describeResourceDLinkWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeResourceDLinkResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceDLink",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/dlink`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeResourceDLinkResponse>(await this.callApi(params, req, runtime), new DescribeResourceDLinkResponse({}));
    } else {
      return $dara.cast<DescribeResourceDLinkResponse>(await this.execute(params, req, runtime), new DescribeResourceDLinkResponse({}));
    }

  }

  /**
   * Queries detailed configurations about a virtual private cloud (VPC) direct connection of a dedicated resource group.
   * @returns DescribeResourceDLinkResponse
   */
  async describeResourceDLink(ClusterId: string, ResourceId: string): Promise<DescribeResourceDLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceDLinkWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Queries the details about the LogShipper configurations of Log Service for a dedicated resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceLogResponse
   */
  async describeResourceLogWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeResourceLogResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeResourceLog",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeResourceLogResponse>(await this.callApi(params, req, runtime), new DescribeResourceLogResponse({}));
    } else {
      return $dara.cast<DescribeResourceLogResponse>(await this.execute(params, req, runtime), new DescribeResourceLogResponse({}));
    }

  }

  /**
   * Queries the details about the LogShipper configurations of Log Service for a dedicated resource group.
   * @returns DescribeResourceLogResponse
   */
  async describeResourceLog(ClusterId: string, ResourceId: string): Promise<DescribeResourceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceLogWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Queries the details about a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceResponse
   */
  async describeServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeServiceResponse>(await this.callApi(params, req, runtime), new DescribeServiceResponse({}));
    } else {
      return $dara.cast<DescribeServiceResponse>(await this.execute(params, req, runtime), new DescribeServiceResponse({}));
    }

  }

  /**
   * Queries the details about a service.
   * @returns DescribeServiceResponse
   */
  async describeService(ClusterId: string, ServiceName: string): Promise<DescribeServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Queries information about the Autoscaler configurations of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceAutoScalerResponse
   */
  async describeServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeServiceAutoScalerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/autoscaler`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new DescribeServiceAutoScalerResponse({}));
    } else {
      return $dara.cast<DescribeServiceAutoScalerResponse>(await this.execute(params, req, runtime), new DescribeServiceAutoScalerResponse({}));
    }

  }

  /**
   * Queries information about the Autoscaler configurations of a service.
   * @returns DescribeServiceAutoScalerResponse
   */
  async describeServiceAutoScaler(ClusterId: string, ServiceName: string): Promise<DescribeServiceAutoScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceAutoScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Queries the Cron Horizontal Pod Autoscaler (CronHPA) configurations of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceCronScalerResponse
   */
  async describeServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeServiceCronScalerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceCronScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/cronscaler`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeServiceCronScalerResponse>(await this.callApi(params, req, runtime), new DescribeServiceCronScalerResponse({}));
    } else {
      return $dara.cast<DescribeServiceCronScalerResponse>(await this.execute(params, req, runtime), new DescribeServiceCronScalerResponse({}));
    }

  }

  /**
   * Queries the Cron Horizontal Pod Autoscaler (CronHPA) configurations of a service.
   * @returns DescribeServiceCronScalerResponse
   */
  async describeServiceCronScaler(ClusterId: string, ServiceName: string): Promise<DescribeServiceCronScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceCronScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Queries the diagnostics details of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceDiagnosisResponse
   */
  async describeServiceDiagnosisWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeServiceDiagnosisResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceDiagnosis",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/diagnosis`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeServiceDiagnosisResponse>(await this.callApi(params, req, runtime), new DescribeServiceDiagnosisResponse({}));
    } else {
      return $dara.cast<DescribeServiceDiagnosisResponse>(await this.execute(params, req, runtime), new DescribeServiceDiagnosisResponse({}));
    }

  }

  /**
   * Queries the diagnostics details of a service.
   * @returns DescribeServiceDiagnosisResponse
   */
  async describeServiceDiagnosis(ClusterId: string, ServiceName: string): Promise<DescribeServiceDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceDiagnosisWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Obtains a list of service endpoints.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceEndpointsResponse
   */
  async describeServiceEndpointsWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeServiceEndpointsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceEndpoints",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/endpoints`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeServiceEndpointsResponse>(await this.callApi(params, req, runtime), new DescribeServiceEndpointsResponse({}));
    } else {
      return $dara.cast<DescribeServiceEndpointsResponse>(await this.execute(params, req, runtime), new DescribeServiceEndpointsResponse({}));
    }

  }

  /**
   * Obtains a list of service endpoints.
   * @returns DescribeServiceEndpointsResponse
   */
  async describeServiceEndpoints(ClusterId: string, ServiceName: string): Promise<DescribeServiceEndpointsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceEndpointsWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Queries information about recent service deployment events.
   * 
   * @param request - DescribeServiceEventRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceEventResponse
   */
  async describeServiceEventWithOptions(ClusterId: string, ServiceName: string, request: DescribeServiceEventRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeServiceEventResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceEvent",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeServiceEventResponse>(await this.callApi(params, req, runtime), new DescribeServiceEventResponse({}));
    } else {
      return $dara.cast<DescribeServiceEventResponse>(await this.execute(params, req, runtime), new DescribeServiceEventResponse({}));
    }

  }

  /**
   * Queries information about recent service deployment events.
   * 
   * @param request - DescribeServiceEventRequest
   * @returns DescribeServiceEventResponse
   */
  async describeServiceEvent(ClusterId: string, ServiceName: string, request: DescribeServiceEventRequest): Promise<DescribeServiceEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceEventWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Queries the diagnostics details of an instance that runs Elastic Algorithm Service (EAS).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceInstanceDiagnosisResponse
   */
  async describeServiceInstanceDiagnosisWithOptions(ClusterId: string, ServiceName: string, InstanceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeServiceInstanceDiagnosisResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceInstanceDiagnosis",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/instances/${$dara.URL.percentEncode(InstanceName)}/diagnosis`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeServiceInstanceDiagnosisResponse>(await this.callApi(params, req, runtime), new DescribeServiceInstanceDiagnosisResponse({}));
    } else {
      return $dara.cast<DescribeServiceInstanceDiagnosisResponse>(await this.execute(params, req, runtime), new DescribeServiceInstanceDiagnosisResponse({}));
    }

  }

  /**
   * Queries the diagnostics details of an instance that runs Elastic Algorithm Service (EAS).
   * @returns DescribeServiceInstanceDiagnosisResponse
   */
  async describeServiceInstanceDiagnosis(ClusterId: string, ServiceName: string, InstanceName: string): Promise<DescribeServiceInstanceDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceInstanceDiagnosisWithOptions(ClusterId, ServiceName, InstanceName, headers, runtime);
  }

  /**
   * Queries the information about the logs of a service.
   * 
   * @param request - DescribeServiceLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceLogResponse
   */
  async describeServiceLogWithOptions(ClusterId: string, ServiceName: string, request: DescribeServiceLogRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeServiceLogResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.containerName)) {
      query["ContainerName"] = request.containerName;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.previous)) {
      query["Previous"] = request.previous;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceLog",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeServiceLogResponse>(await this.callApi(params, req, runtime), new DescribeServiceLogResponse({}));
    } else {
      return $dara.cast<DescribeServiceLogResponse>(await this.execute(params, req, runtime), new DescribeServiceLogResponse({}));
    }

  }

  /**
   * Queries the information about the logs of a service.
   * 
   * @param request - DescribeServiceLogRequest
   * @returns DescribeServiceLogResponse
   */
  async describeServiceLog(ClusterId: string, ServiceName: string, request: DescribeServiceLogRequest): Promise<DescribeServiceLogResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceLogWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Queries details about the traffic mirroring settings of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceMirrorResponse
   */
  async describeServiceMirrorWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeServiceMirrorResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceMirror",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/mirror`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeServiceMirrorResponse>(await this.callApi(params, req, runtime), new DescribeServiceMirrorResponse({}));
    } else {
      return $dara.cast<DescribeServiceMirrorResponse>(await this.execute(params, req, runtime), new DescribeServiceMirrorResponse({}));
    }

  }

  /**
   * Queries details about the traffic mirroring settings of a service.
   * @returns DescribeServiceMirrorResponse
   */
  async describeServiceMirror(ClusterId: string, ServiceName: string): Promise<DescribeServiceMirrorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceMirrorWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Obtains the logon-free URL of the service.
   * 
   * @param request - DescribeServiceSignedUrlRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceSignedUrlResponse
   */
  async describeServiceSignedUrlWithOptions(ClusterId: string, ServiceName: string, request: DescribeServiceSignedUrlRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeServiceSignedUrlResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.expire)) {
      query["Expire"] = request.expire;
    }

    if (!$dara.isNull(request.internal)) {
      query["Internal"] = request.internal;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeServiceSignedUrl",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/signed_url`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeServiceSignedUrlResponse>(await this.callApi(params, req, runtime), new DescribeServiceSignedUrlResponse({}));
    } else {
      return $dara.cast<DescribeServiceSignedUrlResponse>(await this.execute(params, req, runtime), new DescribeServiceSignedUrlResponse({}));
    }

  }

  /**
   * Obtains the logon-free URL of the service.
   * 
   * @param request - DescribeServiceSignedUrlRequest
   * @returns DescribeServiceSignedUrlResponse
   */
  async describeServiceSignedUrl(ClusterId: string, ServiceName: string, request: DescribeServiceSignedUrlRequest): Promise<DescribeServiceSignedUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceSignedUrlWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Queries the historical prices of preemptible instances. For more information about preemptible instances, see Create and use preemptible instances.
   * 
   * @param request - DescribeSpotDiscountHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSpotDiscountHistoryResponse
   */
  async describeSpotDiscountHistoryWithOptions(request: DescribeSpotDiscountHistoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeSpotDiscountHistoryResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.isProtect)) {
      query["IsProtect"] = request.isProtect;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeSpotDiscountHistory",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/public/spot_discount`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeSpotDiscountHistoryResponse>(await this.callApi(params, req, runtime), new DescribeSpotDiscountHistoryResponse({}));
    } else {
      return $dara.cast<DescribeSpotDiscountHistoryResponse>(await this.execute(params, req, runtime), new DescribeSpotDiscountHistoryResponse({}));
    }

  }

  /**
   * Queries the historical prices of preemptible instances. For more information about preemptible instances, see Create and use preemptible instances.
   * 
   * @param request - DescribeSpotDiscountHistoryRequest
   * @returns DescribeSpotDiscountHistoryResponse
   */
  async describeSpotDiscountHistory(request: DescribeSpotDiscountHistoryRequest): Promise<DescribeSpotDiscountHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSpotDiscountHistoryWithOptions(request, headers, runtime);
  }

  /**
   * Views the details of a virtual resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVirtualResourceResponse
   */
  async describeVirtualResourceWithOptions(ClusterId: string, VirtualResourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DescribeVirtualResourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeVirtualResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/virtualresources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(VirtualResourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeVirtualResourceResponse>(await this.callApi(params, req, runtime), new DescribeVirtualResourceResponse({}));
    } else {
      return $dara.cast<DescribeVirtualResourceResponse>(await this.execute(params, req, runtime), new DescribeVirtualResourceResponse({}));
    }

  }

  /**
   * Views the details of a virtual resource group.
   * @returns DescribeVirtualResourceResponse
   */
  async describeVirtualResource(ClusterId: string, VirtualResourceId: string): Promise<DescribeVirtualResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeVirtualResourceWithOptions(ClusterId, VirtualResourceId, headers, runtime);
  }

  /**
   * Unbinds a custom domain name from a private gateway.
   * 
   * @param tmpReq - DetachGatewayDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachGatewayDomainResponse
   */
  async detachGatewayDomainWithOptions(ClusterId: string, GatewayId: string, tmpReq: DetachGatewayDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DetachGatewayDomainResponse> {
    tmpReq.validate();
    let request = new DetachGatewayDomainShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.customDomain)) {
      request.customDomainShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customDomain, "CustomDomain", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.customDomainShrink)) {
      query["CustomDomain"] = request.customDomainShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DetachGatewayDomain",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/domain/detach`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DetachGatewayDomainResponse>(await this.callApi(params, req, runtime), new DetachGatewayDomainResponse({}));
    } else {
      return $dara.cast<DetachGatewayDomainResponse>(await this.execute(params, req, runtime), new DetachGatewayDomainResponse({}));
    }

  }

  /**
   * Unbinds a custom domain name from a private gateway.
   * 
   * @param request - DetachGatewayDomainRequest
   * @returns DetachGatewayDomainResponse
   */
  async detachGatewayDomain(ClusterId: string, GatewayId: string, request: DetachGatewayDomainRequest): Promise<DetachGatewayDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.detachGatewayDomainWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Switches a container service to development mode or exits development mode.
   * 
   * @param request - DevelopServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DevelopServiceResponse
   */
  async developServiceWithOptions(ClusterId: string, ServiceName: string, request: DevelopServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DevelopServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.exit)) {
      query["Exit"] = request.exit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DevelopService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/develop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DevelopServiceResponse>(await this.callApi(params, req, runtime), new DevelopServiceResponse({}));
    } else {
      return $dara.cast<DevelopServiceResponse>(await this.execute(params, req, runtime), new DevelopServiceResponse({}));
    }

  }

  /**
   * Switches a container service to development mode or exits development mode.
   * 
   * @param request - DevelopServiceRequest
   * @returns DevelopServiceResponse
   */
  async developService(ClusterId: string, ServiceName: string, request: DevelopServiceRequest): Promise<DevelopServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.developServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Queries access control lists (ACLs) created for a private gateway.
   * 
   * @param request - ListAclPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAclPolicyResponse
   */
  async listAclPolicyWithOptions(ClusterId: string, GatewayId: string, request: ListAclPolicyRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAclPolicyResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAclPolicy",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/acl_policy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAclPolicyResponse>(await this.callApi(params, req, runtime), new ListAclPolicyResponse({}));
    } else {
      return $dara.cast<ListAclPolicyResponse>(await this.execute(params, req, runtime), new ListAclPolicyResponse({}));
    }

  }

  /**
   * Queries access control lists (ACLs) created for a private gateway.
   * 
   * @param request - ListAclPolicyRequest
   * @returns ListAclPolicyResponse
   */
  async listAclPolicy(ClusterId: string, GatewayId: string, request: ListAclPolicyRequest): Promise<ListAclPolicyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAclPolicyWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Queries a list of stress testing tasks that are created by the current user.
   * 
   * @param request - ListBenchmarkTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBenchmarkTaskResponse
   */
  async listBenchmarkTaskWithOptions(request: ListBenchmarkTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListBenchmarkTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new ListBenchmarkTaskResponse({}));
    } else {
      return $dara.cast<ListBenchmarkTaskResponse>(await this.execute(params, req, runtime), new ListBenchmarkTaskResponse({}));
    }

  }

  /**
   * Queries a list of stress testing tasks that are created by the current user.
   * 
   * @param request - ListBenchmarkTaskRequest
   * @returns ListBenchmarkTaskResponse
   */
  async listBenchmarkTask(request: ListBenchmarkTaskRequest): Promise<ListBenchmarkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBenchmarkTaskWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of private gateways.
   * 
   * @param request - ListGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayResponse
   */
  async listGatewayWithOptions(request: ListGatewayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListGatewayResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!$dara.isNull(request.gatewayName)) {
      query["GatewayName"] = request.gatewayName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGateway",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListGatewayResponse>(await this.callApi(params, req, runtime), new ListGatewayResponse({}));
    } else {
      return $dara.cast<ListGatewayResponse>(await this.execute(params, req, runtime), new ListGatewayResponse({}));
    }

  }

  /**
   * Queries a list of private gateways.
   * 
   * @param request - ListGatewayRequest
   * @returns ListGatewayResponse
   */
  async listGateway(request: ListGatewayRequest): Promise<ListGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of custom domain names of a private gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayDomainsResponse
   */
  async listGatewayDomainsWithOptions(ClusterId: string, GatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListGatewayDomainsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayDomains",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/domains`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListGatewayDomainsResponse>(await this.callApi(params, req, runtime), new ListGatewayDomainsResponse({}));
    } else {
      return $dara.cast<ListGatewayDomainsResponse>(await this.execute(params, req, runtime), new ListGatewayDomainsResponse({}));
    }

  }

  /**
   * Queries a list of custom domain names of a private gateway.
   * @returns ListGatewayDomainsResponse
   */
  async listGatewayDomains(ClusterId: string, GatewayId: string): Promise<ListGatewayDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayDomainsWithOptions(ClusterId, GatewayId, headers, runtime);
  }

  /**
   * Queries a list of the internal endpoints of a private gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayIntranetLinkedVpcResponse
   */
  async listGatewayIntranetLinkedVpcWithOptions(ClusterId: string, GatewayId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListGatewayIntranetLinkedVpcResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayIntranetLinkedVpc",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/intranet_endpoint_linked_vpc`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListGatewayIntranetLinkedVpcResponse>(await this.callApi(params, req, runtime), new ListGatewayIntranetLinkedVpcResponse({}));
    } else {
      return $dara.cast<ListGatewayIntranetLinkedVpcResponse>(await this.execute(params, req, runtime), new ListGatewayIntranetLinkedVpcResponse({}));
    }

  }

  /**
   * Queries a list of the internal endpoints of a private gateway.
   * @returns ListGatewayIntranetLinkedVpcResponse
   */
  async listGatewayIntranetLinkedVpc(ClusterId: string, GatewayId: string): Promise<ListGatewayIntranetLinkedVpcResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayIntranetLinkedVpcWithOptions(ClusterId, GatewayId, headers, runtime);
  }

  /**
   * Obtains a list of all VPC peering connections on internal endpoint of a gateway.
   * 
   * @param request - ListGatewayIntranetLinkedVpcPeerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayIntranetLinkedVpcPeerResponse
   */
  async listGatewayIntranetLinkedVpcPeerWithOptions(ClusterId: string, GatewayId: string, request: ListGatewayIntranetLinkedVpcPeerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListGatewayIntranetLinkedVpcPeerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayIntranetLinkedVpcPeer",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/intranet_endpoint_linked_vpc_peer`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListGatewayIntranetLinkedVpcPeerResponse>(await this.callApi(params, req, runtime), new ListGatewayIntranetLinkedVpcPeerResponse({}));
    } else {
      return $dara.cast<ListGatewayIntranetLinkedVpcPeerResponse>(await this.execute(params, req, runtime), new ListGatewayIntranetLinkedVpcPeerResponse({}));
    }

  }

  /**
   * Obtains a list of all VPC peering connections on internal endpoint of a gateway.
   * 
   * @param request - ListGatewayIntranetLinkedVpcPeerRequest
   * @returns ListGatewayIntranetLinkedVpcPeerResponse
   */
  async listGatewayIntranetLinkedVpcPeer(ClusterId: string, GatewayId: string, request: ListGatewayIntranetLinkedVpcPeerRequest): Promise<ListGatewayIntranetLinkedVpcPeerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayIntranetLinkedVpcPeerWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Obtains the zones supported by a gateway within an intranet.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayIntranetSupportedZoneResponse
   */
  async listGatewayIntranetSupportedZoneWithOptions(GatewayId: string, ClusterId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListGatewayIntranetSupportedZoneResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGatewayIntranetSupportedZone",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}/intranet_supported_zone`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListGatewayIntranetSupportedZoneResponse>(await this.callApi(params, req, runtime), new ListGatewayIntranetSupportedZoneResponse({}));
    } else {
      return $dara.cast<ListGatewayIntranetSupportedZoneResponse>(await this.execute(params, req, runtime), new ListGatewayIntranetSupportedZoneResponse({}));
    }

  }

  /**
   * Obtains the zones supported by a gateway within an intranet.
   * @returns ListGatewayIntranetSupportedZoneResponse
   */
  async listGatewayIntranetSupportedZone(GatewayId: string, ClusterId: string): Promise<ListGatewayIntranetSupportedZoneResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayIntranetSupportedZoneWithOptions(GatewayId, ClusterId, headers, runtime);
  }

  /**
   * Queries created service groups.
   * 
   * @param request - ListGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsResponse
   */
  async listGroupsWithOptions(request: ListGroupsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListGroupsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGroups",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListGroupsResponse>(await this.callApi(params, req, runtime), new ListGroupsResponse({}));
    } else {
      return $dara.cast<ListGroupsResponse>(await this.execute(params, req, runtime), new ListGroupsResponse({}));
    }

  }

  /**
   * Queries created service groups.
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of workers in a resource group.
   * 
   * @param request - ListResourceInstanceWorkerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceInstanceWorkerResponse
   */
  async listResourceInstanceWorkerWithOptions(ClusterId: string, ResourceId: string, InstanceName: string, request: ListResourceInstanceWorkerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListResourceInstanceWorkerResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workerName)) {
      query["WorkerName"] = request.workerName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceInstanceWorker",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/instance/${$dara.URL.percentEncode(InstanceName)}/workers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListResourceInstanceWorkerResponse>(await this.callApi(params, req, runtime), new ListResourceInstanceWorkerResponse({}));
    } else {
      return $dara.cast<ListResourceInstanceWorkerResponse>(await this.execute(params, req, runtime), new ListResourceInstanceWorkerResponse({}));
    }

  }

  /**
   * Queries a list of workers in a resource group.
   * 
   * @param request - ListResourceInstanceWorkerRequest
   * @returns ListResourceInstanceWorkerResponse
   */
  async listResourceInstanceWorker(ClusterId: string, ResourceId: string, InstanceName: string, request: ListResourceInstanceWorkerRequest): Promise<ListResourceInstanceWorkerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceInstanceWorkerWithOptions(ClusterId, ResourceId, InstanceName, request, headers, runtime);
  }

  /**
   * Queries a list of instances in a dedicated resource group.
   * 
   * @param tmpReq - ListResourceInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceInstancesResponse
   */
  async listResourceInstancesWithOptions(ClusterId: string, ResourceId: string, tmpReq: ListResourceInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListResourceInstancesResponse> {
    tmpReq.validate();
    let request = new ListResourceInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.label)) {
      request.labelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.label, "Label", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.instanceIP)) {
      query["InstanceIP"] = request.instanceIP;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!$dara.isNull(request.labelShrink)) {
      query["Label"] = request.labelShrink;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListResourceInstancesResponse>(await this.callApi(params, req, runtime), new ListResourceInstancesResponse({}));
    } else {
      return $dara.cast<ListResourceInstancesResponse>(await this.execute(params, req, runtime), new ListResourceInstancesResponse({}));
    }

  }

  /**
   * Queries a list of instances in a dedicated resource group.
   * 
   * @param request - ListResourceInstancesRequest
   * @returns ListResourceInstancesResponse
   */
  async listResourceInstances(ClusterId: string, ResourceId: string, request: ListResourceInstancesRequest): Promise<ListResourceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceInstancesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Queries a list of services that are deployed in the dedicated resource group.
   * 
   * @deprecated OpenAPI ListResourceServices is deprecated
   * 
   * @param request - ListResourceServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceServicesResponse
   */
  // Deprecated
  async listResourceServicesWithOptions(ClusterId: string, ResourceId: string, request: ListResourceServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListResourceServicesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResourceServices",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListResourceServicesResponse>(await this.callApi(params, req, runtime), new ListResourceServicesResponse({}));
    } else {
      return $dara.cast<ListResourceServicesResponse>(await this.execute(params, req, runtime), new ListResourceServicesResponse({}));
    }

  }

  /**
   * Queries a list of services that are deployed in the dedicated resource group.
   * 
   * @deprecated OpenAPI ListResourceServices is deprecated
   * 
   * @param request - ListResourceServicesRequest
   * @returns ListResourceServicesResponse
   */
  // Deprecated
  async listResourceServices(ClusterId: string, ResourceId: string, request: ListResourceServicesRequest): Promise<ListResourceServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceServicesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Queries a list of dedicated resource groups for the current user.
   * 
   * @param request - ListResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(request: ListResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceStatus)) {
      query["ResourceStatus"] = request.resourceStatus;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResources",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListResourcesResponse>(await this.callApi(params, req, runtime), new ListResourcesResponse({}));
    } else {
      return $dara.cast<ListResourcesResponse>(await this.execute(params, req, runtime), new ListResourcesResponse({}));
    }

  }

  /**
   * Queries a list of dedicated resource groups for the current user.
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the containers of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceContainersResponse
   */
  async listServiceContainersWithOptions(ClusterId: string, ServiceName: string, InstanceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListServiceContainersResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceContainers",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/instances/${$dara.URL.percentEncode(InstanceName)}/containers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListServiceContainersResponse>(await this.callApi(params, req, runtime), new ListServiceContainersResponse({}));
    } else {
      return $dara.cast<ListServiceContainersResponse>(await this.execute(params, req, runtime), new ListServiceContainersResponse({}));
    }

  }

  /**
   * Queries the containers of a service.
   * @returns ListServiceContainersResponse
   */
  async listServiceContainers(ClusterId: string, ServiceName: string, InstanceName: string): Promise<ListServiceContainersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceContainersWithOptions(ClusterId, ServiceName, InstanceName, headers, runtime);
  }

  /**
   * Queries instances of a service.
   * 
   * @param request - ListServiceInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstancesResponse
   */
  async listServiceInstancesWithOptions(ClusterId: string, ServiceName: string, request: ListServiceInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListServiceInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.hostIP)) {
      query["HostIP"] = request.hostIP;
    }

    if (!$dara.isNull(request.instanceIP)) {
      query["InstanceIP"] = request.instanceIP;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!$dara.isNull(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.isSpot)) {
      query["IsSpot"] = request.isSpot;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListServiceInstancesResponse>(await this.callApi(params, req, runtime), new ListServiceInstancesResponse({}));
    } else {
      return $dara.cast<ListServiceInstancesResponse>(await this.execute(params, req, runtime), new ListServiceInstancesResponse({}));
    }

  }

  /**
   * Queries instances of a service.
   * 
   * @param request - ListServiceInstancesRequest
   * @returns ListServiceInstancesResponse
   */
  async listServiceInstances(ClusterId: string, ServiceName: string, request: ListServiceInstancesRequest): Promise<ListServiceInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceInstancesWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Queries the information about the historical versions of a service.
   * 
   * @param request - ListServiceVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceVersionsResponse
   */
  async listServiceVersionsWithOptions(ClusterId: string, ServiceName: string, request: ListServiceVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListServiceVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceVersions",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListServiceVersionsResponse>(await this.callApi(params, req, runtime), new ListServiceVersionsResponse({}));
    } else {
      return $dara.cast<ListServiceVersionsResponse>(await this.execute(params, req, runtime), new ListServiceVersionsResponse({}));
    }

  }

  /**
   * Queries the information about the historical versions of a service.
   * 
   * @param request - ListServiceVersionsRequest
   * @returns ListServiceVersionsResponse
   */
  async listServiceVersions(ClusterId: string, ServiceName: string, request: ListServiceVersionsRequest): Promise<ListServiceVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceVersionsWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Lists services.
   * 
   * @param tmpReq - ListServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
  async listServicesWithOptions(tmpReq: ListServicesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListServicesResponse> {
    tmpReq.validate();
    let request = new ListServicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.label)) {
      request.labelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.label, "Label", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.gateway)) {
      query["Gateway"] = request.gateway;
    }

    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.labelShrink)) {
      query["Label"] = request.labelShrink;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.parentServiceUid)) {
      query["ParentServiceUid"] = request.parentServiceUid;
    }

    if (!$dara.isNull(request.quotaId)) {
      query["QuotaId"] = request.quotaId;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.role)) {
      query["Role"] = request.role;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!$dara.isNull(request.serviceStatus)) {
      query["ServiceStatus"] = request.serviceStatus;
    }

    if (!$dara.isNull(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!$dara.isNull(request.serviceUid)) {
      query["ServiceUid"] = request.serviceUid;
    }

    if (!$dara.isNull(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServices",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListServicesResponse>(await this.callApi(params, req, runtime), new ListServicesResponse({}));
    } else {
      return $dara.cast<ListServicesResponse>(await this.execute(params, req, runtime), new ListServicesResponse({}));
    }

  }

  /**
   * Lists services.
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of tenant plug-ins.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTenantAddonsResponse
   */
  async listTenantAddonsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTenantAddonsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTenantAddons",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tenantaddons`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTenantAddonsResponse>(await this.callApi(params, req, runtime), new ListTenantAddonsResponse({}));
    } else {
      return $dara.cast<ListTenantAddonsResponse>(await this.execute(params, req, runtime), new ListTenantAddonsResponse({}));
    }

  }

  /**
   * Queries a list of tenant plug-ins.
   * @returns ListTenantAddonsResponse
   */
  async listTenantAddons(): Promise<ListTenantAddonsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTenantAddonsWithOptions(headers, runtime);
  }

  /**
   * Queries a list of virtual resource groups for the current user.
   * 
   * @param request - ListVirtualResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVirtualResourceResponse
   */
  async listVirtualResourceWithOptions(request: ListVirtualResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListVirtualResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.virtualResourceId)) {
      query["VirtualResourceId"] = request.virtualResourceId;
    }

    if (!$dara.isNull(request.virtualResourceName)) {
      query["VirtualResourceName"] = request.virtualResourceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVirtualResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/virtualresources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVirtualResourceResponse>(await this.callApi(params, req, runtime), new ListVirtualResourceResponse({}));
    } else {
      return $dara.cast<ListVirtualResourceResponse>(await this.execute(params, req, runtime), new ListVirtualResourceResponse({}));
    }

  }

  /**
   * Queries a list of virtual resource groups for the current user.
   * 
   * @param request - ListVirtualResourceRequest
   * @returns ListVirtualResourceResponse
   */
  async listVirtualResource(request: ListVirtualResourceRequest): Promise<ListVirtualResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVirtualResourceWithOptions(request, headers, runtime);
  }

  /**
   * Resets tenant configurations.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReinstallTenantAddonResponse
   */
  async reinstallTenantAddonWithOptions(ClusterId: string, TenantAddonName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ReinstallTenantAddonResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ReinstallTenantAddon",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tenantaddons/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(TenantAddonName)}/reinstall`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReinstallTenantAddonResponse>(await this.callApi(params, req, runtime), new ReinstallTenantAddonResponse({}));
    } else {
      return $dara.cast<ReinstallTenantAddonResponse>(await this.execute(params, req, runtime), new ReinstallTenantAddonResponse({}));
    }

  }

  /**
   * Resets tenant configurations.
   * @returns ReinstallTenantAddonResponse
   */
  async reinstallTenantAddon(ClusterId: string, TenantAddonName: string): Promise<ReinstallTenantAddonResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reinstallTenantAddonWithOptions(ClusterId, TenantAddonName, headers, runtime);
  }

  /**
   * Switch the traffic state or weight of the service.
   * 
   * @param request - ReleaseServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseServiceResponse
   */
  async releaseServiceWithOptions(ClusterId: string, ServiceName: string, request: ReleaseServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ReleaseServiceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.trafficState)) {
      body["TrafficState"] = request.trafficState;
    }

    if (!$dara.isNull(request.weight)) {
      body["Weight"] = request.weight;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ReleaseService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/release`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ReleaseServiceResponse>(await this.callApi(params, req, runtime), new ReleaseServiceResponse({}));
    } else {
      return $dara.cast<ReleaseServiceResponse>(await this.execute(params, req, runtime), new ReleaseServiceResponse({}));
    }

  }

  /**
   * Switch the traffic state or weight of the service.
   * 
   * @param request - ReleaseServiceRequest
   * @returns ReleaseServiceResponse
   */
  async releaseService(ClusterId: string, ServiceName: string, request: ReleaseServiceRequest): Promise<ReleaseServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Restarts a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartServiceResponse
   */
  async restartServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RestartServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RestartService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/restart`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RestartServiceResponse>(await this.callApi(params, req, runtime), new RestartServiceResponse({}));
    } else {
      return $dara.cast<RestartServiceResponse>(await this.execute(params, req, runtime), new RestartServiceResponse({}));
    }

  }

  /**
   * Restarts a service.
   * @returns RestartServiceResponse
   */
  async restartService(ClusterId: string, ServiceName: string): Promise<RestartServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Starts a stress testing task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartBenchmarkTaskResponse
   */
  async startBenchmarkTaskWithOptions(ClusterId: string, TaskName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StartBenchmarkTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(TaskName)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new StartBenchmarkTaskResponse({}));
    } else {
      return $dara.cast<StartBenchmarkTaskResponse>(await this.execute(params, req, runtime), new StartBenchmarkTaskResponse({}));
    }

  }

  /**
   * Starts a stress testing task.
   * @returns StartBenchmarkTaskResponse
   */
  async startBenchmarkTask(ClusterId: string, TaskName: string): Promise<StartBenchmarkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  /**
   * Starts a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartServiceResponse
   */
  async startServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StartServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartServiceResponse>(await this.callApi(params, req, runtime), new StartServiceResponse({}));
    } else {
      return $dara.cast<StartServiceResponse>(await this.execute(params, req, runtime), new StartServiceResponse({}));
    }

  }

  /**
   * Starts a service.
   * @returns StartServiceResponse
   */
  async startService(ClusterId: string, ServiceName: string): Promise<StartServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Stops a stress testing task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopBenchmarkTaskResponse
   */
  async stopBenchmarkTaskWithOptions(ClusterId: string, TaskName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopBenchmarkTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(TaskName)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new StopBenchmarkTaskResponse({}));
    } else {
      return $dara.cast<StopBenchmarkTaskResponse>(await this.execute(params, req, runtime), new StopBenchmarkTaskResponse({}));
    }

  }

  /**
   * Stops a stress testing task.
   * @returns StopBenchmarkTaskResponse
   */
  async stopBenchmarkTask(ClusterId: string, TaskName: string): Promise<StopBenchmarkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  /**
   * Stops a running service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopServiceResponse
   */
  async stopServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopServiceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopServiceResponse>(await this.callApi(params, req, runtime), new StopServiceResponse({}));
    } else {
      return $dara.cast<StopServiceResponse>(await this.execute(params, req, runtime), new StopServiceResponse({}));
    }

  }

  /**
   * Stops a running service.
   * @returns StopServiceResponse
   */
  async stopService(ClusterId: string, ServiceName: string): Promise<StopServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Updates an application service.
   * 
   * @param request - UpdateAppServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppServiceResponse
   */
  async updateAppServiceWithOptions(ClusterId: string, ServiceName: string, request: UpdateAppServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateAppServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.quotaId)) {
      query["QuotaId"] = request.quotaId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.replicas)) {
      body["Replicas"] = request.replicas;
    }

    if (!$dara.isNull(request.serviceSpec)) {
      body["ServiceSpec"] = request.serviceSpec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAppService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/app_services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateAppServiceResponse>(await this.callApi(params, req, runtime), new UpdateAppServiceResponse({}));
    } else {
      return $dara.cast<UpdateAppServiceResponse>(await this.execute(params, req, runtime), new UpdateAppServiceResponse({}));
    }

  }

  /**
   * Updates an application service.
   * 
   * @param request - UpdateAppServiceRequest
   * @returns UpdateAppServiceResponse
   */
  async updateAppService(ClusterId: string, ServiceName: string, request: UpdateAppServiceRequest): Promise<UpdateAppServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates a stress testing task.
   * 
   * @param request - UpdateBenchmarkTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBenchmarkTaskResponse
   */
  async updateBenchmarkTaskWithOptions(ClusterId: string, TaskName: string, request: UpdateBenchmarkTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateBenchmarkTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(TaskName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new UpdateBenchmarkTaskResponse({}));
    } else {
      return $dara.cast<UpdateBenchmarkTaskResponse>(await this.execute(params, req, runtime), new UpdateBenchmarkTaskResponse({}));
    }

  }

  /**
   * Updates a stress testing task.
   * 
   * @param request - UpdateBenchmarkTaskRequest
   * @returns UpdateBenchmarkTaskResponse
   */
  async updateBenchmarkTask(ClusterId: string, TaskName: string, request: UpdateBenchmarkTaskRequest): Promise<UpdateBenchmarkTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateBenchmarkTaskWithOptions(ClusterId, TaskName, request, headers, runtime);
  }

  /**
   * Update a private gateway.
   * 
   * @param request - UpdateGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayResponse
   */
  async updateGatewayWithOptions(GatewayId: string, ClusterId: string, request: UpdateGatewayRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateGatewayResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.enableInternet)) {
      body["EnableInternet"] = request.enableInternet;
    }

    if (!$dara.isNull(request.enableIntranet)) {
      body["EnableIntranet"] = request.enableIntranet;
    }

    if (!$dara.isNull(request.enableSSLRedirection)) {
      body["EnableSSLRedirection"] = request.enableSSLRedirection;
    }

    if (!$dara.isNull(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!$dara.isNull(request.isDefault)) {
      body["IsDefault"] = request.isDefault;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.replicas)) {
      body["Replicas"] = request.replicas;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateGateway",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(GatewayId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateGatewayResponse>(await this.callApi(params, req, runtime), new UpdateGatewayResponse({}));
    } else {
      return $dara.cast<UpdateGatewayResponse>(await this.execute(params, req, runtime), new UpdateGatewayResponse({}));
    }

  }

  /**
   * Update a private gateway.
   * 
   * @param request - UpdateGatewayRequest
   * @returns UpdateGatewayResponse
   */
  async updateGateway(GatewayId: string, ClusterId: string, request: UpdateGatewayRequest): Promise<UpdateGatewayResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayWithOptions(GatewayId, ClusterId, request, headers, runtime);
  }

  /**
   * Updates the information about a dedicated resource group. Only the name of a dedicated resource group can be updated.
   * 
   * @param request - UpdateResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceResponse
   */
  async updateResourceWithOptions(ClusterId: string, ResourceId: string, request: UpdateResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.resourceName)) {
      body["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.selfManagedResourceOptions)) {
      body["SelfManagedResourceOptions"] = request.selfManagedResourceOptions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateResourceResponse>(await this.callApi(params, req, runtime), new UpdateResourceResponse({}));
    } else {
      return $dara.cast<UpdateResourceResponse>(await this.execute(params, req, runtime), new UpdateResourceResponse({}));
    }

  }

  /**
   * Updates the information about a dedicated resource group. Only the name of a dedicated resource group can be updated.
   * 
   * @param request - UpdateResourceRequest
   * @returns UpdateResourceResponse
   */
  async updateResource(ClusterId: string, ResourceId: string, request: UpdateResourceRequest): Promise<UpdateResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Updates the configurations of a virtual private cloud (VPC) direct connection for a dedicated resource group.
   * 
   * @param request - UpdateResourceDLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceDLinkResponse
   */
  async updateResourceDLinkWithOptions(ClusterId: string, ResourceId: string, request: UpdateResourceDLinkRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateResourceDLinkResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.destinationCIDRs)) {
      body["DestinationCIDRs"] = request.destinationCIDRs;
    }

    if (!$dara.isNull(request.securityGroupId)) {
      body["SecurityGroupId"] = request.securityGroupId;
    }

    if (!$dara.isNull(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!$dara.isNull(request.vSwitchIdList)) {
      body["VSwitchIdList"] = request.vSwitchIdList;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceDLink",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/dlink`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateResourceDLinkResponse>(await this.callApi(params, req, runtime), new UpdateResourceDLinkResponse({}));
    } else {
      return $dara.cast<UpdateResourceDLinkResponse>(await this.execute(params, req, runtime), new UpdateResourceDLinkResponse({}));
    }

  }

  /**
   * Updates the configurations of a virtual private cloud (VPC) direct connection for a dedicated resource group.
   * 
   * @param request - UpdateResourceDLinkRequest
   * @returns UpdateResourceDLinkResponse
   */
  async updateResourceDLink(ClusterId: string, ResourceId: string, request: UpdateResourceDLinkRequest): Promise<UpdateResourceDLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceDLinkWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Updates the service scheduling status of an instance in a dedicated resource group.
   * 
   * @param request - UpdateResourceInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceInstanceResponse
   */
  async updateResourceInstanceWithOptions(ClusterId: string, ResourceId: string, InstanceId: string, request: UpdateResourceInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateResourceInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.action)) {
      body["Action"] = request.action;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceInstance",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/instances/${$dara.URL.percentEncode(InstanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateResourceInstanceResponse>(await this.callApi(params, req, runtime), new UpdateResourceInstanceResponse({}));
    } else {
      return $dara.cast<UpdateResourceInstanceResponse>(await this.execute(params, req, runtime), new UpdateResourceInstanceResponse({}));
    }

  }

  /**
   * Updates the service scheduling status of an instance in a dedicated resource group.
   * 
   * @param request - UpdateResourceInstanceRequest
   * @returns UpdateResourceInstanceResponse
   */
  async updateResourceInstance(ClusterId: string, ResourceId: string, InstanceId: string, request: UpdateResourceInstanceRequest): Promise<UpdateResourceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceInstanceWithOptions(ClusterId, ResourceId, InstanceId, request, headers, runtime);
  }

  /**
   * Updates the tag of an instance in a resource group.
   * 
   * @param tmpReq - UpdateResourceInstanceLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceInstanceLabelResponse
   */
  async updateResourceInstanceLabelWithOptions(ClusterId: string, ResourceId: string, tmpReq: UpdateResourceInstanceLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateResourceInstanceLabelResponse> {
    tmpReq.validate();
    let request = new UpdateResourceInstanceLabelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.allInstances)) {
      query["AllInstances"] = request.allInstances;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateResourceInstanceLabel",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ResourceId)}/label`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateResourceInstanceLabelResponse>(await this.callApi(params, req, runtime), new UpdateResourceInstanceLabelResponse({}));
    } else {
      return $dara.cast<UpdateResourceInstanceLabelResponse>(await this.execute(params, req, runtime), new UpdateResourceInstanceLabelResponse({}));
    }

  }

  /**
   * Updates the tag of an instance in a resource group.
   * 
   * @param request - UpdateResourceInstanceLabelRequest
   * @returns UpdateResourceInstanceLabelResponse
   */
  async updateResourceInstanceLabel(ClusterId: string, ResourceId: string, request: UpdateResourceInstanceLabelRequest): Promise<UpdateResourceInstanceLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceInstanceLabelWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Updates a model or processor of a service. If only the metadata.instance field is updated, manual scaling can be performed.
   * 
   * @param request - UpdateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceResponse
   */
  async updateServiceWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateServiceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.updateType)) {
      query["UpdateType"] = request.updateType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateServiceResponse>(await this.callApi(params, req, runtime), new UpdateServiceResponse({}));
    } else {
      return $dara.cast<UpdateServiceResponse>(await this.execute(params, req, runtime), new UpdateServiceResponse({}));
    }

  }

  /**
   * Updates a model or processor of a service. If only the metadata.instance field is updated, manual scaling can be performed.
   * 
   * @param request - UpdateServiceRequest
   * @returns UpdateServiceResponse
   */
  async updateService(ClusterId: string, ServiceName: string, request: UpdateServiceRequest): Promise<UpdateServiceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the Autoscaler configurations of a service.
   * 
   * @param request - UpdateServiceAutoScalerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceAutoScalerResponse
   */
  async updateServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceAutoScalerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateServiceAutoScalerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.behavior)) {
      body["behavior"] = request.behavior;
    }

    if (!$dara.isNull(request.max)) {
      body["max"] = request.max;
    }

    if (!$dara.isNull(request.min)) {
      body["min"] = request.min;
    }

    if (!$dara.isNull(request.scaleStrategies)) {
      body["scaleStrategies"] = request.scaleStrategies;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/autoscaler`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new UpdateServiceAutoScalerResponse({}));
    } else {
      return $dara.cast<UpdateServiceAutoScalerResponse>(await this.execute(params, req, runtime), new UpdateServiceAutoScalerResponse({}));
    }

  }

  /**
   * Updates the Autoscaler configurations of a service.
   * 
   * @param request - UpdateServiceAutoScalerRequest
   * @returns UpdateServiceAutoScalerResponse
   */
  async updateServiceAutoScaler(ClusterId: string, ServiceName: string, request: UpdateServiceAutoScalerRequest): Promise<UpdateServiceAutoScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceAutoScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the Cron Horizontal Pod Autoscaler (CronHPA) settings of a service.
   * 
   * @param request - UpdateServiceCronScalerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceCronScalerResponse
   */
  async updateServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceCronScalerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateServiceCronScalerResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.excludeDates)) {
      body["ExcludeDates"] = request.excludeDates;
    }

    if (!$dara.isNull(request.scaleJobs)) {
      body["ScaleJobs"] = request.scaleJobs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceCronScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/cronscaler`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateServiceCronScalerResponse>(await this.callApi(params, req, runtime), new UpdateServiceCronScalerResponse({}));
    } else {
      return $dara.cast<UpdateServiceCronScalerResponse>(await this.execute(params, req, runtime), new UpdateServiceCronScalerResponse({}));
    }

  }

  /**
   * Updates the Cron Horizontal Pod Autoscaler (CronHPA) settings of a service.
   * 
   * @param request - UpdateServiceCronScalerRequest
   * @returns UpdateServiceCronScalerResponse
   */
  async updateServiceCronScaler(ClusterId: string, ServiceName: string, request: UpdateServiceCronScalerRequest): Promise<UpdateServiceCronScalerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceCronScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates attributes of service instances. Only isolation can be performed for service instances.
   * 
   * @param request - UpdateServiceInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceInstanceResponse
   */
  async updateServiceInstanceWithOptions(ClusterId: string, ServiceName: string, InstanceName: string, request: UpdateServiceInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateServiceInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.isolate)) {
      body["Isolate"] = request.isolate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceInstance",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/instances/${$dara.URL.percentEncode(InstanceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateServiceInstanceResponse>(await this.callApi(params, req, runtime), new UpdateServiceInstanceResponse({}));
    } else {
      return $dara.cast<UpdateServiceInstanceResponse>(await this.execute(params, req, runtime), new UpdateServiceInstanceResponse({}));
    }

  }

  /**
   * Updates attributes of service instances. Only isolation can be performed for service instances.
   * 
   * @param request - UpdateServiceInstanceRequest
   * @returns UpdateServiceInstanceResponse
   */
  async updateServiceInstance(ClusterId: string, ServiceName: string, InstanceName: string, request: UpdateServiceInstanceRequest): Promise<UpdateServiceInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceInstanceWithOptions(ClusterId, ServiceName, InstanceName, request, headers, runtime);
  }

  /**
   * Adds service tags or updates existing service tags.
   * 
   * @param request - UpdateServiceLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceLabelResponse
   */
  async updateServiceLabelWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceLabelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateServiceLabelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceLabel",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/label`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateServiceLabelResponse>(await this.callApi(params, req, runtime), new UpdateServiceLabelResponse({}));
    } else {
      return $dara.cast<UpdateServiceLabelResponse>(await this.execute(params, req, runtime), new UpdateServiceLabelResponse({}));
    }

  }

  /**
   * Adds service tags or updates existing service tags.
   * 
   * @param request - UpdateServiceLabelRequest
   * @returns UpdateServiceLabelResponse
   */
  async updateServiceLabel(ClusterId: string, ServiceName: string, request: UpdateServiceLabelRequest): Promise<UpdateServiceLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceLabelWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the traffic mirroring configurations of a service.
   * 
   * @param request - UpdateServiceMirrorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceMirrorResponse
   */
  async updateServiceMirrorWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceMirrorRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateServiceMirrorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.ratio)) {
      body["Ratio"] = request.ratio;
    }

    if (!$dara.isNull(request.target)) {
      body["Target"] = request.target;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceMirror",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/mirror`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateServiceMirrorResponse>(await this.callApi(params, req, runtime), new UpdateServiceMirrorResponse({}));
    } else {
      return $dara.cast<UpdateServiceMirrorResponse>(await this.execute(params, req, runtime), new UpdateServiceMirrorResponse({}));
    }

  }

  /**
   * Updates the traffic mirroring configurations of a service.
   * 
   * @param request - UpdateServiceMirrorRequest
   * @returns UpdateServiceMirrorResponse
   */
  async updateServiceMirror(ClusterId: string, ServiceName: string, request: UpdateServiceMirrorRequest): Promise<UpdateServiceMirrorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceMirrorWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the safety lock of a service to minimize misoperations on the service.
   * 
   * @param request - UpdateServiceSafetyLockRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceSafetyLockResponse
   */
  async updateServiceSafetyLockWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceSafetyLockRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateServiceSafetyLockResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.lock)) {
      body["Lock"] = request.lock;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceSafetyLock",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/lock`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateServiceSafetyLockResponse>(await this.callApi(params, req, runtime), new UpdateServiceSafetyLockResponse({}));
    } else {
      return $dara.cast<UpdateServiceSafetyLockResponse>(await this.execute(params, req, runtime), new UpdateServiceSafetyLockResponse({}));
    }

  }

  /**
   * Updates the safety lock of a service to minimize misoperations on the service.
   * 
   * @param request - UpdateServiceSafetyLockRequest
   * @returns UpdateServiceSafetyLockResponse
   */
  async updateServiceSafetyLock(ClusterId: string, ServiceName: string, request: UpdateServiceSafetyLockRequest): Promise<UpdateServiceSafetyLockResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceSafetyLockWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the version of a service or rolls back the service to a specific version.
   * 
   * @param request - UpdateServiceVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceVersionResponse
   */
  async updateServiceVersionWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateServiceVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.version)) {
      body["Version"] = request.version;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateServiceVersion",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(ServiceName)}/version`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateServiceVersionResponse>(await this.callApi(params, req, runtime), new UpdateServiceVersionResponse({}));
    } else {
      return $dara.cast<UpdateServiceVersionResponse>(await this.execute(params, req, runtime), new UpdateServiceVersionResponse({}));
    }

  }

  /**
   * Updates the version of a service or rolls back the service to a specific version.
   * 
   * @param request - UpdateServiceVersionRequest
   * @returns UpdateServiceVersionResponse
   */
  async updateServiceVersion(ClusterId: string, ServiceName: string, request: UpdateServiceVersionRequest): Promise<UpdateServiceVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceVersionWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the information about a virtual resource group.
   * 
   * @param request - UpdateVirtualResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateVirtualResourceResponse
   */
  async updateVirtualResourceWithOptions(ClusterId: string, VirtualResourceId: string, request: UpdateVirtualResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateVirtualResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.disableSpotProtectionPeriod)) {
      body["DisableSpotProtectionPeriod"] = request.disableSpotProtectionPeriod;
    }

    if (!$dara.isNull(request.resources)) {
      body["Resources"] = request.resources;
    }

    if (!$dara.isNull(request.virtualResourceName)) {
      body["VirtualResourceName"] = request.virtualResourceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateVirtualResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/virtualresources/${$dara.URL.percentEncode(ClusterId)}/${$dara.URL.percentEncode(VirtualResourceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateVirtualResourceResponse>(await this.callApi(params, req, runtime), new UpdateVirtualResourceResponse({}));
    } else {
      return $dara.cast<UpdateVirtualResourceResponse>(await this.execute(params, req, runtime), new UpdateVirtualResourceResponse({}));
    }

  }

  /**
   * Updates the information about a virtual resource group.
   * 
   * @param request - UpdateVirtualResourceRequest
   * @returns UpdateVirtualResourceResponse
   */
  async updateVirtualResource(ClusterId: string, VirtualResourceId: string, request: UpdateVirtualResourceRequest): Promise<UpdateVirtualResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateVirtualResourceWithOptions(ClusterId, VirtualResourceId, request, headers, runtime);
  }

}
