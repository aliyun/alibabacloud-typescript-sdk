// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataDomainsResponseBodyDataDataDomainList extends $dara.Model {
  /**
   * @remarks
   * The abbreviation of the data domain.
   * 
   * @example
   * dm_code_name
   */
  abbreviation?: string;
  /**
   * @remarks
   * The ID of the business unit to which the data domain belongs.
   * 
   * @example
   * 545844456
   */
  bizUnitId?: number;
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
   * The display name of the data domain.
   * 
   * @example
   * 测试
   */
  displayName?: string;
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
   * The ID of the data domain.
   * 
   * @example
   * 1241844456
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
   * The name of the data domain.
   * 
   * @example
   * dm_code_name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the owner of the business object.
   * 
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @remarks
   * The ID of the owner of the business object.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The IDs of the parent data domains.
   * 
   * @example
   * 10232311
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      abbreviation: 'Abbreviation',
      bizUnitId: 'BizUnitId',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      name: 'Name',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abbreviation: 'string',
      bizUnitId: 'number',
      description: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      name: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      parentId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDomainsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the data domains.
   */
  dataDomainList?: ListDataDomainsResponseBodyDataDataDomainList[];
  static names(): { [key: string]: string } {
    return {
      dataDomainList: 'DataDomainList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDomainList: { 'type': 'array', 'itemType': ListDataDomainsResponseBodyDataDataDomainList },
    };
  }

  validate() {
    if(Array.isArray(this.dataDomainList)) {
      $dara.Model.validateArray(this.dataDomainList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataDomainsResponseBody extends $dara.Model {
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
  data?: ListDataDomainsResponseBodyData;
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
      data: ListDataDomainsResponseBodyData,
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

