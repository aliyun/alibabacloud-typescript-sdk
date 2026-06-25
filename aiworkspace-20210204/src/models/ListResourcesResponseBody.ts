// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesResponseBodyResourcesEncryption extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm.
   * 
   * @example
   * AESCTR
   */
  algorithm?: string;
  /**
   * @remarks
   * Indicates whether encryption is enabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The encryption key.
   * 
   * @example
   * DEFAULT
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      enabled: 'Enabled',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      enabled: 'boolean',
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyResourcesExecutor extends $dara.Model {
  /**
   * @remarks
   * **Deprecated.** This parameter is no longer used.
   * 
   * @example
   * 110973******7793
   */
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyResourcesLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the label.
   * 
   * @example
   * system.supported.dsw
   */
  key?: string;
  /**
   * @remarks
   * The value of the label.
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

export class ListResourcesResponseBodyResourcesQuotasSpecs extends $dara.Model {
  /**
   * @remarks
   * The specification name.
   * 
   * @example
   * cu
   */
  name?: string;
  /**
   * @remarks
   * The specification value.
   * 
   * @example
   * 11500
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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

export class ListResourcesResponseBodyResourcesQuotas extends $dara.Model {
  /**
   * @remarks
   * The card type. Valid values:
   * 
   * - `CPU`
   * 
   * - `GPU`
   * 
   * @example
   * CPU
   */
  cardType?: string;
  /**
   * @remarks
   * The display name of the quota.
   * 
   * @example
   * 默认后付费Quota
   */
  displayName?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - `isolate`: subscription
   * 
   * - `share`: pay-as-you-go
   * 
   * @example
   * isolate
   */
  mode?: string;
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * QuotaName
   */
  name?: string;
  /**
   * @remarks
   * The product code. Valid values:
   * 
   * - `PAI_isolate`: PAI subscription resource group (PAI CPU)
   * 
   * - `PAI_share`: PAI pay-as-you-go resource group (PAI GPU)
   * 
   * - `MaxCompute_share`: MaxCompute pay-as-you-go resource group
   * 
   * - `MaxCompute_isolate`: MaxCompute subscription resource group
   * 
   * - `DataWorks_isolate`: DataWorks subscription resource group
   * 
   * - `DataWorks_share`: DataWorks pay-as-you-go resource group
   * 
   * - `DLC_share`: DLC pay-as-you-go resource group
   * 
   * @example
   * MaxCompute_isolate
   */
  productCode?: string;
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * - `PAI`
   * 
   * - `MaxCompute`
   * 
   * - `DLC`
   * 
   * @example
   * MaxCompute
   */
  quotaType?: string;
  /**
   * @remarks
   * The list of specifications.
   * 
   * @example
   * {\\"cu\\":\\"11500\\",\\"minCu\\":\\"2300\\",\\"parentId\\":\\"0\\"}
   */
  specs?: ListResourcesResponseBodyResourcesQuotasSpecs[];
  static names(): { [key: string]: string } {
    return {
      cardType: 'CardType',
      displayName: 'DisplayName',
      id: 'Id',
      mode: 'Mode',
      name: 'Name',
      productCode: 'ProductCode',
      quotaType: 'QuotaType',
      specs: 'Specs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cardType: 'string',
      displayName: 'string',
      id: 'string',
      mode: 'string',
      name: 'string',
      productCode: 'string',
      quotaType: 'string',
      specs: { 'type': 'array', 'itemType': ListResourcesResponseBodyResourcesQuotasSpecs },
    };
  }

  validate() {
    if(Array.isArray(this.specs)) {
      $dara.Model.validateArray(this.specs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The encryption details. This parameter is valid only for MaxCompute resources.
   */
  encryption?: ListResourcesResponseBodyResourcesEncryption;
  /**
   * @remarks
   * The environment type. Valid values:
   * 
   * - `dev`: development environment
   * 
   * - `prod`: production environment
   * 
   * @example
   * prod
   */
  envType?: string;
  /**
   * @remarks
   * **Deprecated.** This parameter is no longer used.
   */
  executor?: ListResourcesResponseBodyResourcesExecutor;
  /**
   * @remarks
   * The time when the resource was created. The time is displayed in UTC and is formatted in ISO 8601.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The name of the resource group. The name must be unique within an Alibaba Cloud account.
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
   * Indicates whether the resource is the default resource of its type. Each resource type has only one default resource. Valid values:
   * 
   * - `true`: The resource is the default resource.
   * 
   * - `false`: The resource is not the default resource.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The list of labels.
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
   * **Deprecated.** This parameter is deprecated and will be removed in a future release. Use the `ResourceType` parameter instead.
   * 
   * @example
   * MaxCompute
   */
  productType?: string;
  /**
   * @remarks
   * The list of quotas.
   */
  quotas?: ListResourcesResponseBodyResourcesQuotas[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * - `MaxCompute`: MaxCompute resources
   * 
   * - `ECS`: ECS resources
   * 
   * - `Lingjun`: Lingjun intelligent computing resources
   * 
   * - `ACS`: ACS computing resources
   * 
   * - `Flink`: Flink resources
   * 
   * - `SelfManagedAckPro`: self-managed cluster resources for AckPro
   * 
   * - `SelfManagedAckLingjun`: self-managed cluster resources for AckLingjun
   * 
   * - `SelfManagedASI`: self-managed cluster resources for ASI (third-party cloud)
   * 
   * @example
   * MaxCompute
   */
  resourceType?: string;
  /**
   * @remarks
   * The resource specifications.
   * 
   * @example
   * 对于MaxCompute {"Endpoint": "odps.alibaba-inc.com", "Project": "mignshi"}
   */
  spec?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the workspace to which the resource belongs.
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

export class ListResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resources.
   */
  resources?: ListResourcesResponseBodyResources[];
  /**
   * @remarks
   * The total number of entries that match the filter criteria.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListResourcesResponseBodyResources },
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

