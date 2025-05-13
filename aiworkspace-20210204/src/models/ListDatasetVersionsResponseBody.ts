// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DatasetVersion } from "./DatasetVersion";


export class ListDatasetVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dataset versions.
   */
  datasetVersions?: DatasetVersion[];
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
   * The ID of the request.
   * 
   * @example
   * 0648C5BB-68D0-54D2-92A5-607135B8806B
   */
  requestId?: string;
  /**
   * @remarks
   * The number of dataset versions that meet the filter conditions.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasetVersions: 'DatasetVersions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetVersions: { 'type': 'array', 'itemType': DatasetVersion },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasetVersions)) {
      $dara.Model.validateArray(this.datasetVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

