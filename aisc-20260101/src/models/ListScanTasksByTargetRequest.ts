// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScanTasksByTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The page number, starting from 1. Values less than 1 are normalized to 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100. Values greater than 100 are clamped to 100. Values less than 1 return HTTP status code 400.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Filters by detection intensity. If this parameter is not specified, no filtering by intensity is applied.
   * 
   * @example
   * 2
   */
  sampleLevel?: string;
  /**
   * @remarks
   * Filters by scan type. If this parameter is not specified, tasks of all scan types are returned.
   * 
   * @example
   * attack
   */
  scanType?: string;
  /**
   * @remarks
   * The unique identifier of the scan target. Only tasks under this target are queried. If the target does not exist or does not belong to the current tenant, HTTP status code 400 is returned.
   * 
   * This parameter is required.
   * 
   * @example
   * target-abc123def4567
   */
  targetId?: string;
  /**
   * @remarks
   * Filters by task status. If this parameter is not specified, tasks in all statuses are returned.
   * 
   * @example
   * completed
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sampleLevel: 'SampleLevel',
      scanType: 'ScanType',
      targetId: 'TargetId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      sampleLevel: 'string',
      scanType: 'string',
      targetId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

