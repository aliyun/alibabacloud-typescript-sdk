// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccessTokenModel extends $dara.Model {
  accessToken?: string;
  comment?: string;
  createdAt?: string;
  expiredAt?: string;
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

