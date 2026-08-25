// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessConfigurationRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAccessConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * Format: contains letters, digits, or hyphens (-).
   * 
   * Length: up to 32 characters.
   * 
   * @example
   * ECS-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The description of the access configuration.
   * 
   * Length: up to 1024 characters.
   * 
   * @example
   * This is an access configuration.
   */
  description?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The initial access page.
   * 
   * The page address that a CloudSSO user initially accesses when using the access configuration to access an account in a resource directory.
   * 
   * The page must be an Alibaba Cloud Management Console page. Default value: empty, which indicates that the user is redirected to the homepage of the Alibaba Cloud Management Console.
   * 
   * @example
   * https://cloudsso.console.aliyun.com
   */
  relayState?: string;
  /**
   * @remarks
   * The session duration.
   * 
   * The maximum duration of a session when a CloudSSO user uses the access configuration to access an account in a resource directory.
   * 
   * Unit: seconds.
   * 
   * Valid values: 900 to 43200 (15 minutes to 12 hours).
   * 
   * Default value: 3600 (1 hour).
   * 
   * @example
   * 3600
   */
  sessionDuration?: number;
  /**
   * @remarks
   * The list of tags.
   */
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

