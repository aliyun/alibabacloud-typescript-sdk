// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Receiver } from "./Receiver";


export class ListReceiversResponseBody extends $dara.Model {
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
   * A list of receivers.
   */
  receivers?: Receiver[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'nextPageToken',
      receivers: 'receivers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      receivers: { 'type': 'array', 'itemType': Receiver },
    };
  }

  validate() {
    if(Array.isArray(this.receivers)) {
      $dara.Model.validateArray(this.receivers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

