// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePortConnsListResponseBodyConnsList } from "./DescribePortConnsListResponseBodyConnsList";


export class DescribePortConnsListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the connections established over the port.
   */
  connsList?: DescribePortConnsListResponseBodyConnsList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 6D48AED0-41DB-5D9B-B484-3B6AAD312AD1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      connsList: 'ConnsList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connsList: { 'type': 'array', 'itemType': DescribePortConnsListResponseBodyConnsList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connsList)) {
      $dara.Model.validateArray(this.connsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

