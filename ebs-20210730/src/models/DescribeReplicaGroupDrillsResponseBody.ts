// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReplicaGroupDrillsResponseBodyDrillsPairsInfo extends $dara.Model {
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
   * The ID of the replication pair.
   * 
   * @example
   * pair-xxx
   */
  pairId?: string;
  static names(): { [key: string]: string } {
    return {
      drillDiskId: 'DrillDiskId',
      drillDiskStatus: 'DrillDiskStatus',
      pairId: 'PairId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillDiskId: 'string',
      drillDiskStatus: 'string',
      pairId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaGroupDrillsResponseBodyDrills extends $dara.Model {
  /**
   * @remarks
   * The ID of the drill.
   * 
   * @example
   * pg-drill-xxx
   */
  drillId?: string;
  /**
   * @remarks
   * The ID of the replication pair-consistent group.
   * 
   * @example
   * pg-xxx
   */
  groupId?: string;
  /**
   * @remarks
   * The information of replication pairs.
   */
  pairsInfo?: DescribeReplicaGroupDrillsResponseBodyDrillsPairsInfo[];
  /**
   * @remarks
   * The recovery point of the drill. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1691114995
   */
  recoverPoint?: number;
  /**
   * @remarks
   * The beginning time of the drill. The value of this parameter is a timestamp. Unit: seconds.
   * 
   * @example
   * 1649750977
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
   * executed
   */
  status?: string;
  /**
   * @remarks
   * The error message that appears if the drill fails to be executed.
   * 
   * @example
   * GROUP_SYNCPOINT_NOT_FOUND
   */
  statusMessage?: string;
  static names(): { [key: string]: string } {
    return {
      drillId: 'DrillId',
      groupId: 'GroupId',
      pairsInfo: 'PairsInfo',
      recoverPoint: 'RecoverPoint',
      startAt: 'StartAt',
      status: 'Status',
      statusMessage: 'StatusMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      drillId: 'string',
      groupId: 'string',
      pairsInfo: { 'type': 'array', 'itemType': DescribeReplicaGroupDrillsResponseBodyDrillsPairsInfo },
      recoverPoint: 'number',
      startAt: 'number',
      status: 'string',
      statusMessage: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pairsInfo)) {
      $dara.Model.validateArray(this.pairsInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReplicaGroupDrillsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of disaster recovery drills that were performed on the replication pair-consistent group.
   */
  drills?: DescribeReplicaGroupDrillsResponseBodyDrills[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.
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
   * C123F94F-4E38-19AE-942A-A8D6F44F****
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
      drills: { 'type': 'array', 'itemType': DescribeReplicaGroupDrillsResponseBodyDrills },
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

