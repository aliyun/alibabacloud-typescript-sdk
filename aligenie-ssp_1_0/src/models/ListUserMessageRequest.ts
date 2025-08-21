// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserMessageRequestUserInfo extends $dara.Model {
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
   * HOFF****my7Iw=
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
   * 1**2
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

export class ListUserMessageRequest extends $dara.Model {
  /**
   * @example
   * 2022-07-27 14:06:55.984
   */
  beforeTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: ListUserMessageRequestUserInfo;
  /**
   * @example
   * 10
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      beforeTime: 'BeforeTime',
      userInfo: 'UserInfo',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beforeTime: 'string',
      userInfo: ListUserMessageRequestUserInfo,
      limit: 'number',
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

