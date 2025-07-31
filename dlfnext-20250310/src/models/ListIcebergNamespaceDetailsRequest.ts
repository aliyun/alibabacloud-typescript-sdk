// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIcebergNamespaceDetailsRequest extends $dara.Model {
  /**
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @example
   * namespace%
   */
  namespaceNamePattern?: string;
  /**
   * @example
   * ""
   */
  pageToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      namespaceNamePattern: 'namespaceNamePattern',
      pageToken: 'pageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      namespaceNamePattern: 'string',
      pageToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

