// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationCenterServiceInstancesResponseBodyDataServiceInstances extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-10-28T02:18:51Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * tftestacc54
   */
  name?: string;
  /**
   * @remarks
   * The service instance ID.
   * 
   * @example
   * si-2063aea4b23b4781a26b
   */
  serviceInstanceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * user-service
   */
  serviceName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Dify HA
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      name: 'Name',
      serviceInstanceId: 'ServiceInstanceId',
      serviceName: 'ServiceName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      name: 'string',
      serviceInstanceId: 'string',
      serviceName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationCenterServiceInstancesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of service instances.
   */
  serviceInstances?: ListApplicationCenterServiceInstancesResponseBodyDataServiceInstances[];
  static names(): { [key: string]: string } {
    return {
      serviceInstances: 'ServiceInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceInstances: { 'type': 'array', 'itemType': ListApplicationCenterServiceInstancesResponseBodyDataServiceInstances },
    };
  }

  validate() {
    if(Array.isArray(this.serviceInstances)) {
      $dara.Model.validateArray(this.serviceInstances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationCenterServiceInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values: 2xx: Success. 3xx: Redirection. 4xx: Client error. 5xx: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned results.
   */
  data?: ListApplicationCenterServiceInstancesResponseBodyData;
  /**
   * @remarks
   * The error code. If the request is successful, the ErrorCode parameter is not returned. If the request fails, the ErrorCode parameter is returned. For more information, see the Error codes section in this topic.
   * 
   * @example
   * Empty
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. If the request is successful, success is returned. If the request fails, a specific error code is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID.
   * 
   * @example
   * 0a981dd515966966104121683d****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListApplicationCenterServiceInstancesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

