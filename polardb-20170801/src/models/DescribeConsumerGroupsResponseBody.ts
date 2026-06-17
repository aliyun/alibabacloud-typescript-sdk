// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConsumerGroupsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The list of supported models.
   * 
   * @example
   * "[]"
   */
  allowedModels?: string;
  /**
   * @remarks
   * The ID of the consumer group.
   * 
   * @example
   * cg-xxxxxxxx
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The name of the consumer group.
   * 
   * @example
   * test
   */
  consumerGroupName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-01-28T09:56:03+08:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2026-01-04T16:09:29+08:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the consumer group is the default group. Valid values:
   * 
   * - **0**: No
   * 
   * - **1**: Yes
   * 
   * @example
   * 0
   */
  isDefault?: string;
  /**
   * @remarks
   * The nickname of the consumer group.
   * 
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
  /**
   * @remarks
   * A list of consumer groups.
   */
  items?: DescribeConsumerGroupsResponseBodyItems[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on the current page.
   * 
   * @example
   * 30
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The number of records returned per page. Valid values: 30, 50, and 100. Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24A1990B-4F6E-482B-B8CB-75C612******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
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

