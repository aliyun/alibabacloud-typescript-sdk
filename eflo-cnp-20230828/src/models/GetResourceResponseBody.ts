// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceResponseBodyData } from "./GetResourceResponseBodyData";


export class GetResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied information
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Data
   */
  data?: GetResourceResponseBodyData;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 25859897-35C8-5015-8365-7A3CE52F4854
   */
  requestId?: string;
  /**
   * @remarks
   * Total count of the query
   * 
   * @example
   * 0
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
      data: GetResourceResponseBodyData,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

