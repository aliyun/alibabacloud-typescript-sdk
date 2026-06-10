// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInstanceForPartnerResponseBodyModuleAiStaffList extends $dara.Model {
  /**
   * @remarks
   * Staff ID
   * 
   * @example
   * 370196
   */
  staffId?: string;
  /**
   * @remarks
   * Staff Name
   * 
   * @example
   * StaffName
   */
  staffName?: string;
  /**
   * @remarks
   * Staff Type
   * 
   * @example
   * StaffType
   */
  staffType?: string;
  /**
   * @remarks
   * Staff Status
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
   * Customer Business ID
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
   * Specifies the color. Valid values: - **black**: black - **white**: white - **red**: red - **blue**: blue
   * 
   * @example
   * style
   */
  colorStyle?: string;
  /**
   * @remarks
   * Company Name
   * 
   * @example
   * bvt_test
   */
  companyName?: string;
  /**
   * @remarks
   * deployment region
   * 
   * @example
   * HongKong
   */
  deployArea?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2022-12-21T08:27:03Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * Wed Sep 10 09:53:35 CST 2025
   */
  gmtModified?: string;
  /**
   * @remarks
   * primary key
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
   * Application Type. Web & H5: web, miniapp: miniapp, iOS: ios, Android: android.
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
   * Operation key value, used as a UUID for an operation behavior.
   * 
   * @example
   * BeginDialogue
   */
  actionKey?: string;
  /**
   * @remarks
   * Action display text, used to show the action name in the interface
   * 
   * @example
   * placeHolder
   */
  actionText?: string;
  /**
   * @remarks
   * Enable status, indicating whether the operation is active.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * Link address, the URL to which the user is redirected when clicking the action
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
   * Operation key used to uniquely identify an operation behavior.
   * 
   * @example
   * CollectedNumber
   */
  actionKey?: string;
  /**
   * @remarks
   * Action display text used to show the action name in the interface
   * 
   * @example
   * placeHolder
   */
  actionText?: string;
  /**
   * @remarks
   * Enable status indicating whether the action is active
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Link URL to which the user is redirected when clicking the action
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
   * List of console operation buttons
   */
  actions?: GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressActions[];
  /**
   * @remarks
   * Customer service design URL
   * 
   * @example
   * placeHolder
   */
  aiCustomerConfigUrl?: string;
  /**
   * @remarks
   * AI Design URL
   * 
   * @example
   * placeHolder
   */
  aiDesignUrl?: string;
  /**
   * @remarks
   * Application publish URL
   * 
   * @example
   * placeHolder
   */
  appPublishUrl?: string;
  /**
   * @remarks
   * List of action buttons on the overview page
   */
  dashboardActions?: GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressDashboardActions[];
  /**
   * @remarks
   * Professional design URL
   * 
   * @example
   * placeHolder
   */
  designUrl?: string;
  /**
   * @remarks
   * Application instance logon URL
   * 
   * @example
   * placeHolder
   */
  instanceLoginUrl?: string;
  /**
   * @remarks
   * Renewal and purchase URL
   * 
   * @example
   * placeHolder
   */
  renewBuyUrl?: string;
  /**
   * @remarks
   * Service delivery URL
   * 
   * @example
   * placeHolder
   */
  serverDeliveryUrl?: string;
  /**
   * @remarks
   * Upgrade purchase URL
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
   * primary key
   * 
   * @example
   * d75fvq3ctk
   */
  id?: string;
  /**
   * @remarks
   * Website Name
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
   * Temporary access URL for image
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
   * Child folder object
   */
  children?: any[];
  /**
   * @remarks
   * The ordinal number of the last node.
   * 
   * @example
   * FinalStepNo
   */
  finalStepNo?: number;
  /**
   * @remarks
   * When FinishStatus (baseline instance completion status) is FINISH (completed), the UNIX timestamp of the baseline instance completion time is returned.
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
   * The ID of the OBServer edge zone where the resource node resides.
   * 
   * @example
   * 2927b500-c4e2-4241-bacf-0a2991c4be12
   */
  nodeId?: string;
  /**
   * @remarks
   * <props="china">The name of the matrix.
   * <props="intl">This parameter is not publicly available.
   * 
   * @example
   * 单路输出
   */
  nodeName?: string;
  /**
   * @remarks
   * Node running status. Valid values:
   * 
   * - **UP**: The node is running.
   * - **DOWN**: The node is faulty.
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
   * Parent node ID
   * 
   * @example
   * dpYLaezmVNRMGX56Cg4gLjrrVrMqPxX6
   */
  parentNodeId?: string;
  /**
   * @remarks
   * Ordinal number of the flow node
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
   * Action key, used as a UUID for an action behavior.
   * 
   * @example
   * CollectedNumber
   */
  actionKey?: string;
  /**
   * @remarks
   * Display text for the action, used to show the action name in the interface.
   * 
   * @example
   * ActionText
   */
  actionText?: string;
  /**
   * @remarks
   * Enable status, indicating whether the action is active.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * Link address, the URL to which the user is redirected when clicking the action.
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
   * Operation key used as a UUID for an operation behavior
   * 
   * @example
   * AbortDialogue
   */
  actionKey?: string;
  /**
   * @remarks
   * The display text of the action, used to show the action name in the interface.
   * 
   * @example
   * ActionText
   */
  actionText?: string;
  /**
   * @remarks
   * The enable status, indicating whether the action is active.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The URL address to which the hyperlink redirects when the action is clicked.
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
   * List of console operation buttons
   */
  actions?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressActions[];
  /**
   * @remarks
   * AI customer service design URL
   * 
   * @example
   * AiCustomerConfigUrl
   */
  aiCustomerConfigUrl?: string;
  /**
   * @remarks
   * AI design URL
   * 
   * @example
   * AiDesignUrl
   */
  aiDesignUrl?: string;
  /**
   * @remarks
   * Application publish URL
   * 
   * @example
   * AppPublishUrl
   */
  appPublishUrl?: string;
  /**
   * @remarks
   * List of overview page operation buttons
   */
  dashboardActions?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressDashboardActions[];
  /**
   * @remarks
   * Professional design URL
   * 
   * @example
   * DesignUrl
   */
  designUrl?: string;
  /**
   * @remarks
   * Application instance logon URL
   * 
   * @example
   * InstanceLoginUrl
   */
  instanceLoginUrl?: string;
  /**
   * @remarks
   * Renewal and purchase URL
   * 
   * @example
   * renewBuyUrl
   */
  renewBuyUrl?: string;
  /**
   * @remarks
   * Service delivery URL
   * 
   * @example
   * ServerDeliveryUrl
   */
  serverDeliveryUrl?: string;
  /**
   * @remarks
   * Upgrade purchase URL
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
   * Business ID
   * 
   * @example
   * WS20250801003834000003
   */
  bizId?: string;
  /**
   * @remarks
   * Design Type
   * 
   * @example
   * DesignType
   */
  designType?: string;
  /**
   * @remarks
   * Design type description
   * 
   * @example
   * DesignTypeText
   */
  designTypeText?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 1620711265000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * Mon Sep 25 14:48:49 CST 2023
   */
  gmtModified?: string;
  /**
   * @remarks
   * primary key
   * 
   * @example
   * 108232
   */
  id?: string;
  /**
   * @remarks
   * Lingxiao instance ID
   * 
   * @example
   * LxInstanceId
   */
  lxInstanceId?: string;
  /**
   * @remarks
   * order ID
   * 
   * @example
   * 256146659280026
   */
  orderId?: string;
  /**
   * @remarks
   * Service Specification
   * 
   * @example
   * 8
   */
  serviceSpec?: string;
  /**
   * @remarks
   * Service specification description
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
   * Application instance business ID
   * 
   * @example
   * WS20251211153330000001
   */
  bizId?: string;
  /**
   * @remarks
   * Deletion flag
   * 
   * @example
   * fase
   */
  deleted?: number;
  /**
   * @remarks
   * End time
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
   * Creation Time
   * 
   * @example
   * 2025-07-30T02:08:40Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * Tue Sep 09 10:27:49 CST 2025
   */
  gmtModified?: string;
  /**
   * @remarks
   * Application operation address
   */
  group?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListGroup;
  /**
   * @remarks
   * Associated business ID
   * 
   * @example
   * InstanceBizId
   */
  instanceBizId?: string;
  /**
   * @remarks
   * Service name
   * 
   * @example
   * 19609820.png
   */
  name?: string;
  /**
   * @remarks
   * Delivery flow
   */
  nodeList?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListNodeList[];
  /**
   * @remarks
   * Used to uniquely identify an operation behavior
   */
  operationAddress?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddress;
  /**
   * @remarks
   * Order ID
   * 
   * @example
   * 253790948890026
   */
  orderId?: string;
  /**
   * @remarks
   * Instance service configuration
   */
  profile?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListProfile;
  /**
   * @remarks
   * Service Type
   * 
   * @example
   * WEBSITE_DESIGN
   */
  serviceType?: string;
  /**
   * @remarks
   * Service Type Description
   * 
   * @example
   * ServiceTypeText
   */
  serviceTypeText?: string;
  /**
   * @remarks
   * Application identity
   * 
   * @example
   * Slug
   */
  slug?: string;
  /**
   * @remarks
   * Start Time
   * 
   * @example
   * 1754447102000
   */
  startTime?: string;
  /**
   * @remarks
   * Status
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * User ID
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
   * External bizId
   * 
   * @example
   * WS20250801153127000002
   */
  bizId?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 1672123722000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * Wed Nov 26 10:15:28 CST 2025
   */
  gmtModified?: string;
  /**
   * @remarks
   * User who owns the ICP filing service code
   * 
   * @example
   * grantAliyunPk
   */
  grantAliyunPk?: string;
  /**
   * @remarks
   * Phone number
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
   * Externally associated partnerId
   * 
   * @example
   * 10001
   */
  partnerId?: string;
  /**
   * @remarks
   * Display name of the attached user
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
   * Partner ID, extension parameter
   * 
   * @example
   * 10001
   */
  partnerId?: string;
  /**
   * @remarks
   * Possible values: unknown, init, testing, online
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
   * Management console URL
   * 
   * @example
   * placeHolder
   */
  adminUrl?: string;
  /**
   * @remarks
   * Application type code
   * 
   * @example
   * PC_WebSite
   */
  applicationType?: string;
  /**
   * @remarks
   * Application type text description
   * 
   * @example
   * placeHolder
   */
  applicationTypeText?: string;
  /**
   * @remarks
   * Attached CNAME record
   * 
   * @example
   * placeHolder
   */
  bindCname?: string;
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WS20250801152128000005
   */
  bizId?: string;
  /**
   * @remarks
   * Product encoding
   * 
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @remarks
   * Customer Service Information
   * 
   * @example
   * placeHolder
   */
  customerService?: string;
  /**
   * @remarks
   * Deployment area
   * 
   * @example
   * ChineseMainland
   */
  deployArea?: string;
  /**
   * @remarks
   * Domain name list
   * 
   * @example
   * [white:],*.eduresource.cn,*.dingtalk.com,*.aliyun.com,*.aliyuncs.com,euser.edu-aliyun.com,s-gm.mmstat.com
   */
  domainList?: string;
  /**
   * @remarks
   * Editor URL
   * 
   * @example
   * placeHolder
   */
  editorUrl?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1605280632000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * 2024-05-06T03:07:45Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * ICP number
   * 
   * @example
   * placeHolder
   */
  icpbaNo?: string;
  /**
   * @remarks
   * Image list
   * 
   * @example
   * {\\"Image\\": []}
   */
  imageList?: string;
  /**
   * @remarks
   * Lenovo instance ID
   * 
   * @example
   * placeHolder
   */
  lxInstanceId?: string;
  /**
   * @remarks
   * Order time
   * 
   * @example
   * placeHolder
   */
  ordTime?: string;
  /**
   * @remarks
   * Order ID
   * 
   * @example
   * 256146659280026
   */
  orderId?: string;
  /**
   * @remarks
   * Order quantity
   * 
   * @example
   * 1
   */
  orderNum?: number;
  /**
   * @remarks
   * Channel partner business ID
   * 
   * @example
   * 100086
   */
  partnerId?: string;
  /**
   * @remarks
   * Payment time
   * 
   * @example
   * placeHolder
   */
  payTime?: string;
  /**
   * @remarks
   * Preview URL
   * 
   * @example
   * https://preview-lyj.aliyuncs.com/preview/1daacb3ebbb8435d9091fb950c528d0f?subSceneIds=682185
   */
  previewUrl?: string;
  /**
   * @remarks
   * SEO site information
   * 
   * @example
   * placeHolder
   */
  seoSite?: string;
  /**
   * @remarks
   * Site logo
   * 
   * @example
   * placeHolder
   */
  siteLogo?: string;
  /**
   * @remarks
   * Site version encoding
   * 
   * @example
   * Basic_Edition
   */
  siteVersion?: string;
  /**
   * @remarks
   * Site version text description
   * 
   * @example
   * placeHolder
   */
  siteVersionText?: string;
  /**
   * @remarks
   * Source information
   * 
   * @example
   * edasmsc
   */
  source?: string;
  /**
   * @remarks
   * Template ETag identity
   * 
   * @example
   * placeHolder
   */
  templateEtag?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 4644
   */
  templateId?: string;
  /**
   * @remarks
   * Text list
   * 
   * @example
   * placeHolder
   */
  textList?: string;
  /**
   * @remarks
   * Thumbnail
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
   * Management Console URL
   * 
   * @example
   * placeHolder
   */
  adminUrl?: string;
  /**
   * @remarks
   * Application Type Code
   * 
   * @example
   * PC_WebSite
   */
  applicationType?: string;
  /**
   * @remarks
   * Application type text description
   * 
   * @example
   * placeHolder
   */
  applicationTypeText?: string;
  /**
   * @remarks
   * Attached CNAME record
   * 
   * @example
   * placeHolder
   */
  bindCname?: string;
  /**
   * @remarks
   * Business ID
   * 
   * @example
   * WS20250801153127000002
   */
  bizId?: string;
  /**
   * @remarks
   * Product encoding
   * 
   * @example
   * sas
   */
  commodityCode?: string;
  /**
   * @remarks
   * [responses_200_schema_properties_Module_properties_RelatedInstanceList_items_properties_CustomerService_description]Customer service information
   * 
   * @example
   * placeHolder
   */
  customerService?: string;
  /**
   * @remarks
   * Deployment area
   * 
   * @example
   * ChineseMainland
   */
  deployArea?: string;
  /**
   * @remarks
   * Domain Name List
   * 
   * @example
   * [\\"activity.syruijia.top\\", \\"admin.syruijia.top\\", \\"api.syruijia.top\\", \\"game-admin.syruijia.top\\", \\"h5game.syruijia.top\\", \\"home.syruijia.top\\", \\"invite.syruijia.top\\"]
   */
  domainList?: string;
  /**
   * @remarks
   * Editor URL
   * 
   * @example
   * placeHolder
   */
  editorUrl?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 1621734214000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * Thu Oct 24 09:12:31 CST 2024
   */
  gmtModified?: string;
  /**
   * @remarks
   * ICP number
   * 
   * @example
   * placeHolder
   */
  icpbaNo?: string;
  /**
   * @remarks
   * Image list
   * 
   * @example
   * {\\"Image\\": []}
   */
  imageList?: string;
  /**
   * @remarks
   * Lenovo instance ID
   * 
   * @example
   * placeHolder
   */
  lxInstanceId?: string;
  /**
   * @remarks
   * Order Time
   * 
   * @example
   * placeHolder
   */
  ordTime?: string;
  /**
   * @remarks
   * Order ID
   * 
   * @example
   * 248808934190692
   */
  orderId?: string;
  /**
   * @remarks
   * Order Quantity
   * 
   * @example
   * 1
   */
  orderNum?: number;
  /**
   * @remarks
   * Channel Partner Business ID
   * 
   * @example
   * 100086
   */
  partnerId?: string;
  /**
   * @remarks
   * Payment time
   * 
   * @example
   * placeHolder
   */
  payTime?: string;
  /**
   * @remarks
   * Preview URL
   * 
   * @example
   * https://preview-lyj.aliyuncs.com/preview/temp/9fb36fc05d0a48cdb92d7397336c214f?subSceneIds=734285&type=interim
   */
  previewUrl?: string;
  /**
   * @remarks
   * SEO site information
   * 
   * @example
   * placeHolder
   */
  seoSite?: string;
  /**
   * @remarks
   * Site logo
   * 
   * @example
   * placeHolder
   */
  siteLogo?: string;
  /**
   * @remarks
   * Site version encoding
   * 
   * @example
   * Trial_Edition
   */
  siteVersion?: string;
  /**
   * @remarks
   * Site Version Text Description
   * 
   * @example
   * placeHolder
   */
  siteVersionText?: string;
  /**
   * @remarks
   * Source Information
   * 
   * @example
   * 10.71.130.205
   */
  source?: string;
  /**
   * @remarks
   * Template ETag identity
   * 
   * @example
   * placeHolder
   */
  templateEtag?: string;
  /**
   * @remarks
   * Template ID
   * 
   * @example
   * 4644
   */
  templateId?: string;
  /**
   * @remarks
   * Text List
   * 
   * @example
   * placeHolder
   */
  textList?: string;
  /**
   * @remarks
   * Thumbnail
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
   * application sub-type
   * 
   * @example
   * placeHolder
   */
  appSubType?: string;
  /**
   * @remarks
   * application Type
   * 
   * @example
   * 1
   */
  appType?: string;
  /**
   * @remarks
   * application instance business ID
   * 
   * @example
   * WS20250929173805000001
   */
  bizId?: string;
  /**
   * @remarks
   * Build Type
   * 
   * @example
   * placeHolder
   */
  buildType?: string;
  /**
   * @remarks
   * Is Deleted
   * 
   * @example
   * fase
   */
  deleted?: number;
  /**
   * @remarks
   * Application description
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
   * Design configuration ID
   * 
   * @example
   * placeHolder
   */
  designSpecId?: string;
  /**
   * @remarks
   * primary domain name
   * 
   * @example
   * shikuntech.com
   */
  domain?: string;
  /**
   * @remarks
   * End time
   * 
   * @example
   * 2025-05-23T15:01:25.891Z
   */
  endTime?: string;
  /**
   * @remarks
   * Environment
   * 
   * @example
   * pre
   */
  env?: string;
  /**
   * @remarks
   * Associated Delivery Order ID
   * 
   * @example
   * placeHolder
   */
  espBizId?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2025-06-19T07:39:55Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Deletion time
   * 
   * @example
   * placeHolder
   */
  gmtDelete?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * 2025-01-14T09:09:57Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Published At
   * 
   * @example
   * placeHolder
   */
  gmtPublish?: string;
  /**
   * @remarks
   * application icon
   * 
   * @example
   * https://app-center-icon-prod-shanghai.oss-cn-shanghai.aliyuncs.com/tenant/1617863868712071/1749090558651_%E9%AB%98%E5%BE%B7.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * Application Name
   * 
   * @example
   * 19609820.png
   */
  name?: string;
  /**
   * @remarks
   * order ID
   * 
   * @example
   * 264987642530867,264988827010867,264982589530867,264985058640867,264982290930867,264982387520867,264987147460867,264985752990867,264988432850867
   */
  orderId?: string;
  /**
   * @remarks
   * Instance configuration
   */
  profile?: GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceListProfile;
  /**
   * @remarks
   * domain name
   * 
   * @example
   * placeHolder
   */
  siteHost?: string;
  /**
   * @remarks
   * application identity
   * 
   * @example
   * placeHolder
   */
  slug?: string;
  /**
   * @remarks
   * Source MARKET_CLOUD_DREAM
   * 
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @remarks
   * Start Time
   * 
   * @example
   * 2025-07-22T02:23:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * Status
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * Task Status text.
   * 
   * @example
   * SUCCESS
   */
  statusText?: string;
  /**
   * @remarks
   * Application thumbnail
   * 
   * @example
   * placeHolder
   */
  thumbnailUrl?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * placeHolder
   */
  userId?: string;
  /**
   * @remarks
   * Application instance Version
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
   * List of AI staff associated with the application
   */
  aiStaffList?: GetAppInstanceForPartnerResponseBodyModuleAiStaffList[];
  /**
   * @remarks
   * Design order associated with the application
   */
  appDesignSpec?: GetAppInstanceForPartnerResponseBodyModuleAppDesignSpec;
  /**
   * @remarks
   * Application operation address
   */
  appOperationAddress?: GetAppInstanceForPartnerResponseBodyModuleAppOperationAddress;
  /**
   * @remarks
   * List of service instances associated with the application
   */
  appServiceList?: GetAppInstanceForPartnerResponseBodyModuleAppServiceList[];
  /**
   * @remarks
   * Application subtype
   * 
   * @example
   * placeHolder
   */
  appSubType?: string;
  /**
   * @remarks
   * Application Type
   * 
   * @example
   * TRACE
   */
  appType?: string;
  /**
   * @remarks
   * Application instance business ID
   * 
   * @example
   * WS20250915163734000001
   */
  bizId?: string;
  /**
   * @remarks
   * Build Type
   * 
   * @example
   * placeHolder
   */
  buildType?: string;
  /**
   * @remarks
   * Is deleted
   * 
   * @example
   * fase
   */
  deleted?: number;
  /**
   * @remarks
   * Application Description
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
   * Design Configuration ID
   * 
   * @example
   * placeHolder
   */
  designSpecId?: string;
  /**
   * @remarks
   * Primary domain name
   * 
   * @example
   * stxycw.com
   */
  domain?: string;
  /**
   * @remarks
   * End time
   * 
   * @example
   * 2026-01-05T15:59:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * Environment
   * 
   * @example
   * pre
   */
  env?: string;
  /**
   * @remarks
   * Associated delivery order ID
   * 
   * @example
   * placeHolder
   */
  espBizId?: string;
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 1740479834
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Deletion time
   * 
   * @example
   * placeHolder
   */
  gmtDelete?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * Published At
   * 
   * @example
   * placeHolder
   */
  gmtPublish?: string;
  /**
   * @remarks
   * Application icon
   * 
   * @example
   * https://yzm.zshud.com:34901/cloud-phone/养生_1763631730804.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * Application Name
   * 
   * @example
   * 文件名
   */
  name?: string;
  /**
   * @remarks
   * Order ID
   * 
   * @example
   * 250822465990301
   */
  orderId?: string;
  /**
   * @remarks
   * Details
   */
  partnerDetail?: GetAppInstanceForPartnerResponseBodyModulePartnerDetail;
  /**
   * @remarks
   * Instance Configuration
   */
  profile?: GetAppInstanceForPartnerResponseBodyModuleProfile;
  /**
   * @remarks
   * List of instances associated with the application
   */
  relatedInstanceList?: GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceList[];
  /**
   * @remarks
   * Domain name
   * 
   * @example
   * abcd.scd.wanwang.xin
   */
  siteHost?: string;
  /**
   * @remarks
   * Application identifier
   * 
   * @example
   * placeHolder
   */
  slug?: string;
  /**
   * @remarks
   * Source MARKET_CLOUD_DREAM
   * 
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @remarks
   * Start Time
   * 
   * @example
   * 2023-03-24T10:10Z
   */
  startTime?: string;
  /**
   * @remarks
   * Status
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * Task Status text.
   * 
   * @example
   * FILE_DOWNLOAD_FAILED
   */
  statusText?: string;
  /**
   * @remarks
   * Application Thumbnail
   * 
   * @example
   * placeHolder
   */
  thumbnailUrl?: string;
  /**
   * @remarks
   * User ID
   * 
   * @example
   * placeHolder
   */
  userId?: string;
  /**
   * @remarks
   * Application instance Version
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
   * Detailed reason why access was denied.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Indicates whether retry is allowed
   * 
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @remarks
   * AppName.
   * 
   * @example
   * dewuApp
   */
  appName?: string;
  /**
   * @remarks
   * Dynamic error code.
   * 
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @remarks
   * Dynamic error message, used to replace the `%s` placeholder in the **ErrMessage** error message.  
   * > If **ErrMessage** returns **The Value of Input Parameter %s is not valid** and **DynamicMessage** returns **DtsJobId**, it indicates that the provided request parameter **DtsJobId** is invalid.
   * 
   * @example
   * https://check-result-file-sh.oss-cn-shanghai.aliyuncs.com/gl3d6l3817id8p1/gl3d6l3817id8p1.diff.zip?Expires=1750392068&OSSAccessKeyId=LTAI5tKUErVCETM4ev9SELNb&Signature=Bcj3eohy8nmlSQ7AAGdq7JZoLjM%3D
   */
  dynamicMessage?: string;
  /**
   * @remarks
   * Returned error parameters
   */
  errorArgs?: any[];
  /**
   * @remarks
   * Response data
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
   * Error code
   * 
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  /**
   * @remarks
   * Abnormal message
   * 
   * @example
   * 系统异常
   */
  rootErrorMsg?: string;
  /**
   * @remarks
   * Reserved parameter.
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

