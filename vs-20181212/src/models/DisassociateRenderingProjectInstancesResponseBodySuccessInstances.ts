// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisassociateRenderingProjectInstancesResponseBodySuccessInstances extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * render-e6cf423c787e4e43b460a788da254fe3
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

