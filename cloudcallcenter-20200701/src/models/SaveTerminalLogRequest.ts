// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTerminalLogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  dataType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  jobId?: string;
  methodName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uniqueRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      callId: 'CallId',
      content: 'Content',
      dataType: 'DataType',
      instanceId: 'InstanceId',
      jobId: 'JobId',
      methodName: 'MethodName',
      status: 'Status',
      uniqueRequestId: 'UniqueRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      callId: 'string',
      content: 'string',
      dataType: 'number',
      instanceId: 'string',
      jobId: 'string',
      methodName: 'string',
      status: 'string',
      uniqueRequestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

