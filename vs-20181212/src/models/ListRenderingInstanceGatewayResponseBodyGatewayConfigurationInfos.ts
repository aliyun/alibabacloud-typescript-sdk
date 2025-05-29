// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingInstanceGatewayResponseBodyGatewayConfigurationInfos extends $dara.Model {
  /**
   * @example
   * 2024-10-15 10:19:13
   */
  creationTime?: string;
  /**
   * @example
   * render-xxx
   */
  gatewayInstanceId?: string;
  /**
   * @example
   * render-342012a227dc4ddf91f024639e43051a
   */
  renderingInstanceId?: string;
  /**
   * @example
   * available
   */
  status?: string;
  /**
   * @example
   * 2024-11-02 12:08:26
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      gatewayInstanceId: 'GatewayInstanceId',
      renderingInstanceId: 'RenderingInstanceId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      gatewayInstanceId: 'string',
      renderingInstanceId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

