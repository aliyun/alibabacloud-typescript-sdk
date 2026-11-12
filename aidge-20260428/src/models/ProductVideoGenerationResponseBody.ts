// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductVideoGenerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The planning route written upon acceptance. Valid values: DIRECT (with script) and AUTO_PLAN (automatic planning).
   * 
   * @example
   * AUTO_PLAN
   */
  route?: string;
  /**
   * @remarks
   * The current status of the task.
   * 
   * @example
   * PENDING
   */
  status?: string;
  /**
   * @remarks
   * The task ID of the service.
   * 
   * @example
   * task_778fa8bd21804828a5d147050e30edac
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      route: 'route',
      status: 'status',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      route: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProductVideoGenerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The task acceptance result.
   */
  data?: ProductVideoGenerationResponseBodyData;
  /**
   * @remarks
   * The returned message or failure description.
   * 
   * @example
   * Task submitted
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 70CBEFDF-BB17-1EB3-8A21-569F3124738F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ProductVideoGenerationResponseBodyData,
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

