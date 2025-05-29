// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateRenderingProjectInstancesResponseBodySuccessInstances extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @example
   * render-5130e2feb23f442fb9456a3d977f03d4
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

