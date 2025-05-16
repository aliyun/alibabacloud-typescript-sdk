// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessWarrantResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1234567890
   */
  accessToken?: string;
  /**
   * @example
   * ex2xxxxxxxx
   */
  accessWarrantId?: string;
  /**
   * @example
   * 1234567890
   */
  applicationAccessId?: string;
  /**
   * @example
   * 1672531200
   */
  createTime?: string;
  /**
   * @example
   * 1672531200
   */
  expireTime?: string;
  /**
   * @example
   * 1234567890
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      accessWarrantId: 'AccessWarrantId',
      applicationAccessId: 'ApplicationAccessId',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      accessWarrantId: 'string',
      applicationAccessId: 'string',
      createTime: 'string',
      expireTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

