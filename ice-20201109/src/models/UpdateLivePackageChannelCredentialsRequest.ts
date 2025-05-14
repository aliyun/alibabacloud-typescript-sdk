// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLivePackageChannelCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * The channel name.
   * 
   * This parameter is required.
   * 
   * @example
   * channel-1
   */
  channelName?: string;
  /**
   * @remarks
   * The channel group name.
   * 
   * This parameter is required.
   * 
   * @example
   * group-1
   */
  groupName?: string;
  /**
   * @remarks
   * Specifies whether to update the credentials. 1: updates the credentials of endpoint 1. 2: updates the credentials of endpoint 2. 3: updates the credentials of endpoints 1 and 2.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  rotateCredentials?: number;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      groupName: 'GroupName',
      rotateCredentials: 'RotateCredentials',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      groupName: 'string',
      rotateCredentials: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

