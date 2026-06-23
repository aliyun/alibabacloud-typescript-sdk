// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterResourcesResponseBodyDependencies extends $dara.Model {
  /**
   * @remarks
   * 依赖资源的集群ID。
   * 
   * @example
   * cc5ee03f63e43425cb6f71f1a1756****
   */
  clusterId?: string;
  /**
   * @remarks
   * 依赖资源类型。
   * 
   * @example
   * ALIYUN::VPC::NatGateway
   */
  resourceType?: string;
  /**
   * @remarks
   * 依赖资源实例ID。
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
   * k8s对象类型。
   * 
   * @example
   * Service
   */
  kind?: string;
  /**
   * @remarks
   * k8s对象命名空间。
   * 
   * @example
   * kube-system
   */
  namespace?: string;
  /**
   * @remarks
   * k8s对象名称。
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
   * 删除集群时是否默认删除该资源。
   * 
   * - true：默认删除该资源。
   * 
   * - fasle：不删除该资源。
   * 
   * @example
   * false
   */
  deleteByDefault?: boolean;
  /**
   * @remarks
   * `delete_by_default`的默认行为是否可以更改。
   * 
   * - true：可以更改。
   * 
   * - false：不支持更改。
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
   * 集群ID。
   * 
   * @example
   * cb95aa626a47740afbf6aa099b65****
   */
  clusterId?: string;
  /**
   * @remarks
   * 资源创建时间。
   * 
   * @example
   * 2023-08-15T14:34:42+08:00
   */
  created?: string;
  /**
   * @remarks
   * 资源ID。
   * 
   * @example
   * ngw-wz9sphwk42sdtjixo****
   */
  instanceId?: string;
  /**
   * @remarks
   * 资源信息。关于资源的源信息，请参见[ListStackResources](https://help.aliyun.com/document_detail/133836.html)。
   * 
   * @example
   * {\\"Id\\":\\"KubernetesWorkerRole\\",\\"Name\\":\\"KubernetesWorkerRole\\",\\"Type\\":\\"ALIYUN::RAM::Role\\",\\"Status\\":\\"CREATE_COMPLETE\\",\\"StatusReason\\":\\"state changed\\",\\"Updated\\":\\"2025-04-10T06:21:17\\",\\"PhysicalId\\":\\"KubernetesWorkerRole-7e611193-225f-40f6-bc3c-ea8633******\\"}
   */
  resourceInfo?: string;
  /**
   * @remarks
   * 资源类型。
   * 
   * @example
   * ALIYUN::VPC::NatGateway
   */
  resourceType?: string;
  /**
   * @remarks
   * 资源状态。可选值：
   * 
   * - `CREATE_COMPLETE`：成功创建资源。
   * - `CREATE_FAILED`：创建资源失败。
   * - `CREATE_IN_PROGRESS`：创建资源中。
   * - `DELETE_FAILED`：删除资源失败。
   * - `DELETE_IN_PROGRESS`：删除资源中。
   * - `ROLLBACK_COMPLETE`：成功回滚。
   * - `ROLLBACK_FAILED`：回滚失败。
   * - `ROLLBACK_IN_PROGRESS`：回滚中。
   * 
   * @example
   * CREATE_COMPLETE
   */
  state?: string;
  /**
   * @remarks
   * 资源是否由ACK创建：
   * 
   * - 1：表示由ACK创建。
   * - 0：表示该资源为已有资源。
   * 
   * @example
   * 1
   */
  autoCreate?: number;
  /**
   * @remarks
   * 依赖资源列表。
   */
  dependencies?: DescribeClusterResourcesResponseBodyDependencies[];
  /**
   * @remarks
   * 资源关联的k8s对象。
   */
  associatedObject?: DescribeClusterResourcesResponseBodyAssociatedObject;
  /**
   * @remarks
   * 删除集群时该资源的删除行为。
   */
  deleteBehavior?: DescribeClusterResourcesResponseBodyDeleteBehavior;
  /**
   * @remarks
   * 该资源创建者的类型。可能的取值：
   * - user：由用户自行创建；
   * - system：由ACK管控系统创建；
   * - addon：由集群组件创建。
   * 
   * @example
   * addon
   */
  creatorType?: string;
  /**
   * @remarks
   * 资源的其他信息。
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

