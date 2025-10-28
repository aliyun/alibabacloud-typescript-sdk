// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContainerConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 3616cdca-4f92-**************
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * *   If this parameter is specified, this operation queries the Tomcat configuration of the instance group.
   * *   If this parameter is not specified, this operation queries the Tomcat configuration of the application.
   * 
   * @example
   * 8123db90-880f-**************
   */
  groupId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      groupId: 'GroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      groupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

