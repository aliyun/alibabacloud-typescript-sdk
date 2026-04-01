// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachRCInstancesResponseBodyResponses extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * rc-e2g521l55k038cr8****
   */
  instanceId?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * >  If the request is successful, **Successful** is returned. If the request fails, an error message that contains information such as an error code is returned.
   * 
   * @example
   * Successful
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachRCInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 847BA085-B377-4BFA-8267-F82345ECE1D2
   */
  requestId?: string;
  /**
   * @remarks
   * The response parameters.
   */
  responses?: AttachRCInstancesResponseBodyResponses[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 178968983
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      responses: 'Responses',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      responses: { 'type': 'array', 'itemType': AttachRCInstancesResponseBodyResponses },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.responses)) {
      $dara.Model.validateArray(this.responses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

