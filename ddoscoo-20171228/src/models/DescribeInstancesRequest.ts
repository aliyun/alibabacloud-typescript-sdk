// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesRequestTag extends $dara.Model {
  /**
   * @example
   * key
   */
  key?: string;
  /**
   * @example
   * value
   */
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
  /**
   * @example
   * 9
   */
  edition?: number;
  /**
   * @example
   * 1
   */
  enabled?: number;
  /**
   * @example
   * 1578931200000
   */
  expireEndTime?: number;
  /**
   * @example
   * 1578931200000
   */
  expireStartTime?: number;
  /**
   * @example
   * ["ddoscoo-cn-XXXXX"]
   */
  instanceIds?: string;
  /**
   * @example
   * 1.1.1.1
   */
  ip?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * testRemark
   */
  remark?: string;
  /**
   * @example
   * xx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  /**
   * @example
   * 1
   */
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
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      remark: 'Remark',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
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
      instanceIds: 'string',
      ip: 'string',
      pageNo: 'string',
      pageSize: 'string',
      remark: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
      status: { 'type': 'array', 'itemType': 'number' },
      tag: { 'type': 'array', 'itemType': DescribeInstancesRequestTag },
    };
  }

  validate() {
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

