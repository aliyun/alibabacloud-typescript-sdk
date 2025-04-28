// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AddImageRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
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
   * @remarks
   * The tag key. The following keys can be added:
   * 
   * *   system.chipType
   * *   system.dsw.cudaVersion
   * *   system.dsw.fromImageId
   * *   system.dsw.fromInstanceId
   * *   system.dsw.id
   * *   system.dsw.os
   * *   system.dsw.osVersion
   * *   system.dsw.resourceType
   * *   system.dsw.rootImageId
   * *   system.dsw.stage
   * *   system.dsw.tag
   * *   system.dsw.type
   * *   system.framework
   * *   system.origin
   * *   system.pythonVersion
   * *   system.source
   * *   system.supported.dlc
   * *   system.supported.dsw
   * 
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
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
   * The list of roles.
   * 
   * This parameter is required.
   */
  roles?: string[];
  /**
   * @remarks
   * The member IDs. Multiple member IDs are separated by commas (,). You can call [ListMembers](https://help.aliyun.com/document_detail/449135.html) to obtain the member IDs.
   * 
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
   * @remarks
   * The display name.
   * 
   * @example
   * myDisplayName
   */
  displayName?: string;
  /**
   * @remarks
   * The member ID.
   * 
   * @example
   * 145883-21513926******88039
   */
  memberId?: string;
  /**
   * @remarks
   * The list of roles.
   */
  roles?: string[];
  /**
   * @remarks
   * The user ID.
   * 
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
   * @remarks
   * The property code.
   * 
   * @example
   * commodity_type
   */
  code?: string;
  /**
   * @remarks
   * The property name.
   */
  name?: string;
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * oss
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
   * @remarks
   * Specifies whether to automatically renew the product.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The billing method. Only POSTPAY is supported.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The purchase duration. You can use this parameter together with pricingCycle. Only 1 is supported.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The properties of the instance.
   * 
   * *   DataWorks_share: [ { "Code": "region", "Value": "cn-shanghai" } ]
   * *   OSS_share: [ { "Code": "commodity_type", "Value": "oss", "Name": "Object Storage Service" }, { "Code": "ord_time", "Value": "1:Hour", "Name": "1 Hour" } ]
   * *   PAI_share: None
   * *   China bid MaxCompute_share: [ { "Code": "region", "Value": "cn-hangzhou" }, { "Code": "odps_specification_type", "Value": "OdpsStandard" }, { "Code": "ord_time", "Value": "1:Hour" } ]
   * *   International bid MaxCompute_share: [ { "Code": "region", "Value": "cn-hangzhou" }, { "Code": "ord_time", "Value": "1:Hour" } ]
   */
  instanceProperties?: CreateProductOrdersRequestProductsInstanceProperties[];
  /**
   * @remarks
   * The type of the order. Only BUY is supported.
   * 
   * @example
   * BUY
   */
  orderType?: string;
  /**
   * @remarks
   * The billing cycle. Valid values:
   * 
   * *   Month: The price is calculated every month. DataWorks_share only supports Month.
   * *   Hour: The price is calculated every hour. OSS_share and MaxCompute_share only support Hour.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The product code. Valid values:
   * 
   * *   DataWorks_share: pay-as-you-go DataWorks
   * *   MaxCompute_share: pay-as-you-go MaxCompute
   * *   PAI_share: pay-as-you-go PAI.
   * *   OSS_share: pay-as-you-go OSS
   * 
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
  /**
   * @remarks
   * The label key.
   * 
   * @example
   * system.support.eas
   */
  key?: string;
  /**
   * @remarks
   * The label value.
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
   * The quota ID. You can call [ListQuotas](https://help.aliyun.com/document_detail/449144.html) to obtain the quota ID.
   * 
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

export class CreateWorkspaceResourceResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * The resource ID.
   * 
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

export class GetConfigResponseBodyLabels extends $dara.Model {
  /**
   * @example
   * key1
   */
  key?: string;
  /**
   * @example
   * value1
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

export class GetDefaultWorkspaceResponseBodyConditions extends $dara.Model {
  /**
   * @remarks
   * The returned status code. HTTP status code 200 indicates that the request was successful. Other HTTP status codes indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message. If the returned status code is 200, this parameter is empty.
   * 
   * @example
   * Create Failed
   */
  message?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * 
   * *   CREATING: The workspace is being created.
   * *   WORKSPACE_CREATED: The workspace is created.
   * *   MEMBERS_ADDED: The member is added.
   * *   ENABLED: The workspace is created and the member is added.
   * 
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
   * @remarks
   * The user ID.
   * 
   * @example
   * 17915******4216
   */
  userId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 17915******4216
   */
  userKp?: string;
  /**
   * @remarks
   * The username.
   * 
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
   * @remarks
   * The tag key.
   * 
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
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
   * @remarks
   * The accessibility. Valid values:
   * 
   * *   PUBLIC: All members can access the workspace.
   * *   PRIVATE: Only the creator can access the workspace.
   * *   ANY: All users can access the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The access type. If you set Accessibility to PUBLIC, all users can access the workspace. This parameter is invalid. If you set Accessibility to PRIVATE, the value of this parameter can be:
   * 
   * *   PRIVATE: Only the creator can access the workspace.
   * *   ANY: All users can access the workspace.
   * 
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
   * @remarks
   * The display name.
   * 
   * @example
   * mings****t
   */
  displayName?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1157******94123
   */
  userId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1157******94123
   */
  userKp?: string;
  /**
   * @remarks
   * The username.
   * 
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

export class ListConfigsResponseBodyConfigsLabels extends $dara.Model {
  /**
   * @example
   * key1
   */
  key?: string;
  /**
   * @example
   * value1
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

export class ListConfigsResponseBodyConfigs extends $dara.Model {
  /**
   * @example
   * tempTableLifecycle
   */
  configKey?: string;
  /**
   * @example
   * oss://***
   */
  configValue?: string;
  labels?: ListConfigsResponseBodyConfigsLabels[];
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
      configValue: 'string',
      labels: { 'type': 'array', 'itemType': ListConfigsResponseBodyConfigsLabels },
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

