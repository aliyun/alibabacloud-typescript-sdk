// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterResourcesResponseBodyDependencies extends $dara.Model {
  /**
   * @remarks
   * The cluster ID of the dependent resource.
   * 
   * @example
   * cc5ee03f63e43425cb6f71f1a1756****
   */
  clusterId?: string;
  /**
   * @remarks
   * The type of the dependent resource.
   * 
   * @example
   * ALIYUN::VPC::NatGateway
   */
  resourceType?: string;
  /**
   * @remarks
   * The instance ID of the dependent resource.
   * 
   * @example
   * ngw-wz9sphwk42sdtjixo****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      resourceType: 'resource_type',
      instanceId: 'instance_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      resourceType: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourcesResponseBodyAssociatedObject extends $dara.Model {
  /**
   * @remarks
   * The object type of the Kubernetes object.
   * 
   * @example
   * Service
   */
  kind?: string;
  /**
   * @remarks
   * The namespace of the Kubernetes object.
   * 
   * @example
   * kube-system
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the Kubernetes object.
   * 
   * @example
   * nginx-ingress-lb
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      kind: 'kind',
      namespace: 'namespace',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kind: 'string',
      namespace: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourcesResponseBodyDeleteBehavior extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the resource is deleted by default when the cluster is deleted.
   * 
   * - true: The resource is deleted by default.
   * 
   * - false: The resource is not deleted.
   * 
   * @example
   * false
   */
  deleteByDefault?: boolean;
  /**
   * @remarks
   * Indicates whether the default behavior of `delete_by_default` can be changed.
   * 
   * - true: The behavior can be changed.
   * 
   * - false: The behavior cannot be changed.
   * 
   * @example
   * false
   */
  changeable?: boolean;
  static names(): { [key: string]: string } {
    return {
      deleteByDefault: 'delete_by_default',
      changeable: 'changeable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteByDefault: 'boolean',
      changeable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cb95aa626a47740afbf6aa099b65****
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the resource was created.
   * 
   * @example
   * 2023-08-15T14:34:42+08:00
   */
  created?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * ngw-wz9sphwk42sdtjixo****
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource information. For source information about the resource, see [ListStackResources](https://help.aliyun.com/document_detail/133836.html).
   * 
   * @example
   * {\\"Id\\":\\"KubernetesWorkerRole\\",\\"Name\\":\\"KubernetesWorkerRole\\",\\"Type\\":\\"ALIYUN::RAM::Role\\",\\"Status\\":\\"CREATE_COMPLETE\\",\\"StatusReason\\":\\"state changed\\",\\"Updated\\":\\"2025-04-10T06:21:17\\",\\"PhysicalId\\":\\"KubernetesWorkerRole-7e611193-225f-40f6-bc3c-ea8633******\\"}
   */
  resourceInfo?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::VPC::NatGateway
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource status. Valid values:
   * 
   * - `CREATE_COMPLETE`: The resource was created.
   * - `CREATE_FAILED`: The resource failed to be created.
   * - `CREATE_IN_PROGRESS`: The resource is being created.
   * - `DELETE_FAILED`: The resource failed to be deleted.
   * - `DELETE_IN_PROGRESS`: The resource is being deleted.
   * - `ROLLBACK_COMPLETE`: The rollback was successful.
   * - `ROLLBACK_FAILED`: The rollback failed.
   * - `ROLLBACK_IN_PROGRESS`: The rollback is in progress.
   * 
   * @example
   * CREATE_COMPLETE
   */
  state?: string;
  /**
   * @remarks
   * Indicates whether the resource was created by ACK.
   * 
   * - 1: The resource was created by ACK.
   * - 0: The resource is a pre-existing resource.
   * 
   * @example
   * 1
   */
  autoCreate?: number;
  /**
   * @remarks
   * The list of dependent resources.
   */
  dependencies?: DescribeClusterResourcesResponseBodyDependencies[];
  /**
   * @remarks
   * The Kubernetes object associated with the resource.
   */
  associatedObject?: DescribeClusterResourcesResponseBodyAssociatedObject;
  /**
   * @remarks
   * The deletion behavior of the resource when the cluster is deleted.
   */
  deleteBehavior?: DescribeClusterResourcesResponseBodyDeleteBehavior;
  /**
   * @remarks
   * The type of the resource creator. Valid values:
   * - user: Created by the user.
   * - system: Created by the ACK control system.
   * - addon: Created by a cluster component.
   * 
   * @example
   * addon
   */
  creatorType?: string;
  /**
   * @remarks
   * The additional information about the resource.
   * 
   * @example
   * { "type": "SLS_Data" }
   */
  extraInfo?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      created: 'created',
      instanceId: 'instance_id',
      resourceInfo: 'resource_info',
      resourceType: 'resource_type',
      state: 'state',
      autoCreate: 'auto_create',
      dependencies: 'dependencies',
      associatedObject: 'associated_object',
      deleteBehavior: 'delete_behavior',
      creatorType: 'creator_type',
      extraInfo: 'extra_info',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      created: 'string',
      instanceId: 'string',
      resourceInfo: 'string',
      resourceType: 'string',
      state: 'string',
      autoCreate: 'number',
      dependencies: { 'type': 'array', 'itemType': DescribeClusterResourcesResponseBodyDependencies },
      associatedObject: DescribeClusterResourcesResponseBodyAssociatedObject,
      deleteBehavior: DescribeClusterResourcesResponseBodyDeleteBehavior,
      creatorType: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.dependencies)) {
      $dara.Model.validateArray(this.dependencies);
    }
    if(this.associatedObject && typeof (this.associatedObject as any).validate === 'function') {
      (this.associatedObject as any).validate();
    }
    if(this.deleteBehavior && typeof (this.deleteBehavior as any).validate === 'function') {
      (this.deleteBehavior as any).validate();
    }
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeClusterResourcesResponseBody[];
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
      body: { 'type': 'array', 'itemType': DescribeClusterResourcesResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

