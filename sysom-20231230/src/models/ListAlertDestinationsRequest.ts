// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertDestinationsRequest extends $dara.Model {
  xDebugId?: string;
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
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * @example
   * name1
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
   * The number of records per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      current: 'current',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      pageSize: 'pageSize',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      current: 'number',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageSize: 'number',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

