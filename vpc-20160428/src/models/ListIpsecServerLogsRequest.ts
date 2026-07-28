// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpsecServerLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the log. Only UNIX timestamps in seconds are supported. For example, 1671003744 represents 2022-12-14 15:42:24.
   * 
   * > If you specify **From**, you must also specify **To** or **MinutePeriod**.
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
   * The log period. Valid values: **1** to **10**. Unit: minutes.
   * 
   * > If you do not specify **From** or **To**, you must specify **MinutePeriod**.
   * 
   * @example
   * 10
   */
  minutePeriod?: number;
  /**
   * @remarks
   * The page number of the list. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: **1** to **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the IPsec server.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The end time of the log. Only UNIX timestamps in seconds are supported. For example, 1671004344 represents 2022-12-14 15:52:24.
   * 
   * > If you specify **To**, you must also specify **From** or **MinutePeriod**.
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

