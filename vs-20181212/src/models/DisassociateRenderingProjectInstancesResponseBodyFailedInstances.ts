// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateRenderingProjectInstancesResponseBodyFailedInstances extends $dara.Model {
  message?: string;
  /**
   * @example
   * render-421cd2a1125947c19fcd5c7dd2c7d31e
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

