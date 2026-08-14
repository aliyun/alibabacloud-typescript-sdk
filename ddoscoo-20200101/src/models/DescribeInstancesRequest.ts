// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesRequest extends $dara.Model {
  edition?: number;
  enabled?: number;
  expireEndTime?: number;
  expireStartTime?: number;
  instanceIds?: string[];
  ip?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: string;
  remark?: string;
  resourceGroupId?: string;
  status?: number[];
  tag?: DescribeInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      enabled: 'Enabled',
      expireEndTime: 'ExpireEndTime',
      expireStartTime: 'ExpireStartTime',
      instanceIds: 'InstanceIds',
      ip: 'Ip',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'number',
      enabled: 'number',
      expireEndTime: 'number',
      expireStartTime: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      status: { 'type': 'array', 'itemType': 'number' },
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

