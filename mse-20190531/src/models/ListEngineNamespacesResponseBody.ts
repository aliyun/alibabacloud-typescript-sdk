// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEngineNamespacesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The quota value.
   * 
   * @example
   * 1
   */
  configCount?: number;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * DEFAULT
   */
  namespace?: string;
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * mytest
   */
  namespaceDesc?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * public
   */
  namespaceShowName?: string;
  /**
   * @remarks
   * The quota.
   * 
   * @example
   * 200
   */
  quota?: number;
  /**
   * @remarks
   * The number of active services.
   * 
   * @example
   * 3
   */
  serviceCount?: string;
  /**
   * @remarks
   * The source from which the namespace was created.
   * 
   * @example
   * mse
   */
  sourceType?: string;
  /**
   * @remarks
   * The type of the namespace. Valid values:
   * 
   * *   `0`: global configuration
   * *   `1`: default namespace
   * *   `2`: custom namespace
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      configCount: 'ConfigCount',
      namespace: 'Namespace',
      namespaceDesc: 'NamespaceDesc',
      namespaceShowName: 'NamespaceShowName',
      quota: 'Quota',
      serviceCount: 'ServiceCount',
      sourceType: 'SourceType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configCount: 'number',
      namespace: 'string',
      namespaceDesc: 'string',
      namespaceShowName: 'string',
      quota: 'number',
      serviceCount: 'string',
      sourceType: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEngineNamespacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the data.
   */
  data?: ListEngineNamespacesResponseBodyData[];
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
   * The HTTP status code.
   * 
   * @example
   * 202
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
   * The number of the returned page.
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
   * 062D13C5-DEA3-4921-8918-C49A0F1B****
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
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
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
      data: { 'type': 'array', 'itemType': ListEngineNamespacesResponseBodyData },
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
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

