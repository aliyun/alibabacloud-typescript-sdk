// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current kernel version of the instance.
   * 
   * @example
   * rds_20220731
   */
  currentKernelVersion?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The major version of the database engine.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The business error code for the record or operation. This value can be empty if no error occurs. Evaluate this value together with ErrorMessage.
   * 
   * @example
   * data_masking_not_running
   */
  errorCode?: string;
  /**
   * @remarks
   * The business error message for the record or operation.
   * 
   * @example
   * The instance is not in the running state
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance supports column encryption by using KMS keys.
   */
  kmsEncryptionSupported?: boolean;
  /**
   * @remarks
   * The end time of the O&M window. The value is a UNIX timestamp in milliseconds since 1970-01-01 00:00:00 UTC. The UTC time of the O&M window is combined with the date of the query day and returned.
   * 
   * @example
   * 1788570000000
   */
  maintainEndTime?: number;
  /**
   * @remarks
   * The start time of the O&M window. The value is a UNIX timestamp in milliseconds since 1970-01-01 00:00:00 UTC. The UTC time of the O&M window is combined with the date of the query day and returned.
   * 
   * @example
   * 1788566400000
   */
  maintainStartTime?: number;
  /**
   * @remarks
   * The request ID. You can use this ID to locate the API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @remarks
   * The current running status of the instance.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      currentKernelVersion: 'CurrentKernelVersion',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      kmsEncryptionSupported: 'KmsEncryptionSupported',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentKernelVersion: 'string',
      engine: 'string',
      engineVersion: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      kmsEncryptionSupported: 'boolean',
      maintainEndTime: 'number',
      maintainStartTime: 'number',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

