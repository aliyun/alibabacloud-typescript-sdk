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
   * Indicates whether the resources are encrypted.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The primary key for the encryption.
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
   * This parameter is invalid and deprecated.
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
   * The tag key.
   * 
   * @example
   * system.supported.dsw
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The specification description.
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
   * The resource group type. Valid values:
   * 
   * *   CPU
   * *   GPU
   * 
   * @example
   * cpu
   */
  cardType?: string;
  /**
   * @remarks
   * The alias of the quota.
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
   * *   isolate: subscription
   * *   share: pay-as-you-go
   * 
   * @example
   * develop
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
   * *   PAI_isolate: CPU subscription resource groups of PAI
   * *   PAI_share: GPU pay-as-you-go resource groups of PAI
   * *   MaxCompute_share: pay-as-you-go resource groups of MaxCompute
   * *   MaxCompute_isolate: subscription resource groups of MaxCompute
   * *   DataWorks_isolate: subscription resource groups of DataWorks
   * *   DataWorks_share: pay-as-you-go resource groups of DataWorks
   * *   DLC_share: pay-as-you-go resource groups of Deep Learning Containers (DLC)
   * 
   * @example
   * MaxCompute_isolate
   */
  productCode?: string;
  /**
   * @remarks
   * The quota type. Valid values:
   * 
   * *   PAI
   * *   MaxCompute
   * *   DLC
   * 
   * @example
   * MaxCompute
   */
  quotaType?: string;
  /**
   * @remarks
   * The quota specifications.
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
   * The resources.
   */
  resources?: ListResourcesResponseBodyResources[];
  /**
   * @remarks
   * The number of resources that meet the filter conditions.
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

