// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerDeployRegionsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can call the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation to obtain the application ID.>Notice: This parameter is required. If this parameter is not specified, the service returns InvalidParameter.appid (400). The valid format is app-{18-digit number}. You can call the ListEdgeContainerApps operation to obtain the application ID. Example: app-880****75783794688. If you have not activated the Edge Container service, activate it first and then call the CreateEdgeContainerApp operation to create an application and obtain the AppId.</notice>.
   * 
   * @example
   * GetEdgeContainerDeployRegions
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

