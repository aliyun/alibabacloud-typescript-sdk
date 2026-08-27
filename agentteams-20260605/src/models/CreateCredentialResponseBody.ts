// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCredentialResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time in ISO 8601 format.
   * 
   * @example
   * 2026-07-13T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The credential description.
   * 
   * @example
   * OpenAI API key for the team
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ami-2ze8x9c6f
   */
  instanceId?: string;
  /**
   * @remarks
   * The credential key.
   * 
   * @example
   * OPENAI_API_KEY
   */
  name?: string;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The update time in ISO 8601 format.
   * 
   * @example
   * 2026-07-13T12:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCredentialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {}
   */
  data?: CreateCredentialResponseBodyData;
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
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * req-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateCredentialResponseBodyData,
      httpStatusCode: 'number',
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

