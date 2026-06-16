// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInstanceForPartnerResponseBodyModuleAiStaffList extends $dara.Model {
  /**
   * @remarks
   * The staff ID.
   * 
   * @example
   * 370196
   */
  staffId?: string;
  /**
   * @remarks
   * The staff name.
   * 
   * @example
   * StaffName
   */
  staffName?: string;
  /**
   * @remarks
   * The staff type.
   * 
   * @example
   * StaffType
   */
  staffType?: string;
  /**
   * @remarks
   * The staff status.
   * 
   * @example
   * 200
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      staffId: 'StaffId',
      staffName: 'StaffName',
      staffType: 'StaffType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      staffId: 'string',
      staffName: 'string',
      staffType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBodyModuleAppDesignSpec extends $dara.Model {
  /**
   * @remarks
   * bill
   * 
   * @example
   * bilingual
   */
  bilingual?: boolean;
  /**
   * @remarks
   * The customer business ID.
   * 
   * @example
   * WS20250801151731000007
   */
  bizId?: string;
  /**
   * @remarks
   * busincessScope
   * 
   * @example
   * scopre
   */
  businessScope?: string;
  /**
   * @remarks
   * The specified color. Valid values:
   * - **black**: Black.
   * - **white**: White.
   * - **red**: Red.
   * - **blue**: Blue.
   * 
   * @example
   * style
   */
  colorStyle?: string;
  /**
   * @remarks
   * The company name.
   * 
   * @example
   * bvt_test
   */
  companyName?: string;
  /**
   * @remarks
   * The deployment region.
   * 
   * @example
   * HongKong
   */
  deployArea?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-12-21T08:27:03Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * Wed Sep 10 09:53:35 CST 2025
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * m1zumwgy6u
   */
  id?: number;
  /**
   * @remarks
   * business
   * 
   * @example
   * business
   */
  mainBusiness?: string;
  /**
   * @remarks
   * website
   * 
   * @example
   * website
   */
  referenceWebsite?: string;
  /**
   * @remarks
   * sitegolas
   * 
   * @example
   * goals
   */
  siteGoals?: string;
  /**
   * @remarks
   * language
   * 
   * @example
   * sitelanguage
   */
  siteLanguage?: string;
  /**
   * @remarks
   * sitelogo
   * 
   * @example
   * logo
   */
  siteLogo?: string;
  /**
   * @remarks
   * siteslogan
   * 
   * @example
   * slogan
   */
  siteSlogan?: string;
  /**
   * @remarks
   * sitestyle
   * 
   * @example
   * style
   */
  siteStyle?: string;
  /**
   * @remarks
   * sitetitle
   * 
   * @example
   * title
   */
  siteTitle?: string;
  /**
   * @remarks
   * The application type. Valid values:
   * - web: Web & H5.
   * - miniapp: mini program.
   * - ios: iOS.
   * - android: Android.
   * 
   * @example
   * web
   */
  siteType?: string;
  /**
   * @remarks
   * userid
   * 
   * @example
   * userid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bilingual: 'Bilingual',
      bizId: 'BizId',
      businessScope: 'BusinessScope',
      colorStyle: 'ColorStyle',
      companyName: 'CompanyName',
      deployArea: 'DeployArea',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      mainBusiness: 'MainBusiness',
      referenceWebsite: 'ReferenceWebsite',
      siteGoals: 'SiteGoals',
      siteLanguage: 'SiteLanguage',
      siteLogo: 'SiteLogo',
      siteSlogan: 'SiteSlogan',
      siteStyle: 'SiteStyle',
      siteTitle: 'SiteTitle',
      siteType: 'SiteType',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bilingual: 'boolean',
      bizId: 'string',
      businessScope: 'string',
      colorStyle: 'string',
      companyName: 'string',
      deployArea: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      mainBusiness: 'string',
      referenceWebsite: 'string',
      siteGoals: 'string',
      siteLanguage: 'string',
      siteLogo: 'string',
      siteSlogan: 'string',
      siteStyle: 'string',
      siteTitle: 'string',
      siteType: 'string',
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

export class GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressActions extends $dara.Model {
  /**
   * @remarks
   * The action key that uniquely identifies an operation.
   * 
   * @example
   * BeginDialogue
   */
  actionKey?: string;
  /**
   * @remarks
   * The display text of the action, which is shown as the action name in the interface.
   * 
   * @example
   * placeHolder
   */
  actionText?: string;
  /**
   * @remarks
   * Indicates whether the action is enabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The URL to which the user is redirected when the action is clicked.
   * 
   * @example
   * placeHolder
   */
  href?: string;
  static names(): { [key: string]: string } {
    return {
      actionKey: 'ActionKey',
      actionText: 'ActionText',
      enable: 'Enable',
      href: 'Href',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionKey: 'string',
      actionText: 'string',
      enable: 'boolean',
      href: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressDashboardActions extends $dara.Model {
  /**
   * @remarks
   * The action key that uniquely identifies an operation.
   * 
   * @example
   * CollectedNumber
   */
  actionKey?: string;
  /**
   * @remarks
   * The display text of the action, which is shown as the action name in the interface.
   * 
   * @example
   * placeHolder
   */
  actionText?: string;
  /**
   * @remarks
   * Indicates whether the action is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The URL to which the user is redirected when the action is clicked.
   * 
   * @example
   * placeHolder
   */
  href?: string;
  static names(): { [key: string]: string } {
    return {
      actionKey: 'ActionKey',
      actionText: 'ActionText',
      enable: 'Enable',
      href: 'Href',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionKey: 'string',
      actionText: 'string',
      enable: 'boolean',
      href: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBodyModuleAppOperationAddress extends $dara.Model {
  /**
   * @remarks
   * The list of console action buttons.
   */
  actions?: GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressActions[];
  /**
   * @remarks
   * The URL for customer service design.
   * 
   * @example
   * placeHolder
   */
  aiCustomerConfigUrl?: string;
  /**
   * @remarks
   * The URL for AI design.
   * 
   * @example
   * placeHolder
   */
  aiDesignUrl?: string;
  /**
   * @remarks
   * The URL for application publishing.
   * 
   * @example
   * placeHolder
   */
  appPublishUrl?: string;
  /**
   * @remarks
   * The list of overview page action buttons.
   */
  dashboardActions?: GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressDashboardActions[];
  /**
   * @remarks
   * The URL for professional design.
   * 
   * @example
   * placeHolder
   */
  designUrl?: string;
  /**
   * @remarks
   * The logon URL of the application instance.
   * 
   * @example
   * placeHolder
   */
  instanceLoginUrl?: string;
  /**
   * @remarks
   * The URL for renewal purchase.
   * 
   * @example
   * placeHolder
   */
  renewBuyUrl?: string;
  /**
   * @remarks
   * The URL for service delivery.
   * 
   * @example
   * placeHolder
   */
  serverDeliveryUrl?: string;
  /**
   * @remarks
   * The URL for upgrade purchase.
   * 
   * @example
   * placeHolder
   */
  upgradeBuyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      aiCustomerConfigUrl: 'AiCustomerConfigUrl',
      aiDesignUrl: 'AiDesignUrl',
      appPublishUrl: 'AppPublishUrl',
      dashboardActions: 'DashboardActions',
      designUrl: 'DesignUrl',
      instanceLoginUrl: 'InstanceLoginUrl',
      renewBuyUrl: 'RenewBuyUrl',
      serverDeliveryUrl: 'ServerDeliveryUrl',
      upgradeBuyUrl: 'UpgradeBuyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressActions },
      aiCustomerConfigUrl: 'string',
      aiDesignUrl: 'string',
      appPublishUrl: 'string',
      dashboardActions: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressDashboardActions },
      designUrl: 'string',
      instanceLoginUrl: 'string',
      renewBuyUrl: 'string',
      serverDeliveryUrl: 'string',
      upgradeBuyUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.dashboardActions)) {
      $dara.Model.validateArray(this.dashboardActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBodyModuleAppServiceListGroup extends $dara.Model {
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * d75fvq3ctk
   */
  id?: string;
  /**
   * @remarks
   * The website name.
   * 
   * @example
   * mda-sb037wmidshg3w9v.mp4
   */
  name?: string;
  /**
   * @remarks
   * QrCode
   * 
   * @example
   * qrcode
   */
  qrCode?: string;
  /**
   * @remarks
   * dingtalk wx...
   * 
   * @example
   * hive
   */
  type?: string;
  /**
   * @remarks
   * The temporary access URL of the image.
   * 
   * @example
   * https://static.yipigai.cn/timuocr/tmp_57bc9cb3be1075f4e5cdae87f5cbb86abc54a694aaf10965.jpg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      qrCode: 'QrCode',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      qrCode: 'string',
      type: 'string',
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

export class GetAppInstanceForPartnerResponseBodyModuleAppServiceListNodeList extends $dara.Model {
  /**
   * @remarks
   * The child folder object.
   */
  children?: any[];
  /**
   * @remarks
   * The sequence number of the last node.
   * 
   * @example
   * FinalStepNo
   */
  finalStepNo?: number;
  /**
   * @remarks
   * The completion timestamp of the baseline instance. This value is returned when FinishStatus is FINISH (completed).
   * 
   * @example
   * 2023-01-13T07:58:12Z
   */
  finishTime?: number;
  /**
   * @remarks
   * IsContainerNode
   * 
   * @example
   * IsContainerNode
   */
  isContainerNode?: boolean;
  /**
   * @remarks
   * The ID of the OBServer node where the resource node resides.
   * 
   * @example
   * 2927b500-c4e2-4241-bacf-0a2991c4be12
   */
  nodeId?: string;
  /**
   * @remarks
   * <props="china">The name of the matrix.
   * <props="intl">This parameter is not available for public use..
   * 
   * @example
   * 单路输出
   */
  nodeName?: string;
  /**
   * @remarks
   * The running status of the node. Valid values:
   * 
   * - **UP**: The node is running.
   * - **DOWN**: The node has failed.
   * 
   * @example
   * NodeStatus
   */
  nodeStatus?: string;
  /**
   * @remarks
   * The role of the operator.
   * 
   * @example
   * OperatorRole
   */
  operatorRole?: string;
  /**
   * @remarks
   * The ID of the parent node.
   * 
   * @example
   * dpYLaezmVNRMGX56Cg4gLjrrVrMqPxX6
   */
  parentNodeId?: string;
  /**
   * @remarks
   * The sequence number of the process node.
   * 
   * @example
   * StepNo
   */
  stepNo?: number;
  static names(): { [key: string]: string } {
    return {
      children: 'Children',
      finalStepNo: 'FinalStepNo',
      finishTime: 'FinishTime',
      isContainerNode: 'IsContainerNode',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      nodeStatus: 'NodeStatus',
      operatorRole: 'OperatorRole',
      parentNodeId: 'ParentNodeId',
      stepNo: 'StepNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': 'any' },
      finalStepNo: 'number',
      finishTime: 'number',
      isContainerNode: 'boolean',
      nodeId: 'string',
      nodeName: 'string',
      nodeStatus: 'string',
      operatorRole: 'string',
      parentNodeId: 'string',
      stepNo: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressActions extends $dara.Model {
  /**
   * @remarks
   * The action key that uniquely identifies an operation.
   * 
   * @example
   * CollectedNumber
   */
  actionKey?: string;
  /**
   * @remarks
   * The display text of the action, which is shown as the action name in the interface.
   * 
   * @example
   * ActionText
   */
  actionText?: string;
  /**
   * @remarks
   * Indicates whether the action is enabled.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The URL to which the user is redirected when the action is clicked.
   * 
   * @example
   * Href
   */
  href?: string;
  static names(): { [key: string]: string } {
    return {
      actionKey: 'ActionKey',
      actionText: 'ActionText',
      enable: 'Enable',
      href: 'Href',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionKey: 'string',
      actionText: 'string',
      enable: 'boolean',
      href: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressDashboardActions extends $dara.Model {
  /**
   * @remarks
   * The action key that uniquely identifies an operation.
   * 
   * @example
   * AbortDialogue
   */
  actionKey?: string;
  /**
   * @remarks
   * The display text of the action, which is shown as the action name in the interface.
   * 
   * @example
   * ActionText
   */
  actionText?: string;
  /**
   * @remarks
   * Indicates whether the action is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The URL to which the user is redirected when the action is clicked.
   * 
   * @example
   * Href
   */
  href?: string;
  static names(): { [key: string]: string } {
    return {
      actionKey: 'ActionKey',
      actionText: 'ActionText',
      enable: 'Enable',
      href: 'Href',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionKey: 'string',
      actionText: 'string',
      enable: 'boolean',
      href: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddress extends $dara.Model {
  /**
   * @remarks
   * The list of console action buttons.
   */
  actions?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressActions[];
  /**
   * @remarks
   * The URL for customer service design.
   * 
   * @example
   * AiCustomerConfigUrl
   */
  aiCustomerConfigUrl?: string;
  /**
   * @remarks
   * The URL for AI design.
   * 
   * @example
   * AiDesignUrl
   */
  aiDesignUrl?: string;
  /**
   * @remarks
   * The URL for application publishing.
   * 
   * @example
   * AppPublishUrl
   */
  appPublishUrl?: string;
  /**
   * @remarks
   * The list of overview page action buttons.
   */
  dashboardActions?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressDashboardActions[];
  /**
   * @remarks
   * The URL for professional design.
   * 
   * @example
   * DesignUrl
   */
  designUrl?: string;
  /**
   * @remarks
   * The logon URL of the application instance.
   * 
   * @example
   * InstanceLoginUrl
   */
  instanceLoginUrl?: string;
  /**
   * @remarks
   * The URL for renewal purchase.
   * 
   * @example
   * renewBuyUrl
   */
  renewBuyUrl?: string;
  /**
   * @remarks
   * The URL for service delivery.
   * 
   * @example
   * ServerDeliveryUrl
   */
  serverDeliveryUrl?: string;
  /**
   * @remarks
   * The URL for upgrade purchase.
   * 
   * @example
   * UpgradeBuyUrl
   */
  upgradeBuyUrl?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      aiCustomerConfigUrl: 'AiCustomerConfigUrl',
      aiDesignUrl: 'AiDesignUrl',
      appPublishUrl: 'AppPublishUrl',
      dashboardActions: 'DashboardActions',
      designUrl: 'DesignUrl',
      instanceLoginUrl: 'InstanceLoginUrl',
      renewBuyUrl: 'RenewBuyUrl',
      serverDeliveryUrl: 'ServerDeliveryUrl',
      upgradeBuyUrl: 'UpgradeBuyUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressActions },
      aiCustomerConfigUrl: 'string',
      aiDesignUrl: 'string',
      appPublishUrl: 'string',
      dashboardActions: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressDashboardActions },
      designUrl: 'string',
      instanceLoginUrl: 'string',
      renewBuyUrl: 'string',
      serverDeliveryUrl: 'string',
      upgradeBuyUrl: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.actions)) {
      $dara.Model.validateArray(this.actions);
    }
    if(Array.isArray(this.dashboardActions)) {
      $dara.Model.validateArray(this.dashboardActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBodyModuleAppServiceListProfile extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WS20250801003834000003
   */
  bizId?: string;
  /**
   * @remarks
   * The design type.
   * 
   * @example
   * DesignType
   */
  designType?: string;
  /**
   * @remarks
   * The description of the design type.
   * 
   * @example
   * DesignTypeText
   */
  designTypeText?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1620711265000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * Mon Sep 25 14:48:49 CST 2023
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary key.
   * 
   * @example
   * 108232
   */
  id?: string;
  /**
   * @remarks
   * The Lingxiao instance ID.
   * 
   * @example
   * LxInstanceId
   */
  lxInstanceId?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 256146659280026
   */
  orderId?: string;
  /**
   * @remarks
   * The service specification.
   * 
   * @example
   * 8
   */
  serviceSpec?: string;
  /**
   * @remarks
   * The description of the service specification.
   * 
   * @example
   * ServiceSpecText
   */
  serviceSpecText?: string;
  upgradeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      designType: 'DesignType',
      designTypeText: 'DesignTypeText',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lxInstanceId: 'LxInstanceId',
      orderId: 'OrderId',
      serviceSpec: 'ServiceSpec',
      serviceSpecText: 'ServiceSpecText',
      upgradeStatus: 'UpgradeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      designType: 'string',
      designTypeText: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'string',
      lxInstanceId: 'string',
      orderId: 'string',
      serviceSpec: 'string',
      serviceSpecText: 'string',
      upgradeStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBodyModuleAppServiceList extends $dara.Model {
  /**
   * @remarks
   * The business ID of the application instance.
   * 
   * @example
   * WS20251211153330000001
   */
  bizId?: string;
  /**
   * @remarks
   * The deletion flag.
   * 
   * @example
   * fase
   */
  deleted?: number;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2025-07-18T02:23:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * esp bizId
   * 
   * @example
   * EspBizId
   */
  espBizId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-07-30T02:08:40Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * Tue Sep 09 10:27:49 CST 2025
   */
  gmtModified?: string;
  /**
   * @remarks
   * The application operation address.
   */
  group?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListGroup;
  /**
   * @remarks
   * The associated business ID.
   * 
   * @example
   * InstanceBizId
   */
  instanceBizId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * 19609820.png
   */
  name?: string;
  /**
   * @remarks
   * The delivery process.
   */
  nodeList?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListNodeList[];
  /**
   * @remarks
   * The unique identifier of an operation.
   */
  operationAddress?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddress;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 253790948890026
   */
  orderId?: string;
  /**
   * @remarks
   * The instance service configuration.
   */
  profile?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListProfile;
  /**
   * @remarks
   * The service type.
   * 
   * @example
   * WEBSITE_DESIGN
   */
  serviceType?: string;
  /**
   * @remarks
   * The description of the service type.
   * 
   * @example
   * ServiceTypeText
   */
  serviceTypeText?: string;
  /**
   * @remarks
   * The application identifier.
   * 
   * @example
   * Slug
   */
  slug?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1754447102000
   */
  startTime?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * UserId
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deleted: 'Deleted',
      endTime: 'EndTime',
      espBizId: 'EspBizId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      group: 'Group',
      instanceBizId: 'InstanceBizId',
      name: 'Name',
      nodeList: 'NodeList',
      operationAddress: 'OperationAddress',
      orderId: 'OrderId',
      profile: 'Profile',
      serviceType: 'ServiceType',
      serviceTypeText: 'ServiceTypeText',
      slug: 'Slug',
      startTime: 'StartTime',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deleted: 'number',
      endTime: 'string',
      espBizId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      group: GetAppInstanceForPartnerResponseBodyModuleAppServiceListGroup,
      instanceBizId: 'string',
      name: 'string',
      nodeList: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleAppServiceListNodeList },
      operationAddress: GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddress,
      orderId: 'string',
      profile: GetAppInstanceForPartnerResponseBodyModuleAppServiceListProfile,
      serviceType: 'string',
      serviceTypeText: 'string',
      slug: 'string',
      startTime: 'string',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.group && typeof (this.group as any).validate === 'function') {
      (this.group as any).validate();
    }
    if(Array.isArray(this.nodeList)) {
      $dara.Model.validateArray(this.nodeList);
    }
    if(this.operationAddress && typeof (this.operationAddress as any).validate === 'function') {
      (this.operationAddress as any).validate();
    }
    if(this.profile && typeof (this.profile as any).validate === 'function') {
      (this.profile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBodyModulePartnerDetailBindData extends $dara.Model {
  /**
   * @remarks
   * aliyun_pk
   * 
   * @example
   * ***
   */
  aliyunPk?: string;
  /**
   * @remarks
   * The external business ID.
   * 
   * @example
   * WS20250801153127000002
   */
  bizId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1672123722000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * Wed Nov 26 10:15:28 CST 2025
   */
  gmtModified?: string;
  /**
   * @remarks
   * The user to whom the ICP filing service code belongs.
   * 
   * @example
   * grantAliyunPk
   */
  grantAliyunPk?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * ***********
   */
  mobile?: string;
  /**
   * @remarks
   * parent_pk
   * 
   * @example
   * 1123213
   */
  parentPk?: string;
  /**
   * @remarks
   * The external association partner ID.
   * 
   * @example
   * 10001
   */
  partnerId?: string;
  /**
   * @remarks
   * The display name of the bound user.
   * 
   * @example
   * diaplayName
   */
  userDisplayName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'AliyunPk',
      bizId: 'BizId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      grantAliyunPk: 'GrantAliyunPk',
      mobile: 'Mobile',
      parentPk: 'ParentPk',
      partnerId: 'PartnerId',
      userDisplayName: 'UserDisplayName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'string',
      bizId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      grantAliyunPk: 'string',
      mobile: 'string',
      parentPk: 'string',
      partnerId: 'string',
      userDisplayName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBodyModulePartnerDetail extends $dara.Model {
  /**
   * @remarks
   * data
   */
  bindData?: GetAppInstanceForPartnerResponseBodyModulePartnerDetailBindData;
  /**
   * @remarks
   * The ID of the partner. This is an extended parameter.
   * 
   * @example
   * 10001
   */
  partnerId?: string;
  /**
   * @remarks
   * Valid values: unknown, init, testing, online.
   * 
   * @example
   * 200
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      bindData: 'BindData',
      partnerId: 'PartnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindData: GetAppInstanceForPartnerResponseBodyModulePartnerDetailBindData,
      partnerId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.bindData && typeof (this.bindData as any).validate === 'function') {
      (this.bindData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBodyModuleProfile extends $dara.Model {
  /**
   * @remarks
   * The admin console URL.
   * 
   * @example
   * placeHolder
   */
  adminUrl?: string;
  /**
   * @remarks
   * The application type code.
   * 
   * @example
   * PC_WebSite
   */
  applicationType?: string;
  /**
   * @remarks
   * The text description of the application type.
   * 
   * @example
   * placeHolder
   */
  applicationTypeText?: string;
  /**
   * @remarks
   * The bound CNAME record.
   * 
   * @example
   * placeHolder
   */
  bindCname?: string;
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WS20250801152128000005
   */
  bizId?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * The customer service information.
   * 
   * @example
   * placeHolder
   */
  customerService?: string;
  /**
   * @remarks
   * The deployment region.
   * 
   * @example
   * ChineseMainland
   */
  deployArea?: string;
  /**
   * @remarks
   * The domain name list.
   * 
   * @example
   * [white:],*.eduresource.cn,*.dingtalk.com,*.aliyun.com,*.aliyuncs.com,euser.edu-aliyun.com,s-gm.mmstat.com
   */
  domainList?: string;
  /**
   * @remarks
   * The editor URL.
   * 
   * @example
   * placeHolder
   */
  editorUrl?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1605280632000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2024-05-06T03:07:45Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ICP filing number.
   * 
   * @example
   * placeHolder
   */
  icpbaNo?: string;
  /**
   * @remarks
   * The image list.
   * 
   * @example
   * {\\"Image\\": []}
   */
  imageList?: string;
  /**
   * @remarks
   * The Lingxiao instance ID.
   * 
   * @example
   * placeHolder
   */
  lxInstanceId?: string;
  /**
   * @remarks
   * The order placement time.
   * 
   * @example
   * placeHolder
   */
  ordTime?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 256146659280026
   */
  orderId?: string;
  /**
   * @remarks
   * The number of orders.
   * 
   * @example
   * 1
   */
  orderNum?: number;
  /**
   * @remarks
   * The channel partner business ID.
   * 
   * @example
   * 100086
   */
  partnerId?: string;
  /**
   * @remarks
   * The payment time.
   * 
   * @example
   * placeHolder
   */
  payTime?: string;
  /**
   * @remarks
   * The preview URL.
   * 
   * @example
   * https://preview-lyj.aliyuncs.com/preview/1daacb3ebbb8435d9091fb950c528d0f?subSceneIds=682185
   */
  previewUrl?: string;
  /**
   * @remarks
   * The SEO site information.
   * 
   * @example
   * placeHolder
   */
  seoSite?: string;
  /**
   * @remarks
   * The site logo.
   * 
   * @example
   * placeHolder
   */
  siteLogo?: string;
  /**
   * @remarks
   * The site version code.
   * 
   * @example
   * Basic_Edition
   */
  siteVersion?: string;
  /**
   * @remarks
   * The text description of the site version.
   * 
   * @example
   * placeHolder
   */
  siteVersionText?: string;
  /**
   * @remarks
   * The source information.
   * 
   * @example
   * edasmsc
   */
  source?: string;
  /**
   * @remarks
   * The template ETag identifier.
   * 
   * @example
   * placeHolder
   */
  templateEtag?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 4644
   */
  templateId?: string;
  /**
   * @remarks
   * The text list.
   * 
   * @example
   * placeHolder
   */
  textList?: string;
  /**
   * @remarks
   * The thumbnail.
   * 
   * @example
   * https://aloss-recruit-aiinterview.oss-cn-beijing.aliyuncs.com/thumbnail-1753495551714-10000.png
   */
  thumbnail?: string;
  upgradeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      adminUrl: 'AdminUrl',
      applicationType: 'ApplicationType',
      applicationTypeText: 'ApplicationTypeText',
      bindCname: 'BindCname',
      bizId: 'BizId',
      commodityCode: 'CommodityCode',
      customerService: 'CustomerService',
      deployArea: 'DeployArea',
      domainList: 'DomainList',
      editorUrl: 'EditorUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      icpbaNo: 'IcpbaNo',
      imageList: 'ImageList',
      lxInstanceId: 'LxInstanceId',
      ordTime: 'OrdTime',
      orderId: 'OrderId',
      orderNum: 'OrderNum',
      partnerId: 'PartnerId',
      payTime: 'PayTime',
      previewUrl: 'PreviewUrl',
      seoSite: 'SeoSite',
      siteLogo: 'SiteLogo',
      siteVersion: 'SiteVersion',
      siteVersionText: 'SiteVersionText',
      source: 'Source',
      templateEtag: 'TemplateEtag',
      templateId: 'TemplateId',
      textList: 'TextList',
      thumbnail: 'Thumbnail',
      upgradeStatus: 'UpgradeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUrl: 'string',
      applicationType: 'string',
      applicationTypeText: 'string',
      bindCname: 'string',
      bizId: 'string',
      commodityCode: 'string',
      customerService: 'string',
      deployArea: 'string',
      domainList: 'string',
      editorUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      icpbaNo: 'string',
      imageList: 'string',
      lxInstanceId: 'string',
      ordTime: 'string',
      orderId: 'string',
      orderNum: 'number',
      partnerId: 'string',
      payTime: 'string',
      previewUrl: 'string',
      seoSite: 'string',
      siteLogo: 'string',
      siteVersion: 'string',
      siteVersionText: 'string',
      source: 'string',
      templateEtag: 'string',
      templateId: 'string',
      textList: 'string',
      thumbnail: 'string',
      upgradeStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceListProfile extends $dara.Model {
  /**
   * @remarks
   * The admin console URL.
   * 
   * @example
   * placeHolder
   */
  adminUrl?: string;
  /**
   * @remarks
   * The application type code.
   * 
   * @example
   * PC_WebSite
   */
  applicationType?: string;
  /**
   * @remarks
   * The text description of the application type.
   * 
   * @example
   * placeHolder
   */
  applicationTypeText?: string;
  /**
   * @remarks
   * The bound CNAME record.
   * 
   * @example
   * placeHolder
   */
  bindCname?: string;
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WS20250801153127000002
   */
  bizId?: string;
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * sas
   */
  commodityCode?: string;
  /**
   * @remarks
   * The customer service information.
   * 
   * @example
   * placeHolder
   */
  customerService?: string;
  /**
   * @remarks
   * The deployment region.
   * 
   * @example
   * ChineseMainland
   */
  deployArea?: string;
  /**
   * @remarks
   * The domain name list.
   * 
   * @example
   * [\\"activity.syruijia.top\\", \\"admin.syruijia.top\\", \\"api.syruijia.top\\", \\"game-admin.syruijia.top\\", \\"h5game.syruijia.top\\", \\"home.syruijia.top\\", \\"invite.syruijia.top\\"]
   */
  domainList?: string;
  /**
   * @remarks
   * The editor URL.
   * 
   * @example
   * placeHolder
   */
  editorUrl?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1621734214000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * Thu Oct 24 09:12:31 CST 2024
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ICP filing number.
   * 
   * @example
   * placeHolder
   */
  icpbaNo?: string;
  /**
   * @remarks
   * The image list.
   * 
   * @example
   * {\\"Image\\": []}
   */
  imageList?: string;
  /**
   * @remarks
   * The Lingxiao instance ID.
   * 
   * @example
   * placeHolder
   */
  lxInstanceId?: string;
  /**
   * @remarks
   * The order placement time.
   * 
   * @example
   * placeHolder
   */
  ordTime?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 248808934190692
   */
  orderId?: string;
  /**
   * @remarks
   * The number of orders.
   * 
   * @example
   * 1
   */
  orderNum?: number;
  /**
   * @remarks
   * The channel partner business ID.
   * 
   * @example
   * 100086
   */
  partnerId?: string;
  /**
   * @remarks
   * The payment time.
   * 
   * @example
   * placeHolder
   */
  payTime?: string;
  /**
   * @remarks
   * The preview URL.
   * 
   * @example
   * https://preview-lyj.aliyuncs.com/preview/temp/9fb36fc05d0a48cdb92d7397336c214f?subSceneIds=734285&type=interim
   */
  previewUrl?: string;
  /**
   * @remarks
   * The SEO site information.
   * 
   * @example
   * placeHolder
   */
  seoSite?: string;
  /**
   * @remarks
   * The site logo.
   * 
   * @example
   * placeHolder
   */
  siteLogo?: string;
  /**
   * @remarks
   * The site version code.
   * 
   * @example
   * Trial_Edition
   */
  siteVersion?: string;
  /**
   * @remarks
   * The text description of the site version.
   * 
   * @example
   * placeHolder
   */
  siteVersionText?: string;
  /**
   * @remarks
   * The source information.
   * 
   * @example
   * 10.71.130.205
   */
  source?: string;
  /**
   * @remarks
   * The template ETag identifier.
   * 
   * @example
   * placeHolder
   */
  templateEtag?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 4644
   */
  templateId?: string;
  /**
   * @remarks
   * The text list.
   * 
   * @example
   * placeHolder
   */
  textList?: string;
  /**
   * @remarks
   * The thumbnail.
   * 
   * @example
   * https://aloss-recruit-aiinterview.oss-cn-beijing.aliyuncs.com/thumbnail-1766456326256-0.png
   */
  thumbnail?: string;
  upgradeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      adminUrl: 'AdminUrl',
      applicationType: 'ApplicationType',
      applicationTypeText: 'ApplicationTypeText',
      bindCname: 'BindCname',
      bizId: 'BizId',
      commodityCode: 'CommodityCode',
      customerService: 'CustomerService',
      deployArea: 'DeployArea',
      domainList: 'DomainList',
      editorUrl: 'EditorUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      icpbaNo: 'IcpbaNo',
      imageList: 'ImageList',
      lxInstanceId: 'LxInstanceId',
      ordTime: 'OrdTime',
      orderId: 'OrderId',
      orderNum: 'OrderNum',
      partnerId: 'PartnerId',
      payTime: 'PayTime',
      previewUrl: 'PreviewUrl',
      seoSite: 'SeoSite',
      siteLogo: 'SiteLogo',
      siteVersion: 'SiteVersion',
      siteVersionText: 'SiteVersionText',
      source: 'Source',
      templateEtag: 'TemplateEtag',
      templateId: 'TemplateId',
      textList: 'TextList',
      thumbnail: 'Thumbnail',
      upgradeStatus: 'UpgradeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUrl: 'string',
      applicationType: 'string',
      applicationTypeText: 'string',
      bindCname: 'string',
      bizId: 'string',
      commodityCode: 'string',
      customerService: 'string',
      deployArea: 'string',
      domainList: 'string',
      editorUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      icpbaNo: 'string',
      imageList: 'string',
      lxInstanceId: 'string',
      ordTime: 'string',
      orderId: 'string',
      orderNum: 'number',
      partnerId: 'string',
      payTime: 'string',
      previewUrl: 'string',
      seoSite: 'string',
      siteLogo: 'string',
      siteVersion: 'string',
      siteVersionText: 'string',
      source: 'string',
      templateEtag: 'string',
      templateId: 'string',
      textList: 'string',
      thumbnail: 'string',
      upgradeStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceList extends $dara.Model {
  /**
   * @remarks
   * The application subtype.
   * 
   * @example
   * placeHolder
   */
  appSubType?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * 1
   */
  appType?: string;
  /**
   * @remarks
   * The business ID of the application instance.
   * 
   * @example
   * WS20250929173805000001
   */
  bizId?: string;
  /**
   * @remarks
   * The build type.
   * 
   * @example
   * placeHolder
   */
  buildType?: string;
  /**
   * @remarks
   * Indicates whether the instance is deleted.
   * 
   * @example
   * fase
   */
  deleted?: number;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * base
   */
  description?: string;
  /**
   * @remarks
   * placeHolder
   * 
   * @example
   * placeHolder
   */
  designSpecBizId?: string;
  /**
   * @remarks
   * The ID of the design specification.
   * 
   * @example
   * placeHolder
   */
  designSpecId?: string;
  /**
   * @remarks
   * The primary domain name.
   * 
   * @example
   * shikuntech.com
   */
  domain?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2025-05-23T15:01:25.891Z
   */
  endTime?: string;
  /**
   * @remarks
   * The environment.
   * 
   * @example
   * pre
   */
  env?: string;
  /**
   * @remarks
   * The associated delivery order ID.
   * 
   * @example
   * placeHolder
   */
  espBizId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-06-19T07:39:55Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The deletion time.
   * 
   * @example
   * placeHolder
   */
  gmtDelete?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-01-14T09:09:57Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The publish time.
   * 
   * @example
   * placeHolder
   */
  gmtPublish?: string;
  /**
   * @remarks
   * The application icon URL.
   * 
   * @example
   * https://app-center-icon-prod-shanghai.oss-cn-shanghai.aliyuncs.com/tenant/1617863868712071/1749090558651_%E9%AB%98%E5%BE%B7.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * 19609820.png
   */
  name?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 264987642530867,264988827010867,264982589530867,264985058640867,264982290930867,264982387520867,264987147460867,264985752990867,264988432850867
   */
  orderId?: string;
  /**
   * @remarks
   * The instance configuration.
   */
  profile?: GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceListProfile;
  /**
   * @remarks
   * The website domain name.
   * 
   * @example
   * placeHolder
   */
  siteHost?: string;
  /**
   * @remarks
   * The application identifier.
   * 
   * @example
   * placeHolder
   */
  slug?: string;
  /**
   * @remarks
   * The source. Example: MARKET_CLOUD_DREAM.
   * 
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2025-07-22T02:23:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The task status text.
   * 
   * @example
   * SUCCESS
   */
  statusText?: string;
  /**
   * @remarks
   * The application thumbnail URL.
   * 
   * @example
   * placeHolder
   */
  thumbnailUrl?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * placeHolder
   */
  userId?: string;
  /**
   * @remarks
   * The application instance version.
   * 
   * @example
   * 2019-04-02
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      appSubType: 'AppSubType',
      appType: 'AppType',
      bizId: 'BizId',
      buildType: 'BuildType',
      deleted: 'Deleted',
      description: 'Description',
      designSpecBizId: 'DesignSpecBizId',
      designSpecId: 'DesignSpecId',
      domain: 'Domain',
      endTime: 'EndTime',
      env: 'Env',
      espBizId: 'EspBizId',
      gmtCreate: 'GmtCreate',
      gmtDelete: 'GmtDelete',
      gmtModified: 'GmtModified',
      gmtPublish: 'GmtPublish',
      iconUrl: 'IconUrl',
      name: 'Name',
      orderId: 'OrderId',
      profile: 'Profile',
      siteHost: 'SiteHost',
      slug: 'Slug',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      statusText: 'StatusText',
      thumbnailUrl: 'ThumbnailUrl',
      userId: 'UserId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appSubType: 'string',
      appType: 'string',
      bizId: 'string',
      buildType: 'string',
      deleted: 'number',
      description: 'string',
      designSpecBizId: 'string',
      designSpecId: 'string',
      domain: 'string',
      endTime: 'string',
      env: 'string',
      espBizId: 'string',
      gmtCreate: 'string',
      gmtDelete: 'string',
      gmtModified: 'string',
      gmtPublish: 'string',
      iconUrl: 'string',
      name: 'string',
      orderId: 'string',
      profile: GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceListProfile,
      siteHost: 'string',
      slug: 'string',
      sourceType: 'string',
      startTime: 'string',
      status: 'string',
      statusText: 'string',
      thumbnailUrl: 'string',
      userId: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.profile && typeof (this.profile as any).validate === 'function') {
      (this.profile as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The list of AI staff members associated with the application.
   */
  aiStaffList?: GetAppInstanceForPartnerResponseBodyModuleAiStaffList[];
  /**
   * @remarks
   * The design specification associated with the application.
   */
  appDesignSpec?: GetAppInstanceForPartnerResponseBodyModuleAppDesignSpec;
  /**
   * @remarks
   * The application operation address.
   */
  appOperationAddress?: GetAppInstanceForPartnerResponseBodyModuleAppOperationAddress;
  /**
   * @remarks
   * The list of service instances associated with the application.
   */
  appServiceList?: GetAppInstanceForPartnerResponseBodyModuleAppServiceList[];
  /**
   * @remarks
   * The application subtype.
   * 
   * @example
   * placeHolder
   */
  appSubType?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * TRACE
   */
  appType?: string;
  /**
   * @remarks
   * The business ID of the application instance.
   * 
   * @example
   * WS20250915163734000001
   */
  bizId?: string;
  /**
   * @remarks
   * The build type.
   * 
   * @example
   * placeHolder
   */
  buildType?: string;
  /**
   * @remarks
   * Indicates whether the instance is deleted.
   * 
   * @example
   * fase
   */
  deleted?: number;
  /**
   * @remarks
   * The application description.
   * 
   * @example
   * /bak->serverless.handler(2020091300200279)
   */
  description?: string;
  /**
   * @remarks
   * placeHolder
   * 
   * @example
   * placeHolder
   */
  designSpecBizId?: string;
  /**
   * @remarks
   * The ID of the design specification.
   * 
   * @example
   * placeHolder
   */
  designSpecId?: string;
  /**
   * @remarks
   * The primary domain name.
   * 
   * @example
   * stxycw.com
   */
  domain?: string;
  /**
   * @remarks
   * The end time.
   * 
   * @example
   * 2026-01-05T15:59:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The environment.
   * 
   * @example
   * pre
   */
  env?: string;
  /**
   * @remarks
   * The associated delivery order ID.
   * 
   * @example
   * placeHolder
   */
  espBizId?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1740479834
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The deletion time.
   * 
   * @example
   * placeHolder
   */
  gmtDelete?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The publish time.
   * 
   * @example
   * placeHolder
   */
  gmtPublish?: string;
  /**
   * @remarks
   * The application icon URL.
   * 
   * @example
   * https://yzm.zshud.com:34901/cloud-phone/养生_1763631730804.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * 文件名
   */
  name?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 250822465990301
   */
  orderId?: string;
  /**
   * @remarks
   * The partner details.
   */
  partnerDetail?: GetAppInstanceForPartnerResponseBodyModulePartnerDetail;
  /**
   * @remarks
   * The instance configuration.
   */
  profile?: GetAppInstanceForPartnerResponseBodyModuleProfile;
  /**
   * @remarks
   * The list of instances associated with the application.
   */
  relatedInstanceList?: GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceList[];
  /**
   * @remarks
   * The website domain name.
   * 
   * @example
   * abcd.scd.wanwang.xin
   */
  siteHost?: string;
  /**
   * @remarks
   * The application identifier.
   * 
   * @example
   * placeHolder
   */
  slug?: string;
  /**
   * @remarks
   * The source. Example: MARKET_CLOUD_DREAM.
   * 
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 2023-03-24T10:10Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The task status text.
   * 
   * @example
   * FILE_DOWNLOAD_FAILED
   */
  statusText?: string;
  /**
   * @remarks
   * The application thumbnail URL.
   * 
   * @example
   * placeHolder
   */
  thumbnailUrl?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * placeHolder
   */
  userId?: string;
  /**
   * @remarks
   * The application instance version.
   * 
   * @example
   * 2019-04-02
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      aiStaffList: 'AiStaffList',
      appDesignSpec: 'AppDesignSpec',
      appOperationAddress: 'AppOperationAddress',
      appServiceList: 'AppServiceList',
      appSubType: 'AppSubType',
      appType: 'AppType',
      bizId: 'BizId',
      buildType: 'BuildType',
      deleted: 'Deleted',
      description: 'Description',
      designSpecBizId: 'DesignSpecBizId',
      designSpecId: 'DesignSpecId',
      domain: 'Domain',
      endTime: 'EndTime',
      env: 'Env',
      espBizId: 'EspBizId',
      gmtCreate: 'GmtCreate',
      gmtDelete: 'GmtDelete',
      gmtModified: 'GmtModified',
      gmtPublish: 'GmtPublish',
      iconUrl: 'IconUrl',
      name: 'Name',
      orderId: 'OrderId',
      partnerDetail: 'PartnerDetail',
      profile: 'Profile',
      relatedInstanceList: 'RelatedInstanceList',
      siteHost: 'SiteHost',
      slug: 'Slug',
      sourceType: 'SourceType',
      startTime: 'StartTime',
      status: 'Status',
      statusText: 'StatusText',
      thumbnailUrl: 'ThumbnailUrl',
      userId: 'UserId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiStaffList: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleAiStaffList },
      appDesignSpec: GetAppInstanceForPartnerResponseBodyModuleAppDesignSpec,
      appOperationAddress: GetAppInstanceForPartnerResponseBodyModuleAppOperationAddress,
      appServiceList: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleAppServiceList },
      appSubType: 'string',
      appType: 'string',
      bizId: 'string',
      buildType: 'string',
      deleted: 'number',
      description: 'string',
      designSpecBizId: 'string',
      designSpecId: 'string',
      domain: 'string',
      endTime: 'string',
      env: 'string',
      espBizId: 'string',
      gmtCreate: 'string',
      gmtDelete: 'string',
      gmtModified: 'string',
      gmtPublish: 'string',
      iconUrl: 'string',
      name: 'string',
      orderId: 'string',
      partnerDetail: GetAppInstanceForPartnerResponseBodyModulePartnerDetail,
      profile: GetAppInstanceForPartnerResponseBodyModuleProfile,
      relatedInstanceList: { 'type': 'array', 'itemType': GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceList },
      siteHost: 'string',
      slug: 'string',
      sourceType: 'string',
      startTime: 'string',
      status: 'string',
      statusText: 'string',
      thumbnailUrl: 'string',
      userId: 'string',
      version: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aiStaffList)) {
      $dara.Model.validateArray(this.aiStaffList);
    }
    if(this.appDesignSpec && typeof (this.appDesignSpec as any).validate === 'function') {
      (this.appDesignSpec as any).validate();
    }
    if(this.appOperationAddress && typeof (this.appOperationAddress as any).validate === 'function') {
      (this.appOperationAddress as any).validate();
    }
    if(Array.isArray(this.appServiceList)) {
      $dara.Model.validateArray(this.appServiceList);
    }
    if(this.partnerDetail && typeof (this.partnerDetail as any).validate === 'function') {
      (this.partnerDetail as any).validate();
    }
    if(this.profile && typeof (this.profile as any).validate === 'function') {
      (this.profile as any).validate();
    }
    if(Array.isArray(this.relatedInstanceList)) {
      $dara.Model.validateArray(this.relatedInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAppInstanceForPartnerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed reason why access was denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retry is allowed.
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * dewuApp
   */
  appName?: string;
  /**
   * @remarks
   * The dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * The dynamic error message, which is used to replace the `%s` in the **ErrMessage** response parameter.
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, the value of the **DtsJobId** request parameter is invalid.
   * 
   * @example
   * https://check-result-file-sh.oss-cn-shanghai.aliyuncs.com/gl3d6l3817id8p1/gl3d6l3817id8p1.diff.zip?Expires=1750392068&OSSAccessKeyId=LTAI5tKUErVCETM4ev9SELNb&Signature=Bcj3eohy8nmlSQ7AAGdq7JZoLjM%3D
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * The error parameters.
   */
  errorArgs?: any[];
  /**
   * @remarks
   * The response data.
   */
  module?: GetAppInstanceForPartnerResponseBodyModule;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6C6B99AC-39EC-5350-874C-204128C905E6
   */
  requestId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * The exception message.
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * True
   */
  synchro?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      allowRetry: 'AllowRetry',
      appName: 'AppName',
      dynamicCode: 'DynamicCode',
      dynamicMessage: 'DynamicMessage',
      errorArgs: 'ErrorArgs',
      module: 'Module',
      requestId: 'RequestId',
      rootErrorCode: 'RootErrorCode',
      rootErrorMsg: 'RootErrorMsg',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      allowRetry: 'boolean',
      appName: 'string',
      dynamicCode: 'string',
      dynamicMessage: 'string',
      errorArgs: { 'type': 'array', 'itemType': 'any' },
      module: GetAppInstanceForPartnerResponseBodyModule,
      requestId: 'string',
      rootErrorCode: 'string',
      rootErrorMsg: 'string',
      synchro: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.errorArgs)) {
      $dara.Model.validateArray(this.errorArgs);
    }
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

