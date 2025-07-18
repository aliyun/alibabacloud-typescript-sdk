// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdpConfigsResponseBodyDataDataList extends $dara.Model {
  description?: string;
  /**
   * @example
   * 277
   */
  id?: string;
  /**
   * @example
   * totp
   */
  mfa?: string;
  /**
   * @example
   * password
   */
  mobileLoginType?: string;
  /**
   * @example
   * password
   */
  mobileMfaConfigType?: string;
  /**
   * @example
   * 1482,1355
   */
  multiIdpInfo?: string;
  name?: string;
  /**
   * @example
   * password
   */
  pcLoginType?: string;
  /**
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @example
   * DingTalk
   */
  type?: string;
  /**
   * @example
   * 2023-05-09T02:22:41.430Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      mfa: 'Mfa',
      mobileLoginType: 'MobileLoginType',
      mobileMfaConfigType: 'MobileMfaConfigType',
      multiIdpInfo: 'MultiIdpInfo',
      name: 'Name',
      pcLoginType: 'PcLoginType',
      status: 'Status',
      type: 'Type',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      mfa: 'string',
      mobileLoginType: 'string',
      mobileMfaConfigType: 'string',
      multiIdpInfo: 'string',
      name: 'string',
      pcLoginType: 'string',
      status: 'string',
      type: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpConfigsResponseBodyData extends $dara.Model {
  dataList?: ListIdpConfigsResponseBodyDataDataList[];
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': ListIdpConfigsResponseBodyDataDataList },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIdpConfigsResponseBody extends $dara.Model {
  data?: ListIdpConfigsResponseBodyData;
  /**
   * @example
   * FD724DBC-CD76-5235-BF76-59C51B73296D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListIdpConfigsResponseBodyData,
      requestId: 'string',
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

