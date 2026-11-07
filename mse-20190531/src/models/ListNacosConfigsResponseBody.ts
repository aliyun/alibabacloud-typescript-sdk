// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNacosConfigsResponseBodyConfigurations extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The tags of the configuration. Multiple tags are separated by commas.
   * 
   * @example
   * tag1,tag2
   */
  configTags?: string;
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * log.yaml
   */
  dataId?: string;
  /**
   * @remarks
   * The description of the configuration item.
   * 
   * @example
   * test-description
   */
  description?: string;
  /**
   * @remarks
   * The group ID.
   * 
   * @example
   * public
   */
  group?: string;
  /**
   * @remarks
   * The application ID.
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
   * The returned code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The list of configurations.
   */
  configurations?: ListNacosConfigsResponseBodyConfigurations[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Request processed successfully
   */
  message?: string;
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
   * The number of instances displayed on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4081087F-3429-5873-A1E7-D4B5479D0B84
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - `true`: The request is successful.
   * - `false`: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of instances.
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

