// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTairAIGatewayParameterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * tg-2zeb1ce76fee****
   */
  instanceId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5D622714-AEDD-4609-9167-F5DDD3D1****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the created task flow.
   * 
   * @example
   * 578678678
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

