// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetExperimentPlanResponseBodyData } from "./GetExperimentPlanResponseBodyData";


export class GetExperimentPlanResponseBody extends $dara.Model {
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
  data?: GetExperimentPlanResponseBodyData;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 6DBAC169-93D1-5DCD-8109-30FB623B3197
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
      data: GetExperimentPlanResponseBodyData,
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

