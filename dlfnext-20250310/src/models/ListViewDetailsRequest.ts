// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListViewDetailsRequest extends $dara.Model {
  maxResults?: number;
  pageToken?: string;
  viewNamePattern?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      pageToken: 'pageToken',
      viewNamePattern: 'viewNamePattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      pageToken: 'string',
      viewNamePattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

