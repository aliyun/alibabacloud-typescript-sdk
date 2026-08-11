// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScriptProfileTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time, in millisecond-level timestamp.
   * 
   * @example
   * 1735660800000
   */
  createdTime?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * As a survey specialist, sequentially ask about overall service satisfaction, service highlights, improvement suggestions, service efficiency, employee attitude, and willingness to choose again, and collect information
   */
  description?: string;
  /**
   * @remarks
   * The label definition.
   * 
   * @example
   * [{\\"name\\":\\"Overall Satisfaction\\",\\"description\\":\\"Collect evaluation information on overall satisfaction with the service\\",\\"candidateValues\\":[\\"Very Satisfied\\",\\"Satisfied\\",\\"Average\\",\\"Dissatisfied\\",\\"Very Dissatisfied\\"]},{\\"name\\":\\"Service Highlights\\",\\"description\\":\\"Customer description of service highlights or satisfactory aspects\\",\\"candidateValues\\":[]},{\\"name\\":\\"Improvement Suggestions\\",\\"description\\":\\"Customer description of improvement suggestions\\",\\"candidateValues\\":[]},{\\"name\\":\\"Service Efficiency\\",\\"description\\":\\"Customer feedback on service response speed and timeliness of service completion\\",\\"candidateValues\\":[]},{\\"name\\":\\"Employee Attitude\\",\\"description\\":\\"Customer evaluation of the professionalism and attitude of service personnel\\",\\"candidateValues\\":[]},{\\"name\\":\\"Willingness to Choose Again\\",\\"description\\":\\"Whether the customer is willing to choose again\\",\\"candidateValues\\":[\\"Yes\\",\\"No\\"]}]
   */
  labels?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Service Satisfaction Survey
   */
  name?: string;
  /**
   * @remarks
   * The template details.
   * 
   * @example
   * {\\"name\\":\\"Li Ming\\",\\"gender\\":\\"Male\\"}
   */
  schema?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 4f9a8e2b-6c1d-4a7e-9b3f-2d5c8a1e7b59
   */
  templateId?: string;
  /**
   * @remarks
   * The update time, in millisecond-level timestamp.
   * 
   * @example
   * 1735660800000
   */
  updatedTime?: number;
  /**
   * @remarks
   * The variable definition.
   * 
   * @example
   * [{\\"name\\":\\"name\\",\\"description\\":\\"Customer name\\"},{\\"name\\":\\"gender\\",\\"description\\":\\"Customer gender\\"}]
   */
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      labels: 'Labels',
      name: 'Name',
      schema: 'Schema',
      templateId: 'TemplateId',
      updatedTime: 'UpdatedTime',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      description: 'string',
      labels: 'string',
      name: 'string',
      schema: 'string',
      templateId: 'string',
      updatedTime: 'number',
      variables: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScriptProfileTemplateResponseBody extends $dara.Model {
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
   * The response data.
   */
  data?: GetScriptProfileTemplateResponseBodyData;
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
   * Instance does not exist. Instance=392db13c-8901-4a25-b566-91d0d8114cec
   */
  message?: string;
  /**
   * @remarks
   * The list of variable values in the error message.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FDAC7-13C5-1B64-A853-999DF105B9EF
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
      data: GetScriptProfileTemplateResponseBodyData,
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

