// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElbAvailableResourceInfoResponseBodyElbAvailableResourceInfo } from "./DescribeElbAvailableResourceInfoResponseBodyElbAvailableResourceInfo";


export class DescribeElbAvailableResourceInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about resources.
   */
  elbAvailableResourceInfo?: DescribeElbAvailableResourceInfoResponseBodyElbAvailableResourceInfo[];
  /**
   * @remarks
   * The ID of the request. This parameter is a common parameter. Each request has a unique ID. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 25AAD194-4A37-51CF-B1CA-1E86FDAC23A6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elbAvailableResourceInfo: 'ElbAvailableResourceInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elbAvailableResourceInfo: { 'type': 'array', 'itemType': DescribeElbAvailableResourceInfoResponseBodyElbAvailableResourceInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elbAvailableResourceInfo)) {
      $dara.Model.validateArray(this.elbAvailableResourceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

