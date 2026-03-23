// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Instance ID. You can obtain it by calling DescribeDBInstances.
   * 
   * This parameter is required.
   * 
   * @example
   * rm-****
   */
  DBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Region ID. You can obtain it by calling DescribeRegions.
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
   * 159****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
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

