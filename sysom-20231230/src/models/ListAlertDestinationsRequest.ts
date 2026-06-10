// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertDestinationsRequest extends $dara.Model {
  /**
   * @remarks
   * Current page number (starts from 1).
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Maximum number of records retrieved in a single request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * Alert contact name.
   * 
   * @example
   * name1
   */
  name?: string;
  /**
   * @remarks
   * Paging token for the next request.
   * 
   * @example
   * c2f78a783f49457caba6bace6f6f79e4
   */
  nextToken?: string;
  /**
   * @remarks
   * Page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

