// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReceivedShare } from "./ReceivedShare";


export class ListReceivedSharesResponseBody extends $dara.Model {
  /**
   * @example
   * ""
   */
  nextPageToken?: string;
  shares?: ReceivedShare[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'nextPageToken',
      shares: 'shares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      shares: { 'type': 'array', 'itemType': ReceivedShare },
    };
  }

  validate() {
    if(Array.isArray(this.shares)) {
      $dara.Model.validateArray(this.shares);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

