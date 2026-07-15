// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCpfsAccessPointMountedClientsResponseBodyMountedClient extends $dara.Model {
  /**
   * @example
   * vsc
   */
  channelType?: string;
  /**
   * @example
   * vsc-8vb864o3ppwfvh****
   */
  clientId?: string;
  /**
   * @example
   * 219.145.34.210
   */
  clientIp?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      clientId: 'ClientId',
      clientIp: 'ClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      clientId: 'string',
      clientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCpfsAccessPointMountedClientsResponseBody extends $dara.Model {
  mountedClient?: DescribeCpfsAccessPointMountedClientsResponseBodyMountedClient[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      mountedClient: 'MountedClient',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountedClient: { 'type': 'array', 'itemType': DescribeCpfsAccessPointMountedClientsResponseBodyMountedClient },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mountedClient)) {
      $dara.Model.validateArray(this.mountedClient);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

