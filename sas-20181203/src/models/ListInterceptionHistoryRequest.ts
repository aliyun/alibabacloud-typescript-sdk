// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInterceptionHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * @example
   * c7c190a82d9a048be9038d352840f****
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp.
   * 
   * @example
   * 1635575219000
   */
  endTime?: number;
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * Abnormal access
   */
  historyName?: string;
  /**
   * @remarks
   * The types of exceptions.
   */
  interceptionTypes?: number[];
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start of the time range to query. The value is a UNIX timestamp.
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

