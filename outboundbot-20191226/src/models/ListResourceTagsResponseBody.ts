// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTagsResponseBodyResourceTagsList extends $dara.Model {
  /**
   * @remarks
   * Tag key
   * 
   * @example
   * name
   */
  key?: string;
  /**
   * @remarks
   * Tag value
   * 
   * @example
   * xxx
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

export class ListResourceTagsResponseBodyResourceTags extends $dara.Model {
  /**
   * @remarks
   * List of resource tags
   * 
   * @example
   * []
   */
  list?: ListResourceTagsResponseBodyResourceTagsList[];
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of items
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListResourceTagsResponseBodyResourceTagsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Resource tag information
   * 
   * @example
   * {}
   */
  resourceTags?: ListResourceTagsResponseBodyResourceTags;
  /**
   * @remarks
   * Indicates whether the request succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resourceTags: 'ResourceTags',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resourceTags: ListResourceTagsResponseBodyResourceTags,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resourceTags && typeof (this.resourceTags as any).validate === 'function') {
      (this.resourceTags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

