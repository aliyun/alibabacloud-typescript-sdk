// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBatchConsumerResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The complete API key. This value is returned only in the current response.
   * 
   * @example
   * xxxxxxxx
   */
  apiKey?: string;
  /**
   * @remarks
   * The API key status. Default value: Active.
   * 
   * @example
   * Active
   */
  apiStatus?: string;
  /**
   * @remarks
   * The ID of the user group.
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
   * The gateway instance ID.
   * 
   * @example
   * pg-xxxxxxxxxx
   */
  gwClusterId?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The consumer status. Default value: Enabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      apiStatus: 'ApiStatus',
      consumerGroupId: 'ConsumerGroupId',
      consumerId: 'ConsumerId',
      consumerTag: 'ConsumerTag',
      gwClusterId: 'GwClusterId',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      apiStatus: 'string',
      consumerGroupId: 'string',
      consumerId: 'string',
      consumerTag: 'string',
      gwClusterId: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchConsumerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of consumer objects.
   */
  items?: CreateBatchConsumerResponseBodyItems[];
  /**
   * @remarks
   * The page number. Default value: 1.
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
   * The number of records per page. Valid values:
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
   * A7E6A8FD-C50B-46B2-BA85-D8B8D3******
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
   * 2
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
      items: { 'type': 'array', 'itemType': CreateBatchConsumerResponseBodyItems },
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

