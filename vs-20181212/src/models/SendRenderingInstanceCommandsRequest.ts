// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendRenderingInstanceCommandsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * date;ls -l /tmp
   */
  commands?: string;
  mode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
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

