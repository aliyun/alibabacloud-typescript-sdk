// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccessTokenModel extends $dara.Model {
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * ******
   */
  accessToken?: string;
  /**
   * @remarks
   * The comment for the access token.
   */
  comment?: string;
  /**
   * @remarks
   * The creation time of the access token.
   */
  createdAt?: string;
  /**
   * @remarks
   * The expiration time of the access token.
   */
  expiredAt?: string;
  /**
   * @remarks
   * The status of the access token.
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      comment: 'Comment',
      createdAt: 'CreatedAt',
      expiredAt: 'ExpiredAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      comment: 'string',
      createdAt: 'string',
      expiredAt: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

