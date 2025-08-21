// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAuthCodeBindForExtRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @example
   * 1***2
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAuthCodeBindForExtRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Aexfgc
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: CheckAuthCodeBindForExtRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      encodeKey: 'string',
      encodeType: 'string',
      userInfo: CheckAuthCodeBindForExtRequestUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

