// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceListPageResponseBodyDataContent extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * efbda488-7b33-432f-****-36530047****
   */
  edasAppId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * k8s-lq-cartservice
   */
  edasAppName?: string;
  /**
   * @remarks
   * The service group.
   * 
   * @example
   * DUBBO
   */
  group?: string;
  /**
   * @remarks
   * The number of instances.
   * 
   * @example
   * 1
   */
  instanceNum?: number;
  /**
   * @remarks
   * The type of the service registry.
   * 
   * @example
   * xx
   */
  registerType?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * xx
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * com.alibabacloud.hipstershop.CartService
   */
  serviceName?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      edasAppId: 'EdasAppId',
      edasAppName: 'EdasAppName',
      group: 'Group',
      instanceNum: 'InstanceNum',
      registerType: 'RegisterType',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edasAppId: 'string',
      edasAppName: 'string',
      group: 'string',
      instanceNum: 'number',
      registerType: 'string',
      serviceId: 'string',
      serviceName: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListPageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data array that is returned.
   */
  content?: GetServiceListPageResponseBodyDataContent[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 8
   */
  size?: number;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 6
   */
  totalElements?: number;
  /**
   * @remarks
   * The total number of returned pages.
   * 
   * @example
   * 1
   */
  totalPages?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      size: 'Size',
      totalElements: 'TotalElements',
      totalPages: 'TotalPages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': GetServiceListPageResponseBodyDataContent },
      size: 'number',
      totalElements: 'number',
      totalPages: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceListPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetServiceListPageResponseBodyData;
  /**
   * @remarks
   * The message that is returned for the request.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetServiceListPageResponseBodyData,
      message: 'string',
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

