// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AccessTokenModel } from "./AccessTokenModel";


export class UserSummaryModel extends $dara.Model {
  accessTokens?: AccessTokenModel[];
  host?: string;
  ramUser?: string;
  status?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accessTokens: 'AccessTokens',
      host: 'Host',
      ramUser: 'RamUser',
      status: 'Status',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessTokens: { 'type': 'array', 'itemType': AccessTokenModel },
      host: 'string',
      ramUser: 'string',
      status: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessTokens)) {
      $dara.Model.validateArray(this.accessTokens);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

