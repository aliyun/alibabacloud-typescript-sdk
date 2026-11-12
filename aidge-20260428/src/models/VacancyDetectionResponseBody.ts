// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VacancyDetectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the asynchronous task. You can use this ID to call QueryAsyncTaskResult to query the result later.
   * 
   * @example
   * 518c7318185d4db694236f79d672c156
   */
  taskId?: string;
  /**
   * @remarks
   * The usage details. This parameter is left empty during asynchronous commit and is populated by scheduling after the node reaches the desired state.
   * 
   * @example
   * {"ProcessingCount":1}
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VacancyDetectionResponseBody extends $dara.Model {
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
   * The submission result of the asynchronous task.
   * 
   * @example
   * {\\"TaskId\\": \\"TID_2f567233-78dd-4226-8b69-ac9288a66da0\\"}
   */
  data?: VacancyDetectionResponseBodyData;
  /**
   * @remarks
   * The returned message or failure description.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The unique ID of the request.
   * 
   * @example
   * 70CBEFDF-BB17-1EB3-8A21-569F3124738F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful.
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
      data: VacancyDetectionResponseBodyData,
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

