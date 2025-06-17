// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCdnSubTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names to be tracked. Separate multiple domain names with commas (,). You can specify up to 500 domain names. If you want to specify more than 500 domain names, [submit a ticket](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex).
   * 
   * > If you do not specify a domain name, the custom operations report is created for all domain names that belong to your Alibaba Cloud account.
   * 
   * @example
   * www.example1.com,www.example2.com
   */
  domainName?: string;
  /**
   * @remarks
   * The IDs of the metrics that you want to include in the report. Separate multiple IDs with commas (,). Valid values:
   * 
   * *   **1**: frequently requested URLs (ranked by the number of requests)
   * *   **3**: frequently requested URLs (ranked by the amount of network traffic)
   * *   **5**: frequently used Referer headers (ranked by the number of requests)
   * *   **7**: frequently used Referer headers (ranked by the amount of network traffic)
   * *   **9**: frequently requested URLs that are redirected to the origin (ranked by the number of requests)
   * *   **11**: frequently requested URLs that are redirected to the origin (ranked by the amount of network traffic)
   * *   **13**: top client IP addresses (ranked by the number of requests)
   * *   **15**: top client IP addresses (ranked by the amount of network traffic)
   * *   **17**: domain names ranked by the amount of network traffic
   * *   **19**: page views and unique visitors
   * *   **21**: regions from which requests are initiated
   * *   **23**: Internet service providers (ISPs)
   * 
   * This parameter is required.
   * 
   * @example
   * 1,3,5
   */
  reportIds?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      reportIds: 'ReportIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      reportIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

