// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccessConfigurationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
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
   * The new description of the access configuration.
   * 
   * The description can be up to 1,024 characters in length.
   * 
   * @example
   * This is an access configuration.
   */
  newDescription?: string;
  /**
   * @remarks
   * The new initial web page
   * 
   * that is displayed after a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * The web page must be a page of the Alibaba Cloud Management Console.
   * 
   * @example
   * https://cloudsso.console.aliyun.com
   */
  newRelayState?: string;
  /**
   * @remarks
   * The new duration of a session
   * 
   * in which a CloudSSO user accesses an account in your resource directory by using the access configuration.
   * 
   * Unit: seconds.
   * 
   * Valid values: 900 to 43200. The value 900 indicates 15 minutes. The value 43200 indicates 12 hours.
   * 
   * @example
   * 3600
   */
  newSessionDuration?: number;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      directoryId: 'DirectoryId',
      newDescription: 'NewDescription',
      newRelayState: 'NewRelayState',
      newSessionDuration: 'NewSessionDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      directoryId: 'string',
      newDescription: 'string',
      newRelayState: 'string',
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

