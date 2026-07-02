// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertStrategiesRequest extends $dara.Model {
  /**
   * @remarks
   * The current page number (starting from 1).
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The maximum number of records to retrieve in a single request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The policy name of the alerting policy.
   * 
   * @example
   * strategy1
   */
  name?: string;
  /**
   * @remarks
   * The pagination token for the next request.
   * 
   * @example
   * c2f78a783f49457caba6bace6f6f79e4
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of entries per page.
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

