// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPublicIpAddressPoolCidrBlocksResponseBodyPublicIpPoolCidrBlockList } from "./ListPublicIpAddressPoolCidrBlocksResponseBodyPublicIpPoolCidrBlockList";


export class ListPublicIpAddressPoolCidrBlocksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If **NextToken** was not returned, it indicates that no additional results exist.
   * *   If **NextToken** is returned, the value is the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries returned.
   */
  publicIpPoolCidrBlockList?: ListPublicIpAddressPoolCidrBlocksResponseBodyPublicIpPoolCidrBlockList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The maximum number of entries returned. Valid values: **10** to **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      publicIpPoolCidrBlockList: 'PublicIpPoolCidrBlockList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      publicIpPoolCidrBlockList: { 'type': 'array', 'itemType': ListPublicIpAddressPoolCidrBlocksResponseBodyPublicIpPoolCidrBlockList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.publicIpPoolCidrBlockList)) {
      $dara.Model.validateArray(this.publicIpPoolCidrBlockList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

