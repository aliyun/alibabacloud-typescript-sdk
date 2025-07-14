// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopOversoldGroupResponseBodyData extends $dara.Model {
  concurrenceCount?: number;
  curConcurrenceCount?: number;
  dataDiskSize?: number;
  description?: string;
  desktopType?: string;
  directoryId?: string;
  expireTime?: string;
  idleDisconnectDuration?: string;
  imageId?: string;
  keepDuration?: string;
  name?: string;
  oversoldGroupId?: string;
  oversoldUserCount?: number;
  oversoldWarn?: number;
  policyGroupId?: string;
  saleStatus?: string;
  status?: string;
  stopDuration?: number;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      concurrenceCount: 'ConcurrenceCount',
      curConcurrenceCount: 'CurConcurrenceCount',
      dataDiskSize: 'DataDiskSize',
      description: 'Description',
      desktopType: 'DesktopType',
      directoryId: 'DirectoryId',
      expireTime: 'ExpireTime',
      idleDisconnectDuration: 'IdleDisconnectDuration',
      imageId: 'ImageId',
      keepDuration: 'KeepDuration',
      name: 'Name',
      oversoldGroupId: 'OversoldGroupId',
      oversoldUserCount: 'OversoldUserCount',
      oversoldWarn: 'OversoldWarn',
      policyGroupId: 'PolicyGroupId',
      saleStatus: 'SaleStatus',
      status: 'Status',
      stopDuration: 'StopDuration',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrenceCount: 'number',
      curConcurrenceCount: 'number',
      dataDiskSize: 'number',
      description: 'string',
      desktopType: 'string',
      directoryId: 'string',
      expireTime: 'string',
      idleDisconnectDuration: 'string',
      imageId: 'string',
      keepDuration: 'string',
      name: 'string',
      oversoldGroupId: 'string',
      oversoldUserCount: 'number',
      oversoldWarn: 'number',
      policyGroupId: 'string',
      saleStatus: 'string',
      status: 'string',
      stopDuration: 'number',
      systemDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDesktopOversoldGroupResponseBody extends $dara.Model {
  count?: number;
  data?: DescribeDesktopOversoldGroupResponseBodyData[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': DescribeDesktopOversoldGroupResponseBodyData },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

