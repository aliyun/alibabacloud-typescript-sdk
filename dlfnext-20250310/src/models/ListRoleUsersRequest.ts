// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoleUsersRequest extends $dara.Model {
  maxResults?: number;
  pageToken?: string;
  rolePrincipal?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      pageToken: 'pageToken',
      rolePrincipal: 'rolePrincipal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      pageToken: 'string',
      rolePrincipal: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

