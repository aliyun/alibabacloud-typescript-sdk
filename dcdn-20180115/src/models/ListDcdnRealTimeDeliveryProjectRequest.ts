// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDcdnRealTimeDeliveryProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the collected logs. Default value: cdn_log_access_l1. Valid values:
   * 
   * *   **cdn_log_access_l1**: access logs of Dynamic Content Delivery Network (DCDN) points of presence (POPs)
   * *   **cdn_log_origin**: back-to-origin logs
   * *   **cdn_log_er**: EdgeRoutine logs
   * *   By default, this parameter is left empty, and all logs are returned.
   * 
   * @example
   * cdn_log_access_l1
   */
  businessType?: string;
  /**
   * @remarks
   * The domain name. You can specify only one domain name in each request. If this parameter is not specified, all domain names are queried.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The number of the page to return. Valid values: **1** to **100000**. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      domainName: 'DomainName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      domainName: 'string',
      pageNumber: 'number',
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

