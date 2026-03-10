// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppInstanceForPartnerResponseBodyModuleAiStaffList extends $dara.Model {
  /**
   * @example
   * 370196
   */
  staffId?: string;
  /**
   * @example
   * StaffName
   */
  staffName?: string;
  /**
   * @example
   * StaffType
   */
  staffType?: string;
  /**
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
   * @example
   * style
   */
  colorStyle?: string;
  /**
   * @example
   * bvt_test
   */
  companyName?: string;
  /**
   * @example
   * HongKong
   */
  deployArea?: string;
  /**
   * @example
   * 2022-12-21T08:27:03Z
   */
  gmtCreate?: string;
  /**
   * @example
   * Wed Sep 10 09:53:35 CST 2025
   */
  gmtModified?: string;
  /**
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
   * @example
   * BeginDialogue
   */
  actionKey?: string;
  /**
   * @example
   * placeHolder
   */
  actionText?: string;
  /**
   * @example
   * false
   */
  enable?: boolean;
  /**
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
   * @example
   * CollectedNumber
   */
  actionKey?: string;
  /**
   * @example
   * placeHolder
   */
  actionText?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
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
  actions?: GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressActions[];
  /**
   * @example
   * placeHolder
   */
  aiCustomerConfigUrl?: string;
  /**
   * @example
   * placeHolder
   */
  aiDesignUrl?: string;
  /**
   * @example
   * placeHolder
   */
  appPublishUrl?: string;
  dashboardActions?: GetAppInstanceForPartnerResponseBodyModuleAppOperationAddressDashboardActions[];
  /**
   * @example
   * placeHolder
   */
  designUrl?: string;
  /**
   * @example
   * placeHolder
   */
  instanceLoginUrl?: string;
  /**
   * @example
   * placeHolder
   */
  renewBuyUrl?: string;
  /**
   * @example
   * placeHolder
   */
  serverDeliveryUrl?: string;
  /**
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
   * @example
   * d75fvq3ctk
   */
  id?: string;
  /**
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
  children?: any[];
  /**
   * @example
   * FinalStepNo
   */
  finalStepNo?: number;
  /**
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
   * @example
   * 2927b500-c4e2-4241-bacf-0a2991c4be12
   */
  nodeId?: string;
  nodeName?: string;
  /**
   * @example
   * NodeStatus
   */
  nodeStatus?: string;
  /**
   * @example
   * OperatorRole
   */
  operatorRole?: string;
  /**
   * @example
   * dpYLaezmVNRMGX56Cg4gLjrrVrMqPxX6
   */
  parentNodeId?: string;
  /**
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
   * @example
   * CollectedNumber
   */
  actionKey?: string;
  /**
   * @example
   * ActionText
   */
  actionText?: string;
  /**
   * @example
   * false
   */
  enable?: boolean;
  /**
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
   * @example
   * AbortDialogue
   */
  actionKey?: string;
  /**
   * @example
   * ActionText
   */
  actionText?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
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
  actions?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressActions[];
  /**
   * @example
   * AiCustomerConfigUrl
   */
  aiCustomerConfigUrl?: string;
  /**
   * @example
   * AiDesignUrl
   */
  aiDesignUrl?: string;
  /**
   * @example
   * AppPublishUrl
   */
  appPublishUrl?: string;
  dashboardActions?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddressDashboardActions[];
  /**
   * @example
   * DesignUrl
   */
  designUrl?: string;
  /**
   * @example
   * InstanceLoginUrl
   */
  instanceLoginUrl?: string;
  /**
   * @example
   * renewBuyUrl
   */
  renewBuyUrl?: string;
  /**
   * @example
   * ServerDeliveryUrl
   */
  serverDeliveryUrl?: string;
  /**
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
   * @example
   * WS20250801003834000003
   */
  bizId?: string;
  /**
   * @example
   * DesignType
   */
  designType?: string;
  /**
   * @example
   * DesignTypeText
   */
  designTypeText?: string;
  /**
   * @example
   * 1620711265000
   */
  gmtCreate?: string;
  /**
   * @example
   * Mon Sep 25 14:48:49 CST 2023
   */
  gmtModified?: string;
  /**
   * @example
   * 108232
   */
  id?: string;
  /**
   * @example
   * LxInstanceId
   */
  lxInstanceId?: string;
  /**
   * @example
   * 256146659280026
   */
  orderId?: string;
  /**
   * @example
   * 8
   */
  serviceSpec?: string;
  /**
   * @example
   * ServiceSpecText
   */
  serviceSpecText?: string;
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
   * @example
   * WS20251211153330000001
   */
  bizId?: string;
  /**
   * @example
   * fase
   */
  deleted?: number;
  /**
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
   * @example
   * 2025-07-30T02:08:40Z
   */
  gmtCreate?: string;
  /**
   * @example
   * Tue Sep 09 10:27:49 CST 2025
   */
  gmtModified?: string;
  group?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListGroup;
  /**
   * @example
   * InstanceBizId
   */
  instanceBizId?: string;
  /**
   * @example
   * 19609820.png
   */
  name?: string;
  nodeList?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListNodeList[];
  operationAddress?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListOperationAddress;
  /**
   * @example
   * 253790948890026
   */
  orderId?: string;
  profile?: GetAppInstanceForPartnerResponseBodyModuleAppServiceListProfile;
  /**
   * @example
   * WEBSITE_DESIGN
   */
  serviceType?: string;
  /**
   * @example
   * ServiceTypeText
   */
  serviceTypeText?: string;
  /**
   * @example
   * Slug
   */
  slug?: string;
  /**
   * @example
   * 1754447102000
   */
  startTime?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
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
   * @example
   * WS20250801153127000002
   */
  bizId?: string;
  /**
   * @example
   * 1672123722000
   */
  gmtCreate?: string;
  /**
   * @example
   * Wed Nov 26 10:15:28 CST 2025
   */
  gmtModified?: string;
  /**
   * @example
   * grantAliyunPk
   */
  grantAliyunPk?: string;
  /**
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
   * @example
   * 10001
   */
  partnerId?: string;
  /**
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
   * @example
   * 10001
   */
  partnerId?: string;
  /**
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
   * @example
   * placeHolder
   */
  adminUrl?: string;
  /**
   * @example
   * PC_WebSite
   */
  applicationType?: string;
  /**
   * @example
   * placeHolder
   */
  applicationTypeText?: string;
  /**
   * @example
   * placeHolder
   */
  bindCname?: string;
  /**
   * @example
   * WS20250801152128000005
   */
  bizId?: string;
  /**
   * @example
   * rds
   */
  commodityCode?: string;
  /**
   * @example
   * placeHolder
   */
  customerService?: string;
  /**
   * @example
   * ChineseMainland
   */
  deployArea?: string;
  /**
   * @example
   * [white:],*.eduresource.cn,*.dingtalk.com,*.aliyun.com,*.aliyuncs.com,euser.edu-aliyun.com,s-gm.mmstat.com
   */
  domainList?: string;
  /**
   * @example
   * placeHolder
   */
  editorUrl?: string;
  /**
   * @example
   * 1605280632000
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-05-06T03:07:45Z
   */
  gmtModified?: string;
  /**
   * @example
   * placeHolder
   */
  icpbaNo?: string;
  /**
   * @example
   * {\\"Image\\": []}
   */
  imageList?: string;
  /**
   * @example
   * placeHolder
   */
  lxInstanceId?: string;
  /**
   * @example
   * placeHolder
   */
  ordTime?: string;
  /**
   * @example
   * 256146659280026
   */
  orderId?: string;
  /**
   * @example
   * 1
   */
  orderNum?: number;
  /**
   * @example
   * 100086
   */
  partnerId?: string;
  /**
   * @example
   * placeHolder
   */
  payTime?: string;
  /**
   * @example
   * https://preview-lyj.aliyuncs.com/preview/1daacb3ebbb8435d9091fb950c528d0f?subSceneIds=682185
   */
  previewUrl?: string;
  /**
   * @example
   * placeHolder
   */
  seoSite?: string;
  /**
   * @example
   * placeHolder
   */
  siteLogo?: string;
  /**
   * @example
   * Basic_Edition
   */
  siteVersion?: string;
  /**
   * @example
   * placeHolder
   */
  siteVersionText?: string;
  /**
   * @example
   * edasmsc
   */
  source?: string;
  /**
   * @example
   * placeHolder
   */
  templateEtag?: string;
  /**
   * @example
   * 4644
   */
  templateId?: string;
  /**
   * @example
   * placeHolder
   */
  textList?: string;
  /**
   * @example
   * https://aloss-recruit-aiinterview.oss-cn-beijing.aliyuncs.com/thumbnail-1753495551714-10000.png
   */
  thumbnail?: string;
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
   * @example
   * placeHolder
   */
  adminUrl?: string;
  /**
   * @example
   * PC_WebSite
   */
  applicationType?: string;
  /**
   * @example
   * placeHolder
   */
  applicationTypeText?: string;
  /**
   * @example
   * placeHolder
   */
  bindCname?: string;
  /**
   * @example
   * WS20250801153127000002
   */
  bizId?: string;
  /**
   * @example
   * sas
   */
  commodityCode?: string;
  /**
   * @example
   * placeHolder
   */
  customerService?: string;
  /**
   * @example
   * ChineseMainland
   */
  deployArea?: string;
  /**
   * @example
   * [\\"activity.syruijia.top\\", \\"admin.syruijia.top\\", \\"api.syruijia.top\\", \\"game-admin.syruijia.top\\", \\"h5game.syruijia.top\\", \\"home.syruijia.top\\", \\"invite.syruijia.top\\"]
   */
  domainList?: string;
  /**
   * @example
   * placeHolder
   */
  editorUrl?: string;
  /**
   * @example
   * 1621734214000
   */
  gmtCreate?: string;
  /**
   * @example
   * Thu Oct 24 09:12:31 CST 2024
   */
  gmtModified?: string;
  /**
   * @example
   * placeHolder
   */
  icpbaNo?: string;
  /**
   * @example
   * {\\"Image\\": []}
   */
  imageList?: string;
  /**
   * @example
   * placeHolder
   */
  lxInstanceId?: string;
  /**
   * @example
   * placeHolder
   */
  ordTime?: string;
  /**
   * @example
   * 248808934190692
   */
  orderId?: string;
  /**
   * @example
   * 1
   */
  orderNum?: number;
  /**
   * @example
   * 100086
   */
  partnerId?: string;
  /**
   * @example
   * placeHolder
   */
  payTime?: string;
  /**
   * @example
   * https://preview-lyj.aliyuncs.com/preview/temp/9fb36fc05d0a48cdb92d7397336c214f?subSceneIds=734285&type=interim
   */
  previewUrl?: string;
  /**
   * @example
   * placeHolder
   */
  seoSite?: string;
  /**
   * @example
   * placeHolder
   */
  siteLogo?: string;
  /**
   * @example
   * Trial_Edition
   */
  siteVersion?: string;
  /**
   * @example
   * placeHolder
   */
  siteVersionText?: string;
  /**
   * @example
   * 10.71.130.205
   */
  source?: string;
  /**
   * @example
   * placeHolder
   */
  templateEtag?: string;
  /**
   * @example
   * 4644
   */
  templateId?: string;
  /**
   * @example
   * placeHolder
   */
  textList?: string;
  /**
   * @example
   * https://aloss-recruit-aiinterview.oss-cn-beijing.aliyuncs.com/thumbnail-1766456326256-0.png
   */
  thumbnail?: string;
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
   * @example
   * placeHolder
   */
  appSubType?: string;
  /**
   * @example
   * 1
   */
  appType?: string;
  /**
   * @example
   * WS20250929173805000001
   */
  bizId?: string;
  /**
   * @example
   * placeHolder
   */
  buildType?: string;
  /**
   * @example
   * fase
   */
  deleted?: number;
  /**
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
   * @example
   * placeHolder
   */
  designSpecId?: string;
  /**
   * @example
   * shikuntech.com
   */
  domain?: string;
  /**
   * @example
   * 2025-05-23T15:01:25.891Z
   */
  endTime?: string;
  /**
   * @example
   * pre
   */
  env?: string;
  /**
   * @example
   * placeHolder
   */
  espBizId?: string;
  /**
   * @example
   * 2025-06-19T07:39:55Z
   */
  gmtCreate?: string;
  /**
   * @example
   * placeHolder
   */
  gmtDelete?: string;
  /**
   * @example
   * 2025-01-14T09:09:57Z
   */
  gmtModified?: string;
  /**
   * @example
   * placeHolder
   */
  gmtPublish?: string;
  /**
   * @example
   * https://app-center-icon-prod-shanghai.oss-cn-shanghai.aliyuncs.com/tenant/1617863868712071/1749090558651_%E9%AB%98%E5%BE%B7.png
   */
  iconUrl?: string;
  /**
   * @example
   * 19609820.png
   */
  name?: string;
  /**
   * @example
   * 264987642530867,264988827010867,264982589530867,264985058640867,264982290930867,264982387520867,264987147460867,264985752990867,264988432850867
   */
  orderId?: string;
  profile?: GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceListProfile;
  /**
   * @example
   * placeHolder
   */
  siteHost?: string;
  /**
   * @example
   * placeHolder
   */
  slug?: string;
  /**
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @example
   * 2025-07-22T02:23:00Z
   */
  startTime?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * SUCCESS
   */
  statusText?: string;
  /**
   * @example
   * placeHolder
   */
  thumbnailUrl?: string;
  /**
   * @example
   * placeHolder
   */
  userId?: string;
  /**
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
  aiStaffList?: GetAppInstanceForPartnerResponseBodyModuleAiStaffList[];
  appDesignSpec?: GetAppInstanceForPartnerResponseBodyModuleAppDesignSpec;
  appOperationAddress?: GetAppInstanceForPartnerResponseBodyModuleAppOperationAddress;
  appServiceList?: GetAppInstanceForPartnerResponseBodyModuleAppServiceList[];
  /**
   * @example
   * placeHolder
   */
  appSubType?: string;
  /**
   * @example
   * TRACE
   */
  appType?: string;
  /**
   * @example
   * WS20250915163734000001
   */
  bizId?: string;
  /**
   * @example
   * placeHolder
   */
  buildType?: string;
  /**
   * @example
   * fase
   */
  deleted?: number;
  /**
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
   * @example
   * placeHolder
   */
  designSpecId?: string;
  /**
   * @example
   * stxycw.com
   */
  domain?: string;
  /**
   * @example
   * 2026-01-05T15:59:00Z
   */
  endTime?: string;
  /**
   * @example
   * pre
   */
  env?: string;
  /**
   * @example
   * placeHolder
   */
  espBizId?: string;
  /**
   * @example
   * 1740479834
   */
  gmtCreate?: string;
  /**
   * @example
   * placeHolder
   */
  gmtDelete?: string;
  /**
   * @example
   * 2025-08-28T02:25:41Z
   */
  gmtModified?: string;
  /**
   * @example
   * placeHolder
   */
  gmtPublish?: string;
  iconUrl?: string;
  name?: string;
  /**
   * @example
   * 250822465990301
   */
  orderId?: string;
  partnerDetail?: GetAppInstanceForPartnerResponseBodyModulePartnerDetail;
  profile?: GetAppInstanceForPartnerResponseBodyModuleProfile;
  relatedInstanceList?: GetAppInstanceForPartnerResponseBodyModuleRelatedInstanceList[];
  /**
   * @example
   * abcd.scd.wanwang.xin
   */
  siteHost?: string;
  /**
   * @example
   * placeHolder
   */
  slug?: string;
  /**
   * @example
   * MARKET_CLOUD_DREAM
   */
  sourceType?: string;
  /**
   * @example
   * 2023-03-24T10:10Z
   */
  startTime?: string;
  /**
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @example
   * FILE_DOWNLOAD_FAILED
   */
  statusText?: string;
  /**
   * @example
   * placeHolder
   */
  thumbnailUrl?: string;
  /**
   * @example
   * placeHolder
   */
  userId?: string;
  /**
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
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * False
   */
  allowRetry?: boolean;
  /**
   * @example
   * dewuApp
   */
  appName?: string;
  /**
   * @example
   * ERROR-oo1
   */
  dynamicCode?: string;
  /**
   * @example
   * SYSTEM_ERROR
   */
  dynamicMessage?: string;
  errorArgs?: any[];
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
   * @example
   * SYSTEM.ERROR
   */
  rootErrorCode?: string;
  rootErrorMsg?: string;
  /**
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

