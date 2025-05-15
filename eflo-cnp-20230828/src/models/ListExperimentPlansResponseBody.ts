// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExperimentPlansResponseBodyData } from "./ListExperimentPlansResponseBodyData";


export class ListExperimentPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access Denied Detail
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Data
   */
  data?: ListExperimentPlansResponseBodyData[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * FA9F1DE7-103B-5C18-AE9E-EB2BFF11C685
   */
  requestId?: string;
  /**
   * @remarks
   * Total
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
      data: { 'type': 'array', 'itemType': ListExperimentPlansResponseBodyData },
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

