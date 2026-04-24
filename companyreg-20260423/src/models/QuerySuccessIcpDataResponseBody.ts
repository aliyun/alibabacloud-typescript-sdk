// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class QuerySuccessIcpDataResponseBodyBaSuccessDataWithRiskListAppList extends $dara.Model {
  /**
   * @example
   * alipay
   */
  appName?: string;
  appRecordNum?: string;
  domainList?: string[];
  responsiblePersonName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      appRecordNum: 'AppRecordNum',
      domainList: 'DomainList',
      responsiblePersonName: 'ResponsiblePersonName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      appRecordNum: 'string',
      domainList: { 'type': 'array', 'itemType': 'string' },
      responsiblePersonName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainList)) {
      $dara.Model.validateArray(this.domainList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySuccessIcpDataResponseBodyBaSuccessDataWithRiskListRiskListRiskDetailList extends $dara.Model {
  rectifySuggestList?: string[];
  riskSource?: string;
  static names(): { [key: string]: string } {
    return {
      rectifySuggestList: 'RectifySuggestList',
      riskSource: 'RiskSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rectifySuggestList: { 'type': 'array', 'itemType': 'string' },
      riskSource: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rectifySuggestList)) {
      $dara.Model.validateArray(this.rectifySuggestList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySuccessIcpDataResponseBodyBaSuccessDataWithRiskListRiskList extends $dara.Model {
  /**
   * @example
   * 2026-04-24
   */
  deadLine?: string;
  riskDetailList?: QuerySuccessIcpDataResponseBodyBaSuccessDataWithRiskListRiskListRiskDetailList[];
  static names(): { [key: string]: string } {
    return {
      deadLine: 'DeadLine',
      riskDetailList: 'RiskDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deadLine: 'string',
      riskDetailList: { 'type': 'array', 'itemType': QuerySuccessIcpDataResponseBodyBaSuccessDataWithRiskListRiskListRiskDetailList },
    };
  }

  validate() {
    if(Array.isArray(this.riskDetailList)) {
      $dara.Model.validateArray(this.riskDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySuccessIcpDataResponseBodyBaSuccessDataWithRiskListWebsiteList extends $dara.Model {
  domainList?: string[];
  responsiblePersonName?: string;
  siteName?: string;
  siteRecordNum?: string;
  static names(): { [key: string]: string } {
    return {
      domainList: 'DomainList',
      responsiblePersonName: 'ResponsiblePersonName',
      siteName: 'SiteName',
      siteRecordNum: 'SiteRecordNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainList: { 'type': 'array', 'itemType': 'string' },
      responsiblePersonName: 'string',
      siteName: 'string',
      siteRecordNum: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainList)) {
      $dara.Model.validateArray(this.domainList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySuccessIcpDataResponseBodyBaSuccessDataWithRiskList extends $dara.Model {
  appList?: QuerySuccessIcpDataResponseBodyBaSuccessDataWithRiskListAppList[];
  icpNumber?: string;
  organizersName?: string;
  organizersNature?: string;
  responsiblePersonName?: string;
  riskList?: QuerySuccessIcpDataResponseBodyBaSuccessDataWithRiskListRiskList[];
  websiteList?: QuerySuccessIcpDataResponseBodyBaSuccessDataWithRiskListWebsiteList[];
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      icpNumber: 'IcpNumber',
      organizersName: 'OrganizersName',
      organizersNature: 'OrganizersNature',
      responsiblePersonName: 'ResponsiblePersonName',
      riskList: 'RiskList',
      websiteList: 'WebsiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: { 'type': 'array', 'itemType': QuerySuccessIcpDataResponseBodyBaSuccessDataWithRiskListAppList },
      icpNumber: 'string',
      organizersName: 'string',
      organizersNature: 'string',
      responsiblePersonName: 'string',
      riskList: { 'type': 'array', 'itemType': QuerySuccessIcpDataResponseBodyBaSuccessDataWithRiskListRiskList },
      websiteList: { 'type': 'array', 'itemType': QuerySuccessIcpDataResponseBodyBaSuccessDataWithRiskListWebsiteList },
    };
  }

  validate() {
    if(Array.isArray(this.appList)) {
      $dara.Model.validateArray(this.appList);
    }
    if(Array.isArray(this.riskList)) {
      $dara.Model.validateArray(this.riskList);
    }
    if(Array.isArray(this.websiteList)) {
      $dara.Model.validateArray(this.websiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySuccessIcpDataResponseBody extends $dara.Model {
  baSuccessDataWithRiskList?: QuerySuccessIcpDataResponseBodyBaSuccessDataWithRiskList[];
  /**
   * @example
   * NoPermission
   */
  errorCode?: number;
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1A13ABB5-7649-5031-B55C-D2E38F9F189D
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      baSuccessDataWithRiskList: 'BaSuccessDataWithRiskList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baSuccessDataWithRiskList: { 'type': 'array', 'itemType': QuerySuccessIcpDataResponseBodyBaSuccessDataWithRiskList },
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.baSuccessDataWithRiskList)) {
      $dara.Model.validateArray(this.baSuccessDataWithRiskList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

