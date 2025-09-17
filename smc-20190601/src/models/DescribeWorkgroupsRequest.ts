// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWorkgroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the workgroup. You cannot specify an empty string as a tag key. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the workgroup. The tag value can be up to 128 characters in length, cannot be an empty string, and cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class DescribeWorkgroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the workgroup.
   * 
   * @example
   * test
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Minimum value: 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The state of the workgroup. Valid values:
   * 
   * *   NotStarted
   * *   InProgress
   * *   Cutover
   * *   Completed
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * The tags of the reserved instance. You can specify up to 20 tags. If you specify multiple tags, the tag keys cannot be duplicated.
   */
  tag?: DescribeWorkgroupsRequestTag[];
  /**
   * @remarks
   * The workgroup IDs. You can specify up to 50 workgroup IDs.
   */
  workgroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      status: 'Status',
      tag: 'Tag',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      status: 'string',
      tag: { 'type': 'array', 'itemType': DescribeWorkgroupsRequestTag },
      workgroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.workgroupId)) {
      $dara.Model.validateArray(this.workgroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

