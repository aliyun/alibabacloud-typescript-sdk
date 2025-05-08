// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResources } from "./DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResources";


export class DescribeEnsRegionIdResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data. For more information, see EnsRegionIdResources in sample JSON responses.
   */
  ensRegionIdResources?: DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResources;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 476600B1-C9E2-4245-A26F-DC7EA8071425
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of queried nodes.
   * 
   * @example
   * 58
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ensRegionIdResources: 'EnsRegionIdResources',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionIdResources: DescribeEnsRegionIdResourceResponseBodyEnsRegionIdResources,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ensRegionIdResources && typeof (this.ensRegionIdResources as any).validate === 'function') {
      (this.ensRegionIdResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

