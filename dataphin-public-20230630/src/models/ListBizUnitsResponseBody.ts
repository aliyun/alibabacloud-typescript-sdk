// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBizUnitsResponseBodyDataBizUnitListAccountList extends $dara.Model {
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

export class ListBizUnitsResponseBodyDataBizUnitList extends $dara.Model {
  accountList?: ListBizUnitsResponseBodyDataBizUnitListAccountList[];
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
  /**
   * @example
   * DEV
   */
  env?: string;
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
      description: 'Description',
      displayName: 'DisplayName',
      env: 'Env',
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
      accountList: { 'type': 'array', 'itemType': ListBizUnitsResponseBodyDataBizUnitListAccountList },
      description: 'string',
      displayName: 'string',
      env: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizUnitsResponseBodyData extends $dara.Model {
  bizUnitList?: ListBizUnitsResponseBodyDataBizUnitList[];
  static names(): { [key: string]: string } {
    return {
      bizUnitList: 'BizUnitList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizUnitList: { 'type': 'array', 'itemType': ListBizUnitsResponseBodyDataBizUnitList },
    };
  }

  validate() {
    if(Array.isArray(this.bizUnitList)) {
      $dara.Model.validateArray(this.bizUnitList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizUnitsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListBizUnitsResponseBodyData;
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
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListBizUnitsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

