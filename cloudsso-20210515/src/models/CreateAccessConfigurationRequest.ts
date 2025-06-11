// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAccessConfigurationRequestTags } from "./CreateAccessConfigurationRequestTags";


export class CreateAccessConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * The name can contain letters, digits, and hyphens (-).
   * 
   * The name can be up to 32 characters in length.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The description of the access configuration.
   * 
   * The description can be up to 1,024 characters in length.
   * 
   * @example
   * This is an access configuration.
   */
  description?: string;
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The initial web page
   * 
   * that is displayed after a CloudSSO user uses the access configuration to access an account in your resource directory.
   * 
   * The web page must be a page of the Alibaba Cloud Management Console. By default, this parameter is empty, which indicates that the initial web page is the homepage of the Alibaba Cloud Management Console.
   * 
   * @example
   * https://cloudsso.console.aliyun.com
   */
  relayState?: string;
  /**
   * @remarks
   * The duration of a session
   * 
   * in which a CloudSSO user uses the access configuration to access an account in your resource directory.
   * 
   * Unit: seconds.
   * 
   * Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.
   * 
   * Default value: 3600. The value indicates 1 hour.
   * 
   * @example
   * 3600
   */
  sessionDuration?: number;
  tags?: CreateAccessConfigurationRequestTags[];
  static names(): { [key: string]: string } {
    return {
      accessConfigurationName: 'AccessConfigurationName',
      description: 'Description',
      directoryId: 'DirectoryId',
      relayState: 'RelayState',
      sessionDuration: 'SessionDuration',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationName: 'string',
      description: 'string',
      directoryId: 'string',
      relayState: 'string',
      sessionDuration: 'number',
      tags: { 'type': 'array', 'itemType': CreateAccessConfigurationRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

