// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSynDbsResponseBodySynDbs } from "./DescribeSynDbsResponseBodySynDbs";


export class DescribeSynDbsResponseBody extends $dara.Model {
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7655F5F9-1313-5ABA-8516-F6EB79605A5F
   */
  requestId?: string;
  /**
   * @remarks
   * The information about data synchronization between the ApsaraDB for ClickHouse cluster and an ApsaraDB RDS for MySQL instance.
   */
  synDbs?: DescribeSynDbsResponseBodySynDbs[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      synDbs: 'SynDbs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      synDbs: { 'type': 'array', 'itemType': DescribeSynDbsResponseBodySynDbs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.synDbs)) {
      $dara.Model.validateArray(this.synDbs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

