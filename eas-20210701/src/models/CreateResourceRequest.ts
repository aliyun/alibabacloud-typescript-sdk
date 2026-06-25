// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceRequestSelfManagedResourceOptionsNodeTolerations extends $dara.Model {
  /**
   * @remarks
   * The effect of the toleration.
   * 
   * @example
   * NoSchedule
   */
  effect?: string;
  /**
   * @remarks
   * The key of the toleration.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The toleration operator, which defines the relationship between the key and value.
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The toleration value.
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
   * The node labels to match, specified as key-value pairs.
   */
  nodeMatchLabels?: { [key: string]: string };
  /**
   * @remarks
   * A list of tolerations for node taints.
   */
  nodeTolerations?: CreateResourceRequestSelfManagedResourceOptionsNodeTolerations[];
  /**
   * @remarks
   * The name of the RAM role that grants PAI-EAS the required permissions.
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
   * 
   * - `false` (default): Auto-renewal is disabled.
   * 
   * - `true`: Auto-renewal is enabled.
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - `PrePaid`: subscription.
   * 
   * - `PostPaid`: pay-as-you-go.
   * 
   * > This parameter is required when `ResourceType` is set to `Dedicated`.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * > This parameter is required when `ResourceType` is set to `Dedicated`.
   * 
   * @example
   * 5
   */
  ecsInstanceCount?: number;
  /**
   * @remarks
   * The ECS instance type.
   * 
   * > This parameter is required when `ResourceType` is set to `Dedicated`.
   * 
   * @example
   * ecs.c6.8xlarge
   */
  ecsInstanceType?: string;
  /**
   * @remarks
   * The user-defined labels.
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
   * 
   * - `Dedicated`: a dedicated resource group.
   * 
   * - `SelfManaged`: a self-managed resource group.
   * 
   * > You must be whitelisted to use self-managed resource groups.
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
   * The size of the system disk, in GiB. The value must be between 200 and 2,000. If unspecified, the default is 200 GiB.
   * 
   * @example
   * 200
   */
  systemDiskSize?: number;
  usageMode?: string;
  /**
   * @remarks
   * The zone in which to create the instance.
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

