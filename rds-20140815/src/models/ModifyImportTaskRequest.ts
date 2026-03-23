// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID. You can obtain it by invoking DescribeDBInstances.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-2ze63v2p3o3k****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * Valid values:
   * 
   * 
   * - RETRY_IMPORT: retry import  
   * - CANCEL: cancel job
   * 
   * This parameter is required.
   * 
   * @example
   * CANCEL
   */
  operation?: string;
  ownerId?: number;
  /**
   * @remarks
   * Destination region ID. You can view region IDs by invoking the DescribeRegions API.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      operation: 'Operation',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      operation: 'string',
      ownerId: 'number',
      regionId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

