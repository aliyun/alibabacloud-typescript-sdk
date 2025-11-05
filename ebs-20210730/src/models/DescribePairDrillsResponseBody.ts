// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePairDrillsResponseBodyDrills extends $dara.Model {
  /**
   * @remarks
   * The ID of the drill disk.
   * 
   * @example
   * d-xxx
   */
  drillDiskId?: string;
  /**
   * @remarks
   * The status of the drill disk. Valid values:
   * 
   * *   created
   * *   deleted
   * *   creating
   * *   deleting
   * 
   * >  This parameter can also display error code details if your drill disk fails to be created or deleted.
   * 
   * @example
   * created
   */
  drillDiskStatus?: string;
  /**
   * @remarks
   * The ID of the drill.
   * 
   * @example
   * drill-xxx
   */
  drillId?: string;
  /**
   * @remarks
   * The recovery point of the drill. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1690855931
   */
  recoverPoint?: number;
  /**
   * @remarks
   * The beginning time of the drill. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1690855888
   */
  startAt?: number;
  /**
   * @remarks
   * The status of the drill. Valid values:
   * 
   * *   execute_failed
   * *   executed
   * *   executing
   * *   clear_failed
   * *   clearing
   * 
   * @example
   * executing
   */
  status?: string;
  /**
   * @remarks
   * The error message that was displayed if the drill failed to be executed.
   * 
   * @example
   * PAIR_SYNCPOINT_NOT_FOUND
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      drillDiskId: 'DrillDiskId',
      drillDiskStatus: 'DrillDiskStatus',
      drillId: 'DrillId',
      recoverPoint: 'RecoverPoint',
      startAt: 'StartAt',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillDiskId: 'string',
      drillDiskStatus: 'string',
      drillId: 'string',
      recoverPoint: 'number',
      startAt: 'number',
      status: 'string',
      statusMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePairDrillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of disaster recovery drills that were performed on the replication pair.
   */
  drills?: DescribePairDrillsResponseBodyDrills[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
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
   * C46FF5A8-C5F0-4024-8262-B16B6392****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      drills: 'Drills',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drills: { 'type': 'array', 'itemType': DescribePairDrillsResponseBodyDrills },
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.drills)) {
      $dara.Model.validateArray(this.drills);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

