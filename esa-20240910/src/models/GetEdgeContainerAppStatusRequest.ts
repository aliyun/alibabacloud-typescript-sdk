// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEdgeContainerAppStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can call [ListEdgeContainerApps](~~ListEdgeContainerApps~~) to obtain the application ID. Before calling this operation, you must first activate the edge container service by calling OpenEdgeContainer, and then confirm that an available application exists by calling ListEdgeContainerApps or create an application by calling CreateEdgeContainerApp.
   * 
   * This parameter is required.
   * 
   * @example
   * app-88068867578379****
   */
  appId?: string;
  /**
   * @remarks
   * The publishing environment. Valid values: prod and staging.
   * 
   * @example
   * staging
   */
  publishEnv?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      publishEnv: 'PublishEnv',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      publishEnv: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

