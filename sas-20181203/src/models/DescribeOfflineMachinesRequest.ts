// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOfflineMachinesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 4
   */
  currentPage?: number;
  /**
   * @remarks
   * The operating system of the server.
   * 
   * >  The value of this parameter is the value of the Values parameter that is returned by calling the [DescribeCriteria](~~DescribeCriteria~~) operation. If the value of the **Name** parameter in the response is **osType**, the value of the **Values** parameter indicates an operating system.
   * 
   * @example
   * linux
   */
  os?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **5**.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The region in which the server resides.
   * 
   * >  The value of this parameter is the value of the Values parameter that is returned by calling the [DescribeCriteria](~~DescribeCriteria~~) operation. If the value of the **Name** parameter in the response is **regionId**, the value of the **Values** parameter indicates a region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionIdStr?: string;
  /**
   * @remarks
   * The region in which the server resides.
   * 
   * >  The value of this parameter is the value of the Values parameter that is returned by calling the [DescribeCriteria](~~DescribeCriteria~~) operation. If the value of the **Name** parameter in the response is **regionId**, the value of the **Values** parameter indicates a region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The information about the server that you want to query. The value can be the name or the public IP address of the server.
   * 
   * @example
   * 172.20.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 180.113.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The source of the server. Valid values:
   * 
   * *   **0**: an asset provided by Alibaba Cloud.
   * *   **1**: a third-party cloud server
   * *   **2**: a server in a data center
   * *   **3**, **4**, **5**, and **7**: other cloud asset
   * *   **8**: a lightweight asset
   * 
   * @example
   * 0
   */
  vendor?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      os: 'Os',
      pageSize: 'PageSize',
      regionIdStr: 'RegionIdStr',
      regionNo: 'RegionNo',
      remark: 'Remark',
      sourceIp: 'SourceIp',
      vendor: 'Vendor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      os: 'string',
      pageSize: 'number',
      regionIdStr: 'string',
      regionNo: 'string',
      remark: 'string',
      sourceIp: 'string',
      vendor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

