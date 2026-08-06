// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReceivedShare } from "./ReceivedShare";


export class ListReceivedSharesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token to retrieve the next page of results. If this parameter is null, all results have been returned.
   * 
   * @example
   * ""
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The received shares.
   */
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

