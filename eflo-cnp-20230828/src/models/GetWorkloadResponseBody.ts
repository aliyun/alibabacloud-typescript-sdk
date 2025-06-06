// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkloadResponseBodyData } from "./GetWorkloadResponseBodyData";


export class GetWorkloadResponseBody extends $dara.Model {
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
  data?: GetWorkloadResponseBodyData;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * E67E2E4C-2B47-5C55-AA17-1D771E070AEF
   */
  requestId?: string;
  /**
   * @remarks
   * total
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
      data: GetWorkloadResponseBodyData,
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

