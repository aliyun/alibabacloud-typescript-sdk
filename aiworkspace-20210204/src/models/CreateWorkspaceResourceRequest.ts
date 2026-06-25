// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceResourceRequestResourcesLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * system.support.eas
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * true
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class CreateWorkspaceResourceRequestResourcesQuotas extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource quota. To obtain the resource quota ID, see [ListQuotas](https://help.aliyun.com/document_detail/449144.html). This parameter is required only for subscription MaxCompute resources.
   * For ECS, Lingjun, and ACS resources, you do not need to specify this parameter. Their quota information is configured in the `Spec` parameter.
   * 
   * @example
   * 232892******92912
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResourceRequestResources extends $dara.Model {
  /**
   * @remarks
   * The environment type. Valid values:
   * 
   * - `dev`: development environment
   * 
   * - `prod`: production environment
   * 
   * This parameter is required.
   * 
   * @example
   * prod
   */
  envType?: string;
  /**
   * @remarks
   * The name of the resource group. The name must be unique within an Alibaba Cloud account. This parameter is required for MaxCompute, ECS, Lingjun, ACS, and Flink resources.
   * 
   * @example
   * groupName
   */
  groupName?: string;
  /**
   * @remarks
   * Indicates whether this is the default resource for its type. Each resource type can have only one default resource.
   * 
   * - `false` (default): The resource is not the default resource.
   * 
   * - `true`: The resource is the default resource.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * An array of resource tags.
   */
  labels?: CreateWorkspaceResourceRequestResourcesLabels[];
  /**
   * @remarks
   * The resource name. The name must meet the following requirements:
   * 
   * - Must be 3 to 28 characters long, start with a letter, and can contain only letters, digits, and underscores (_).
   * 
   * - Must be unique within the same region.
   * 
   * - If `Option` is set to `Attach` and `ResourceType` is set to `MaxCompute`, this parameter specifies the project name.
   * 
   * This parameter is required.
   * 
   * @example
   * ResourceName
   */
  name?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated and will be removed in a future version. Use the `ResourceType` parameter instead.
   * 
   * @example
   * MaxCompute
   */
  productType?: string;
  /**
   * @remarks
   * The resource quotas. Currently, only MaxCompute resources have resource quotas.
   */
  quotas?: CreateWorkspaceResourceRequestResourcesQuotas[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - `MaxCompute`: MaxCompute resources
   * 
   * - `ECS`: general-purpose computing resources
   * 
   * - `Lingjun`: Lingjun intelligent computing resources
   * 
   * - `ACS`: ACS computing resources
   * 
   * - `Flink`: Flink resources
   * 
   * - `SelfManagedAckPro`: unified managed cluster resource (AckPro)
   * 
   * - `SelfManagedAckLingjun`: unified managed cluster resource (AckLingjun)
   * 
   * - `SelfManagedASI`: unified managed cluster resource for third-party clouds (ASI)
   * 
   * @example
   * MaxCompute
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource specification in JSON format. For ECS and Lingjun resources, the format is as follows:
   * {<br>
   * "clusterType": "The type of the cluster",
   * "resourceId": "The ID of the quota",
   * "resourceName": "The name of the quota"
   * }
   * The `clusterType` parameter can have the following values:<br>
   * 
   * - `share`: shared resource group
   * 
   * - `private`: dedicated resource group
   * 
   * - `FullyManaged`: fully managed ACS resource
   * 
   * @example
   * {
   *         "clusterType": "private",
   *         "resourceId": "quota1c******b4",
   *         "resourceName": "unif******90"
   *       }
   */
  spec?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the workspace to which the resource belongs. To obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
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

export class CreateWorkspaceResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The creation behavior. Valid values:
   * 
   * - `CreateAndAttach`: Creates a resource and attaches it to the workspace.
   * 
   * - `Attach`: Attaches an existing resource to the workspace. This option requires you to specify the `Name`, `ResourceType`, `GroupName`, and `EnvType` parameters.
   * 
   * > MaxCompute resources only support the `Attach` option.
   * 
   * @example
   * CreateAndAttach
   */
  option?: string;
  /**
   * @remarks
   * The list of resources.
   * 
   * This parameter is required.
   */
  resources?: CreateWorkspaceResourceRequestResources[];
  static names(): { [key: string]: string } {
    return {
      option: 'Option',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      option: 'string',
      resources: { 'type': 'array', 'itemType': CreateWorkspaceResourceRequestResources },
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

