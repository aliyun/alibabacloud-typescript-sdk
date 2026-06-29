// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBizUnitsResponseBodyDataBizUnitListAccountList extends $dara.Model {
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

export class ListBizUnitsResponseBodyDataBizUnitList extends $dara.Model {
  /**
   * @remarks
   * The business unit architects.
   */
  accountList?: ListBizUnitsResponseBodyDataBizUnitListAccountList[];
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
   * The environment identifier. Valid values:
   * - DEV: development environment.
   * - PROD: production environment.
   * 
   * @example
   * DEV
   */
  env?: string;
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
   * The business unit icon.
   * 
   * @example
   * icon-e-commerce
   */
  icon?: string;
  /**
   * @remarks
   * The business unit ID.
   * 
   * @example
   * 101001201
   */
  id?: number;
  /**
   * @remarks
   * The ID of the user who last modified the business unit.
   * 
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @remarks
   * The name of the user who last modified the business unit.
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
  /**
   * @remarks
   * The business unit details.
   */
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
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The query result.
   */
  data?: ListBizUnitsResponseBodyData;
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

