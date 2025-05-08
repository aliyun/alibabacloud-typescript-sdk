// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryGovernanceKubernetesClusterResponseBodyDataResult } from "./QueryGovernanceKubernetesClusterResponseBodyDataResult";


export class QueryGovernanceKubernetesClusterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The details of the data.
   */
  result?: QueryGovernanceKubernetesClusterResponseBodyDataResult[];
  /**
   * @remarks
   * The total number of clusters.
   * 
   * @example
   * 3
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      result: 'Result',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      result: { 'type': 'array', 'itemType': QueryGovernanceKubernetesClusterResponseBodyDataResult },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

