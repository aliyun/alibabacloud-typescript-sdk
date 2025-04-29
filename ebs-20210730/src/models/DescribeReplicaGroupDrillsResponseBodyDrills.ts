// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeReplicaGroupDrillsResponseBodyDrillsPairsInfo } from "./DescribeReplicaGroupDrillsResponseBodyDrillsPairsInfo";


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

