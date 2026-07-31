// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInvocationAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The command ID.
   *    - A new command is created and the new `CommandId` is returned only when `CommandContent` is changed.
   *    - When `CommandContent` is not changed, no new command is created, and the `CommandId` of the currently executing command is returned.
   *    - If [InvokeCommand](https://help.aliyun.com/document_detail/64841.html) was called, or [RunCommand](https://help.aliyun.com/document_detail/141751.html) was called with `KeepCommand` set to `true`, the new command is retained. Otherwise, when the execution completes or the task is manually stopped, all commands associated with the task are deleted.
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

