// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOrgAndFactoryResponseBodyDataFactoryList extends $dara.Model {
  /**
   * @remarks
   * The site ID.
   * 
   * @example
   * pn_95
   */
  factoryId?: string;
  /**
   * @remarks
   * The site name.
   * 
   * @example
   * Ledi Industrial Park 1
   */
  factoryName?: string;
  static names(): { [key: string]: string } {
    return {
      factoryId: 'factoryId',
      factoryName: 'factoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factoryId: 'string',
      factoryName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgAndFactoryResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 1319617584664960
   */
  aliyunPk?: string;
  /**
   * @remarks
   * The sites.
   */
  factoryList?: GetOrgAndFactoryResponseBodyDataFactoryList[];
  /**
   * @remarks
   * The enterprise ID.
   * 
   * @example
   * 6265f42XXXX2fec150
   */
  organizationId?: string;
  /**
   * @remarks
   * The enterprise name.
   * 
   * @example
   * Ledi Industrial Park
   */
  organizationName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunPk: 'aliyunPk',
      factoryList: 'factoryList',
      organizationId: 'organizationId',
      organizationName: 'organizationName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunPk: 'string',
      factoryList: { 'type': 'array', 'itemType': GetOrgAndFactoryResponseBodyDataFactoryList },
      organizationId: 'string',
      organizationName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.factoryList)) {
      $dara.Model.validateArray(this.factoryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOrgAndFactoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code returned for the request.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * data
   */
  data?: GetOrgAndFactoryResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 83A5A7DD-8974-5769-952E-590A97BEA34E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetOrgAndFactoryResponseBodyData },
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

