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

