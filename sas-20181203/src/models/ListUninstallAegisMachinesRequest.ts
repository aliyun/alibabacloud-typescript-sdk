// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUninstallAegisMachinesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the first page to display in the query results. Default value: **1**, which indicates that the query results are displayed from page 1.
   * 
   * @example
   * 4
   */
  currentPage?: number;
  /**
   * @remarks
   * The operating system.
   * > You can call the [DescribeCriteria](~~DescribeCriteria~~) operation to obtain supported operating systems from the **Values** of the item whose **Name** is **osType**.
   * 
   * @example
   * linux
   */
  os?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **5**, which indicates that 5 entries are displayed per page.
   * 
   * @example
   * 5
   */
  pageSize?: number;
  /**
   * @remarks
   * The region where the server resides.
   * 
   * > You can call the [DescribeCriteria](~~DescribeCriteria~~) operation to obtain supported regions from the **Values** of the item whose **Name** is **regionId**.
   * 
   * @example
   * cn-hangzhou
   */
  regionIdStr?: string;
  /**
   * @remarks
   * The region where the server resides.
   * 
   * > You can call the [DescribeCriteria](~~DescribeCriteria~~) operation to obtain supported regions from the **Values** of the item whose **Name** is **regionId**.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The asset information to query. You can set this parameter to the asset name or public IP address.
   * 
   * @example
   * 172.20.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 180.113.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The server vendor. Valid values:
   * 
   * - **0**: Alibaba Cloud asset
   * - **1**: non-cloud asset
   * - **2**: IDC asset
   * - **3**, **4**, **5**, **7**: third-party cloud asset
   * - **8**: lightweight asset.
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

