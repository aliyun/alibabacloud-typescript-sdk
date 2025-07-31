// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBizUnitInfoResponseBodyBizUnitInfoAccountList extends $dara.Model {
  /**
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
   * @example
   * 测试数据板块001_开发
   */
  displayName?: string;
  /**
   * @example
   * DEV
   */
  envName?: string;
  /**
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
  accountList?: GetBizUnitInfoResponseBodyBizUnitInfoAccountList[];
  /**
   * @example
   * 1
   */
  bizObjectCount?: number;
  /**
   * @example
   * 1
   */
  bizProcessCount?: number;
  businessLeaderList?: GetBizUnitInfoResponseBodyBizUnitInfoBusinessLeaderList[];
  /**
   * @example
   * 1
   */
  dataDomainCount?: number;
  dataLeaderList?: GetBizUnitInfoResponseBodyBizUnitInfoDataLeaderList[];
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 测试
   */
  displayName?: string;
  envList?: GetBizUnitInfoResponseBodyBizUnitInfoEnvList[];
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * icon-e-commerce
   */
  icon?: string;
  /**
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @example
   * 张三
   */
  lastModifierName?: string;
  /**
   * @example
   * DEV_PROD
   */
  mode?: string;
  /**
   * @example
   * test01
   */
  name?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
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
  bizUnitInfo?: GetBizUnitInfoResponseBodyBizUnitInfo;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
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

