// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIcebergNamespaceDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of entries to return on each page.
   * Default value: 1000.
   * Maximum value: 1000.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The namespace name pattern. Supports right-hand fuzzy matching with the percent sign (%).
   * 
   * @example
   * namespace%
   */
  namespaceNamePattern?: string;
  /**
   * @remarks
   * The token for the next page of results. If the response does not include this token, pass an empty string ("").
   * 
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

