// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetJvmConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 3616cdca-4f92-4***************
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the instance group.
   * 
   * *   If an ID is specified, this operation queries the JVM configuration information of the instance group.
   * *   If an ID is not specified, this operation queries the JVM configuration information of the application.
   * 
   * @example
   * 8123db90-880f-48**************
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

