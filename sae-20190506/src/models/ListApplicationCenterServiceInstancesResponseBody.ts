// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationCenterServiceInstancesResponseBodyDataServiceInstances extends $dara.Model {
  /**
   * @example
   * 2025-10-28T02:18:51Z
   */
  createTime?: string;
  /**
   * @example
   * tftestacc54
   */
  name?: string;
  /**
   * @example
   * si-2063aea4b23b4781a26b
   */
  serviceInstanceId?: string;
  /**
   * @example
   * user-service
   */
  serviceName?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: ListApplicationCenterServiceInstancesResponseBodyData;
  errorCode?: string;
  /**
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
   * @example
   * true
   */
  success?: boolean;
  /**
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

