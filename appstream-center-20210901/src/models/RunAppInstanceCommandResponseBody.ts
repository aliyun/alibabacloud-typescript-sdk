// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunAppInstanceCommandResponseBodyCommandResultModel extends $dara.Model {
  /**
   * @remarks
   * The command execution ID. When commands are issued in batches to multiple delivery groups, only one execution ID is returned. You can use this ID to call the ListCommandInvocationResults operation to query the command execution results on each session.
   * 
   * @example
   * t-hz0jdfwd9f****
   */
  invocationId?: string;
  static names(): { [key: string]: string } {
    return {
      invocationId: 'InvocationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAppInstanceCommandResponseBody extends $dara.Model {
  /**
   * @remarks
   * The command issuance result.
   */
  commandResultModel?: RunAppInstanceCommandResponseBodyCommandResultModel;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commandResultModel: 'CommandResultModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandResultModel: RunAppInstanceCommandResponseBodyCommandResultModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.commandResultModel && typeof (this.commandResultModel as any).validate === 'function') {
      (this.commandResultModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

