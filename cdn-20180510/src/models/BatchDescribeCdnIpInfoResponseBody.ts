// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchDescribeCdnIpInfoResponseBodyIpInfoList } from "./BatchDescribeCdnIpInfoResponseBodyIpInfoList";


export class BatchDescribeCdnIpInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results about IP addresses returned.
   */
  ipInfoList?: BatchDescribeCdnIpInfoResponseBodyIpInfoList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 55ADD936-763F-5E1A-BF54-2EA3F6E94A52
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipInfoList: 'IpInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipInfoList: { 'type': 'array', 'itemType': BatchDescribeCdnIpInfoResponseBodyIpInfoList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipInfoList)) {
      $dara.Model.validateArray(this.ipInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

