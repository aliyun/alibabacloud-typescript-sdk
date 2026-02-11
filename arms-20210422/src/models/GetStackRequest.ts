// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackRequest extends $dara.Model {
  endTime?: number;
  pid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  rpcID?: string;
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  traceID?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      pid: 'Pid',
      regionId: 'RegionId',
      rpcID: 'RpcID',
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

