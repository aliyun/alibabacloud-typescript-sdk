// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Namespace } from "./Namespace";


export class ListIcebergNamespaceDetailsResponseBody extends $dara.Model {
  namespaceDetails?: Namespace[];
  /**
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

