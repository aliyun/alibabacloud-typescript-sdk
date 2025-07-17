// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackRequest extends $dara.Model {
  /**
   * @remarks
   * The exit timestamp of the method call. Unit: milliseconds.
   * 
   * @example
   * 1653641800
   */
  endTime?: number;
  /**
   * @remarks
   * The process identifier (PID) of the application. For more information about how to obtain the PID, see [Obtain the PID of an application](https://www.alibabacloud.com/help/zh/doc-detail/186100.htm?spm=a2cdw.13409063.0.0.7a72281f0bkTfx#title-imy-7gj-qhr).
   * 
   * @example
   * eb4zdose6v@36bab313a******
   */
  pid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the remote procedure call (RPC) mode. You can obtain the ID by calling the **GetTrace** operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.1
   */
  rpcID?: string;
  /**
   * @remarks
   * The span ID of the trace. It is displayed on the Trace Explorer page in the ARMS console.
   * 
   * @example
   * 88c32dfa4b******
   */
  spanID?: string;
  /**
   * @remarks
   * The entry timestamp of the method call. Unit: milliseconds.
   * 
   * @example
   * 1653555396
   */
  startTime?: number;
  /**
   * @remarks
   * The trace ID. It is displayed on the **Trace Explorer** page in the Application Real-Time Monitoring Service (ARMS) console.
   * 
   * This parameter is required.
   * 
   * @example
   * 0a5800611641470044457853******
   */
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pid: 'Pid',
      regionId: 'RegionId',
      rpcID: 'RpcID',
      spanID: 'SpanID',
      startTime: 'StartTime',
      traceID: 'TraceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      pid: 'string',
      regionId: 'string',
      rpcID: 'string',
      spanID: 'string',
      startTime: 'number',
      traceID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

