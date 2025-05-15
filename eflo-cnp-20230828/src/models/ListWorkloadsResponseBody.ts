// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListWorkloadsResponseBodyData } from "./ListWorkloadsResponseBodyData";


export class ListWorkloadsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access Denied Information
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Data
   */
  data?: ListWorkloadsResponseBodyData[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 4AC08332-436C-57A3-9FBA-26772B1A9901
   */
  requestId?: string;
  /**
   * @remarks
   * total
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': ListWorkloadsResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

