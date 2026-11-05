// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInvocationAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The command ID.
   *    - A new command is created and the new `CommandId` is returned only when `CommandContent` is changed.
   *    - If `CommandContent` is not changed, no new command is created, and the `CommandId` of the currently executed command is returned.
   *    - If you call [InvokeCommand](https://help.aliyun.com/document_detail/64841.html) or set `KeepCommand` to `true` when you call [RunCommand](https://help.aliyun.com/document_detail/141751.html), the new command is retained. Otherwise, all commands associated with the task are deleted when the execution is completed or the task is manually stopped.
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

