// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayResponseBodyDataResultGatewayEntry extends $dara.Model {
  /**
   * @example
   * gw-*****5c2cd6144f4bfa1c32289f45ea8.cn-hangzhou.alicloudapi.com
   */
  entryDomain?: string;
  httpPorts?: number[];
  httpsPorts?: number[];
  ipList?: string[];
  /**
   * @example
   * PUB_NET
   */
  netType?: string;
  static names(): { [key: string]: string } {
    return {
      entryDomain: 'EntryDomain',
      httpPorts: 'HttpPorts',
      httpsPorts: 'HttpsPorts',
      ipList: 'IpList',
      netType: 'NetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryDomain: 'string',
      httpPorts: { 'type': 'array', 'itemType': 'number' },
      httpsPorts: { 'type': 'array', 'itemType': 'number' },
      ipList: { 'type': 'array', 'itemType': 'string' },
      netType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.httpPorts)) {
      $dara.Model.validateArray(this.httpPorts);
    }
    if(Array.isArray(this.httpsPorts)) {
      $dara.Model.validateArray(this.httpsPorts);
    }
    if(Array.isArray(this.ipList)) {
      $dara.Model.validateArray(this.ipList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

