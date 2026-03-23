// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancePerformanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  key?: string;
  nodeId?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      endTime: 'EndTime',
      key: 'Key',
      nodeId: 'NodeId',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      endTime: 'string',
      key: 'string',
      nodeId: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

