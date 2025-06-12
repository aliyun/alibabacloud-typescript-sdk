// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveTerminalLogRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CCCClient
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e13c9740-1e37-123b-21b6-00163e352f9
   */
  callId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * none
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * job-b8b0ca63-330c-4e65-8ae3-9de2c7ce7683
   */
  jobId?: string;
  /**
   * @example
   * TurnServerTest
   */
  methodName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * none
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

