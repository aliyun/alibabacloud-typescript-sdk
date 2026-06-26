// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGatewayApikeyListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The API key in use.
   * 
   * @example
   * xxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * cg-xxxxxx
   */
  consumerGroupId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * c-mqveroemc***
   */
  consumerId?: string;
  /**
   * @remarks
   * The consumer tag.
   * 
   * @example
   * test
   */
  consumerTag?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-08-14T05:58:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The gateway instance ID.
   * 
   * @example
   * pg-xxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2024-10-29T09:31:37Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      consumerGroupId: 'ConsumerGroupId',
      consumerId: 'ConsumerId',
      consumerTag: 'ConsumerTag',
      createTime: 'CreateTime',
      gwClusterId: 'GwClusterId',
      modifyTime: 'ModifyTime',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      consumerGroupId: 'string',
      consumerId: 'string',
      consumerTag: 'string',
      createTime: 'string',
      gwClusterId: 'string',
      modifyTime: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayApikeyListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of consumer objects.
   */
  items?: DescribeGatewayApikeyListResponseBodyItems[];
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
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * * **30**
   * * **50**
   * * **100**
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * A0450B18-BBD4-5DF9-8E71-610F1A921CDE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
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
      totalPages: 'TotalPages',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeGatewayApikeyListResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalPages: 'number',
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

