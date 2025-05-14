// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterResourcesResponseBodyDependencies } from "./DescribeClusterResourcesResponseBodyDependencies";
import { DescribeClusterResourcesResponseBodyAssociatedObject } from "./DescribeClusterResourcesResponseBodyAssociatedObject";
import { DescribeClusterResourcesResponseBodyDeleteBehavior } from "./DescribeClusterResourcesResponseBodyDeleteBehavior";


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
   * 2020-09-11T10:11:54+08:00
   */
  created?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * lb-wz9poz4r0ymh8u0uf****
   */
  instanceId?: string;
  /**
   * @remarks
   * The resource information. For more information about how to query the source information about the resource, see [ListStackResources](https://help.aliyun.com/document_detail/133836.html).
   * 
   * @example
   * {\\"Id\\":\\"k8s_master_slb\\",\\"Name\\":\\"k8s_master_slb\\",\\"Type\\":\\"ALIYUN::SLB::LoadBalancer\\",\\"Status\\":\\"CREATE_COMPLETE\\",\\"StatusReason\\":\\"state changed\\",\\"Updated\\":\\"2020-05-21T13:25:02\\",\\"PhysicalId\\":\\"lb-wz9poz4r0ymh8u0uf****\\"}
   */
  resourceInfo?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * ALIYUN::SLB::LoadBalancer
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource status. Valid values:
   * 
   * *   `CREATE_COMPLETE`: the resource is created.
   * *   `CREATE_FAILED`: the resource failed to be created.
   * *   `CREATE_IN_PROGRESS`: the resource is being created.
   * *   `DELETE_FAILED`: the resource failed to be deleted.
   * *   `DELETE_IN_PROGRESS`: the resource is being deleted.
   * *   `ROLLBACK_COMPLETE`: the resource is rolled back.
   * *   `ROLLBACK_FAILED`: the resource failed to be rolled back.
   * *   `ROLLBACK_IN_PROGRESS`: the resource is being rolled back.
   * 
   * @example
   * CREATE_COMPLETE
   */
  state?: string;
  /**
   * @remarks
   * Specifies whether the resource is created by Container Service for Kubernetes (ACK). Valid values:
   * 
   * *   1: the resource is created by ACK.
   * *   0: the resource is an existing resource.
   * 
   * @example
   * 1
   */
  autoCreate?: number;
  /**
   * @remarks
   * The dependent resources.
   */
  dependencies?: DescribeClusterResourcesResponseBodyDependencies[];
  /**
   * @remarks
   * The Kubernetes object with which the resource is associated.
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
   * 
   * *   user: The resource is created by the user.
   * *   system: The resource is created by the ACK management system.
   * *   addon: The resource is created by a cluster component.
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
   * {"IP": "xx.xx.xx.xx"}
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

