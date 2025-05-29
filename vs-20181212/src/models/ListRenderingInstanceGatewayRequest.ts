// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingInstanceGatewayRequest extends $dara.Model {
  /**
   * @example
   * render-xxx
   */
  gatewayInstanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayInstanceId: 'GatewayInstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayInstanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
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

