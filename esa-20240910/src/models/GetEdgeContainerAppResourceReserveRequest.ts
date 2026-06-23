// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppResourceReserveRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can call the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation to obtain the application ID.
   * >Notice: This parameter is required. If this parameter is not specified, the service returns InvalidParameter.Appid (400).
   * If no applications exist under your account, call CreateEdgeContainerApp to create an application first, and then call ListEdgeContainerApps to obtain the AppId.
   * </notice>.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

