// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmAlertLogsRequest extends $dara.Model {
  /**
   * @remarks
   * Alert type:
   * - ALERT
   * - RESUME
   * 
   * @example
   * ALERT
   */
  actionType?: string;
  /**
   * @remarks
   * The end time of the query (timestamp).
   * 
   * This parameter is required.
   * 
   * @example
   * 1711328826977
   */
  endTimestamp?: number;
  /**
   * @remarks
   * Alarm object types:
   * - GTM_ADDRESS: Address
   * - GTM_ADDRESS_POOL: Address Pool
   * - GTM_INSTANCE: Instance
   * - GTM_MONITOR_TEMPLATE: Health Check Template
   * 
   * @example
   * GTM_ADDRESS
   */
  entityType?: string;
  /**
   * @remarks
   * Search keyword, usually an address ID, address pool ID, domain information, etc.
   * 
   * @example
   * pool-895280232254422016
   */
  keyword?: string;
  /**
   * @remarks
   * Language type of the returned information:
   * - zh-CN: Chinese
   * - en-US: English
   * 
   * @example
   * zh-CN
   */
  lang?: string;
  /**
   * @remarks
   * Current page number, starting from **1**, default is **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page when paginating queries, with a maximum value of 100 and a default of 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time of the query (timestamp).
   * 
   * This parameter is required.
   * 
   * @example
   * 1611328826977
   */
  startTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      endTimestamp: 'EndTimestamp',
      entityType: 'EntityType',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTimestamp: 'StartTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      endTimestamp: 'number',
      entityType: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

