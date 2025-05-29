// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AssociateRenderingProjectInstancesResponseBodyFailedInstances extends $dara.Model {
  /**
   * @example
   * invalid id
   */
  message?: string;
  /**
   * @example
   * render-b45f28650ffe4591bf4c5c95996a428c
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

