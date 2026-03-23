// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudMigrationResultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  DBInstanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageNumber?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  resourceOwnerId?: number;
  sourceIpAddress?: string;
  sourcePort?: number;
  taskId?: number;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceName: 'DBInstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerId: 'ResourceOwnerId',
      sourceIpAddress: 'SourceIpAddress',
      sourcePort: 'SourcePort',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerId: 'number',
      sourceIpAddress: 'string',
      sourcePort: 'number',
      taskId: 'number',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

