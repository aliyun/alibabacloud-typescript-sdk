// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEngineNamepaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of configurations.
   * 
   * @example
   * 1
   */
  configCount?: string;
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
   * 202
   */
  httpCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * public
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
   * The display name of the namespace.
   * 
   * @example
   * public
   */
  namespaceShowName?: string;
  /**
   * @remarks
   * The quota of configurations.
   * 
   * @example
   * 200
   */
  quota?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FA8F966F-420C-52F5-B49E-6ED7CCE02697
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
   * The type of the namespace. Valid values:
   * 
   * *   0: global configuration
   * *   1: default namespace
   * *   2: custom namespace
   * 
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      configCount: 'ConfigCount',
      errorCode: 'ErrorCode',
      httpCode: 'HttpCode',
      message: 'Message',
      namespace: 'Namespace',
      namespaceDesc: 'NamespaceDesc',
      namespaceShowName: 'NamespaceShowName',
      quota: 'Quota',
      requestId: 'RequestId',
      success: 'Success',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configCount: 'string',
      errorCode: 'string',
      httpCode: 'string',
      message: 'string',
      namespace: 'string',
      namespaceDesc: 'string',
      namespaceShowName: 'string',
      quota: 'string',
      requestId: 'string',
      success: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

