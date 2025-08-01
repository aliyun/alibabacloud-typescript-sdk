// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNacosHistoryConfigsResponseBodyHistoryItems extends $dara.Model {
  /**
   * @remarks
   * The application tag.
   * 
   * @example
   * gateway
   */
  appName?: string;
  /**
   * @remarks
   * The ID of the data.
   * 
   * @example
   * test.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * The name of the group.
   * 
   * @example
   * default
   */
  group?: string;
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * @example
   * 23fdsf
   */
  id?: number;
  /**
   * @remarks
   * The timestamp when the configuration was last modified.
   * 
   * @example
   * 16434400
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The format of the configuration file.
   * 
   * @example
   * yaml
   */
  opType?: string;
  srcUser?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      dataId: 'DataId',
      group: 'Group',
      id: 'Id',
      lastModifiedTime: 'LastModifiedTime',
      opType: 'OpType',
      srcUser: 'SrcUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      dataId: 'string',
      group: 'string',
      id: 'number',
      lastModifiedTime: 'number',
      opType: 'string',
      srcUser: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosHistoryConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The configuration items.
   */
  historyItems?: ListNacosHistoryConfigsResponseBodyHistoryItems[];
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * The request was successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 53338ECA-F880-54D8-A9B3-5606355A1B89
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      historyItems: 'HistoryItems',
      httpCode: 'HttpCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      historyItems: { 'type': 'array', 'itemType': ListNacosHistoryConfigsResponseBodyHistoryItems },
      httpCode: 'string',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.historyItems)) {
      $dara.Model.validateArray(this.historyItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

