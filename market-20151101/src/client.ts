// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class CreateOrderResponseBodyInstanceIds extends $dara.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CrossAccountVerifyTokenResponseBodyResult extends $dara.Model {
  authRoles?: string[];
  /**
   * @example
   * 1676974108866
   */
  authTime?: number;
  /**
   * @example
   * marketplace_wangxiao_test
   */
  name?: string;
  /**
   * @example
   * 1744526877246715
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      authRoles: 'AuthRoles',
      authTime: 'AuthTime',
      name: 'Name',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authRoles: { 'type': 'array', 'itemType': 'string' },
      authTime: 'number',
      name: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authRoles)) {
      $dara.Model.validateArray(this.authRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMeteringResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 102277855749****
   */
  aliyunPk?: number;
  /**
   * @example
   * cmapi0004****
   */
  productCode?: string;
  productName?: string;
  totalCapacity?: number;
  /**
   * @example
   * 98
   */
  totalQuota?: number;
  /**
   * @example
   * 220
   */
  totalUsage?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'AliyunPk',
      productCode: 'ProductCode',
      productName: 'ProductName',
      totalCapacity: 'TotalCapacity',
      totalQuota: 'TotalQuota',
      totalUsage: 'TotalUsage',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'number',
      productCode: 'string',
      productName: 'string',
      totalCapacity: 'number',
      totalQuota: 'number',
      totalUsage: 'number',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCurrentNodeInfoResponseBodyResult extends $dara.Model {
  /**
   * @example
   * false
   */
  allowRollbackNode?: boolean;
  /**
   * @example
   * false
   */
  autoFinishNode?: boolean;
  /**
   * @example
   * 4
   */
  finalStepNo?: number;
  /**
   * @example
   * 1588920725000
   */
  gmtExpired?: number;
  /**
   * @example
   * 1588920725000
   */
  gmtFinished?: number;
  /**
   * @example
   * 1588834325000
   */
  gmtStart?: number;
  /**
   * @example
   * false
   */
  needAttachment?: boolean;
  /**
   * @example
   * 8473
   */
  nextNodeId?: number;
  /**
   * @example
   * 8472
   */
  nodeId?: number;
  nodeName?: string;
  /**
   * @example
   * Starting
   */
  nodeStatus?: string;
  /**
   * @example
   * Provider
   */
  operatorRole?: string;
  /**
   * @example
   * 0
   */
  parentNodeId?: number;
  /**
   * @example
   * 8471
   */
  previousNodeId?: number;
  /**
   * @example
   * 3
   */
  stepNo?: number;
  templateForm?: string;
  static names(): { [key: string]: string } {
    return {
      allowRollbackNode: 'AllowRollbackNode',
      autoFinishNode: 'AutoFinishNode',
      finalStepNo: 'FinalStepNo',
      gmtExpired: 'GmtExpired',
      gmtFinished: 'GmtFinished',
      gmtStart: 'GmtStart',
      needAttachment: 'NeedAttachment',
      nextNodeId: 'NextNodeId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeStatus: 'NodeStatus',
      operatorRole: 'OperatorRole',
      parentNodeId: 'ParentNodeId',
      previousNodeId: 'PreviousNodeId',
      stepNo: 'StepNo',
      templateForm: 'TemplateForm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRollbackNode: 'boolean',
      autoFinishNode: 'boolean',
      finalStepNo: 'number',
      gmtExpired: 'number',
      gmtFinished: 'number',
      gmtStart: 'number',
      needAttachment: 'boolean',
      nextNodeId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      nodeStatus: 'string',
      operatorRole: 'string',
      parentNodeId: 'number',
      previousNodeId: 'number',
      stepNo: 'number',
      templateForm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * supplierName
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cmj0000000
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

export class DescribeDistributionProductsResponseBodyResults extends $dara.Model {
  /**
   * @example
   * cmap*****
   */
  code?: string;
  firstCategoryName?: string;
  /**
   * @example
   * //photogallery.oss-cn-hangzhou.aliyuncs.com/photo/1744526877246715/09605255-87fd-44d1-8143-96ebc8019d46.jpeg
   */
  imageUrl?: string;
  name?: string;
  /**
   * @example
   * 100
   */
  price?: string;
  /**
   * @example
   * 5
   */
  score?: string;
  secondCategoryName?: string;
  shortDescription?: string;
  /**
   * @example
   * 30
   */
  submissionRadio?: string;
  supplierName?: string;
  /**
   * @example
   * 1911534921******
   */
  supplierUId?: string;
  /**
   * @example
   * 109
   */
  tradeCount?: string;
  type?: string;
  /**
   * @example
   * 55
   */
  userCommentCount?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      firstCategoryName: 'FirstCategoryName',
      imageUrl: 'ImageUrl',
      name: 'Name',
      price: 'Price',
      score: 'Score',
      secondCategoryName: 'SecondCategoryName',
      shortDescription: 'ShortDescription',
      submissionRadio: 'SubmissionRadio',
      supplierName: 'SupplierName',
      supplierUId: 'SupplierUId',
      tradeCount: 'TradeCount',
      type: 'Type',
      userCommentCount: 'UserCommentCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      firstCategoryName: 'string',
      imageUrl: 'string',
      name: 'string',
      price: 'string',
      score: 'string',
      secondCategoryName: 'string',
      shortDescription: 'string',
      submissionRadio: 'string',
      supplierName: 'string',
      supplierUId: 'string',
      tradeCount: 'string',
      type: 'string',
      userCommentCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsLinkResponseBodyResult extends $dara.Model {
  code?: string;
  name?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInstanceForIsvResponseBodyModulesPropertiesPropertyValues extends $dara.Model {
  displayName?: string;
  max?: string;
  min?: string;
  remark?: string;
  step?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      max: 'Max',
      min: 'Min',
      remark: 'Remark',
      step: 'Step',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      max: 'string',
      min: 'string',
      remark: 'string',
      step: 'string',
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

export class DescribeImageInstanceForIsvResponseBodyModulesProperties extends $dara.Model {
  displayUnit?: string;
  key?: string;
  name?: string;
  propertyValues?: DescribeImageInstanceForIsvResponseBodyModulesPropertiesPropertyValues[];
  showType?: string;
  static names(): { [key: string]: string } {
    return {
      displayUnit: 'DisplayUnit',
      key: 'Key',
      name: 'Name',
      propertyValues: 'PropertyValues',
      showType: 'ShowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayUnit: 'string',
      key: 'string',
      name: 'string',
      propertyValues: { 'type': 'array', 'itemType': DescribeImageInstanceForIsvResponseBodyModulesPropertiesPropertyValues },
      showType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertyValues)) {
      $dara.Model.validateArray(this.propertyValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInstanceForIsvResponseBodyModules extends $dara.Model {
  code?: string;
  id?: string;
  name?: string;
  properties?: DescribeImageInstanceForIsvResponseBodyModulesProperties[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      name: 'Name',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      name: 'string',
      properties: { 'type': 'array', 'itemType': DescribeImageInstanceForIsvResponseBodyModulesProperties },
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInstanceForIsvResponseBodyRelationalData extends $dara.Model {
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValuesPropertyValue extends $dara.Model {
  /**
   * @example
   * 12
   */
  displayName?: string;
  /**
   * @example
   * 12
   */
  max?: string;
  /**
   * @example
   * 12
   */
  min?: string;
  /**
   * @example
   * 12
   */
  remark?: string;
  /**
   * @example
   * 12
   */
  step?: string;
  /**
   * @example
   * 12
   */
  type?: string;
  /**
   * @example
   * 12
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      max: 'Max',
      min: 'Min',
      remark: 'Remark',
      step: 'Step',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      max: 'string',
      min: 'string',
      remark: 'string',
      step: 'string',
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

export class DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValues extends $dara.Model {
  propertyValue?: DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValuesPropertyValue[];
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValuesPropertyValue },
    };
  }

  validate() {
    if(Array.isArray(this.propertyValue)) {
      $dara.Model.validateArray(this.propertyValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyModulesModulePropertiesProperty extends $dara.Model {
  /**
   * @example
   * 12
   */
  displayUnit?: string;
  /**
   * @example
   * 12
   */
  key?: string;
  /**
   * @example
   * 12
   */
  name?: string;
  propertyValues?: DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValues;
  /**
   * @example
   * 12
   */
  showType?: string;
  static names(): { [key: string]: string } {
    return {
      displayUnit: 'DisplayUnit',
      key: 'Key',
      name: 'Name',
      propertyValues: 'PropertyValues',
      showType: 'ShowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayUnit: 'string',
      key: 'string',
      name: 'string',
      propertyValues: DescribeInstanceResponseBodyModulesModulePropertiesPropertyPropertyValues,
      showType: 'string',
    };
  }

  validate() {
    if(this.propertyValues && typeof (this.propertyValues as any).validate === 'function') {
      (this.propertyValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyModulesModuleProperties extends $dara.Model {
  property?: DescribeInstanceResponseBodyModulesModulePropertiesProperty[];
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyModulesModulePropertiesProperty },
    };
  }

  validate() {
    if(Array.isArray(this.property)) {
      $dara.Model.validateArray(this.property);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyModulesModule extends $dara.Model {
  /**
   * @example
   * package_config
   */
  code?: string;
  /**
   * @example
   * 101*********026
   */
  id?: string;
  name?: string;
  properties?: DescribeInstanceResponseBodyModulesModuleProperties;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      name: 'Name',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      name: 'string',
      properties: DescribeInstanceResponseBodyModulesModuleProperties,
    };
  }

  validate() {
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyModules extends $dara.Model {
  module?: DescribeInstanceResponseBodyModulesModule[];
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyModulesModule },
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyRelationalData extends $dara.Model {
  /**
   * @example
   * STARTED
   */
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceForIsvResponseBodyRelationalData extends $dara.Model {
  /**
   * @example
   * STARTED
   */
  serviceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      serviceStatus: 'ServiceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstanceItemsInstanceItem extends $dara.Model {
  /**
   * @example
   * {}
   */
  apiJson?: string;
  /**
   * @example
   * {"frontEndUrl":"https://***.aliyun.com","password":"Sjtv***","adminUrl":"https://***.aiiyun.com","username":"aliyun***"}
   */
  appJson?: string;
  /**
   * @example
   * 1570634021000
   */
  beganOn?: number;
  /**
   * @example
   * 1570634021000
   */
  createdOn?: number;
  /**
   * @example
   * 1570644021000
   */
  endOn?: number;
  extendJson?: string;
  /**
   * @example
   * {"password":"***","ip":"118.31.***.41","innerIp":"118.31.***.41","region":"","username":"***","beianInfo":""}
   */
  hostJson?: string;
  /**
   * @example
   * {}
   */
  idaasJson?: string;
  /**
   * @example
   * {}
   */
  imageJson?: string;
  /**
   * @example
   * 1551111111
   */
  instanceId?: number;
  /**
   * @example
   * 204211111111111
   */
  orderId?: number;
  /**
   * @example
   * cmgj00**11
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * cmgj00**11-prepay
   */
  productSkuCode?: string;
  /**
   * @example
   * APP
   */
  productType?: string;
  /**
   * @example
   * OPENED
   */
  status?: string;
  supplierName?: string;
  static names(): { [key: string]: string } {
    return {
      apiJson: 'ApiJson',
      appJson: 'AppJson',
      beganOn: 'BeganOn',
      createdOn: 'CreatedOn',
      endOn: 'EndOn',
      extendJson: 'ExtendJson',
      hostJson: 'HostJson',
      idaasJson: 'IdaasJson',
      imageJson: 'ImageJson',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      productType: 'ProductType',
      status: 'Status',
      supplierName: 'SupplierName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiJson: 'string',
      appJson: 'string',
      beganOn: 'number',
      createdOn: 'number',
      endOn: 'number',
      extendJson: 'string',
      hostJson: 'string',
      idaasJson: 'string',
      imageJson: 'string',
      instanceId: 'number',
      orderId: 'number',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      productType: 'string',
      status: 'string',
      supplierName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstanceItems extends $dara.Model {
  instanceItem?: DescribeInstancesResponseBodyInstanceItemsInstanceItem[];
  static names(): { [key: string]: string } {
    return {
      instanceItem: 'InstanceItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceItem: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstanceItemsInstanceItem },
    };
  }

  validate() {
    if(Array.isArray(this.instanceItem)) {
      $dara.Model.validateArray(this.instanceItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseResponseBodyLicenseExtendArrayLicenseAttribute extends $dara.Model {
  /**
   * @example
   * -
   */
  code?: string;
  /**
   * @example
   * -
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

export class DescribeLicenseResponseBodyLicenseExtendArray extends $dara.Model {
  licenseAttribute?: DescribeLicenseResponseBodyLicenseExtendArrayLicenseAttribute[];
  static names(): { [key: string]: string } {
    return {
      licenseAttribute: 'LicenseAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licenseAttribute: { 'type': 'array', 'itemType': DescribeLicenseResponseBodyLicenseExtendArrayLicenseAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.licenseAttribute)) {
      $dara.Model.validateArray(this.licenseAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseResponseBodyLicenseExtendInfo extends $dara.Model {
  /**
   * @example
   * -
   */
  accountQuantity?: number;
  /**
   * @example
   * 190311111111****
   */
  aliUid?: number;
  /**
   * @example
   * id***@**.com
   */
  email?: string;
  /**
   * @example
   * 129****1111
   */
  mobile?: string;
  static names(): { [key: string]: string } {
    return {
      accountQuantity: 'AccountQuantity',
      aliUid: 'AliUid',
      email: 'Email',
      mobile: 'Mobile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountQuantity: 'number',
      aliUid: 'number',
      email: 'string',
      mobile: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseResponseBodyLicense extends $dara.Model {
  /**
   * @example
   * 2019-05-25 09:00:00
   */
  activateTime?: string;
  /**
   * @example
   * 2019-05-25 09:00:00
   */
  createTime?: string;
  /**
   * @example
   * 2019-06-25 09:00:00
   */
  expiredTime?: string;
  extendArray?: DescribeLicenseResponseBodyLicenseExtendArray;
  extendInfo?: DescribeLicenseResponseBodyLicenseExtendInfo;
  /**
   * @example
   * 1551111111
   */
  instanceId?: string;
  /**
   * @example
   * -
   */
  licenseCode?: string;
  /**
   * @example
   * ACTIVATED
   */
  licenseStatus?: string;
  /**
   * @example
   * cmgj02****
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * cmgj02****-prepay
   */
  productSkuId?: string;
  supplierName?: string;
  static names(): { [key: string]: string } {
    return {
      activateTime: 'ActivateTime',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      extendArray: 'ExtendArray',
      extendInfo: 'ExtendInfo',
      instanceId: 'InstanceId',
      licenseCode: 'LicenseCode',
      licenseStatus: 'LicenseStatus',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuId: 'ProductSkuId',
      supplierName: 'SupplierName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activateTime: 'string',
      createTime: 'string',
      expiredTime: 'string',
      extendArray: DescribeLicenseResponseBodyLicenseExtendArray,
      extendInfo: DescribeLicenseResponseBodyLicenseExtendInfo,
      instanceId: 'string',
      licenseCode: 'string',
      licenseStatus: 'string',
      productCode: 'string',
      productName: 'string',
      productSkuId: 'string',
      supplierName: 'string',
    };
  }

  validate() {
    if(this.extendArray && typeof (this.extendArray as any).validate === 'function') {
      (this.extendArray as any).validate();
    }
    if(this.extendInfo && typeof (this.extendInfo as any).validate === 'function') {
      (this.extendInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderResponseBodyInstanceIds extends $dara.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderResponseBodySupplierTelephones extends $dara.Model {
  telephone?: string[];
  static names(): { [key: string]: string } {
    return {
      telephone: 'Telephone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      telephone: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.telephone)) {
      $dara.Model.validateArray(this.telephone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyCouponsCoupon extends $dara.Model {
  /**
   * @example
   * 100.00
   */
  canPromFee?: number;
  couponDesc?: string;
  couponName?: string;
  /**
   * @example
   * ActiveCoupon
   */
  couponOptionCode?: string;
  /**
   * @example
   * 3874923111
   */
  couponOptionNo?: string;
  /**
   * @example
   * false
   */
  isSelected?: boolean;
  static names(): { [key: string]: string } {
    return {
      canPromFee: 'CanPromFee',
      couponDesc: 'CouponDesc',
      couponName: 'CouponName',
      couponOptionCode: 'CouponOptionCode',
      couponOptionNo: 'CouponOptionNo',
      isSelected: 'IsSelected',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canPromFee: 'number',
      couponDesc: 'string',
      couponName: 'string',
      couponOptionCode: 'string',
      couponOptionNo: 'string',
      isSelected: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyCoupons extends $dara.Model {
  coupon?: DescribePriceResponseBodyCouponsCoupon[];
  static names(): { [key: string]: string } {
    return {
      coupon: 'Coupon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupon: { 'type': 'array', 'itemType': DescribePriceResponseBodyCouponsCoupon },
    };
  }

  validate() {
    if(Array.isArray(this.coupon)) {
      $dara.Model.validateArray(this.coupon);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPromotionRulesPromotionRule extends $dara.Model {
  name?: string;
  /**
   * @example
   * 102112
   */
  ruleId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleId: 'RuleId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPromotionRules extends $dara.Model {
  promotionRule?: DescribePriceResponseBodyPromotionRulesPromotionRule[];
  static names(): { [key: string]: string } {
    return {
      promotionRule: 'PromotionRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      promotionRule: { 'type': 'array', 'itemType': DescribePriceResponseBodyPromotionRulesPromotionRule },
    };
  }

  validate() {
    if(Array.isArray(this.promotionRule)) {
      $dara.Model.validateArray(this.promotionRule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductExtrasProductExtra extends $dara.Model {
  /**
   * @example
   * product_advantage
   */
  key?: string;
  label?: string;
  /**
   * @example
   * 0
   */
  order?: number;
  /**
   * @example
   * HTML
   */
  type?: string;
  values?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      label: 'Label',
      order: 'Order',
      type: 'Type',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      label: 'string',
      order: 'number',
      type: 'string',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductExtras extends $dara.Model {
  productExtra?: DescribeProductResponseBodyProductExtrasProductExtra[];
  static names(): { [key: string]: string } {
    return {
      productExtra: 'ProductExtra',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productExtra: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductExtrasProductExtra },
    };
  }

  validate() {
    if(Array.isArray(this.productExtra)) {
      $dara.Model.validateArray(this.productExtra);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValuesPropertyValue extends $dara.Model {
  displayName?: string;
  /**
   * @example
   * 123
   */
  max?: string;
  /**
   * @example
   * 11
   */
  min?: string;
  /**
   * @example
   * abc
   */
  remark?: string;
  /**
   * @example
   * 1
   */
  step?: string;
  /**
   * @example
   * single_string
   */
  type?: string;
  /**
   * @example
   * m-28e213e7t
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      max: 'Max',
      min: 'Min',
      remark: 'Remark',
      step: 'Step',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      max: 'string',
      min: 'string',
      remark: 'string',
      step: 'string',
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

export class DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValues extends $dara.Model {
  propertyValue?: DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValuesPropertyValue[];
  static names(): { [key: string]: string } {
    return {
      propertyValue: 'PropertyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValue: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValuesPropertyValue },
    };
  }

  validate() {
    if(Array.isArray(this.propertyValue)) {
      $dara.Model.validateArray(this.propertyValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesProperty extends $dara.Model {
  /**
   * @example
   * 1
   */
  displayUnit?: string;
  /**
   * @example
   * img_id
   */
  key?: string;
  name?: string;
  propertyValues?: DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValues;
  /**
   * @example
   * number
   */
  showType?: string;
  static names(): { [key: string]: string } {
    return {
      displayUnit: 'DisplayUnit',
      key: 'Key',
      name: 'Name',
      propertyValues: 'PropertyValues',
      showType: 'ShowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayUnit: 'string',
      key: 'string',
      name: 'string',
      propertyValues: DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesPropertyPropertyValues,
      showType: 'string',
    };
  }

  validate() {
    if(this.propertyValues && typeof (this.propertyValues as any).validate === 'function') {
      (this.propertyValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModulesModuleProperties extends $dara.Model {
  property?: DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesProperty[];
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductSkusProductSkuModulesModulePropertiesProperty },
    };
  }

  validate() {
    if(Array.isArray(this.property)) {
      $dara.Model.validateArray(this.property);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModulesModule extends $dara.Model {
  /**
   * @example
   * img_id
   */
  code?: string;
  /**
   * @example
   * 248220
   */
  id?: string;
  name?: string;
  properties?: DescribeProductResponseBodyProductSkusProductSkuModulesModuleProperties;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      name: 'Name',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      name: 'string',
      properties: DescribeProductResponseBodyProductSkusProductSkuModulesModuleProperties,
    };
  }

  validate() {
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuModules extends $dara.Model {
  module?: DescribeProductResponseBodyProductSkusProductSkuModulesModule[];
  static names(): { [key: string]: string } {
    return {
      module: 'Module',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductSkusProductSkuModulesModule },
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuOrderPeriodsOrderPeriod extends $dara.Model {
  name?: string;
  /**
   * @example
   * HOUR
   */
  periodType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      periodType: 'PeriodType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      periodType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSkuOrderPeriods extends $dara.Model {
  orderPeriod?: DescribeProductResponseBodyProductSkusProductSkuOrderPeriodsOrderPeriod[];
  static names(): { [key: string]: string } {
    return {
      orderPeriod: 'OrderPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderPeriod: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductSkusProductSkuOrderPeriodsOrderPeriod },
    };
  }

  validate() {
    if(Array.isArray(this.orderPeriod)) {
      $dara.Model.validateArray(this.orderPeriod);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkusProductSku extends $dara.Model {
  /**
   * @example
   * PREPAY
   */
  chargeType?: string;
  /**
   * @example
   * cmjj01****-Package
   */
  code?: string;
  /**
   * @example
   * {\\"img_id\\":{\\"img_version|img_region\\":{\\"V1.7|cn-shenzhen-st3-a01\\":[\\"m-wz9ho4hmos0lpxcldqoq\\"]}}
   */
  constraints?: string;
  /**
   * @example
   * true
   */
  hidden?: boolean;
  modules?: DescribeProductResponseBodyProductSkusProductSkuModules;
  /**
   * @example
   * 21
   */
  name?: string;
  orderPeriods?: DescribeProductResponseBodyProductSkusProductSkuOrderPeriods;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      code: 'Code',
      constraints: 'Constraints',
      hidden: 'Hidden',
      modules: 'Modules',
      name: 'Name',
      orderPeriods: 'OrderPeriods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      code: 'string',
      constraints: 'string',
      hidden: 'boolean',
      modules: DescribeProductResponseBodyProductSkusProductSkuModules,
      name: 'string',
      orderPeriods: DescribeProductResponseBodyProductSkusProductSkuOrderPeriods,
    };
  }

  validate() {
    if(this.modules && typeof (this.modules as any).validate === 'function') {
      (this.modules as any).validate();
    }
    if(this.orderPeriods && typeof (this.orderPeriods as any).validate === 'function') {
      (this.orderPeriods as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyProductSkus extends $dara.Model {
  productSku?: DescribeProductResponseBodyProductSkusProductSku[];
  static names(): { [key: string]: string } {
    return {
      productSku: 'ProductSku',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productSku: { 'type': 'array', 'itemType': DescribeProductResponseBodyProductSkusProductSku },
    };
  }

  validate() {
    if(Array.isArray(this.productSku)) {
      $dara.Model.validateArray(this.productSku);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyShopInfoTelephones extends $dara.Model {
  telephone?: string[];
  static names(): { [key: string]: string } {
    return {
      telephone: 'Telephone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      telephone: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.telephone)) {
      $dara.Model.validateArray(this.telephone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyShopInfoWangWangsWangWang extends $dara.Model {
  /**
   * @example
   * 123
   */
  remark?: string;
  /**
   * @example
   * ABC
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
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

export class DescribeProductResponseBodyShopInfoWangWangs extends $dara.Model {
  wangWang?: DescribeProductResponseBodyShopInfoWangWangsWangWang[];
  static names(): { [key: string]: string } {
    return {
      wangWang: 'WangWang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wangWang: { 'type': 'array', 'itemType': DescribeProductResponseBodyShopInfoWangWangsWangWang },
    };
  }

  validate() {
    if(Array.isArray(this.wangWang)) {
      $dara.Model.validateArray(this.wangWang);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBodyShopInfo extends $dara.Model {
  /**
   * @example
   * 46**41@example.com
   */
  emails?: string;
  /**
   * @example
   * 123
   */
  id?: number;
  name?: string;
  telephones?: DescribeProductResponseBodyShopInfoTelephones;
  wangWangs?: DescribeProductResponseBodyShopInfoWangWangs;
  static names(): { [key: string]: string } {
    return {
      emails: 'Emails',
      id: 'Id',
      name: 'Name',
      telephones: 'Telephones',
      wangWangs: 'WangWangs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emails: 'string',
      id: 'number',
      name: 'string',
      telephones: DescribeProductResponseBodyShopInfoTelephones,
      wangWangs: DescribeProductResponseBodyShopInfoWangWangs,
    };
  }

  validate() {
    if(this.telephones && typeof (this.telephones as any).validate === 'function') {
      (this.telephones as any).validate();
    }
    if(this.wangWangs && typeof (this.wangWangs as any).validate === 'function') {
      (this.wangWangs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsRequestFilter extends $dara.Model {
  /**
   * @example
   * categoryId
   */
  key?: string;
  /**
   * @example
   * 53366009
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

export class DescribeProductsResponseBodyProductItemsProductItem extends $dara.Model {
  /**
   * @example
   * 53398003
   */
  categoryId?: number;
  /**
   * @example
   * cmjj02****
   */
  code?: string;
  deliveryDate?: string;
  deliveryWay?: string;
  /**
   * @example
   * https://oss.aliyuncs.com/photogallery/photo/1904996544835414/7549/767d6d07-8366-4822-b84e-61f6ea10d146.png
   */
  imageUrl?: string;
  name?: string;
  /**
   * @example
   * windows
   */
  operationSystem?: string;
  /**
   * @example
   * {\\"DiscountPrice\\": 0.0, \\"TradePrice\\": 15750.0, \\"Currency\\": \\"CNY\\", \\"OriginalPrice\\": 15750.0, \\"RuleIds\\": {\\"RuleId\\": []}, \\"Coupons\\": {\\"Coupon\\": []}}
   */
  priceInfo?: string;
  /**
   * @example
   * 5.0
   */
  score?: string;
  shortDescription?: string;
  suggestedPrice?: string;
  /**
   * @example
   * 228399
   */
  supplierId?: number;
  supplierName?: string;
  tags?: string;
  /**
   * @example
   * /products/53616009/cmjj02****.html
   */
  targetUrl?: string;
  warrantyDate?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      code: 'Code',
      deliveryDate: 'DeliveryDate',
      deliveryWay: 'DeliveryWay',
      imageUrl: 'ImageUrl',
      name: 'Name',
      operationSystem: 'OperationSystem',
      priceInfo: 'PriceInfo',
      score: 'Score',
      shortDescription: 'ShortDescription',
      suggestedPrice: 'SuggestedPrice',
      supplierId: 'SupplierId',
      supplierName: 'SupplierName',
      tags: 'Tags',
      targetUrl: 'TargetUrl',
      warrantyDate: 'WarrantyDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      code: 'string',
      deliveryDate: 'string',
      deliveryWay: 'string',
      imageUrl: 'string',
      name: 'string',
      operationSystem: 'string',
      priceInfo: 'string',
      score: 'string',
      shortDescription: 'string',
      suggestedPrice: 'string',
      supplierId: 'number',
      supplierName: 'string',
      tags: 'string',
      targetUrl: 'string',
      warrantyDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBodyProductItems extends $dara.Model {
  productItem?: DescribeProductsResponseBodyProductItemsProductItem[];
  static names(): { [key: string]: string } {
    return {
      productItem: 'ProductItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productItem: { 'type': 'array', 'itemType': DescribeProductsResponseBodyProductItemsProductItem },
    };
  }

  validate() {
    if(Array.isArray(this.productItem)) {
      $dara.Model.validateArray(this.productItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectAttachmentsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * Mzc4NDAtODQ3MjY4MzI=
   */
  attachmentToken?: string;
  /**
   * @example
   * File
   */
  attachmentType?: string;
  content?: string;
  /**
   * @example
   * http://delivery-center.oss-cn-shanghai.aliyuncs.com/6a8****0e2/e0a***f3.jpg?Expires=1589334682&OSSAccessKeyId=wI2r*********&Signature=JWB39pUxs7RCqrcw58qXPEGu6M0%3D
   */
  fileLink?: string;
  /**
   * @example
   * 1589334682404
   */
  fileLinkGmtExpired?: number;
  /**
   * @example
   * f8-test-perview.jpeg
   */
  fileName?: string;
  /**
   * @example
   * 109124
   */
  fileSize?: number;
  /**
   * @example
   * jpg
   */
  fileSuffix?: string;
  /**
   * @example
   * 1587968858000
   */
  gmtCreate?: number;
  /**
   * @example
   * 8472
   */
  nodeId?: number;
  nodeName?: string;
  /**
   * @example
   * 45261111****
   */
  operator?: number;
  operatorName?: string;
  /**
   * @example
   * Provider
   */
  operatorRole?: string;
  /**
   * @example
   * 3
   */
  stepNo?: number;
  static names(): { [key: string]: string } {
    return {
      attachmentToken: 'AttachmentToken',
      attachmentType: 'AttachmentType',
      content: 'Content',
      fileLink: 'FileLink',
      fileLinkGmtExpired: 'FileLinkGmtExpired',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileSuffix: 'FileSuffix',
      gmtCreate: 'GmtCreate',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      operator: 'Operator',
      operatorName: 'OperatorName',
      operatorRole: 'OperatorRole',
      stepNo: 'StepNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachmentToken: 'string',
      attachmentType: 'string',
      content: 'string',
      fileLink: 'string',
      fileLinkGmtExpired: 'number',
      fileName: 'string',
      fileSize: 'number',
      fileSuffix: 'string',
      gmtCreate: 'number',
      nodeId: 'number',
      nodeName: 'string',
      operator: 'number',
      operatorName: 'string',
      operatorRole: 'string',
      stepNo: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectInfoResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 3
   */
  currentStepNo?: number;
  /**
   * @example
   * 27291111****
   */
  customerAliUid?: number;
  /**
   * @example
   * 4
   */
  finalStepNo?: number;
  /**
   * @example
   * null
   */
  finishType?: string;
  /**
   * @example
   * 1588834324000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1620403200000
   */
  gmtExpired?: number;
  /**
   * @example
   * 1620403200000
   */
  gmtFinished?: number;
  /**
   * @example
   * 4****89
   */
  instanceId?: string;
  /**
   * @example
   * 2059111111111
   */
  orderId?: number;
  /**
   * @example
   * cmgj***055
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * yuncode****500001
   */
  productSkuCode?: string;
  productSkuName?: string;
  /**
   * @example
   * Starting
   */
  projectStatus?: string;
  /**
   * @example
   * 45121111****
   */
  supplierAliUid?: number;
  /**
   * @example
   * 410
   */
  templateId?: number;
  /**
   * @example
   * Public
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      currentStepNo: 'CurrentStepNo',
      customerAliUid: 'CustomerAliUid',
      finalStepNo: 'FinalStepNo',
      finishType: 'FinishType',
      gmtCreate: 'GmtCreate',
      gmtExpired: 'GmtExpired',
      gmtFinished: 'GmtFinished',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      productSkuName: 'ProductSkuName',
      projectStatus: 'ProjectStatus',
      supplierAliUid: 'SupplierAliUid',
      templateId: 'TemplateId',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentStepNo: 'number',
      customerAliUid: 'number',
      finalStepNo: 'number',
      finishType: 'string',
      gmtCreate: 'number',
      gmtExpired: 'number',
      gmtFinished: 'number',
      instanceId: 'string',
      orderId: 'number',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      productSkuName: 'string',
      projectStatus: 'string',
      supplierAliUid: 'number',
      templateId: 'number',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMessagesResponseBodyResult extends $dara.Model {
  content?: string;
  /**
   * @example
   * 1589015560000
   */
  gmtCreate?: number;
  /**
   * @example
   * 452611111****
   */
  operator?: number;
  operatorName?: string;
  /**
   * @example
   * Provider
   */
  operatorRole?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      gmtCreate: 'GmtCreate',
      operator: 'Operator',
      operatorName: 'OperatorName',
      operatorRole: 'OperatorRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      gmtCreate: 'number',
      operator: 'number',
      operatorName: 'string',
      operatorRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectNodesResponseBodyResult extends $dara.Model {
  /**
   * @example
   * false
   */
  allowRollbackNode?: boolean;
  /**
   * @example
   * false
   */
  autoFinishNode?: boolean;
  /**
   * @example
   * 4
   */
  finalStepNo?: number;
  /**
   * @example
   * 1588834325000
   */
  gmtExpired?: number;
  /**
   * @example
   * 1588834325000
   */
  gmtFinished?: number;
  /**
   * @example
   * 1588834325000
   */
  gmtStart?: number;
  /**
   * @example
   * false
   */
  needAttachment?: boolean;
  /**
   * @example
   * 8472
   */
  nextNodeId?: number;
  /**
   * @example
   * 8471
   */
  nodeId?: number;
  nodeName?: string;
  /**
   * @example
   * Finish
   */
  nodeStatus?: string;
  /**
   * @example
   * System
   */
  operatorRole?: string;
  /**
   * @example
   * 0
   */
  parentNodeId?: number;
  /**
   * @example
   * 8470
   */
  previousNodeId?: number;
  /**
   * @example
   * 2
   */
  stepNo?: number;
  templateForm?: string;
  static names(): { [key: string]: string } {
    return {
      allowRollbackNode: 'AllowRollbackNode',
      autoFinishNode: 'AutoFinishNode',
      finalStepNo: 'FinalStepNo',
      gmtExpired: 'GmtExpired',
      gmtFinished: 'GmtFinished',
      gmtStart: 'GmtStart',
      needAttachment: 'NeedAttachment',
      nextNodeId: 'NextNodeId',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeStatus: 'NodeStatus',
      operatorRole: 'OperatorRole',
      parentNodeId: 'ParentNodeId',
      previousNodeId: 'PreviousNodeId',
      stepNo: 'StepNo',
      templateForm: 'TemplateForm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowRollbackNode: 'boolean',
      autoFinishNode: 'boolean',
      finalStepNo: 'number',
      gmtExpired: 'number',
      gmtFinished: 'number',
      gmtStart: 'number',
      needAttachment: 'boolean',
      nextNodeId: 'number',
      nodeId: 'number',
      nodeName: 'string',
      nodeStatus: 'string',
      operatorRole: 'string',
      parentNodeId: 'number',
      previousNodeId: 'number',
      stepNo: 'number',
      templateForm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectOperateLogsResponseBodyResult extends $dara.Model {
  description?: string;
  /**
   * @example
   * 1587624497000
   */
  gmtCreate?: number;
  /**
   * @example
   * 0
   */
  operator?: number;
  operatorName?: string;
  /**
   * @example
   * System
   */
  operatorRole?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreate: 'GmtCreate',
      operator: 'Operator',
      operatorName: 'OperatorName',
      operatorRole: 'OperatorRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreate: 'number',
      operator: 'number',
      operatorName: 'string',
      operatorRole: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateLicenseRequest extends $dara.Model {
  /**
   * @example
   * 129****1111
   */
  identification?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APSEDH8TA5CSGK-********_6CNTACBH9EQPOATFXJQL4B2COE7M43VVQ7GUGKAA
   */
  licenseCode?: string;
  static names(): { [key: string]: string } {
    return {
      identification: 'Identification',
      licenseCode: 'LicenseCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identification: 'string',
      licenseCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateLicenseResponseBody extends $dara.Model {
  /**
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ActivateLicenseResponseBody;
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
      body: ActivateLicenseResponseBody,
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

export class AutoRenewInstanceRequest extends $dara.Model {
  autoRenewCycle?: string;
  autoRenewDuration?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  orderBizId?: number;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewCycle: 'AutoRenewCycle',
      autoRenewDuration: 'AutoRenewDuration',
      orderBizId: 'OrderBizId',
      ownerId: 'OwnerId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewCycle: 'string',
      autoRenewDuration: 'number',
      orderBizId: 'number',
      ownerId: 'number',
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

export class AutoRenewInstanceResponseBody extends $dara.Model {
  data?: boolean;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AutoRenewInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AutoRenewInstanceResponseBody;
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
      body: AutoRenewInstanceResponseBody,
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

export class CreateOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2709c68a-d569-4819-9c5d-1222ed2ee924
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  commodity?: string;
  /**
   * @example
   * abc
   */
  orderSouce?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INSTANCE_BUY
   */
  orderType?: string;
  /**
   * @example
   * 111********11
   */
  ownerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HAND
   */
  paymentType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      commodity: 'Commodity',
      orderSouce: 'OrderSouce',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
      paymentType: 'PaymentType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      commodity: 'string',
      orderSouce: 'string',
      orderType: 'string',
      ownerId: 'string',
      paymentType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponseBody extends $dara.Model {
  instanceIds?: CreateOrderResponseBodyInstanceIds;
  /**
   * @example
   * 202********0117
   */
  orderId?: string;
  /**
   * @example
   * 4ca591b5-bc30-4fa7-aeaa-c4d0ec5d24ed
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: CreateOrderResponseBodyInstanceIds,
      orderId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOrderResponseBody;
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
      body: CreateOrderResponseBody,
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

export class CrossAccountVerifyTokenRequest extends $dara.Model {
  /**
   * @example
   * C19D103FEA2D50A584410267CE9FBA56
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CrossAccountVerifyTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * C19D103F-EA2D-50A5-8441-0267CE9FBA56
   */
  requestId?: string;
  result?: CrossAccountVerifyTokenResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: CrossAccountVerifyTokenResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CrossAccountVerifyTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CrossAccountVerifyTokenResponseBody;
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
      body: CrossAccountVerifyTokenResponseBody,
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

export class DescribeApiMeteringRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * cmapi0004****
   */
  productCode?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'pageNum',
      productCode: 'productCode',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      productCode: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMeteringResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * fatal
   * 
   * @example
   * false
   */
  fatal?: boolean;
  message?: string;
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
   * 62FC432C55A1A63534A6CB34
   */
  requestId?: string;
  result?: DescribeApiMeteringResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      fatal: 'Fatal',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      fatal: 'boolean',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeApiMeteringResponseBodyResult },
      success: 'boolean',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApiMeteringResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeApiMeteringResponseBody;
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
      body: DescribeApiMeteringResponseBody,
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

export class DescribeCurrentNodeInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4****89
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeCurrentNodeInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 00eb4de1-6cff-4f56-833e-7b1e070e398d
   */
  requestId?: string;
  result?: DescribeCurrentNodeInfoResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeCurrentNodeInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCurrentNodeInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeCurrentNodeInfoResponseBody;
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
      body: DescribeCurrentNodeInfoResponseBody,
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

export class DescribeDistributionProductsRequest extends $dara.Model {
  filter?: DescribeDistributionProductsRequestFilter[];
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
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeDistributionProductsRequestFilter },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsResponseBody extends $dara.Model {
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
   * 5BD09171-MB74-18D8-890E-C70C067527BE
   */
  requestId?: string;
  results?: DescribeDistributionProductsResponseBodyResults[];
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      results: 'Results',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DescribeDistributionProductsResponseBodyResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDistributionProductsResponseBody;
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
      body: DescribeDistributionProductsResponseBody,
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

export class DescribeDistributionProductsLinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  codes?: string[];
  static names(): { [key: string]: string } {
    return {
      codes: 'Codes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.codes)) {
      $dara.Model.validateArray(this.codes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsLinkShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  codesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      codesShrink: 'Codes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsLinkResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5BD09171-BF4D-18D8-890E-C70C067527BE
   */
  requestId?: string;
  result?: DescribeDistributionProductsLinkResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeDistributionProductsLinkResponseBodyResult },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDistributionProductsLinkResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeDistributionProductsLinkResponseBody;
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
      body: DescribeDistributionProductsLinkResponseBody,
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

export class DescribeImageInstanceForIsvRequest extends $dara.Model {
  customerPk?: number;
  ecsInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      customerPk: 'CustomerPk',
      ecsInstanceId: 'EcsInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerPk: 'number',
      ecsInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInstanceForIsvResponseBody extends $dara.Model {
  activeAddress?: string;
  appJson?: string;
  autoRenewal?: string;
  beganOn?: number;
  componentJson?: string;
  constraints?: string;
  createdOn?: number;
  endOn?: number;
  extendJson?: string;
  hostJson?: string;
  instanceId?: number;
  isTrial?: boolean;
  licenseCode?: string;
  modules?: DescribeImageInstanceForIsvResponseBodyModules[];
  orderId?: number;
  productCode?: string;
  productName?: string;
  productSkuCode?: string;
  productType?: string;
  relationalData?: DescribeImageInstanceForIsvResponseBodyRelationalData;
  requestId?: string;
  status?: string;
  supplierName?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddress: 'ActiveAddress',
      appJson: 'AppJson',
      autoRenewal: 'AutoRenewal',
      beganOn: 'BeganOn',
      componentJson: 'ComponentJson',
      constraints: 'Constraints',
      createdOn: 'CreatedOn',
      endOn: 'EndOn',
      extendJson: 'ExtendJson',
      hostJson: 'HostJson',
      instanceId: 'InstanceId',
      isTrial: 'IsTrial',
      licenseCode: 'LicenseCode',
      modules: 'Modules',
      orderId: 'OrderId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      productType: 'ProductType',
      relationalData: 'RelationalData',
      requestId: 'RequestId',
      status: 'Status',
      supplierName: 'SupplierName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddress: 'string',
      appJson: 'string',
      autoRenewal: 'string',
      beganOn: 'number',
      componentJson: 'string',
      constraints: 'string',
      createdOn: 'number',
      endOn: 'number',
      extendJson: 'string',
      hostJson: 'string',
      instanceId: 'number',
      isTrial: 'boolean',
      licenseCode: 'string',
      modules: { 'type': 'array', 'itemType': DescribeImageInstanceForIsvResponseBodyModules },
      orderId: 'number',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      productType: 'string',
      relationalData: DescribeImageInstanceForIsvResponseBodyRelationalData,
      requestId: 'string',
      status: 'string',
      supplierName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modules)) {
      $dara.Model.validateArray(this.modules);
    }
    if(this.relationalData && typeof (this.relationalData as any).validate === 'function') {
      (this.relationalData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInstanceForIsvResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeImageInstanceForIsvResponseBody;
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
      body: DescribeImageInstanceForIsvResponseBody,
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

export class DescribeInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 155****11
   */
  instanceId?: string;
  /**
   * @example
   * NEW
   */
  orderType?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      orderType: 'OrderType',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      orderType: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $dara.Model {
  activeAddress?: string;
  /**
   * @example
   * {"frontEndUrl":"https://****.aliyundoc.com","password":"Sjtv***","adminUrl":"https://****.aliyundoc.com","username":"aliyun***"}
   */
  appJson?: string;
  autoRenewal?: string;
  /**
   * @example
   * 1570634021000
   */
  beganOn?: number;
  /**
   * @example
   * {"package_version":"yuncode000111"}
   */
  componentJson?: string;
  /**
   * @example
   * {}
   */
  constraints?: string;
  /**
   * @example
   * 1570634018000
   */
  createdOn?: number;
  /**
   * @example
   * 1602259200000
   */
  endOn?: number;
  extendJson?: string;
  /**
   * @example
   * {"password":"***","ip":"118.31.***.41","innerIp":"118.31.***.41","region":"","username":"***","beianInfo":""}
   */
  hostJson?: string;
  /**
   * @example
   * 1551111111
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isTrial?: boolean;
  licenseCode?: string;
  modules?: DescribeInstanceResponseBodyModules;
  /**
   * @example
   * 204211111111111
   */
  orderId?: number;
  /**
   * @example
   * cmgj00**11
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * cmgj00**11-prepay
   */
  productSkuCode?: string;
  /**
   * @example
   * APP
   */
  productType?: string;
  relationalData?: DescribeInstanceResponseBodyRelationalData;
  /**
   * @example
   * OPENED
   */
  status?: string;
  supplierName?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddress: 'ActiveAddress',
      appJson: 'AppJson',
      autoRenewal: 'AutoRenewal',
      beganOn: 'BeganOn',
      componentJson: 'ComponentJson',
      constraints: 'Constraints',
      createdOn: 'CreatedOn',
      endOn: 'EndOn',
      extendJson: 'ExtendJson',
      hostJson: 'HostJson',
      instanceId: 'InstanceId',
      isTrial: 'IsTrial',
      licenseCode: 'LicenseCode',
      modules: 'Modules',
      orderId: 'OrderId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      productType: 'ProductType',
      relationalData: 'RelationalData',
      status: 'Status',
      supplierName: 'SupplierName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddress: 'string',
      appJson: 'string',
      autoRenewal: 'string',
      beganOn: 'number',
      componentJson: 'string',
      constraints: 'string',
      createdOn: 'number',
      endOn: 'number',
      extendJson: 'string',
      hostJson: 'string',
      instanceId: 'number',
      isTrial: 'boolean',
      licenseCode: 'string',
      modules: DescribeInstanceResponseBodyModules,
      orderId: 'number',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      productType: 'string',
      relationalData: DescribeInstanceResponseBodyRelationalData,
      status: 'string',
      supplierName: 'string',
    };
  }

  validate() {
    if(this.modules && typeof (this.modules as any).validate === 'function') {
      (this.modules as any).validate();
    }
    if(this.relationalData && typeof (this.relationalData as any).validate === 'function') {
      (this.relationalData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceResponseBody;
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
      body: DescribeInstanceResponseBody,
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

export class DescribeInstanceForIsvRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 155****11
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeInstanceForIsvResponseBody extends $dara.Model {
  activeAddress?: string;
  appJson?: string;
  autoRenewal?: string;
  /**
   * @example
   * 1570634021000
   */
  beganOn?: number;
  /**
   * @example
   * {"package_version":"yuncode000111"}
   */
  componentJson?: string;
  /**
   * @example
   * 1570634018000
   */
  createdOn?: number;
  /**
   * @example
   * 1602259200000
   */
  endOn?: number;
  extendJson?: string;
  hostJson?: string;
  imageJson?: string;
  /**
   * @example
   * 1551111111
   */
  instanceId?: number;
  /**
   * @example
   * true
   */
  isTrial?: boolean;
  licenseCode?: string;
  /**
   * @example
   * 204211111111111
   */
  orderId?: number;
  /**
   * @example
   * cmgj00**11
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * cmgj00**11-prepay
   */
  productSkuCode?: string;
  /**
   * @example
   * APP
   */
  productType?: string;
  relationalData?: DescribeInstanceForIsvResponseBodyRelationalData;
  /**
   * @example
   * 6EF60BEC-****-****-****-270359FB54A7
   */
  requestId?: string;
  /**
   * @example
   * OPENED
   */
  status?: string;
  supplierName?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddress: 'ActiveAddress',
      appJson: 'AppJson',
      autoRenewal: 'AutoRenewal',
      beganOn: 'BeganOn',
      componentJson: 'ComponentJson',
      createdOn: 'CreatedOn',
      endOn: 'EndOn',
      extendJson: 'ExtendJson',
      hostJson: 'HostJson',
      imageJson: 'ImageJson',
      instanceId: 'InstanceId',
      isTrial: 'IsTrial',
      licenseCode: 'LicenseCode',
      orderId: 'OrderId',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      productType: 'ProductType',
      relationalData: 'RelationalData',
      requestId: 'RequestId',
      status: 'Status',
      supplierName: 'SupplierName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddress: 'string',
      appJson: 'string',
      autoRenewal: 'string',
      beganOn: 'number',
      componentJson: 'string',
      createdOn: 'number',
      endOn: 'number',
      extendJson: 'string',
      hostJson: 'string',
      imageJson: 'string',
      instanceId: 'number',
      isTrial: 'boolean',
      licenseCode: 'string',
      orderId: 'number',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      productType: 'string',
      relationalData: DescribeInstanceForIsvResponseBodyRelationalData,
      requestId: 'string',
      status: 'string',
      supplierName: 'string',
    };
  }

  validate() {
    if(this.relationalData && typeof (this.relationalData as any).validate === 'function') {
      (this.relationalData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceForIsvResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstanceForIsvResponseBody;
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
      body: DescribeInstanceForIsvResponseBody,
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

export class DescribeInstancesRequest extends $dara.Model {
  /**
   * @example
   * cmgj000112,cmgj000113
   */
  codes?: string;
  /**
   * @example
   * cmgj000114,cmgj000115
   */
  exceptCodes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  productType?: string;
  static names(): { [key: string]: string } {
    return {
      codes: 'Codes',
      exceptCodes: 'ExceptCodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codes: 'string',
      exceptCodes: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  instanceItems?: DescribeInstancesResponseBodyInstanceItems;
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
   * 54C22FB9-0CB1-5629-97A8-653FC7990F00
   */
  requestId?: string;
  /**
   * @example
   * 55
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instanceItems: 'InstanceItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceItems: DescribeInstancesResponseBodyInstanceItems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.instanceItems && typeof (this.instanceItems as any).validate === 'function') {
      (this.instanceItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeInstancesResponseBody;
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
      body: DescribeInstancesResponseBody,
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

export class DescribeLicenseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * xxxxxx
   */
  licenseCode?: string;
  static names(): { [key: string]: string } {
    return {
      licenseCode: 'LicenseCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      licenseCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseResponseBody extends $dara.Model {
  license?: DescribeLicenseResponseBodyLicense;
  /**
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      license: 'License',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      license: DescribeLicenseResponseBodyLicense,
      requestId: 'string',
    };
  }

  validate() {
    if(this.license && typeof (this.license as any).validate === 'function') {
      (this.license as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLicenseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeLicenseResponseBody;
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
      body: DescribeLicenseResponseBody,
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

export class DescribeOrderRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 202*********415
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  accountQuantity?: number;
  /**
   * @example
   * 190311111111****
   */
  aliUid?: number;
  components?: { [key: string]: any };
  /**
   * @example
   * 0.0
   */
  couponPrice?: number;
  /**
   * @example
   * 1531191564000
   */
  createdOn?: number;
  instanceIds?: DescribeOrderResponseBodyInstanceIds;
  /**
   * @example
   * 202211111111111
   */
  orderId?: number;
  /**
   * @example
   * NORMAL
   */
  orderStatus?: string;
  /**
   * @example
   * NEW
   */
  orderType?: string;
  /**
   * @example
   * 10.0
   */
  originalPrice?: number;
  /**
   * @example
   * 1531191675000
   */
  paidOn?: number;
  /**
   * @example
   * PAID
   */
  payStatus?: string;
  /**
   * @example
   * 0.0
   */
  paymentPrice?: number;
  /**
   * @example
   * MONTH
   */
  periodType?: string;
  /**
   * @example
   * cmgj02****
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * cmgj02****-prepay
   */
  productSkuCode?: string;
  /**
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  requestId?: string;
  supplierCompanyName?: string;
  supplierTelephones?: DescribeOrderResponseBodySupplierTelephones;
  /**
   * @example
   * 0.0
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      accountQuantity: 'AccountQuantity',
      aliUid: 'AliUid',
      components: 'Components',
      couponPrice: 'CouponPrice',
      createdOn: 'CreatedOn',
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      originalPrice: 'OriginalPrice',
      paidOn: 'PaidOn',
      payStatus: 'PayStatus',
      paymentPrice: 'PaymentPrice',
      periodType: 'PeriodType',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      quantity: 'Quantity',
      requestId: 'RequestId',
      supplierCompanyName: 'SupplierCompanyName',
      supplierTelephones: 'SupplierTelephones',
      totalPrice: 'TotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountQuantity: 'number',
      aliUid: 'number',
      components: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      couponPrice: 'number',
      createdOn: 'number',
      instanceIds: DescribeOrderResponseBodyInstanceIds,
      orderId: 'number',
      orderStatus: 'string',
      orderType: 'string',
      originalPrice: 'number',
      paidOn: 'number',
      payStatus: 'string',
      paymentPrice: 'number',
      periodType: 'string',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      quantity: 'number',
      requestId: 'string',
      supplierCompanyName: 'string',
      supplierTelephones: DescribeOrderResponseBodySupplierTelephones,
      totalPrice: 'number',
    };
  }

  validate() {
    if(this.components) {
      $dara.Model.validateMap(this.components);
    }
    if(this.instanceIds && typeof (this.instanceIds as any).validate === 'function') {
      (this.instanceIds as any).validate();
    }
    if(this.supplierTelephones && typeof (this.supplierTelephones as any).validate === 'function') {
      (this.supplierTelephones as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOrderResponseBody;
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
      body: DescribeOrderResponseBody,
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

export class DescribeOrderForIsvRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 202*********415
   */
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderForIsvResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  accountQuantity?: number;
  /**
   * @example
   * 190311111111****
   */
  aliUid?: number;
  components?: any;
  /**
   * @example
   * 0.0
   */
  couponPrice?: number;
  /**
   * @example
   * 1531191564000
   */
  createdOn?: number;
  /**
   * @remarks
   * List
   */
  instanceIds?: string[];
  /**
   * @example
   * 202211111111111
   */
  orderId?: number;
  /**
   * @example
   * NORMAL
   */
  orderStatus?: string;
  /**
   * @example
   * NEW
   */
  orderType?: string;
  /**
   * @example
   * 10.0
   */
  originalPrice?: number;
  /**
   * @example
   * 1531191675000
   */
  paidOn?: number;
  /**
   * @example
   * PAID
   */
  payStatus?: string;
  /**
   * @example
   * 0.0
   */
  paymentPrice?: number;
  /**
   * @example
   * MONTH
   */
  periodType?: string;
  /**
   * @example
   * cmgj02****
   */
  productCode?: string;
  productName?: string;
  /**
   * @example
   * cmgj02****-prepay
   */
  productSkuCode?: string;
  /**
   * @example
   * 1
   */
  quantity?: number;
  /**
   * @example
   * 6EF60BEC-****-****-****-270359FB54A7
   */
  requestId?: string;
  /**
   * @example
   * 0.0
   */
  totalPrice?: number;
  static names(): { [key: string]: string } {
    return {
      accountQuantity: 'AccountQuantity',
      aliUid: 'AliUid',
      components: 'Components',
      couponPrice: 'CouponPrice',
      createdOn: 'CreatedOn',
      instanceIds: 'InstanceIds',
      orderId: 'OrderId',
      orderStatus: 'OrderStatus',
      orderType: 'OrderType',
      originalPrice: 'OriginalPrice',
      paidOn: 'PaidOn',
      payStatus: 'PayStatus',
      paymentPrice: 'PaymentPrice',
      periodType: 'PeriodType',
      productCode: 'ProductCode',
      productName: 'ProductName',
      productSkuCode: 'ProductSkuCode',
      quantity: 'Quantity',
      requestId: 'RequestId',
      totalPrice: 'TotalPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountQuantity: 'number',
      aliUid: 'number',
      components: 'any',
      couponPrice: 'number',
      createdOn: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      orderId: 'number',
      orderStatus: 'string',
      orderType: 'string',
      originalPrice: 'number',
      paidOn: 'number',
      payStatus: 'string',
      paymentPrice: 'number',
      periodType: 'string',
      productCode: 'string',
      productName: 'string',
      productSkuCode: 'string',
      quantity: 'number',
      requestId: 'string',
      totalPrice: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOrderForIsvResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeOrderForIsvResponseBody;
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
      body: DescribeOrderForIsvResponseBody,
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

export class DescribePriceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"components":{"package_version":"yuncode12928000016"},"duration":1,"pricingCycle":"YEAR","productCode":"cmgj01**28","quantity":1,"skuCode":"prepay"}
   */
  commodity?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * INSTANCE_BUY
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      commodity: 'Commodity',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodity: 'string',
      orderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBody extends $dara.Model {
  coupons?: DescribePriceResponseBodyCoupons;
  /**
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @example
   * true
   */
  cuxiao?: boolean;
  /**
   * @example
   * MONTH
   */
  cycle?: string;
  /**
   * @example
   * 178.20
   */
  discountPrice?: number;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * ORDER.NO_REAL_NAME_AUTHENTICATION
   */
  expressionCode?: string;
  expressionMessage?: string;
  infoTitle?: string;
  /**
   * @example
   * 198.00
   */
  originalPrice?: number;
  /**
   * @example
   * cmgj01****
   */
  productCode?: string;
  promotionRules?: DescribePriceResponseBodyPromotionRules;
  /**
   * @example
   * 19.80
   */
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      coupons: 'Coupons',
      currency: 'Currency',
      cuxiao: 'Cuxiao',
      cycle: 'Cycle',
      discountPrice: 'DiscountPrice',
      duration: 'Duration',
      expressionCode: 'ExpressionCode',
      expressionMessage: 'ExpressionMessage',
      infoTitle: 'InfoTitle',
      originalPrice: 'OriginalPrice',
      productCode: 'ProductCode',
      promotionRules: 'PromotionRules',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coupons: DescribePriceResponseBodyCoupons,
      currency: 'string',
      cuxiao: 'boolean',
      cycle: 'string',
      discountPrice: 'number',
      duration: 'number',
      expressionCode: 'string',
      expressionMessage: 'string',
      infoTitle: 'string',
      originalPrice: 'number',
      productCode: 'string',
      promotionRules: DescribePriceResponseBodyPromotionRules,
      tradePrice: 'number',
    };
  }

  validate() {
    if(this.coupons && typeof (this.coupons as any).validate === 'function') {
      (this.coupons as any).validate();
    }
    if(this.promotionRules && typeof (this.promotionRules as any).validate === 'function') {
      (this.promotionRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribePriceResponseBody;
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
      body: DescribePriceResponseBody,
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

export class DescribeProductRequest extends $dara.Model {
  /**
   * @remarks
   * AliUid
   * 
   * @example
   * 190********569
   */
  aliUid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cmjj01**45
   */
  code?: string;
  /**
   * @example
   * false
   */
  queryDraft?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      code: 'Code',
      queryDraft: 'QueryDraft',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      code: 'string',
      queryDraft: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponseBody extends $dara.Model {
  auditFailMsg?: string;
  /**
   * @example
   * function_fail
   */
  auditStatus?: string;
  /**
   * @example
   * 1581609600000
   */
  auditTime?: number;
  /**
   * @example
   * cmjj01**45
   */
  code?: string;
  description?: string;
  /**
   * @example
   * 523617212
   */
  frontCategoryId?: number;
  /**
   * @example
   * 1578931200000
   */
  gmtCreated?: number;
  /**
   * @example
   * 1578931200000
   */
  gmtModified?: number;
  name?: string;
  /**
   * @example
   * https://oss.aliyuncs.com/photogallery/photo/1930532890589852/6245/495d5f19-03e4-4c2e-9c4e-bef9ab6af1e1.png
   */
  picUrl?: string;
  productExtras?: DescribeProductResponseBodyProductExtras;
  productSkus?: DescribeProductResponseBodyProductSkus;
  /**
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  requestId?: string;
  /**
   * @example
   * 5.0
   */
  score?: number;
  shopInfo?: DescribeProductResponseBodyShopInfo;
  shortDescription?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
   * @example
   * 1526111111****
   */
  supplierPk?: number;
  /**
   * @example
   * MIRROR
   */
  type?: string;
  /**
   * @example
   * 10
   */
  useCount?: number;
  static names(): { [key: string]: string } {
    return {
      auditFailMsg: 'AuditFailMsg',
      auditStatus: 'AuditStatus',
      auditTime: 'AuditTime',
      code: 'Code',
      description: 'Description',
      frontCategoryId: 'FrontCategoryId',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      name: 'Name',
      picUrl: 'PicUrl',
      productExtras: 'ProductExtras',
      productSkus: 'ProductSkus',
      requestId: 'RequestId',
      score: 'Score',
      shopInfo: 'ShopInfo',
      shortDescription: 'ShortDescription',
      status: 'Status',
      supplierPk: 'SupplierPk',
      type: 'Type',
      useCount: 'UseCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditFailMsg: 'string',
      auditStatus: 'string',
      auditTime: 'number',
      code: 'string',
      description: 'string',
      frontCategoryId: 'number',
      gmtCreated: 'number',
      gmtModified: 'number',
      name: 'string',
      picUrl: 'string',
      productExtras: DescribeProductResponseBodyProductExtras,
      productSkus: DescribeProductResponseBodyProductSkus,
      requestId: 'string',
      score: 'number',
      shopInfo: DescribeProductResponseBodyShopInfo,
      shortDescription: 'string',
      status: 'string',
      supplierPk: 'number',
      type: 'string',
      useCount: 'number',
    };
  }

  validate() {
    if(this.productExtras && typeof (this.productExtras as any).validate === 'function') {
      (this.productExtras as any).validate();
    }
    if(this.productSkus && typeof (this.productSkus as any).validate === 'function') {
      (this.productSkus as any).validate();
    }
    if(this.shopInfo && typeof (this.shopInfo as any).validate === 'function') {
      (this.shopInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProductResponseBody;
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
      body: DescribeProductResponseBody,
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

export class DescribeProductsRequest extends $dara.Model {
  filter?: DescribeProductsRequestFilter[];
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
  searchTerm?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchTerm: 'SearchTerm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeProductsRequestFilter },
      pageNumber: 'number',
      pageSize: 'number',
      searchTerm: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponseBody extends $dara.Model {
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
  productItems?: DescribeProductsResponseBodyProductItems;
  /**
   * @example
   * A077D99E-0C4D-421E-A5D4-F533F6657817
   */
  requestId?: string;
  /**
   * @example
   * 75
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productItems: 'ProductItems',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      productItems: DescribeProductsResponseBodyProductItems,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.productItems && typeof (this.productItems as any).validate === 'function') {
      (this.productItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProductsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProductsResponseBody;
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
      body: DescribeProductsResponseBody,
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

export class DescribeProjectAttachmentsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4****89
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeProjectAttachmentsResponseBody extends $dara.Model {
  /**
   * @example
   * e03a9f78-7b40-4fb3-a015-350913e37e3f
   */
  requestId?: string;
  result?: DescribeProjectAttachmentsResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeProjectAttachmentsResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectAttachmentsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProjectAttachmentsResponseBody;
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
      body: DescribeProjectAttachmentsResponseBody,
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

export class DescribeProjectInfoRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4****89
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeProjectInfoResponseBody extends $dara.Model {
  /**
   * @example
   * ee3e1b3b-6c38-4bcf-be40-5a946cfda761
   */
  requestId?: string;
  result?: DescribeProjectInfoResponseBodyResult;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeProjectInfoResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProjectInfoResponseBody;
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
      body: DescribeProjectInfoResponseBody,
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

export class DescribeProjectMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4****89
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageIndex: 'PageIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMessagesResponseBody extends $dara.Model {
  /**
   * @example
   * 00eb4de1-6cff-4f56-833e-7b1e070e398d
   */
  requestId?: string;
  result?: DescribeProjectMessagesResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 28
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeProjectMessagesResponseBodyResult },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectMessagesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProjectMessagesResponseBody;
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
      body: DescribeProjectMessagesResponseBody,
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

export class DescribeProjectNodesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4****89
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeProjectNodesResponseBody extends $dara.Model {
  /**
   * @example
   * 937fee1f-26bb-4b6e-8def-977a6bdaa1e5
   */
  requestId?: string;
  result?: DescribeProjectNodesResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeProjectNodesResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectNodesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProjectNodesResponseBody;
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
      body: DescribeProjectNodesResponseBody,
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

export class DescribeProjectOperateLogsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4****89
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeProjectOperateLogsResponseBody extends $dara.Model {
  /**
   * @example
   * e6037e86-657f-4194-bb6a-7b26973aec8d
   */
  requestId?: string;
  result?: DescribeProjectOperateLogsResponseBodyResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeProjectOperateLogsResponseBodyResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeProjectOperateLogsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeProjectOperateLogsResponseBody;
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
      body: DescribeProjectOperateLogsResponseBody,
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

export class FinishCurrentProjectNodeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4****89
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1924
   */
  nodeId?: number;
  remark?: string;
  templateForm?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      remark: 'Remark',
      templateForm: 'TemplateForm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'number',
      remark: 'string',
      templateForm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishCurrentProjectNodeResponseBody extends $dara.Model {
  /**
   * @example
   * ee69a00f-189b-400f-9fd2-af89749fb50f
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinishCurrentProjectNodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: FinishCurrentProjectNodeResponseBody;
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
      body: FinishCurrentProjectNodeResponseBody,
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

export class PauseProjectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4****89
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1922
   */
  nodeId?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseProjectResponseBody extends $dara.Model {
  /**
   * @example
   * ee69a00f-189b-400f-9fd2-af89749fb50f
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PauseProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PauseProjectResponseBody;
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
      body: PauseProjectResponseBody,
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

export class PushMeteringDataRequest extends $dara.Model {
  /**
   * @example
   * [{"InstanceId":"1000001","StartTime":"100000000","EndTime":"100000010","Entities":[{"Key":"PeriodMin","Value":"96","meteringAssit":"cmapi00060317-PeriodMin-4"}]}]
   */
  metering?: string;
  static names(): { [key: string]: string } {
    return {
      metering: 'Metering',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metering: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataResponseBody extends $dara.Model {
  /**
   * @example
   * 6EF60BEC-0242-43AF-BB20-270359FB54A7
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMeteringDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PushMeteringDataResponseBody;
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
      body: PushMeteringDataResponseBody,
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

export class ResumeProjectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4****89
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1922
   */
  nodeId?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeProjectResponseBody extends $dara.Model {
  /**
   * @example
   * ee69a00f-189b-400f-9fd2-af89749fb50f
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResumeProjectResponseBody;
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
      body: ResumeProjectResponseBody,
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

export class RollbackCurrentProjectNodeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4****89
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1925
   */
  nodeId?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeId: 'number',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackCurrentProjectNodeResponseBody extends $dara.Model {
  /**
   * @example
   * ee69a00f-189b-400f-9fd2-af89749fb50f
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackCurrentProjectNodeResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RollbackCurrentProjectNodeResponseBody;
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
      body: RollbackCurrentProjectNodeResponseBody,
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
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-hangzhou': "market.aliyuncs.com",
      'ap-northeast-1': "market.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "market.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "market.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "market.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "market.ap-southeast-1.aliyuncs.com",
      'cn-beijing': "market.aliyuncs.com",
      'cn-chengdu': "market.aliyuncs.com",
      'cn-hongkong': "market.aliyuncs.com",
      'cn-huhehaote': "market.aliyuncs.com",
      'cn-qingdao': "market.aliyuncs.com",
      'cn-shanghai': "market.aliyuncs.com",
      'cn-shenzhen': "market.aliyuncs.com",
      'cn-zhangjiakou': "market.aliyuncs.com",
      'eu-central-1': "market.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "market.ap-southeast-1.aliyuncs.com",
      'me-east-1': "market.ap-southeast-1.aliyuncs.com",
      'us-east-1': "market.ap-southeast-1.aliyuncs.com",
      'us-west-1': "market.ap-southeast-1.aliyuncs.com",
      'cn-hangzhou-finance': "market.aliyuncs.com",
      'cn-shenzhen-finance-1': "market.aliyuncs.com",
      'cn-shanghai-finance-1': "market.aliyuncs.com",
      'cn-north-2-gov-1': "market.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("market", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 增加STS支持
   * 
   * @param request - ActivateLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateLicenseResponse
   */
  async activateLicenseWithOptions(request: ActivateLicenseRequest, runtime: $dara.RuntimeOptions): Promise<ActivateLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identification)) {
      query["Identification"] = request.identification;
    }

    if (!$dara.isNull(request.licenseCode)) {
      query["LicenseCode"] = request.licenseCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateLicense",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ActivateLicenseResponse>(await this.callApi(params, req, runtime), new ActivateLicenseResponse({}));
    } else {
      return $dara.cast<ActivateLicenseResponse>(await this.execute(params, req, runtime), new ActivateLicenseResponse({}));
    }

  }

  /**
   * 增加STS支持
   * 
   * @param request - ActivateLicenseRequest
   * @returns ActivateLicenseResponse
   */
  async activateLicense(request: ActivateLicenseRequest): Promise<ActivateLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.activateLicenseWithOptions(request, runtime);
  }

  /**
   * @param request - AutoRenewInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AutoRenewInstanceResponse
   */
  async autoRenewInstanceWithOptions(request: AutoRenewInstanceRequest, runtime: $dara.RuntimeOptions): Promise<AutoRenewInstanceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoRenewCycle)) {
      body["AutoRenewCycle"] = request.autoRenewCycle;
    }

    if (!$dara.isNull(request.autoRenewDuration)) {
      body["AutoRenewDuration"] = request.autoRenewDuration;
    }

    if (!$dara.isNull(request.orderBizId)) {
      body["OrderBizId"] = request.orderBizId;
    }

    if (!$dara.isNull(request.ownerId)) {
      body["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "AutoRenewInstance",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AutoRenewInstanceResponse>(await this.callApi(params, req, runtime), new AutoRenewInstanceResponse({}));
    } else {
      return $dara.cast<AutoRenewInstanceResponse>(await this.execute(params, req, runtime), new AutoRenewInstanceResponse({}));
    }

  }

  /**
   * @param request - AutoRenewInstanceRequest
   * @returns AutoRenewInstanceResponse
   */
  async autoRenewInstance(request: AutoRenewInstanceRequest): Promise<AutoRenewInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.autoRenewInstanceWithOptions(request, runtime);
  }

  /**
   * @param request - CreateOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOrderResponse
   */
  async createOrderWithOptions(request: CreateOrderRequest, runtime: $dara.RuntimeOptions): Promise<CreateOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!$dara.isNull(request.commodity)) {
      query["Commodity"] = request.commodity;
    }

    if (!$dara.isNull(request.orderSouce)) {
      query["OrderSouce"] = request.orderSouce;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.paymentType)) {
      query["PaymentType"] = request.paymentType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOrder",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateOrderResponse>(await this.callApi(params, req, runtime), new CreateOrderResponse({}));
    } else {
      return $dara.cast<CreateOrderResponse>(await this.execute(params, req, runtime), new CreateOrderResponse({}));
    }

  }

  /**
   * @param request - CreateOrderRequest
   * @returns CreateOrderResponse
   */
  async createOrder(request: CreateOrderRequest): Promise<CreateOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createOrderWithOptions(request, runtime);
  }

  /**
   * @param request - CrossAccountVerifyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CrossAccountVerifyTokenResponse
   */
  async crossAccountVerifyTokenWithOptions(request: CrossAccountVerifyTokenRequest, runtime: $dara.RuntimeOptions): Promise<CrossAccountVerifyTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.token)) {
      body["Token"] = request.token;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CrossAccountVerifyToken",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CrossAccountVerifyTokenResponse>(await this.callApi(params, req, runtime), new CrossAccountVerifyTokenResponse({}));
    } else {
      return $dara.cast<CrossAccountVerifyTokenResponse>(await this.execute(params, req, runtime), new CrossAccountVerifyTokenResponse({}));
    }

  }

  /**
   * @param request - CrossAccountVerifyTokenRequest
   * @returns CrossAccountVerifyTokenResponse
   */
  async crossAccountVerifyToken(request: CrossAccountVerifyTokenRequest): Promise<CrossAccountVerifyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.crossAccountVerifyTokenWithOptions(request, runtime);
  }

  /**
   * 查询API用量
   * 
   * @param request - DescribeApiMeteringRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeApiMeteringResponse
   */
  async describeApiMeteringWithOptions(request: DescribeApiMeteringRequest, runtime: $dara.RuntimeOptions): Promise<DescribeApiMeteringResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeApiMetering",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeApiMeteringResponse>(await this.callApi(params, req, runtime), new DescribeApiMeteringResponse({}));
    } else {
      return $dara.cast<DescribeApiMeteringResponse>(await this.execute(params, req, runtime), new DescribeApiMeteringResponse({}));
    }

  }

  /**
   * 查询API用量
   * 
   * @param request - DescribeApiMeteringRequest
   * @returns DescribeApiMeteringResponse
   */
  async describeApiMetering(request: DescribeApiMeteringRequest): Promise<DescribeApiMeteringResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeApiMeteringWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeCurrentNodeInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeCurrentNodeInfoResponse
   */
  async describeCurrentNodeInfoWithOptions(request: DescribeCurrentNodeInfoRequest, runtime: $dara.RuntimeOptions): Promise<DescribeCurrentNodeInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeCurrentNodeInfo",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeCurrentNodeInfoResponse>(await this.callApi(params, req, runtime), new DescribeCurrentNodeInfoResponse({}));
    } else {
      return $dara.cast<DescribeCurrentNodeInfoResponse>(await this.execute(params, req, runtime), new DescribeCurrentNodeInfoResponse({}));
    }

  }

  /**
   * @param request - DescribeCurrentNodeInfoRequest
   * @returns DescribeCurrentNodeInfoResponse
   */
  async describeCurrentNodeInfo(request: DescribeCurrentNodeInfoRequest): Promise<DescribeCurrentNodeInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeCurrentNodeInfoWithOptions(request, runtime);
  }

  /**
   * 分页获取推广商品
   * 
   * @param request - DescribeDistributionProductsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDistributionProductsResponse
   */
  async describeDistributionProductsWithOptions(request: DescribeDistributionProductsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDistributionProductsResponse> {
    request.validate();
    let query = OpenApiUtil.query(request.toMap());
    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDistributionProducts",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDistributionProductsResponse>(await this.callApi(params, req, runtime), new DescribeDistributionProductsResponse({}));
    } else {
      return $dara.cast<DescribeDistributionProductsResponse>(await this.execute(params, req, runtime), new DescribeDistributionProductsResponse({}));
    }

  }

  /**
   * 分页获取推广商品
   * 
   * @param request - DescribeDistributionProductsRequest
   * @returns DescribeDistributionProductsResponse
   */
  async describeDistributionProducts(request: DescribeDistributionProductsRequest): Promise<DescribeDistributionProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDistributionProductsWithOptions(request, runtime);
  }

  /**
   * 获取并生成推广商品-链接
   * 
   * @param tmpReq - DescribeDistributionProductsLinkRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDistributionProductsLinkResponse
   */
  async describeDistributionProductsLinkWithOptions(tmpReq: DescribeDistributionProductsLinkRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDistributionProductsLinkResponse> {
    tmpReq.validate();
    let request = new DescribeDistributionProductsLinkShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.codes)) {
      request.codesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.codes, "Codes", "json");
    }

    let query = { };
    if (!$dara.isNull(request.codesShrink)) {
      query["Codes"] = request.codesShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeDistributionProductsLink",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeDistributionProductsLinkResponse>(await this.callApi(params, req, runtime), new DescribeDistributionProductsLinkResponse({}));
    } else {
      return $dara.cast<DescribeDistributionProductsLinkResponse>(await this.execute(params, req, runtime), new DescribeDistributionProductsLinkResponse({}));
    }

  }

  /**
   * 获取并生成推广商品-链接
   * 
   * @param request - DescribeDistributionProductsLinkRequest
   * @returns DescribeDistributionProductsLinkResponse
   */
  async describeDistributionProductsLink(request: DescribeDistributionProductsLinkRequest): Promise<DescribeDistributionProductsLinkResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDistributionProductsLinkWithOptions(request, runtime);
  }

  /**
   * 服务商侧查询镜像实例信息
   * 
   * @param request - DescribeImageInstanceForIsvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeImageInstanceForIsvResponse
   */
  async describeImageInstanceForIsvWithOptions(request: DescribeImageInstanceForIsvRequest, runtime: $dara.RuntimeOptions): Promise<DescribeImageInstanceForIsvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.customerPk)) {
      query["CustomerPk"] = request.customerPk;
    }

    if (!$dara.isNull(request.ecsInstanceId)) {
      query["EcsInstanceId"] = request.ecsInstanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeImageInstanceForIsv",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeImageInstanceForIsvResponse>(await this.callApi(params, req, runtime), new DescribeImageInstanceForIsvResponse({}));
    } else {
      return $dara.cast<DescribeImageInstanceForIsvResponse>(await this.execute(params, req, runtime), new DescribeImageInstanceForIsvResponse({}));
    }

  }

  /**
   * 服务商侧查询镜像实例信息
   * 
   * @param request - DescribeImageInstanceForIsvRequest
   * @returns DescribeImageInstanceForIsvResponse
   */
  async describeImageInstanceForIsv(request: DescribeImageInstanceForIsvRequest): Promise<DescribeImageInstanceForIsvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeImageInstanceForIsvWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstanceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceResponse
   */
  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstance",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstanceResponse>(await this.callApi(params, req, runtime), new DescribeInstanceResponse({}));
    } else {
      return $dara.cast<DescribeInstanceResponse>(await this.execute(params, req, runtime), new DescribeInstanceResponse({}));
    }

  }

  /**
   * @param request - DescribeInstanceRequest
   * @returns DescribeInstanceResponse
   */
  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  /**
   * 服务商侧查询实例信息
   * 
   * @param request - DescribeInstanceForIsvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstanceForIsvResponse
   */
  async describeInstanceForIsvWithOptions(request: DescribeInstanceForIsvRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstanceForIsvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstanceForIsv",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstanceForIsvResponse>(await this.callApi(params, req, runtime), new DescribeInstanceForIsvResponse({}));
    } else {
      return $dara.cast<DescribeInstanceForIsvResponse>(await this.execute(params, req, runtime), new DescribeInstanceForIsvResponse({}));
    }

  }

  /**
   * 服务商侧查询实例信息
   * 
   * @param request - DescribeInstanceForIsvRequest
   * @returns DescribeInstanceForIsvResponse
   */
  async describeInstanceForIsv(request: DescribeInstanceForIsvRequest): Promise<DescribeInstanceForIsvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstanceForIsvWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeInstancesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeInstancesResponse
   */
  async describeInstancesWithOptions(request: DescribeInstancesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeInstancesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.codes)) {
      query["Codes"] = request.codes;
    }

    if (!$dara.isNull(request.exceptCodes)) {
      query["ExceptCodes"] = request.exceptCodes;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeInstances",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeInstancesResponse>(await this.callApi(params, req, runtime), new DescribeInstancesResponse({}));
    } else {
      return $dara.cast<DescribeInstancesResponse>(await this.execute(params, req, runtime), new DescribeInstancesResponse({}));
    }

  }

  /**
   * @param request - DescribeInstancesRequest
   * @returns DescribeInstancesResponse
   */
  async describeInstances(request: DescribeInstancesRequest): Promise<DescribeInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeInstancesWithOptions(request, runtime);
  }

  /**
   * 获取License
   * 
   * @param request - DescribeLicenseRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeLicenseResponse
   */
  async describeLicenseWithOptions(request: DescribeLicenseRequest, runtime: $dara.RuntimeOptions): Promise<DescribeLicenseResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.licenseCode)) {
      query["LicenseCode"] = request.licenseCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeLicense",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeLicenseResponse>(await this.callApi(params, req, runtime), new DescribeLicenseResponse({}));
    } else {
      return $dara.cast<DescribeLicenseResponse>(await this.execute(params, req, runtime), new DescribeLicenseResponse({}));
    }

  }

  /**
   * 获取License
   * 
   * @param request - DescribeLicenseRequest
   * @returns DescribeLicenseResponse
   */
  async describeLicense(request: DescribeLicenseRequest): Promise<DescribeLicenseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeLicenseWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeOrderRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOrderResponse
   */
  async describeOrderWithOptions(request: DescribeOrderRequest, runtime: $dara.RuntimeOptions): Promise<DescribeOrderResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOrder",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeOrderResponse>(await this.callApi(params, req, runtime), new DescribeOrderResponse({}));
    } else {
      return $dara.cast<DescribeOrderResponse>(await this.execute(params, req, runtime), new DescribeOrderResponse({}));
    }

  }

  /**
   * @param request - DescribeOrderRequest
   * @returns DescribeOrderResponse
   */
  async describeOrder(request: DescribeOrderRequest): Promise<DescribeOrderResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOrderWithOptions(request, runtime);
  }

  /**
   * 服务商侧查询订单详情
   * 
   * @param request - DescribeOrderForIsvRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOrderForIsvResponse
   */
  async describeOrderForIsvWithOptions(request: DescribeOrderForIsvRequest, runtime: $dara.RuntimeOptions): Promise<DescribeOrderForIsvResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.orderId)) {
      query["OrderId"] = request.orderId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeOrderForIsv",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeOrderForIsvResponse>(await this.callApi(params, req, runtime), new DescribeOrderForIsvResponse({}));
    } else {
      return $dara.cast<DescribeOrderForIsvResponse>(await this.execute(params, req, runtime), new DescribeOrderForIsvResponse({}));
    }

  }

  /**
   * 服务商侧查询订单详情
   * 
   * @param request - DescribeOrderForIsvRequest
   * @returns DescribeOrderForIsvResponse
   */
  async describeOrderForIsv(request: DescribeOrderForIsvRequest): Promise<DescribeOrderForIsvResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOrderForIsvWithOptions(request, runtime);
  }

  /**
   * @param request - DescribePriceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePriceResponse
   */
  async describePriceWithOptions(request: DescribePriceRequest, runtime: $dara.RuntimeOptions): Promise<DescribePriceResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.commodity)) {
      query["Commodity"] = request.commodity;
    }

    if (!$dara.isNull(request.orderType)) {
      query["OrderType"] = request.orderType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribePrice",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribePriceResponse>(await this.callApi(params, req, runtime), new DescribePriceResponse({}));
    } else {
      return $dara.cast<DescribePriceResponse>(await this.execute(params, req, runtime), new DescribePriceResponse({}));
    }

  }

  /**
   * @param request - DescribePriceRequest
   * @returns DescribePriceResponse
   */
  async describePrice(request: DescribePriceRequest): Promise<DescribePriceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeProductRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductResponse
   */
  async describeProductWithOptions(request: DescribeProductRequest, runtime: $dara.RuntimeOptions): Promise<DescribeProductResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!$dara.isNull(request.code)) {
      query["Code"] = request.code;
    }

    if (!$dara.isNull(request.queryDraft)) {
      query["QueryDraft"] = request.queryDraft;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProduct",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeProductResponse>(await this.callApi(params, req, runtime), new DescribeProductResponse({}));
    } else {
      return $dara.cast<DescribeProductResponse>(await this.execute(params, req, runtime), new DescribeProductResponse({}));
    }

  }

  /**
   * @param request - DescribeProductRequest
   * @returns DescribeProductResponse
   */
  async describeProduct(request: DescribeProductRequest): Promise<DescribeProductResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProductWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeProductsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProductsResponse
   */
  async describeProductsWithOptions(request: DescribeProductsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeProductsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.searchTerm)) {
      query["SearchTerm"] = request.searchTerm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProducts",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeProductsResponse>(await this.callApi(params, req, runtime), new DescribeProductsResponse({}));
    } else {
      return $dara.cast<DescribeProductsResponse>(await this.execute(params, req, runtime), new DescribeProductsResponse({}));
    }

  }

  /**
   * @param request - DescribeProductsRequest
   * @returns DescribeProductsResponse
   */
  async describeProducts(request: DescribeProductsRequest): Promise<DescribeProductsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProductsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeProjectAttachmentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectAttachmentsResponse
   */
  async describeProjectAttachmentsWithOptions(request: DescribeProjectAttachmentsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeProjectAttachmentsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProjectAttachments",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeProjectAttachmentsResponse>(await this.callApi(params, req, runtime), new DescribeProjectAttachmentsResponse({}));
    } else {
      return $dara.cast<DescribeProjectAttachmentsResponse>(await this.execute(params, req, runtime), new DescribeProjectAttachmentsResponse({}));
    }

  }

  /**
   * @param request - DescribeProjectAttachmentsRequest
   * @returns DescribeProjectAttachmentsResponse
   */
  async describeProjectAttachments(request: DescribeProjectAttachmentsRequest): Promise<DescribeProjectAttachmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectAttachmentsWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeProjectInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectInfoResponse
   */
  async describeProjectInfoWithOptions(request: DescribeProjectInfoRequest, runtime: $dara.RuntimeOptions): Promise<DescribeProjectInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProjectInfo",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeProjectInfoResponse>(await this.callApi(params, req, runtime), new DescribeProjectInfoResponse({}));
    } else {
      return $dara.cast<DescribeProjectInfoResponse>(await this.execute(params, req, runtime), new DescribeProjectInfoResponse({}));
    }

  }

  /**
   * @param request - DescribeProjectInfoRequest
   * @returns DescribeProjectInfoResponse
   */
  async describeProjectInfo(request: DescribeProjectInfoRequest): Promise<DescribeProjectInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectInfoWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeProjectMessagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectMessagesResponse
   */
  async describeProjectMessagesWithOptions(request: DescribeProjectMessagesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeProjectMessagesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageIndex)) {
      query["PageIndex"] = request.pageIndex;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProjectMessages",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeProjectMessagesResponse>(await this.callApi(params, req, runtime), new DescribeProjectMessagesResponse({}));
    } else {
      return $dara.cast<DescribeProjectMessagesResponse>(await this.execute(params, req, runtime), new DescribeProjectMessagesResponse({}));
    }

  }

  /**
   * @param request - DescribeProjectMessagesRequest
   * @returns DescribeProjectMessagesResponse
   */
  async describeProjectMessages(request: DescribeProjectMessagesRequest): Promise<DescribeProjectMessagesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectMessagesWithOptions(request, runtime);
  }

  /**
   * @remarks
   * *
   * **
   * 
   * @param request - DescribeProjectNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectNodesResponse
   */
  async describeProjectNodesWithOptions(request: DescribeProjectNodesRequest, runtime: $dara.RuntimeOptions): Promise<DescribeProjectNodesResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProjectNodes",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeProjectNodesResponse>(await this.callApi(params, req, runtime), new DescribeProjectNodesResponse({}));
    } else {
      return $dara.cast<DescribeProjectNodesResponse>(await this.execute(params, req, runtime), new DescribeProjectNodesResponse({}));
    }

  }

  /**
   * @remarks
   * *
   * **
   * 
   * @param request - DescribeProjectNodesRequest
   * @returns DescribeProjectNodesResponse
   */
  async describeProjectNodes(request: DescribeProjectNodesRequest): Promise<DescribeProjectNodesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectNodesWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeProjectOperateLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeProjectOperateLogsResponse
   */
  async describeProjectOperateLogsWithOptions(request: DescribeProjectOperateLogsRequest, runtime: $dara.RuntimeOptions): Promise<DescribeProjectOperateLogsResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeProjectOperateLogs",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeProjectOperateLogsResponse>(await this.callApi(params, req, runtime), new DescribeProjectOperateLogsResponse({}));
    } else {
      return $dara.cast<DescribeProjectOperateLogsResponse>(await this.execute(params, req, runtime), new DescribeProjectOperateLogsResponse({}));
    }

  }

  /**
   * @param request - DescribeProjectOperateLogsRequest
   * @returns DescribeProjectOperateLogsResponse
   */
  async describeProjectOperateLogs(request: DescribeProjectOperateLogsRequest): Promise<DescribeProjectOperateLogsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeProjectOperateLogsWithOptions(request, runtime);
  }

  /**
   * @param request - FinishCurrentProjectNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FinishCurrentProjectNodeResponse
   */
  async finishCurrentProjectNodeWithOptions(request: FinishCurrentProjectNodeRequest, runtime: $dara.RuntimeOptions): Promise<FinishCurrentProjectNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.templateForm)) {
      query["TemplateForm"] = request.templateForm;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "FinishCurrentProjectNode",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<FinishCurrentProjectNodeResponse>(await this.callApi(params, req, runtime), new FinishCurrentProjectNodeResponse({}));
    } else {
      return $dara.cast<FinishCurrentProjectNodeResponse>(await this.execute(params, req, runtime), new FinishCurrentProjectNodeResponse({}));
    }

  }

  /**
   * @param request - FinishCurrentProjectNodeRequest
   * @returns FinishCurrentProjectNodeResponse
   */
  async finishCurrentProjectNode(request: FinishCurrentProjectNodeRequest): Promise<FinishCurrentProjectNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.finishCurrentProjectNodeWithOptions(request, runtime);
  }

  /**
   * @param request - PauseProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PauseProjectResponse
   */
  async pauseProjectWithOptions(request: PauseProjectRequest, runtime: $dara.RuntimeOptions): Promise<PauseProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PauseProject",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PauseProjectResponse>(await this.callApi(params, req, runtime), new PauseProjectResponse({}));
    } else {
      return $dara.cast<PauseProjectResponse>(await this.execute(params, req, runtime), new PauseProjectResponse({}));
    }

  }

  /**
   * @param request - PauseProjectRequest
   * @returns PauseProjectResponse
   */
  async pauseProject(request: PauseProjectRequest): Promise<PauseProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pauseProjectWithOptions(request, runtime);
  }

  /**
   * @param request - PushMeteringDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PushMeteringDataResponse
   */
  async pushMeteringDataWithOptions(request: PushMeteringDataRequest, runtime: $dara.RuntimeOptions): Promise<PushMeteringDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.metering)) {
      query["Metering"] = request.metering;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PushMeteringData",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PushMeteringDataResponse>(await this.callApi(params, req, runtime), new PushMeteringDataResponse({}));
    } else {
      return $dara.cast<PushMeteringDataResponse>(await this.execute(params, req, runtime), new PushMeteringDataResponse({}));
    }

  }

  /**
   * @param request - PushMeteringDataRequest
   * @returns PushMeteringDataResponse
   */
  async pushMeteringData(request: PushMeteringDataRequest): Promise<PushMeteringDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pushMeteringDataWithOptions(request, runtime);
  }

  /**
   * @param request - ResumeProjectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeProjectResponse
   */
  async resumeProjectWithOptions(request: ResumeProjectRequest, runtime: $dara.RuntimeOptions): Promise<ResumeProjectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeProject",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResumeProjectResponse>(await this.callApi(params, req, runtime), new ResumeProjectResponse({}));
    } else {
      return $dara.cast<ResumeProjectResponse>(await this.execute(params, req, runtime), new ResumeProjectResponse({}));
    }

  }

  /**
   * @param request - ResumeProjectRequest
   * @returns ResumeProjectResponse
   */
  async resumeProject(request: ResumeProjectRequest): Promise<ResumeProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.resumeProjectWithOptions(request, runtime);
  }

  /**
   * @param request - RollbackCurrentProjectNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RollbackCurrentProjectNodeResponse
   */
  async rollbackCurrentProjectNodeWithOptions(request: RollbackCurrentProjectNodeRequest, runtime: $dara.RuntimeOptions): Promise<RollbackCurrentProjectNodeResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!$dara.isNull(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RollbackCurrentProjectNode",
      version: "2015-11-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RollbackCurrentProjectNodeResponse>(await this.callApi(params, req, runtime), new RollbackCurrentProjectNodeResponse({}));
    } else {
      return $dara.cast<RollbackCurrentProjectNodeResponse>(await this.execute(params, req, runtime), new RollbackCurrentProjectNodeResponse({}));
    }

  }

  /**
   * @param request - RollbackCurrentProjectNodeRequest
   * @returns RollbackCurrentProjectNodeResponse
   */
  async rollbackCurrentProjectNode(request: RollbackCurrentProjectNodeRequest): Promise<RollbackCurrentProjectNodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.rollbackCurrentProjectNodeWithOptions(request, runtime);
  }

}
