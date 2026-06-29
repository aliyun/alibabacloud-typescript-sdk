// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBizUnitInfoResponseBodyBizUnitInfoAccountList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 20001201
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

export class GetBizUnitInfoResponseBodyBizUnitInfoBusinessLeaderList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 20001201
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

export class GetBizUnitInfoResponseBodyBizUnitInfoDataLeaderList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 20001201
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

export class GetBizUnitInfoResponseBodyBizUnitInfoEnvList extends $dara.Model {
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 测试数据板块001_开发
   */
  displayName?: string;
  /**
   * @remarks
   * The environment identifier. Valid values: PROD and DEV.
   * 
   * @example
   * DEV
   */
  envName?: string;
  /**
   * @remarks
   * The English name.
   * 
   * @example
   * LD_test001_dev
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      envName: 'EnvName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      envName: 'string',
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

export class GetBizUnitInfoResponseBodyBizUnitInfo extends $dara.Model {
  /**
   * @remarks
   * The architects of the data domain.
   */
  accountList?: GetBizUnitInfoResponseBodyBizUnitInfoAccountList[];
  /**
   * @remarks
   * The number of business objects.
   * 
   * @example
   * 1
   */
  bizObjectCount?: number;
  /**
   * @remarks
   * The number of business activities.
   * 
   * @example
   * 1
   */
  bizProcessCount?: number;
  /**
   * @remarks
   * The business owners.
   */
  businessLeaderList?: GetBizUnitInfoResponseBodyBizUnitInfoBusinessLeaderList[];
  /**
   * @remarks
   * The number of subject domains.
   * 
   * @example
   * 1
   */
  dataDomainCount?: number;
  /**
   * @remarks
   * The data owners.
   */
  dataLeaderList?: GetBizUnitInfoResponseBodyBizUnitInfoDataLeaderList[];
  /**
   * @remarks
   * The description of the business object.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 测试
   */
  displayName?: string;
  /**
   * @remarks
   * The English names of the data domain for the two environments: production and development.
   */
  envList?: GetBizUnitInfoResponseBodyBizUnitInfoEnvList[];
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The icon of the data domain.
   * 
   * @example
   * icon-e-commerce
   */
  icon?: string;
  /**
   * @remarks
   * The data domain ID.
   * 
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @remarks
   * The ID of the user who last modified the data domain.
   * 
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @remarks
   * The name of the user who last modified the data domain.
   * 
   * @example
   * 张三
   */
  lastModifierName?: string;
  /**
   * @remarks
   * The production mode. Valid values:
   * - BASIC: single-environment mode.
   * - DEV_PROD: development/production dual-environment mode.
   * 
   * @example
   * DEV_PROD
   */
  mode?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test01
   */
  name?: string;
  /**
   * @remarks
   * The owner of the business object.
   * 
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @remarks
   * The owner of the business object.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accountList: 'AccountList',
      bizObjectCount: 'BizObjectCount',
      bizProcessCount: 'BizProcessCount',
      businessLeaderList: 'BusinessLeaderList',
      dataDomainCount: 'DataDomainCount',
      dataLeaderList: 'DataLeaderList',
      description: 'Description',
      displayName: 'DisplayName',
      envList: 'EnvList',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      icon: 'Icon',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      mode: 'Mode',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountList: { 'type': 'array', 'itemType': GetBizUnitInfoResponseBodyBizUnitInfoAccountList },
      bizObjectCount: 'number',
      bizProcessCount: 'number',
      businessLeaderList: { 'type': 'array', 'itemType': GetBizUnitInfoResponseBodyBizUnitInfoBusinessLeaderList },
      dataDomainCount: 'number',
      dataLeaderList: { 'type': 'array', 'itemType': GetBizUnitInfoResponseBodyBizUnitInfoDataLeaderList },
      description: 'string',
      displayName: 'string',
      envList: { 'type': 'array', 'itemType': GetBizUnitInfoResponseBodyBizUnitInfoEnvList },
      gmtCreate: 'string',
      gmtModified: 'string',
      icon: 'string',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      mode: 'string',
      name: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountList)) {
      $dara.Model.validateArray(this.accountList);
    }
    if(Array.isArray(this.businessLeaderList)) {
      $dara.Model.validateArray(this.businessLeaderList);
    }
    if(Array.isArray(this.dataLeaderList)) {
      $dara.Model.validateArray(this.dataLeaderList);
    }
    if(Array.isArray(this.envList)) {
      $dara.Model.validateArray(this.envList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizUnitInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data domain.
   */
  bizUnitInfo?: GetBizUnitInfoResponseBodyBizUnitInfo;
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizUnitInfo: 'BizUnitInfo',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitInfo: GetBizUnitInfoResponseBodyBizUnitInfo,
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.bizUnitInfo && typeof (this.bizUnitInfo as any).validate === 'function') {
      (this.bizUnitInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

