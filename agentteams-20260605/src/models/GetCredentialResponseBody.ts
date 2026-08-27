// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCredentialResponseBodyDataBoundWorkers extends $dara.Model {
  /**
   * @remarks
   * The Worker name.
   * 
   * @example
   * worker-xxx
   */
  name?: string;
  /**
   * @remarks
   * The Worker status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The binding update time in ISO 8601 format.
   * 
   * @example
   * 2026-07-13T12:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class GetCredentialResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of bound Workers.
   * 
   * @example
   * []
   */
  boundWorkers?: GetCredentialResponseBodyDataBoundWorkers[];
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
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
      boundWorkers: 'BoundWorkers',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      regionId: 'RegionId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundWorkers: { 'type': 'array', 'itemType': GetCredentialResponseBodyDataBoundWorkers },
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      regionId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.boundWorkers)) {
      $dara.Model.validateArray(this.boundWorkers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCredentialResponseBody extends $dara.Model {
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
  data?: GetCredentialResponseBodyData;
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
      data: GetCredentialResponseBodyData,
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

