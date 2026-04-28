// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConsumerGroupsResponseBodyItems extends $dara.Model {
  /**
   * @example
   * "[]"
   */
  allowedModels?: string;
  /**
   * @example
   * cg-xxxxxxxx
   */
  consumerGroupId?: string;
  /**
   * @example
   * test
   */
  consumerGroupName?: string;
  /**
   * @example
   * 2026-01-28T09:56:03+08:00
   */
  gmtCreated?: string;
  /**
   * @example
   * 2026-01-04T16:09:29+08:00
   */
  gmtModified?: string;
  /**
   * @example
   * 0
   */
  isDefault?: string;
  /**
   * @example
   * test
   */
  nickName?: string;
  static names(): { [key: string]: string } {
    return {
      allowedModels: 'AllowedModels',
      consumerGroupId: 'ConsumerGroupId',
      consumerGroupName: 'ConsumerGroupName',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      isDefault: 'IsDefault',
      nickName: 'NickName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowedModels: 'string',
      consumerGroupId: 'string',
      consumerGroupName: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      isDefault: 'string',
      nickName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConsumerGroupsResponseBody extends $dara.Model {
  items?: DescribeConsumerGroupsResponseBodyItems[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeConsumerGroupsResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
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

