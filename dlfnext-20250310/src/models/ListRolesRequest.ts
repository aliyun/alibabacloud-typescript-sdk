// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRolesRequest extends $dara.Model {
  maxResults?: number;
  pageToken?: string;
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      pageToken: 'pageToken',
      roleName: 'roleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      pageToken: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

