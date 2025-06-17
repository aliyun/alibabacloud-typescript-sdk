// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnFullDomainsBlockIPHistoryResponseBodyIPBlockInfo } from "./DescribeCdnFullDomainsBlockIphistoryResponseBodyIpblockInfo";


export class DescribeCdnFullDomainsBlockIPHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * The value of Code is not 0 in the following scenarios:
   * 
   * *   The format of the IP address is invalid.
   * *   The format of the time is invalid.
   * *   Other abnormal scenarios.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The description of the status returned.
   * 
   * @example
   * OK
   */
  description?: string;
  /**
   * @remarks
   * The result of the operation.
   */
  IPBlockInfo?: DescribeCdnFullDomainsBlockIPHistoryResponseBodyIPBlockInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BCD7D917-76F1-442F-BB75-C810DE34C761
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      IPBlockInfo: 'IPBlockInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      description: 'string',
      IPBlockInfo: { 'type': 'array', 'itemType': DescribeCdnFullDomainsBlockIPHistoryResponseBodyIPBlockInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.IPBlockInfo)) {
      $dara.Model.validateArray(this.IPBlockInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

