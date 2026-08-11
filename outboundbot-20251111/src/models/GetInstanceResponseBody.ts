// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of concurrent connections.
   * 
   * @example
   * 50
   */
  concurrency?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1769653616000
   */
  createdTime?: number;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * This is a large language model chatbot
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * e49ad122-15a1-443a-a102-84a78a93be79
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * Questionnaire
   */
  name?: string;
  /**
   * @remarks
   * The Xiaomi business space information.
   * 
   * @example
   * {"agentId":"1380415","agentInstanceId":"outbound_d1d1a8e6-a14e-46c8-b580-e50d94cb2d7e","agentKey":"329cb6fdb880431d82400a8365380100_p_outbound_public"}
   */
  nluProfile?: string;
  /**
   * @remarks
   * The service mode.
   * 
   * @example
   * STANDARD
   */
  serviceMode?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1308144684576765
   */
  tenantId?: string;
  /**
   * @remarks
   * The time when the instance was last updated.
   * 
   * @example
   * 1769653616000
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
      createdTime: 'CreatedTime',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      nluProfile: 'NluProfile',
      serviceMode: 'ServiceMode',
      tenantId: 'TenantId',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      createdTime: 'number',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      nluProfile: 'string',
      serviceMode: 'string',
      tenantId: 'string',
      updatedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The instance details.
   */
  data?: GetInstanceResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * You are not permitted to operate this instance. User=206770505484719639, Instance=null.
   */
  message?: string;
  /**
   * @remarks
   * The list of variable values in the error message.
   */
  params?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInstanceResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

