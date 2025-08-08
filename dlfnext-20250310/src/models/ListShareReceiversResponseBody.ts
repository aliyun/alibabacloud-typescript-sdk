// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Receiver } from "./Receiver";


export class ListShareReceiversResponseBody extends $dara.Model {
  /**
   * @example
   * “”
   */
  nextPageToken?: string;
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

