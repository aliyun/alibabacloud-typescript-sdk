// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecordFailureRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1579055782000
   */
  actualTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4f21446e-324e-46f2-bf62-7f341fb004ea
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 135815****
   */
  calledNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10086
   */
  callingNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OutOfService
   */
  dispositionCode?: string;
  exceptionCodes?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9ab43460-c0b9-40e2-8447-48d82c97fc67
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * d2295c0e-3bc3-48a5-9f56-b185db2be909
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      dispositionCode: 'DispositionCode',
      exceptionCodes: 'ExceptionCodes',
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      callId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      dispositionCode: 'string',
      exceptionCodes: 'string',
      instanceId: 'string',
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

