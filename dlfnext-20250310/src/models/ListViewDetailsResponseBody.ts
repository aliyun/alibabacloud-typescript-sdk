// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { View } from "./View";


export class ListViewDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token for the next page of results. If null is returned, all results have been retrieved.
   * 
   * @example
   * “”
   */
  nextPageToken?: string;
  /**
   * @remarks
   * A list of views.
   */
  viewDetails?: View[];
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'nextPageToken',
      viewDetails: 'viewDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      viewDetails: { 'type': 'array', 'itemType': View },
    };
  }

  validate() {
    if(Array.isArray(this.viewDetails)) {
      $dara.Model.validateArray(this.viewDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

