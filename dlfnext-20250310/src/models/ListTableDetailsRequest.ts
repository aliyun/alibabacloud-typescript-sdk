// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableDetailsRequest extends $dara.Model {
  maxResults?: number;
  pageToken?: string;
  status?: string;
  tableNamePattern?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      pageToken: 'pageToken',
      status: 'status',
      tableNamePattern: 'tableNamePattern',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      pageToken: 'string',
      status: 'string',
      tableNamePattern: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

