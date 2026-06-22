// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterceptionHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster to query.
   * 
   * @example
   * c7c190a82d9a048be9038d352840f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end timestamp of the query.
   * 
   * @example
   * 1635575219000
   */
  endTime?: number;
  /**
   * @remarks
   * The alert name.
   * 
   * @example
   * 异常访问。
   */
  historyName?: string;
  /**
   * @remarks
   * The types of exception events.
   */
  interceptionTypes?: number[];
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start timestamp of the query.
   * 
   * @example
   * 1651290987000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      currentPage: 'CurrentPage',
      endTime: 'EndTime',
      historyName: 'HistoryName',
      interceptionTypes: 'InterceptionTypes',
      lang: 'Lang',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      currentPage: 'number',
      endTime: 'number',
      historyName: 'string',
      interceptionTypes: { 'type': 'array', 'itemType': 'number' },
      lang: 'string',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.interceptionTypes)) {
      $dara.Model.validateArray(this.interceptionTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

