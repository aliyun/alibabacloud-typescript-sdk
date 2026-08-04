// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIdpConfigsResponseBodyDataDataList extends $dara.Model {
  /**
   * @remarks
   * IdP configuration description.
   * 
   * @example
   * 示例描述
   */
  description?: string;
  /**
   * @remarks
   * IdP configuration ID.
   * 
   * @example
   * 277
   */
  id?: string;
  /**
   * @remarks
   * Multi-factor authentication (MFA) type.
   * 
   * @example
   * totp
   */
  mfa?: string;
  /**
   * @remarks
   * Mobile login type.
   * 
   * @example
   * password
   */
  mobileLoginType?: string;
  /**
   * @remarks
   * Mobile MFA configuration type.
   * 
   * @example
   * password
   */
  mobileMfaConfigType?: string;
  /**
   * @remarks
   * List of multiple IdP configuration IDs.
   * 
   * @example
   * 1482,1355
   */
  multiIdpInfo?: string;
  /**
   * @remarks
   * IdP configuration name.
   * 
   * @example
   * 示例身份源
   */
  name?: string;
  /**
   * @remarks
   * PC login type.
   * 
   * @example
   * password
   */
  pcLoginType?: string;
  /**
   * @remarks
   * IdP configuration enable status. Values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * @example
   * Disabled
   */
  status?: string;
  /**
   * @remarks
   * IdP configuration type.
   * 
   * @example
   * DingTalk
   */
  type?: string;
  /**
   * @remarks
   * Update time.
   * 
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
  /**
   * @remarks
   * List of IdP configurations.
   */
  dataList?: ListIdpConfigsResponseBodyDataDataList[];
  /**
   * @remarks
   * Total number of records.
   * 
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
  /**
   * @remarks
   * IdP configurations.
   */
  data?: ListIdpConfigsResponseBodyData;
  /**
   * @remarks
   * The ID of this request.
   * 
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

