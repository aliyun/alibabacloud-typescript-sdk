// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataDownloadURLResponseBodyDataServerList extends $dara.Model {
  /**
   * @remarks
   * The host address of the file server.
   * 
   * @example
   * 1.1.1.1:8080
   */
  host?: string;
  /**
   * @remarks
   * The ID of the ENS edge node.
   * 
   * @example
   * cn-chenzhou-5
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'Host',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataDownloadURLResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The expiration time of the download URL in UTC.
   * 
   * @example
   * 2021-12-10T03:36:27Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The list of file servers.
   */
  serverList?: DescribeDataDownloadURLResponseBodyDataServerList[];
  /**
   * @remarks
   * The download URL of the file.
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

export class DescribeDataDownloadURLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The list of download URLs for data files.
   */
  data?: DescribeDataDownloadURLResponseBodyData;
  /**
   * @remarks
   * The response message. A value of success indicates that the request was successful.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeDataDownloadURLResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

