// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerTerminalRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can call the [ListEdgeContainerApps](~~ListEdgeContainerApps~~) operation to obtain the application ID.
   * <notice>This parameter is required. If this parameter is not specified, the API returns InvalidParameter.appid(400).
   * Full dependency chain: CreateEdgeContainerApp → CreateEdgeContainerAppVersion → PublishEdgeContainerAppVersion → Wait for the container status to become Running → Call this API.</notice>.
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

