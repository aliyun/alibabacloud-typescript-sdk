// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddImageRequestLabels extends $dara.Model {
  /**
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @example
   * GPU
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

export class AddImageLabelsRequestLabels extends $dara.Model {
  /**
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @example
   * GPU
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

export class CreateMemberRequestMembers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  roles?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 21513926******88039
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      roles: 'Roles',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberResponseBodyMembers extends $dara.Model {
  /**
   * @example
   * myDisplayName
   */
  displayName?: string;
  /**
   * @example
   * 145883-21513926******88039
   */
  memberId?: string;
  roles?: string[];
  /**
   * @example
   * 21513926******88039
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      memberId: 'MemberId',
      roles: 'Roles',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      memberId: 'string',
      roles: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductOrdersRequestProductsInstanceProperties extends $dara.Model {
  /**
   * @example
   * commodity_type。
   */
  code?: string;
  name?: string;
  /**
   * @example
   * oss。
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class CreateProductOrdersRequestProducts extends $dara.Model {
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  instanceProperties?: CreateProductOrdersRequestProductsInstanceProperties[];
  /**
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @example
   * DataWorks_share
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      chargeType: 'ChargeType',
      duration: 'Duration',
      instanceProperties: 'InstanceProperties',
      orderType: 'OrderType',
      pricingCycle: 'PricingCycle',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      chargeType: 'string',
      duration: 'number',
      instanceProperties: { 'type': 'array', 'itemType': CreateProductOrdersRequestProductsInstanceProperties },
      orderType: 'string',
      pricingCycle: 'string',
      productCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceProperties)) {
      $dara.Model.validateArray(this.instanceProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResourceRequestResourcesLabels extends $dara.Model {
  key?: string;
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
   * This parameter is required.
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
   * This parameter is required.
   * 
   * @example
   * prod
   */
  envType?: string;
  /**
   * @example
   * groupName
   */
  groupName?: string;
  /**
   * @example
   * false
   */
  isDefault?: boolean;
  labels?: CreateWorkspaceResourceRequestResourcesLabels[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ResourceName
   */
  name?: string;
  /**
   * @example
   * MaxCompute
   */
  productType?: string;
  quotas?: CreateWorkspaceResourceRequestResourcesQuotas[];
  resourceType?: string;
  spec?: { [key: string]: any };
  /**
   * @remarks
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

export class CreateWorkspaceResourceResponseBodyResources extends $dara.Model {
  /**
   * @example
   * 1234
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

export class GetDefaultWorkspaceResponseBodyConditions extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Create Failed
   */
  message?: string;
  /**
   * @example
   * CREATING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultWorkspaceResponseBodyOwner extends $dara.Model {
  /**
   * @example
   * 17915******4216
   */
  userId?: string;
  /**
   * @example
   * 17915******4216
   */
  userKp?: string;
  /**
   * @example
   * username
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userKp: 'UserKp',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userKp: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyLabels extends $dara.Model {
  /**
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @example
   * GPU
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

export class GetPermissionResponseBodyPermissionRules extends $dara.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @example
   * CREATOR
   */
  entityAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      entityAccessType: 'EntityAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      entityAccessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponseBodyOwner extends $dara.Model {
  /**
   * @example
   * mings****t
   */
  displayName?: string;
  /**
   * @example
   * 1157******94123
   */
  userId?: string;
  /**
   * @example
   * 1157******94123
   */
  userKp?: string;
  /**
   * @example
   * mings****t
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
      userKp: 'UserKp',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
      userKp: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentRequestOptions extends $dara.Model {
  /**
   * @example
   * true
   */
  matchNameExactly?: string;
  static names(): { [key: string]: string } {
    return {
      matchNameExactly: 'match_name_exactly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchNameExactly: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLabelsResponseBodyLabels extends $dara.Model {
  /**
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @example
   * GPU
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

export class ListImagesResponseBodyImagesLabels extends $dara.Model {
  /**
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @example
   * GPU
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

export class ListImagesResponseBodyImages extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * desc
   */
  description?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * image-tzi7f9******s45t
   */
  imageId?: string;
  imageUri?: string;
  labels?: ListImagesResponseBodyImagesLabels[];
  /**
   * @example
   * tensorflow_2.9
   */
  name?: string;
  /**
   * @example
   * 15577******82932
   */
  parentUserId?: string;
  size?: number;
  /**
   * @example
   * 15577******82932
   */
  userId?: string;
  /**
   * @example
   * 20******55
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageUri: 'ImageUri',
      labels: 'Labels',
      name: 'Name',
      parentUserId: 'ParentUserId',
      size: 'Size',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageUri: 'string',
      labels: { 'type': 'array', 'itemType': ListImagesResponseBodyImagesLabels },
      name: 'string',
      parentUserId: 'string',
      size: 'number',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBodyMembers extends $dara.Model {
  accountName?: string;
  /**
   * @example
   * myDisplayName
   */
  displayName?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 14588*****51688039
   */
  memberId?: string;
  /**
   * @example
   * user1
   */
  memberName?: string;
  roles?: string[];
  /**
   * @example
   * 215139******88039
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      memberId: 'MemberId',
      memberName: 'MemberName',
      roles: 'Roles',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      memberId: 'string',
      memberName: 'string',
      roles: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponseBodyPermissionsPermissionRules extends $dara.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @example
   * CREATOR
   */
  entityAccessType?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      entityAccessType: 'EntityAccessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      entityAccessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponseBodyPermissions extends $dara.Model {
  /**
   * @example
   * PaiDLC:GetTensorboard
   */
  permissionCode?: string;
  permissionRules?: ListPermissionsResponseBodyPermissionsPermissionRules[];
  static names(): { [key: string]: string } {
    return {
      permissionCode: 'PermissionCode',
      permissionRules: 'PermissionRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionCode: 'string',
      permissionRules: { 'type': 'array', 'itemType': ListPermissionsResponseBodyPermissionsPermissionRules },
    };
  }

  validate() {
    if(Array.isArray(this.permissionRules)) {
      $dara.Model.validateArray(this.permissionRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyProducts extends $dara.Model {
  hasPermissionToPurchase?: boolean;
  /**
   * @example
   * true
   */
  isPurchased?: boolean;
  /**
   * @example
   * DataWorks_isolate
   */
  productCode?: string;
  productInstanceId?: string;
  /**
   * @example
   * https://common-buy.aliy
   */
  purchaseUrl?: string;
  static names(): { [key: string]: string } {
    return {
      hasPermissionToPurchase: 'HasPermissionToPurchase',
      isPurchased: 'IsPurchased',
      productCode: 'ProductCode',
      productInstanceId: 'ProductInstanceId',
      purchaseUrl: 'PurchaseUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasPermissionToPurchase: 'boolean',
      isPurchased: 'boolean',
      productCode: 'string',
      productInstanceId: 'string',
      purchaseUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBodyServices extends $dara.Model {
  /**
   * @example
   * true
   */
  isOpen?: boolean;
  openUrl?: string;
  /**
   * @example
   * oss
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      isOpen: 'IsOpen',
      openUrl: 'OpenUrl',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isOpen: 'boolean',
      openUrl: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponseBodyQuotasSpecs extends $dara.Model {
  /**
   * @example
   * cu
   */
  name?: string;
  /**
   * @example
   * string
   */
  type?: string;
  /**
   * @example
   * 11500
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
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

export class ListQuotasResponseBodyQuotas extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * 1828233
   */
  id?: string;
  /**
   * @example
   * isolate
   */
  mode?: string;
  /**
   * @example
   * quota-name
   */
  name?: string;
  /**
   * @example
   * MaxCompute_share
   */
  productCode?: string;
  /**
   * @example
   * MaxCompute
   */
  quotaType?: string;
  /**
   * @example
   * {\\"cu\\":\\"11500\\",\\"minCu\\":\\"2300\\",\\"parentId\\":\\"0\\"}
   */
  specs?: ListQuotasResponseBodyQuotasSpecs[];
  static names(): { [key: string]: string } {
    return {
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
      displayName: 'string',
      id: 'string',
      mode: 'string',
      name: 'string',
      productCode: 'string',
      quotaType: 'string',
      specs: { 'type': 'array', 'itemType': ListQuotasResponseBodyQuotasSpecs },
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

export class ListResourcesResponseBodyResourcesEncryption extends $dara.Model {
  algorithm?: string;
  enabled?: boolean;
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
  key?: string;
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
   * @example
   * cu
   */
  name?: string;
  /**
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
   * @example
   * cpu
   */
  cardType?: string;
  displayName?: string;
  /**
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * develop
   */
  mode?: string;
  /**
   * @example
   * QuotaName
   */
  name?: string;
  /**
   * @example
   * MaxCompute_isolate
   */
  productCode?: string;
  /**
   * @example
   * MaxCompute
   */
  quotaType?: string;
  /**
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
  encryption?: ListResourcesResponseBodyResourcesEncryption;
  /**
   * @example
   * prod
   */
  envType?: string;
  executor?: ListResourcesResponseBodyResourcesExecutor;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * groupName
   */
  groupName?: string;
  /**
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  labels?: ListResourcesResponseBodyResourcesLabels[];
  /**
   * @example
   * ResourceName
   */
  name?: string;
  /**
   * @example
   * MaxCompute
   */
  productType?: string;
  quotas?: ListResourcesResponseBodyResourcesQuotas[];
  resourceType?: string;
  /**
   * @example
   * 对于MaxCompute {"Endpoint": "odps.alibaba-inc.com", "Project": "mignshi"}
   */
  spec?: { [key: string]: any };
  /**
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

export class ListWorkspaceUsersResponseBodyUsers extends $dara.Model {
  /**
   * @example
   * 1611******3000
   */
  userId?: string;
  /**
   * @example
   * she******mo
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBodyWorkspaces extends $dara.Model {
  adminNames?: string[];
  /**
   * @example
   * 122424353535
   */
  creator?: string;
  /**
   * @example
   * workspace description example
   */
  description?: string;
  envTypes?: string[];
  /**
   * @example
   * {"TenantId": "4286******98"}
   */
  extraInfos?: { [key: string]: any };
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @example
   * 123
   */
  workspaceId?: string;
  /**
   * @example
   * workspace-example
   */
  workspaceName?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      adminNames: 'AdminNames',
      creator: 'Creator',
      description: 'Description',
      envTypes: 'EnvTypes',
      extraInfos: 'ExtraInfos',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      isDefault: 'IsDefault',
      status: 'Status',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminNames: { 'type': 'array', 'itemType': 'string' },
      creator: 'string',
      description: 'string',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      extraInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      isDefault: 'boolean',
      status: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adminNames)) {
      $dara.Model.validateArray(this.adminNames);
    }
    if(Array.isArray(this.envTypes)) {
      $dara.Model.validateArray(this.envTypes);
    }
    if(this.extraInfos) {
      $dara.Model.validateMap(this.extraInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResourceRequestLabels extends $dara.Model {
  key?: string;
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

export class CodeSourceItem extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * master
   */
  codeBranch?: string;
  /**
   * @example
   * 44da109b59f8596152987eaa8f3b2487bb72ea63
   */
  codeCommit?: string;
  /**
   * @example
   * https://code.aliyun.com/pai-dlc/examples.git
   */
  codeRepo?: string;
  codeRepoAccessToken?: string;
  /**
   * @example
   * user
   */
  codeRepoUserName?: string;
  /**
   * @example
   * code-20210111103721-85qz78ia96lu
   */
  codeSourceId?: string;
  /**
   * @example
   * code source of dlc examples
   */
  description?: string;
  /**
   * @example
   * MyCodeSourceName1
   */
  displayName?: string;
  /**
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-18T12:52:15Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * /root/code/
   */
  mountPath?: string;
  /**
   * @example
   * 1157290171663117
   */
  userId?: string;
  /**
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      codeBranch: 'CodeBranch',
      codeCommit: 'CodeCommit',
      codeRepo: 'CodeRepo',
      codeRepoAccessToken: 'CodeRepoAccessToken',
      codeRepoUserName: 'CodeRepoUserName',
      codeSourceId: 'CodeSourceId',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      mountPath: 'MountPath',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      codeBranch: 'string',
      codeCommit: 'string',
      codeRepo: 'string',
      codeRepoAccessToken: 'string',
      codeRepoUserName: 'string',
      codeSourceId: 'string',
      description: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      mountPath: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Collection extends $dara.Model {
  /**
   * @example
   * AI4D
   */
  collectionName?: string;
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * 155770209******
   */
  ownerId?: string;
  /**
   * @example
   * 155770209******
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      collectionName: 'CollectionName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      ownerId: 'OwnerId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectionName: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      ownerId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Dataset extends $dara.Model {
  /**
   * @example
   * PRIVATE PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * OSS URL
   */
  dataSourceType?: string;
  /**
   * @example
   * COMMON PIC TEXT VIDEO AUDIO
   */
  dataType?: string;
  /**
   * @example
   * d-c0h44g3wlwkj8o4348
   */
  datasetId?: string;
  /**
   * @example
   * Animal images.
   */
  description?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  importInfo?: string;
  labels?: Label[];
  latestVersion?: DatasetVersion;
  /**
   * @example
   * RO RW
   */
  mountAccess?: string;
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @example
   * AnimalDataset
   */
  name?: string;
  /**
   * @example
   * jsonstring
   */
  options?: string;
  /**
   * @example
   * 1004110000006048
   */
  ownerId?: string;
  /**
   * @example
   * FILE DIRECTORY TABULAR
   */
  property?: string;
  /**
   * @example
   * Ecs
   */
  providerType?: string;
  /**
   * @example
   * d-bvfasdf4wxxj8o411
   */
  sourceDatasetId?: string;
  /**
   * @example
   * v2
   */
  sourceDatasetVersion?: string;
  /**
   * @example
   * Source Id
   */
  sourceId?: string;
  /**
   * @example
   * USER ITAG  PAI_PUBLIC_DATASET
   */
  sourceType?: string;
  /**
   * @example
   * text-classification
   */
  tagTemplateType?: string;
  /**
   * @example
   * oss://xxx
   */
  uri?: string;
  /**
   * @example
   * 2004110000006048
   */
  userId?: string;
  /**
   * @example
   * Workspace Id
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      dataSourceType: 'DataSourceType',
      dataType: 'DataType',
      datasetId: 'DatasetId',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      importInfo: 'ImportInfo',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      mountAccess: 'MountAccess',
      mountAccessReadWriteRoleIdList: 'MountAccessReadWriteRoleIdList',
      name: 'Name',
      options: 'Options',
      ownerId: 'OwnerId',
      property: 'Property',
      providerType: 'ProviderType',
      sourceDatasetId: 'SourceDatasetId',
      sourceDatasetVersion: 'SourceDatasetVersion',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      tagTemplateType: 'TagTemplateType',
      uri: 'Uri',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      dataSourceType: 'string',
      dataType: 'string',
      datasetId: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      importInfo: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latestVersion: DatasetVersion,
      mountAccess: 'string',
      mountAccessReadWriteRoleIdList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      options: 'string',
      ownerId: 'string',
      property: 'string',
      providerType: 'string',
      sourceDatasetId: 'string',
      sourceDatasetVersion: 'string',
      sourceId: 'string',
      sourceType: 'string',
      tagTemplateType: 'string',
      uri: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.latestVersion && typeof (this.latestVersion as any).validate === 'function') {
      (this.latestVersion as any).validate();
    }
    if(Array.isArray(this.mountAccessReadWriteRoleIdList)) {
      $dara.Model.validateArray(this.mountAccessReadWriteRoleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatasetFileMeta extends $dara.Model {
  /**
   * @example
   * 12
   */
  dataSize?: number;
  datasetFileMetaId?: string;
  downloadUrl?: string;
  fileFingerPrint?: string;
  /**
   * @example
   * car.png
   */
  fileName?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  fileUpdateTime?: string;
  /**
   * @example
   * 0.6
   */
  score?: number;
  tags?: string;
  /**
   * @example
   * oss://test-bucket/dataset/car.png
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      datasetFileMetaId: 'DatasetFileMetaId',
      downloadUrl: 'DownloadUrl',
      fileFingerPrint: 'FileFingerPrint',
      fileName: 'FileName',
      fileUpdateTime: 'FileUpdateTime',
      score: 'Score',
      tags: 'Tags',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'number',
      datasetFileMetaId: 'string',
      downloadUrl: 'string',
      fileFingerPrint: 'string',
      fileName: 'string',
      fileUpdateTime: 'string',
      score: 'number',
      tags: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatasetFileMetaConentUpdate extends $dara.Model {
  comment?: string;
  contentType?: string;
  dataSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  datasetFileMetaId?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  fileCreateTime?: string;
  fileName?: string;
  fileType?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  fileUpdateTime?: string;
  metaAttributes?: string;
  /**
   * @example
   * {"ai":["cat"], "user":["dog"]}
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      contentType: 'ContentType',
      dataSize: 'DataSize',
      datasetFileMetaId: 'DatasetFileMetaId',
      fileCreateTime: 'FileCreateTime',
      fileName: 'FileName',
      fileType: 'FileType',
      fileUpdateTime: 'FileUpdateTime',
      metaAttributes: 'MetaAttributes',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      contentType: 'string',
      dataSize: 'number',
      datasetFileMetaId: 'string',
      fileCreateTime: 'string',
      fileName: 'string',
      fileType: 'string',
      fileUpdateTime: 'string',
      metaAttributes: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatasetFileMetaContentCreate extends $dara.Model {
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contentType?: string;
  dataSize?: number;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileFingerPrint?: string;
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fileType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  fileUpdateTime?: string;
  metaAttributes?: string;
  /**
   * @example
   * {"user":["cat"]}
   */
  tags?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      contentType: 'ContentType',
      dataSize: 'DataSize',
      fileCreateTime: 'FileCreateTime',
      fileFingerPrint: 'FileFingerPrint',
      fileName: 'FileName',
      fileType: 'FileType',
      fileUpdateTime: 'FileUpdateTime',
      metaAttributes: 'MetaAttributes',
      tags: 'Tags',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      contentType: 'string',
      dataSize: 'number',
      fileCreateTime: 'string',
      fileFingerPrint: 'string',
      fileName: 'string',
      fileType: 'string',
      fileUpdateTime: 'string',
      metaAttributes: 'string',
      tags: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatasetFileMetaContentGet extends $dara.Model {
  comment?: string;
  contentType?: string;
  dataSize?: number;
  datasetFileMetaId?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  fileCreateTime?: string;
  fileFingerPrint?: string;
  fileName?: string;
  fileType?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01Z
   */
  fileUpdateTime?: string;
  metaAttributes?: string;
  tags?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      contentType: 'ContentType',
      dataSize: 'DataSize',
      datasetFileMetaId: 'DatasetFileMetaId',
      fileCreateTime: 'FileCreateTime',
      fileFingerPrint: 'FileFingerPrint',
      fileName: 'FileName',
      fileType: 'FileType',
      fileUpdateTime: 'FileUpdateTime',
      metaAttributes: 'MetaAttributes',
      tags: 'Tags',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      contentType: 'string',
      dataSize: 'number',
      datasetFileMetaId: 'string',
      fileCreateTime: 'string',
      fileFingerPrint: 'string',
      fileName: 'string',
      fileType: 'string',
      fileUpdateTime: 'string',
      metaAttributes: 'string',
      tags: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatasetFileMetaResponse extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  datasetFileMetaId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  result?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMetaId: 'DatasetFileMetaId',
      result: 'Result',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetFileMetaId: 'string',
      result: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatasetJob extends $dara.Model {
  completedFileCount?: number;
  createTime?: string;
  datasetJobId?: string;
  datasetVersion?: string;
  description?: string;
  failedFileCount?: number;
  finishTime?: string;
  jobAction?: string;
  jobMode?: string;
  jobSpec?: string;
  logs?: string[];
  status?: string;
  totalFileCount?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      completedFileCount: 'CompletedFileCount',
      createTime: 'CreateTime',
      datasetJobId: 'DatasetJobId',
      datasetVersion: 'DatasetVersion',
      description: 'Description',
      failedFileCount: 'FailedFileCount',
      finishTime: 'FinishTime',
      jobAction: 'JobAction',
      jobMode: 'JobMode',
      jobSpec: 'JobSpec',
      logs: 'Logs',
      status: 'Status',
      totalFileCount: 'TotalFileCount',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedFileCount: 'number',
      createTime: 'string',
      datasetJobId: 'string',
      datasetVersion: 'string',
      description: 'string',
      failedFileCount: 'number',
      finishTime: 'string',
      jobAction: 'string',
      jobMode: 'string',
      jobSpec: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      totalFileCount: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatasetJobConfig extends $dara.Model {
  config?: string;
  configType?: string;
  createTime?: string;
  datasetJobConfigId?: string;
  modifyTime?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      configType: 'ConfigType',
      createTime: 'CreateTime',
      datasetJobConfigId: 'DatasetJobConfigId',
      modifyTime: 'ModifyTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      configType: 'string',
      createTime: 'string',
      datasetJobConfigId: 'string',
      modifyTime: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DatasetLabel extends $dara.Model {
  key?: string;
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

export class DatasetVersion extends $dara.Model {
  dataCount?: number;
  dataSize?: number;
  /**
   * @example
   * OSS
   */
  dataSourceType?: string;
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  importInfo?: string;
  labels?: Label[];
  /**
   * @example
   * RO RW
   */
  mountAccess?: string;
  options?: string;
  /**
   * @example
   * FILE
   */
  property?: string;
  sourceId?: string;
  sourceType?: string;
  /**
   * @example
   * OSS://xxx
   */
  uri?: string;
  /**
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      dataSourceType: 'DataSourceType',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      importInfo: 'ImportInfo',
      labels: 'Labels',
      mountAccess: 'MountAccess',
      options: 'Options',
      property: 'Property',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      uri: 'Uri',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCount: 'number',
      dataSize: 'number',
      dataSourceType: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      importInfo: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      mountAccess: 'string',
      options: 'string',
      property: 'string',
      sourceId: 'string',
      sourceType: 'string',
      uri: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Experiment extends $dara.Model {
  accessibility?: string;
  artifactUri?: string;
  experimentId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labels?: ExperimentLabel[];
  latestRun?: Run;
  name?: string;
  ownerId?: string;
  requestId?: string;
  tensorboardLogUri?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      artifactUri: 'ArtifactUri',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      latestRun: 'LatestRun',
      name: 'Name',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      tensorboardLogUri: 'TensorboardLogUri',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      artifactUri: 'string',
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': ExperimentLabel },
      latestRun: Run,
      name: 'string',
      ownerId: 'string',
      requestId: 'string',
      tensorboardLogUri: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.latestRun && typeof (this.latestRun as any).validate === 'function') {
      (this.latestRun as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExperimentLabel extends $dara.Model {
  /**
   * @example
   * exp-890waerw09a0f
   */
  experimentId?: string;
  /**
   * @example
   * 2023-12-27T03:30:04Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-12-27T03:30:04Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * key
   */
  key?: string;
  /**
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
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

export class Label extends $dara.Model {
  key?: string;
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

export class LabelInfo extends $dara.Model {
  /**
   * @example
   * key
   */
  key?: string;
  /**
   * @example
   * value
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

export class LineageEntity extends $dara.Model {
  attributes?: { [key: string]: any };
  entityType?: string;
  name?: string;
  qualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      entityType: 'EntityType',
      name: 'Name',
      qualifiedName: 'QualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      entityType: 'string',
      name: 'string',
      qualifiedName: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LineageRelation extends $dara.Model {
  destEntityQualifiedName?: string;
  relationshipGuid?: string;
  srcEntityQualifiedName?: string;
  static names(): { [key: string]: string } {
    return {
      destEntityQualifiedName: 'DestEntityQualifiedName',
      relationshipGuid: 'RelationshipGuid',
      srcEntityQualifiedName: 'SrcEntityQualifiedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destEntityQualifiedName: 'string',
      relationshipGuid: 'string',
      srcEntityQualifiedName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Model extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * cv
   */
  domain?: string;
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtModifiedTime?: string;
  labels?: Label[];
  latestVersion?: ModelVersion;
  modelDescription?: string;
  /**
   * @example
   * https://***.md
   */
  modelDoc?: string;
  /**
   * @example
   * model-1123*****
   */
  modelId?: string;
  modelName?: string;
  /**
   * @example
   * Checkpoint
   */
  modelType?: string;
  /**
   * @example
   * 101
   */
  orderNumber?: number;
  /**
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @example
   * 1557702098******
   */
  ownerId?: string;
  /**
   * @example
   * pai
   */
  provider?: string;
  /**
   * @example
   * text-classifiaction
   */
  task?: string;
  /**
   * @example
   * 1557702098******
   */
  userId?: string;
  /**
   * @example
   * 234**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      domain: 'Domain',
      extraInfo: 'ExtraInfo',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      modelDescription: 'ModelDescription',
      modelDoc: 'ModelDoc',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelType: 'ModelType',
      orderNumber: 'OrderNumber',
      origin: 'Origin',
      ownerId: 'OwnerId',
      provider: 'Provider',
      task: 'Task',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      domain: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latestVersion: ModelVersion,
      modelDescription: 'string',
      modelDoc: 'string',
      modelId: 'string',
      modelName: 'string',
      modelType: 'string',
      orderNumber: 'number',
      origin: 'string',
      ownerId: 'string',
      provider: 'string',
      task: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.latestVersion && typeof (this.latestVersion as any).validate === 'function') {
      (this.latestVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelVersion extends $dara.Model {
  approvalStatus?: string;
  compressionSpec?: { [key: string]: any };
  evaluationSpec?: { [key: string]: any };
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtModifiedTime?: string;
  inferenceSpec?: { [key: string]: any };
  labels?: Label[];
  metrics?: { [key: string]: any };
  options?: string;
  /**
   * @example
   * 155770209******
   */
  ownerId?: string;
  sourceId?: string;
  sourceType?: string;
  trainingSpec?: { [key: string]: any };
  /**
   * @example
   * oss://bucket/path-to-model
   */
  uri?: string;
  /**
   * @example
   * 155770209******
   */
  userId?: string;
  versionDescription?: string;
  /**
   * @example
   * 1.0.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      compressionSpec: 'CompressionSpec',
      evaluationSpec: 'EvaluationSpec',
      extraInfo: 'ExtraInfo',
      formatType: 'FormatType',
      frameworkType: 'FrameworkType',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      inferenceSpec: 'InferenceSpec',
      labels: 'Labels',
      metrics: 'Metrics',
      options: 'Options',
      ownerId: 'OwnerId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trainingSpec: 'TrainingSpec',
      uri: 'Uri',
      userId: 'UserId',
      versionDescription: 'VersionDescription',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      compressionSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evaluationSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formatType: 'string',
      frameworkType: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      inferenceSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'array', 'itemType': Label },
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      options: 'string',
      ownerId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trainingSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      uri: 'string',
      userId: 'string',
      versionDescription: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.compressionSpec) {
      $dara.Model.validateMap(this.compressionSpec);
    }
    if(this.evaluationSpec) {
      $dara.Model.validateMap(this.evaluationSpec);
    }
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(this.inferenceSpec) {
      $dara.Model.validateMap(this.inferenceSpec);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.metrics) {
      $dara.Model.validateMap(this.metrics);
    }
    if(this.trainingSpec) {
      $dara.Model.validateMap(this.trainingSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Relation extends $dara.Model {
  errMsg?: string;
  lineageRelation?: LineageRelation;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      lineageRelation: 'LineageRelation',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      lineageRelation: LineageRelation,
      result: 'boolean',
    };
  }

  validate() {
    if(this.lineageRelation && typeof (this.lineageRelation as any).validate === 'function') {
      (this.lineageRelation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Relationship extends $dara.Model {
  attributes?: { [key: string]: any };
  dataChannel?: string;
  relationshipGuid?: string;
  relationshipType?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      dataChannel: 'DataChannel',
      relationshipGuid: 'RelationshipGuid',
      relationshipType: 'RelationshipType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dataChannel: 'string',
      relationshipGuid: 'string',
      relationshipType: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Run extends $dara.Model {
  accessibility?: string;
  experimentId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labels?: RunLabel[];
  metrics?: RunMetric[];
  name?: string;
  ownerId?: string;
  params?: RunParam[];
  requestId?: string;
  runId?: string;
  sourceId?: string;
  sourceType?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      metrics: 'Metrics',
      name: 'Name',
      ownerId: 'OwnerId',
      params: 'Params',
      requestId: 'RequestId',
      runId: 'RunId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': RunLabel },
      metrics: { 'type': 'array', 'itemType': RunMetric },
      name: 'string',
      ownerId: 'string',
      params: { 'type': 'array', 'itemType': RunParam },
      requestId: 'string',
      runId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunLabel extends $dara.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  runId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      key: 'Key',
      runId: 'RunId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      key: 'string',
      runId: 'string',
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

export class RunMetric extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  step?: number;
  timestamp?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      step: 'Step',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      step: 'number',
      timestamp: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunParam extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
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

export class Trial extends $dara.Model {
  accessibility?: string;
  experimentId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  labels?: { [key: string]: any }[];
  name?: string;
  ownerId?: string;
  sourceId?: string;
  sourceType?: string;
  trialId?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      name: 'Name',
      ownerId: 'OwnerId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trialId: 'TrialId',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      name: 'string',
      ownerId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trialId: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrialLabel extends $dara.Model {
  /**
   * @example
   * 2023-12-27T03:30:04Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-12-27T03:30:04Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * key
   */
  key?: string;
  trialId?: string;
  /**
   * @example
   * value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      key: 'Key',
      trialId: 'TrialId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      key: 'string',
      trialId: 'string',
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

export class AcceptDataworksEventRequest extends $dara.Model {
  /**
   * @example
   * {"eventCode":"d****ct","projectId":"8***6","tenantId":4*******8,"operator":"115*****901"}
   */
  data?: { [key: string]: any };
  /**
   * @example
   * 539306ba-*****-41a0-****-6dc81060985c
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      messageId: 'string',
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptDataworksEventResponseBody extends $dara.Model {
  /**
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AcceptDataworksEventResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AcceptDataworksEventResponseBody;
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
      body: AcceptDataworksEventResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageRequest extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  description?: string;
  imageId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/pai-compression/nlp:gpu
   */
  imageUri?: string;
  labels?: AddImageRequestLabels[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nlp-compression
   */
  name?: string;
  size?: number;
  /**
   * @example
   * 15******45
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      imageId: 'ImageId',
      imageUri: 'ImageUri',
      labels: 'Labels',
      name: 'Name',
      size: 'Size',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      imageId: 'string',
      imageUri: 'string',
      labels: { 'type': 'array', 'itemType': AddImageRequestLabels },
      name: 'string',
      size: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponseBody extends $dara.Model {
  /**
   * @example
   * image-4c62******53uor
   */
  imageId?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddImageResponseBody;
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
      body: AddImageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  labels?: AddImageLabelsRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': AddImageLabelsRequestLabels },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageLabelsResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddImageLabelsResponseBody;
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
      body: AddImageLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemberRoleResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMemberRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddMemberRoleResponseBody;
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
      body: AddMemberRoleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $dara.Model {
  /**
   * @example
   * rg-df********534dy
   */
  newResourceGroupId?: string;
  /**
   * @example
   * 12**56
   */
  resourceId?: string;
  /**
   * @example
   * workspace
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 6****27E-****-5144-A002-89C****8660F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ChangeResourceGroupResponseBody;
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
      body: ChangeResourceGroupResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCodeSourceRequest extends $dara.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @example
   * master
   */
  codeBranch?: string;
  codeCommit?: string;
  /**
   * @example
   * https://code.aliyun.com/******
   */
  codeRepo?: string;
  /**
   * @example
   * ***
   */
  codeRepoAccessToken?: string;
  /**
   * @example
   * use***
   */
  codeRepoUserName?: string;
  /**
   * @example
   * code source of dlc examples
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyCodeSource1
   */
  displayName?: string;
  /**
   * @example
   * /root/code/code-source-1
   */
  mountPath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      codeBranch: 'CodeBranch',
      codeCommit: 'CodeCommit',
      codeRepo: 'CodeRepo',
      codeRepoAccessToken: 'CodeRepoAccessToken',
      codeRepoUserName: 'CodeRepoUserName',
      description: 'Description',
      displayName: 'DisplayName',
      mountPath: 'MountPath',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      codeBranch: 'string',
      codeCommit: 'string',
      codeRepo: 'string',
      codeRepoAccessToken: 'string',
      codeRepoUserName: 'string',
      description: 'string',
      displayName: 'string',
      mountPath: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCodeSourceResponseBody extends $dara.Model {
  /**
   * @example
   * code-20********
   */
  codeSourceId?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3**********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeSourceId: 'CodeSourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSourceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCodeSourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateCodeSourceResponseBody;
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
      body: CreateCodeSourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequest extends $dara.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  dataCount?: number;
  dataSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NAS
   */
  dataSourceType?: string;
  /**
   * @example
   * COMMON
   */
  dataType?: string;
  description?: string;
  importInfo?: string;
  labels?: Label[];
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  provider?: string;
  /**
   * @example
   * Ecs
   */
  providerType?: string;
  sourceDatasetId?: string;
  sourceDatasetVersion?: string;
  /**
   * @example
   * jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nas://09f****f2.cn-hangzhou/
   */
  uri?: string;
  /**
   * @example
   * 29884000000186970
   */
  userId?: string;
  versionDescription?: string;
  versionLabels?: Label[];
  /**
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      dataSourceType: 'DataSourceType',
      dataType: 'DataType',
      description: 'Description',
      importInfo: 'ImportInfo',
      labels: 'Labels',
      mountAccessReadWriteRoleIdList: 'MountAccessReadWriteRoleIdList',
      name: 'Name',
      options: 'Options',
      property: 'Property',
      provider: 'Provider',
      providerType: 'ProviderType',
      sourceDatasetId: 'SourceDatasetId',
      sourceDatasetVersion: 'SourceDatasetVersion',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      uri: 'Uri',
      userId: 'UserId',
      versionDescription: 'VersionDescription',
      versionLabels: 'VersionLabels',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      dataCount: 'number',
      dataSize: 'number',
      dataSourceType: 'string',
      dataType: 'string',
      description: 'string',
      importInfo: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      mountAccessReadWriteRoleIdList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      options: 'string',
      property: 'string',
      provider: 'string',
      providerType: 'string',
      sourceDatasetId: 'string',
      sourceDatasetVersion: 'string',
      sourceId: 'string',
      sourceType: 'string',
      uri: 'string',
      userId: 'string',
      versionDescription: 'string',
      versionLabels: { 'type': 'array', 'itemType': Label },
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.mountAccessReadWriteRoleIdList)) {
      $dara.Model.validateArray(this.mountAccessReadWriteRoleIdList);
    }
    if(Array.isArray(this.versionLabels)) {
      $dara.Model.validateArray(this.versionLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponseBody extends $dara.Model {
  /**
   * @example
   * d-rbvg5*****jhc9ks92
   */
  datasetId?: string;
  /**
   * @example
   * B2C51F93-1C07-5477-9705-5FDB****F19F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDatasetResponseBody;
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
      body: CreateDatasetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetFileMetasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  datasetFileMetas?: DatasetFileMetaContentCreate[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMetas: 'DatasetFileMetas',
      datasetVersion: 'DatasetVersion',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetFileMetas: { 'type': 'array', 'itemType': DatasetFileMetaContentCreate },
      datasetVersion: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasetFileMetas)) {
      $dara.Model.validateArray(this.datasetFileMetas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetFileMetasResponseBody extends $dara.Model {
  failedDetails?: DatasetFileMetaResponse[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  status?: boolean;
  succeedDetails?: DatasetFileMetaResponse[];
  static names(): { [key: string]: string } {
    return {
      failedDetails: 'FailedDetails',
      requestId: 'RequestId',
      status: 'Status',
      succeedDetails: 'SucceedDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedDetails: { 'type': 'array', 'itemType': DatasetFileMetaResponse },
      requestId: 'string',
      status: 'boolean',
      succeedDetails: { 'type': 'array', 'itemType': DatasetFileMetaResponse },
    };
  }

  validate() {
    if(Array.isArray(this.failedDetails)) {
      $dara.Model.validateArray(this.failedDetails);
    }
    if(Array.isArray(this.succeedDetails)) {
      $dara.Model.validateArray(this.succeedDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetFileMetasResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDatasetFileMetasResponseBody;
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
      body: CreateDatasetFileMetasResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetJobRequest extends $dara.Model {
  /**
   * @example
   * v1
   */
  datasetVersion?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SemanticIndex
   */
  jobAction?: string;
  /**
   * @example
   * Full
   */
  jobMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {\\"modelId\\":\\"xxx\\"}
   */
  jobSpec?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetVersion: 'DatasetVersion',
      description: 'Description',
      jobAction: 'JobAction',
      jobMode: 'JobMode',
      jobSpec: 'JobSpec',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersion: 'string',
      description: 'string',
      jobAction: 'string',
      jobMode: 'string',
      jobSpec: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetJobResponseBody extends $dara.Model {
  /**
   * @example
   * dsjob-9jx1******uj9e
   */
  datasetJobId?: string;
  /**
   * @example
   * 99341606-****-0757724D97EE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetJobId: 'DatasetJobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetJobId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDatasetJobResponseBody;
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
      body: CreateDatasetJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetJobConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   */
  config?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MultimodalIntelligentTag
   */
  configType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 454716
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      configType: 'ConfigType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      configType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetJobConfigResponseBody extends $dara.Model {
  /**
   * @example
   * dscfg-xxxxxxxxxxxxxx
   */
  datasetJobConfigId?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetJobConfigId: 'DatasetJobConfigId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetJobConfigId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetJobConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDatasetJobConfigResponseBody;
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
      body: CreateDatasetJobConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetLabelsRequest extends $dara.Model {
  labels?: Label[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': Label },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetLabelsResponseBody extends $dara.Model {
  /**
   * @example
   * A083731B-4973-54D1-B324-E53****4DD44
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDatasetLabelsResponseBody;
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
      body: CreateDatasetLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetVersionRequest extends $dara.Model {
  /**
   * @example
   * 300
   */
  dataCount?: number;
  /**
   * @example
   * 19000
   */
  dataSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  dataSourceType?: string;
  description?: string;
  importInfo?: string;
  labels?: Label[];
  /**
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @example
   * d-a0xbe5n03bhqof46ce
   */
  sourceId?: string;
  /**
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      dataSourceType: 'DataSourceType',
      description: 'Description',
      importInfo: 'ImportInfo',
      labels: 'Labels',
      options: 'Options',
      property: 'Property',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCount: 'number',
      dataSize: 'number',
      dataSourceType: 'string',
      description: 'string',
      importInfo: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      options: 'string',
      property: 'string',
      sourceId: 'string',
      sourceType: 'string',
      uri: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetVersionResponseBody extends $dara.Model {
  requestId?: string;
  /**
   * @example
   * v1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDatasetVersionResponseBody;
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
      body: CreateDatasetVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetVersionLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  labels?: Label[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': Label },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetVersionLabelsResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetVersionLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDatasetVersionLabelsResponseBody;
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
      body: CreateDatasetVersionLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentRequest extends $dara.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * Artifact的OSS存储路径
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou.aliyuncs.com/test
   */
  artifactUri?: string;
  /**
   * @remarks
   * 标签
   */
  labels?: LabelInfo[];
  /**
   * @remarks
   * 名称
   * 
   * This parameter is required.
   * 
   * @example
   * exp-test
   */
  name?: string;
  /**
   * @remarks
   * 工作空间ID
   * 
   * This parameter is required.
   * 
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      artifactUri: 'ArtifactUri',
      labels: 'Labels',
      name: 'Name',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      artifactUri: 'string',
      labels: { 'type': 'array', 'itemType': LabelInfo },
      name: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentResponseBody extends $dara.Model {
  experimentId?: string;
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateExperimentResponseBody;
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
      body: CreateExperimentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  members?: CreateMemberRequestMembers[];
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': CreateMemberRequestMembers },
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberResponseBody extends $dara.Model {
  members?: CreateMemberResponseBodyMembers[];
  /**
   * @example
   * DA869D1B-035A-43B2-ACC1-C56681BD9FAA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': CreateMemberResponseBodyMembers },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMemberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateMemberResponseBody;
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
      body: CreateMemberResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelRequest extends $dara.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @example
   * nlp
   */
  domain?: string;
  /**
   * **if can be null:**
   * true
   */
  extraInfo?: { [key: string]: any };
  labels?: Label[];
  modelDescription?: string;
  /**
   * @example
   * https://*.md
   */
  modelDoc?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modelName?: string;
  /**
   * @example
   * Checkpoint
   */
  modelType?: string;
  /**
   * @example
   * 101
   */
  orderNumber?: number;
  /**
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @example
   * text-classification
   */
  task?: string;
  /**
   * @example
   * 796**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      domain: 'Domain',
      extraInfo: 'ExtraInfo',
      labels: 'Labels',
      modelDescription: 'ModelDescription',
      modelDoc: 'ModelDoc',
      modelName: 'ModelName',
      modelType: 'ModelType',
      orderNumber: 'OrderNumber',
      origin: 'Origin',
      task: 'Task',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      domain: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'array', 'itemType': Label },
      modelDescription: 'string',
      modelDoc: 'string',
      modelName: 'string',
      modelType: 'string',
      orderNumber: 'number',
      origin: 'string',
      task: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponseBody extends $dara.Model {
  /**
   * @example
   * model-rbvg5wzljz****ks92
   */
  modelId?: string;
  /**
   * @example
   * 9DAD3112-AE22-5563-9A02-5C7E8****E35
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modelId: 'ModelId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModelResponseBody;
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
      body: CreateModelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelLabelsRequest extends $dara.Model {
  labels?: Label[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': Label },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelLabelsResponseBody extends $dara.Model {
  /**
   * @example
   * F81D9EC0-1872-50F5-A96C-A0647D****1D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModelLabelsResponseBody;
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
      body: CreateModelLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelVersionRequest extends $dara.Model {
  /**
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @example
   * {}
   */
  compressionSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  evaluationSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @example
   * {
   *     "processor": "tensorflow_gpu_1.12"
   * }
   */
  inferenceSpec?: { [key: string]: any };
  labels?: Label[];
  /**
   * @example
   * {}
   */
  metrics?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  options?: string;
  /**
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/
   */
  uri?: string;
  versionDescription?: string;
  /**
   * @example
   * 0.1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      compressionSpec: 'CompressionSpec',
      evaluationSpec: 'EvaluationSpec',
      extraInfo: 'ExtraInfo',
      formatType: 'FormatType',
      frameworkType: 'FrameworkType',
      inferenceSpec: 'InferenceSpec',
      labels: 'Labels',
      metrics: 'Metrics',
      options: 'Options',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trainingSpec: 'TrainingSpec',
      uri: 'Uri',
      versionDescription: 'VersionDescription',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      compressionSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evaluationSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formatType: 'string',
      frameworkType: 'string',
      inferenceSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'array', 'itemType': Label },
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      options: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trainingSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      uri: 'string',
      versionDescription: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.compressionSpec) {
      $dara.Model.validateMap(this.compressionSpec);
    }
    if(this.evaluationSpec) {
      $dara.Model.validateMap(this.evaluationSpec);
    }
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(this.inferenceSpec) {
      $dara.Model.validateMap(this.inferenceSpec);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.metrics) {
      $dara.Model.validateMap(this.metrics);
    }
    if(this.trainingSpec) {
      $dara.Model.validateMap(this.trainingSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelVersionResponseBody extends $dara.Model {
  /**
   * @example
   * 21645FCD-BAB9-5742-89AE-AEB27****B2E
   */
  requestId?: string;
  /**
   * @example
   * 0.1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModelVersionResponseBody;
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
      body: CreateModelVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelVersionLabelsRequest extends $dara.Model {
  labels?: Label[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': Label },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelVersionLabelsResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelVersionLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateModelVersionLabelsResponseBody;
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
      body: CreateModelVersionLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductOrdersRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  autoPay?: boolean;
  products?: CreateProductOrdersRequestProducts[];
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      products: 'Products',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      products: { 'type': 'array', 'itemType': CreateProductOrdersRequestProducts },
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductOrdersResponseBody extends $dara.Model {
  /**
   * @example
   * 3ed6a882-0d85-4dd8-ad36-cd8d74ab9fdb
   */
  buyProductRequestId?: string;
  message?: string;
  /**
   * @example
   * 210292536260646
   */
  orderId?: string;
  /**
   * @example
   * ksdjf-jksd-*****slkdjf
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      buyProductRequestId: 'BuyProductRequestId',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyProductRequestId: 'string',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProductOrdersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateProductOrdersResponseBody;
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
      body: CreateProductOrdersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * exp-6thbb5xrbmp*****
   */
  experimentId?: string;
  labels?: Label[];
  /**
   * @example
   * myName
   */
  name?: string;
  params?: RunParam[];
  /**
   * @example
   * job-jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @example
   * DLC
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      labels: 'Labels',
      name: 'Name',
      params: 'Params',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      name: 'string',
      params: { 'type': 'array', 'itemType': RunParam },
      sourceId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunResponseBody extends $dara.Model {
  /**
   * @example
   * run-1meoz7VJd2C6f****
   */
  runId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      runId: 'RunId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateRunResponseBody;
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
      body: CreateRunResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * display name
   */
  displayName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  envTypes?: string[];
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * workspace_example
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      envTypes: 'EnvTypes',
      resourceGroupId: 'ResourceGroupId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.envTypes)) {
      $dara.Model.validateArray(this.envTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponseBody extends $dara.Model {
  /**
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  /**
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWorkspaceResponseBody;
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
      body: CreateWorkspaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkspaceResourceRequest extends $dara.Model {
  /**
   * @example
   * CreateAndAttach
   */
  option?: string;
  /**
   * @remarks
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

export class CreateWorkspaceResourceResponseBody extends $dara.Model {
  /**
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  resources?: CreateWorkspaceResourceResponseBodyResources[];
  /**
   * @example
   * 1
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
      resources: { 'type': 'array', 'itemType': CreateWorkspaceResourceResponseBodyResources },
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

export class CreateWorkspaceResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWorkspaceResourceResponseBody;
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
      body: CreateWorkspaceResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCodeSourceResponseBody extends $dara.Model {
  /**
   * @example
   * code-20210111103721-85qz78ia96lu
   */
  codeSourceId?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeSourceId: 'CodeSourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSourceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCodeSourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteCodeSourceResponseBody;
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
      body: DeleteCodeSourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetResponseBody extends $dara.Model {
  /**
   * @example
   * A0F049F0-8D69-5BAC-8F10-B******A34C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatasetResponseBody;
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
      body: DeleteDatasetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetFileMetasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 07914c9534586e4e7aa6e9dbca5009082df******fd8a0d857b33296c59bf6
   */
  datasetFileMetaIds?: string;
  /**
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @example
   * 132602
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMetaIds: 'DatasetFileMetaIds',
      datasetVersion: 'DatasetVersion',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetFileMetaIds: 'string',
      datasetVersion: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetFileMetasResponseBody extends $dara.Model {
  failedDetails?: DatasetFileMetaResponse[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      failedDetails: 'FailedDetails',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedDetails: { 'type': 'array', 'itemType': DatasetFileMetaResponse },
      requestId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.failedDetails)) {
      $dara.Model.validateArray(this.failedDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetFileMetasResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatasetFileMetasResponseBody;
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
      body: DeleteDatasetFileMetasResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetJobResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatasetJobResponseBody;
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
      body: DeleteDatasetJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetJobConfigRequest extends $dara.Model {
  /**
   * @example
   * 513663
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetJobConfigResponseBody extends $dara.Model {
  /**
   * @example
   * DA869D1B-035A-43B2-ACC1-C56681BD9FAA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetJobConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatasetJobConfigResponseBody;
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
      body: DeleteDatasetJobConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetLabelsRequest extends $dara.Model {
  /**
   * @example
   * key1,key2
   */
  labelKeys?: string;
  static names(): { [key: string]: string } {
    return {
      labelKeys: 'LabelKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKeys: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetLabelsResponseBody extends $dara.Model {
  /**
   * @example
   * 64B50C1D-D4C2-560C-86A3-A6ED****16D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatasetLabelsResponseBody;
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
      body: DeleteDatasetLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetVersionResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatasetVersionResponseBody;
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
      body: DeleteDatasetVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetVersionLabelsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * key1,key2
   */
  keys?: string;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetVersionLabelsResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetVersionLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteDatasetVersionLabelsResponseBody;
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
      body: DeleteDatasetVersionLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentResponseBody extends $dara.Model {
  /**
   * @example
   * 8D7B2E70-F770-505B-A672-09F1D8F2EC1E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExperimentResponseBody;
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
      body: DeleteExperimentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentLabelResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentLabelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteExperimentLabelResponseBody;
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
      body: DeleteExperimentLabelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMembersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 145883-21513926******88039,145883-2769726******87513
   */
  memberIds?: string;
  static names(): { [key: string]: string } {
    return {
      memberIds: 'MemberIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMembersResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  /**
   * @example
   * D5BFFEE3-6025-443F-8A03-02D619B5C4B9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMembersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteMembersResponseBody;
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
      body: DeleteMembersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteModelResponseBody;
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
      body: DeleteModelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelLabelsRequest extends $dara.Model {
  /**
   * @example
   * key1,key2
   */
  labelKeys?: string;
  static names(): { [key: string]: string } {
    return {
      labelKeys: 'LabelKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKeys: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelLabelsResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteModelLabelsResponseBody;
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
      body: DeleteModelLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelVersionResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteModelVersionResponseBody;
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
      body: DeleteModelVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelVersionLabelsRequest extends $dara.Model {
  /**
   * @example
   * key1,key2
   */
  labelKeys?: string;
  static names(): { [key: string]: string } {
    return {
      labelKeys: 'LabelKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKeys: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelVersionLabelsResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelVersionLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteModelVersionLabelsResponseBody;
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
      body: DeleteModelVersionLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRunResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRunResponseBody;
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
      body: DeleteRunResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRunLabelResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRunLabelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteRunLabelResponseBody;
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
      body: DeleteRunLabelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWorkspaceResponseBody;
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
      body: DeleteWorkspaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceResourceRequest extends $dara.Model {
  /**
   * @example
   * group
   */
  groupName?: string;
  labels?: string;
  /**
   * @example
   * DetachAndDelete
   */
  option?: string;
  /**
   * @example
   * DLC
   */
  productType?: string;
  resourceIds?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      labels: 'Labels',
      option: 'Option',
      productType: 'ProductType',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      labels: 'string',
      option: 'string',
      productType: 'string',
      resourceIds: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceResourceResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  resourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkspaceResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWorkspaceResourceResponseBody;
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
      body: DeleteWorkspaceResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeSourceResponseBody extends $dara.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @example
   * master
   */
  codeBranch?: string;
  /**
   * @example
   * 44da10***********
   */
  codeCommit?: string;
  /**
   * @example
   * https://code.aliyun.com/pai-dlc/examples.git
   */
  codeRepo?: string;
  /**
   * @example
   * xxxx
   */
  codeRepoAccessToken?: string;
  /**
   * @example
   * user1
   */
  codeRepoUserName?: string;
  /**
   * @example
   * code-202**********
   */
  codeSourceId?: string;
  /**
   * @example
   * This is my data source 1.
   */
  description?: string;
  /**
   * @example
   * MyCodeSource1
   */
  displayName?: string;
  /**
   * @example
   * 2021-01-12T23:36:01.123Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T23:36:01.123Z
   */
  gmtModifyTime?: string;
  /**
   * @example
   * /root/code
   */
  mountPath?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * 1722********
   */
  userId?: string;
  /**
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      codeBranch: 'CodeBranch',
      codeCommit: 'CodeCommit',
      codeRepo: 'CodeRepo',
      codeRepoAccessToken: 'CodeRepoAccessToken',
      codeRepoUserName: 'CodeRepoUserName',
      codeSourceId: 'CodeSourceId',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      mountPath: 'MountPath',
      requestId: 'RequestId',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      codeBranch: 'string',
      codeCommit: 'string',
      codeRepo: 'string',
      codeRepoAccessToken: 'string',
      codeRepoUserName: 'string',
      codeSourceId: 'string',
      description: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      mountPath: 'string',
      requestId: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeSourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCodeSourceResponseBody;
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
      body: GetCodeSourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBody extends $dara.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @example
   * NAS
   */
  dataSourceType?: string;
  /**
   * @example
   * COMMON
   */
  dataType?: string;
  /**
   * @example
   * d-rbvg5wz****c9ks92
   */
  datasetId?: string;
  description?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  importInfo?: string;
  labels?: Label[];
  latestVersion?: DatasetVersion;
  mountAccess?: string;
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @example
   * myName
   */
  name?: string;
  /**
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @example
   * 1631044****3440
   */
  ownerId?: string;
  /**
   * @example
   * DIRECTORY
   */
  property?: string;
  provider?: string;
  providerType?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  sourceDatasetId?: string;
  sourceDatasetVersion?: string;
  /**
   * @example
   * jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @example
   * USER
   */
  sourceType?: string;
  tagTemplateType?: string;
  /**
   * @example
   * nas://09f****f2.cn-hangzhou/
   */
  uri?: string;
  /**
   * @example
   * 2485765****023475
   */
  userId?: string;
  /**
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      dataSourceType: 'DataSourceType',
      dataType: 'DataType',
      datasetId: 'DatasetId',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      importInfo: 'ImportInfo',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      mountAccess: 'MountAccess',
      mountAccessReadWriteRoleIdList: 'MountAccessReadWriteRoleIdList',
      name: 'Name',
      options: 'Options',
      ownerId: 'OwnerId',
      property: 'Property',
      provider: 'Provider',
      providerType: 'ProviderType',
      requestId: 'RequestId',
      sourceDatasetId: 'SourceDatasetId',
      sourceDatasetVersion: 'SourceDatasetVersion',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      tagTemplateType: 'TagTemplateType',
      uri: 'Uri',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      dataSourceType: 'string',
      dataType: 'string',
      datasetId: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      importInfo: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latestVersion: DatasetVersion,
      mountAccess: 'string',
      mountAccessReadWriteRoleIdList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      options: 'string',
      ownerId: 'string',
      property: 'string',
      provider: 'string',
      providerType: 'string',
      requestId: 'string',
      sourceDatasetId: 'string',
      sourceDatasetVersion: 'string',
      sourceId: 'string',
      sourceType: 'string',
      tagTemplateType: 'string',
      uri: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.latestVersion && typeof (this.latestVersion as any).validate === 'function') {
      (this.latestVersion as any).validate();
    }
    if(Array.isArray(this.mountAccessReadWriteRoleIdList)) {
      $dara.Model.validateArray(this.mountAccessReadWriteRoleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatasetResponseBody;
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
      body: GetDatasetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetFileMetaRequest extends $dara.Model {
  /**
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetVersion: 'DatasetVersion',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersion: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetFileMetaResponseBody extends $dara.Model {
  datasetFileMeta?: DatasetFileMetaContentGet;
  datasetId?: string;
  datasetVersion?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMeta: 'DatasetFileMeta',
      datasetId: 'DatasetId',
      datasetVersion: 'DatasetVersion',
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetFileMeta: DatasetFileMetaContentGet,
      datasetId: 'string',
      datasetVersion: 'string',
      requestId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.datasetFileMeta && typeof (this.datasetFileMeta as any).validate === 'function') {
      (this.datasetFileMeta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetFileMetaResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatasetFileMetaResponseBody;
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
      body: GetDatasetFileMetaResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetJobRequest extends $dara.Model {
  /**
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetVersion: 'DatasetVersion',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersion: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetJobResponseBody extends $dara.Model {
  /**
   * @example
   * 990
   */
  completedFileCount?: number;
  /**
   * @example
   * 2024-11-15T07:06:42Z
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * 10
   */
  failedFileCount?: number;
  /**
   * @example
   * 2024-07-16T02:03:23Z
   */
  finishTime?: string;
  /**
   * @example
   * SemanticIndex
   */
  jobAction?: string;
  /**
   * @example
   * Full
   */
  jobMode?: string;
  /**
   * @example
   * {\\"modelId\\":\\"xxx\\"}
   */
  jobSpec?: string;
  logs?: string[];
  /**
   * @example
   * 64B50C1D-D4C2-560C-86A3-A6ED****16D
   */
  requestId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * 1000
   */
  totalFileCount?: number;
  static names(): { [key: string]: string } {
    return {
      completedFileCount: 'CompletedFileCount',
      createTime: 'CreateTime',
      description: 'Description',
      failedFileCount: 'FailedFileCount',
      finishTime: 'FinishTime',
      jobAction: 'JobAction',
      jobMode: 'JobMode',
      jobSpec: 'JobSpec',
      logs: 'Logs',
      requestId: 'RequestId',
      status: 'Status',
      totalFileCount: 'TotalFileCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedFileCount: 'number',
      createTime: 'string',
      description: 'string',
      failedFileCount: 'number',
      finishTime: 'string',
      jobAction: 'string',
      jobMode: 'string',
      jobSpec: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      status: 'string',
      totalFileCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatasetJobResponseBody;
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
      body: GetDatasetJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetJobConfigRequest extends $dara.Model {
  /**
   * @example
   * 114243
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetJobConfigResponseBody extends $dara.Model {
  /**
   * @example
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   */
  config?: string;
  /**
   * @example
   * MultimodalIntelligentTag
   */
  configType?: string;
  /**
   * @example
   * 2024-10-16T01:44:10Z
   */
  createTime?: string;
  /**
   * @example
   * d-lfd60v0p****ujtsdx
   */
  datasetId?: string;
  /**
   * @example
   * 2024-12-26T02:17:18Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D5BFFEE3-6025-443F-8A03-02D619B5C4B9
   */
  requestId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      configType: 'ConfigType',
      createTime: 'CreateTime',
      datasetId: 'DatasetId',
      modifyTime: 'ModifyTime',
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      configType: 'string',
      createTime: 'string',
      datasetId: 'string',
      modifyTime: 'string',
      requestId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetJobConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatasetJobConfigResponseBody;
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
      body: GetDatasetJobConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * 数据集的数据量
   */
  dataCount?: number;
  /**
   * @remarks
   * 数据集版本的数据大小。
   */
  dataSize?: number;
  /**
   * @remarks
   * 数据源类型。支持以下取值：
   * - OSS：阿里云对象存储（OSS）。
   * - NAS：阿里云文件存储（NAS）。
   * 
   * This parameter is required.
   */
  dataSourceType?: string;
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   */
  datasetId?: string;
  /**
   * @remarks
   * 数据集版本的描述信息。
   */
  description?: string;
  gmtCreateTime?: string;
  /**
   * @remarks
   * 创建时间。
   */
  gmtModifiedTime?: string;
  importInfo?: string;
  /**
   * @remarks
   * 代表资源标签的资源属性字段
   */
  labels?: Label[];
  mountAccess?: string;
  /**
   * @remarks
   * 扩展字段，JsonString类型。
   * 当DLC使用数据集时，可通过配置mountPath字段指定数据集默认挂载路径。
   */
  options?: string;
  /**
   * @remarks
   * 数据集的属性。支持以下取值：
   * - FILE：文件。
   * - DIRECTORY：文件夹。
   * 
   * This parameter is required.
   */
  property?: string;
  requestId?: string;
  /**
   * @remarks
   * 数据来源ID。
   */
  sourceId?: string;
  /**
   * @remarks
   * 数据来源类型，默认为USER。支持以下取值：
   * - PAI-PUBLIC-DATASET：PAI公共数据集。
   * - ITAG：iTAG模块标注结果生成的数据集。
   * - USER：用户注册的数据集。
   */
  sourceType?: string;
  /**
   * @remarks
   * Uri配置样例如下：
   * - 数据源类型为OSS：`oss://bucket.endpoint/object`
   * - 数据源类型为NAS：
   * 通用型NAS格式为：`nas://<nasfisid>.region/subpath/to/dir/`；
   * CPFS1.0：`nas://<cpfs-fsid>.region/subpath/to/dir/`；
   * CPFS2.0：`nas://<cpfs-fsid>.region/<protocolserviceid>/`。
   * CPFS1.0和CPFS2.0根据fsid的格式来区分：CPFS1.0 格式为cpfs-<8位ascii字符>；CPFS2.0 格式为cpfs-<16为ascii字符>。
   * 
   * This parameter is required.
   */
  uri?: string;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      dataSourceType: 'DataSourceType',
      datasetId: 'DatasetId',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      importInfo: 'ImportInfo',
      labels: 'Labels',
      mountAccess: 'MountAccess',
      options: 'Options',
      property: 'Property',
      requestId: 'RequestId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      uri: 'Uri',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCount: 'number',
      dataSize: 'number',
      dataSourceType: 'string',
      datasetId: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      importInfo: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      mountAccess: 'string',
      options: 'string',
      property: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      uri: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatasetVersionResponseBody;
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
      body: GetDatasetVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultWorkspaceRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultWorkspaceResponseBody extends $dara.Model {
  conditions?: GetDefaultWorkspaceResponseBodyConditions[];
  /**
   * @example
   * 17915******4216
   */
  creator?: string;
  /**
   * @example
   * workspace description example
   */
  description?: string;
  /**
   * @example
   * workspace-example
   */
  displayName?: string;
  envTypes?: string[];
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  owner?: GetDefaultWorkspaceResponseBodyOwner;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @example
   * 1234
   */
  workspaceId?: string;
  /**
   * @example
   * workspace-example
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      creator: 'Creator',
      description: 'Description',
      displayName: 'DisplayName',
      envTypes: 'EnvTypes',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      owner: 'Owner',
      requestId: 'RequestId',
      status: 'Status',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': GetDefaultWorkspaceResponseBodyConditions },
      creator: 'string',
      description: 'string',
      displayName: 'string',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      owner: GetDefaultWorkspaceResponseBodyOwner,
      requestId: 'string',
      status: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.envTypes)) {
      $dara.Model.validateArray(this.envTypes);
    }
    if(this.owner && typeof (this.owner as any).validate === 'function') {
      (this.owner as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDefaultWorkspaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDefaultWorkspaceResponseBody;
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
      body: GetDefaultWorkspaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Experiment;
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
      body: Experiment,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBody extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  description?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * registry.cn-hangzhou.aliyuncs.******ession/nlp:gpu
   */
  imageUri?: string;
  labels?: GetImageResponseBodyLabels[];
  /**
   * @example
   * nlp-compression
   */
  name?: string;
  /**
   * @example
   * 15577******8921
   */
  parentUserId?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  size?: number;
  /**
   * @example
   * 15577******8921
   */
  userId?: string;
  /**
   * @example
   * 15945
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageUri: 'ImageUri',
      labels: 'Labels',
      name: 'Name',
      parentUserId: 'ParentUserId',
      requestId: 'RequestId',
      size: 'Size',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageUri: 'string',
      labels: { 'type': 'array', 'itemType': GetImageResponseBodyLabels },
      name: 'string',
      parentUserId: 'string',
      requestId: 'string',
      size: 'number',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetImageResponseBody;
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
      body: GetImageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberRequest extends $dara.Model {
  memberId?: string;
  /**
   * @example
   * 21513926******88039
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberResponseBody extends $dara.Model {
  /**
   * @example
   * myDisplayName
   */
  displayName?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 145883-21513926******88039
   */
  memberId?: string;
  /**
   * @example
   * user1
   */
  memberName?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  roles?: string[];
  /**
   * @example
   * 21513926******88039
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      memberId: 'MemberId',
      memberName: 'MemberName',
      requestId: 'RequestId',
      roles: 'Roles',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      gmtCreateTime: 'string',
      memberId: 'string',
      memberName: 'string',
      requestId: 'string',
      roles: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMemberResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetMemberResponseBody;
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
      body: GetMemberResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponseBody extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * cv
   */
  domain?: string;
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  labels?: Label[];
  latestVersion?: ModelVersion;
  modelDescription?: string;
  /**
   * @example
   * https://***.md
   */
  modelDoc?: string;
  /**
   * @example
   * model-rbvg5wzljz****ks92
   */
  modelId?: string;
  modelName?: string;
  /**
   * @example
   * Checkpoint
   */
  modelType?: string;
  /**
   * @example
   * 1
   */
  orderNumber?: number;
  /**
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @example
   * 1234567890******
   */
  ownerId?: string;
  /**
   * @example
   * pai
   */
  provider?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * text-classification
   */
  task?: string;
  /**
   * @example
   * 1234567890******
   */
  userId?: string;
  /**
   * @example
   * 234**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      domain: 'Domain',
      extraInfo: 'ExtraInfo',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      modelDescription: 'ModelDescription',
      modelDoc: 'ModelDoc',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelType: 'ModelType',
      orderNumber: 'OrderNumber',
      origin: 'Origin',
      ownerId: 'OwnerId',
      provider: 'Provider',
      requestId: 'RequestId',
      task: 'Task',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      domain: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latestVersion: ModelVersion,
      modelDescription: 'string',
      modelDoc: 'string',
      modelId: 'string',
      modelName: 'string',
      modelType: 'string',
      orderNumber: 'number',
      origin: 'string',
      ownerId: 'string',
      provider: 'string',
      requestId: 'string',
      task: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.latestVersion && typeof (this.latestVersion as any).validate === 'function') {
      (this.latestVersion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetModelResponseBody;
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
      body: GetModelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelVersionResponseBody extends $dara.Model {
  /**
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @example
   * {}
   */
  compressionSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  evaluationSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * {
   *     "Processor": "tensorflow_gpu_1.12"
   * }
   */
  inferenceSpec?: { [key: string]: any };
  labels?: Label[];
  /**
   * @example
   * {}
   */
  metrics?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  options?: string;
  /**
   * @example
   * 1234567890******
   */
  ownerId?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  uri?: string;
  /**
   * @example
   * 1234567890******
   */
  userId?: string;
  versionDescription?: string;
  /**
   * @example
   * 0.1.0
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      compressionSpec: 'CompressionSpec',
      evaluationSpec: 'EvaluationSpec',
      extraInfo: 'ExtraInfo',
      formatType: 'FormatType',
      frameworkType: 'FrameworkType',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      inferenceSpec: 'InferenceSpec',
      labels: 'Labels',
      metrics: 'Metrics',
      options: 'Options',
      ownerId: 'OwnerId',
      requestId: 'RequestId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trainingSpec: 'TrainingSpec',
      uri: 'Uri',
      userId: 'UserId',
      versionDescription: 'VersionDescription',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      compressionSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evaluationSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formatType: 'string',
      frameworkType: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      inferenceSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'array', 'itemType': Label },
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      options: 'string',
      ownerId: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trainingSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      uri: 'string',
      userId: 'string',
      versionDescription: 'string',
      versionName: 'string',
    };
  }

  validate() {
    if(this.compressionSpec) {
      $dara.Model.validateMap(this.compressionSpec);
    }
    if(this.evaluationSpec) {
      $dara.Model.validateMap(this.evaluationSpec);
    }
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(this.inferenceSpec) {
      $dara.Model.validateMap(this.inferenceSpec);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.metrics) {
      $dara.Model.validateMap(this.metrics);
    }
    if(this.trainingSpec) {
      $dara.Model.validateMap(this.trainingSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetModelVersionResponseBody;
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
      body: GetModelVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionRequest extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * 17915******4216
   */
  creator?: string;
  labels?: { [key: string]: any };
  option?: string;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      creator: 'Creator',
      labels: 'Labels',
      option: 'Option',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      creator: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      option: 'string',
      resource: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionShrinkRequest extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * 17915******4216
   */
  creator?: string;
  labelsShrink?: string;
  option?: string;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      creator: 'Creator',
      labelsShrink: 'Labels',
      option: 'Option',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      creator: 'string',
      labelsShrink: 'string',
      option: 'string',
      resource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionResponseBody extends $dara.Model {
  /**
   * @example
   * PaiDLC:ListJobs
   */
  permissionCode?: string;
  permissionRules?: GetPermissionResponseBodyPermissionRules[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      permissionCode: 'PermissionCode',
      permissionRules: 'PermissionRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionCode: 'string',
      permissionRules: { 'type': 'array', 'itemType': GetPermissionResponseBodyPermissionRules },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.permissionRules)) {
      $dara.Model.validateArray(this.permissionRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPermissionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPermissionResponseBody;
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
      body: GetPermissionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Run;
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
      body: Run,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponseBody extends $dara.Model {
  adminNames?: string[];
  /**
   * @example
   * 1157******94123
   */
  creator?: string;
  /**
   * @example
   * workspace description example
   */
  description?: string;
  /**
   * @example
   * workspace-example
   */
  displayName?: string;
  envTypes?: string[];
  /**
   * @example
   * {"TenantId": "4286******98"}
   */
  extraInfos?: { [key: string]: any };
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  owner?: GetWorkspaceResponseBodyOwner;
  /**
   * @example
   * A0F049F0-8D69-5BAC-8F10-B4DED1B5A34C
   */
  requestId?: string;
  resourceGroupId?: string;
  /**
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @example
   * 1234
   */
  workspaceId?: string;
  /**
   * @example
   * workspace-example
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      adminNames: 'AdminNames',
      creator: 'Creator',
      description: 'Description',
      displayName: 'DisplayName',
      envTypes: 'EnvTypes',
      extraInfos: 'ExtraInfos',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      isDefault: 'IsDefault',
      owner: 'Owner',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminNames: { 'type': 'array', 'itemType': 'string' },
      creator: 'string',
      description: 'string',
      displayName: 'string',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      extraInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      isDefault: 'boolean',
      owner: GetWorkspaceResponseBodyOwner,
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adminNames)) {
      $dara.Model.validateArray(this.adminNames);
    }
    if(Array.isArray(this.envTypes)) {
      $dara.Model.validateArray(this.envTypes);
    }
    if(this.extraInfos) {
      $dara.Model.validateMap(this.extraInfos);
    }
    if(this.owner && typeof (this.owner as any).validate === 'function') {
      (this.owner as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorkspaceResponseBody;
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
      body: GetWorkspaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCodeSourcesRequest extends $dara.Model {
  /**
   * @example
   * MyDataSource
   */
  displayName?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * GmtModifyTime
   */
  sortBy?: string;
  /**
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCodeSourcesResponseBody extends $dara.Model {
  codeSources?: CodeSourceItem[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      codeSources: 'CodeSources',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSources: { 'type': 'array', 'itemType': CodeSourceItem },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.codeSources)) {
      $dara.Model.validateArray(this.codeSources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCodeSourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCodeSourcesResponseBody;
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
      body: ListCodeSourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetFileMetasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  endFileUpdateTime?: string;
  /**
   * @example
   * 90a6ee35-****-4cd4-927e-1f45e1cb8b62_1729644433000
   */
  nextToken?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  queryText?: string;
  /**
   * @example
   * TAG
   */
  queryType?: string;
  /**
   * @example
   * 0.6
   */
  scoreThreshold?: number;
  /**
   * @example
   * FileCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  startFileUpdateTime?: string;
  /**
   * @example
   * 100
   */
  topK?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 105173
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetVersion: 'DatasetVersion',
      endFileUpdateTime: 'EndFileUpdateTime',
      nextToken: 'NextToken',
      order: 'Order',
      pageSize: 'PageSize',
      queryText: 'QueryText',
      queryType: 'QueryType',
      scoreThreshold: 'ScoreThreshold',
      sortBy: 'SortBy',
      startFileUpdateTime: 'StartFileUpdateTime',
      topK: 'TopK',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersion: 'string',
      endFileUpdateTime: 'string',
      nextToken: 'string',
      order: 'string',
      pageSize: 'number',
      queryText: 'string',
      queryType: 'string',
      scoreThreshold: 'number',
      sortBy: 'string',
      startFileUpdateTime: 'string',
      topK: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetFileMetasResponseBody extends $dara.Model {
  datasetFileMetas?: DatasetFileMeta[];
  datasetId?: string;
  datasetVersion?: string;
  /**
   * @example
   * 90******-f5c5-4cd4-927e-1f45e1cb8b62_1729644433000
   */
  nextToken?: string;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 123
   */
  totalCount?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMetas: 'DatasetFileMetas',
      datasetId: 'DatasetId',
      datasetVersion: 'DatasetVersion',
      nextToken: 'NextToken',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetFileMetas: { 'type': 'array', 'itemType': DatasetFileMeta },
      datasetId: 'string',
      datasetVersion: 'string',
      nextToken: 'string',
      pageSize: 'number',
      totalCount: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasetFileMetas)) {
      $dara.Model.validateArray(this.datasetFileMetas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetFileMetasResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatasetFileMetasResponseBody;
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
      body: ListDatasetFileMetasResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetJobConfigsRequest extends $dara.Model {
  /**
   * @example
   * MultimodalIntelligentTag
   */
  configType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 431514
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'ConfigType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetJobConfigsResponseBody extends $dara.Model {
  datasetJobConfigs?: DatasetJobConfig[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasetJobConfigs: 'DatasetJobConfigs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetJobConfigs: { 'type': 'array', 'itemType': DatasetJobConfig },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasetJobConfigs)) {
      $dara.Model.validateArray(this.datasetJobConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetJobConfigsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatasetJobConfigsResponseBody;
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
      body: ListDatasetJobConfigsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetJobsRequest extends $dara.Model {
  /**
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @example
   * SemanticIndex
   */
  jobAction?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetVersion: 'DatasetVersion',
      jobAction: 'JobAction',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersion: 'string',
      jobAction: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetJobsResponseBody extends $dara.Model {
  datasetJobs?: DatasetJob[];
  /**
   * @example
   * 8D7B2E70-F770-505B-A672-09F1D8F2EC1E
   */
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasetJobs: 'DatasetJobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetJobs: { 'type': 'array', 'itemType': DatasetJob },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasetJobs)) {
      $dara.Model.validateArray(this.datasetJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetJobsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatasetJobsResponseBody;
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
      body: ListDatasetJobsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetVersionsRequest extends $dara.Model {
  /**
   * @example
   * key1,key2
   */
  labelKeys?: string;
  labelValues?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * DIRECTORY
   */
  properties?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * d-a0xbe5n03bhqof46ce
   */
  sourceId?: string;
  /**
   * @example
   * USER
   */
  sourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      labelKeys: 'LabelKeys',
      labelValues: 'LabelValues',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      properties: 'Properties',
      sortBy: 'SortBy',
      sourceId: 'SourceId',
      sourceTypes: 'SourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKeys: 'string',
      labelValues: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      properties: 'string',
      sortBy: 'string',
      sourceId: 'string',
      sourceTypes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetVersionsResponseBody extends $dara.Model {
  datasetVersions?: DatasetVersion[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  requestId?: string;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasetVersions: 'DatasetVersions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersions: { 'type': 'array', 'itemType': DatasetVersion },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasetVersions)) {
      $dara.Model.validateArray(this.datasetVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetVersionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatasetVersionsResponseBody;
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
      body: ListDatasetVersionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsRequest extends $dara.Model {
  /**
   * @example
   * OSS
   */
  dataSourceTypes?: string;
  /**
   * @example
   * COMMON,TEXT
   */
  dataTypes?: string;
  /**
   * @example
   * test
   */
  label?: string;
  /**
   * @example
   * myName
   */
  name?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * FILE
   */
  properties?: string;
  provider?: string;
  sortBy?: string;
  sourceDatasetId?: string;
  /**
   * @example
   * d-rbvg5wzljzjhc9ks92
   */
  sourceId?: string;
  /**
   * @example
   * USER,ITAG
   */
  sourceTypes?: string;
  /**
   * @example
   * 324**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceTypes: 'DataSourceTypes',
      dataTypes: 'DataTypes',
      label: 'Label',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      properties: 'Properties',
      provider: 'Provider',
      sortBy: 'SortBy',
      sourceDatasetId: 'SourceDatasetId',
      sourceId: 'SourceId',
      sourceTypes: 'SourceTypes',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceTypes: 'string',
      dataTypes: 'string',
      label: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      properties: 'string',
      provider: 'string',
      sortBy: 'string',
      sourceDatasetId: 'string',
      sourceId: 'string',
      sourceTypes: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBody extends $dara.Model {
  datasets?: Dataset[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasets: 'Datasets',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': Dataset },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasets)) {
      $dara.Model.validateArray(this.datasets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDatasetsResponseBody;
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
      body: ListDatasetsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentRequest extends $dara.Model {
  /**
   * @example
   * is_evaluation:true
   */
  labels?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * exp-test
   */
  name?: string;
  options?: ListExperimentRequestOptions;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * GmtCreateTime DESC,Name ASC
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  pageToken?: number;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * false
   */
  verbose?: boolean;
  /**
   * @example
   * 151739
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      maxResults: 'MaxResults',
      name: 'Name',
      options: 'Options',
      order: 'Order',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pageToken: 'PageToken',
      sortBy: 'SortBy',
      verbose: 'Verbose',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      maxResults: 'number',
      name: 'string',
      options: ListExperimentRequestOptions,
      order: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pageToken: 'number',
      sortBy: 'string',
      verbose: 'boolean',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentShrinkRequest extends $dara.Model {
  /**
   * @example
   * is_evaluation:true
   */
  labels?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * exp-test
   */
  name?: string;
  optionsShrink?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * GmtCreateTime DESC,Name ASC
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  pageToken?: number;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * false
   */
  verbose?: boolean;
  /**
   * @example
   * 151739
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      maxResults: 'MaxResults',
      name: 'Name',
      optionsShrink: 'Options',
      order: 'Order',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pageToken: 'PageToken',
      sortBy: 'SortBy',
      verbose: 'Verbose',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      maxResults: 'number',
      name: 'string',
      optionsShrink: 'string',
      order: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pageToken: 'number',
      sortBy: 'string',
      verbose: 'boolean',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentResponseBody extends $dara.Model {
  experiments?: Experiment[];
  /**
   * @example
   * 0
   */
  nextPageToken?: number;
  /**
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @example
   * 0C6835C5-A424-5AFB-ACC2-F1E3CA1ABF7C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experiments: 'Experiments',
      nextPageToken: 'NextPageToken',
      totalCount: 'TotalCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experiments: { 'type': 'array', 'itemType': Experiment },
      nextPageToken: 'number',
      totalCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.experiments)) {
      $dara.Model.validateArray(this.experiments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListExperimentResponseBody;
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
      body: ListExperimentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLabelsRequest extends $dara.Model {
  /**
   * @example
   * image-4c62******53uor
   */
  imageId?: string;
  /**
   * @example
   * system.framework=XGBoost 1.6.0,system.official=true
   */
  labelFilter?: string;
  /**
   * @example
   * system.framework,system.official
   */
  labelKeys?: string;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      labelFilter: 'LabelFilter',
      labelKeys: 'LabelKeys',
      region: 'Region',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      labelFilter: 'string',
      labelKeys: 'string',
      region: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLabelsResponseBody extends $dara.Model {
  labels?: ListImageLabelsResponseBodyLabels[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': ListImageLabelsResponseBodyLabels },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListImageLabelsResponseBody;
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
      body: ListImageLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesRequest extends $dara.Model {
  accessibility?: string;
  imageUri?: string;
  /**
   * @example
   * system.framework=XGBoost 1.6.0,system.official=true
   */
  labels?: string;
  /**
   * @example
   * tensorflow_2.9
   */
  name?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  query?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @example
   * 20******55
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      imageUri: 'ImageUri',
      labels: 'Labels',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      query: 'Query',
      sortBy: 'SortBy',
      verbose: 'Verbose',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      imageUri: 'string',
      labels: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      query: 'string',
      sortBy: 'string',
      verbose: 'boolean',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $dara.Model {
  images?: ListImagesResponseBodyImages[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListImagesResponseBody;
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
      body: ListImagesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersRequest extends $dara.Model {
  /**
   * @example
   * zhangsan
   */
  memberName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * PAI.AlgoDeveloper
   */
  roles?: string;
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      roles: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBody extends $dara.Model {
  members?: ListMembersResponseBodyMembers[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      members: 'Members',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      members: { 'type': 'array', 'itemType': ListMembersResponseBodyMembers },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListMembersResponseBody;
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
      body: ListMembersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelVersionsRequest extends $dara.Model {
  /**
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @example
   * key1
   */
  label?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @example
   * 1.0.1
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      formatType: 'FormatType',
      frameworkType: 'FrameworkType',
      label: 'Label',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      formatType: 'string',
      frameworkType: 'string',
      label: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sourceId: 'string',
      sourceType: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelVersionsResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC***3C83E
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  versions?: ModelVersion[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      versions: { 'type': 'array', 'itemType': ModelVersion },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelVersionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModelVersionsResponseBody;
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
      body: ListModelVersionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsRequest extends $dara.Model {
  /**
   * @example
   * AI4D,QuickStart
   */
  collections?: string;
  /**
   * @example
   * nlp
   */
  domain?: string;
  /**
   * @example
   * key1
   */
  label?: string;
  modelName?: string;
  /**
   * @example
   * Endpoint
   */
  modelType?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * pai
   */
  provider?: string;
  /**
   * @example
   * nlp
   */
  query?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * text-classification
   */
  task?: string;
  /**
   * @example
   * 324**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      collections: 'Collections',
      domain: 'Domain',
      label: 'Label',
      modelName: 'ModelName',
      modelType: 'ModelType',
      order: 'Order',
      origin: 'Origin',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      provider: 'Provider',
      query: 'Query',
      sortBy: 'SortBy',
      task: 'Task',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collections: 'string',
      domain: 'string',
      label: 'string',
      modelName: 'string',
      modelType: 'string',
      order: 'string',
      origin: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      provider: 'string',
      query: 'string',
      sortBy: 'string',
      task: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponseBody extends $dara.Model {
  models?: Model[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      models: 'Models',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      models: { 'type': 'array', 'itemType': Model },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.models)) {
      $dara.Model.validateArray(this.models);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListModelsResponseBody;
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
      body: ListModelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponseBody extends $dara.Model {
  permissions?: ListPermissionsResponseBodyPermissions[];
  /**
   * @example
   * 2AE63638-5420-56DC-B******8174039A0
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      permissions: 'Permissions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissions: { 'type': 'array', 'itemType': ListPermissionsResponseBodyPermissions },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPermissionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPermissionsResponseBody;
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
      body: ListPermissionsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsRequest extends $dara.Model {
  /**
   * @example
   * PAI_isolate
   */
  productCodes?: string;
  /**
   * @example
   * oss
   */
  serviceCodes?: string;
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      productCodes: 'ProductCodes',
      serviceCodes: 'ServiceCodes',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCodes: 'string',
      serviceCodes: 'string',
      verbose: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponseBody extends $dara.Model {
  products?: ListProductsResponseBodyProducts[];
  /**
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  services?: ListProductsResponseBodyServices[];
  static names(): { [key: string]: string } {
    return {
      products: 'Products',
      requestId: 'RequestId',
      services: 'Services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      products: { 'type': 'array', 'itemType': ListProductsResponseBodyProducts },
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListProductsResponseBodyServices },
    };
  }

  validate() {
    if(Array.isArray(this.products)) {
      $dara.Model.validateArray(this.products);
    }
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProductsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProductsResponseBody;
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
      body: ListProductsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasRequest extends $dara.Model {
  /**
   * @example
   * quota-name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListQuotasResponseBody extends $dara.Model {
  quotas?: ListQuotasResponseBodyQuotas[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      quotas: 'Quotas',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotas: { 'type': 'array', 'itemType': ListQuotasResponseBodyQuotas },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQuotasResponseBody;
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
      body: ListQuotasResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesRequest extends $dara.Model {
  /**
   * @example
   * group
   */
  groupName?: string;
  labels?: string;
  /**
   * @example
   * ListResourceByWorkspace
   */
  option?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * MaxCompute
   */
  productTypes?: string;
  quotaIds?: string;
  /**
   * @example
   * resource
   */
  resourceName?: string;
  resourceTypes?: string;
  /**
   * @example
   * true
   */
  verbose?: boolean;
  verboseFields?: string;
  /**
   * @example
   * 123
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      labels: 'Labels',
      option: 'Option',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productTypes: 'ProductTypes',
      quotaIds: 'QuotaIds',
      resourceName: 'ResourceName',
      resourceTypes: 'ResourceTypes',
      verbose: 'Verbose',
      verboseFields: 'VerboseFields',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      labels: 'string',
      option: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productTypes: 'string',
      quotaIds: 'string',
      resourceName: 'string',
      resourceTypes: 'string',
      verbose: 'boolean',
      verboseFields: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  resources?: ListResourcesResponseBodyResources[];
  /**
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

export class ListResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesResponseBody;
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
      body: ListResourcesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * loss
   */
  key?: string;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * 0
   */
  pageToken?: number;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      maxResults: 'MaxResults',
      pageToken: 'PageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      maxResults: 'number',
      pageToken: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunMetricsResponseBody extends $dara.Model {
  metrics?: RunMetric[];
  /**
   * @example
   * 0
   */
  nextPageToken?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      nextPageToken: 'NextPageToken',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': RunMetric },
      nextPageToken: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunMetricsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRunMetricsResponseBody;
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
      body: ListRunMetricsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsRequest extends $dara.Model {
  /**
   * @example
   * exp-1zpfthdx******
   */
  experimentId?: string;
  /**
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * is_evaluation:true
   */
  labels?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * myName
   */
  name?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * GmtCreateTime DESC,Name ASC
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 0
   */
  pageToken?: number;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * job-rbvg5wzlj****
   */
  sourceId?: string;
  /**
   * @example
   * TrainingService
   */
  sourceType?: string;
  /**
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @example
   * 22840
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      labels: 'Labels',
      maxResults: 'MaxResults',
      name: 'Name',
      order: 'Order',
      orderBy: 'OrderBy',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pageToken: 'PageToken',
      sortBy: 'SortBy',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      verbose: 'Verbose',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      gmtCreateTime: 'string',
      labels: 'string',
      maxResults: 'number',
      name: 'string',
      order: 'string',
      orderBy: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pageToken: 'number',
      sortBy: 'string',
      sourceId: 'string',
      sourceType: 'string',
      verbose: 'boolean',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  nextPageToken?: number;
  runs?: Run[];
  /**
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      runs: 'Runs',
      totalCount: 'TotalCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'number',
      runs: { 'type': 'array', 'itemType': Run },
      totalCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.runs)) {
      $dara.Model.validateArray(this.runs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRunsResponseBody;
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
      body: ListRunsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceUsersRequest extends $dara.Model {
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceUsersResponseBody extends $dara.Model {
  /**
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  users?: ListWorkspaceUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListWorkspaceUsersResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceUsersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkspaceUsersResponseBody;
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
      body: ListWorkspaceUsersResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesRequest extends $dara.Model {
  /**
   * @example
   * Id
   */
  fields?: string;
  /**
   * @example
   * PAI
   */
  moduleList?: string;
  /**
   * @example
   * GetWorkspaces
   */
  option?: string;
  /**
   * @example
   * ASC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  resourceGroupId?: string;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @example
   * 123,234
   */
  workspaceIds?: string;
  /**
   * @example
   * abc
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      fields: 'Fields',
      moduleList: 'ModuleList',
      option: 'Option',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      sortBy: 'SortBy',
      status: 'Status',
      verbose: 'Verbose',
      workspaceIds: 'WorkspaceIds',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: 'string',
      moduleList: 'string',
      option: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      sortBy: 'string',
      status: 'string',
      verbose: 'boolean',
      workspaceIds: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponseBody extends $dara.Model {
  /**
   * @example
   * 8D7B2E70-F770-505B-A672-09F1D8F2EC1E
   */
  requestId?: string;
  /**
   * @example
   * {
   *    "MaxCompute_share": 1,
   *    "MaxCompute_isolate": 1,
   *    "DLC_share": 1
   * }
   */
  resourceLimits?: { [key: string]: any };
  /**
   * @example
   * 1
   */
  totalCount?: number;
  workspaces?: ListWorkspacesResponseBodyWorkspaces[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceLimits: 'ResourceLimits',
      totalCount: 'TotalCount',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceLimits: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      totalCount: 'number',
      workspaces: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyWorkspaces },
    };
  }

  validate() {
    if(this.resourceLimits) {
      $dara.Model.validateMap(this.resourceLimits);
    }
    if(Array.isArray(this.workspaces)) {
      $dara.Model.validateArray(this.workspaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkspacesResponseBody;
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
      body: ListWorkspacesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogRunMetricsRequest extends $dara.Model {
  metrics?: RunMetric[];
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': RunMetric },
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogRunMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogRunMetricsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LogRunMetricsResponseBody;
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
      body: LogRunMetricsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishCodeSourceResponseBody extends $dara.Model {
  /**
   * @example
   * code-a797*******
   */
  codeSourceId?: string;
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeSourceId: 'CodeSourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSourceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishCodeSourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishCodeSourceResponseBody;
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
      body: PublishCodeSourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDatasetResponseBody extends $dara.Model {
  /**
   * @example
   * A0F049F0-8D69-5BAC-8F10-B******A34C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishDatasetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishDatasetResponseBody;
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
      body: PublishDatasetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishImageResponseBody extends $dara.Model {
  /**
   * @example
   * image-dk******fa
   */
  imageId?: string;
  /**
   * @example
   * A0F049F0-8D69-5BAC-8F10-B******A34C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PublishImageResponseBody;
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
      body: PublishImageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveImageResponseBody;
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
      body: RemoveImageResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageLabelsResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveImageLabelsResponseBody;
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
      body: RemoveImageLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMemberRoleResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveMemberRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveMemberRoleResponseBody;
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
      body: RemoveMemberRoleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetExperimentLabelsRequest extends $dara.Model {
  labels?: LabelInfo[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': LabelInfo },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetExperimentLabelsResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetExperimentLabelsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetExperimentLabelsResponseBody;
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
      body: SetExperimentLabelsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDatasetJobRequest extends $dara.Model {
  /**
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetVersion: 'DatasetVersion',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersion: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDatasetJobResponseBody extends $dara.Model {
  /**
   * @example
   * F620FFD3-FFDC-5873-A70C-6971CC45F467
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopDatasetJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopDatasetJobResponseBody;
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
      body: StopDatasetJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCodeSourceRequest extends $dara.Model {
  /**
   * @example
   * dev
   */
  codeBranch?: string;
  codeCommit?: string;
  codeRepo?: string;
  codeRepoAccessToken?: string;
  codeRepoUserName?: string;
  description?: string;
  displayName?: string;
  /**
   * @example
   * /root/code/code-source-1
   */
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      codeBranch: 'CodeBranch',
      codeCommit: 'CodeCommit',
      codeRepo: 'CodeRepo',
      codeRepoAccessToken: 'CodeRepoAccessToken',
      codeRepoUserName: 'CodeRepoUserName',
      description: 'Description',
      displayName: 'DisplayName',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeBranch: 'string',
      codeCommit: 'string',
      codeRepo: 'string',
      codeRepoAccessToken: 'string',
      codeRepoUserName: 'string',
      description: 'string',
      displayName: 'string',
      mountPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCodeSourceResponseBody extends $dara.Model {
  /**
   * @example
   * code-20********
   */
  codeSourceId?: string;
  /**
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeSourceId: 'CodeSourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSourceId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCodeSourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateCodeSourceResponseBody;
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
      body: UpdateCodeSourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequest extends $dara.Model {
  description?: string;
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @example
   * myName
   */
  name?: string;
  /**
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      mountAccessReadWriteRoleIdList: 'MountAccessReadWriteRoleIdList',
      name: 'Name',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      mountAccessReadWriteRoleIdList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      options: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.mountAccessReadWriteRoleIdList)) {
      $dara.Model.validateArray(this.mountAccessReadWriteRoleIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDatasetResponseBody;
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
      body: UpdateDatasetResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetFileMetasRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  datasetFileMetas?: DatasetFileMetaConentUpdate[];
  /**
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @example
   * dsjob-hv0b1****u8taig3y
   */
  tagJobId?: string;
  /**
   * @example
   * 796**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMetas: 'DatasetFileMetas',
      datasetVersion: 'DatasetVersion',
      tagJobId: 'TagJobId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetFileMetas: { 'type': 'array', 'itemType': DatasetFileMetaConentUpdate },
      datasetVersion: 'string',
      tagJobId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasetFileMetas)) {
      $dara.Model.validateArray(this.datasetFileMetas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetFileMetasResponseBody extends $dara.Model {
  failedDetails?: DatasetFileMetaResponse[];
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  status?: boolean;
  static names(): { [key: string]: string } {
    return {
      failedDetails: 'FailedDetails',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedDetails: { 'type': 'array', 'itemType': DatasetFileMetaResponse },
      requestId: 'string',
      status: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.failedDetails)) {
      $dara.Model.validateArray(this.failedDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetFileMetasResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDatasetFileMetasResponseBody;
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
      body: UpdateDatasetFileMetasResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetJobRequest extends $dara.Model {
  /**
   * @example
   * v1
   */
  datasetVersion?: string;
  description?: string;
  /**
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetVersion: 'DatasetVersion',
      description: 'Description',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersion: 'string',
      description: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetJobResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetJobResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDatasetJobResponseBody;
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
      body: UpdateDatasetJobResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetJobConfigRequest extends $dara.Model {
  /**
   * @example
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   */
  config?: string;
  /**
   * @example
   * MultimodalSemanticIndex
   */
  configType?: string;
  /**
   * @example
   * 167497
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      configType: 'ConfigType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      configType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetJobConfigResponseBody extends $dara.Model {
  /**
   * @example
   * D5BFFEE3-6025-443F-8A03-02D619B5C4B9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetJobConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDatasetJobConfigResponseBody;
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
      body: UpdateDatasetJobConfigResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetVersionRequest extends $dara.Model {
  /**
   * @example
   * 100
   */
  dataCount?: number;
  /**
   * @example
   * 100000
   */
  dataSize?: number;
  description?: string;
  /**
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  static names(): { [key: string]: string } {
    return {
      dataCount: 'DataCount',
      dataSize: 'DataSize',
      description: 'Description',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataCount: 'number',
      dataSize: 'number',
      description: 'string',
      options: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetVersionResponseBody extends $dara.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDatasetVersionResponseBody;
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
      body: UpdateDatasetVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDefaultWorkspaceRequest extends $dara.Model {
  /**
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDefaultWorkspaceResponseBody extends $dara.Model {
  /**
   * @example
   * 17915******4216
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDefaultWorkspaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateDefaultWorkspaceResponseBody;
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
      body: UpdateDefaultWorkspaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentRequest extends $dara.Model {
  /**
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * 名称
   * 
   * @example
   * myName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
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

export class UpdateExperimentResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateExperimentResponseBody;
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
      body: UpdateExperimentResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelRequest extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * nlp
   */
  domain?: string;
  extraInfo?: { [key: string]: any };
  modelDescription?: string;
  /**
   * @example
   * https://*.md
   */
  modelDoc?: string;
  modelName?: string;
  /**
   * @example
   * Checkpoint
   */
  modelType?: string;
  /**
   * @example
   * 101
   */
  orderNumber?: number;
  /**
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @example
   * text-classification
   */
  task?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      domain: 'Domain',
      extraInfo: 'ExtraInfo',
      modelDescription: 'ModelDescription',
      modelDoc: 'ModelDoc',
      modelName: 'ModelName',
      modelType: 'ModelType',
      orderNumber: 'OrderNumber',
      origin: 'Origin',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      domain: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      modelDescription: 'string',
      modelDoc: 'string',
      modelName: 'string',
      modelType: 'string',
      orderNumber: 'number',
      origin: 'string',
      task: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelResponseBody extends $dara.Model {
  /**
   * @example
   * A0F049F0-8D69-5BAC-8F10-B******A34C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateModelResponseBody;
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
      body: UpdateModelResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelVersionRequest extends $dara.Model {
  /**
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @example
   * {}
   */
  compressionSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  evaluationSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * {     "processor": "tensorflow_gpu_1.12" }
   */
  inferenceSpec?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  metrics?: { [key: string]: any };
  /**
   * @example
   * {}
   */
  options?: string;
  /**
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      approvalStatus: 'ApprovalStatus',
      compressionSpec: 'CompressionSpec',
      evaluationSpec: 'EvaluationSpec',
      extraInfo: 'ExtraInfo',
      inferenceSpec: 'InferenceSpec',
      metrics: 'Metrics',
      options: 'Options',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      trainingSpec: 'TrainingSpec',
      versionDescription: 'VersionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalStatus: 'string',
      compressionSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      evaluationSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      inferenceSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      options: 'string',
      sourceId: 'string',
      sourceType: 'string',
      trainingSpec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      versionDescription: 'string',
    };
  }

  validate() {
    if(this.compressionSpec) {
      $dara.Model.validateMap(this.compressionSpec);
    }
    if(this.evaluationSpec) {
      $dara.Model.validateMap(this.evaluationSpec);
    }
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(this.inferenceSpec) {
      $dara.Model.validateMap(this.inferenceSpec);
    }
    if(this.metrics) {
      $dara.Model.validateMap(this.metrics);
    }
    if(this.trainingSpec) {
      $dara.Model.validateMap(this.trainingSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelVersionResponseBody extends $dara.Model {
  /**
   * @example
   * D5BFFEE3-6025-443F-8A03-02D61***C4B9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModelVersionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateModelVersionResponseBody;
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
      body: UpdateModelVersionResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRunRequest extends $dara.Model {
  labels?: Label[];
  /**
   * @example
   * myName
   */
  name?: string;
  params?: RunParam[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      name: 'Name',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': Label },
      name: 'string',
      params: { 'type': 'array', 'itemType': RunParam },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRunResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateRunResponseBody;
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
      body: UpdateRunResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceRequest extends $dara.Model {
  /**
   * @example
   * Description
   */
  description?: string;
  /**
   * @example
   * workspace-example
   */
  displayName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkspaceResponseBody;
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
      body: UpdateWorkspaceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResourceRequest extends $dara.Model {
  /**
   * @example
   * group-kjds******sd
   */
  groupName?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  labels?: UpdateWorkspaceResourceRequestLabels[];
  /**
   * @example
   * MaxCompute
   */
  productType?: string;
  resourceIds?: string[];
  resourceType?: string;
  spec?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      isDefault: 'IsDefault',
      labels: 'Labels',
      productType: 'ProductType',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      isDefault: 'boolean',
      labels: { 'type': 'array', 'itemType': UpdateWorkspaceResourceRequestLabels },
      productType: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      spec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
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

export class UpdateWorkspaceResourceResponseBody extends $dara.Model {
  /**
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  resourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkspaceResourceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkspaceResourceResponseBody;
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
      body: UpdateWorkspaceResourceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("aiworkspace", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 接受并处理Dataworks发送的事件
   * 
   * @param request - AcceptDataworksEventRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AcceptDataworksEventResponse
   */
  async acceptDataworksEventWithOptions(request: AcceptDataworksEventRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AcceptDataworksEventResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.data)) {
      body["Data"] = request.data;
    }

    if (!$dara.isNull(request.messageId)) {
      body["MessageId"] = request.messageId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AcceptDataworksEvent",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/action/acceptdataworksevent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AcceptDataworksEventResponse>(await this.callApi(params, req, runtime), new AcceptDataworksEventResponse({}));
    } else {
      return $dara.cast<AcceptDataworksEventResponse>(await this.execute(params, req, runtime), new AcceptDataworksEventResponse({}));
    }

  }

  /**
   * 接受并处理Dataworks发送的事件
   * 
   * @param request - AcceptDataworksEventRequest
   * @returns AcceptDataworksEventResponse
   */
  async acceptDataworksEvent(request: AcceptDataworksEventRequest): Promise<AcceptDataworksEventResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.acceptDataworksEventWithOptions(request, headers, runtime);
  }

  /**
   * 增加 Image
   * 
   * @param request - AddImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImageResponse
   */
  async addImageWithOptions(request: AddImageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AddImageResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.imageUri)) {
      body["ImageUri"] = request.imageUri;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.size)) {
      body["Size"] = request.size;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddImage",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddImageResponse>(await this.callApi(params, req, runtime), new AddImageResponse({}));
    } else {
      return $dara.cast<AddImageResponse>(await this.execute(params, req, runtime), new AddImageResponse({}));
    }

  }

  /**
   * 增加 Image
   * 
   * @param request - AddImageRequest
   * @returns AddImageResponse
   */
  async addImage(request: AddImageRequest): Promise<AddImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addImageWithOptions(request, headers, runtime);
  }

  /**
   * 增加 Image 的标签
   * 
   * @param request - AddImageLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddImageLabelsResponse
   */
  async addImageLabelsWithOptions(ImageId: string, request: AddImageLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AddImageLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AddImageLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${$dara.URL.percentEncode(ImageId)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddImageLabelsResponse>(await this.callApi(params, req, runtime), new AddImageLabelsResponse({}));
    } else {
      return $dara.cast<AddImageLabelsResponse>(await this.execute(params, req, runtime), new AddImageLabelsResponse({}));
    }

  }

  /**
   * 增加 Image 的标签
   * 
   * @param request - AddImageLabelsRequest
   * @returns AddImageLabelsResponse
   */
  async addImageLabels(ImageId: string, request: AddImageLabelsRequest): Promise<AddImageLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addImageLabelsWithOptions(ImageId, request, headers, runtime);
  }

  /**
   * 增加成员角色
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddMemberRoleResponse
   */
  async addMemberRoleWithOptions(WorkspaceId: string, MemberId: string, RoleName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AddMemberRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "AddMemberRole",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/members/${$dara.URL.percentEncode(MemberId)}/roles/${$dara.URL.percentEncode(RoleName)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AddMemberRoleResponse>(await this.callApi(params, req, runtime), new AddMemberRoleResponse({}));
    } else {
      return $dara.cast<AddMemberRoleResponse>(await this.execute(params, req, runtime), new AddMemberRoleResponse({}));
    }

  }

  /**
   * 增加成员角色
   * @returns AddMemberRoleResponse
   */
  async addMemberRole(WorkspaceId: string, MemberId: string, RoleName: string): Promise<AddMemberRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addMemberRoleWithOptions(WorkspaceId, MemberId, RoleName, headers, runtime);
  }

  /**
   * 更改资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.newResourceGroupId)) {
      body["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!$dara.isNull(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ChangeResourceGroup",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/resourcegroups/action/changeresourcegroup`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
    } else {
      return $dara.cast<ChangeResourceGroupResponse>(await this.execute(params, req, runtime), new ChangeResourceGroupResponse({}));
    }

  }

  /**
   * 更改资源组
   * 
   * @param request - ChangeResourceGroupRequest
   * @returns ChangeResourceGroupResponse
   */
  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.changeResourceGroupWithOptions(request, headers, runtime);
  }

  /**
   * 创建一个代码源配置
   * 
   * @param request - CreateCodeSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCodeSourceResponse
   */
  async createCodeSourceWithOptions(request: CreateCodeSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateCodeSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.codeBranch)) {
      body["CodeBranch"] = request.codeBranch;
    }

    if (!$dara.isNull(request.codeCommit)) {
      body["CodeCommit"] = request.codeCommit;
    }

    if (!$dara.isNull(request.codeRepo)) {
      body["CodeRepo"] = request.codeRepo;
    }

    if (!$dara.isNull(request.codeRepoAccessToken)) {
      body["CodeRepoAccessToken"] = request.codeRepoAccessToken;
    }

    if (!$dara.isNull(request.codeRepoUserName)) {
      body["CodeRepoUserName"] = request.codeRepoUserName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.mountPath)) {
      body["MountPath"] = request.mountPath;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateCodeSource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCodeSourceResponse>(await this.callApi(params, req, runtime), new CreateCodeSourceResponse({}));
    } else {
      return $dara.cast<CreateCodeSourceResponse>(await this.execute(params, req, runtime), new CreateCodeSourceResponse({}));
    }

  }

  /**
   * 创建一个代码源配置
   * 
   * @param request - CreateCodeSourceRequest
   * @returns CreateCodeSourceResponse
   */
  async createCodeSource(request: CreateCodeSourceRequest): Promise<CreateCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCodeSourceWithOptions(request, headers, runtime);
  }

  /**
   * 创建数据集
   * 
   * @param request - CreateDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetResponse
   */
  async createDatasetWithOptions(request: CreateDatasetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDatasetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.dataCount)) {
      body["DataCount"] = request.dataCount;
    }

    if (!$dara.isNull(request.dataSize)) {
      body["DataSize"] = request.dataSize;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.dataType)) {
      body["DataType"] = request.dataType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.importInfo)) {
      body["ImportInfo"] = request.importInfo;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.mountAccessReadWriteRoleIdList)) {
      body["MountAccessReadWriteRoleIdList"] = request.mountAccessReadWriteRoleIdList;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.property)) {
      body["Property"] = request.property;
    }

    if (!$dara.isNull(request.provider)) {
      body["Provider"] = request.provider;
    }

    if (!$dara.isNull(request.providerType)) {
      body["ProviderType"] = request.providerType;
    }

    if (!$dara.isNull(request.sourceDatasetId)) {
      body["SourceDatasetId"] = request.sourceDatasetId;
    }

    if (!$dara.isNull(request.sourceDatasetVersion)) {
      body["SourceDatasetVersion"] = request.sourceDatasetVersion;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.versionDescription)) {
      body["VersionDescription"] = request.versionDescription;
    }

    if (!$dara.isNull(request.versionLabels)) {
      body["VersionLabels"] = request.versionLabels;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDataset",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDatasetResponse>(await this.callApi(params, req, runtime), new CreateDatasetResponse({}));
    } else {
      return $dara.cast<CreateDatasetResponse>(await this.execute(params, req, runtime), new CreateDatasetResponse({}));
    }

  }

  /**
   * 创建数据集
   * 
   * @param request - CreateDatasetRequest
   * @returns CreateDatasetResponse
   */
  async createDataset(request: CreateDatasetRequest): Promise<CreateDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetWithOptions(request, headers, runtime);
  }

  /**
   * 批量创建数据集下的文件元数据记录
   * 
   * @param request - CreateDatasetFileMetasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetFileMetasResponse
   */
  async createDatasetFileMetasWithOptions(DatasetId: string, request: CreateDatasetFileMetasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDatasetFileMetasResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetFileMetas)) {
      body["DatasetFileMetas"] = request.datasetFileMetas;
    }

    if (!$dara.isNull(request.datasetVersion)) {
      body["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatasetFileMetas",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetfilemetas`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDatasetFileMetasResponse>(await this.callApi(params, req, runtime), new CreateDatasetFileMetasResponse({}));
    } else {
      return $dara.cast<CreateDatasetFileMetasResponse>(await this.execute(params, req, runtime), new CreateDatasetFileMetasResponse({}));
    }

  }

  /**
   * 批量创建数据集下的文件元数据记录
   * 
   * @param request - CreateDatasetFileMetasRequest
   * @returns CreateDatasetFileMetasResponse
   */
  async createDatasetFileMetas(DatasetId: string, request: CreateDatasetFileMetasRequest): Promise<CreateDatasetFileMetasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetFileMetasWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 创建数据集任务
   * 
   * @param request - CreateDatasetJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetJobResponse
   */
  async createDatasetJobWithOptions(DatasetId: string, request: CreateDatasetJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDatasetJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetVersion)) {
      body["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.jobAction)) {
      body["JobAction"] = request.jobAction;
    }

    if (!$dara.isNull(request.jobMode)) {
      body["JobMode"] = request.jobMode;
    }

    if (!$dara.isNull(request.jobSpec)) {
      body["JobSpec"] = request.jobSpec;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatasetJob",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDatasetJobResponse>(await this.callApi(params, req, runtime), new CreateDatasetJobResponse({}));
    } else {
      return $dara.cast<CreateDatasetJobResponse>(await this.execute(params, req, runtime), new CreateDatasetJobResponse({}));
    }

  }

  /**
   * 创建数据集任务
   * 
   * @param request - CreateDatasetJobRequest
   * @returns CreateDatasetJobResponse
   */
  async createDatasetJob(DatasetId: string, request: CreateDatasetJobRequest): Promise<CreateDatasetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetJobWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 创建数据集任务配置
   * 
   * @param request - CreateDatasetJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetJobConfigResponse
   */
  async createDatasetJobConfigWithOptions(DatasetId: string, request: CreateDatasetJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDatasetJobConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.configType)) {
      body["ConfigType"] = request.configType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatasetJobConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobconfigs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDatasetJobConfigResponse>(await this.callApi(params, req, runtime), new CreateDatasetJobConfigResponse({}));
    } else {
      return $dara.cast<CreateDatasetJobConfigResponse>(await this.execute(params, req, runtime), new CreateDatasetJobConfigResponse({}));
    }

  }

  /**
   * 创建数据集任务配置
   * 
   * @param request - CreateDatasetJobConfigRequest
   * @returns CreateDatasetJobConfigResponse
   */
  async createDatasetJobConfig(DatasetId: string, request: CreateDatasetJobConfigRequest): Promise<CreateDatasetJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetJobConfigWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 创建或更新 Dataset 的标签
   * 
   * @param request - CreateDatasetLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetLabelsResponse
   */
  async createDatasetLabelsWithOptions(DatasetId: string, request: CreateDatasetLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDatasetLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatasetLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDatasetLabelsResponse>(await this.callApi(params, req, runtime), new CreateDatasetLabelsResponse({}));
    } else {
      return $dara.cast<CreateDatasetLabelsResponse>(await this.execute(params, req, runtime), new CreateDatasetLabelsResponse({}));
    }

  }

  /**
   * 创建或更新 Dataset 的标签
   * 
   * @param request - CreateDatasetLabelsRequest
   * @returns CreateDatasetLabelsResponse
   */
  async createDatasetLabels(DatasetId: string, request: CreateDatasetLabelsRequest): Promise<CreateDatasetLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetLabelsWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 创建数据集版本
   * 
   * @param request - CreateDatasetVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetVersionResponse
   */
  async createDatasetVersionWithOptions(DatasetId: string, request: CreateDatasetVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDatasetVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataCount)) {
      body["DataCount"] = request.dataCount;
    }

    if (!$dara.isNull(request.dataSize)) {
      body["DataSize"] = request.dataSize;
    }

    if (!$dara.isNull(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.importInfo)) {
      body["ImportInfo"] = request.importInfo;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.property)) {
      body["Property"] = request.property;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatasetVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDatasetVersionResponse>(await this.callApi(params, req, runtime), new CreateDatasetVersionResponse({}));
    } else {
      return $dara.cast<CreateDatasetVersionResponse>(await this.execute(params, req, runtime), new CreateDatasetVersionResponse({}));
    }

  }

  /**
   * 创建数据集版本
   * 
   * @param request - CreateDatasetVersionRequest
   * @returns CreateDatasetVersionResponse
   */
  async createDatasetVersion(DatasetId: string, request: CreateDatasetVersionRequest): Promise<CreateDatasetVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetVersionWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 创建数据集版本的标签
   * 
   * @param request - CreateDatasetVersionLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDatasetVersionLabelsResponse
   */
  async createDatasetVersionLabelsWithOptions(DatasetId: string, VersionName: string, request: CreateDatasetVersionLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateDatasetVersionLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateDatasetVersionLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/versions/${$dara.URL.percentEncode(VersionName)}/labels`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateDatasetVersionLabelsResponse>(await this.callApi(params, req, runtime), new CreateDatasetVersionLabelsResponse({}));
    } else {
      return $dara.cast<CreateDatasetVersionLabelsResponse>(await this.execute(params, req, runtime), new CreateDatasetVersionLabelsResponse({}));
    }

  }

  /**
   * 创建数据集版本的标签
   * 
   * @param request - CreateDatasetVersionLabelsRequest
   * @returns CreateDatasetVersionLabelsResponse
   */
  async createDatasetVersionLabels(DatasetId: string, VersionName: string, request: CreateDatasetVersionLabelsRequest): Promise<CreateDatasetVersionLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDatasetVersionLabelsWithOptions(DatasetId, VersionName, request, headers, runtime);
  }

  /**
   * 创建实验
   * 
   * @param request - CreateExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateExperimentResponse
   */
  async createExperimentWithOptions(request: CreateExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.artifactUri)) {
      body["ArtifactUri"] = request.artifactUri;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateExperiment",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateExperimentResponse>(await this.callApi(params, req, runtime), new CreateExperimentResponse({}));
    } else {
      return $dara.cast<CreateExperimentResponse>(await this.execute(params, req, runtime), new CreateExperimentResponse({}));
    }

  }

  /**
   * 创建实验
   * 
   * @param request - CreateExperimentRequest
   * @returns CreateExperimentResponse
   */
  async createExperiment(request: CreateExperimentRequest): Promise<CreateExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentWithOptions(request, headers, runtime);
  }

  /**
   * 创建成员
   * 
   * @param request - CreateMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateMemberResponse
   */
  async createMemberWithOptions(WorkspaceId: string, request: CreateMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateMemberResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.members)) {
      body["Members"] = request.members;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateMember",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/members`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateMemberResponse>(await this.callApi(params, req, runtime), new CreateMemberResponse({}));
    } else {
      return $dara.cast<CreateMemberResponse>(await this.execute(params, req, runtime), new CreateMemberResponse({}));
    }

  }

  /**
   * 创建成员
   * 
   * @param request - CreateMemberRequest
   * @returns CreateMemberResponse
   */
  async createMember(WorkspaceId: string, request: CreateMemberRequest): Promise<CreateMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createMemberWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 创建模型
   * 
   * @param request - CreateModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelResponse
   */
  async createModelWithOptions(request: CreateModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateModelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.modelDescription)) {
      body["ModelDescription"] = request.modelDescription;
    }

    if (!$dara.isNull(request.modelDoc)) {
      body["ModelDoc"] = request.modelDoc;
    }

    if (!$dara.isNull(request.modelName)) {
      body["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelType)) {
      body["ModelType"] = request.modelType;
    }

    if (!$dara.isNull(request.orderNumber)) {
      body["OrderNumber"] = request.orderNumber;
    }

    if (!$dara.isNull(request.origin)) {
      body["Origin"] = request.origin;
    }

    if (!$dara.isNull(request.task)) {
      body["Task"] = request.task;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateModelResponse>(await this.callApi(params, req, runtime), new CreateModelResponse({}));
    } else {
      return $dara.cast<CreateModelResponse>(await this.execute(params, req, runtime), new CreateModelResponse({}));
    }

  }

  /**
   * 创建模型
   * 
   * @param request - CreateModelRequest
   * @returns CreateModelResponse
   */
  async createModel(request: CreateModelRequest): Promise<CreateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelWithOptions(request, headers, runtime);
  }

  /**
   * 创建或更新模型的标签
   * 
   * @param request - CreateModelLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelLabelsResponse
   */
  async createModelLabelsWithOptions(ModelId: string, request: CreateModelLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateModelLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateModelLabelsResponse>(await this.callApi(params, req, runtime), new CreateModelLabelsResponse({}));
    } else {
      return $dara.cast<CreateModelLabelsResponse>(await this.execute(params, req, runtime), new CreateModelLabelsResponse({}));
    }

  }

  /**
   * 创建或更新模型的标签
   * 
   * @param request - CreateModelLabelsRequest
   * @returns CreateModelLabelsResponse
   */
  async createModelLabels(ModelId: string, request: CreateModelLabelsRequest): Promise<CreateModelLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelLabelsWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * 创建模型版本
   * 
   * @param request - CreateModelVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelVersionResponse
   */
  async createModelVersionWithOptions(ModelId: string, request: CreateModelVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateModelVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.approvalStatus)) {
      body["ApprovalStatus"] = request.approvalStatus;
    }

    if (!$dara.isNull(request.compressionSpec)) {
      body["CompressionSpec"] = request.compressionSpec;
    }

    if (!$dara.isNull(request.evaluationSpec)) {
      body["EvaluationSpec"] = request.evaluationSpec;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.formatType)) {
      body["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.frameworkType)) {
      body["FrameworkType"] = request.frameworkType;
    }

    if (!$dara.isNull(request.inferenceSpec)) {
      body["InferenceSpec"] = request.inferenceSpec;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.metrics)) {
      body["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.trainingSpec)) {
      body["TrainingSpec"] = request.trainingSpec;
    }

    if (!$dara.isNull(request.uri)) {
      body["Uri"] = request.uri;
    }

    if (!$dara.isNull(request.versionDescription)) {
      body["VersionDescription"] = request.versionDescription;
    }

    if (!$dara.isNull(request.versionName)) {
      body["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateModelVersionResponse>(await this.callApi(params, req, runtime), new CreateModelVersionResponse({}));
    } else {
      return $dara.cast<CreateModelVersionResponse>(await this.execute(params, req, runtime), new CreateModelVersionResponse({}));
    }

  }

  /**
   * 创建模型版本
   * 
   * @param request - CreateModelVersionRequest
   * @returns CreateModelVersionResponse
   */
  async createModelVersion(ModelId: string, request: CreateModelVersionRequest): Promise<CreateModelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelVersionWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * 创建或更新模型版本的标签
   * 
   * @param request - CreateModelVersionLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateModelVersionLabelsResponse
   */
  async createModelVersionLabelsWithOptions(ModelId: string, VersionName: string, request: CreateModelVersionLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateModelVersionLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateModelVersionLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/versions/${$dara.URL.percentEncode(VersionName)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateModelVersionLabelsResponse>(await this.callApi(params, req, runtime), new CreateModelVersionLabelsResponse({}));
    } else {
      return $dara.cast<CreateModelVersionLabelsResponse>(await this.execute(params, req, runtime), new CreateModelVersionLabelsResponse({}));
    }

  }

  /**
   * 创建或更新模型版本的标签
   * 
   * @param request - CreateModelVersionLabelsRequest
   * @returns CreateModelVersionLabelsResponse
   */
  async createModelVersionLabels(ModelId: string, VersionName: string, request: CreateModelVersionLabelsRequest): Promise<CreateModelVersionLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModelVersionLabelsWithOptions(ModelId, VersionName, request, headers, runtime);
  }

  /**
   * 创建产品订单
   * 
   * @param request - CreateProductOrdersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProductOrdersResponse
   */
  async createProductOrdersWithOptions(request: CreateProductOrdersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateProductOrdersResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoPay)) {
      body["AutoPay"] = request.autoPay;
    }

    if (!$dara.isNull(request.products)) {
      body["Products"] = request.products;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProductOrders",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/productorders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateProductOrdersResponse>(await this.callApi(params, req, runtime), new CreateProductOrdersResponse({}));
    } else {
      return $dara.cast<CreateProductOrdersResponse>(await this.execute(params, req, runtime), new CreateProductOrdersResponse({}));
    }

  }

  /**
   * 创建产品订单
   * 
   * @param request - CreateProductOrdersRequest
   * @returns CreateProductOrdersResponse
   */
  async createProductOrders(request: CreateProductOrdersRequest): Promise<CreateProductOrdersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProductOrdersWithOptions(request, headers, runtime);
  }

  /**
   * 创建一次运行
   * 
   * @param request - CreateRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateRunResponse
   */
  async createRunWithOptions(request: CreateRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.experimentId)) {
      body["ExperimentId"] = request.experimentId;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.params)) {
      body["Params"] = request.params;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateRun",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateRunResponse>(await this.callApi(params, req, runtime), new CreateRunResponse({}));
    } else {
      return $dara.cast<CreateRunResponse>(await this.execute(params, req, runtime), new CreateRunResponse({}));
    }

  }

  /**
   * 创建一次运行
   * 
   * @param request - CreateRunRequest
   * @returns CreateRunResponse
   */
  async createRun(request: CreateRunRequest): Promise<CreateRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRunWithOptions(request, headers, runtime);
  }

  /**
   * 创建工作空间
   * 
   * @param request - CreateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResponse
   */
  async createWorkspaceWithOptions(request: CreateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateWorkspaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.envTypes)) {
      body["EnvTypes"] = request.envTypes;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.workspaceName)) {
      body["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new CreateWorkspaceResponse({}));
    } else {
      return $dara.cast<CreateWorkspaceResponse>(await this.execute(params, req, runtime), new CreateWorkspaceResponse({}));
    }

  }

  /**
   * 创建工作空间
   * 
   * @param request - CreateWorkspaceRequest
   * @returns CreateWorkspaceResponse
   */
  async createWorkspace(request: CreateWorkspaceRequest): Promise<CreateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * 创建资源
   * 
   * @param request - CreateWorkspaceResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkspaceResourceResponse
   */
  async createWorkspaceResourceWithOptions(WorkspaceId: string, request: CreateWorkspaceResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateWorkspaceResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.option)) {
      body["Option"] = request.option;
    }

    if (!$dara.isNull(request.resources)) {
      body["Resources"] = request.resources;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateWorkspaceResource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateWorkspaceResourceResponse>(await this.callApi(params, req, runtime), new CreateWorkspaceResourceResponse({}));
    } else {
      return $dara.cast<CreateWorkspaceResourceResponse>(await this.execute(params, req, runtime), new CreateWorkspaceResourceResponse({}));
    }

  }

  /**
   * 创建资源
   * 
   * @param request - CreateWorkspaceResourceRequest
   * @returns CreateWorkspaceResourceResponse
   */
  async createWorkspaceResource(WorkspaceId: string, request: CreateWorkspaceResourceRequest): Promise<CreateWorkspaceResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createWorkspaceResourceWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 删除一个代码源配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCodeSourceResponse
   */
  async deleteCodeSourceWithOptions(CodeSourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteCodeSourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCodeSource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources/${$dara.URL.percentEncode(CodeSourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCodeSourceResponse>(await this.callApi(params, req, runtime), new DeleteCodeSourceResponse({}));
    } else {
      return $dara.cast<DeleteCodeSourceResponse>(await this.execute(params, req, runtime), new DeleteCodeSourceResponse({}));
    }

  }

  /**
   * 删除一个代码源配置
   * @returns DeleteCodeSourceResponse
   */
  async deleteCodeSource(CodeSourceId: string): Promise<DeleteCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCodeSourceWithOptions(CodeSourceId, headers, runtime);
  }

  /**
   * 删除数据集
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetResponse
   */
  async deleteDatasetWithOptions(DatasetId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteDatasetResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDataset",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDatasetResponse>(await this.callApi(params, req, runtime), new DeleteDatasetResponse({}));
    } else {
      return $dara.cast<DeleteDatasetResponse>(await this.execute(params, req, runtime), new DeleteDatasetResponse({}));
    }

  }

  /**
   * 删除数据集
   * @returns DeleteDatasetResponse
   */
  async deleteDataset(DatasetId: string): Promise<DeleteDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetWithOptions(DatasetId, headers, runtime);
  }

  /**
   * 批量删除数据集下的文件元数据记录
   * 
   * @param request - DeleteDatasetFileMetasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetFileMetasResponse
   */
  async deleteDatasetFileMetasWithOptions(DatasetId: string, request: DeleteDatasetFileMetasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteDatasetFileMetasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetFileMetaIds)) {
      query["DatasetFileMetaIds"] = request.datasetFileMetaIds;
    }

    if (!$dara.isNull(request.datasetVersion)) {
      query["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasetFileMetas",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetfilemetas`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDatasetFileMetasResponse>(await this.callApi(params, req, runtime), new DeleteDatasetFileMetasResponse({}));
    } else {
      return $dara.cast<DeleteDatasetFileMetasResponse>(await this.execute(params, req, runtime), new DeleteDatasetFileMetasResponse({}));
    }

  }

  /**
   * 批量删除数据集下的文件元数据记录
   * 
   * @param request - DeleteDatasetFileMetasRequest
   * @returns DeleteDatasetFileMetasResponse
   */
  async deleteDatasetFileMetas(DatasetId: string, request: DeleteDatasetFileMetasRequest): Promise<DeleteDatasetFileMetasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetFileMetasWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 删除数据集任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetJobResponse
   */
  async deleteDatasetJobWithOptions(DatasetId: string, DatasetJobId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteDatasetJobResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasetJob",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobs/${$dara.URL.percentEncode(DatasetJobId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDatasetJobResponse>(await this.callApi(params, req, runtime), new DeleteDatasetJobResponse({}));
    } else {
      return $dara.cast<DeleteDatasetJobResponse>(await this.execute(params, req, runtime), new DeleteDatasetJobResponse({}));
    }

  }

  /**
   * 删除数据集任务
   * @returns DeleteDatasetJobResponse
   */
  async deleteDatasetJob(DatasetId: string, DatasetJobId: string): Promise<DeleteDatasetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetJobWithOptions(DatasetId, DatasetJobId, headers, runtime);
  }

  /**
   * 删除数据集任务配置
   * 
   * @param request - DeleteDatasetJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetJobConfigResponse
   */
  async deleteDatasetJobConfigWithOptions(DatasetId: string, DatasetJobConfigId: string, request: DeleteDatasetJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteDatasetJobConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasetJobConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobconfigs/${$dara.URL.percentEncode(DatasetJobConfigId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDatasetJobConfigResponse>(await this.callApi(params, req, runtime), new DeleteDatasetJobConfigResponse({}));
    } else {
      return $dara.cast<DeleteDatasetJobConfigResponse>(await this.execute(params, req, runtime), new DeleteDatasetJobConfigResponse({}));
    }

  }

  /**
   * 删除数据集任务配置
   * 
   * @param request - DeleteDatasetJobConfigRequest
   * @returns DeleteDatasetJobConfigResponse
   */
  async deleteDatasetJobConfig(DatasetId: string, DatasetJobConfigId: string, request: DeleteDatasetJobConfigRequest): Promise<DeleteDatasetJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetJobConfigWithOptions(DatasetId, DatasetJobConfigId, request, headers, runtime);
  }

  /**
   * 删除 Dataset 的标签
   * 
   * @param request - DeleteDatasetLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetLabelsResponse
   */
  async deleteDatasetLabelsWithOptions(DatasetId: string, request: DeleteDatasetLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteDatasetLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasetLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDatasetLabelsResponse>(await this.callApi(params, req, runtime), new DeleteDatasetLabelsResponse({}));
    } else {
      return $dara.cast<DeleteDatasetLabelsResponse>(await this.execute(params, req, runtime), new DeleteDatasetLabelsResponse({}));
    }

  }

  /**
   * 删除 Dataset 的标签
   * 
   * @param request - DeleteDatasetLabelsRequest
   * @returns DeleteDatasetLabelsResponse
   */
  async deleteDatasetLabels(DatasetId: string, request: DeleteDatasetLabelsRequest): Promise<DeleteDatasetLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetLabelsWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 删除指定版本的数据集信息，如果删除的版本是该数据集的仅存版本，版本删除后会联动删除dataset 表中的数据集信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetVersionResponse
   */
  async deleteDatasetVersionWithOptions(DatasetId: string, VersionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteDatasetVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasetVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/versions/${$dara.URL.percentEncode(VersionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDatasetVersionResponse>(await this.callApi(params, req, runtime), new DeleteDatasetVersionResponse({}));
    } else {
      return $dara.cast<DeleteDatasetVersionResponse>(await this.execute(params, req, runtime), new DeleteDatasetVersionResponse({}));
    }

  }

  /**
   * 删除指定版本的数据集信息，如果删除的版本是该数据集的仅存版本，版本删除后会联动删除dataset 表中的数据集信息
   * @returns DeleteDatasetVersionResponse
   */
  async deleteDatasetVersion(DatasetId: string, VersionName: string): Promise<DeleteDatasetVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetVersionWithOptions(DatasetId, VersionName, headers, runtime);
  }

  /**
   * 删除数据集版本的标签。
   * 
   * @param request - DeleteDatasetVersionLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteDatasetVersionLabelsResponse
   */
  async deleteDatasetVersionLabelsWithOptions(DatasetId: string, VersionName: string, request: DeleteDatasetVersionLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteDatasetVersionLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keys)) {
      query["Keys"] = request.keys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteDatasetVersionLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/versions/${$dara.URL.percentEncode(VersionName)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteDatasetVersionLabelsResponse>(await this.callApi(params, req, runtime), new DeleteDatasetVersionLabelsResponse({}));
    } else {
      return $dara.cast<DeleteDatasetVersionLabelsResponse>(await this.execute(params, req, runtime), new DeleteDatasetVersionLabelsResponse({}));
    }

  }

  /**
   * 删除数据集版本的标签。
   * 
   * @param request - DeleteDatasetVersionLabelsRequest
   * @returns DeleteDatasetVersionLabelsResponse
   */
  async deleteDatasetVersionLabels(DatasetId: string, VersionName: string, request: DeleteDatasetVersionLabelsRequest): Promise<DeleteDatasetVersionLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetVersionLabelsWithOptions(DatasetId, VersionName, request, headers, runtime);
  }

  /**
   * 删除实验
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentResponse
   */
  async deleteExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteExperimentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExperiment",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteExperimentResponse>(await this.callApi(params, req, runtime), new DeleteExperimentResponse({}));
    } else {
      return $dara.cast<DeleteExperimentResponse>(await this.execute(params, req, runtime), new DeleteExperimentResponse({}));
    }

  }

  /**
   * 删除实验
   * @returns DeleteExperimentResponse
   */
  async deleteExperiment(ExperimentId: string): Promise<DeleteExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentWithOptions(ExperimentId, headers, runtime);
  }

  /**
   * 删除实验标签
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteExperimentLabelResponse
   */
  async deleteExperimentLabelWithOptions(ExperimentId: string, Key: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteExperimentLabelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteExperimentLabel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}/labels/${$dara.URL.percentEncode(Key)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteExperimentLabelResponse>(await this.callApi(params, req, runtime), new DeleteExperimentLabelResponse({}));
    } else {
      return $dara.cast<DeleteExperimentLabelResponse>(await this.execute(params, req, runtime), new DeleteExperimentLabelResponse({}));
    }

  }

  /**
   * 删除实验标签
   * @returns DeleteExperimentLabelResponse
   */
  async deleteExperimentLabel(ExperimentId: string, Key: string): Promise<DeleteExperimentLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentLabelWithOptions(ExperimentId, Key, headers, runtime);
  }

  /**
   * 删除工作空间成员
   * 
   * @param request - DeleteMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteMembersResponse
   */
  async deleteMembersWithOptions(WorkspaceId: string, request: DeleteMembersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.memberIds)) {
      query["MemberIds"] = request.memberIds;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteMembers",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/members`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteMembersResponse>(await this.callApi(params, req, runtime), new DeleteMembersResponse({}));
    } else {
      return $dara.cast<DeleteMembersResponse>(await this.execute(params, req, runtime), new DeleteMembersResponse({}));
    }

  }

  /**
   * 删除工作空间成员
   * 
   * @param request - DeleteMembersRequest
   * @returns DeleteMembersResponse
   */
  async deleteMembers(WorkspaceId: string, request: DeleteMembersRequest): Promise<DeleteMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteMembersWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 删除模型
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelResponse
   */
  async deleteModelWithOptions(ModelId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteModelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteModelResponse>(await this.callApi(params, req, runtime), new DeleteModelResponse({}));
    } else {
      return $dara.cast<DeleteModelResponse>(await this.execute(params, req, runtime), new DeleteModelResponse({}));
    }

  }

  /**
   * 删除模型
   * @returns DeleteModelResponse
   */
  async deleteModel(ModelId: string): Promise<DeleteModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelWithOptions(ModelId, headers, runtime);
  }

  /**
   * 删除模型的标签
   * 
   * @param request - DeleteModelLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelLabelsResponse
   */
  async deleteModelLabelsWithOptions(ModelId: string, request: DeleteModelLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteModelLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteModelLabelsResponse>(await this.callApi(params, req, runtime), new DeleteModelLabelsResponse({}));
    } else {
      return $dara.cast<DeleteModelLabelsResponse>(await this.execute(params, req, runtime), new DeleteModelLabelsResponse({}));
    }

  }

  /**
   * 删除模型的标签
   * 
   * @param request - DeleteModelLabelsRequest
   * @returns DeleteModelLabelsResponse
   */
  async deleteModelLabels(ModelId: string, request: DeleteModelLabelsRequest): Promise<DeleteModelLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelLabelsWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * 删除模型版本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelVersionResponse
   */
  async deleteModelVersionWithOptions(ModelId: string, VersionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteModelVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/versions/${$dara.URL.percentEncode(VersionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteModelVersionResponse>(await this.callApi(params, req, runtime), new DeleteModelVersionResponse({}));
    } else {
      return $dara.cast<DeleteModelVersionResponse>(await this.execute(params, req, runtime), new DeleteModelVersionResponse({}));
    }

  }

  /**
   * 删除模型版本
   * @returns DeleteModelVersionResponse
   */
  async deleteModelVersion(ModelId: string, VersionName: string): Promise<DeleteModelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelVersionWithOptions(ModelId, VersionName, headers, runtime);
  }

  /**
   * 删除模型版本的标签
   * 
   * @param request - DeleteModelVersionLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteModelVersionLabelsResponse
   */
  async deleteModelVersionLabelsWithOptions(ModelId: string, VersionName: string, request: DeleteModelVersionLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteModelVersionLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteModelVersionLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/versions/${$dara.URL.percentEncode(VersionName)}/labels`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteModelVersionLabelsResponse>(await this.callApi(params, req, runtime), new DeleteModelVersionLabelsResponse({}));
    } else {
      return $dara.cast<DeleteModelVersionLabelsResponse>(await this.execute(params, req, runtime), new DeleteModelVersionLabelsResponse({}));
    }

  }

  /**
   * 删除模型版本的标签
   * 
   * @param request - DeleteModelVersionLabelsRequest
   * @returns DeleteModelVersionLabelsResponse
   */
  async deleteModelVersionLabels(ModelId: string, VersionName: string, request: DeleteModelVersionLabelsRequest): Promise<DeleteModelVersionLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelVersionLabelsWithOptions(ModelId, VersionName, request, headers, runtime);
  }

  /**
   * 删除Run
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRunResponse
   */
  async deleteRunWithOptions(RunId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteRunResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRun",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${$dara.URL.percentEncode(RunId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRunResponse>(await this.callApi(params, req, runtime), new DeleteRunResponse({}));
    } else {
      return $dara.cast<DeleteRunResponse>(await this.execute(params, req, runtime), new DeleteRunResponse({}));
    }

  }

  /**
   * 删除Run
   * @returns DeleteRunResponse
   */
  async deleteRun(RunId: string): Promise<DeleteRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRunWithOptions(RunId, headers, runtime);
  }

  /**
   * 删除Run标签
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteRunLabelResponse
   */
  async deleteRunLabelWithOptions(RunId: string, Key: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteRunLabelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteRunLabel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${$dara.URL.percentEncode(RunId)}/labels/${$dara.URL.percentEncode(Key)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteRunLabelResponse>(await this.callApi(params, req, runtime), new DeleteRunLabelResponse({}));
    } else {
      return $dara.cast<DeleteRunLabelResponse>(await this.execute(params, req, runtime), new DeleteRunLabelResponse({}));
    }

  }

  /**
   * 删除Run标签
   * @returns DeleteRunLabelResponse
   */
  async deleteRunLabel(RunId: string, Key: string): Promise<DeleteRunLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRunLabelWithOptions(RunId, Key, headers, runtime);
  }

  /**
   * 删除工作空间
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspaceWithOptions(WorkspaceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteWorkspaceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteWorkspaceResponse>(await this.callApi(params, req, runtime), new DeleteWorkspaceResponse({}));
    } else {
      return $dara.cast<DeleteWorkspaceResponse>(await this.execute(params, req, runtime), new DeleteWorkspaceResponse({}));
    }

  }

  /**
   * 删除工作空间
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspace(WorkspaceId: string): Promise<DeleteWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceWithOptions(WorkspaceId, headers, runtime);
  }

  /**
   * 删除工作空间资源
   * 
   * @param request - DeleteWorkspaceResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkspaceResourceResponse
   */
  async deleteWorkspaceResourceWithOptions(WorkspaceId: string, request: DeleteWorkspaceResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteWorkspaceResourceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteWorkspaceResource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/resources`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteWorkspaceResourceResponse>(await this.callApi(params, req, runtime), new DeleteWorkspaceResourceResponse({}));
    } else {
      return $dara.cast<DeleteWorkspaceResourceResponse>(await this.execute(params, req, runtime), new DeleteWorkspaceResourceResponse({}));
    }

  }

  /**
   * 删除工作空间资源
   * 
   * @param request - DeleteWorkspaceResourceRequest
   * @returns DeleteWorkspaceResourceResponse
   */
  async deleteWorkspaceResource(WorkspaceId: string, request: DeleteWorkspaceResourceRequest): Promise<DeleteWorkspaceResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceResourceWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 获取一个代码源配置
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCodeSourceResponse
   */
  async getCodeSourceWithOptions(CodeSourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetCodeSourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCodeSource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources/${$dara.URL.percentEncode(CodeSourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCodeSourceResponse>(await this.callApi(params, req, runtime), new GetCodeSourceResponse({}));
    } else {
      return $dara.cast<GetCodeSourceResponse>(await this.execute(params, req, runtime), new GetCodeSourceResponse({}));
    }

  }

  /**
   * 获取一个代码源配置
   * @returns GetCodeSourceResponse
   */
  async getCodeSource(CodeSourceId: string): Promise<GetCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCodeSourceWithOptions(CodeSourceId, headers, runtime);
  }

  /**
   * 获取数据集
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetResponse
   */
  async getDatasetWithOptions(DatasetId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDatasetResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDataset",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDatasetResponse>(await this.callApi(params, req, runtime), new GetDatasetResponse({}));
    } else {
      return $dara.cast<GetDatasetResponse>(await this.execute(params, req, runtime), new GetDatasetResponse({}));
    }

  }

  /**
   * 获取数据集
   * @returns GetDatasetResponse
   */
  async getDataset(DatasetId: string): Promise<GetDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetWithOptions(DatasetId, headers, runtime);
  }

  /**
   * 获取数据集下的指定文件元数据记录
   * 
   * @param request - GetDatasetFileMetaRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetFileMetaResponse
   */
  async getDatasetFileMetaWithOptions(DatasetId: string, DatasetFileMetaId: string, request: GetDatasetFileMetaRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDatasetFileMetaResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetVersion)) {
      query["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatasetFileMeta",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetfilemetas/${$dara.URL.percentEncode(DatasetFileMetaId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDatasetFileMetaResponse>(await this.callApi(params, req, runtime), new GetDatasetFileMetaResponse({}));
    } else {
      return $dara.cast<GetDatasetFileMetaResponse>(await this.execute(params, req, runtime), new GetDatasetFileMetaResponse({}));
    }

  }

  /**
   * 获取数据集下的指定文件元数据记录
   * 
   * @param request - GetDatasetFileMetaRequest
   * @returns GetDatasetFileMetaResponse
   */
  async getDatasetFileMeta(DatasetId: string, DatasetFileMetaId: string, request: GetDatasetFileMetaRequest): Promise<GetDatasetFileMetaResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetFileMetaWithOptions(DatasetId, DatasetFileMetaId, request, headers, runtime);
  }

  /**
   * 获取数据集任务
   * 
   * @param request - GetDatasetJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetJobResponse
   */
  async getDatasetJobWithOptions(DatasetId: string, DatasetJobId: string, request: GetDatasetJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDatasetJobResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetVersion)) {
      query["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatasetJob",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobs/${$dara.URL.percentEncode(DatasetJobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDatasetJobResponse>(await this.callApi(params, req, runtime), new GetDatasetJobResponse({}));
    } else {
      return $dara.cast<GetDatasetJobResponse>(await this.execute(params, req, runtime), new GetDatasetJobResponse({}));
    }

  }

  /**
   * 获取数据集任务
   * 
   * @param request - GetDatasetJobRequest
   * @returns GetDatasetJobResponse
   */
  async getDatasetJob(DatasetId: string, DatasetJobId: string, request: GetDatasetJobRequest): Promise<GetDatasetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetJobWithOptions(DatasetId, DatasetJobId, request, headers, runtime);
  }

  /**
   * 获取数据集任务配置
   * 
   * @param request - GetDatasetJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetJobConfigResponse
   */
  async getDatasetJobConfigWithOptions(DatasetId: string, DatasetJobConfigId: string, request: GetDatasetJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDatasetJobConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatasetJobConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobconfigs/${$dara.URL.percentEncode(DatasetJobConfigId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDatasetJobConfigResponse>(await this.callApi(params, req, runtime), new GetDatasetJobConfigResponse({}));
    } else {
      return $dara.cast<GetDatasetJobConfigResponse>(await this.execute(params, req, runtime), new GetDatasetJobConfigResponse({}));
    }

  }

  /**
   * 获取数据集任务配置
   * 
   * @param request - GetDatasetJobConfigRequest
   * @returns GetDatasetJobConfigResponse
   */
  async getDatasetJobConfig(DatasetId: string, DatasetJobConfigId: string, request: GetDatasetJobConfigRequest): Promise<GetDatasetJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetJobConfigWithOptions(DatasetId, DatasetJobConfigId, request, headers, runtime);
  }

  /**
   * 获取指定版本的数据集信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetVersionResponse
   */
  async getDatasetVersionWithOptions(DatasetId: string, VersionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDatasetVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatasetVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/versions/${$dara.URL.percentEncode(VersionName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDatasetVersionResponse>(await this.callApi(params, req, runtime), new GetDatasetVersionResponse({}));
    } else {
      return $dara.cast<GetDatasetVersionResponse>(await this.execute(params, req, runtime), new GetDatasetVersionResponse({}));
    }

  }

  /**
   * 获取指定版本的数据集信息
   * @returns GetDatasetVersionResponse
   */
  async getDatasetVersion(DatasetId: string, VersionName: string): Promise<GetDatasetVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetVersionWithOptions(DatasetId, VersionName, headers, runtime);
  }

  /**
   * 获取默认工作空间
   * 
   * @param request - GetDefaultWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDefaultWorkspaceResponse
   */
  async getDefaultWorkspaceWithOptions(request: GetDefaultWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDefaultWorkspaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDefaultWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/defaultWorkspaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDefaultWorkspaceResponse>(await this.callApi(params, req, runtime), new GetDefaultWorkspaceResponse({}));
    } else {
      return $dara.cast<GetDefaultWorkspaceResponse>(await this.execute(params, req, runtime), new GetDefaultWorkspaceResponse({}));
    }

  }

  /**
   * 获取默认工作空间
   * 
   * @param request - GetDefaultWorkspaceRequest
   * @returns GetDefaultWorkspaceResponse
   */
  async getDefaultWorkspace(request: GetDefaultWorkspaceRequest): Promise<GetDefaultWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDefaultWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * 获取实验
   * 
   * @param request - GetExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetExperimentResponse
   */
  async getExperimentWithOptions(ExperimentId: string, request: GetExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetExperimentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetExperiment",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetExperimentResponse>(await this.callApi(params, req, runtime), new GetExperimentResponse({}));
    } else {
      return $dara.cast<GetExperimentResponse>(await this.execute(params, req, runtime), new GetExperimentResponse({}));
    }

  }

  /**
   * 获取实验
   * 
   * @param request - GetExperimentRequest
   * @returns GetExperimentResponse
   */
  async getExperiment(ExperimentId: string, request: GetExperimentRequest): Promise<GetExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * 获取镜像
   * 
   * @param request - GetImageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetImageResponse
   */
  async getImageWithOptions(ImageId: string, request: GetImageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetImageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetImage",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${$dara.URL.percentEncode(ImageId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetImageResponse>(await this.callApi(params, req, runtime), new GetImageResponse({}));
    } else {
      return $dara.cast<GetImageResponse>(await this.execute(params, req, runtime), new GetImageResponse({}));
    }

  }

  /**
   * 获取镜像
   * 
   * @param request - GetImageRequest
   * @returns GetImageResponse
   */
  async getImage(ImageId: string, request: GetImageRequest): Promise<GetImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getImageWithOptions(ImageId, request, headers, runtime);
  }

  /**
   * 获取成员
   * 
   * @param request - GetMemberRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetMemberResponse
   */
  async getMemberWithOptions(WorkspaceId: string, request: GetMemberRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetMemberResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.memberId)) {
      query["MemberId"] = request.memberId;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetMember",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/member`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetMemberResponse>(await this.callApi(params, req, runtime), new GetMemberResponse({}));
    } else {
      return $dara.cast<GetMemberResponse>(await this.execute(params, req, runtime), new GetMemberResponse({}));
    }

  }

  /**
   * 获取成员
   * 
   * @param request - GetMemberRequest
   * @returns GetMemberResponse
   */
  async getMember(WorkspaceId: string, request: GetMemberRequest): Promise<GetMemberResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMemberWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 获取模型
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelResponse
   */
  async getModelWithOptions(ModelId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetModelResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetModelResponse>(await this.callApi(params, req, runtime), new GetModelResponse({}));
    } else {
      return $dara.cast<GetModelResponse>(await this.execute(params, req, runtime), new GetModelResponse({}));
    }

  }

  /**
   * 获取模型
   * @returns GetModelResponse
   */
  async getModel(ModelId: string): Promise<GetModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelWithOptions(ModelId, headers, runtime);
  }

  /**
   * 获取模型版本
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetModelVersionResponse
   */
  async getModelVersionWithOptions(ModelId: string, VersionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetModelVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetModelVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/versions/${$dara.URL.percentEncode(VersionName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetModelVersionResponse>(await this.callApi(params, req, runtime), new GetModelVersionResponse({}));
    } else {
      return $dara.cast<GetModelVersionResponse>(await this.execute(params, req, runtime), new GetModelVersionResponse({}));
    }

  }

  /**
   * 获取模型版本
   * @returns GetModelVersionResponse
   */
  async getModelVersion(ModelId: string, VersionName: string): Promise<GetModelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelVersionWithOptions(ModelId, VersionName, headers, runtime);
  }

  /**
   * 获取权限，若无权限则返回错误
   * 
   * @param tmpReq - GetPermissionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPermissionResponse
   */
  async getPermissionWithOptions(WorkspaceId: string, PermissionCode: string, tmpReq: GetPermissionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetPermissionResponse> {
    tmpReq.validate();
    let request = new GetPermissionShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "Labels", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!$dara.isNull(request.labelsShrink)) {
      query["Labels"] = request.labelsShrink;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.resource)) {
      query["Resource"] = request.resource;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPermission",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/permissions/${$dara.URL.percentEncode(PermissionCode)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPermissionResponse>(await this.callApi(params, req, runtime), new GetPermissionResponse({}));
    } else {
      return $dara.cast<GetPermissionResponse>(await this.execute(params, req, runtime), new GetPermissionResponse({}));
    }

  }

  /**
   * 获取权限，若无权限则返回错误
   * 
   * @param request - GetPermissionRequest
   * @returns GetPermissionResponse
   */
  async getPermission(WorkspaceId: string, PermissionCode: string, request: GetPermissionRequest): Promise<GetPermissionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPermissionWithOptions(WorkspaceId, PermissionCode, request, headers, runtime);
  }

  /**
   * 获取Run详情
   * 
   * @param request - GetRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRunResponse
   */
  async getRunWithOptions(RunId: string, request: GetRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetRunResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRun",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${$dara.URL.percentEncode(RunId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRunResponse>(await this.callApi(params, req, runtime), new GetRunResponse({}));
    } else {
      return $dara.cast<GetRunResponse>(await this.execute(params, req, runtime), new GetRunResponse({}));
    }

  }

  /**
   * 获取Run详情
   * 
   * @param request - GetRunRequest
   * @returns GetRunResponse
   */
  async getRun(RunId: string, request: GetRunRequest): Promise<GetRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRunWithOptions(RunId, request, headers, runtime);
  }

  /**
   * 获取工作空间
   * 
   * @param request - GetWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkspaceResponse
   */
  async getWorkspaceWithOptions(WorkspaceId: string, request: GetWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetWorkspaceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetWorkspaceResponse>(await this.callApi(params, req, runtime), new GetWorkspaceResponse({}));
    } else {
      return $dara.cast<GetWorkspaceResponse>(await this.execute(params, req, runtime), new GetWorkspaceResponse({}));
    }

  }

  /**
   * 获取工作空间
   * 
   * @param request - GetWorkspaceRequest
   * @returns GetWorkspaceResponse
   */
  async getWorkspace(WorkspaceId: string, request: GetWorkspaceRequest): Promise<GetWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 获取代码源配置列表
   * 
   * @param request - ListCodeSourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCodeSourcesResponse
   */
  async listCodeSourcesWithOptions(request: ListCodeSourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListCodeSourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListCodeSources",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCodeSourcesResponse>(await this.callApi(params, req, runtime), new ListCodeSourcesResponse({}));
    } else {
      return $dara.cast<ListCodeSourcesResponse>(await this.execute(params, req, runtime), new ListCodeSourcesResponse({}));
    }

  }

  /**
   * 获取代码源配置列表
   * 
   * @param request - ListCodeSourcesRequest
   * @returns ListCodeSourcesResponse
   */
  async listCodeSources(request: ListCodeSourcesRequest): Promise<ListCodeSourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCodeSourcesWithOptions(request, headers, runtime);
  }

  /**
   * 查询数据集文件列表
   * 
   * @param request - ListDatasetFileMetasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetFileMetasResponse
   */
  async listDatasetFileMetasWithOptions(DatasetId: string, request: ListDatasetFileMetasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDatasetFileMetasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetVersion)) {
      query["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.endFileUpdateTime)) {
      query["EndFileUpdateTime"] = request.endFileUpdateTime;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.queryText)) {
      query["QueryText"] = request.queryText;
    }

    if (!$dara.isNull(request.queryType)) {
      query["QueryType"] = request.queryType;
    }

    if (!$dara.isNull(request.scoreThreshold)) {
      query["ScoreThreshold"] = request.scoreThreshold;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.startFileUpdateTime)) {
      query["StartFileUpdateTime"] = request.startFileUpdateTime;
    }

    if (!$dara.isNull(request.topK)) {
      query["TopK"] = request.topK;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasetFileMetas",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetfilemetas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDatasetFileMetasResponse>(await this.callApi(params, req, runtime), new ListDatasetFileMetasResponse({}));
    } else {
      return $dara.cast<ListDatasetFileMetasResponse>(await this.execute(params, req, runtime), new ListDatasetFileMetasResponse({}));
    }

  }

  /**
   * 查询数据集文件列表
   * 
   * @param request - ListDatasetFileMetasRequest
   * @returns ListDatasetFileMetasResponse
   */
  async listDatasetFileMetas(DatasetId: string, request: ListDatasetFileMetasRequest): Promise<ListDatasetFileMetasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasetFileMetasWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 批量查询数据集任务配置
   * 
   * @param request - ListDatasetJobConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetJobConfigsResponse
   */
  async listDatasetJobConfigsWithOptions(DatasetId: string, request: ListDatasetJobConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDatasetJobConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configType)) {
      query["ConfigType"] = request.configType;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasetJobConfigs",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobconfigs/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDatasetJobConfigsResponse>(await this.callApi(params, req, runtime), new ListDatasetJobConfigsResponse({}));
    } else {
      return $dara.cast<ListDatasetJobConfigsResponse>(await this.execute(params, req, runtime), new ListDatasetJobConfigsResponse({}));
    }

  }

  /**
   * 批量查询数据集任务配置
   * 
   * @param request - ListDatasetJobConfigsRequest
   * @returns ListDatasetJobConfigsResponse
   */
  async listDatasetJobConfigs(DatasetId: string, request: ListDatasetJobConfigsRequest): Promise<ListDatasetJobConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasetJobConfigsWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 获取数据集任务
   * 
   * @param request - ListDatasetJobsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetJobsResponse
   */
  async listDatasetJobsWithOptions(DatasetId: string, request: ListDatasetJobsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDatasetJobsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetVersion)) {
      query["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.jobAction)) {
      query["JobAction"] = request.jobAction;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasetJobs",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDatasetJobsResponse>(await this.callApi(params, req, runtime), new ListDatasetJobsResponse({}));
    } else {
      return $dara.cast<ListDatasetJobsResponse>(await this.execute(params, req, runtime), new ListDatasetJobsResponse({}));
    }

  }

  /**
   * 获取数据集任务
   * 
   * @param request - ListDatasetJobsRequest
   * @returns ListDatasetJobsResponse
   */
  async listDatasetJobs(DatasetId: string, request: ListDatasetJobsRequest): Promise<ListDatasetJobsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasetJobsWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 获取数据集版本列表
   * 
   * @param request - ListDatasetVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetVersionsResponse
   */
  async listDatasetVersionsWithOptions(DatasetId: string, request: ListDatasetVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDatasetVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    if (!$dara.isNull(request.labelValues)) {
      query["LabelValues"] = request.labelValues;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.properties)) {
      query["Properties"] = request.properties;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceTypes)) {
      query["SourceTypes"] = request.sourceTypes;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasetVersions",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDatasetVersionsResponse>(await this.callApi(params, req, runtime), new ListDatasetVersionsResponse({}));
    } else {
      return $dara.cast<ListDatasetVersionsResponse>(await this.execute(params, req, runtime), new ListDatasetVersionsResponse({}));
    }

  }

  /**
   * 获取数据集版本列表
   * 
   * @param request - ListDatasetVersionsRequest
   * @returns ListDatasetVersionsResponse
   */
  async listDatasetVersions(DatasetId: string, request: ListDatasetVersionsRequest): Promise<ListDatasetVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasetVersionsWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 获取数据集列表
   * 
   * @param request - ListDatasetsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetsResponse
   */
  async listDatasetsWithOptions(request: ListDatasetsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDatasetsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceTypes)) {
      query["DataSourceTypes"] = request.dataSourceTypes;
    }

    if (!$dara.isNull(request.dataTypes)) {
      query["DataTypes"] = request.dataTypes;
    }

    if (!$dara.isNull(request.label)) {
      query["Label"] = request.label;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.properties)) {
      query["Properties"] = request.properties;
    }

    if (!$dara.isNull(request.provider)) {
      query["Provider"] = request.provider;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sourceDatasetId)) {
      query["SourceDatasetId"] = request.sourceDatasetId;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceTypes)) {
      query["SourceTypes"] = request.sourceTypes;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDatasets",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDatasetsResponse>(await this.callApi(params, req, runtime), new ListDatasetsResponse({}));
    } else {
      return $dara.cast<ListDatasetsResponse>(await this.execute(params, req, runtime), new ListDatasetsResponse({}));
    }

  }

  /**
   * 获取数据集列表
   * 
   * @param request - ListDatasetsRequest
   * @returns ListDatasetsResponse
   */
  async listDatasets(request: ListDatasetsRequest): Promise<ListDatasetsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasetsWithOptions(request, headers, runtime);
  }

  /**
   * 获取实验列表
   * 
   * @param tmpReq - ListExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListExperimentResponse
   */
  async listExperimentWithOptions(tmpReq: ListExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListExperimentResponse> {
    tmpReq.validate();
    let request = new ListExperimentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.options)) {
      request.optionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.options, "Options", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.optionsShrink)) {
      query["Options"] = request.optionsShrink;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["PageToken"] = request.pageToken;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListExperiment",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListExperimentResponse>(await this.callApi(params, req, runtime), new ListExperimentResponse({}));
    } else {
      return $dara.cast<ListExperimentResponse>(await this.execute(params, req, runtime), new ListExperimentResponse({}));
    }

  }

  /**
   * 获取实验列表
   * 
   * @param request - ListExperimentRequest
   * @returns ListExperimentResponse
   */
  async listExperiment(request: ListExperimentRequest): Promise<ListExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentWithOptions(request, headers, runtime);
  }

  /**
   * 列举标签
   * 
   * @param request - ListImageLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImageLabelsResponse
   */
  async listImageLabelsWithOptions(request: ListImageLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListImageLabelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!$dara.isNull(request.labelFilter)) {
      query["LabelFilter"] = request.labelFilter;
    }

    if (!$dara.isNull(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    if (!$dara.isNull(request.region)) {
      query["Region"] = request.region;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImageLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/image/labels`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListImageLabelsResponse>(await this.callApi(params, req, runtime), new ListImageLabelsResponse({}));
    } else {
      return $dara.cast<ListImageLabelsResponse>(await this.execute(params, req, runtime), new ListImageLabelsResponse({}));
    }

  }

  /**
   * 列举标签
   * 
   * @param request - ListImageLabelsRequest
   * @returns ListImageLabelsResponse
   */
  async listImageLabels(request: ListImageLabelsRequest): Promise<ListImageLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listImageLabelsWithOptions(request, headers, runtime);
  }

  /**
   * 列举已注册镜像
   * 
   * @param request - ListImagesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListImagesResponse
   */
  async listImagesWithOptions(request: ListImagesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListImagesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.imageUri)) {
      query["ImageUri"] = request.imageUri;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListImages",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListImagesResponse>(await this.callApi(params, req, runtime), new ListImagesResponse({}));
    } else {
      return $dara.cast<ListImagesResponse>(await this.execute(params, req, runtime), new ListImagesResponse({}));
    }

  }

  /**
   * 列举已注册镜像
   * 
   * @param request - ListImagesRequest
   * @returns ListImagesResponse
   */
  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listImagesWithOptions(request, headers, runtime);
  }

  /**
   * 列举工作空间成员
   * 
   * @param request - ListMembersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListMembersResponse
   */
  async listMembersWithOptions(WorkspaceId: string, request: ListMembersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListMembersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.memberName)) {
      query["MemberName"] = request.memberName;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.roles)) {
      query["Roles"] = request.roles;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListMembers",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/members`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListMembersResponse>(await this.callApi(params, req, runtime), new ListMembersResponse({}));
    } else {
      return $dara.cast<ListMembersResponse>(await this.execute(params, req, runtime), new ListMembersResponse({}));
    }

  }

  /**
   * 列举工作空间成员
   * 
   * @param request - ListMembersRequest
   * @returns ListMembersResponse
   */
  async listMembers(WorkspaceId: string, request: ListMembersRequest): Promise<ListMembersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMembersWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 获取模型版本列表
   * 
   * @param request - ListModelVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelVersionsResponse
   */
  async listModelVersionsWithOptions(ModelId: string, request: ListModelVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListModelVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.approvalStatus)) {
      query["ApprovalStatus"] = request.approvalStatus;
    }

    if (!$dara.isNull(request.formatType)) {
      query["FormatType"] = request.formatType;
    }

    if (!$dara.isNull(request.frameworkType)) {
      query["FrameworkType"] = request.frameworkType;
    }

    if (!$dara.isNull(request.label)) {
      query["Label"] = request.label;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.versionName)) {
      query["VersionName"] = request.versionName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModelVersions",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListModelVersionsResponse>(await this.callApi(params, req, runtime), new ListModelVersionsResponse({}));
    } else {
      return $dara.cast<ListModelVersionsResponse>(await this.execute(params, req, runtime), new ListModelVersionsResponse({}));
    }

  }

  /**
   * 获取模型版本列表
   * 
   * @param request - ListModelVersionsRequest
   * @returns ListModelVersionsResponse
   */
  async listModelVersions(ModelId: string, request: ListModelVersionsRequest): Promise<ListModelVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelVersionsWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * 获取模型列表
   * 
   * @param request - ListModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelsResponse
   */
  async listModelsWithOptions(request: ListModelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListModelsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.collections)) {
      query["Collections"] = request.collections;
    }

    if (!$dara.isNull(request.domain)) {
      query["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.label)) {
      query["Label"] = request.label;
    }

    if (!$dara.isNull(request.modelName)) {
      query["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelType)) {
      query["ModelType"] = request.modelType;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.origin)) {
      query["Origin"] = request.origin;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.provider)) {
      query["Provider"] = request.provider;
    }

    if (!$dara.isNull(request.query)) {
      query["Query"] = request.query;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.task)) {
      query["Task"] = request.task;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListModels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListModelsResponse>(await this.callApi(params, req, runtime), new ListModelsResponse({}));
    } else {
      return $dara.cast<ListModelsResponse>(await this.execute(params, req, runtime), new ListModelsResponse({}));
    }

  }

  /**
   * 获取模型列表
   * 
   * @param request - ListModelsRequest
   * @returns ListModelsResponse
   */
  async listModels(request: ListModelsRequest): Promise<ListModelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModelsWithOptions(request, headers, runtime);
  }

  /**
   * 列举权限
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPermissionsResponse
   */
  async listPermissionsWithOptions(WorkspaceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListPermissionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPermissions",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/permissions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPermissionsResponse>(await this.callApi(params, req, runtime), new ListPermissionsResponse({}));
    } else {
      return $dara.cast<ListPermissionsResponse>(await this.execute(params, req, runtime), new ListPermissionsResponse({}));
    }

  }

  /**
   * 列举权限
   * @returns ListPermissionsResponse
   */
  async listPermissions(WorkspaceId: string): Promise<ListPermissionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPermissionsWithOptions(WorkspaceId, headers, runtime);
  }

  /**
   * 列举产品
   * 
   * @param request - ListProductsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProductsResponse
   */
  async listProductsWithOptions(request: ListProductsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListProductsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.productCodes)) {
      query["ProductCodes"] = request.productCodes;
    }

    if (!$dara.isNull(request.serviceCodes)) {
      query["ServiceCodes"] = request.serviceCodes;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProducts",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/products`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListProductsResponse>(await this.callApi(params, req, runtime), new ListProductsResponse({}));
    } else {
      return $dara.cast<ListProductsResponse>(await this.execute(params, req, runtime), new ListProductsResponse({}));
    }

  }

  /**
   * 列举产品
   * 
   * @param request - ListProductsRequest
   * @returns ListProductsResponse
   */
  async listProducts(request: ListProductsRequest): Promise<ListProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProductsWithOptions(request, headers, runtime);
  }

  /**
   * 获取已有配额列表
   * 
   * @param request - ListQuotasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQuotasResponse
   */
  async listQuotasWithOptions(request: ListQuotasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListQuotasResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListQuotas",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/quotas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListQuotasResponse>(await this.callApi(params, req, runtime), new ListQuotasResponse({}));
    } else {
      return $dara.cast<ListQuotasResponse>(await this.execute(params, req, runtime), new ListQuotasResponse({}));
    }

  }

  /**
   * 获取已有配额列表
   * 
   * @param request - ListQuotasRequest
   * @returns ListQuotasResponse
   */
  async listQuotas(request: ListQuotasRequest): Promise<ListQuotasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotasWithOptions(request, headers, runtime);
  }

  /**
   * 列举工作空间资源
   * 
   * @param request - ListResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(request: ListResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productTypes)) {
      query["ProductTypes"] = request.productTypes;
    }

    if (!$dara.isNull(request.quotaIds)) {
      query["QuotaIds"] = request.quotaIds;
    }

    if (!$dara.isNull(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!$dara.isNull(request.resourceTypes)) {
      query["ResourceTypes"] = request.resourceTypes;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!$dara.isNull(request.verboseFields)) {
      query["VerboseFields"] = request.verboseFields;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListResources",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListResourcesResponse>(await this.callApi(params, req, runtime), new ListResourcesResponse({}));
    } else {
      return $dara.cast<ListResourcesResponse>(await this.execute(params, req, runtime), new ListResourcesResponse({}));
    }

  }

  /**
   * 列举工作空间资源
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 获取Run的指标记录列表
   * 
   * @param request - ListRunMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRunMetricsResponse
   */
  async listRunMetricsWithOptions(RunId: string, request: ListRunMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListRunMetricsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.key)) {
      query["Key"] = request.key;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["PageToken"] = request.pageToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRunMetrics",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${$dara.URL.percentEncode(RunId)}/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRunMetricsResponse>(await this.callApi(params, req, runtime), new ListRunMetricsResponse({}));
    } else {
      return $dara.cast<ListRunMetricsResponse>(await this.execute(params, req, runtime), new ListRunMetricsResponse({}));
    }

  }

  /**
   * 获取Run的指标记录列表
   * 
   * @param request - ListRunMetricsRequest
   * @returns ListRunMetricsResponse
   */
  async listRunMetrics(RunId: string, request: ListRunMetricsRequest): Promise<ListRunMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRunMetricsWithOptions(RunId, request, headers, runtime);
  }

  /**
   * 获取Run列表
   * 
   * @param request - ListRunsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRunsResponse
   */
  async listRunsWithOptions(request: ListRunsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListRunsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!$dara.isNull(request.gmtCreateTime)) {
      query["GmtCreateTime"] = request.gmtCreateTime;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.orderBy)) {
      query["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pageToken)) {
      query["PageToken"] = request.pageToken;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRuns",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRunsResponse>(await this.callApi(params, req, runtime), new ListRunsResponse({}));
    } else {
      return $dara.cast<ListRunsResponse>(await this.execute(params, req, runtime), new ListRunsResponse({}));
    }

  }

  /**
   * 获取Run列表
   * 
   * @param request - ListRunsRequest
   * @returns ListRunsResponse
   */
  async listRuns(request: ListRunsRequest): Promise<ListRunsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRunsWithOptions(request, headers, runtime);
  }

  /**
   * 列出工作空间的可变为成员的用户
   * 
   * @param request - ListWorkspaceUsersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspaceUsersResponse
   */
  async listWorkspaceUsersWithOptions(WorkspaceId: string, request: ListWorkspaceUsersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListWorkspaceUsersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaceUsers",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListWorkspaceUsersResponse>(await this.callApi(params, req, runtime), new ListWorkspaceUsersResponse({}));
    } else {
      return $dara.cast<ListWorkspaceUsersResponse>(await this.execute(params, req, runtime), new ListWorkspaceUsersResponse({}));
    }

  }

  /**
   * 列出工作空间的可变为成员的用户
   * 
   * @param request - ListWorkspaceUsersRequest
   * @returns ListWorkspaceUsersResponse
   */
  async listWorkspaceUsers(WorkspaceId: string, request: ListWorkspaceUsersRequest): Promise<ListWorkspaceUsersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspaceUsersWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 获得工作空间列表
   * 
   * @param request - ListWorkspacesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkspacesResponse
   */
  async listWorkspacesWithOptions(request: ListWorkspacesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListWorkspacesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.fields)) {
      query["Fields"] = request.fields;
    }

    if (!$dara.isNull(request.moduleList)) {
      query["ModuleList"] = request.moduleList;
    }

    if (!$dara.isNull(request.option)) {
      query["Option"] = request.option;
    }

    if (!$dara.isNull(request.order)) {
      query["Order"] = request.order;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!$dara.isNull(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    if (!$dara.isNull(request.workspaceName)) {
      query["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListWorkspaces",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListWorkspacesResponse>(await this.callApi(params, req, runtime), new ListWorkspacesResponse({}));
    } else {
      return $dara.cast<ListWorkspacesResponse>(await this.execute(params, req, runtime), new ListWorkspacesResponse({}));
    }

  }

  /**
   * 获得工作空间列表
   * 
   * @param request - ListWorkspacesRequest
   * @returns ListWorkspacesResponse
   */
  async listWorkspaces(request: ListWorkspacesRequest): Promise<ListWorkspacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspacesWithOptions(request, headers, runtime);
  }

  /**
   * 批量记录Run的指标
   * 
   * @param request - LogRunMetricsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LogRunMetricsResponse
   */
  async logRunMetricsWithOptions(RunId: string, request: LogRunMetricsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<LogRunMetricsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.metrics)) {
      body["Metrics"] = request.metrics;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "LogRunMetrics",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${$dara.URL.percentEncode(RunId)}/metrics/action/log`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<LogRunMetricsResponse>(await this.callApi(params, req, runtime), new LogRunMetricsResponse({}));
    } else {
      return $dara.cast<LogRunMetricsResponse>(await this.execute(params, req, runtime), new LogRunMetricsResponse({}));
    }

  }

  /**
   * 批量记录Run的指标
   * 
   * @param request - LogRunMetricsRequest
   * @returns LogRunMetricsResponse
   */
  async logRunMetrics(RunId: string, request: LogRunMetricsRequest): Promise<LogRunMetricsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.logRunMetricsWithOptions(RunId, request, headers, runtime);
  }

  /**
   * 发布一个代码源配置为本工作空间下所有人可见
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishCodeSourceResponse
   */
  async publishCodeSourceWithOptions(CodeSourceId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PublishCodeSourceResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishCodeSource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources/${$dara.URL.percentEncode(CodeSourceId)}/publish`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PublishCodeSourceResponse>(await this.callApi(params, req, runtime), new PublishCodeSourceResponse({}));
    } else {
      return $dara.cast<PublishCodeSourceResponse>(await this.execute(params, req, runtime), new PublishCodeSourceResponse({}));
    }

  }

  /**
   * 发布一个代码源配置为本工作空间下所有人可见
   * @returns PublishCodeSourceResponse
   */
  async publishCodeSource(CodeSourceId: string): Promise<PublishCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishCodeSourceWithOptions(CodeSourceId, headers, runtime);
  }

  /**
   * 更新数据集
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishDatasetResponse
   */
  async publishDatasetWithOptions(DatasetId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PublishDatasetResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishDataset",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/publish`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PublishDatasetResponse>(await this.callApi(params, req, runtime), new PublishDatasetResponse({}));
    } else {
      return $dara.cast<PublishDatasetResponse>(await this.execute(params, req, runtime), new PublishDatasetResponse({}));
    }

  }

  /**
   * 更新数据集
   * @returns PublishDatasetResponse
   */
  async publishDataset(DatasetId: string): Promise<PublishDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishDatasetWithOptions(DatasetId, headers, runtime);
  }

  /**
   * 发布 Image
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishImageResponse
   */
  async publishImageWithOptions(ImageId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PublishImageResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishImage",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${$dara.URL.percentEncode(ImageId)}/publish`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PublishImageResponse>(await this.callApi(params, req, runtime), new PublishImageResponse({}));
    } else {
      return $dara.cast<PublishImageResponse>(await this.execute(params, req, runtime), new PublishImageResponse({}));
    }

  }

  /**
   * 发布 Image
   * @returns PublishImageResponse
   */
  async publishImage(ImageId: string): Promise<PublishImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishImageWithOptions(ImageId, headers, runtime);
  }

  /**
   * 删除 Image
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveImageResponse
   */
  async removeImageWithOptions(ImageId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RemoveImageResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveImage",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${$dara.URL.percentEncode(ImageId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveImageResponse>(await this.callApi(params, req, runtime), new RemoveImageResponse({}));
    } else {
      return $dara.cast<RemoveImageResponse>(await this.execute(params, req, runtime), new RemoveImageResponse({}));
    }

  }

  /**
   * 删除 Image
   * @returns RemoveImageResponse
   */
  async removeImage(ImageId: string): Promise<RemoveImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeImageWithOptions(ImageId, headers, runtime);
  }

  /**
   * 删除 Image 的标签
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveImageLabelsResponse
   */
  async removeImageLabelsWithOptions(ImageId: string, LabelKey: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RemoveImageLabelsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveImageLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${$dara.URL.percentEncode(ImageId)}/labels/${$dara.URL.percentEncode(LabelKey)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveImageLabelsResponse>(await this.callApi(params, req, runtime), new RemoveImageLabelsResponse({}));
    } else {
      return $dara.cast<RemoveImageLabelsResponse>(await this.execute(params, req, runtime), new RemoveImageLabelsResponse({}));
    }

  }

  /**
   * 删除 Image 的标签
   * @returns RemoveImageLabelsResponse
   */
  async removeImageLabels(ImageId: string, LabelKey: string): Promise<RemoveImageLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeImageLabelsWithOptions(ImageId, LabelKey, headers, runtime);
  }

  /**
   * 删除成员角色
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveMemberRoleResponse
   */
  async removeMemberRoleWithOptions(WorkspaceId: string, MemberId: string, RoleName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RemoveMemberRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveMemberRole",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/members/${$dara.URL.percentEncode(MemberId)}/roles/${$dara.URL.percentEncode(RoleName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RemoveMemberRoleResponse>(await this.callApi(params, req, runtime), new RemoveMemberRoleResponse({}));
    } else {
      return $dara.cast<RemoveMemberRoleResponse>(await this.execute(params, req, runtime), new RemoveMemberRoleResponse({}));
    }

  }

  /**
   * 删除成员角色
   * @returns RemoveMemberRoleResponse
   */
  async removeMemberRole(WorkspaceId: string, MemberId: string, RoleName: string): Promise<RemoveMemberRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeMemberRoleWithOptions(WorkspaceId, MemberId, RoleName, headers, runtime);
  }

  /**
   * 更新实验标签
   * 
   * @param request - SetExperimentLabelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetExperimentLabelsResponse
   */
  async setExperimentLabelsWithOptions(ExperimentId: string, request: SetExperimentLabelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SetExperimentLabelsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetExperimentLabels",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<SetExperimentLabelsResponse>(await this.callApi(params, req, runtime), new SetExperimentLabelsResponse({}));
    } else {
      return $dara.cast<SetExperimentLabelsResponse>(await this.execute(params, req, runtime), new SetExperimentLabelsResponse({}));
    }

  }

  /**
   * 更新实验标签
   * 
   * @param request - SetExperimentLabelsRequest
   * @returns SetExperimentLabelsResponse
   */
  async setExperimentLabels(ExperimentId: string, request: SetExperimentLabelsRequest): Promise<SetExperimentLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.setExperimentLabelsWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * 停止数据集任务
   * 
   * @param request - StopDatasetJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopDatasetJobResponse
   */
  async stopDatasetJobWithOptions(DatasetId: string, DatasetJobId: string, request: StopDatasetJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopDatasetJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetVersion)) {
      body["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopDatasetJob",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobs/${$dara.URL.percentEncode(DatasetJobId)}/action/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopDatasetJobResponse>(await this.callApi(params, req, runtime), new StopDatasetJobResponse({}));
    } else {
      return $dara.cast<StopDatasetJobResponse>(await this.execute(params, req, runtime), new StopDatasetJobResponse({}));
    }

  }

  /**
   * 停止数据集任务
   * 
   * @param request - StopDatasetJobRequest
   * @returns StopDatasetJobResponse
   */
  async stopDatasetJob(DatasetId: string, DatasetJobId: string, request: StopDatasetJobRequest): Promise<StopDatasetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopDatasetJobWithOptions(DatasetId, DatasetJobId, request, headers, runtime);
  }

  /**
   * 更新代码配置
   * 
   * @param request - UpdateCodeSourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCodeSourceResponse
   */
  async updateCodeSourceWithOptions(CodeSourceId: string, request: UpdateCodeSourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateCodeSourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.codeBranch)) {
      body["CodeBranch"] = request.codeBranch;
    }

    if (!$dara.isNull(request.codeCommit)) {
      body["CodeCommit"] = request.codeCommit;
    }

    if (!$dara.isNull(request.codeRepo)) {
      body["CodeRepo"] = request.codeRepo;
    }

    if (!$dara.isNull(request.codeRepoAccessToken)) {
      body["CodeRepoAccessToken"] = request.codeRepoAccessToken;
    }

    if (!$dara.isNull(request.codeRepoUserName)) {
      body["CodeRepoUserName"] = request.codeRepoUserName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!$dara.isNull(request.mountPath)) {
      body["MountPath"] = request.mountPath;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCodeSource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/codesources/${$dara.URL.percentEncode(CodeSourceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateCodeSourceResponse>(await this.callApi(params, req, runtime), new UpdateCodeSourceResponse({}));
    } else {
      return $dara.cast<UpdateCodeSourceResponse>(await this.execute(params, req, runtime), new UpdateCodeSourceResponse({}));
    }

  }

  /**
   * 更新代码配置
   * 
   * @param request - UpdateCodeSourceRequest
   * @returns UpdateCodeSourceResponse
   */
  async updateCodeSource(CodeSourceId: string, request: UpdateCodeSourceRequest): Promise<UpdateCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCodeSourceWithOptions(CodeSourceId, request, headers, runtime);
  }

  /**
   * 更新数据集
   * 
   * @param request - UpdateDatasetRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetResponse
   */
  async updateDatasetWithOptions(DatasetId: string, request: UpdateDatasetRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateDatasetResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.mountAccessReadWriteRoleIdList)) {
      body["MountAccessReadWriteRoleIdList"] = request.mountAccessReadWriteRoleIdList;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDataset",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDatasetResponse>(await this.callApi(params, req, runtime), new UpdateDatasetResponse({}));
    } else {
      return $dara.cast<UpdateDatasetResponse>(await this.execute(params, req, runtime), new UpdateDatasetResponse({}));
    }

  }

  /**
   * 更新数据集
   * 
   * @param request - UpdateDatasetRequest
   * @returns UpdateDatasetResponse
   */
  async updateDataset(DatasetId: string, request: UpdateDatasetRequest): Promise<UpdateDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatasetWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 批量更新数据集下的文件元数据记录
   * 
   * @param request - UpdateDatasetFileMetasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetFileMetasResponse
   */
  async updateDatasetFileMetasWithOptions(DatasetId: string, request: UpdateDatasetFileMetasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateDatasetFileMetasResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetFileMetas)) {
      body["DatasetFileMetas"] = request.datasetFileMetas;
    }

    if (!$dara.isNull(request.datasetVersion)) {
      body["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.tagJobId)) {
      body["TagJobId"] = request.tagJobId;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDatasetFileMetas",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetfilemetas`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDatasetFileMetasResponse>(await this.callApi(params, req, runtime), new UpdateDatasetFileMetasResponse({}));
    } else {
      return $dara.cast<UpdateDatasetFileMetasResponse>(await this.execute(params, req, runtime), new UpdateDatasetFileMetasResponse({}));
    }

  }

  /**
   * 批量更新数据集下的文件元数据记录
   * 
   * @param request - UpdateDatasetFileMetasRequest
   * @returns UpdateDatasetFileMetasResponse
   */
  async updateDatasetFileMetas(DatasetId: string, request: UpdateDatasetFileMetasRequest): Promise<UpdateDatasetFileMetasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatasetFileMetasWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * 更新数据集任务
   * 
   * @param request - UpdateDatasetJobRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetJobResponse
   */
  async updateDatasetJobWithOptions(DatasetId: string, DatasetJobId: string, request: UpdateDatasetJobRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateDatasetJobResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetVersion)) {
      body["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDatasetJob",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobs/${$dara.URL.percentEncode(DatasetJobId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDatasetJobResponse>(await this.callApi(params, req, runtime), new UpdateDatasetJobResponse({}));
    } else {
      return $dara.cast<UpdateDatasetJobResponse>(await this.execute(params, req, runtime), new UpdateDatasetJobResponse({}));
    }

  }

  /**
   * 更新数据集任务
   * 
   * @param request - UpdateDatasetJobRequest
   * @returns UpdateDatasetJobResponse
   */
  async updateDatasetJob(DatasetId: string, DatasetJobId: string, request: UpdateDatasetJobRequest): Promise<UpdateDatasetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatasetJobWithOptions(DatasetId, DatasetJobId, request, headers, runtime);
  }

  /**
   * 更新数据集任务配置
   * 
   * @param request - UpdateDatasetJobConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetJobConfigResponse
   */
  async updateDatasetJobConfigWithOptions(DatasetId: string, DatasetJobConfigId: string, request: UpdateDatasetJobConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateDatasetJobConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.config)) {
      body["Config"] = request.config;
    }

    if (!$dara.isNull(request.configType)) {
      body["ConfigType"] = request.configType;
    }

    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDatasetJobConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetjobconfigs/${$dara.URL.percentEncode(DatasetJobConfigId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDatasetJobConfigResponse>(await this.callApi(params, req, runtime), new UpdateDatasetJobConfigResponse({}));
    } else {
      return $dara.cast<UpdateDatasetJobConfigResponse>(await this.execute(params, req, runtime), new UpdateDatasetJobConfigResponse({}));
    }

  }

  /**
   * 更新数据集任务配置
   * 
   * @param request - UpdateDatasetJobConfigRequest
   * @returns UpdateDatasetJobConfigResponse
   */
  async updateDatasetJobConfig(DatasetId: string, DatasetJobConfigId: string, request: UpdateDatasetJobConfigRequest): Promise<UpdateDatasetJobConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatasetJobConfigWithOptions(DatasetId, DatasetJobConfigId, request, headers, runtime);
  }

  /**
   * 更新指定版本的数据集信息
   * 
   * @param request - UpdateDatasetVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDatasetVersionResponse
   */
  async updateDatasetVersionWithOptions(DatasetId: string, VersionName: string, request: UpdateDatasetVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateDatasetVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataCount)) {
      body["DataCount"] = request.dataCount;
    }

    if (!$dara.isNull(request.dataSize)) {
      body["DataSize"] = request.dataSize;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDatasetVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/datasets/${$dara.URL.percentEncode(DatasetId)}/versions/${$dara.URL.percentEncode(VersionName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDatasetVersionResponse>(await this.callApi(params, req, runtime), new UpdateDatasetVersionResponse({}));
    } else {
      return $dara.cast<UpdateDatasetVersionResponse>(await this.execute(params, req, runtime), new UpdateDatasetVersionResponse({}));
    }

  }

  /**
   * 更新指定版本的数据集信息
   * 
   * @param request - UpdateDatasetVersionRequest
   * @returns UpdateDatasetVersionResponse
   */
  async updateDatasetVersion(DatasetId: string, VersionName: string, request: UpdateDatasetVersionRequest): Promise<UpdateDatasetVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDatasetVersionWithOptions(DatasetId, VersionName, request, headers, runtime);
  }

  /**
   * 更新默认工作空间
   * 
   * @param request - UpdateDefaultWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateDefaultWorkspaceResponse
   */
  async updateDefaultWorkspaceWithOptions(request: UpdateDefaultWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateDefaultWorkspaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateDefaultWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/defaultWorkspaces`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateDefaultWorkspaceResponse>(await this.callApi(params, req, runtime), new UpdateDefaultWorkspaceResponse({}));
    } else {
      return $dara.cast<UpdateDefaultWorkspaceResponse>(await this.execute(params, req, runtime), new UpdateDefaultWorkspaceResponse({}));
    }

  }

  /**
   * 更新默认工作空间
   * 
   * @param request - UpdateDefaultWorkspaceRequest
   * @returns UpdateDefaultWorkspaceResponse
   */
  async updateDefaultWorkspace(request: UpdateDefaultWorkspaceRequest): Promise<UpdateDefaultWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDefaultWorkspaceWithOptions(request, headers, runtime);
  }

  /**
   * 更新实验
   * 
   * @param request - UpdateExperimentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateExperimentResponse
   */
  async updateExperimentWithOptions(ExperimentId: string, request: UpdateExperimentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateExperimentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateExperiment",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${$dara.URL.percentEncode(ExperimentId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateExperimentResponse>(await this.callApi(params, req, runtime), new UpdateExperimentResponse({}));
    } else {
      return $dara.cast<UpdateExperimentResponse>(await this.execute(params, req, runtime), new UpdateExperimentResponse({}));
    }

  }

  /**
   * 更新实验
   * 
   * @param request - UpdateExperimentRequest
   * @returns UpdateExperimentResponse
   */
  async updateExperiment(ExperimentId: string, request: UpdateExperimentRequest): Promise<UpdateExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  /**
   * 更新模型
   * 
   * @param request - UpdateModelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelResponse
   */
  async updateModelWithOptions(ModelId: string, request: UpdateModelRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateModelResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!$dara.isNull(request.domain)) {
      body["Domain"] = request.domain;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.modelDescription)) {
      body["ModelDescription"] = request.modelDescription;
    }

    if (!$dara.isNull(request.modelDoc)) {
      body["ModelDoc"] = request.modelDoc;
    }

    if (!$dara.isNull(request.modelName)) {
      body["ModelName"] = request.modelName;
    }

    if (!$dara.isNull(request.modelType)) {
      body["ModelType"] = request.modelType;
    }

    if (!$dara.isNull(request.orderNumber)) {
      body["OrderNumber"] = request.orderNumber;
    }

    if (!$dara.isNull(request.origin)) {
      body["Origin"] = request.origin;
    }

    if (!$dara.isNull(request.task)) {
      body["Task"] = request.task;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModel",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateModelResponse>(await this.callApi(params, req, runtime), new UpdateModelResponse({}));
    } else {
      return $dara.cast<UpdateModelResponse>(await this.execute(params, req, runtime), new UpdateModelResponse({}));
    }

  }

  /**
   * 更新模型
   * 
   * @param request - UpdateModelRequest
   * @returns UpdateModelResponse
   */
  async updateModel(ModelId: string, request: UpdateModelRequest): Promise<UpdateModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelWithOptions(ModelId, request, headers, runtime);
  }

  /**
   * 更新模型版本
   * 
   * @param request - UpdateModelVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateModelVersionResponse
   */
  async updateModelVersionWithOptions(ModelId: string, VersionName: string, request: UpdateModelVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateModelVersionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.approvalStatus)) {
      body["ApprovalStatus"] = request.approvalStatus;
    }

    if (!$dara.isNull(request.compressionSpec)) {
      body["CompressionSpec"] = request.compressionSpec;
    }

    if (!$dara.isNull(request.evaluationSpec)) {
      body["EvaluationSpec"] = request.evaluationSpec;
    }

    if (!$dara.isNull(request.extraInfo)) {
      body["ExtraInfo"] = request.extraInfo;
    }

    if (!$dara.isNull(request.inferenceSpec)) {
      body["InferenceSpec"] = request.inferenceSpec;
    }

    if (!$dara.isNull(request.metrics)) {
      body["Metrics"] = request.metrics;
    }

    if (!$dara.isNull(request.options)) {
      body["Options"] = request.options;
    }

    if (!$dara.isNull(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!$dara.isNull(request.trainingSpec)) {
      body["TrainingSpec"] = request.trainingSpec;
    }

    if (!$dara.isNull(request.versionDescription)) {
      body["VersionDescription"] = request.versionDescription;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateModelVersion",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/models/${$dara.URL.percentEncode(ModelId)}/versions/${$dara.URL.percentEncode(VersionName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateModelVersionResponse>(await this.callApi(params, req, runtime), new UpdateModelVersionResponse({}));
    } else {
      return $dara.cast<UpdateModelVersionResponse>(await this.execute(params, req, runtime), new UpdateModelVersionResponse({}));
    }

  }

  /**
   * 更新模型版本
   * 
   * @param request - UpdateModelVersionRequest
   * @returns UpdateModelVersionResponse
   */
  async updateModelVersion(ModelId: string, VersionName: string, request: UpdateModelVersionRequest): Promise<UpdateModelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModelVersionWithOptions(ModelId, VersionName, request, headers, runtime);
  }

  /**
   * 更新Run
   * 
   * @param request - UpdateRunRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateRunResponse
   */
  async updateRunWithOptions(RunId: string, request: UpdateRunRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateRunResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.params)) {
      body["Params"] = request.params;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateRun",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${$dara.URL.percentEncode(RunId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateRunResponse>(await this.callApi(params, req, runtime), new UpdateRunResponse({}));
    } else {
      return $dara.cast<UpdateRunResponse>(await this.execute(params, req, runtime), new UpdateRunResponse({}));
    }

  }

  /**
   * 更新Run
   * 
   * @param request - UpdateRunRequest
   * @returns UpdateRunResponse
   */
  async updateRun(RunId: string, request: UpdateRunRequest): Promise<UpdateRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRunWithOptions(RunId, request, headers, runtime);
  }

  /**
   * 更新工作空间
   * 
   * @param request - UpdateWorkspaceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspaceWithOptions(WorkspaceId: string, request: UpdateWorkspaceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateWorkspaceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspace",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateWorkspaceResponse>(await this.callApi(params, req, runtime), new UpdateWorkspaceResponse({}));
    } else {
      return $dara.cast<UpdateWorkspaceResponse>(await this.execute(params, req, runtime), new UpdateWorkspaceResponse({}));
    }

  }

  /**
   * 更新工作空间
   * 
   * @param request - UpdateWorkspaceRequest
   * @returns UpdateWorkspaceResponse
   */
  async updateWorkspace(WorkspaceId: string, request: UpdateWorkspaceRequest): Promise<UpdateWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkspaceWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 更新工作空间资源
   * 
   * @param request - UpdateWorkspaceResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkspaceResourceResponse
   */
  async updateWorkspaceResourceWithOptions(WorkspaceId: string, request: UpdateWorkspaceResourceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateWorkspaceResourceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.groupName)) {
      body["GroupName"] = request.groupName;
    }

    if (!$dara.isNull(request.isDefault)) {
      body["IsDefault"] = request.isDefault;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.productType)) {
      body["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.resourceIds)) {
      body["ResourceIds"] = request.resourceIds;
    }

    if (!$dara.isNull(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateWorkspaceResource",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/resources`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateWorkspaceResourceResponse>(await this.callApi(params, req, runtime), new UpdateWorkspaceResourceResponse({}));
    } else {
      return $dara.cast<UpdateWorkspaceResourceResponse>(await this.execute(params, req, runtime), new UpdateWorkspaceResourceResponse({}));
    }

  }

  /**
   * 更新工作空间资源
   * 
   * @param request - UpdateWorkspaceResourceRequest
   * @returns UpdateWorkspaceResourceResponse
   */
  async updateWorkspaceResource(WorkspaceId: string, request: UpdateWorkspaceResourceRequest): Promise<UpdateWorkspaceResourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWorkspaceResourceWithOptions(WorkspaceId, request, headers, runtime);
  }

}
