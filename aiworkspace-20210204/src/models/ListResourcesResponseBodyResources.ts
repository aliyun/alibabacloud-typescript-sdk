// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourcesResponseBodyResourcesEncryption } from "./ListResourcesResponseBodyResourcesEncryption";
import { ListResourcesResponseBodyResourcesExecutor } from "./ListResourcesResponseBodyResourcesExecutor";
import { ListResourcesResponseBodyResourcesLabels } from "./ListResourcesResponseBodyResourcesLabels";
import { ListResourcesResponseBodyResourcesQuotas } from "./ListResourcesResponseBodyResourcesQuotas";


export class ListResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The encryption information, which is valid only for MaxCompute resources.
   */
  encryption?: ListResourcesResponseBodyResourcesEncryption;
  /**
   * @remarks
   * The environment type. Valid values:
   * 
   * *   dev: development environment
   * *   prod: production environment
   * 
   * @example
   * prod
   */
  envType?: string;
  /**
   * @remarks
   * This parameter is invalid and deprecated.
   */
  executor?: ListResourcesResponseBodyResourcesExecutor;
  /**
   * @remarks
   * The time when the resource group is created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The name of the resource group, which is unique within the Alibaba Cloud account.
   * 
   * @example
   * groupName
   */
  groupName?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * Indicates whether the resource is the default resource. Each type of resources has a default resource. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The tags.
   */
  labels?: ListResourcesResponseBodyResourcesLabels[];
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * ResourceName
   */
  name?: string;
  /**
   * @remarks
   * **This field is no longer used and will be removed. Use the ResourceType field.
   * 
   * @example
   * MaxCompute
   */
  productType?: string;
  /**
   * @remarks
   * The quotas.
   */
  quotas?: ListResourcesResponseBodyResourcesQuotas[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   MaxCompute
   * *   DLC
   * *   FLINK
   * 
   * @example
   * MaxCompute
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource specification.
   * 
   * @example
   * 对于MaxCompute {"Endpoint": "odps.alibaba-inc.com", "Project": "mignshi"}
   */
  spec?: { [key: string]: any };
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      encryption: 'Encryption',
      envType: 'EnvType',
      executor: 'Executor',
      gmtCreateTime: 'GmtCreateTime',
      groupName: 'GroupName',
      id: 'Id',
      isDefault: 'IsDefault',
      labels: 'Labels',
      name: 'Name',
      productType: 'ProductType',
      quotas: 'Quotas',
      resourceType: 'ResourceType',
      spec: 'Spec',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryption: ListResourcesResponseBodyResourcesEncryption,
      envType: 'string',
      executor: ListResourcesResponseBodyResourcesExecutor,
      gmtCreateTime: 'string',
      groupName: 'string',
      id: 'string',
      isDefault: 'boolean',
      labels: { 'type': 'array', 'itemType': ListResourcesResponseBodyResourcesLabels },
      name: 'string',
      productType: 'string',
      quotas: { 'type': 'array', 'itemType': ListResourcesResponseBodyResourcesQuotas },
      resourceType: 'string',
      spec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.encryption && typeof (this.encryption as any).validate === 'function') {
      (this.encryption as any).validate();
    }
    if(this.executor && typeof (this.executor as any).validate === 'function') {
      (this.executor as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    if(this.spec) {
      $dara.Model.validateMap(this.spec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

