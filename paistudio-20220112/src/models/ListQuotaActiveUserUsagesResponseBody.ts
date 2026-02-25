// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuotaUser } from "./QuotaUser";


export class ListQuotaActiveUserUsagesResponseBody extends $dara.Model {
  quotaUserUsage?: QuotaUser[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E7C42CC7-2E85-508A-84F4-923B605FD10F
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      quotaUserUsage: 'QuotaUserUsage',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaUserUsage: { 'type': 'array', 'itemType': QuotaUser },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.quotaUserUsage)) {
      $dara.Model.validateArray(this.quotaUserUsage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

