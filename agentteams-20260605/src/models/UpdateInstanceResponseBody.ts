// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the AgentTeams instance.
   * 
   * @example
   * agentteams-abc123
   */
  instanceId?: string;
  /**
   * @remarks
   * The new instance name.
   * 
   * @example
   * New instance name.
   */
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code in the successful response.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The details of the updated instance.
   * 
   * @example
   * {}
   */
  data?: UpdateInstanceResponseBodyData;
  /**
   * @remarks
   * **The HTTP status code.**
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * **The response message.**
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * **The request ID.**
   * 
   * @example
   * request-xxx
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
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
      data: UpdateInstanceResponseBodyData,
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

