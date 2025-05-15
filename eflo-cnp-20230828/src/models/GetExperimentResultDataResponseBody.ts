// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExperimentResultDataResponseBodyData } from "./GetExperimentResultDataResponseBodyData";


export class GetExperimentResultDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access Denied Details
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Data
   */
  data?: GetExperimentResultDataResponseBodyData[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * C1D34EC2-AB13-56F4-8322-F15AE563EA04
   */
  requestId?: string;
  /**
   * @remarks
   * Total Count of Queries
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
      data: { 'type': 'array', 'itemType': GetExperimentResultDataResponseBodyData },
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

