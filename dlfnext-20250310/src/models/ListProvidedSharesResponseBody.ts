// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Share } from "./Share";


export class ListProvidedSharesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token to retrieve the next page of results. A null value indicates that this is the last page.
   * 
   * @example
   * ""
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The shares.
   */
  shares?: Share[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'nextPageToken',
      shares: 'shares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      shares: { 'type': 'array', 'itemType': Share },
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

