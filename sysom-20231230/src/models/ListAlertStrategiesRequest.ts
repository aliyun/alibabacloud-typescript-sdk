// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertStrategiesRequest extends $dara.Model {
  /**
   * @remarks
   * Current page number (starting from 1)
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * Maximum number of records to retrieve in a single request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Alert policy name
   * 
   * @example
   * strategy1
   */
  name?: string;
  /**
   * @remarks
   * Pagination token for the next request.
   * 
   * @example
   * c2f78a783f49457caba6bace6f6f79e4
   */
  nextToken?: string;
  /**
   * @remarks
   * Page size
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

