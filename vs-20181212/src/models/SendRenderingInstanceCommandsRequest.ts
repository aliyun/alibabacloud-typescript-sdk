// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendRenderingInstanceCommandsRequest extends $dara.Model {
  /**
   * @remarks
   * A shell command string. Enter multiple commands separated by semicolons (;) or line feeds.
   * 
   * - Dangerous commands such as rm and reboot are disabled.
   * 
   * This parameter is required.
   * 
   * @example
   * date;ls -l /tmp
   */
  commands?: string;
  /**
   * @remarks
   * The response pattern for the command. Valid values:
   * 
   * 1. Sync: The response is returned synchronously. This is the default value.
   * 
   * 2. Async: The response is returned asynchronously.
   * 
   * @example
   * Async
   */
  mode?: string;
  /**
   * @remarks
   * The ID of the cloud application service instance.
   * 
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  /**
   * @remarks
   * The timeout period for command execution, in seconds. The value range depends on the Mode parameter:
   * 
   * 1. If Mode is set to Sync, the value range is 0 to 30. The default value is 30.
   * 
   * 2. If Mode is set to Async, the value range is 0 to 3600. The default value is 300.
   * 
   * @example
   * 60
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      mode: 'Mode',
      renderingInstanceId: 'RenderingInstanceId',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: 'string',
      mode: 'string',
      renderingInstanceId: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

