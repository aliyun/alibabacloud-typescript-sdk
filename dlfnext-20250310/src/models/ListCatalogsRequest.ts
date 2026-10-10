// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCatalogsRequest extends $dara.Model {
  /**
   * @remarks
   * The catalog name pattern.
   * 
   * @example
   * mi
   */
  catalogNamePattern?: string;
  /**
   * @remarks
   * The maximum number of records to retrieve at a time.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of results. If the response does not include a token, pass an empty string ("") or an empty character (\\"\\").
   * 
   * @example
   * ""
   */
  pageToken?: string;
  static names(): { [key: string]: string } {
    return {
      catalogNamePattern: 'catalogNamePattern',
      maxResults: 'maxResults',
      pageToken: 'pageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogNamePattern: 'string',
      maxResults: 'number',
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

