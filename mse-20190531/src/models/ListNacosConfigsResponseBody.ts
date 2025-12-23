// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNacosConfigsResponseBodyConfigurations extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * test
   */
  appName?: string;
  configTags?: string;
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * @example
   * log.yaml
   */
  dataId?: string;
  description?: string;
  /**
   * @remarks
   * The ID of the group.
   * 
   * @example
   * public
   */
  group?: string;
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 132****
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      configTags: 'ConfigTags',
      dataId: 'DataId',
      description: 'Description',
      group: 'Group',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      configTags: 'string',
      dataId: 'string',
      description: 'string',
      group: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNacosConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The configurations.
   */
  configurations?: ListNacosConfigsResponseBodyConfigurations[];
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
   * 4081087F-3429-5873-A1E7-D4B5479D0B84
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
   * The total number of returned instances.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      configurations: 'Configurations',
      errorCode: 'ErrorCode',
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
      code: 'number',
      configurations: { 'type': 'array', 'itemType': ListNacosConfigsResponseBodyConfigurations },
      errorCode: 'string',
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
    if(Array.isArray(this.configurations)) {
      $dara.Model.validateArray(this.configurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

