// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoCcWhitelistResponseBodyAutoCcWhitelist extends $dara.Model {
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 203.***.***.117
   */
  destIp?: string;
  /**
   * @remarks
   * The validity period of the IP address in the whitelist. Unit: seconds. **0** indicates that the IP address in the whitelist never expires.
   * 
   * @example
   * 0
   */
  endTime?: number;
  /**
   * @remarks
   * The IP addresses that is contained in the IP address whitelist.
   * 
   * @example
   * 2.2.2.2
   */
  sourceIp?: string;
  /**
   * @remarks
   * The mode of how an IP address is added to the whitelist. Valid values:
   * 
   * *   **manual**: manually added
   * *   **auto**: automatically added
   * 
   * @example
   * manual
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      destIp: 'DestIp',
      endTime: 'EndTime',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destIp: 'string',
      endTime: 'number',
      sourceIp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

