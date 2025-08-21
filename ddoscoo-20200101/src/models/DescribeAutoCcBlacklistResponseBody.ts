// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoCcBlacklistResponseBodyAutoCcBlacklist extends $dara.Model {
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 192.0.XX.XX
   */
  destIp?: string;
  /**
   * @remarks
   * The validity period of the IP address in the blacklist. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1584093569
   */
  endTime?: number;
  /**
   * @remarks
   * The IP address in the blacklist.
   * 
   * @example
   * 47.100.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The mode of how the IP address is added to the blacklist. Valid values:
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

export class DescribeAutoCcBlacklistResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the details of the IP addresses in the blacklist of the instance.
   */
  autoCcBlacklist?: DescribeAutoCcBlacklistResponseBodyAutoCcBlacklist[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * E78C8472-0B15-42D5-AF22-A32A78818AB2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned IP addresses in the blacklist.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      autoCcBlacklist: 'AutoCcBlacklist',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCcBlacklist: { 'type': 'array', 'itemType': DescribeAutoCcBlacklistResponseBodyAutoCcBlacklist },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.autoCcBlacklist)) {
      $dara.Model.validateArray(this.autoCcBlacklist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

