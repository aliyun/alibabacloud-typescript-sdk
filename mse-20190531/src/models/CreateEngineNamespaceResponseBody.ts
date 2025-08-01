// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEngineNamespaceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of configurations.
   * 
   * @example
   * 1
   */
  configCount?: number;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * f4fa5b81-2f26-4900-833a-7516b315ebb2
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
   * dev
   */
  namespaceShowName?: string;
  /**
   * @remarks
   * The quota of configurations.
   * 
   * @example
   * 1
   */
  quota?: number;
  /**
   * @remarks
   * The number of active services.
   * 
   * @example
   * 3
   */
  serviceCount?: number;
  /**
   * @remarks
   * The type of the namespace. Valid values:
   * 
   * *   `0`: global configuration
   * *   `1`: default namespace
   * *   `2`: custom namespace
   * 
   * @example
   * 1
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
      serviceCount: 'number',
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

export class CreateEngineNamespaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * mse-892k****
   */
  clusterId?: string;
  /**
   * @remarks
   * The details of the data.
   */
  data?: CreateEngineNamespaceResponseBodyData;
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
   * The message returned.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F6092602-C357-4750-89D9-E572FBEA****
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
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      data: CreateEngineNamespaceResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

