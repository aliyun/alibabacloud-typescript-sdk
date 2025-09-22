// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommandResponseBodyRunCommandInfos extends $dara.Model {
  instanceId?: string;
  invokeId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      invokeId: 'InvokeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      invokeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the command execution. You can use the command execution ID to query the output of a command.
   * 
   * @example
   * t-gov2ujrk32v4****
   */
  invokeId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 440D7342-5E7C-B2DB-D0B4EAC2BDF1****
   */
  requestId?: string;
  runCommandInfos?: RunCommandResponseBodyRunCommandInfos[];
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
      runCommandInfos: 'RunCommandInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      requestId: 'string',
      runCommandInfos: { 'type': 'array', 'itemType': RunCommandResponseBodyRunCommandInfos },
    };
  }

  validate() {
    if(Array.isArray(this.runCommandInfos)) {
      $dara.Model.validateArray(this.runCommandInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

