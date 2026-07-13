// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmAlertLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The alert type.
   * 
   * - ALERT: An alert is triggered.
   * 
   * - RESUME: The service has recovered.
   * 
   * @example
   * ALERT
   */
  actionType?: string;
  /**
   * @remarks
   * The end of the time range to query. This is a UNIX timestamp.
   * 
   * This parameter is required.
   * 
   * @example
   * 1711328826977
   */
  endTimestamp?: number;
  /**
   * @remarks
   * The alert object.
   * 
   * - GTM_ADDRESS: Address
   * 
   * - GTM_ADDRESS_POOL: Address pool
   * 
   * - GTM_INSTANCE: Instance
   * 
   * - GTM_MONITOR_TEMPLATE: Health check template
   * 
   * @example
   * GTM_ADDRESS
   */
  entityType?: string;
  /**
   * @remarks
   * The keyword for the search. This is usually an address ID, address pool ID, or domain name.
   * 
   * @example
   * pool-895280232254422016
   */
  keyword?: string;
  /**
   * @remarks
   * The language of the response.
   * 
   * - zh-CN: Chinese
   * 
   * - en-US: English
   * 
   * @example
   * zh-CN
   */
  lang?: string;
  /**
   * @remarks
   * The current page number. The value starts from **1**. The default value is **1**.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. The maximum value is 100. The default value is 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start of the time range to query. This is a UNIX timestamp.
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

