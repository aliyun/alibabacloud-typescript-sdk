// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataDownloadURLResponseBodyDataServerList } from "./DescribeDataDownloadUrlresponseBodyDataServerList";


export class DescribeDataDownloadURLResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the data file expires. The time is displayed in UTC.
   * 
   * @example
   * 2021-12-10T03:36:27Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The file servers.
   */
  serverList?: DescribeDataDownloadURLResponseBodyDataServerList[];
  /**
   * @remarks
   * The download URL of the data file.
   * 
   * @example
   * /file/1450088842124331/97a32f2a-aa2c-436a-b19c-05b20d258618/f0313053530fc727f81b7d03fad93cd2/e4c2e8edac362acab7123654b9e73432?ak=edgepaas-innerapi-daily&ts=1611229454&sign=Yycbax%2F4OsTgm6BLoxR6lPs5gKE%3D
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      serverList: 'ServerList',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'string',
      serverList: { 'type': 'array', 'itemType': DescribeDataDownloadURLResponseBodyDataServerList },
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.serverList)) {
      $dara.Model.validateArray(this.serverList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

