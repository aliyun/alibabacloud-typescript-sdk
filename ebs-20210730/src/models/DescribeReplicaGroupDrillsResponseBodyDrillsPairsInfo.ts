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