export class ListExperimentRequestOptions extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to exactly match the experiment by name. Valid values: true and false.
   * 
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
   * @remarks
   * The tag key.
   * 
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
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
   * @remarks
   * The tag key.
   * 
   * @example
   * system.chipType
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
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
   * @remarks
   * The accessibility of the image. Valid values:
   * 
   * *   PUBLIC: All members can access the image.
   * *   PRIVATE: Only the creator can access the image.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The time when the image is created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the image is modified, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * image-tzi7f9******s45t
   */
  imageId?: string;
  /**
   * @remarks
   * The image address, which includes the version number.
   */
  imageUri?: string;
  /**
   * @remarks
   * The image tags.
   */
  labels?: ListImagesResponseBodyImagesLabels[];
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * tensorflow_2.9
   */
  name?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 15577******82932
   */
  parentUserId?: string;
  /**
   * @remarks
   * The image size. Unit: GB.
   * 
   * @example
   * 2
   */
  size?: number;
  /**
   * @remarks
   * 镜像来源 ID
   */
  sourceId?: string;
  /**
   * @remarks
   * 镜像来源类型
   */
  sourceType?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 15577******82932
   */
  userId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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
      sourceId: 'SourceId',
      sourceType: 'SourceType',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMembersResponseBodyMembers extends $dara.Model {
  accountName?: string;
  /**
   * @remarks
   * The display name of the member.
   * 
   * @example
   * myDisplayName
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the user is created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The member ID.
   * 
   * @example
   * 14588*****51688039
   */
  memberId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * user1
   */
  memberName?: string;
  /**
   * @remarks
   * The list of roles.
   */
  roles?: string[];
  /**
   * @remarks
   * The user ID.
   * 
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

export class ListModelsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * value1
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

export class ListPermissionsResponseBodyPermissionsPermissionRules extends $dara.Model {
  /**
   * @remarks
   * The accessibility of the permission rule. Valid values:
   * 
   * *   PUBLIC: All members in the workspace can access the permission rule.
   * *   PRIVATE: Only the creator can access the permission rule.
   * *   ANY: All users can access the permission rule.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The type of access. If you set Accessibility to PUBLIC, all users can access the workspace. This parameter is invalid. If you set Accessibility to PRIVATE, the permissions are determined based on the value of EntityAccessType. The value of EntityAccessType can be:
   * 
   * *   CREATOR: Only the creator can access the workspace.
   * *   ANY: All users can access the workspace.
   * 
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
   * @remarks
   * The permission name, which is unique in a region. For more information about permissions, see [Appendix: Roles and permissions](https://help.aliyun.com/document_detail/2840449.html). The example value PaiDLC:GetTensorboard indicates the permission to view details about a TensorBoard job on the Deep Learning Containers (DLC) page.
   * 
   * @example
   * PaiDLC:GetTensorboard
   */
  permissionCode?: string;
  /**
   * @remarks
   * The permission rules.
   */
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
   * @remarks
   * The specification name.
   * 
   * @example
   * cu
   */
  name?: string;
  /**
   * @remarks
   * The specification type. The parameter can be left empty.
   * 
   * @example
   * string
   */
  type?: string;
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
   * 1828233
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
   * isolate
   */
  mode?: string;
  /**
   * @remarks
   * The quota name.
   * 
   * @example
   * quota-name
   */
  name?: string;
  /**
   * @remarks
   * The product code. Valid values:
   * 
   * *   PAI_isolate: CPU subscription resource groups of PAI
   * *   PAI_share: GPU pay-as-you-go resource groups of PAI
   * 
   * @example
   * MaxCompute_share
   */
  productCode?: string;
  /**
   * @remarks
   * The quota type. Valid value:
   * 
   * PAI: indicates GPU resource groups of MaxCompute.
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

export class ListUserConfigsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The category. Currently, only DataPrivacyConfig is supported.
   * 
   * @example
   * DataPrivacyConfig
   */
  categoryName?: string;
  /**
   * @remarks
   * The key of the configuration item.
   * 
   * @example
   * customizePAIAssumedRole
   */
  configKey?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * role
   */
  configValue?: string;
  /**
   * @remarks
   * The scope. Currently, subUser and owner are supported.
   * 
   * @example
   * subUser
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      configKey: 'string',
      configValue: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspaceUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1611******3000
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
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
  /**
   * @remarks
   * The names of the administrator accounts.
   */
  adminNames?: string[];
  /**
   * @remarks
   * The user ID of the creator.
   * 
   * @example
   * 122424353535
   */
  creator?: string;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * workspace description example
   */
  description?: string;
  /**
   * @remarks
   * The environment types of the workspace.
   */
  envTypes?: string[];
  /**
   * @remarks
   * the additional information. Only contains TenantId.
   * 
   * @example
   * {"TenantId": "4286******98"}
   */
  extraInfos?: { [key: string]: any };
  /**
   * @remarks
   * The time when the workspace was created. The time (UTC+0) follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ss.SSSZ format.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the workspace was modified. The time (UTC+0) follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ss.SSSZ format.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Indicates whether the workspace is the default workspace.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The status of the workspace.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * workspace-example
   */
  workspaceName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmwp7rky****
   */
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

export class SetUserConfigsRequestConfigs extends $dara.Model {
  /**
   * @remarks
   * The category. Currently, only DataPrivacyConfig is supported.
   * 
   * @example
   * DataPrivacyConfig
   */
  categoryName?: string;
  /**
   * @remarks
   * The key of the configuration item.
   * 
   * @example
   * customizePAIAssumedRole
   */
  configKey?: string;
  /**
   * @remarks
   * The value of the configuration item.
   * 
   * @example
   * role
   */
  configValue?: string;
  /**
   * @remarks
   * The scope. Currently, subUser and owner are supported.
   * 
   * @example
   * owner
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      configKey: 'string',
      configValue: 'string',
      scope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigRequestLabels extends $dara.Model {
  /**
   * @example
   * key1
   */
  key?: string;
  /**
   * @example
   * value1
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

export class UpdateConfigsRequestConfigsLabels extends $dara.Model {
  /**
   * @example
   * key1
   */
  key?: string;
  /**
   * @example
   * value1
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

export class UpdateConfigsRequestConfigs extends $dara.Model {
  /**
   * @example
   * CommonResourceConfig
   */
  categoryName?: string;
  /**
   * @example
   * tempStoragePath
   */
  configKey?: string;
  /**
   * @example
   * oss://test/s/
   */
  configValue?: string;
  labels?: UpdateConfigsRequestConfigsLabels[];
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      configKey: 'string',
      configValue: 'string',
      labels: { 'type': 'array', 'itemType': UpdateConfigsRequestConfigsLabels },
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

export class UpdateWorkspaceResourceRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * system.******
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * True
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
   * image/jpeg
   */
  contentType?: string;
  /**
   * @example
   * 12
   */
  dataSize?: number;
  datasetFileMetaId?: string;
  downloadUrl?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  fileCreateTime?: string;
  fileFingerPrint?: string;
  /**
   * @example
   * car.png
   */
  fileName?: string;
  /**
   * @example
   * image
   */
  fileType?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  fileUpdateTime?: string;
  /**
   * @example
   * {     "ImageHeight": 400,     "ImageWidth": 800 }
   */
  metaAttributes?: string;
  /**
   * @example
   * 0.6
   */
  score?: number;
  semanticIndexJobId?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  semanticIndexUpdateTime?: string;
  tags?: string;
  thumbnailUrl?: string;
  /**
   * @example
   * oss://test-bucket/dataset/car.png
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      dataSize: 'DataSize',
      datasetFileMetaId: 'DatasetFileMetaId',
      downloadUrl: 'DownloadUrl',
      fileCreateTime: 'FileCreateTime',
      fileFingerPrint: 'FileFingerPrint',
      fileName: 'FileName',
      fileType: 'FileType',
      fileUpdateTime: 'FileUpdateTime',
      metaAttributes: 'MetaAttributes',
      score: 'Score',
      semanticIndexJobId: 'SemanticIndexJobId',
      semanticIndexUpdateTime: 'SemanticIndexUpdateTime',
      tags: 'Tags',
      thumbnailUrl: 'ThumbnailUrl',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      dataSize: 'number',
      datasetFileMetaId: 'string',
      downloadUrl: 'string',
      fileCreateTime: 'string',
      fileFingerPrint: 'string',
      fileName: 'string',
      fileType: 'string',
      fileUpdateTime: 'string',
      metaAttributes: 'string',
      score: 'number',
      semanticIndexJobId: 'string',
      semanticIndexUpdateTime: 'string',
      tags: 'string',
      thumbnailUrl: 'string',
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
   * 2021-01-12T14:36:01.000Z
   */
  fileCreateTime?: string;
  fileName?: string;
  fileType?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  fileUpdateTime?: string;
  metaAttributes?: string;
  semanticIndexJobId?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  semanticIndexUpdateTime?: string;
  /**
   * @example
   * ● 执行算法打标更新（必须设置有效的TagJobId）： {    "ai":["车道线", "水马", "晴天"] } ● 用户手动打标：(add/remove表示对标签组内的标签进行增加/删除操作) 用户可操作的标签组为：   ○ user: 对单个元数据，用户自行添加的标签名列表。   ○ user-delete-ai-tags: 对单个元数据，算法标签组中用户需要删除的标签名列表。 {     "user":{         "add":["车道线","晴天"],         "remove":["水马"]     },     "user-delete-ai-tags":{         "add": ["地面阴影"],         "remove": []     } }
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
      semanticIndexJobId: 'SemanticIndexJobId',
      semanticIndexUpdateTime: 'SemanticIndexUpdateTime',
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
      semanticIndexJobId: 'string',
      semanticIndexUpdateTime: 'string',
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
   * 2021-01-12T14:36:01.000Z
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
   * 2021-01-12T14:36:01.000Z
   */
  fileUpdateTime?: string;
  metaAttributes?: string;
  /**
   * @example
   * {"user":{"add":["cat"]}}
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
   * 2021-01-12T14:36:01.000Z
   */
  fileCreateTime?: string;
  fileDir?: string;
  fileFingerPrint?: string;
  fileName?: string;
  fileType?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  fileUpdateTime?: string;
  metaAttributes?: string;
  semanticIndexJobId?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  semanticIndexUpdateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2021-01-12T14:36:01.000Z
   */
  tagUpdateTime?: string;
  tags?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      contentType: 'ContentType',
      dataSize: 'DataSize',
      datasetFileMetaId: 'DatasetFileMetaId',
      fileCreateTime: 'FileCreateTime',
      fileDir: 'FileDir',
      fileFingerPrint: 'FileFingerPrint',
      fileName: 'FileName',
      fileType: 'FileType',
      fileUpdateTime: 'FileUpdateTime',
      metaAttributes: 'MetaAttributes',
      semanticIndexJobId: 'SemanticIndexJobId',
      semanticIndexUpdateTime: 'SemanticIndexUpdateTime',
      tagUpdateTime: 'TagUpdateTime',
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
      fileDir: 'string',
      fileFingerPrint: 'string',
      fileName: 'string',
      fileType: 'string',
      fileUpdateTime: 'string',
      metaAttributes: 'string',
      semanticIndexJobId: 'string',
      semanticIndexUpdateTime: 'string',
      tagUpdateTime: 'string',
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

export class DatasetFileMetasStat extends $dara.Model {
  /**
   * @example
   * 10
   */
  count?: number;
  /**
   * @example
   * cat
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
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
  tags?: Label[];
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
      tags: 'Tags',
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
      tags: { 'type': 'array', 'itemType': Label },
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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
   * @remarks
   * The event content in the message.
   * 
   * @example
   * {"eventCode":"d****ct","projectId":"8***6","tenantId":4*******8,"operator":"115*****901"}
   */
  data?: { [key: string]: any };
  /**
   * @remarks
   * The message ID. You can obtain the ID from the message received when an extension point event is triggered. For more information about the message format, see [Message formats](https://help.aliyun.com/document_detail/436911.html).
   * 
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
   * @remarks
   * The request ID.
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
   * @remarks
   * The accessibility of the image. Valid values:
   * 
   * *   PUBLIC: The image is accessible to all members in the workspace.
   * *   PRIVATE: The image is accessible only to the image creator.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The image description.
   */
  description?: string;
  /**
   * @remarks
   * The image ID. If you do not specify this parameter, the system automatically generates an image ID. The image ID must start with image- followed by 18 characters in letters or digits.
   * 
   * @example
   * image-k83*****cv
   */
  imageId?: string;
  /**
   * @remarks
   * The URL of the image, which can be repeated. You can call [ListImage](https://help.aliyun.com/document_detail/449118.html) to view the image URL.
   * 
   * This parameter is required.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.com/pai-compression/nlp:gpu
   */
  imageUri?: string;
  /**
   * @remarks
   * The image tag, which is an array. Each element in the array contains a key-value pair. Alibaba Cloud images have the system.official=true tag. You can add the following keys to an image:
   * 
   * *   system.chipType
   * *   system.dsw.cudaVersion
   * *   system.dsw.fromImageId
   * *   system.dsw.fromInstanceId
   * *   system.dsw.id
   * *   system.dsw.os
   * *   system.dsw.osVersion
   * *   system.dsw.resourceType
   * *   system.dsw.rootImageId
   * *   system.dsw.stage
   * *   system.dsw.tag
   * *   system.dsw.type
   * *   system.framework
   * *   system.origin
   * *   system.pythonVersion
   * *   system.source
   * *   system.supported.dlc
   * *   system.supported.dsw
   */
  labels?: AddImageRequestLabels[];
  /**
   * @remarks
   * The image name. The name must meet the following requirements:
   * 
   * *   The name must be 1 to 50 characters in length.
   * *   The name can contain lowercase letters, digits, and hyphens (-). The name must start with a lowercase letter.
   * *   The name must be unique in a workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * nlp-compression
   */
  name?: string;
  /**
   * @remarks
   * The size of the image. Unit: GB.
   * 
   * @example
   * 2
   */
  size?: number;
  sourceId?: string;
  sourceType?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
      sourceId: 'SourceId',
      sourceType: 'SourceType',
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
      sourceId: 'string',
      sourceType: 'string',
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
   * @remarks
   * The image ID.
   * 
   * @example
   * image-4c62******53uor
   */
  imageId?: string;
  /**
   * @remarks
   * The request ID.
   * 
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
   * The list of image tags.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The ID of the target resource group. For information about how to obtain the ID of a resource group, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-df********534dy
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The resource ID, which is the workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * @example
   * 12**56
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource group type, which must be set to workspace.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The visibility of the code build. Valid values:
   * 
   * *   PUBLIC: The code build is visible to all members in the workspace.
   * *   PRIVATE: The code build is visible only to you and the administrator of the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The code branch.
   * 
   * @example
   * master
   */
  codeBranch?: string;
  codeCommit?: string;
  /**
   * @remarks
   * The URL of the code repository.
   * 
   * @example
   * https://code.aliyun.com/******
   */
  codeRepo?: string;
  /**
   * @remarks
   * The token used to access the code repository.
   * 
   * @example
   * ***
   */
  codeRepoAccessToken?: string;
  /**
   * @remarks
   * The username of the code repository.
   * 
   * @example
   * use***
   */
  codeRepoUserName?: string;
  /**
   * @remarks
   * The description of the code build, which helps you distinguish between code builds.
   * 
   * @example
   * code source of dlc examples
   */
  description?: string;
  /**
   * @remarks
   * The name of the code build.
   * 
   * This parameter is required.
   * 
   * @example
   * MyCodeSource1
   */
  displayName?: string;
  /**
   * @remarks
   * The local mount path of the code. By default, the code is mounted to the /root/code/ path.
   * 
   * @example
   * /root/code/code-source-1
   */
  mountPath?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
   * @remarks
   * The ID of the created code build.
   * 
   * @example
   * code-20********
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The visibility of the workspace. Valid values:
   * 
   * *   PRIVATE (default): The workspace is visible only to you and the administrator of the workspace.
   * *   PUBLIC: The workspace is visible to all users.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The number of dataset files.
   * 
   * @example
   * 500
   */
  dataCount?: number;
  /**
   * @remarks
   * The size of the dataset file. Unit: bytes.
   * 
   * @example
   * 10000
   */
  dataSize?: number;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   OSS: Object Storage Service (OSS).
   * *   NAS: File Storage NAS (NAS).
   * 
   * This parameter is required.
   * 
   * @example
   * NAS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The type of the dataset. Default value: COMMON. Valid values:
   * 
   * *   COMMON: common
   * *   PIC: picture
   * *   TEXT: text
   * *   Video: video
   * *   AUDIO: audio
   * 
   * @example
   * COMMON
   */
  dataType?: string;
  /**
   * @remarks
   * The description of the dataset. Descriptions are used to differentiate datasets.
   */
  description?: string;
  /**
   * @remarks
   * The dataset configurations to be imported to a storage, such as OSS, NAS, or Cloud Parallel File Storage (CPFS).
   * 
   * **OSS**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "bucket": "${bucket}",//The bucket name\\
   * "path": "${path}" // The file path\\
   * }\\
   * 
   * 
   * **NAS**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "fileSystemId": "${file_system_id}", // The file system ID\\
   * "path": "${path}", // The file system path\\
   * "mountTarget": "${mount_target}" // The mount point of the file system\\
   * }\\
   * 
   * 
   * **CPFS**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "fileSystemId": "${file_system_id}", // The file system ID\\
   * "protocolServiceId":"${protocol_service_id}", // The file system protocol service\\
   * "exportId": "${export_id}", // The file system export directory\\
   * "path": "${path}", // The file system path\\
   * }\\
   * 
   * 
   * **CPFS for Lingjun**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "fileSystemId": "${file_system_id}", // The file system ID\\
   * "path": "${path}", // The file system path\\
   * "mountTarget": "${mount_target}" // The mount point of the file system, CPFS for Lingjun only\\
   * "isVpcMount": boolean, // Whether the mount point is a virtual private cloud (VPC) mount point, CPFS for Lingjun only\\
   * }\\
   * 
   * @example
   * {
   *     "region": "cn-wulanchabu",
   *     "fileSystemId": "bmcpfs-xxxxxxxxxxx",
   *     "path": "/mnt",
   *     "mountTarget": "cpfs-xxxxxxxxxxxx-vpc-gacs9f.cn-wulanchabu.cpfs.aliyuncs.com",
   *     "isVpcMount": true
   * }
   */
  importInfo?: string;
  /**
   * @remarks
   * The tags.
   */
  labels?: Label[];
  /**
   * @remarks
   * The list of role names in the workspace that have read and write permissions on the mounted database. The names start with PAI are basic role names and the names start with role- are custom role names. If the list contains asterisks (\\*), all roles have read and write permissions.
   * 
   * *   If you set the value to ["PAI.AlgoOperator", "role-hiuwpd01ncrokkgp21"], the account of the specified role is granted the read and write permissions.
   * *   If you set the value to ["\\*"], all accounts are granted the read and write permissions.
   * *   If you set the value to [], only the creator of the dataset has the read and write permissions.
   */
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @remarks
   * The dataset name. The name must meet the following requirements:
   * 
   * *   The name must start with a letter, digit, or Chinese character.
   * *   The name can contain underscores (_) and hyphens (-).
   * *   The name must be 1 to 127 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The extended field, which is a JSON string. When you use the dataset in Deep Learning Containers (DLC), you can configure the mountPath field to specify the default mount path of the dataset.
   * 
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The property of the dataset. Valid values:
   * 
   * *   FILE
   * *   DIRECTORY
   * 
   * This parameter is required.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @remarks
   * The dataset provider. The value cannot be set to pai.
   * 
   * @example
   * Github
   */
  provider?: string;
  /**
   * @remarks
   * The source type of the dataset. Valid values:
   * 
   * *   Ecs (default)
   * *   Lingjun
   * 
   * @example
   * Ecs
   */
  providerType?: string;
  /**
   * @remarks
   * The ID of the source dataset of the labeled dataset.
   * 
   * @example
   * d-bvfasdfxxxxj8o411
   */
  sourceDatasetId?: string;
  /**
   * @remarks
   * The version of the source dataset of the labeled dataset.
   * 
   * @example
   * v2
   */
  sourceDatasetVersion?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * *   If SourceType is set to USER, the value of SourceId can be a custom string.
   * *   If SourceType is set to ITAG, the value of SourceId is the ID of the labeling job of iTAG.
   * *   If SourceType is set to PAI_PUBLIC_DATASET, the value of SourceId is empty by default.
   * 
   * @example
   * jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the data source. Default value: USER. Valid values:
   * 
   * *   PAI-PUBLIC-DATASET: a public dataset of Platform for AI (PAI).
   * *   ITAG: a dataset generated from a labeling job of iTAG.
   * *   USER: a dataset registered by a user.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The URI of the data source.
   * 
   * *   Value format when DataSourceType is set to OSS: `oss://bucket.endpoint/object`.
   * *   Value formats when DataSourceType is set to NAS: General-purpose NAS: `nas://<nasfisid>.region/subpath/to/dir/`. CPFS 1.0: `nas://<cpfs-fsid>.region/subpath/to/dir/`. CPFS 2.0: `nas://<cpfs-fsid>.region/<protocolserviceid>/`. You can distinguish CPFS 1.0 and CPFS 2.0 file systems based on the format of the file system ID: The ID for CPFS 1.0 is in the cpfs-<8-bit ASCII characters> format. The ID for CPFS 2.0 is in the cpfs-<16-bit ASCII characters> format.
   * 
   * This parameter is required.
   * 
   * @example
   * nas://09f****f2.cn-hangzhou/
   */
  uri?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the dataset belongs. The workspace owner and administrator have permissions to create datasets for specified members in the workspace.
   * 
   * @example
   * 2485765****023475
   */
  userId?: string;
  /**
   * @remarks
   * The description of the dataset of the initial version.
   * 
   * @example
   * The initial version
   */
  versionDescription?: string;
  /**
   * @remarks
   * The list of tags to be added to the dataset of the initial version.
   */
  versionLabels?: Label[];
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID. If you do not specify this parameter, the default workspace is used. If the default workspace does not exist, an error is reported.
   * 
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
   * @remarks
   * The dataset ID.
   * 
   * @example
   * d-rbvg5*****jhc9ks92
   */
  datasetId?: string;
  /**
   * @remarks
   * The request ID.
   * 
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
   * The metadata of the file.
   * 
   * This parameter is required.
   */
  datasetFileMetas?: DatasetFileMetaContentCreate[];
  /**
   * @remarks
   * The dataset version name.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
  /**
   * @remarks
   * The metadata that failed to be created.
   */
  failedDetails?: DatasetFileMetaResponse[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the metadata records of all dataset files were created. The value true indicates that the metadata records of all dataset files are created. If the value is false, view the failure details specified by FailedDetails.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  status?: boolean;
  /**
   * @remarks
   * The metadata that is created.
   */
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
   * @remarks
   * The dataset version.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The job description.
   */
  description?: string;
  /**
   * @remarks
   * The job action.
   * 
   * Valid values:
   * 
   * *   SemanticIndex
   * *   IntelligentTag
   * *   FileMetaExport
   * 
   * This parameter is required.
   * 
   * @example
   * SemanticIndex
   */
  jobAction?: string;
  /**
   * @remarks
   * The job mode.
   * 
   * Valid values:
   * 
   * *   Full: full mode.
   * 
   * @example
   * Full
   */
  jobMode?: string;
  /**
   * @remarks
   * The job configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * {\\"modelId\\":\\"xxx\\"}
   */
  jobSpec?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
   * @remarks
   * The ID of the dataset job.
   * 
   * @example
   * dsjob-9jx1******uj9e
   */
  datasetJobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
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
   * The configuration content. Format:
   * 
   * *   MultimodalIntelligentTag
   * 
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   * 
   * *   MultimodalSemanticIndex
   * 
   * { "defaultModelId": "xxx" "defaultModelVersion":"1.0.0" }
   * 
   * This parameter is required.
   * 
   * @example
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   */
  config?: string;
  /**
   * @remarks
   * The configuration type.
   * 
   * Valid values:
   * 
   * *   MultimodalIntelligentTag
   * *   MultimodalSemanticIndex
   * 
   * This parameter is required.
   * 
   * @example
   * MultimodalIntelligentTag
   */
  configType?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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
   * @remarks
   * The configuration ID.
   * 
   * @example
   * dscfg-xxxxxxxxxxxxxx
   */
  datasetJobConfigId?: string;
  /**
   * @remarks
   * The request ID.
   * 
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
  /**
   * @remarks
   * The tags.
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

export class CreateDatasetLabelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The number of dataset files.
   * 
   * @example
   * 300
   */
  dataCount?: number;
  /**
   * @remarks
   * The size of the dataset file. Unit: bytes.
   * 
   * @example
   * 19000
   */
  dataSize?: number;
  /**
   * @remarks
   * The type of the data source. Separate multiple types with commas (,). Valid values:
   * 
   * *   NAS: File Storage NAS (NAS).
   * *   OSS: Object Storage Service (OSS).
   * *   CPFS
   * 
   * Note: The DataSourceType value of a dataset version must be the same as that of the dataset. When you create a dataset version, the system checks whether the values are the same.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The description of the dataset. Descriptions are used to differentiate datasets.
   */
  description?: string;
  /**
   * @remarks
   * The dataset storage import configurations, such as OSS, NAS, and CPFS.
   * 
   * **OSS**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "bucket": "${bucket}",//The bucket name\\
   * "path": "${path}" // The file path\\
   * }\\
   * 
   * 
   * **NAS**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "fileSystemId": "${file_system_id}", // The file system ID\\
   * "path": "${path}", // The file system path\\
   * "mountTarget": "${mount_target}" // The mount point of the file system\\
   * }\\
   * 
   * 
   * **CPFS**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "fileSystemId": "${file_system_id}", // The file system ID\\
   * "protocolServiceId":"${protocol_service_id}", // The file system protocol service\\
   * "exportId": "${export_id}", // The file system export directory\\
   * "path": "${path}", // The file system path\\
   * }\\
   * 
   * 
   * **CPFS for Lingjun**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "fileSystemId": "${file_system_id}", // The file system ID\\
   * "path": "${path}", // The ile system path\\
   * "mountTarget": "${mount_target}" // The mount point of the file system, CPFS for Lingjun only\\
   * "isVpcMount": boolean, // Whether the mount point is a VPC mount point, CPFS for Lingjun only\\
   * }\\
   * 
   * @example
   * {
   *     "region": "cn-wulanchabu",
   *     "fileSystemId": "bmcpfs-xxxxxxxxxxx",
   *     "path": "/mnt",
   *     "mountTarget": "cpfs-xxxxxxxxxxxx-vpc-gacs9f.cn-wulanchabu.cpfs.aliyuncs.com",
   *     "isVpcMount": true
   * }
   */
  importInfo?: string;
  /**
   * @remarks
   * The tags of the dataset version.
   */
  labels?: Label[];
  /**
   * @remarks
   * The extended field, which is of the JsonString type. When you use the dataset in Deep Learning Containers (DLC), you can use the mountPath field to specify the default mount path of the dataset.
   * 
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The property of the dataset. Valid values:
   * 
   * *   FILE
   * *   DIRECTORY
   * 
   * This parameter is required.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @remarks
   * The ID of the data source.
   * 
   * *   If SourceType is set to USER, the value of SourceId can be a custom string.
   * *   If SourceType is set to ITAG, the value of SourceId is the ID of the labeling job of iTAG.
   * *   If SourceType is set to PAI_PUBLIC_DATASET, SourceId is empty by default.
   * 
   * @example
   * d-a0xbe5n03bhqof46ce
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the data source. Default value: USER. Valid values:
   * 
   * *   PAI-PUBLIC-DATASET: a public dataset of Platform for AI (PAI).
   * *   ITAG: a dataset generated from a labeling job of iTAG.
   * *   USER: a dataset registered by a user.
   * 
   * For each job type:
   * 
   * *   PAI_PUBLIC_DATASET: PAI_PUBLIC_DATASET.
   * *   ITAG: ITAG.
   * *   USER: USER.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * Example format:
   * 
   * *   Value format when DataSourceType is set to OSS: `oss://bucket.endpoint/object`.
   * *   Value formats when DataSourceType is set to NAS: General-purpose NAS: `nas://<nasfisid>.region/subpath/to/dir/`. CPFS 1.0: `nas://<cpfs-fsid>.region/subpath/to/dir/`. CPFS 2.0: `nas://<cpfs-fsid>.region/<protocolserviceid>/`. You can distinguish CPFS 1.0 and CPFS 2.0 file systems based on the format of the file system ID: The ID for CPFS 1.0 is in the cpfs-<8-bit ASCII characters> format. The ID for CPFS 2.0 is in the cpfs-<16-bit ASCII characters> format.
   * 
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
  /**
   * @remarks
   * Id of the request
   */
  requestId?: string;
  /**
   * @remarks
   * The dataset version name.
   * 
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
   * The tags.
   * 
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
  /**
   * @remarks
   * Id of the request
   * 
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
   * @remarks
   * The visibility of the experiment. Valid values: PRIVATE (the experiment is visible only to the creator and the Alibaba Cloud account) and PUBLIC (the experiment is visible to all users). This parameter is optional and the default value is PRIVATE.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The default artifact output path of all jobs that are associated with the experiment. Only Object Storage Service (OSS) paths are supported.
   * 
   * @example
   * oss://test-bucket.oss-cn-hangzhou.aliyuncs.com/test
   */
  artifactUri?: string;
  /**
   * @remarks
   * The tags.
   */
  labels?: LabelInfo[];
  /**
   * @remarks
   * The experiment name. The name must meet the following requirements:
   * 
   * *   The name must start with a letter.
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must be 1 to 63 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * exp-test
   */
  name?: string;
  /**
   * @remarks
   * The workspace ID.
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
  /**
   * @remarks
   * The returned data. If the operation is asynchronously implemented, the job ID is returned.
   */
  experimentId?: string;
  /**
   * @remarks
   * The ID of the request.
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
   * The members.
   * 
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
  /**
   * @remarks
   * The returned members.
   */
  members?: CreateMemberResponseBodyMembers[];
  /**
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The visibility of the model in the workspace. Valid values:
   * 
   * *   PRIVATE (default): Visible only to you and the administrator of the workspace.
   * *   PUBLIC: Vvisible to all users in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The domain of the model. Describes the domain in which the model is for. Example: nlp (natural language processing), cv (computer vision), and others.
   * 
   * @example
   * nlp
   */
  domain?: string;
  /**
   * @remarks
   * Other information about the model.
   * 
   * @example
   * {
   * 	"RatingCount": 2866,
   * 	"Rating": 4.94,
   * 	"FavoriteCount": 34992,
   * 	"CommentCount": 754,
   * 	"CoverUris": ["https://e***u.oss-cn-hangzhou.aliyuncs.com/drea***w.png"],
   * 	"TippedAmountCount": 32,
   * 	"DownloadCount": 606056
   * }
   * 
   * **if can be null:**
   * true
   */
  extraInfo?: { [key: string]: any };
  /**
   * @remarks
   * The tags. This parameter will be deprecated and replaced by Tag.
   */
  labels?: Label[];
  /**
   * @remarks
   * The model description, used to distinguish different models.
   */
  modelDescription?: string;
  /**
   * @remarks
   * The documentation of the model.
   * 
   * @example
   * https://*.md
   */
  modelDoc?: string;
  /**
   * @remarks
   * The name of the model. The name must be 1 to 127 characters in length.
   * 
   * This parameter is required.
   */
  modelName?: string;
  /**
   * @remarks
   * The model type. Example: Checkpoint or LoRA.
   * 
   * @example
   * Checkpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The sequence number of the model. Can be used for custom sorting.
   * 
   * @example
   * 0
   */
  orderNumber?: number;
  /**
   * @remarks
   * The source of the model. The community or organization to which the source model belongs, such as ModelScope or HuggingFace.
   * 
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: Label[];
  /**
   * @remarks
   * The task of the model. Describes the specific problem that the model solves. Example: text-classification.
   * 
   * @example
   * text-classification
   */
  task?: string;
  /**
   * @remarks
   * The workspace ID. Call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
      tag: 'Tag',
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
      tag: { 'type': 'array', 'itemType': Label },
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
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * model-rbvg5wzljz****ks92
   */
  modelId?: string;
  /**
   * @remarks
   * The request ID.
   * 
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
  /**
   * @remarks
   * The tags.
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

export class CreateModelLabelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The approval status. Valid values:
   * 
   * *   Pending
   * *   Approved
   * *   Rejected
   * 
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @remarks
   * Compression Configuration
   * 
   * @example
   * {}
   */
  compressionSpec?: { [key: string]: any };
  /**
   * @remarks
   * Evaluation Configuration
   * 
   * @example
   * {}
   */
  evaluationSpec?: { [key: string]: any };
  /**
   * @remarks
   * Other information.
   * 
   * @example
   * {
   * 	"CoverUris": ["https://e***u.oss-cn-hangzhou.aliyuncs.com/st****017.preview.png"],
   * 	"TrainedWords": ["albedo_overlord"]
   * }
   */
  extraInfo?: { [key: string]: any };
  /**
   * @remarks
   * The format of the model. Valid values:
   * 
   * *   OfflineModel
   * *   SavedModel
   * *   Keras H5
   * *   Frozen Pb
   * *   Caffe Prototxt
   * *   TorchScript
   * *   XGBoost
   * *   PMML
   * *   AlinkModel
   * *   ONNX
   * 
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @remarks
   * The framework of the model. Valid values:
   * 
   * *   Pytorch -XGBoost
   * *   Keras
   * *   Caffe
   * *   Alink
   * *   Xflow
   * *   TensorFlow
   * 
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @remarks
   * Describes how to apply to downstream inference services. For example, describes the processor and container of EAS. Example: `{ "processor": "tensorflow_gpu_1.12" }`
   * 
   * @example
   * {
   *     "processor": "tensorflow_gpu_1.12"
   * }
   */
  inferenceSpec?: { [key: string]: any };
  /**
   * @remarks
   * The tags.
   */
  labels?: Label[];
  /**
   * @remarks
   * The metrics for the model. The length after serialization is limited to 8,192.
   * 
   * @example
   * {
   *   "Results": [{
   *     "Dataset": {
   *       "DatasetId": "d-sdkjanksaklerhfd"
   *     },
   *     "Metrics": {
   *       "cer": 0.175
   *     }
   *   }, {
   *     "Dataset": {
   *       "Uri": "oss://xxxx/"
   *     },
   *     "Metrics": {
   *       "cer": 0.172
   *     }
   *   }]
   * }
   */
  metrics?: { [key: string]: any };
  /**
   * @remarks
   * The extended field. This is a JSON string.
   * 
   * @example
   * {}
   */
  options?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * *   If the source type is Custom, this field is not limited.
   * *   If the source is PAIFlow or TrainingService, the format is:
   * 
   * <!---->
   * 
   *     region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
   * 
   * Where,
   * 
   * *   region is the region ID.
   * *   workspaceId is the ID of the workspace.
   * *   kind is the type. Valid values: PipelineRun (PAIFlow) and ServiceJob (training service).
   * *   id: a unique identifier.
   * 
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the model source. Valid values:
   * 
   * *   Custom (default)
   * *   PAIFlow
   * *   TrainingService: PAI training service.
   * 
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @remarks
   * The training configurations. Used for fine-tuning and incremental training.
   * 
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  /**
   * @remarks
   * The URI of the model version, which is the location where the model is stored. Valid values:
   * 
   * *   The HTTP(S) address of the model. Example: `https://myweb.com/mymodel.tar.gz`.
   * *   The OSS path of the model, in the format of `oss://<bucket>.<endpoint>/object`. For endpoint, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html). Example: `oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/`.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/
   */
  uri?: string;
  /**
   * @remarks
   * The version descriptions.
   */
  versionDescription?: string;
  /**
   * @remarks
   * The model version, which is unique for each model. If left empty, the first version is **0.1.0** by default. After that, the version number is increased by 1 in sequence. For example, the second version number is **0.2.0**. A version number consists of a major version number, a minor version number, and a stage version number, separated by periods (.). Among them: the major version number and minor version number are numeric. The stage version number begins with a digit and can include numbers, underscores, and letters. For example, the version number is 1.1.0 or 2.3.4_beta.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 21645FCD-BAB9-5742-89AE-AEB27****B2E
   */
  requestId?: string;
  /**
   * @remarks
   * The version of the model.
   * 
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
  /**
   * @remarks
   * The tags.
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

export class CreateModelVersionLabelsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * Specifies whether to automatically pay for the provided products.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The list of products to be purchased. Separate them with commas (,).
   */
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
   * @remarks
   * The ID of the product purchase request.
   * 
   * @example
   * 3ed6a882-0d85-4dd8-ad36-cd8d74ab9fdb
   */
  buyProductRequestId?: string;
  /**
   * @remarks
   * The returned message.
   */
  message?: string;
  /**
   * @remarks
   * The purchase order ID.
   * 
   * @example
   * 210292536260646
   */
  orderId?: string;
  /**
   * @remarks
   * The request ID.
   * 
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
   * The ID of the experiment that corresponds to the run.
   * 
   * This parameter is required.
   * 
   * @example
   * exp-6thbb5xrbmp*****
   */
  experimentId?: string;
  /**
   * @remarks
   * The list of tags added to the run.
   */
  labels?: Label[];
  /**
   * @remarks
   * The name of the run. The name must meet the following requirements:
   * 
   * *   The name must start with a letter.
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must be 1 to 63 characters in length.
   * 
   * If the name is left empty when you create a run, a random run ID generated by the server is used as the name.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The parameters of the run.
   */
  params?: RunParam[];
  /**
   * @remarks
   * The ID of the workload associated with the run.
   * 
   * @example
   * job-jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the workload source that is associated with the run. Valid values: TrainingService and DLC. You can also leave this parameter empty. This parameter is optional and left empty by default.
   * 
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
   * @remarks
   * The run ID.
   * 
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
   * The description of the workspace. The description can be up to 80 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The display name of the workspace. You can set it based on the purpose of the workspace. If left empty, the name of the workspace is used.
   * 
   * @example
   * display name
   */
  displayName?: string;
  /**
   * @remarks
   * The environment of the workspace.
   * 
   * *   Workspaces in basic mode can run only in the production environment (prod).
   * *   Workspaces in standard mode can run in both the development and production environments (dev and prod).
   * 
   * This parameter is required.
   */
  envTypes?: string[];
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the workspace. Format:
   * 
   * *   The name must be 3 to 23 characters in length, and can contain letters, underscores (_), and digits.
   * *   The name must start with a letter.
   * *   It must be unique in the current region.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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
   * @remarks
   * The operation to perform. Valid values:
   * 
   * *   CreateAndAttach: creates resources and associates the resources with a workspace.
   * *   Attach: associates resources with a workspace.
   * 
   * >  MaxCompute supports only the Attach operation.
   * 
   * @example
   * CreateAndAttach
   */
  option?: string;
  /**
   * @remarks
   * The resources.
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

export class CreateWorkspaceResourceResponseBody extends $dara.Model {
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
  resources?: CreateWorkspaceResourceResponseBodyResources[];
  /**
   * @remarks
   * The total number of resources.
   * 
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
   * @remarks
   * The ID of the deleted code source.
   * 
   * @example
   * code-20210111103721-85qz78ia96lu
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

export class DeleteConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the configuration item. Supported categories:
   * 
   * *   CommonResourceConfig
   * *   DLCAutoRecycle - DLCPriorityConfig
   * *   DSWPriorityConfig
   * *   QuotaMaximumDuration
   * 
   * @example
   * CommonResourceConfig
   */
  categoryName?: string;
  /**
   * @remarks
   * The filter conditions. Separate multiple conditions with commas (,). The conditions have an AND relationship.
   * 
   * @example
   * key1=value;key2=value2
   */
  labels?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      labels: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A******C83E
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

export class DeleteConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConfigResponseBody;
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
      body: DeleteConfigResponseBody,
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
   * @remarks
   * The request ID.
   * 
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
   * The metadata ID of the dataset file.
   * 
   * This parameter is required.
   * 
   * @example
   * 07914c9534586e4e7aa6e9dbca5009082df******fd8a0d857b33296c59bf6
   */
  datasetFileMetaIds?: string;
  /**
   * @remarks
   * The dataset version.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
  /**
   * @remarks
   * The metadata records that fail to be deleted for the dataset files.
   */
  failedDetails?: DatasetFileMetaResponse[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the metadata records of all dataset files were deleted. The value true indicates that the metadata records of all dataset files are deleted. If the value is false, view the failure details specified by FailedDetails.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The workspace ID.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The tag key. You can call [GetDataset](https://help.aliyun.com/document_detail/457218.html) to obtain the tag key. Multiple tag keys are separated by commas (,).
   * 
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
   * @remarks
   * The request ID.
   * 
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
  /**
   * @remarks
   * Id of the request
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
   * The tag keys. Multiple tags are separated by commas (,).
   * 
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
  /**
   * @remarks
   * Id of the request
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The list of member IDs. Separate multiple member IDs with commas (,). You can call [ListMembers](https://help.aliyun.com/document_detail/449135.html) to obtain the member ID.
   * 
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
  /**
   * @remarks
   * The error code returned if the call failed.
   * 
   * @example
   * 100600017
   */
  code?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * Owner not allowed to delete
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The label key to be deleted. To delete multiple label keys, separate them with commas (,).
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The key of the tag to be deleted. Separate multiple tag keys with commas (,).
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The ID of the request.
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

export class DeleteUserConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration item keys. Currently, only customizePAIAssumedRole.
   * 
   * @example
   * tempStoragePath
   */
  configKey?: string;
  static names(): { [key: string]: string } {
    return {
      configKey: 'ConfigKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUserConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * dsjk****dfjksdf
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

export class DeleteUserConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUserConfigResponseBody;
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
      body: DeleteUserConfigResponseBody,
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The name of the resource group. You can call [ListResources](https://help.aliyun.com/document_detail/449143.html) to obtain the name of the resource group.
   * 
   * @example
   * group
   */
  groupName?: string;
  /**
   * @remarks
   * The tags. Multiple tags are separated by commas (,).
   * 
   * @example
   * system.supported.eas=true
   */
  labels?: string;
  /**
   * @remarks
   * The operation to perform. Valid values:
   * 
   * *   DetachAndDelete: disassociates a resource from a workspace and deletes the resource in the workspace. This is the default value.
   * *   Detach: disassociates a resource group from a workspace.
   * 
   * @example
   * DetachAndDelete
   */
  option?: string;
  /**
   * @remarks
   * **This field is no longer used and will be removed. Use the ResourceType field instead.
   * 
   * @example
   * DLC
   */
  productType?: string;
  /**
   * @remarks
   * The resource IDs. Multiple resource IDs are separated by commas (,). The GroupName values for the specified resources must be the same. You cannot leave both GroupName and ResourceIds empty. You can specify both parameters.
   * 
   * @example
   * Resource-dks******jkf,Resource-adf******dss
   */
  resourceIds?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   ECS
   * *   Lingjun
   * *   ACS
   * *   FLINK
   * *   MaxCompute (This resource type is valid only if Option is set to Detach.)
   * 
   * @example
   * DLC
   */
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The resource IDs.
   */
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
   * @remarks
   * The visibility of the code source. Valid values:
   * 
   * *   PRIVATE: Visible only to you and the administrator of the workspace.
   * *   PUBLIC: Visible to all members in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The code repository branch.
   * 
   * @example
   * master
   */
  codeBranch?: string;
  /**
   * @remarks
   * The code commit ID.
   * 
   * @example
   * 44da10***********
   */
  codeCommit?: string;
  /**
   * @remarks
   * The address of the code repository.
   * 
   * @example
   * https://code.aliyun.com/pai-dlc/examples.git
   */
  codeRepo?: string;
  /**
   * @remarks
   * The token used to access the code repository.
   * 
   * @example
   * xxxx
   */
  codeRepoAccessToken?: string;
  /**
   * @remarks
   * The username of the code repository.
   * 
   * @example
   * user1
   */
  codeRepoUserName?: string;
  /**
   * @remarks
   * The ID of the code source.
   * 
   * @example
   * code-202**********
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The description of the code source.
   * 
   * @example
   * This is my data source 1.
   */
  description?: string;
  /**
   * @remarks
   * The name of the code source.
   * 
   * @example
   * MyCodeSource1
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the code source was created, in the ISO8601 format.
   * 
   * @example
   * 2021-01-12T23:36:01.123Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the code source was modified, in the ISO8601 format.
   * 
   * @example
   * 2021-01-12T23:36:01.123Z
   */
  gmtModifyTime?: string;
  /**
   * @remarks
   * The local mount path of the code.
   * 
   * @example
   * /root/code
   */
  mountPath?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 1722********
   */
  userId?: string;
  /**
   * @remarks
   * The workspace ID.
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

export class GetConfigRequest extends $dara.Model {
  /**
   * @example
   * CommonResourceConfig
   */
  categoryName?: string;
  /**
   * @example
   * tempStoragePath
   */
  configKey?: string;
  /**
   * @example
   * oss://***
   */
  verbose?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      configKey: 'ConfigKey',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      configKey: 'string',
      verbose: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConfigResponseBody extends $dara.Model {
  /**
   * @example
   * CommonResourceConfig
   */
  categoryName?: string;
  /**
   * @example
   * tempStoragePath
   */
  configKey?: string;
  /**
   * @example
   * oss://***
   */
  configValue?: string;
  labels?: GetConfigResponseBodyLabels[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A******C83E
   */
  requestId?: string;
  /**
   * @example
   * 1234******2
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      labels: 'Labels',
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      configKey: 'string',
      configValue: 'string',
      labels: { 'type': 'array', 'itemType': GetConfigResponseBodyLabels },
      requestId: 'string',
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

export class GetConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetConfigResponseBody;
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
      body: GetConfigResponseBody,
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
   * @remarks
   * The visibility of the workspace. Valid values:
   * 
   * *   PRIVATE: The workspace is visible only to you and the administrator of the workspace.
   * *   PUBLIC: The workspace is visible to all users.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The type of the data source. Valid values:
   * 
   * *   OSS: Object Storage Service (OSS)
   * *   NAS: File Storage NAS (NAS)
   * 
   * @example
   * NAS
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The data type. Valid values:
   * 
   * *   COMMON: common
   * *   PIC: picture
   * *   TEXT: text
   * *   VIDEO: video
   * *   AUDIO: audio
   * 
   * @example
   * COMMON
   */
  dataType?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * d-rbvg5wz****c9ks92
   */
  datasetId?: string;
  /**
   * @remarks
   * The description.
   */
  description?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The dataset configurations to be imported to a storage, such as OSS, NAS, or CPFS.
   * 
   * **OSS**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "bucket": "${bucket}",// The bucket name\\
   * "path": "${path}" // The file path\\
   * }\\
   * 
   * 
   * **NAS**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "fileSystemId": "${file_system_id}", // The file system ID\\
   * "path": "${path}", // The file system path\\
   * "mountTarget": "${mount_target}" // The mount point of the file system\\
   * }\\
   * 
   * 
   * **CPFS**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "fileSystemId": "${file_system_id}", // The file system ID\\
   * "protocolServiceId":"${protocol_service_id}", // The file system protocol service\\
   * "exportId": "${export_id}", // The file system export directory\\
   * "path": "${path}", // The file system path\\
   * }\\
   * 
   * 
   * **CPFS for Lingjun**
   * 
   * {\\
   * "region": "${region}",// The region ID\\
   * "fileSystemId": "${file_system_id}", // The file system ID\\
   * "path": "${path}", // The file system path\\
   * "mountTarget": "${mount_target}" // The mount point of the file system, CPFS for Lingjun only\\
   * "isVpcMount": boolean, // Whether the mount point is a VPC mount point, CPFS for Lingjun only\\
   * }\\
   * 
   * @example
   * {
   *     "region": "cn-wulanchabu",
   *     "fileSystemId": "bmcpfs-xxxxxxxxxxx",
   *     "path": "/mnt",
   *     "mountTarget": "cpfs-xxxxxxxxxxxx-vpc-gacs9f.cn-wulanchabu.cpfs.aliyuncs.com",
   *     "isVpcMount": true
   * }
   */
  importInfo?: string;
  /**
   * @remarks
   * The tags.
   */
  labels?: Label[];
  /**
   * @remarks
   * The latest version of the dataset.
   */
  latestVersion?: DatasetVersion;
  /**
   * @remarks
   * The access permission on the dataset when the dataset is mounted. Valid values:
   * 
   * *   RO: read-only permissions
   * *   RW: read and write permissions
   * 
   * @example
   * RW
   */
  mountAccess?: string;
  /**
   * @remarks
   * The list of role names in the workspace that have read and write permissions on the mounted database. The names start with PAI are basic role names and the names start with role- are custom role names. If the list contains asterisks (\\*), all roles have read and write permissions.
   */
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @remarks
   * The dataset name.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The extended fields of the dataset v1 (initial version). The value is a JSON string. When you use the dataset in Deep Learning Containers (DLC), you can use the mountPath field to specify the default mount path of the dataset.
   * 
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The ID of the Alibaba Could account.
   * 
   * @example
   * 1631044****3440
   */
  ownerId?: string;
  /**
   * @remarks
   * The property of the dataset of the initial version v1. Valid values:
   * 
   * *   FILE
   * *   DIRECTORY
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @remarks
   * The dataset provider. If the value pai is returned, the dataset is a public dataset in PAI.
   * 
   * @example
   * pai
   */
  provider?: string;
  /**
   * @remarks
   * The type of the data source for the dataset. Valid values:
   * 
   * *   Ecs (default)
   * *   Lingjun
   * 
   * @example
   * Ecs
   */
  providerType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the source dataset generated from a labeling job of iTAG.
   * 
   * @example
   * d-rcdg3wxxxxxhc5jk87
   */
  sourceDatasetId?: string;
  /**
   * @remarks
   * The version of the source dataset generated from a labeling job of iTAG.
   * 
   * @example
   * v2
   */
  sourceDatasetVersion?: string;
  /**
   * @remarks
   * The ID of the source for the dataset v1 (initial version). Valid values:
   * 
   * *   If SourceType is set to USER, the value of SourceId can be a custom string.
   * *   If SourceType is set to ITAG, the value of SourceId is the ID of the labeling job of iTAG.
   * *   If SourceType is set to PAI_PUBLIC_DATASET, SourceId is empty by default.
   * 
   * @example
   * jdnhf***fnrimv
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the source for the dataset v1 (initial version). Valid values:
   * 
   * *   PAI-PUBLIC-DATASET: a public dataset of Platform for AI (PAI).
   * *   ITAG: a dataset generated from a labeling job of iTAG.
   * *   USER: a dataset registered by a user.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The labeling template for the source dataset generated from a labeling job of iTAG.
   * 
   * @example
   * TextClassification
   */
  tagTemplateType?: string;
  /**
   * @remarks
   * The URI of the initial version v1.
   * 
   * *   Sample format for the OSS data source: `oss://bucket.endpoint/object`
   * *   Sample formats for the NAS data source: `nas://<nasfisid>.region/subpath/to/dir/`: General-purpose NAS. `nas://<cpfs-fsid>.region/subpath/to/dir/`: Cloud Parallel File Storage (CPFS) 1.0. `nas://<cpfs-fsid>.region/<protocolserviceid>/`: CPFS 2.0. You can distinguish CPFS 1.0 and CPFS 2.0 file systems based on the format of the file system ID. The ID for CPFS 1.0 is in the cpfs-<8-bit ASCII characters> format. The ID for CPFS 2.0 is in the cpfs-<16-bit ASCII characters> format.
   * 
   * @example
   * nas://09f****f2.cn-hangzhou/
   */
  uri?: string;
  /**
   * @remarks
   * The ID of the user to which the dataset belongs.
   * 
   * @example
   * 2485765****023475
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs.
   * 
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
   * @remarks
   * The dataset version.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
  /**
   * @remarks
   * The queried metadata records of dataset files.
   */
  datasetFileMeta?: DatasetFileMetaContentGet;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * d-rbvg5wz****c9ks92
   */
  datasetId?: string;
  /**
   * @remarks
   * The dataset version.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1234
   */
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

export class GetDatasetFileMetasStatisticsRequest extends $dara.Model {
  /**
   * @remarks
   * Aggregates statistics based on the specified metadata field. The value is not case-sensitive. If not specified, the total number of dataset file metadata will be returned, instead of aggregation lists. Valid values:
   * 
   * *   filedir: the directory path of the file
   * *   file_type: the file type
   * *   tags.user: user-defined tag
   * *   tags.user-delete-ai-tags: algorithm tags deleted by the user
   * *   tags.ai: algorithm tags (aggregated by all tagging tasks)
   * *   tags.all: algorithm tags and user-defined tags (excluding alogorithm tags deleted by the user)
   * 
   * @example
   * filedir
   */
  aggregateBy?: string;
  /**
   * @remarks
   * The dataset version.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The maximum number of results to be returned from a single query when the NextToken parameter is used in the query. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 145883
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateBy: 'AggregateBy',
      datasetVersion: 'DatasetVersion',
      maxResults: 'MaxResults',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateBy: 'string',
      datasetVersion: 'string',
      maxResults: 'number',
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

export class GetDatasetFileMetasStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the returned aggregation list, including the number of each aggregate item. The list is by default sorted in descending order based on the count number.
   */
  datasetFileMetasStats?: DatasetFileMetasStat[];
  /**
   * @remarks
   * The returned number. Example: the number of metadata records or the number of user-defined tags.
   * 
   * @example
   * 73
   */
  totalCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMetasStats: 'DatasetFileMetasStats',
      totalCount: 'TotalCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetFileMetasStats: { 'type': 'array', 'itemType': DatasetFileMetasStat },
      totalCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datasetFileMetasStats)) {
      $dara.Model.validateArray(this.datasetFileMetasStats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetFileMetasStatisticsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDatasetFileMetasStatisticsResponseBody;
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
      body: GetDatasetFileMetasStatisticsResponseBody,
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
   * @remarks
   * The dataset version name.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
   * @remarks
   * The total number of completed files.
   * 
   * @example
   * 990
   */
  completedFileCount?: number;
  /**
   * @remarks
   * The time when the job is started.
   * 
   * @example
   * 2024-11-15T07:06:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The job description.
   */
  description?: string;
  /**
   * @remarks
   * The total number of failed files.
   * 
   * @example
   * 10
   */
  failedFileCount?: number;
  /**
   * @remarks
   * The time when the job ends.
   * 
   * @example
   * 2024-07-16T02:03:23Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The action that is performed on the job.
   * 
   * Valid values:
   * 
   * *   SemanticIndex: semantic indexing
   * *   IntelligentTag: smart labeling
   * *   FileMetaExport: metadata export
   * 
   * @example
   * SemanticIndex
   */
  jobAction?: string;
  /**
   * @remarks
   * The job mode.
   * 
   * Valid value:
   * 
   * *   Full: full data mode.
   * 
   * @example
   * Full
   */
  jobMode?: string;
  /**
   * @remarks
   * The job details.
   * 
   * @example
   * {\\"modelId\\":\\"xxx\\"}
   */
  jobSpec?: string;
  /**
   * @remarks
   * The job logs.
   */
  logs?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 64B50C1D-D4C2-560C-86A3-A6ED****16D
   */
  requestId?: string;
  /**
   * @remarks
   * The job state.
   * 
   * Valid values:
   * 
   * *   Succeeded
   * *   Failed
   * *   Running
   * *   Pending
   * *   PartialFailed
   * *   Deleting
   * *   ManuallyStop
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The total number of job files.
   * 
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
   * @remarks
   * The workspace ID.
   * 
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
   * @remarks
   * The configuration content. Configuration format for MultimodalIntelligentTag:
   * 
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   * 
   * MultimodalSemanticIndex
   * 
   * { "defaultModelId": "xxx" "defaultModelVersion":"1.0.0" }
   * 
   * @example
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   */
  config?: string;
  /**
   * @remarks
   * The configuration type. Valid values:
   * 
   * *   MultimodalIntelligentTag
   * *   MultimodalSemanticIndex
   * 
   * @example
   * MultimodalIntelligentTag
   */
  configType?: string;
  /**
   * @remarks
   * The time when the configuration is created.
   * 
   * @example
   * 2024-10-16T01:44:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * d-lfd60v0p****ujtsdx
   */
  datasetId?: string;
  /**
   * @remarks
   * The time when the configuration is modified.
   * 
   * @example
   * 2024-12-26T02:17:18Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D5BFFEE3-6025-443F-8A03-02D619B5C4B9
   */
  requestId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 114243
   */
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
   * The number of data records.
   * 
   * @example
   * 10000
   */
  dataCount?: number;
  /**
   * @remarks
   * The size of the dataset.
   * 
   * @example
   * 10000
   */
  dataSize?: number;
  /**
   * @remarks
   * The type of the data source.
   * 
   * This parameter is required.
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * d-dkdbnnap0g7b6su4yg
   */
  datasetId?: string;
  /**
   * @remarks
   * The version description.
   */
  description?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-12-13T10:22:05.694Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2023-12-13T10:22:05.694Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The dataset configurations to be imported to a storage, such as Object Storage Service (OSS), File Storage NAS (NAS), or Cloud Parallel File Storage (CPFS).
   * 
   * **OSS**
   * 
   * { "region": "${region}",// The region ID. $bucket = $options["bucket"]; // The bucket name. "path": "${path}" // The file path. }
   * 
   * **NAS**
   * 
   * **CPFS**
   * 
   * **CPFS for Lingjun**
   * 
   * @example
   * {
   *     "region": "cn-wulanchabu",
   *     "fileSystemId": "bmcpfs-xxxxxxxxxxx",
   *     "path": "/mnt",
   *     "mountTarget": "cpfs-xxxxxxxxxxxx-vpc-gacs9f.cn-wulanchabu.cpfs.aliyuncs.com",
   *     "isVpcMount": true
   * }
   */
  importInfo?: string;
  /**
   * @remarks
   * The resource tags.
   */
  labels?: Label[];
  /**
   * @remarks
   * The access permission on the dataset when the dataset is mounted. Valid values:
   * 
   * *   RO: read-only permissions
   * *   RW: read and write permissions
   * 
   * @example
   * RO
   */
  mountAccess?: string;
  /**
   * @remarks
   * The extended fields.
   * 
   * @example
   * {
   *   "mountPath": "/mnt/data/"
   * }
   */
  options?: string;
  /**
   * @remarks
   * The property of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * DIRECTORY
   */
  property?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C55DF3DA-F120-5E37-A374-F49365531701
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the source dataset.
   * 
   * @example
   * d-rbvg5wzljzjhc9ks92
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the data source.
   * 
   * @example
   * USER
   */
  sourceType?: string;
  /**
   * @remarks
   * The sample URI of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://ai4d-br7hx9ngzelo2o6uip.oss-cn-shanghai.aliyuncs.com/365349/data-1157703270994901/datasets/aka108o/
   */
  uri?: string;
  /**
   * @remarks
   * The version name of the dataset.
   * 
   * @example
   * v1
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
   * @remarks
   * Specifies whether to show the details of the default workspace. The details include the conditions of the workspace in different phases. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
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
  /**
   * @remarks
   * The conditions of the default workspace in the creation process.
   */
  conditions?: GetDefaultWorkspaceResponseBodyConditions[];
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * @example
   * 17915******4216
   */
  creator?: string;
  /**
   * @remarks
   * The workspace description.
   * 
   * @example
   * workspace description example
   */
  description?: string;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * @example
   * workspace-example
   */
  displayName?: string;
  /**
   * @remarks
   * The environments of the workspace. Valid values:
   * 
   * *   Workspaces in basic mode can run only in the production environment.
   * *   Workspaces in standard mode can run in both the development and production environments.
   */
  envTypes?: string[];
  /**
   * @remarks
   * The time when the workspace was created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the workspace was modified, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   */
  owner?: GetDefaultWorkspaceResponseBodyOwner;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The workspace status. Valid values:
   * 
   * *   ENABLED
   * *   INITIALIZING
   * *   FAILURE
   * *   DISABLED
   * *   FROZEN
   * *   UPDATING
   * 
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name, which is unique in a region.
   * 
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
   * @remarks
   * Specifies whether to obtain the latest run information associated with the experiment
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
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
   * @remarks
   * Specifies whether to display non-essential information, which contains tags. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
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
   * @remarks
   * The accessibility of the image. Valid values:
   * 
   * *   PUBLIC: All members can access the workspace.
   * *   PRIVATE: Only the creator can access the workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The image description.
   */
  description?: string;
  /**
   * @remarks
   * The time when the image is created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the image is modified, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The image address, which contains the version number.
   * 
   * @example
   * registry.cn-hangzhou.aliyuncs.******ession/nlp:gpu
   */
  imageUri?: string;
  /**
   * @remarks
   * The image tags, which are of the array data type. Each element in the array contains a key-value pair. The key of official tags is system.official and the tag value is true.
   */
  labels?: GetImageResponseBodyLabels[];
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * nlp-compression
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account of the creator.
   * 
   * @example
   * 15577******8921
   */
  parentUserId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The size of the image. Unit: GB.
   * 
   * @example
   * 10
   */
  size?: number;
  /**
   * @remarks
   * 镜像来源 ID
   */
  sourceId?: string;
  /**
   * @remarks
   * 镜像来源类型
   */
  sourceType?: string;
  /**
   * @remarks
   * The user ID of the image.
   * 
   * @example
   * 15577******8921
   */
  userId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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
      sourceId: 'SourceId',
      sourceType: 'SourceType',
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
  /**
   * @remarks
   * The member ID. You must specify only one of the following parameters: UserId and MemberId.
   * 
   * @example
   * 145883-21513926******88039
   */
  memberId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account. You can call [ListWorkspaceUsers](https://help.aliyun.com/document_detail/449133.html) to obtain the ID of the Alibaba Cloud account. You must specify only one of the following parameters: UserId and MemberId.
   * 
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
   * @remarks
   * The display name of the member.
   * 
   * @example
   * myDisplayName
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the workspace is created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The member ID.
   * 
   * @example
   * 145883-21513926******88039
   */
  memberId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * user1
   */
  memberName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The list of roles.
   */
  roles?: string[];
  /**
   * @remarks
   * The user ID.
   * 
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
   * @remarks
   * The visibility of the workspace.
   * 
   * *   PRIVATE: The workspace is visible only to you and the administrator of the workspace.
   * *   PUBLIC: The workspace is visible to all users.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The domain. This parameter specifies the domain for which the model is developed. Valid values: nlp and cv. nlp indicates natural language processing and cv indicates computer vision.
   * 
   * @example
   * cv
   */
  domain?: string;
  /**
   * @remarks
   * Other information about the model.
   * 
   * @example
   * {
   * 	"RatingCount": 2866,
   * 	"Rating": 4.94,
   * 	"FavoriteCount": 34992,
   * 	"CommentCount": 754,
   * 	"CoverUris": ["https://e***u.oss-cn-hangzhou.aliyuncs.com/drea***w.png"],
   * 	"TippedAmountCount": 32,
   * 	"DownloadCount": 606056
   * }
   */
  extraInfo?: { [key: string]: any };
  /**
   * @remarks
   * The time when the model is created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the model is last modified, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The model tags.
   */
  labels?: Label[];
  /**
   * @remarks
   * The latest version of the model.
   */
  latestVersion?: ModelVersion;
  /**
   * @remarks
   * The model description.
   */
  modelDescription?: string;
  /**
   * @remarks
   * The documentation of the model.
   * 
   * @example
   * https://***.md
   */
  modelDoc?: string;
  /**
   * @remarks
   * The model ID.
   * 
   * @example
   * model-rbvg5wzljz****ks92
   */
  modelId?: string;
  /**
   * @remarks
   * The model name.
   */
  modelName?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * Checkpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The sequence number of the model.
   * 
   * @example
   * 1
   */
  orderNumber?: number;
  /**
   * @remarks
   * The source of the model. The community or organization to which the model belongs, such as ModelScope or HuggingFace.
   * 
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1234567890******
   */
  ownerId?: string;
  /**
   * @remarks
   * The provider.
   * 
   * @example
   * pai
   */
  provider?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The task of the model. This parameter describes specific issues that the model solves, such as text-classification.
   * 
   * @example
   * text-classification
   */
  task?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1234567890******
   */
  userId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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
   * @remarks
   * The approval status. Valid values:
   * 
   * *   Pending
   * *   Approved
   * *   Rejected
   * 
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The compression configuration.
   * 
   * @example
   * {}
   */
  compressionSpec?: { [key: string]: any };
  /**
   * @remarks
   * The evaluation configuration.
   * 
   * @example
   * {}
   */
  evaluationSpec?: { [key: string]: any };
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * {
   * 	"CoverUris": ["https://e***u.oss-cn-hangzhou.aliyuncs.com/st****017.preview.png"],
   * 	"TrainedWords": ["albedo_overlord"]
   * }
   */
  extraInfo?: { [key: string]: any };
  /**
   * @remarks
   * The model format. Valid values:
   * 
   * *   OfflineModel
   * *   SavedModel
   * *   Keras H5
   * *   Frozen Pb
   * *   Caffe Prototxt
   * *   TorchScript
   * *   XGBoost
   * *   PMML
   * *   AlinkModel
   * *   ONNX
   * 
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @remarks
   * The model framework. Valid values:
   * 
   * *   Pytorch -XGBoost
   * *   Keras
   * *   Caffe
   * *   Alink
   * *   Xflow
   * *   TensorFlow
   * 
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @remarks
   * The time when the model was created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the model was last modified, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Describes how to apply to downstream inference services. For example, describes the processor and container of Elastic Algorithm Service (EAS).
   * 
   * @example
   * {
   *     "Processor": "tensorflow_gpu_1.12"
   * }
   */
  inferenceSpec?: { [key: string]: any };
  /**
   * @remarks
   * The labels.
   */
  labels?: Label[];
  /**
   * @remarks
   * The metrics.
   * 
   * @example
   * {}
   */
  metrics?: { [key: string]: any };
  /**
   * @remarks
   * The extended field. The value of this parameter is a JSON string.
   * 
   * @example
   * {}
   */
  options?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1234567890******
   */
  ownerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * *   If the source type is Custom, this field is not limited.
   * *   If the source type is PAIFlow or TrainingService, the format is:
   * 
   * <!---->
   * 
   *     region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
   * 
   * Take note of the following parameters:
   * 
   * *   region is the region ID.
   * *   workspaceId is the ID of the workspace.
   * *   kind is the type. Valid values: PipelineRun (PAIFlow) and ServiceJob (training service).
   * *   id is a unique identifier.
   * 
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type of the model. Valid values:
   * 
   * *   Custom
   * *   PAIFlow
   * *   TrainingService
   * 
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @remarks
   * The training configurations used for fine-tuning and incremental training.
   * 
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  /**
   * @remarks
   * The URI of the model version, which is the location where the model is stored. Valid values:
   * 
   * *   The HTTP(S) address of the model. Example: `https://myweb.com/mymodel.tar.gz`.
   * *   The Object Storage Service (OSS) path of the model, in the format of `oss://<bucket>.<endpoint>/object`. For endpoint, see [OSS regions and endpoints](https://help.aliyun.com/document_detail/31837.html). Example: `oss://mybucket.oss-cn-beijing.aliyuncs.com/mypath/`.
   */
  uri?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1234567890******
   */
  userId?: string;
  /**
   * @remarks
   * The version description.
   */
  versionDescription?: string;
  /**
   * @remarks
   * The model version.
   * 
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
   * @remarks
   * The accessibility. Valid values:
   * 
   * *   PUBLIC: All members in the workspace can access the workspace.
   * *   PRIVATE: Only the creator can access the workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that is used to create the workspace.
   * 
   * @example
   * 17915******4216
   */
  creator?: string;
  labels?: { [key: string]: any };
  /**
   * @remarks
   * The configuration. Separate multiple configurations with commas (,). Valid values:
   * 
   * *   ResourceEmpty: The Resource parameter is not configured.
   * *   DisableRam: The RAM check is not performed.
   * 
   * @example
   * ResourceEmpty,DisableRam
   */
  option?: string;
  /**
   * @remarks
   * The resource.
   * 
   * @example
   * job/dlc-ksd******s12
   */
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
   * @remarks
   * The accessibility. Valid values:
   * 
   * *   PUBLIC: All members in the workspace can access the workspace.
   * *   PRIVATE: Only the creator can access the workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account that is used to create the workspace.
   * 
   * @example
   * 17915******4216
   */
  creator?: string;
  labelsShrink?: string;
  /**
   * @remarks
   * The configuration. Separate multiple configurations with commas (,). Valid values:
   * 
   * *   ResourceEmpty: The Resource parameter is not configured.
   * *   DisableRam: The RAM check is not performed.
   * 
   * @example
   * ResourceEmpty,DisableRam
   */
  option?: string;
  /**
   * @remarks
   * The resource.
   * 
   * @example
   * job/dlc-ksd******s12
   */
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
   * @remarks
   * The permission name, which is unique in a region. For more information about permissions, see [Appendix: Roles and permissions](https://help.aliyun.com/document_detail/2840449.html).
   * 
   * @example
   * PaiDLC:ListJobs
   */
  permissionCode?: string;
  /**
   * @remarks
   * The permission rules.
   */
  permissionRules?: GetPermissionResponseBodyPermissionRules[];
  /**
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * Specifies whether to obtain the Metrics, Params, and Labels information. Default value: false.
   * 
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
   * @remarks
   * Specifies whether to display supplementary information such as the workspace owner. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
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
  /**
   * @remarks
   * The names of the administrator accounts.
   */
  adminNames?: string[];
  /**
   * @remarks
   * The ID of the user who creates the workspace.
   * 
   * @example
   * 1157******94123
   */
  creator?: string;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * workspace description example
   */
  description?: string;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * @example
   * workspace-example
   */
  displayName?: string;
  /**
   * @remarks
   * The environment information of the workspace.
   * 
   * *   Workspaces in basic mode can run only in the production environment.
   * *   Workspaces in standard mode can run in both the development and production environments.
   */
  envTypes?: string[];
  /**
   * @remarks
   * The additional information, which only contains the TenantId field.
   * 
   * @example
   * {"TenantId": "4286******98"}
   */
  extraInfos?: { [key: string]: any };
  /**
   * @remarks
   * The time when the workspace is created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the workspace is modified, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Indicates whether the workspace is the default workspace. Valid values:
   * 
   * *   false
   * *   true
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The information about the workspace owner. This parameter is valid only when Verbose is set to true.
   */
  owner?: GetWorkspaceResponseBodyOwner;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A0F049F0-8D69-5BAC-8F10-B4DED1B5A34C
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmwp7rkyq****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The workspace state. Valid values:
   * 
   * *   ENABLED
   * *   INITIALIZING
   * *   FAILURE:
   * *   DISABLED
   * *   FROZEN
   * *   UPDATING
   * 
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
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
   * @remarks
   * The display name of the code source. Fuzzy match is supported.
   * 
   * @example
   * MyDataSource
   */
  displayName?: string;
  /**
   * @remarks
   * The order in which the entries are sorted by the specific field on the returned page. Valid values:
   * 
   * *   ASC (default)
   * *   DESC
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field used for sorting. Valid values:
   * 
   * *   GmtModifyTime: the time when the code source was modified.
   * *   DisplayName: the display name.
   * *   CodeSourceId: the code source ID.
   * *   GmtCreateTime: the time when the code source was created. This is the default value.
   * 
   * @example
   * GmtModifyTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
  /**
   * @remarks
   * The code sources.
   */
  codeSources?: CodeSourceItem[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of code sources that meet the filter conditions.
   * 
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

export class ListConfigsRequest extends $dara.Model {
  /**
   * @example
   * CommonResourceConfig
   */
  categoryName?: string;
  /**
   * @example
   * tempStoragePath
   */
  configKeys?: string;
  /**
   * @example
   * key1=value1,key2=value2
   */
  labels?: string;
  /**
   * @example
   * true
   */
  verbose?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      configKeys: 'ConfigKeys',
      labels: 'Labels',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      configKeys: 'string',
      labels: 'string',
      verbose: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigsResponseBody extends $dara.Model {
  configs?: ListConfigsResponseBodyConfigs[];
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A******C83E
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListConfigsResponseBodyConfigs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConfigsResponseBody;
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
      body: ListConfigsResponseBody,
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
   * The dataset version.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The update time range to query. The end time. The time follows the ISO 8601 standard. This parameter is valid only when QueryType is set to TAG.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  endFileUpdateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  endTagUpdateTime?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * >  If you do not configure this parameter, the data on the first page is returned. A return value other than Null of this parameter indicates that not all entries have been returned. You can use this value as an input parameter to obtain entries on the next page. The value Null indicates that all query results have been returned.
   * 
   * @example
   * 90a6ee35-****-4cd4-927e-1f45e1cb8b62_1729644433000
   */
  nextToken?: string;
  /**
   * @remarks
   * The order in which the entries are sorted by the specific field on the returned page. This parameter must be used together with SortBy. Default value: ASC.
   * 
   * *   ASC
   * *   DESC
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 1000.
   * 
   * @example
   * 10
   * 
   * @deprecated
   */
  pageSize?: number;
  /**
   * @example
   * cars/20250221/
   */
  queryFileDir?: string;
  /**
   * @example
   * shuima
   */
  queryFileName?: string;
  queryFileTypeIncludeAny?: string[];
  /**
   * @example
   * oss://test-xxx-oss/car/0001.png
   */
  queryImage?: string;
  queryTagsExclude?: string[];
  queryTagsIncludeAll?: string[];
  queryTagsIncludeAny?: string[];
  /**
   * @remarks
   * The text content to be queried.
   */
  queryText?: string;
  /**
   * @remarks
   * The retrieval type.
   * 
   * *   TAG (default)
   * *   VECTOR
   * 
   * @example
   * TAG
   */
  queryType?: string;
  /**
   * @remarks
   * The similarity score. Only dataset files whose similarity score is greater than the value of ScoreThreshold are returned. This parameter is valid only when QueryType is set to VECTOR.
   * 
   * @example
   * 0.6
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The field used to sort the results. Default value: GmtCreateTime. Valid values:
   * 
   * *   FileCreateTime (default): The results are sorted by the time when the file is created.
   * *   FileUpdateTime: The results are sorted by the time when the file is last modified.
   * 
   * @example
   * FileCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The update time range to query. The start time. The time follows the ISO 8601 standard. This parameter is valid only when QueryType is set to TAG.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  startFileUpdateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  startTagUpdateTime?: string;
  /**
   * @example
   * w_100
   */
  thumbnailMode?: string;
  /**
   * @remarks
   * The number of search results to return. A maximum of Top K search results can be returned. This parameter is valid only when QueryType is set to VECTOR.
   * 
   * @example
   * 100
   */
  topK?: number;
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
      endTagUpdateTime: 'EndTagUpdateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      pageSize: 'PageSize',
      queryFileDir: 'QueryFileDir',
      queryFileName: 'QueryFileName',
      queryFileTypeIncludeAny: 'QueryFileTypeIncludeAny',
      queryImage: 'QueryImage',
      queryTagsExclude: 'QueryTagsExclude',
      queryTagsIncludeAll: 'QueryTagsIncludeAll',
      queryTagsIncludeAny: 'QueryTagsIncludeAny',
      queryText: 'QueryText',
      queryType: 'QueryType',
      scoreThreshold: 'ScoreThreshold',
      sortBy: 'SortBy',
      startFileUpdateTime: 'StartFileUpdateTime',
      startTagUpdateTime: 'StartTagUpdateTime',
      thumbnailMode: 'ThumbnailMode',
      topK: 'TopK',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersion: 'string',
      endFileUpdateTime: 'string',
      endTagUpdateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      pageSize: 'number',
      queryFileDir: 'string',
      queryFileName: 'string',
      queryFileTypeIncludeAny: { 'type': 'array', 'itemType': 'string' },
      queryImage: 'string',
      queryTagsExclude: { 'type': 'array', 'itemType': 'string' },
      queryTagsIncludeAll: { 'type': 'array', 'itemType': 'string' },
      queryTagsIncludeAny: { 'type': 'array', 'itemType': 'string' },
      queryText: 'string',
      queryType: 'string',
      scoreThreshold: 'number',
      sortBy: 'string',
      startFileUpdateTime: 'string',
      startTagUpdateTime: 'string',
      thumbnailMode: 'string',
      topK: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.queryFileTypeIncludeAny)) {
      $dara.Model.validateArray(this.queryFileTypeIncludeAny);
    }
    if(Array.isArray(this.queryTagsExclude)) {
      $dara.Model.validateArray(this.queryTagsExclude);
    }
    if(Array.isArray(this.queryTagsIncludeAll)) {
      $dara.Model.validateArray(this.queryTagsIncludeAll);
    }
    if(Array.isArray(this.queryTagsIncludeAny)) {
      $dara.Model.validateArray(this.queryTagsIncludeAny);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetFileMetasShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The dataset version.
   * 
   * This parameter is required.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The update time range to query. The end time. The time follows the ISO 8601 standard. This parameter is valid only when QueryType is set to TAG.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  endFileUpdateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  endTagUpdateTime?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * >  If you do not configure this parameter, the data on the first page is returned. A return value other than Null of this parameter indicates that not all entries have been returned. You can use this value as an input parameter to obtain entries on the next page. The value Null indicates that all query results have been returned.
   * 
   * @example
   * 90a6ee35-****-4cd4-927e-1f45e1cb8b62_1729644433000
   */
  nextToken?: string;
  /**
   * @remarks
   * The order in which the entries are sorted by the specific field on the returned page. This parameter must be used together with SortBy. Default value: ASC.
   * 
   * *   ASC
   * *   DESC
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 1000.
   * 
   * @example
   * 10
   * 
   * @deprecated
   */
  pageSize?: number;
  /**
   * @example
   * cars/20250221/
   */
  queryFileDir?: string;
  /**
   * @example
   * shuima
   */
  queryFileName?: string;
  queryFileTypeIncludeAnyShrink?: string;
  /**
   * @example
   * oss://test-xxx-oss/car/0001.png
   */
  queryImage?: string;
  queryTagsExcludeShrink?: string;
  queryTagsIncludeAllShrink?: string;
  queryTagsIncludeAnyShrink?: string;
  /**
   * @remarks
   * The text content to be queried.
   */
  queryText?: string;
  /**
   * @remarks
   * The retrieval type.
   * 
   * *   TAG (default)
   * *   VECTOR
   * 
   * @example
   * TAG
   */
  queryType?: string;
  /**
   * @remarks
   * The similarity score. Only dataset files whose similarity score is greater than the value of ScoreThreshold are returned. This parameter is valid only when QueryType is set to VECTOR.
   * 
   * @example
   * 0.6
   */
  scoreThreshold?: number;
  /**
   * @remarks
   * The field used to sort the results. Default value: GmtCreateTime. Valid values:
   * 
   * *   FileCreateTime (default): The results are sorted by the time when the file is created.
   * *   FileUpdateTime: The results are sorted by the time when the file is last modified.
   * 
   * @example
   * FileCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The update time range to query. The start time. The time follows the ISO 8601 standard. This parameter is valid only when QueryType is set to TAG.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01Z
   */
  startFileUpdateTime?: string;
  /**
   * @remarks
   * Use the UTC time format: yyyy-MM-ddTHH:mm:ss.SSSZ
   * 
   * @example
   * 2025-01-12T14:36:01.000Z
   */
  startTagUpdateTime?: string;
  /**
   * @example
   * w_100
   */
  thumbnailMode?: string;
  /**
   * @remarks
   * The number of search results to return. A maximum of Top K search results can be returned. This parameter is valid only when QueryType is set to VECTOR.
   * 
   * @example
   * 100
   */
  topK?: number;
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
      endTagUpdateTime: 'EndTagUpdateTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      pageSize: 'PageSize',
      queryFileDir: 'QueryFileDir',
      queryFileName: 'QueryFileName',
      queryFileTypeIncludeAnyShrink: 'QueryFileTypeIncludeAny',
      queryImage: 'QueryImage',
      queryTagsExcludeShrink: 'QueryTagsExclude',
      queryTagsIncludeAllShrink: 'QueryTagsIncludeAll',
      queryTagsIncludeAnyShrink: 'QueryTagsIncludeAny',
      queryText: 'QueryText',
      queryType: 'QueryType',
      scoreThreshold: 'ScoreThreshold',
      sortBy: 'SortBy',
      startFileUpdateTime: 'StartFileUpdateTime',
      startTagUpdateTime: 'StartTagUpdateTime',
      thumbnailMode: 'ThumbnailMode',
      topK: 'TopK',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersion: 'string',
      endFileUpdateTime: 'string',
      endTagUpdateTime: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      pageSize: 'number',
      queryFileDir: 'string',
      queryFileName: 'string',
      queryFileTypeIncludeAnyShrink: 'string',
      queryImage: 'string',
      queryTagsExcludeShrink: 'string',
      queryTagsIncludeAllShrink: 'string',
      queryTagsIncludeAnyShrink: 'string',
      queryText: 'string',
      queryType: 'string',
      scoreThreshold: 'number',
      sortBy: 'string',
      startFileUpdateTime: 'string',
      startTagUpdateTime: 'string',
      thumbnailMode: 'string',
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
  /**
   * @remarks
   * The metadata records of the dataset files.
   */
  datasetFileMetas?: DatasetFileMeta[];
  /**
   * @remarks
   * The dataset ID.
   * 
   * @example
   * d-rbvg5*****jhc9ks92
   */
  datasetId?: string;
  /**
   * @remarks
   * The dataset version.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. If the number of results exceeds the maximum number of entries allowed per page, a pagination token is returned. This token can be used as an input parameter to obtain the next page of results. If all results are obtained, no token is returned.
   * 
   * @example
   * 90******-f5c5-4cd4-927e-1f45e1cb8b62_1729644433000
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   * 
   * @deprecated
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 123
   */
  totalCount?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 105173
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetFileMetas: 'DatasetFileMetas',
      datasetId: 'DatasetId',
      datasetVersion: 'DatasetVersion',
      maxResults: 'MaxResults',
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
      maxResults: 'number',
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
   * @remarks
   * The configuration type.
   * 
   * *   MultimodalIntelligentTag
   * *   MultimodalSemanticIndex
   * 
   * @example
   * MultimodalIntelligentTag
   */
  configType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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
  /**
   * @remarks
   * The dataset job configurations.
   */
  datasetJobConfigs?: DatasetJobConfig[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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
   * @remarks
   * The dataset version name.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The action to be performed on the job.
   * 
   * @example
   * SemanticIndex
   */
  jobAction?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
  /**
   * @remarks
   * The jobs in the dataset.
   */
  datasetJobs?: DatasetJob[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D7B2E70-F770-505B-A672-09F1D8F2EC1E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of jobs.
   */
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
   * @remarks
   * The dataset tag keys, which are used to filter datasets. Datasets whose tag keys or tag values contain a specified string are filtered.
   * 
   * @example
   * key1,key2
   */
  labelKeys?: string;
  /**
   * @remarks
   * The dataset tag values, which are used to filter datasets. Datasets whose tag keys or tag values contain a specified string are filtered.
   * 
   * @example
   * value1,value2
   */
  labelValues?: string;
  /**
   * @remarks
   * The order in which the entries are sorted by the specific field on the returned page. Default value: ASC. Valid values:
   * 
   * *   ASC: ascending order
   * *   DESC: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The dataset properties. Valid values:
   * 
   * *   DIRECTORY
   * *   FILE
   * 
   * @example
   * DIRECTORY
   */
  properties?: string;
  /**
   * @remarks
   * The field used to sort the results in queries by page. Default value: GmtCreateTime.
   * Valid values:
   * 
   * *   SourceType
   * *   DataSourceType
   * *   DataSize
   * *   DataCount
   * *   Property
   * *   GmtCreateTime: The results are sorted by creation time. This is the default value.
   * *   GmtModifiedTime: The results are sorted by modification time.
   * *   DatasetId
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * *   If SourceType is set to USER, the value of SourceId is a custom string.
   * *   If SourceType is set to ITAG, the value of SourceId is the ID of the labeling job of iTAG.
   * *   If SourceType is set to PAI_PUBLIC_DATASET, SourceId is empty by default.
   * 
   * @example
   * d-a0xbe5n03bhqof46ce
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type. Valid values:
   * 
   * *   PAI-PUBLIC-DATASET: a public dataset of Platform for AI (PAI).
   * *   ITAG: a dataset generated from a labeling job of iTAG.
   * *   USER: a dataset registered by a user.
   * 
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
  /**
   * @remarks
   * The dataset versions.
   */
  datasetVersions?: DatasetVersion[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0648C5BB-68D0-54D2-92A5-607135B8806B
   */
  requestId?: string;
  /**
   * @remarks
   * The number of dataset versions that meet the filter conditions.
   * 
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
   * @remarks
   * The storage types of the data source. Multiple data source types are separated by commas (,). Valid values:
   * 
   * *   NAS: File Storage NAS (NAS).
   * *   OSS: Object Storage Service (OSS).
   * 
   * @example
   * OSS
   */
  dataSourceTypes?: string;
  /**
   * @remarks
   * The dataset types. Multiple dataset types are separated by commas (,). Valid values:
   * 
   * *   Video: video
   * *   COMMON: common
   * *   TEXT: text
   * *   PIC: picture
   * *   AUDIO: audio
   * 
   * @example
   * COMMON,TEXT
   */
  dataTypes?: string;
  /**
   * @remarks
   * The dataset tag, which is used to filter datasets. Datasets whose tag key or tag value contains a specified string are filtered.
   * 
   * @example
   * test
   */
  label?: string;
  /**
   * @remarks
   * The dataset name. Fuzzy search based on the dataset name is supported.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The order of specific fields of the entries on the returned page. Valid values: ASC and DESC. Default value: ASC.
   * 
   * *   ASC: The entries are sorted in ascending order.
   * *   DESC: The entries are sorted in descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The dataset properties. Multiple properties are separated by commas (,). Valid values:
   * 
   * *   DIRECTORY
   * *   FILE
   * 
   * @example
   * FILE
   */
  properties?: string;
  /**
   * @remarks
   * The dataset provider. If the value pai is returned, the dataset is a public dataset provided by PAI.
   * 
   * @example
   * pai
   */
  provider?: string;
  /**
   * @remarks
   * The field used for sorting.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The ID of the iTAG labeled dataset that is used as the source dataset.
   * 
   * @example
   * d-rcdg3wxxxxxhc5jk87
   */
  sourceDatasetId?: string;
  /**
   * @remarks
   * The data source ID.
   * 
   * *   If SourceType is set to USER, the value of SourceId is a custom string.
   * *   If SourceType is set to ITAG, the value of SourceId is the ID of the labeling job of iTAG.
   * *   If SourceType is set to PAI_PUBLIC_DATASET, SourceId is empty by default.
   * 
   * @example
   * d-rbvg5wzljzjhc9ks92
   */
  sourceId?: string;
  /**
   * @remarks
   * The source types. Multiple source types are separated by commas (,). Valid values:
   * 
   * *   PAI-PUBLIC-DATASET: a public dataset of Platform for AI (PAI).
   * *   ITAG: a dataset generated from a labeling job of iTAG.
   * *   USER: a dataset registered by a user.
   * 
   * @example
   * USER,ITAG
   */
  sourceTypes?: string;
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID. If you do not specify this parameter, the default workspace is used. If the default workspace does not exist, an error is reported.
   * 
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
  /**
   * @remarks
   * The datasets.
   */
  datasets?: Dataset[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
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
   * @remarks
   * The tag filter conditions. Multiple conditions are separated by commas (,). The format of a single condition filter is `key=value`.
   * 
   * @example
   * is_evaluation:true
   */
  labels?: string;
  /**
   * @remarks
   * The maximum number of entries in the request. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The experiment name.
   * 
   * @example
   * exp-test
   */
  name?: string;
  /**
   * @remarks
   * The optional parameters.
   */
  options?: ListExperimentRequestOptions;
  /**
   * @remarks
   * The order of specific fields of results in a paged query (ascending or descending).
   * 
   * *   ASC: ascending order
   * *   DESC: descending order. This is the default value.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The strings used for sorting. The following fields can be used for sorting: GmtCreateTime, Name, GmtModifiedTime, and ExperimentId. The sorting order can be ASC (default) and DESC.
   * 
   * @example
   * GmtCreateTime DESC,Name ASC
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. The value starts from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The pagination token, which starts from 0. Default value: 0.
   * 
   * @example
   * 0
   */
  pageToken?: number;
  /**
   * @remarks
   * The field used for sorting. The GmtCreateTime field is used.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Specifies whether to obtain the LatestRun value that is related to the experiment.
   * 
   * @example
   * false
   */
  verbose?: boolean;
  /**
   * @remarks
   * The ID of the workspace to which the experiment belongs. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * >  If you do not specify a workspace ID, the system returns the experiments in the default workspace.
   * 
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
   * @remarks
   * The tag filter conditions. Multiple conditions are separated by commas (,). The format of a single condition filter is `key=value`.
   * 
   * @example
   * is_evaluation:true
   */
  labels?: string;
  /**
   * @remarks
   * The maximum number of entries in the request. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The experiment name.
   * 
   * @example
   * exp-test
   */
  name?: string;
  /**
   * @remarks
   * The optional parameters.
   */
  optionsShrink?: string;
  /**
   * @remarks
   * The order of specific fields of results in a paged query (ascending or descending).
   * 
   * *   ASC: ascending order
   * *   DESC: descending order. This is the default value.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The strings used for sorting. The following fields can be used for sorting: GmtCreateTime, Name, GmtModifiedTime, and ExperimentId. The sorting order can be ASC (default) and DESC.
   * 
   * @example
   * GmtCreateTime DESC,Name ASC
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. The value starts from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The pagination token, which starts from 0. Default value: 0.
   * 
   * @example
   * 0
   */
  pageToken?: number;
  /**
   * @remarks
   * The field used for sorting. The GmtCreateTime field is used.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Specifies whether to obtain the LatestRun value that is related to the experiment.
   * 
   * @example
   * false
   */
  verbose?: boolean;
  /**
   * @remarks
   * The ID of the workspace to which the experiment belongs. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * >  If you do not specify a workspace ID, the system returns the experiments in the default workspace.
   * 
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
  /**
   * @remarks
   * The list of experiments.
   */
  experiments?: Experiment[];
  /**
   * @remarks
   * The pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * 0
   */
  nextPageToken?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The image ID. You can call [ListImages](https://help.aliyun.com/document_detail/449118.html) to obtain the image ID.
   * 
   * @example
   * image-4c62******53uor
   */
  imageId?: string;
  /**
   * @remarks
   * The tag filter conditions, separated with commas (,). The format of a single condition filter is `key=value`. Takes effect independently from LabelKeys.
   * 
   * @example
   * system.framework=XGBoost 1.6.0,system.official=true
   */
  labelFilter?: string;
  /**
   * @remarks
   * The tag keys, separated with commas (,). System tags start with system and take effect independently from LabelFilter.
   * 
   * @example
   * system.framework,system.official
   */
  labelKeys?: string;
  /**
   * @remarks
   * The region where the image resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
  /**
   * @remarks
   * The image tags.
   */
  labels?: ListImageLabelsResponseBodyLabels[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of the images that meet the filter conditions.
   * 
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
  /**
   * @remarks
   * The visibility of the image. This parameter is valid only for custom images.
   * 
   * *   PUBLIC: The image is visible to all users.
   * *   PRIVATE: The image is visible only to you and the administrator of the workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  imageUri?: string;
  /**
   * @remarks
   * The tag filter conditions. Multiple conditions are separated by commas (,). The format of a single condition filter is `key=value`. The following keys are supported:
   * 
   * *   system.chipType
   * *   system.dsw.cudaVersion
   * *   system.dsw.fromImageId
   * *   system.dsw.fromInstanceId
   * *   system.dsw.id
   * *   system.dsw.os
   * *   system.dsw.osVersion
   * *   system.dsw.resourceType
   * *   system.dsw.rootImageId
   * *   system.dsw.stage
   * *   system.dsw.tag
   * *   system.dsw.type
   * *   system.framework
   * *   system.origin
   * *   system.pythonVersion
   * *   system.source
   * *   system.supported.dlc
   * *   system.supported.dsw
   * 
   * @example
   * system.framework=XGBoost 1.6.0,system.official=true
   */
  labels?: string;
  /**
   * @remarks
   * The image name. Fuzzy match is supported.
   * 
   * @example
   * tensorflow_2.9
   */
  name?: string;
  /**
   * @remarks
   * The order in which the entries are sorted by the specific field on the returned page. This parameter must be used together with SortBy. Default value: ASC. Valid values:
   * 
   * *   ASC: ascending order
   * *   DESC: descending order.
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The image name and description that are used for fuzzy search.
   * 
   * @example
   * name
   */
  query?: string;
  /**
   * @remarks
   * The field used for sorting. The GmtCreateTime field is used.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * Specifies whether to display non-essential information, which contains tags. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
  /**
   * @remarks
   * The images.
   */
  images?: ListImagesResponseBodyImages[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned images.
   * 
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
   * @remarks
   * The member name. Fuzzy match is supported.
   * 
   * @example
   * zhangsan
   */
  memberName?: string;
  /**
   * @remarks
   * The page number of the workspace list. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The roles that are used to filter members. Multiple roles are separated by commas (,). Valid values:
   * 
   * *   PAI.AlgoDeveloper: algorithm developer
   * *   PAI.AlgoOperator: algorithm O\\&M engineer
   * *   PAI.LabelManager: labeling administrator
   * *   PAI.MaxComputeDeveloper: MaxCompute developer
   * *   PAI.WorkspaceAdmin: administrator
   * *   PAI.WorkspaceGuest: guest
   * *   PAI.WorkspaceOwner: owner
   * 
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
  /**
   * @remarks
   * The members.
   */
  members?: ListMembersResponseBodyMembers[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of members that meet the filter conditions.
   * 
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
   * @remarks
   * The approval status based on which the model versions are queried. Valid values:
   * 
   * *   Pending
   * *   Approved
   * *   Rejected
   * 
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The model format used to filter model versions. Valid values:
   * 
   * *   OfflineModel
   * *   SavedModel
   * *   Keras H5
   * *   Frozen Pb
   * *   Caffe Prototxt
   * *   TorchScript
   * *   XGBoost
   * *   PMML
   * *   AlinkModel
   * *   ONNX
   * 
   * @example
   * SavedModel
   */
  formatType?: string;
  /**
   * @remarks
   * The framework used to filter model versions.
   * 
   * *   Pytorch -XGBoost
   * *   Keras
   * *   Caffe
   * *   Alink
   * *   Xflow
   * *   TensorFlow
   * 
   * @example
   * TensorFlow
   */
  frameworkType?: string;
  /**
   * @remarks
   * The label. Model versions whose label key or label value contains a specific label are filtered.
   * 
   * @example
   * key1
   */
  label?: string;
  /**
   * @remarks
   * The order in which the entries are sorted by the specific field on the returned page. Default value: ASC.
   * 
   * *   ASC
   * *   DESC
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field used to sort the results. The GmtCreateTime field is used for sorting.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * *   If the source type is Custom, this field is not limited.
   * *   If the source type is PAIFlow or TrainingService, the format is:
   * 
   * <!---->
   * 
   *     region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
   * 
   * Take note of the following parameters:
   * 
   * *   region is the region ID.
   * *   workspaceId is the ID of the workspace.
   * *   kind is the type. Valid values: PipelineRun (PAIFlow) and ServiceJob (training service).
   * *   id is a unique identifier.
   * 
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @remarks
   * The source type used to filter model versions. Valid values:
   * 
   * *   Custom (default)
   * *   PAIFlow
   * *   TrainingService
   * 
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @remarks
   * The model version used to filter model versions.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC***3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of model versions.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  /**
   * @remarks
   * The model versions.
   */
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
   * @remarks
   * The collection where the model is located. You can specify multiple collections and separate them with commas (,).
   * 
   * @example
   * AI4D,QuickStart
   */
  collections?: string;
  /**
   * @remarks
   * The domain. Only models in the domain are returned. Valid values: nlp (Natural Language Processing) and cv (Computer Vision).
   * 
   * @example
   * nlp
   */
  domain?: string;
  /**
   * @remarks
   * The label. Models whose label key or label value contains a specific label are filtered.
   * 
   * @example
   * key1
   */
  label?: string;
  /**
   * @remarks
   * The model name used to filter the returned models.
   */
  modelName?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * Endpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The order in which the entries are sorted by the specific field on the returned page. Default value: ASC.
   * 
   * *   ASC
   * *   DESC
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The model source used to filter the models that belong to a community or organization, such as ModelScope and Hugging Face.
   * 
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The provider. If you configure this parameter, only the models exposed by the provider are returned. If you leave this parameter empty, only models owned by the user are returned.
   * 
   * @example
   * pai
   */
  provider?: string;
  /**
   * @remarks
   * The query condition. For example, if you set the value to nlp, all models that match ModelName, Domain, Task, LabelKey, and LabelValue are returned.
   * 
   * @example
   * nlp
   */
  query?: string;
  /**
   * @remarks
   * The field used to sort the results. The GmtCreateTime field is used for sorting.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The tags of the model.
   */
  tag?: ListModelsRequestTag[];
  /**
   * @remarks
   * The task used to filter the models that belong to the task type. Example: text-classification.
   * 
   * @example
   * text-classification
   */
  task?: string;
  /**
   * @remarks
   * The workspace ID. Only models in this workspace are queried. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
      tag: 'Tag',
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
      tag: { 'type': 'array', 'itemType': ListModelsRequestTag },
      task: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModelsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The collection where the model is located. You can specify multiple collections and separate them with commas (,).
   * 
   * @example
   * AI4D,QuickStart
   */
  collections?: string;
  /**
   * @remarks
   * The domain. Only models in the domain are returned. Valid values: nlp (Natural Language Processing) and cv (Computer Vision).
   * 
   * @example
   * nlp
   */
  domain?: string;
  /**
   * @remarks
   * The label. Models whose label key or label value contains a specific label are filtered.
   * 
   * @example
   * key1
   */
  label?: string;
  /**
   * @remarks
   * The model name used to filter the returned models.
   */
  modelName?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * Endpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The order in which the entries are sorted by the specific field on the returned page. Default value: ASC.
   * 
   * *   ASC
   * *   DESC
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The model source used to filter the models that belong to a community or organization, such as ModelScope and Hugging Face.
   * 
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The provider. If you configure this parameter, only the models exposed by the provider are returned. If you leave this parameter empty, only models owned by the user are returned.
   * 
   * @example
   * pai
   */
  provider?: string;
  /**
   * @remarks
   * The query condition. For example, if you set the value to nlp, all models that match ModelName, Domain, Task, LabelKey, and LabelValue are returned.
   * 
   * @example
   * nlp
   */
  query?: string;
  /**
   * @remarks
   * The field used to sort the results. The GmtCreateTime field is used for sorting.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The tags of the model.
   */
  tagShrink?: string;
  /**
   * @remarks
   * The task used to filter the models that belong to the task type. Example: text-classification.
   * 
   * @example
   * text-classification
   */
  task?: string;
  /**
   * @remarks
   * The workspace ID. Only models in this workspace are queried. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
      tagShrink: 'Tag',
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
      tagShrink: 'string',
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
  /**
   * @remarks
   * The models.
   */
  models?: Model[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of models.
   * 
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
  /**
   * @remarks
   * The permissions.
   */
  permissions?: ListPermissionsResponseBodyPermissions[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2AE63638-5420-56DC-B******8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of permissions that meet the filter conditions.
   * 
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
   * @remarks
   * The quota name. Fuzzy search is supported.
   * 
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
  /**
   * @remarks
   * The returned quotas.
   */
  quotas?: ListQuotasResponseBodyQuotas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of quotas that meet the filter conditions.
   * 
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
   * @remarks
   * The name of the resource group. You can call [ListResources](https://help.aliyun.com/document_detail/449143.html) to obtain the name of the resource group.
   * 
   * @example
   * group
   */
  groupName?: string;
  /**
   * @remarks
   * Tag-based filter conditions. Multiple conditions are separated by commas (,). Only resources that meet all the specified tag-based filter conditions are returned.
   * 
   * This parameter is available only for resources whose ProductType is ACS.
   * 
   * @example
   * system.supported.dsw=true,system.supported.dlc=true
   */
  labels?: string;
  /**
   * @remarks
   * The operation to perform. Valid values:
   * 
   * *   ListResourceByWorkspace: obtains the resources in the workspace. This is the default value.
   * *   ListResource: obtains the resources of the user.
   * 
   * @example
   * ListResourceByWorkspace
   */
  option?: string;
  /**
   * @remarks
   * The page number. The pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * **This field is no longer used and will be removed. Use the ResourceType field instead.
   * 
   * @example
   * MaxCompute
   */
  productTypes?: string;
  /**
   * @remarks
   * The quota IDs, which are separated by commas (,). Only resources that contain all the specified quotas are returned.
   * 
   * >  This parameter is available only for resources whose ResourceTypes is ACS.
   * 
   * @example
   * quota-k******da,quota-cd******w
   */
  quotaIds?: string;
  /**
   * @remarks
   * The resource name. The value must meet the following requirements:
   * 
   * *   The name must be 3 to 28 characters in length.
   * *   The name is unique in the region.
   * 
   * @example
   * resource
   */
  resourceName?: string;
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
  resourceTypes?: string;
  /**
   * @remarks
   * Specifies whether to show detailed information, which includes the Quotas field. Valid values:
   * 
   * *   true (default)
   * *   false
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The fields to return. Multiple fields are separated by commas (,). Valid values:
   * 
   * *   Quota
   * *   Label
   * *   IsDefault
   * 
   * @example
   * Quota,IsDefault
   */
  verboseFields?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * *   This parameter is required when the Option parameter is set to ListResourceByWorkspace.
   * *   You do not need to configure this parameter when the Option parameter is set to ListResource.
   * 
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
   * The metric key of the run.
   * 
   * This parameter is required.
   * 
   * @example
   * loss
   */
  key?: string;
  /**
   * @remarks
   * The maximum number of entries in the request. Default value: 10.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token, which starts from 0. Default value: 0.
   * 
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
  /**
   * @remarks
   * The metrics.
   */
  metrics?: RunMetric[];
  /**
   * @remarks
   * The pagination token that is used to retrieve the next page. You do not need to specify this parameter for the first request. You must specify the pagination token in the result of the previous query. If the pagination token is 0, no next page exists. You can obtain the pagination token that is used to retrieve the next page in the value of the **NextPageToken** field.
   * 
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
   * @remarks
   * The ID of the experiment that the run belongs.
   * 
   * @example
   * exp-1zpfthdx******
   */
  experimentId?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2021-01-30T12:51:33.028Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The label. Exact match is supported. Valid values:
   * 
   * *   Single-label query: Set the value to is_evaluation.
   * *   Multi-label query (not recommended in non-special scenarios and may have performance issues): Set the value to is_evaluation:true,LLM_evaluation:true. Multiple labels are separated with commas (,), indicating that the key-value pairs of multiple labels must be matched at the same time.
   * 
   * @example
   * is_evaluation:true
   */
  labels?: string;
  /**
   * @remarks
   * The maximum number of entries in the request. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The run name.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The order in which the entries are sorted by the specific field on the returned page. This parameter must be used together with SortBy.
   * 
   * *   ASC
   * *   DESC (default)
   * 
   * @example
   * DESC
   */
  order?: string;
  /**
   * @remarks
   * The strings by which the results are sorted. The following parameters can be used to sort the results: GmtCreateTime and Name. The sorting order can be ASC (default) and DESC. Separate multiple strings with commas (,).
   * 
   * @example
   * GmtCreateTime DESC,Name ASC
   */
  orderBy?: string;
  /**
   * @remarks
   * The page number. The value must be greater than 0. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The pagination token, which starts from 0. Default value: 0.
   * 
   * @example
   * 0
   */
  pageToken?: number;
  /**
   * @remarks
   * The field used for sorting. Valid values:
   * 
   * *   Name: the name of the run.
   * *   GmtCreateTime: the time when the run is created.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The ID of the workload associated with the run.
   * 
   * @example
   * job-rbvg5wzlj****
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the workload associated with the run.
   * 
   * @example
   * TrainingService
   */
  sourceType?: string;
  /**
   * @remarks
   * Specifies whether to show detailed information, including Metrics, Params, and Labels. Valid values:
   * 
   * *   true
   * *   false (default)
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The ID of the workspace to which the experiment belongs. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
   * >  If you do not specify a workspace ID, the system returns the runs of the default workspace.
   * 
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
   * @remarks
   * The pagination token that is used to retrieve the next page. You do not need to specify this parameter for the first request. You must specify the pagination token in the result of the previous query. If the pagination token is 0, no next page exists. You can obtain the pagination token that is used to retrieve the next page in the value of the **NextPageToken** field.
   * 
   * @example
   * 0
   */
  nextPageToken?: number;
  /**
   * @remarks
   * The runs.
   */
  runs?: Run[];
  /**
   * @remarks
   * The total number of entries returned. By default, this parameter is not returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The request ID.
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

export class ListUserConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The category. Currently, only DataPrivacyConfig is supported.
   * 
   * @example
   * DataPrivacyConfig
   */
  categoryNames?: string;
  /**
   * @remarks
   * The configuration item keys. Currently, only customizePAIAssumedRole is supported.
   * 
   * @example
   * customizePAIAssumedRole
   */
  configKeys?: string;
  static names(): { [key: string]: string } {
    return {
      categoryNames: 'CategoryNames',
      configKeys: 'ConfigKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryNames: 'string',
      configKeys: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations list.
   */
  configs?: ListUserConfigsResponseBodyConfigs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * sdjksdk-******-dsfds
   */
  requestId?: string;
  /**
   * @remarks
   * The number of items returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListUserConfigsResponseBodyConfigs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserConfigsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserConfigsResponseBody;
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
      body: ListUserConfigsResponseBody,
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
  /**
   * @remarks
   * The display names of users who can be added to the workspace as members.
   * 
   * @example
   * doctest****
   */
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  /**
   * @remarks
   * The number of users who meet the filter conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The users.
   */
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
   * @remarks
   * The list of returned fields of workspace details. Used to limit the fields in the returned results. Separate multiple fields with commas (,). Currently, only Id is supported, which is the workspace ID.
   * 
   * @example
   * Id
   */
  fields?: string;
  /**
   * @remarks
   * The modules, separated by commas (,). Default value: PAI.
   * 
   * @example
   * PAI
   */
  moduleList?: string;
  /**
   * @remarks
   * The query options. Valid values:
   * 
   * *   GetWorkspaces (default): Obtains a list of Workspaces.
   * *   GetResourceLimits: Obtains a list of ResourceLimits.
   * 
   * @example
   * GetWorkspaces
   */
  option?: string;
  /**
   * @remarks
   * The order of results (ascending or descending). Valid values:
   * 
   * *   ASC: ascending order. This is the default value.
   * *   DESC: descending order.
   * 
   * @example
   * ASC
   */
  order?: string;
  /**
   * @remarks
   * The page number of the workspace list. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID. To obtain the ID of a resource group, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-acfmwp7rky****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies how to sort the results. Default value: GmtCreateTime. Valid values:
   * 
   * *   GmtCreateTime: Sort by the time when created.
   * *   GmtModifiedTime: Sort by the time when modified.
   * 
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The workspace status. Valid values:
   * 
   * *   ENABLED
   * *   INITIALIZING
   * *   FAILURE
   * *   DISABLED
   * *   FROZEN
   * *   UPDATING
   * 
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether to display workspace details. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
   * @example
   * true
   */
  verbose?: boolean;
  /**
   * @remarks
   * The workspace IDs. Separate multiple IDs by commas (,).
   * 
   * @example
   * 123,234
   */
  workspaceIds?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D7B2E70-F770-505B-A672-09F1D8F2EC1E
   */
  requestId?: string;
  /**
   * @remarks
   * The type and quantity of resources that can be activated in a workspace. This list is returned when the Option is set to GetResourceLimits. Valid values:
   * 
   * *   MaxCompute_share: pay-as-you-go MaxCompute
   * *   MaxCompute_isolate: subscription MaxCompute
   * *   DLC_share: pay-as-you-go DLC
   * *   PAI_Isolate: subscription PAI
   * *   PAI_share: pay-as-you-go PAI
   * *   DataWorks_isolate: subscription DataWorks
   * *   DataWorks_share: pay-as-you-go DataWorks
   * 
   * @example
   * {
   *    "MaxCompute_share": 1,
   *    "MaxCompute_isolate": 1,
   *    "DLC_share": 1
   * }
   */
  resourceLimits?: { [key: string]: any };
  /**
   * @remarks
   * The number of workspaces that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of workspace details. This list is returned when Option is set to GetWorkspaces.
   */
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
  /**
   * @remarks
   * The metrics.
   */
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
   * The ID of the request.
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
   * @remarks
   * The ID of the code source that is successfully published.
   * 
   * @example
   * code-a797*******
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to locate logs and troubleshoot issues.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The image ID.
   * 
   * @example
   * image-dk******fa
   */
  imageId?: string;
  /**
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The request ID.
   * 
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
  /**
   * @remarks
   * The tags.
   */
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
   * @remarks
   * The request ID.
   * 
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

export class SetUserConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations list.
   */
  configs?: SetUserConfigsRequestConfigs[];
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': SetUserConfigsRequestConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetUserConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * dsjk****dfjksdf
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

export class SetUserConfigsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetUserConfigsResponseBody;
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
      body: SetUserConfigsResponseBody,
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
   * @remarks
   * The dataset version.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The name of the code branch.
   * 
   * @example
   * dev
   */
  codeBranch?: string;
  /**
   * @remarks
   * The code commit ID.
   * 
   * @example
   * 3a6*****
   */
  codeCommit?: string;
  /**
   * @remarks
   * The address of the code repository.
   * 
   * @example
   * https://code.aliyun.com/******
   */
  codeRepo?: string;
  /**
   * @remarks
   * The access token corresponding to the username.
   * 
   * @example
   * ***
   */
  codeRepoAccessToken?: string;
  /**
   * @remarks
   * The username used to access the code repository.
   * 
   * @example
   * demo-user
   */
  codeRepoUserName?: string;
  /**
   * @remarks
   * The description of the code build.
   */
  description?: string;
  /**
   * @remarks
   * The name of the code build.
   * 
   * @example
   * MyCodeSource1
   */
  displayName?: string;
  /**
   * @remarks
   * The default mount path.
   * 
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
   * @remarks
   * The ID of the code build.
   * 
   * @example
   * code-20********
   */
  codeSourceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
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

export class UpdateConfigRequest extends $dara.Model {
  /**
   * @example
   * CommonResourceConfig
   */
  categoryName?: string;
  /**
   * @example
   * tempStoragePath
   */
  configKey?: string;
  /**
   * @example
   * oss://***
   */
  configValue?: string;
  labels?: UpdateConfigRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      configKey: 'ConfigKey',
      configValue: 'ConfigValue',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      configKey: 'string',
      configValue: 'string',
      labels: { 'type': 'array', 'itemType': UpdateConfigRequestLabels },
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

export class UpdateConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A******C83E
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

export class UpdateConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateConfigResponseBody;
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
      body: UpdateConfigResponseBody,
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

export class UpdateConfigsRequest extends $dara.Model {
  configs?: UpdateConfigsRequestConfigs[];
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': UpdateConfigsRequestConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateConfigsResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A******C83E
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

export class UpdateConfigsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateConfigsResponseBody;
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
      body: UpdateConfigsResponseBody,
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
  /**
   * @remarks
   * The description of the dataset.
   */
  description?: string;
  /**
   * @remarks
   * The list of role names in the workspace that have read and write permissions on the mounted database. The names start with PAI are basic role names and the names start with role- are custom role names. If the list contains asterisks (\\*), all roles have read and write permissions.
   * 
   * *   If you set the value to ["PAI.AlgoOperator", "role-hiuwpd01ncrokkgp21"], the account of the specified role is granted the read and write permissions.
   * *   If you set the value to ["\\*"], all accounts are granted the read and write permissions.
   * *   If you set the value to [], only the creator of the dataset has the read and write permissions.
   */
  mountAccessReadWriteRoleIdList?: string[];
  /**
   * @remarks
   * The dataset name. You can call [ListDatasets](https://help.aliyun.com/document_detail/457222.html) to obtain the dataset name.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The extended field, which is a JSON string. When you use the dataset in Deep Learning Containers (DLC), you can configure the mountPath field to specify the default mount path of the dataset.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * The metadata records to be updated for the dataset files.
   * 
   * This parameter is required.
   */
  datasetFileMetas?: DatasetFileMetaConentUpdate[];
  /**
   * @remarks
   * The dataset version.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The ID of the tagging job that is associated with the metadata tag of the dataset file.
   * 
   * @example
   * dsjob-hv0b1****u8taig3y
   */
  tagJobId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the dataset belongs. To obtain the workspace ID, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
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
  /**
   * @remarks
   * The metadata records that fail to be updated for the dataset files.
   */
  failedDetails?: DatasetFileMetaResponse[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the metadata records of all dataset files were updated. Valid values: true and false. If the value is false, view the failure details specified by FailedDetails.
   * 
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
   * @remarks
   * The dataset version name.
   * 
   * @example
   * v1
   */
  datasetVersion?: string;
  /**
   * @remarks
   * The dataset job description.
   */
  description?: string;
  /**
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The configuration content. Formats:
   * 
   * *   MultimodalIntelligentTag
   * 
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   * 
   * *   MultimodalSemanticIndex
   * 
   * { "defaultModelId": "xxx" "defaultModelVersion":"1.0.0" }
   * 
   * @example
   * { "apiKey":"sk-xxxxxxxxxxxxxxxxxxxxx" }
   */
  config?: string;
  /**
   * @remarks
   * The configuration type.
   * 
   * *   MultimodalIntelligentTag
   * *   MultimodalSemanticIndex
   * 
   * @example
   * MultimodalSemanticIndex
   */
  configType?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
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
   * @remarks
   * The request ID.
   * 
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
  /**
   * @remarks
   * Id of the request
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
   * @remarks
   * The workspace ID. You can call [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html) to obtain the workspace ID.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The accessibility of the experiment in the workspace. Valid values:
   * 
   * *   PRIVATE: The experiment is accessible only to you and the administrator of the workspace.
   * *   PUBLIC: The experiment is accessible to all users in the workspace.
   * 
   * @example
   * PRIVATE
   */
  accessibility?: string;
  /**
   * @remarks
   * The experiment name. The name must meet the following requirements:
   * 
   * *   The name must start with a letter.
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must be 1 to 63 characters in length.
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The visibility of the model in the workspace. Valid values:
   * 
   * *   PRIVATE: The model is visible only to you and the administrator of the workspace.
   * *   PUBLIC: The model is visible to all users in the workspace.
   * 
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @remarks
   * The domain. This parameter describes the domain in which the model is applied. Valid values: nlp (natural language processing) and cv (computer vision).
   * 
   * @example
   * nlp
   */
  domain?: string;
  /**
   * @remarks
   * Other information about the model.
   * 
   * @example
   * {
   * 	"RatingCount": 2866,
   * 	"Rating": 4.94,
   * 	"FavoriteCount": 34992,
   * 	"CommentCount": 754,
   * 	"CoverUris": ["https://e***u.oss-cn-hangzhou.aliyuncs.com/drea***w.png"],
   * 	"TippedAmountCount": 32,
   * 	"DownloadCount": 606056
   * }
   */
  extraInfo?: { [key: string]: any };
  /**
   * @remarks
   * The model description.
   */
  modelDescription?: string;
  /**
   * @remarks
   * The documentation of the model.
   * 
   * @example
   * https://*.md
   */
  modelDoc?: string;
  /**
   * @remarks
   * The model name, which must be 1 to 127 characters in length.
   */
  modelName?: string;
  /**
   * @remarks
   * The model type. Valid values: Checkpoint and LoRA.
   * 
   * @example
   * Checkpoint
   */
  modelType?: string;
  /**
   * @remarks
   * The sequence number of the model. This parameter can be used for custom sorting.
   * 
   * @example
   * 0
   */
  orderNumber?: number;
  /**
   * @remarks
   * The source of the model. This parameter describes the community or organization to which the source model belongs. Valid values: ModelScope and HuggingFace.
   * 
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @remarks
   * The task. This parameter specifies the specific issue that the model resolves. Example: text-classification.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The approval status. Valid values:
   * 
   * *   Pending
   * *   Approved
   * *   Rejected
   * 
   * @example
   * Approved
   */
  approvalStatus?: string;
  /**
   * @remarks
   * The compression configuration.
   * 
   * @example
   * {}
   */
  compressionSpec?: { [key: string]: any };
  /**
   * @remarks
   * The evaluation configuration.
   * 
   * @example
   * {}
   */
  evaluationSpec?: { [key: string]: any };
  /**
   * @remarks
   * The additional information.
   * 
   * @example
   * {
   * 	"CoverUris": ["https://e***u.oss-cn-hangzhou.aliyuncs.com/st****017.preview.png"],
   * 	"TrainedWords": ["albedo_overlord"]
   * }
   */
  extraInfo?: { [key: string]: any };
  /**
   * @remarks
   * Describes how to apply to downstream inference services. For example, describes the processor and container of Elastic Algorithm Service (EAS). Example: `{ "processor": "tensorflow_gpu_1.12" }`.
   * 
   * @example
   * {     "processor": "tensorflow_gpu_1.12" }
   */
  inferenceSpec?: { [key: string]: any };
  /**
   * @remarks
   * The model metrics. The length after serialization is limited to 8,192.
   * 
   * @example
   * {
   *   "Results": [{
   *     "Dataset": {
   *       "DatasetId": "d-sdkjanksaklerhfd"
   *     },
   *     "Metrics": {
   *       "cer": 0.175
   *     }
   *   }, {
   *     "Dataset": {
   *       "Uri": "oss://xxxx/"
   *     },
   *     "Metrics": {
   *       "cer": 0.172
   *     }
   *   }]
   * }
   */
  metrics?: { [key: string]: any };
  /**
   * @remarks
   * The extended field, which is of the JsonString type.
   * 
   * @example
   * {}
   */
  options?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * *   If the source type is Custom, this field is not limited.
   * *   If the source type is PAIFlow or TrainingService, the format is:
   * 
   * <!---->
   * 
   *     region=<region_id>,workspaceId=<workspace_id>,kind=<kind>,id=<id>
   * 
   * Take note of the following parameters:
   * 
   * *   region is the region ID.
   * *   workspaceId is the ID of the workspace.
   * *   kind is the type. Valid values: PipelineRun (PAIFlow) and ServiceJob (training service).
   * *   id is a unique identifier.
   * 
   * @example
   * region=cn-shanghai,workspaceId=13**,kind=PipelineRun,id=run-sakdb****jdf
   */
  sourceId?: string;
  /**
   * @remarks
   * The type of the model source. Valid values:
   * 
   * *   Custom (default)
   * *   PAIFlow
   * *   TrainingService
   * 
   * @example
   * PAIFlow
   */
  sourceType?: string;
  /**
   * @remarks
   * The training configurations used for fine-tuning and incremental training.
   * 
   * @example
   * {}
   */
  trainingSpec?: { [key: string]: any };
  /**
   * @remarks
   * The model version description.
   */
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
   * @remarks
   * The request ID.
   * 
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
  /**
   * @remarks
   * The labels.
   */
  labels?: Label[];
  /**
   * @remarks
   * The run name. The name must meet the following requirements:
   * 
   * *   The name must start with a letter.
   * *   The name can contain letters, digits, underscores (_), and hyphens (-).
   * *   The name must be 1 to 63 characters in length.
   * 
   * @example
   * myName
   */
  name?: string;
  /**
   * @remarks
   * The parameters.
   */
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
   * The request ID.
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
   * @remarks
   * The workspace description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * *   The name must be 3 to 23 characters in length, and can contain letters, underscores (_), and digits.
   * *   The name must start with a letter.
   * *   The name must be unique in the current region.
   * 
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
   * @remarks
   * The request ID.
   * 
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
   * @remarks
   * The group name.
   * 
   * @example
   * group-kjds******sd
   */
  groupName?: string;
  /**
   * @remarks
   * Specifies whether the resource is the default resource. This parameter can only be set to true and cannot be set to false.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The resource tags. If you specify multiple tags, only resources that meet all the specified tag-based filter conditions are returned.
   */
  labels?: UpdateWorkspaceResourceRequestLabels[];
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
   * The resource IDs.
   * 
   * You cannot leave both GroupName and ResourceIds empty. If you specify both the parameters, the value of GroupName of each resource ID in the dataset must be the same.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
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
   * The specification of the resource.
   * 
   * @example
   * {
   *       "clusterType": "share"
   * }
   */
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The updated resource IDs.
   * 
   * @example
   * Resource-dks******jkf
   */
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
   * Receives and processes system event messages sent by DataWorks.
   * 
   * @remarks
   * This operation can be called only by the internal system and cannot be called by external users.
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
    return $dara.cast<AcceptDataworksEventResponse>(await this.callApi(params, req, runtime), new AcceptDataworksEventResponse({}));
  }

  /**
   * Receives and processes system event messages sent by DataWorks.
   * 
   * @remarks
   * This operation can be called only by the internal system and cannot be called by external users.
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
   * Adds a custom image to a workspace.
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

    if (!$dara.isNull(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!$dara.isNull(request.sourceType)) {
      body["SourceType"] = request.sourceType;
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
    return $dara.cast<AddImageResponse>(await this.callApi(params, req, runtime), new AddImageResponse({}));
  }

  /**
   * Adds a custom image to a workspace.
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
   * Adds tags to an image.
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
    return $dara.cast<AddImageLabelsResponse>(await this.callApi(params, req, runtime), new AddImageLabelsResponse({}));
  }

  /**
   * Adds tags to an image.
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
   * Adds a role to a member in a workspace. After you add a role to a member, the member is granted the permissions of the role.
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
    return $dara.cast<AddMemberRoleResponse>(await this.callApi(params, req, runtime), new AddMemberRoleResponse({}));
  }

  /**
   * Adds a role to a member in a workspace. After you add a role to a member, the member is granted the permissions of the role.
   * @returns AddMemberRoleResponse
   */
  async addMemberRole(WorkspaceId: string, MemberId: string, RoleName: string): Promise<AddMemberRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addMemberRoleWithOptions(WorkspaceId, MemberId, RoleName, headers, runtime);
  }

  /**
   * Changes the resource group to which a resource belongs based on the ID.
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
    return $dara.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  /**
   * Changes the resource group to which a resource belongs based on the ID.
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
   * Creates a code build in Platform for AI (PAI). You can configure Git branches and commit IDs. After the code build is created, you can reference the code build in a Deep Learning Containers (DLC) job.
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
    return $dara.cast<CreateCodeSourceResponse>(await this.callApi(params, req, runtime), new CreateCodeSourceResponse({}));
  }

  /**
   * Creates a code build in Platform for AI (PAI). You can configure Git branches and commit IDs. After the code build is created, you can reference the code build in a Deep Learning Containers (DLC) job.
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
   * Creates a dataset.
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
    return $dara.cast<CreateDatasetResponse>(await this.callApi(params, req, runtime), new CreateDatasetResponse({}));
  }

  /**
   * Creates a dataset.
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
   * Creates the metadata records of multiple files in a dataset at a time.
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
    return $dara.cast<CreateDatasetFileMetasResponse>(await this.callApi(params, req, runtime), new CreateDatasetFileMetasResponse({}));
  }

  /**
   * Creates the metadata records of multiple files in a dataset at a time.
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
   * Creates a dataset job.
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
    return $dara.cast<CreateDatasetJobResponse>(await this.callApi(params, req, runtime), new CreateDatasetJobResponse({}));
  }

  /**
   * Creates a dataset job.
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
   * Creates a job configuration for a dataset.
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
    return $dara.cast<CreateDatasetJobConfigResponse>(await this.callApi(params, req, runtime), new CreateDatasetJobConfigResponse({}));
  }

  /**
   * Creates a job configuration for a dataset.
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
   * Creates tags for a dataset.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   The tag key and value are not empty strings and cannot exceed 128 characters in length.
   * *   The tag key cannot start with any of the following strings: "aliyun", "acs", "http://", and "https://".
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
    return $dara.cast<CreateDatasetLabelsResponse>(await this.callApi(params, req, runtime), new CreateDatasetLabelsResponse({}));
  }

  /**
   * Creates tags for a dataset.
   * 
   * @remarks
   * Before you call this operation, take note of the following items:
   * *   The tag key and value are not empty strings and cannot exceed 128 characters in length.
   * *   The tag key cannot start with any of the following strings: "aliyun", "acs", "http://", and "https://".
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
   * Creates a dataset version.
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
    return $dara.cast<CreateDatasetVersionResponse>(await this.callApi(params, req, runtime), new CreateDatasetVersionResponse({}));
  }

  /**
   * Creates a dataset version.
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
   * Creates tags for a dataset version.
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
    return $dara.cast<CreateDatasetVersionLabelsResponse>(await this.callApi(params, req, runtime), new CreateDatasetVersionLabelsResponse({}));
  }

  /**
   * Creates tags for a dataset version.
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
   * Creates an experiment.
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
    return $dara.cast<CreateExperimentResponse>(await this.callApi(params, req, runtime), new CreateExperimentResponse({}));
  }

  /**
   * Creates an experiment.
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
   * Adds a user to a workspace as a member. You can add multiple users as members.
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
    return $dara.cast<CreateMemberResponse>(await this.callApi(params, req, runtime), new CreateMemberResponse({}));
  }

  /**
   * Adds a user to a workspace as a member. You can add multiple users as members.
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
   * Creates a model. A model is a collection of model versions. When you create a model, you must specify the model name and description.
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

    if (!$dara.isNull(request.tag)) {
      body["Tag"] = request.tag;
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
    return $dara.cast<CreateModelResponse>(await this.callApi(params, req, runtime), new CreateModelResponse({}));
  }

  /**
   * Creates a model. A model is a collection of model versions. When you create a model, you must specify the model name and description.
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
   * Creates a tag for a model.
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
    return $dara.cast<CreateModelLabelsResponse>(await this.callApi(params, req, runtime), new CreateModelLabelsResponse({}));
  }

  /**
   * Creates a tag for a model.
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
   * Creates a new version for the specified model.
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
    return $dara.cast<CreateModelVersionResponse>(await this.callApi(params, req, runtime), new CreateModelVersionResponse({}));
  }

  /**
   * Creates a new version for the specified model.
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
   * Creates a tag for a model version.
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
    return $dara.cast<CreateModelVersionLabelsResponse>(await this.callApi(params, req, runtime), new CreateModelVersionLabelsResponse({}));
  }

  /**
   * Creates a tag for a model version.
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
   * Creates a pay-as-you-go order for DataWorks, OSS, PAI, or MaxCompute.
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
    return $dara.cast<CreateProductOrdersResponse>(await this.callApi(params, req, runtime), new CreateProductOrdersResponse({}));
  }

  /**
   * Creates a pay-as-you-go order for DataWorks, OSS, PAI, or MaxCompute.
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
   * Creates a run. A run is an experiment that can be associated with a specific workload or simply a code execution.
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
    return $dara.cast<CreateRunResponse>(await this.callApi(params, req, runtime), new CreateRunResponse({}));
  }

  /**
   * Creates a run. A run is an experiment that can be associated with a specific workload or simply a code execution.
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
   * Creates a workspace.
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
    return $dara.cast<CreateWorkspaceResponse>(await this.callApi(params, req, runtime), new CreateWorkspaceResponse({}));
  }

  /**
   * Creates a workspace.
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
   * Associates resources with a workspace.
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
    return $dara.cast<CreateWorkspaceResourceResponse>(await this.callApi(params, req, runtime), new CreateWorkspaceResourceResponse({}));
  }

  /**
   * Associates resources with a workspace.
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
   * Deletes a code source based on the provided ID.
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
    return $dara.cast<DeleteCodeSourceResponse>(await this.callApi(params, req, runtime), new DeleteCodeSourceResponse({}));
  }

  /**
   * Deletes a code source based on the provided ID.
   * @returns DeleteCodeSourceResponse
   */
  async deleteCodeSource(CodeSourceId: string): Promise<DeleteCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCodeSourceWithOptions(CodeSourceId, headers, runtime);
  }

  /**
   * Deletes workspace configurations.
   * 
   * @param request - DeleteConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConfigResponse
   */
  async deleteConfigWithOptions(WorkspaceId: string, ConfigKey: string, request: DeleteConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/configs/${$dara.URL.percentEncode(ConfigKey)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteConfigResponse>(await this.callApi(params, req, runtime), new DeleteConfigResponse({}));
  }

  /**
   * Deletes workspace configurations.
   * 
   * @param request - DeleteConfigRequest
   * @returns DeleteConfigResponse
   */
  async deleteConfig(WorkspaceId: string, ConfigKey: string, request: DeleteConfigRequest): Promise<DeleteConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConfigWithOptions(WorkspaceId, ConfigKey, request, headers, runtime);
  }

  /**
   * Deletes a dataset.
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
    return $dara.cast<DeleteDatasetResponse>(await this.callApi(params, req, runtime), new DeleteDatasetResponse({}));
  }

  /**
   * Deletes a dataset.
   * @returns DeleteDatasetResponse
   */
  async deleteDataset(DatasetId: string): Promise<DeleteDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetWithOptions(DatasetId, headers, runtime);
  }

  /**
   * Deletes the metadata records of multiple files in a dataset at a time.
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
    return $dara.cast<DeleteDatasetFileMetasResponse>(await this.callApi(params, req, runtime), new DeleteDatasetFileMetasResponse({}));
  }

  /**
   * Deletes the metadata records of multiple files in a dataset at a time.
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
   * Deletes a dataset job.
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
    return $dara.cast<DeleteDatasetJobResponse>(await this.callApi(params, req, runtime), new DeleteDatasetJobResponse({}));
  }

  /**
   * Deletes a dataset job.
   * @returns DeleteDatasetJobResponse
   */
  async deleteDatasetJob(DatasetId: string, DatasetJobId: string): Promise<DeleteDatasetJobResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetJobWithOptions(DatasetId, DatasetJobId, headers, runtime);
  }

  /**
   * Deletes a job configuration for a dataset.
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
    return $dara.cast<DeleteDatasetJobConfigResponse>(await this.callApi(params, req, runtime), new DeleteDatasetJobConfigResponse({}));
  }

  /**
   * Deletes a job configuration for a dataset.
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
   * Deletes a dataset tag.
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
    return $dara.cast<DeleteDatasetLabelsResponse>(await this.callApi(params, req, runtime), new DeleteDatasetLabelsResponse({}));
  }

  /**
   * Deletes a dataset tag.
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
   * Deletes the information about a specified version of a dataset. Version v1 cannot be deleted by using this operation. When you call the DeleteDataset operation to delete a dataset, it can be deleted at the same time.
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
    return $dara.cast<DeleteDatasetVersionResponse>(await this.callApi(params, req, runtime), new DeleteDatasetVersionResponse({}));
  }

  /**
   * Deletes the information about a specified version of a dataset. Version v1 cannot be deleted by using this operation. When you call the DeleteDataset operation to delete a dataset, it can be deleted at the same time.
   * @returns DeleteDatasetVersionResponse
   */
  async deleteDatasetVersion(DatasetId: string, VersionName: string): Promise<DeleteDatasetVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDatasetVersionWithOptions(DatasetId, VersionName, headers, runtime);
  }

  /**
   * Deletes tags for a dataset version.
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
    return $dara.cast<DeleteDatasetVersionLabelsResponse>(await this.callApi(params, req, runtime), new DeleteDatasetVersionLabelsResponse({}));
  }

  /**
   * Deletes tags for a dataset version.
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
   * Deletes an experiment.
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
    return $dara.cast<DeleteExperimentResponse>(await this.callApi(params, req, runtime), new DeleteExperimentResponse({}));
  }

  /**
   * Deletes an experiment.
   * @returns DeleteExperimentResponse
   */
  async deleteExperiment(ExperimentId: string): Promise<DeleteExperimentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentWithOptions(ExperimentId, headers, runtime);
  }

  /**
   * Deletes an experiment tag.
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
    return $dara.cast<DeleteExperimentLabelResponse>(await this.callApi(params, req, runtime), new DeleteExperimentLabelResponse({}));
  }

  /**
   * Deletes an experiment tag.
   * @returns DeleteExperimentLabelResponse
   */
  async deleteExperimentLabel(ExperimentId: string, Key: string): Promise<DeleteExperimentLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentLabelWithOptions(ExperimentId, Key, headers, runtime);
  }

  /**
   * Deletes a member from a workspace.
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
    return $dara.cast<DeleteMembersResponse>(await this.callApi(params, req, runtime), new DeleteMembersResponse({}));
  }

  /**
   * Deletes a member from a workspace.
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
   * Deletes a model.
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
    return $dara.cast<DeleteModelResponse>(await this.callApi(params, req, runtime), new DeleteModelResponse({}));
  }

  /**
   * Deletes a model.
   * @returns DeleteModelResponse
   */
  async deleteModel(ModelId: string): Promise<DeleteModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelWithOptions(ModelId, headers, runtime);
  }

  /**
   * Deletes the labels of a model.
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
    return $dara.cast<DeleteModelLabelsResponse>(await this.callApi(params, req, runtime), new DeleteModelLabelsResponse({}));
  }

  /**
   * Deletes the labels of a model.
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
   * Deletes a model version.
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
    return $dara.cast<DeleteModelVersionResponse>(await this.callApi(params, req, runtime), new DeleteModelVersionResponse({}));
  }

  /**
   * Deletes a model version.
   * @returns DeleteModelVersionResponse
   */
  async deleteModelVersion(ModelId: string, VersionName: string): Promise<DeleteModelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModelVersionWithOptions(ModelId, VersionName, headers, runtime);
  }

  /**
   * Delete a model version tag.
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
    return $dara.cast<DeleteModelVersionLabelsResponse>(await this.callApi(params, req, runtime), new DeleteModelVersionLabelsResponse({}));
  }

  /**
   * Delete a model version tag.
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
   * Deletes a run.
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
    return $dara.cast<DeleteRunResponse>(await this.callApi(params, req, runtime), new DeleteRunResponse({}));
  }

  /**
   * Deletes a run.
   * @returns DeleteRunResponse
   */
  async deleteRun(RunId: string): Promise<DeleteRunResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRunWithOptions(RunId, headers, runtime);
  }

  /**
   * Deletes a tag that is added to a run.
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
    return $dara.cast<DeleteRunLabelResponse>(await this.callApi(params, req, runtime), new DeleteRunLabelResponse({}));
  }

  /**
   * Deletes a tag that is added to a run.
   * @returns DeleteRunLabelResponse
   */
  async deleteRunLabel(RunId: string, Key: string): Promise<DeleteRunLabelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRunLabelWithOptions(RunId, Key, headers, runtime);
  }

  /**
   * Deletes user configurations.
   * 
   * @param request - DeleteUserConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUserConfigResponse
   */
  async deleteUserConfigWithOptions(CategoryName: string, request: DeleteUserConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteUserConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configKey)) {
      query["ConfigKey"] = request.configKey;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteUserConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/userconfigs/${$dara.URL.percentEncode(CategoryName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteUserConfigResponse>(await this.callApi(params, req, runtime), new DeleteUserConfigResponse({}));
  }

  /**
   * Deletes user configurations.
   * 
   * @param request - DeleteUserConfigRequest
   * @returns DeleteUserConfigResponse
   */
  async deleteUserConfig(CategoryName: string, request: DeleteUserConfigRequest): Promise<DeleteUserConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteUserConfigWithOptions(CategoryName, request, headers, runtime);
  }

  /**
   * Deletes a workspace. After you delete a workspace, the associated resources are not automatically released. You must manually release the resources.
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
    return $dara.cast<DeleteWorkspaceResponse>(await this.callApi(params, req, runtime), new DeleteWorkspaceResponse({}));
  }

  /**
   * Deletes a workspace. After you delete a workspace, the associated resources are not automatically released. You must manually release the resources.
   * @returns DeleteWorkspaceResponse
   */
  async deleteWorkspace(WorkspaceId: string): Promise<DeleteWorkspaceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteWorkspaceWithOptions(WorkspaceId, headers, runtime);
  }

  /**
   * Deletes a resource from a workspace. The resource is not deleted at the underlying layer.
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
    return $dara.cast<DeleteWorkspaceResourceResponse>(await this.callApi(params, req, runtime), new DeleteWorkspaceResourceResponse({}));
  }

  /**
   * Deletes a resource from a workspace. The resource is not deleted at the underlying layer.
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
   * Obtains the details of a code source.
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
    return $dara.cast<GetCodeSourceResponse>(await this.callApi(params, req, runtime), new GetCodeSourceResponse({}));
  }

  /**
   * Obtains the details of a code source.
   * @returns GetCodeSourceResponse
   */
  async getCodeSource(CodeSourceId: string): Promise<GetCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCodeSourceWithOptions(CodeSourceId, headers, runtime);
  }

  /**
   * 获取配置
   * 
   * @param request - GetConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConfigResponse
   */
  async getConfigWithOptions(WorkspaceId: string, request: GetConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.configKey)) {
      query["ConfigKey"] = request.configKey;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetConfigResponse>(await this.callApi(params, req, runtime), new GetConfigResponse({}));
  }

  /**
   * 获取配置
   * 
   * @param request - GetConfigRequest
   * @returns GetConfigResponse
   */
  async getConfig(WorkspaceId: string, request: GetConfigRequest): Promise<GetConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConfigWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Obtains a dataset.
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
    return $dara.cast<GetDatasetResponse>(await this.callApi(params, req, runtime), new GetDatasetResponse({}));
  }

  /**
   * Obtains a dataset.
   * @returns GetDatasetResponse
   */
  async getDataset(DatasetId: string): Promise<GetDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetWithOptions(DatasetId, headers, runtime);
  }

  /**
   * Queries the metadata records of specific files in a dataset.
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
    return $dara.cast<GetDatasetFileMetaResponse>(await this.callApi(params, req, runtime), new GetDatasetFileMetaResponse({}));
  }

  /**
   * Queries the metadata records of specific files in a dataset.
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
   * Obtains metadata statistics of a dataset.
   * 
   * @param request - GetDatasetFileMetasStatisticsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDatasetFileMetasStatisticsResponse
   */
  async getDatasetFileMetasStatisticsWithOptions(DatasetId: string, request: GetDatasetFileMetasStatisticsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDatasetFileMetasStatisticsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.aggregateBy)) {
      query["AggregateBy"] = request.aggregateBy;
    }

    if (!$dara.isNull(request.datasetVersion)) {
      query["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!$dara.isNull(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetDatasetFileMetasStatistics",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/statistics/datasets/${$dara.URL.percentEncode(DatasetId)}/datasetfilemetas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetDatasetFileMetasStatisticsResponse>(await this.callApi(params, req, runtime), new GetDatasetFileMetasStatisticsResponse({}));
  }

  /**
   * Obtains metadata statistics of a dataset.
   * 
   * @param request - GetDatasetFileMetasStatisticsRequest
   * @returns GetDatasetFileMetasStatisticsResponse
   */
  async getDatasetFileMetasStatistics(DatasetId: string, request: GetDatasetFileMetasStatisticsRequest): Promise<GetDatasetFileMetasStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetFileMetasStatisticsWithOptions(DatasetId, request, headers, runtime);
  }

  /**
   * Obtains a dataset job.
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
    return $dara.cast<GetDatasetJobResponse>(await this.callApi(params, req, runtime), new GetDatasetJobResponse({}));
  }

  /**
   * Obtains a dataset job.
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
   * Obtains a job configuration for a dataset.
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
    return $dara.cast<GetDatasetJobConfigResponse>(await this.callApi(params, req, runtime), new GetDatasetJobConfigResponse({}));
  }

  /**
   * Obtains a job configuration for a dataset.
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
   * Obtains the information about a specified version of a dataset.
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
    return $dara.cast<GetDatasetVersionResponse>(await this.callApi(params, req, runtime), new GetDatasetVersionResponse({}));
  }

  /**
   * Obtains the information about a specified version of a dataset.
   * @returns GetDatasetVersionResponse
   */
  async getDatasetVersion(DatasetId: string, VersionName: string): Promise<GetDatasetVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDatasetVersionWithOptions(DatasetId, VersionName, headers, runtime);
  }

  /**
   * Queries information about the default workspace.
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
    return $dara.cast<GetDefaultWorkspaceResponse>(await this.callApi(params, req, runtime), new GetDefaultWorkspaceResponse({}));
  }

  /**
   * Queries information about the default workspace.
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
   * Obtains an experiment.
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
    return $dara.cast<GetExperimentResponse>(await this.callApi(params, req, runtime), new GetExperimentResponse({}));
  }

  /**
   * Obtains an experiment.
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
   * Obtains the information about an image.
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
    return $dara.cast<GetImageResponse>(await this.callApi(params, req, runtime), new GetImageResponse({}));
  }

  /**
   * Obtains the information about an image.
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
   * Obtains a member in a workspace.
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
    return $dara.cast<GetMemberResponse>(await this.callApi(params, req, runtime), new GetMemberResponse({}));
  }

  /**
   * Obtains a member in a workspace.
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
   * Obtains the details of a specified model.
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
    return $dara.cast<GetModelResponse>(await this.callApi(params, req, runtime), new GetModelResponse({}));
  }

  /**
   * Obtains the details of a specified model.
   * @returns GetModelResponse
   */
  async getModel(ModelId: string): Promise<GetModelResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelWithOptions(ModelId, headers, runtime);
  }

  /**
   * Queries a model version.
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
    return $dara.cast<GetModelVersionResponse>(await this.callApi(params, req, runtime), new GetModelVersionResponse({}));
  }

  /**
   * Queries a model version.
   * @returns GetModelVersionResponse
   */
  async getModelVersion(ModelId: string, VersionName: string): Promise<GetModelVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModelVersionWithOptions(ModelId, VersionName, headers, runtime);
  }

  /**
   * Obtains permissions on a workspace.
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
    return $dara.cast<GetPermissionResponse>(await this.callApi(params, req, runtime), new GetPermissionResponse({}));
  }

  /**
   * Obtains permissions on a workspace.
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
   * Queries the run information.
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
    return $dara.cast<GetRunResponse>(await this.callApi(params, req, runtime), new GetRunResponse({}));
  }

  /**
   * Queries the run information.
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
   * Queries the details about a workspace.
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
    return $dara.cast<GetWorkspaceResponse>(await this.callApi(params, req, runtime), new GetWorkspaceResponse({}));
  }

  /**
   * Queries the details about a workspace.
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
   * Lists code sources. Pagination, sorting, and filtering by condition are supported.
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
    return $dara.cast<ListCodeSourcesResponse>(await this.callApi(params, req, runtime), new ListCodeSourcesResponse({}));
  }

  /**
   * Lists code sources. Pagination, sorting, and filtering by condition are supported.
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
   * 获取配置
   * 
   * @param request - ListConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConfigsResponse
   */
  async listConfigsWithOptions(WorkspaceId: string, request: ListConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryName)) {
      query["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.configKeys)) {
      query["ConfigKeys"] = request.configKeys;
    }

    if (!$dara.isNull(request.labels)) {
      query["Labels"] = request.labels;
    }

    if (!$dara.isNull(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConfigs",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListConfigsResponse>(await this.callApi(params, req, runtime), new ListConfigsResponse({}));
  }

  /**
   * 获取配置
   * 
   * @param request - ListConfigsRequest
   * @returns ListConfigsResponse
   */
  async listConfigs(WorkspaceId: string, request: ListConfigsRequest): Promise<ListConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConfigsWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Queries a list of dataset files.
   * 
   * @param tmpReq - ListDatasetFileMetasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDatasetFileMetasResponse
   */
  async listDatasetFileMetasWithOptions(DatasetId: string, tmpReq: ListDatasetFileMetasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDatasetFileMetasResponse> {
    tmpReq.validate();
    let request = new ListDatasetFileMetasShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.queryFileTypeIncludeAny)) {
      request.queryFileTypeIncludeAnyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryFileTypeIncludeAny, "QueryFileTypeIncludeAny", "simple");
    }

    if (!$dara.isNull(tmpReq.queryTagsExclude)) {
      request.queryTagsExcludeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryTagsExclude, "QueryTagsExclude", "simple");
    }

    if (!$dara.isNull(tmpReq.queryTagsIncludeAll)) {
      request.queryTagsIncludeAllShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryTagsIncludeAll, "QueryTagsIncludeAll", "simple");
    }

    if (!$dara.isNull(tmpReq.queryTagsIncludeAny)) {
      request.queryTagsIncludeAnyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queryTagsIncludeAny, "QueryTagsIncludeAny", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.datasetVersion)) {
      query["DatasetVersion"] = request.datasetVersion;
    }

    if (!$dara.isNull(request.endFileUpdateTime)) {
      query["EndFileUpdateTime"] = request.endFileUpdateTime;
    }

    if (!$dara.isNull(request.endTagUpdateTime)) {
      query["EndTagUpdateTime"] = request.endTagUpdateTime;
    }

    if (!$dara.isNull(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
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

    if (!$dara.isNull(request.queryFileDir)) {
      query["QueryFileDir"] = request.queryFileDir;
    }

    if (!$dara.isNull(request.queryFileName)) {
      query["QueryFileName"] = request.queryFileName;
    }

    if (!$dara.isNull(request.queryFileTypeIncludeAnyShrink)) {
      query["QueryFileTypeIncludeAny"] = request.queryFileTypeIncludeAnyShrink;
    }

    if (!$dara.isNull(request.queryImage)) {
      query["QueryImage"] = request.queryImage;
    }

    if (!$dara.isNull(request.queryTagsExcludeShrink)) {
      query["QueryTagsExclude"] = request.queryTagsExcludeShrink;
    }

    if (!$dara.isNull(request.queryTagsIncludeAllShrink)) {
      query["QueryTagsIncludeAll"] = request.queryTagsIncludeAllShrink;
    }

    if (!$dara.isNull(request.queryTagsIncludeAnyShrink)) {
      query["QueryTagsIncludeAny"] = request.queryTagsIncludeAnyShrink;
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

    if (!$dara.isNull(request.startTagUpdateTime)) {
      query["StartTagUpdateTime"] = request.startTagUpdateTime;
    }

    if (!$dara.isNull(request.thumbnailMode)) {
      query["ThumbnailMode"] = request.thumbnailMode;
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
    return $dara.cast<ListDatasetFileMetasResponse>(await this.callApi(params, req, runtime), new ListDatasetFileMetasResponse({}));
  }

  /**
   * Queries a list of dataset files.
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
   * Queries the dataset job configurations at a time.
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
    return $dara.cast<ListDatasetJobConfigsResponse>(await this.callApi(params, req, runtime), new ListDatasetJobConfigsResponse({}));
  }

  /**
   * Queries the dataset job configurations at a time.
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
   * Lists jobs in a dataset.
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
    return $dara.cast<ListDatasetJobsResponse>(await this.callApi(params, req, runtime), new ListDatasetJobsResponse({}));
  }

  /**
   * Lists jobs in a dataset.
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
   * Lists dataset versions.
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
    return $dara.cast<ListDatasetVersionsResponse>(await this.callApi(params, req, runtime), new ListDatasetVersionsResponse({}));
  }

  /**
   * Lists dataset versions.
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
   * Lists the datasets in a workspace.
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
    return $dara.cast<ListDatasetsResponse>(await this.callApi(params, req, runtime), new ListDatasetsResponse({}));
  }

  /**
   * Lists the datasets in a workspace.
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
   * Lists experiments.
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
    return $dara.cast<ListExperimentResponse>(await this.callApi(params, req, runtime), new ListExperimentResponse({}));
  }

  /**
   * Lists experiments.
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
   * Lists all tags of an image.
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
    return $dara.cast<ListImageLabelsResponse>(await this.callApi(params, req, runtime), new ListImageLabelsResponse({}));
  }

  /**
   * Lists all tags of an image.
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
   * Queries a list of images.
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
    return $dara.cast<ListImagesResponse>(await this.callApi(params, req, runtime), new ListImagesResponse({}));
  }

  /**
   * Queries a list of images.
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
   * Obtains the members in a workspace.
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
    return $dara.cast<ListMembersResponse>(await this.callApi(params, req, runtime), new ListMembersResponse({}));
  }

  /**
   * Obtains the members in a workspace.
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
   * Queries a list of model versions.
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
    return $dara.cast<ListModelVersionsResponse>(await this.callApi(params, req, runtime), new ListModelVersionsResponse({}));
  }

  /**
   * Queries a list of model versions.
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
   * Queries a list of models.
   * 
   * @param tmpReq - ListModelsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListModelsResponse
   */
  async listModelsWithOptions(tmpReq: ListModelsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListModelsResponse> {
    tmpReq.validate();
    let request = new ListModelsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

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

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
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
    return $dara.cast<ListModelsResponse>(await this.callApi(params, req, runtime), new ListModelsResponse({}));
  }

  /**
   * Queries a list of models.
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
   * Lists the permissions that a user has in a workspace.
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
    return $dara.cast<ListPermissionsResponse>(await this.callApi(params, req, runtime), new ListPermissionsResponse({}));
  }

  /**
   * Lists the permissions that a user has in a workspace.
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
    return $dara.cast<ListProductsResponse>(await this.callApi(params, req, runtime), new ListProductsResponse({}));
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
   * Obtains the list of quotas.
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
    return $dara.cast<ListQuotasResponse>(await this.callApi(params, req, runtime), new ListQuotasResponse({}));
  }

  /**
   * Obtains the list of quotas.
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
   * Queries the resources that are associated with a workspace.
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
    return $dara.cast<ListResourcesResponse>(await this.callApi(params, req, runtime), new ListResourcesResponse({}));
  }

  /**
   * Queries the resources that are associated with a workspace.
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
   * Lists the metrics for a run.
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
    return $dara.cast<ListRunMetricsResponse>(await this.callApi(params, req, runtime), new ListRunMetricsResponse({}));
  }

  /**
   * Lists the metrics for a run.
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
   * Queries a list of runs.
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
    return $dara.cast<ListRunsResponse>(await this.callApi(params, req, runtime), new ListRunsResponse({}));
  }

  /**
   * Queries a list of runs.
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
   * Queries user information.
   * 
   * @param request - ListUserConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUserConfigsResponse
   */
  async listUserConfigsWithOptions(request: ListUserConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListUserConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryNames)) {
      query["CategoryNames"] = request.categoryNames;
    }

    if (!$dara.isNull(request.configKeys)) {
      query["ConfigKeys"] = request.configKeys;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListUserConfigs",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/userconfigs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListUserConfigsResponse>(await this.callApi(params, req, runtime), new ListUserConfigsResponse({}));
  }

  /**
   * Queries user information.
   * 
   * @param request - ListUserConfigsRequest
   * @returns ListUserConfigsResponse
   */
  async listUserConfigs(request: ListUserConfigsRequest): Promise<ListUserConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Lists the users who do not belong to a workspace. These users can be added to the workspace as members.
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
    return $dara.cast<ListWorkspaceUsersResponse>(await this.callApi(params, req, runtime), new ListWorkspaceUsersResponse({}));
  }

  /**
   * Lists the users who do not belong to a workspace. These users can be added to the workspace as members.
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
   * Lists all workspaces in a region.
   * 
   * @remarks
   * You can use the option parameter to specify query options, so as to obtain different information about the workspaces.
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
    return $dara.cast<ListWorkspacesResponse>(await this.callApi(params, req, runtime), new ListWorkspacesResponse({}));
  }

  /**
   * Lists all workspaces in a region.
   * 
   * @remarks
   * You can use the option parameter to specify query options, so as to obtain different information about the workspaces.
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
   * Logs multiple metrics for a run at a time.
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
    return $dara.cast<LogRunMetricsResponse>(await this.callApi(params, req, runtime), new LogRunMetricsResponse({}));
  }

  /**
   * Logs multiple metrics for a run at a time.
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
   * Publishes a private code source to a workspace to make the code source publicly accessible.
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
    return $dara.cast<PublishCodeSourceResponse>(await this.callApi(params, req, runtime), new PublishCodeSourceResponse({}));
  }

  /**
   * Publishes a private code source to a workspace to make the code source publicly accessible.
   * @returns PublishCodeSourceResponse
   */
  async publishCodeSource(CodeSourceId: string): Promise<PublishCodeSourceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishCodeSourceWithOptions(CodeSourceId, headers, runtime);
  }

  /**
   * Publishes a private dataset in a workspace.
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
    return $dara.cast<PublishDatasetResponse>(await this.callApi(params, req, runtime), new PublishDatasetResponse({}));
  }

  /**
   * Publishes a private dataset in a workspace.
   * @returns PublishDatasetResponse
   */
  async publishDataset(DatasetId: string): Promise<PublishDatasetResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishDatasetWithOptions(DatasetId, headers, runtime);
  }

  /**
   * Publishes an image. After the image is published, the visibility of the image is changed from PRIVATE to PUBLIC.
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
    return $dara.cast<PublishImageResponse>(await this.callApi(params, req, runtime), new PublishImageResponse({}));
  }

  /**
   * Publishes an image. After the image is published, the visibility of the image is changed from PRIVATE to PUBLIC.
   * @returns PublishImageResponse
   */
  async publishImage(ImageId: string): Promise<PublishImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishImageWithOptions(ImageId, headers, runtime);
  }

  /**
   * Removes an image.
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
    return $dara.cast<RemoveImageResponse>(await this.callApi(params, req, runtime), new RemoveImageResponse({}));
  }

  /**
   * Removes an image.
   * @returns RemoveImageResponse
   */
  async removeImage(ImageId: string): Promise<RemoveImageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeImageWithOptions(ImageId, headers, runtime);
  }

  /**
   * Removes an image tag.
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
    return $dara.cast<RemoveImageLabelsResponse>(await this.callApi(params, req, runtime), new RemoveImageLabelsResponse({}));
  }

  /**
   * Removes an image tag.
   * @returns RemoveImageLabelsResponse
   */
  async removeImageLabels(ImageId: string, LabelKey: string): Promise<RemoveImageLabelsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeImageLabelsWithOptions(ImageId, LabelKey, headers, runtime);
  }

  /**
   * Removes a member role.
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
    return $dara.cast<RemoveMemberRoleResponse>(await this.callApi(params, req, runtime), new RemoveMemberRoleResponse({}));
  }

  /**
   * Removes a member role.
   * @returns RemoveMemberRoleResponse
   */
  async removeMemberRole(WorkspaceId: string, MemberId: string, RoleName: string): Promise<RemoveMemberRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeMemberRoleWithOptions(WorkspaceId, MemberId, RoleName, headers, runtime);
  }

  /**
   * Updates a experiment tag.
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
    return $dara.cast<SetExperimentLabelsResponse>(await this.callApi(params, req, runtime), new SetExperimentLabelsResponse({}));
  }

  /**
   * Updates a experiment tag.
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
   * Updates the user configurations.
   * 
   * @param request - SetUserConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetUserConfigsResponse
   */
  async setUserConfigsWithOptions(request: SetUserConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<SetUserConfigsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configs)) {
      body["Configs"] = request.configs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "SetUserConfigs",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/userconfigs`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<SetUserConfigsResponse>(await this.callApi(params, req, runtime), new SetUserConfigsResponse({}));
  }

  /**
   * Updates the user configurations.
   * 
   * @param request - SetUserConfigsRequest
   * @returns SetUserConfigsResponse
   */
  async setUserConfigs(request: SetUserConfigsRequest): Promise<SetUserConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.setUserConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Stops a dataset job.
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
    return $dara.cast<StopDatasetJobResponse>(await this.callApi(params, req, runtime), new StopDatasetJobResponse({}));
  }

  /**
   * Stops a dataset job.
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
   * Updates a code build.
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
    return $dara.cast<UpdateCodeSourceResponse>(await this.callApi(params, req, runtime), new UpdateCodeSourceResponse({}));
  }

  /**
   * Updates a code build.
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
   * 更新配置
   * 
   * @param request - UpdateConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConfigResponse
   */
  async updateConfigWithOptions(WorkspaceId: string, request: UpdateConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateConfigResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.categoryName)) {
      body["CategoryName"] = request.categoryName;
    }

    if (!$dara.isNull(request.configKey)) {
      body["ConfigKey"] = request.configKey;
    }

    if (!$dara.isNull(request.configValue)) {
      body["ConfigValue"] = request.configValue;
    }

    if (!$dara.isNull(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConfig",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateConfigResponse>(await this.callApi(params, req, runtime), new UpdateConfigResponse({}));
  }

  /**
   * 更新配置
   * 
   * @param request - UpdateConfigRequest
   * @returns UpdateConfigResponse
   */
  async updateConfig(WorkspaceId: string, request: UpdateConfigRequest): Promise<UpdateConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConfigWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * 更新配置
   * 
   * @param request - UpdateConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateConfigsResponse
   */
  async updateConfigsWithOptions(WorkspaceId: string, request: UpdateConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateConfigsResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.configs)) {
      body["Configs"] = request.configs;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateConfigs",
      version: "2021-02-04",
      protocol: "HTTPS",
      pathname: `/api/v1/workspaces/${$dara.URL.percentEncode(WorkspaceId)}/configs`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateConfigsResponse>(await this.callApi(params, req, runtime), new UpdateConfigsResponse({}));
  }

  /**
   * 更新配置
   * 
   * @param request - UpdateConfigsRequest
   * @returns UpdateConfigsResponse
   */
  async updateConfigs(WorkspaceId: string, request: UpdateConfigsRequest): Promise<UpdateConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateConfigsWithOptions(WorkspaceId, request, headers, runtime);
  }

  /**
   * Updates the name, description, and other information about a dataset.
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
    return $dara.cast<UpdateDatasetResponse>(await this.callApi(params, req, runtime), new UpdateDatasetResponse({}));
  }

  /**
   * Updates the name, description, and other information about a dataset.
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
   * Updates the metadata records of multiple files in a dataset at a time.
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
    return $dara.cast<UpdateDatasetFileMetasResponse>(await this.callApi(params, req, runtime), new UpdateDatasetFileMetasResponse({}));
  }

  /**
   * Updates the metadata records of multiple files in a dataset at a time.
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
   * Updates a dataset job.
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
    return $dara.cast<UpdateDatasetJobResponse>(await this.callApi(params, req, runtime), new UpdateDatasetJobResponse({}));
  }

  /**
   * Updates a dataset job.
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
   * Updates a job configuration for a dataset.
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
    return $dara.cast<UpdateDatasetJobConfigResponse>(await this.callApi(params, req, runtime), new UpdateDatasetJobConfigResponse({}));
  }

  /**
   * Updates a job configuration for a dataset.
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
   * Updates the information about a specified version of a dataset.
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
    return $dara.cast<UpdateDatasetVersionResponse>(await this.callApi(params, req, runtime), new UpdateDatasetVersionResponse({}));
  }

  /**
   * Updates the information about a specified version of a dataset.
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
   * Specifies a workspace as the default workspace.
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
    return $dara.cast<UpdateDefaultWorkspaceResponse>(await this.callApi(params, req, runtime), new UpdateDefaultWorkspaceResponse({}));
  }

  /**
   * Specifies a workspace as the default workspace.
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
   * Updates an experiment.
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
    return $dara.cast<UpdateExperimentResponse>(await this.callApi(params, req, runtime), new UpdateExperimentResponse({}));
  }

  /**
   * Updates an experiment.
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
   * Updates the basic configuration information about a model.
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
    return $dara.cast<UpdateModelResponse>(await this.callApi(params, req, runtime), new UpdateModelResponse({}));
  }

  /**
   * Updates the basic configuration information about a model.
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
   * Updates a model version.
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
    return $dara.cast<UpdateModelVersionResponse>(await this.callApi(params, req, runtime), new UpdateModelVersionResponse({}));
  }

  /**
   * Updates a model version.
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
   * Updates the run information.
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
    return $dara.cast<UpdateRunResponse>(await this.callApi(params, req, runtime), new UpdateRunResponse({}));
  }

  /**
   * Updates the run information.
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
   * Updates the name and description of a workspace.
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
    return $dara.cast<UpdateWorkspaceResponse>(await this.callApi(params, req, runtime), new UpdateWorkspaceResponse({}));
  }

  /**
   * Updates the name and description of a workspace.
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
   * Updates the resources of a workspace.
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
    return $dara.cast<UpdateWorkspaceResourceResponse>(await this.callApi(params, req, runtime), new UpdateWorkspaceResourceResponse({}));
  }

  /**
   * Updates the resources of a workspace.
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
