// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListReceiversRequest extends $dara.Model {
  maxResults?: number;
  pageToken?: string;
  receiverName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      pageToken: 'pageToken',
      receiverName: 'receiverName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      pageToken: 'string',
      receiverName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

