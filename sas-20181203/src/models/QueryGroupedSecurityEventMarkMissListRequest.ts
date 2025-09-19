// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryGroupedSecurityEventMarkMissListRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The handling method. Valid values:
   * 
   * *   **1**: Automatically Added to Whitelist
   * *   **2**: Defense Without Notification
   * 
   * @example
   * 1
   */
  disposalWay?: string;
  /**
   * @remarks
   * The name of the alert event. The value indicates a subtype.
   * 
   * @example
   * Login with unusual location
   */
  eventName?: string;
  /**
   * @remarks
   * The ID of the request source. Set the value to sas.
   * 
   * @example
   * sas
   */
  from?: string;
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
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The condition that is used to query alert events by asset. You can specify a value of the following types:
   * 
   * *   The IP address of the asset.
   * *   The public IP address of the asset.
   * *   The private IP address of the asset.
   * *   The name of the asset.
   * 
   * @example
   * 222.185.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 113.66.XX.XX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      disposalWay: 'DisposalWay',
      eventName: 'EventName',
      from: 'From',
      lang: 'Lang',
      pageSize: 'PageSize',
      remark: 'Remark',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      disposalWay: 'string',
      eventName: 'string',
      from: 'string',
      lang: 'string',
      pageSize: 'number',
      remark: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

