// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoCcWhitelistResponseBodyAutoCcWhitelist } from "./DescribeAutoCcWhitelistResponseBodyAutoCcWhitelist";


export class DescribeAutoCcWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of details of the IP address in the whitelist of the instance.
   */
  autoCcWhitelist?: DescribeAutoCcWhitelistResponseBodyAutoCcWhitelist[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F09D085E-5E0F-4FF2-B32E-F4A644049162
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned IP addresses in the whitelist.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoCcWhitelist: 'AutoCcWhitelist',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCcWhitelist: { 'type': 'array', 'itemType': DescribeAutoCcWhitelistResponseBodyAutoCcWhitelist },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.autoCcWhitelist)) {
      $dara.Model.validateArray(this.autoCcWhitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

