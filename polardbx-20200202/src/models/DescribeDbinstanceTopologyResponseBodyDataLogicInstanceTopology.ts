// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyHistoryItems } from "./DescribeDbinstanceTopologyResponseBodyDataLogicInstanceTopologyHistoryItems";
import { DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItems } from "./DescribeDbinstanceTopologyResponseBodyDataLogicInstanceTopologyItems";


export class DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopology extends $dara.Model {
  /**
   * @example
   * lvs
   */
  DBInstanceConnType?: string;
  /**
   * @example
   * 2021-10-21T10:30:45Z 04:00:00
   */
  DBInstanceCreateTime?: string;
  /**
   * @example
   * pxc-sprcym7g7wj7k
   */
  DBInstanceDescription?: string;
  /**
   * @example
   * 304726047
   */
  DBInstanceId?: string;
  /**
   * @example
   * pxc-sprcym7g7w****
   */
  DBInstanceName?: string;
  /**
   * @example
   * 8
   */
  DBInstanceStatus?: number;
  /**
   * @example
   * TDE_MODIFYING
   */
  DBInstanceStatusDescription?: string;
  /**
   * @example
   * 1
   */
  DBInstanceStorage?: number;
  /**
   * @example
   * polarx
   */
  engine?: string;
  /**
   * @example
   * 2.0
   */
  engineVersion?: string;
  historyItems?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyHistoryItems[];
  items?: DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItems[];
  /**
   * @example
   * 0
   */
  lockMode?: number;
  lockReason?: string;
  /**
   * @example
   * 05:00:00
   */
  maintainEndTime?: string;
  /**
   * @example
   * 04:00:00
   */
  maintainStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceConnType: 'DBInstanceConnType',
      DBInstanceCreateTime: 'DBInstanceCreateTime',
      DBInstanceDescription: 'DBInstanceDescription',
      DBInstanceId: 'DBInstanceId',
      DBInstanceName: 'DBInstanceName',
      DBInstanceStatus: 'DBInstanceStatus',
      DBInstanceStatusDescription: 'DBInstanceStatusDescription',
      DBInstanceStorage: 'DBInstanceStorage',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      historyItems: 'HistoryItems',
      items: 'Items',
      lockMode: 'LockMode',
      lockReason: 'LockReason',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceConnType: 'string',
      DBInstanceCreateTime: 'string',
      DBInstanceDescription: 'string',
      DBInstanceId: 'string',
      DBInstanceName: 'string',
      DBInstanceStatus: 'number',
      DBInstanceStatusDescription: 'string',
      DBInstanceStorage: 'number',
      engine: 'string',
      engineVersion: 'string',
      historyItems: { 'type': 'array', 'itemType': DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyHistoryItems },
      items: { 'type': 'array', 'itemType': DescribeDBInstanceTopologyResponseBodyDataLogicInstanceTopologyItems },
      lockMode: 'number',
      lockReason: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.historyItems)) {
      $dara.Model.validateArray(this.historyItems);
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

