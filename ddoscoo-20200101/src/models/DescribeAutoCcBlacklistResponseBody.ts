// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAutoCcBlacklistResponseBodyAutoCcBlacklist } from "./DescribeAutoCcBlacklistResponseBodyAutoCcBlacklist";


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

