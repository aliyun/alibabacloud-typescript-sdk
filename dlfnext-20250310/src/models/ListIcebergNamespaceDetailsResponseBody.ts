// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Namespace } from "./Namespace";


export class ListIcebergNamespaceDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The namespaces.
   */
  namespaceDetails?: Namespace[];
  /**
   * @remarks
   * The token for the next page of results. If this parameter is not returned, all results have been retrieved.
   * 
   * @example
   * ""
   */
  nextPageToken?: string;
  static names(): { [key: string]: string } {
    return {
      namespaceDetails: 'namespaceDetails',
      nextPageToken: 'nextPageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaceDetails: { 'type': 'array', 'itemType': Namespace },
      nextPageToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.namespaceDetails)) {
      $dara.Model.validateArray(this.namespaceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

