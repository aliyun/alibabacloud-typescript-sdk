// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerStagingDeployStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can call [ListEdgeContainerApps](~~ListEdgeContainerApps~~) to obtain the application ID.
   * >Notice: AppId is required. If AppId is not specified, the API returns InvalidParameter.appid (400). You can call ListEdgeContainerApps to obtain the application ID. 
   * The AppId format is the prefix app- followed by 18 or more digits (at least 20 characters in total). You can obtain the actual value from the AppId field in the ListEdgeContainerApps response.
   * Complete call chain example: CreateEdgeContainerApp → Call ListEdgeContainerApps to obtain AppId → GetEdgeContainerStagingDeployStatus</notice>.
   * 
   * @example
   * GetEdgeContainerStagingDeployStatus
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

