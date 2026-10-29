// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingInstanceGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The custom gateway instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * render-xxx
   */
  gatewayInstanceId?: string;
  /**
   * @remarks
   * The cloud application service instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayInstanceId: 'GatewayInstanceId',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayInstanceId: 'string',
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

