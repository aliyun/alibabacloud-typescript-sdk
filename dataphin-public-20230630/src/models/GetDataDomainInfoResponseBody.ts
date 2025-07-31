// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataDomainInfoResponseBodyDataDomainInfo extends $dara.Model {
  /**
   * @example
   * dm_code_name
   */
  abbreviation?: string;
  /**
   * @example
   * 545844456
   */
  bizUnitId?: number;
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
   * 1241844456
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
   * dm_code_name
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
  /**
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

export class GetDataDomainInfoResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  dataDomainInfo?: GetDataDomainInfoResponseBodyDataDomainInfo;
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
      dataDomainInfo: 'DataDomainInfo',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dataDomainInfo: GetDataDomainInfoResponseBodyDataDomainInfo,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.dataDomainInfo && typeof (this.dataDomainInfo as any).validate === 'function') {
      (this.dataDomainInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

