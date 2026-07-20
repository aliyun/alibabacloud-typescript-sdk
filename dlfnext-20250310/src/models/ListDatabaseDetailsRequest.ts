// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabaseDetailsRequest extends $dara.Model {
  databaseNamePattern?: string;
  maxResults?: number;
  pageToken?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      databaseNamePattern: 'databaseNamePattern',
      maxResults: 'maxResults',
      pageToken: 'pageToken',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseNamePattern: 'string',
      maxResults: 'number',
      pageToken: 'string',
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

