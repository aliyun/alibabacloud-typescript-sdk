// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptPublishHistoriesResponseBodyScriptPublishHistoriesList extends $dara.Model {
  /**
   * @remarks
   * The publish description.
   * 
   * @example
   * First release
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The publish time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1578965079000
   */
  publishTime?: number;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * 29420f65-8f1f-4009-b2f8-f4f7b5d59090
   */
  scriptId?: string;
  /**
   * @remarks
   * The script version.
   * 
   * @example
   * 1578965079000
   */
  scriptVersion?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      publishTime: 'PublishTime',
      scriptId: 'ScriptId',
      scriptVersion: 'ScriptVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      publishTime: 'number',
      scriptId: 'string',
      scriptVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptPublishHistoriesResponseBodyScriptPublishHistories extends $dara.Model {
  /**
   * @remarks
   * The data array.
   */
  list?: ListScriptPublishHistoriesResponseBodyScriptPublishHistoriesList[];
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
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
      list: { 'type': 'array', 'itemType': ListScriptPublishHistoriesResponseBodyScriptPublishHistoriesList },
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

export class ListScriptPublishHistoriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The API message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * The publish history list.
   */
  scriptPublishHistories?: ListScriptPublishHistoriesResponseBodyScriptPublishHistories;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      scriptPublishHistories: 'ScriptPublishHistories',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scriptPublishHistories: ListScriptPublishHistoriesResponseBodyScriptPublishHistories,
      success: 'boolean',
    };
  }

  validate() {
    if(this.scriptPublishHistories && typeof (this.scriptPublishHistories as any).validate === 'function') {
      (this.scriptPublishHistories as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

