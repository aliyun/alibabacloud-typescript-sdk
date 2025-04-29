// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInvocationAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The command ID.
   * 
   * *   A new command is added and the `CommandId` value of the new command is returned only when `CommandContent` is changed.
   * *   No new command is added and the `CommandId` value of the command that is running is returned if `CommandContent` is not changed.
   * *   If you set `KeepCommand` to `true` when you called the [InvokeCommand](https://help.aliyun.com/document_detail/64841.html) or [RunCommand](https://help.aliyun.com/document_detail/141751.html) operation, a new command is added and retained. Otherwise, commands related to the task are deleted after all executions of the task are complete or the task is manually stopped.
   * 
   * @example
   * c-hz01272yr52****
   */
  commandId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

