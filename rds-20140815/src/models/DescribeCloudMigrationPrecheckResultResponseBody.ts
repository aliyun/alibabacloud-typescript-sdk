// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudMigrationPrecheckResultResponseBodyItems extends $dara.Model {
  detail?: string;
  gmtCreated?: string;
  gmtModified?: string;
  sourceAccount?: string;
  sourceCategory?: string;
  sourceIpAddress?: string;
  sourcePassword?: string;
  sourcePort?: number;
  targetEip?: string;
  targetInstanceName?: string;
  taskId?: number;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      sourceAccount: 'SourceAccount',
      sourceCategory: 'SourceCategory',
      sourceIpAddress: 'SourceIpAddress',
      sourcePassword: 'SourcePassword',
      sourcePort: 'SourcePort',
      targetEip: 'TargetEip',
      targetInstanceName: 'TargetInstanceName',
      taskId: 'TaskId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      sourceAccount: 'string',
      sourceCategory: 'string',
      sourceIpAddress: 'string',
      sourcePassword: 'string',
      sourcePort: 'number',
      targetEip: 'string',
      targetInstanceName: 'string',
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

export class DescribeCloudMigrationPrecheckResultResponseBody extends $dara.Model {
  items?: DescribeCloudMigrationPrecheckResultResponseBodyItems[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeCloudMigrationPrecheckResultResponseBodyItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

