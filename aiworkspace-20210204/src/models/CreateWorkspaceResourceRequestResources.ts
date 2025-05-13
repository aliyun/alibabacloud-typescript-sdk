// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateWorkspaceResourceRequestResourcesLabels } from "./CreateWorkspaceResourceRequestResourcesLabels";
import { CreateWorkspaceResourceRequestResourcesQuotas } from "./CreateWorkspaceResourceRequestResourcesQuotas";


export class CreateWorkspaceResourceRequestResources extends $dara.Model {
  /**
   * @remarks
   * The environment type. Valid values:
   * 
   * *   dev: development environment
   * *   prod: production environment
   * 
   * This parameter is required.
   * 
   * @example
   * prod
   */
  envType?: string;
  /**
   * @remarks
   * The name of the resource group, which is unique within your Alibaba Cloud account. This parameter is required for MaxCompute, Elastic Compute Service (ECS), Lingjun, Alibaba Cloud Container Compute Service (ACS), and Realtime Compute for Apache Flink resources.
   * 
   * @example
   * groupName
   */
  groupName?: string;
  /**
   * @remarks
   * Specifies whether the resource is the default resource. Each type of resources has a default resource. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The labels added to the resource.
   */
  labels?: CreateWorkspaceResourceRequestResourcesLabels[];
  /**
   * @remarks
   * The resource name. The name must meet the following requirements:
   * 
   * *   The name must be 3 to 28 characters in length, and can contain only letters, digits, and underscores (_). The name must start with a letter.
   * *   The name must be unique in the region.
   * 
   * This parameter is required.
   * 
   * @example
   * ResourceName
   */
  name?: string;
  /**
   * @remarks
   * **This parameter is no longer used and will be removed. Use the ResourceType parameter instead.
   * 
   * @example
   * MaxCompute
   */
  productType?: string;
  /**
   * @remarks
   * The quotas. Only MaxCompute quotas are available.
   */
  quotas?: CreateWorkspaceResourceRequestResourcesQuotas[];
  /**
   * @remarks
   * The resource types. Valid values:
   * 
   * *   MaxCompute
   * *   ECS
   * *   Lingjun
   * *   ACS
   * *   FLINK
   * 
   * @example
   * MaxCompute
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource specifications in the JSON format.
   */
  spec?: { [key: string]: any };
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      envType: 'EnvType',
      groupName: 'GroupName',
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
      envType: 'string',
      groupName: 'string',
      isDefault: 'boolean',
      labels: { 'type': 'array', 'itemType': CreateWorkspaceResourceRequestResourcesLabels },
      name: 'string',
      productType: 'string',
      quotas: { 'type': 'array', 'itemType': CreateWorkspaceResourceRequestResourcesQuotas },
      resourceType: 'string',
      spec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workspaceId: 'string',
    };
  }

  validate() {
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

