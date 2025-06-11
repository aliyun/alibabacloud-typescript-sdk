// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserProvisioningConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource directory.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  /**
   * @remarks
   * The new default URL for a CloudSSO user who logs on to the Alibaba Cloud Management Console.
   * 
   * Default value: https://homenew.console.aliyun.com.
   * 
   * @example
   * https://home.console.aliyun.com/home/dashboard/ProductAndService
   */
  newDefaultLandingPage?: string;
  /**
   * @remarks
   * The new duration of the logon session.
   * 
   * Unit: hours.
   * 
   * Valid values: 1 to 24.
   * 
   * Default value: 6.
   * 
   * @example
   * 6
   */
  newSessionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
      newDefaultLandingPage: 'NewDefaultLandingPage',
      newSessionDuration: 'NewSessionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
      newDefaultLandingPage: 'string',
      newSessionDuration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

