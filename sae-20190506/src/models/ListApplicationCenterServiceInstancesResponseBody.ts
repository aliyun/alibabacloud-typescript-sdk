// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationCenterServiceInstancesResponseBodyDataServiceInstances extends $dara.Model {
  createTime?: string;
  name?: string;
  serviceInstanceId?: string;
  serviceName?: string;
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
  code?: string;
  data?: ListApplicationCenterServiceInstancesResponseBodyData;
  errorCode?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
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

