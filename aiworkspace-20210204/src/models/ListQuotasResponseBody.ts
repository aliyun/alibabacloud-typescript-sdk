// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQuotasResponseBodyQuotas } from "./ListQuotasResponseBodyQuotas";


export class ListQuotasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned quotas.
   */
  quotas?: ListQuotasResponseBodyQuotas[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of quotas that meet the filter conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      quotas: 'Quotas',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotas: { 'type': 'array', 'itemType': ListQuotasResponseBodyQuotas },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

