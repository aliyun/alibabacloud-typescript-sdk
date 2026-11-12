// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceRequestSelfManagedResourceOptionsNodeTolerations extends $dara.Model {
  /**
   * @remarks
   * The effect.
   * 
   * @example
   * NoSchedule
   */
  effect?: string;
  /**
   * @remarks
   * The key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The operator that defines the relationship between the key and the value.
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The value.
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
   * The label key-value pairs for nodes.
   * 
   * @example
   * "key1": "value1"
   */
  nodeMatchLabels?: { [key: string]: string };
  /**
   * @remarks
   * The list of tolerations for node taints.
   */
  nodeTolerations?: CreateResourceRequestSelfManagedResourceOptionsNodeTolerations[];
  /**
   * @remarks
   * The name of the RAM role to which PAI-EAS-related permissions are granted.
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

export class CreateResourceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * - false (default): disables auto-renewal.
   * - true: enables auto-renewal.
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The billing method. Valid values:
   * - PrePaid: subscription.
   * - PostPaid: pay-as-you-go.
   * > This parameter is required when ResourceType is set to Dedicated.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of instances.
   * > This parameter is required when ResourceType is set to Dedicated.
   * 
   * @example
   * 5
   */
  ecsInstanceCount?: number;
  /**
   * @remarks
   * The ECS instance type.
   * > This parameter is required when ResourceType is set to Dedicated.
   * 
   * @example
   * ecs.c6.8xlarge
   */
  ecsInstanceType?: string;
  /**
   * @remarks
   * The user-defined labels.
   * 
   * @example
   * {"key":"value"}
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * MyResource
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * - Dedicated: dedicated resource group.
   * - SelfManaged: self-managed resource group.
   * > To use a self-managed resource group, you must apply to be added to the whitelist.
   * 
   * @example
   * Dedicated
   */
  resourceType?: string;
  /**
   * @remarks
   * The configuration options for the self-managed resource group.
   */
  selfManagedResourceOptions?: CreateResourceRequestSelfManagedResourceOptions;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB. Valid values: 200 to 2000. Default value: 200.
   * 
   * @example
   * 200
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The usage mode of the resource group. Valid values: inference (inference service resource group) and sandbox (sandbox resource group).
   * 
   * @example
   * inference
   */
  usageMode?: string;
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
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      selfManagedResourceOptions: 'SelfManagedResourceOptions',
      systemDiskSize: 'SystemDiskSize',
      usageMode: 'UsageMode',
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
      resourceName: 'string',
      resourceType: 'string',
      selfManagedResourceOptions: CreateResourceRequestSelfManagedResourceOptions,
      systemDiskSize: 'number',
      usageMode: 'string',
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

