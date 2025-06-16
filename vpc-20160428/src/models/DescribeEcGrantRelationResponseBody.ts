// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEcGrantRelationResponseBodyEcGrantRelations } from "./DescribeEcGrantRelationResponseBodyEcGrantRelations";


export class DescribeEcGrantRelationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The query results.
   */
  ecGrantRelations?: DescribeEcGrantRelationResponseBodyEcGrantRelations[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
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
   * E6E90F6B-2B41-5AAF-ABEB-236ADBAAD91D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ecGrantRelations: 'EcGrantRelations',
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ecGrantRelations: { 'type': 'array', 'itemType': DescribeEcGrantRelationResponseBodyEcGrantRelations },
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ecGrantRelations)) {
      $dara.Model.validateArray(this.ecGrantRelations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

