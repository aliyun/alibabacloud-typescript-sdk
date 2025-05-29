// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceDiagnosisSummaryResponseBodyMasterStatusInfo extends $dara.Model {
  /**
   * @remarks
   * The number of abnormal nodes.
   * 
   * @example
   * 0
   */
  exceptionNodeNum?: number;
  /**
   * @remarks
   * The number of normal nodes.
   * 
   * @example
   * 2
   */
  normalNodeNum?: number;
  /**
   * @remarks
   * The number of nodes whose roles are reversed.
   * 
   * @example
   * 0
   */
  notPreferredNodeNum?: number;
  /**
   * @remarks
   * The number of unsynchronized nodes.
   * 
   * @example
   * 0
   */
  notSyncingNodeNum?: number;
  /**
   * @remarks
   * The number of nodes whose roles are normal.
   * 
   * @example
   * 2
   */
  preferredNodeNum?: number;
  /**
   * @remarks
   * The number of synchronized nodes.
   * 
   * @example
   * 1
   */
  syncedNodeNum?: number;
  static names(): { [key: string]: string } {
    return {
      exceptionNodeNum: 'ExceptionNodeNum',
      normalNodeNum: 'NormalNodeNum',
      notPreferredNodeNum: 'NotPreferredNodeNum',
      notSyncingNodeNum: 'NotSyncingNodeNum',
      preferredNodeNum: 'PreferredNodeNum',
      syncedNodeNum: 'SyncedNodeNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionNodeNum: 'number',
      normalNodeNum: 'number',
      notPreferredNodeNum: 'number',
      notSyncingNodeNum: 'number',
      preferredNodeNum: 'number',
      syncedNodeNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

