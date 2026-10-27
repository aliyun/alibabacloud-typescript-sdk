// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecordFailureRequest extends $dara.Model {
  /**
   * @remarks
   * The start time of the call. The value is a UNIX timestamp in milliseconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1579055782000
   */
  actualTime?: number;
  /**
   * @remarks
   * The call ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 4f21446e-324e-46f2-bf62-7f341fb004ea
   */
  callId?: string;
  /**
   * @remarks
   * The called number.
   * 
   * This parameter is required.
   * 
   * @example
   * 135815****
   */
  calledNumber?: string;
  /**
   * @remarks
   * The calling number.
   * 
   * This parameter is required.
   * 
   * @example
   * 10086
   */
  callingNumber?: string;
  /**
   * @remarks
   * The cause of the failure. Valid values:
   * - NotExists: nonexistent number.
   * - Busy: busy.
   * - NotAnswered: not answered.
   * 
   * This parameter is required.
   * 
   * @example
   * NotExists
   */
  dispositionCode?: string;
  /**
   * @remarks
   * The error codes that occur when the outbound call fails. Valid values:
   * - NotExists: nonexistent number.
   * - Busy: busy.
   * - NotAnswered: not answered.
   * 
   * @example
   * NotExists
   */
  exceptionCodes?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 9ab43460-c0b9-40e2-8447-48d82c97fc67
   */
  instanceId?: string;
  /**
   * @remarks
   * The task ID.
   * 
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

