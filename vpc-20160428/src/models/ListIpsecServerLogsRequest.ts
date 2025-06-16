// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpsecServerLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The beginning of the time range to query. The value must be a UNIX timestamp. For example, 1671003744 specifies 15:42:24 (UTC+8) on December 14, 2022.
   * 
   * >  If you specify **From**, you must also specify **To** or **MinutePeriod**.
   * 
   * @example
   * 1671003744
   */
  from?: number;
  /**
   * @remarks
   * The ID of the IPsec server.
   * 
   * This parameter is required.
   * 
   * @example
   * iss-2zei2n5q5zhirfh73****
   */
  ipsecServerId?: string;
  /**
   * @remarks
   * The interval at which log data is queried. Valid values: **1** to **10**. Unit: minutes.
   * 
   * >  If both **From** and **To** are not specified, you must specify **MinutePeriod**.
   * 
   * @example
   * 10
   */
  minutePeriod?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the IPsec server is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The end of the time range to query. The value must be a unix timestamp. For example, 1671004344 specifies 15:52:24 (UTC+8) on December 14, 2022.
   * 
   * >  If you specify **To**, you must also specify **From** or **MinutePeriod**.
   * 
   * @example
   * 1671004344
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      ipsecServerId: 'IpsecServerId',
      minutePeriod: 'MinutePeriod',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      ipsecServerId: 'string',
      minutePeriod: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

