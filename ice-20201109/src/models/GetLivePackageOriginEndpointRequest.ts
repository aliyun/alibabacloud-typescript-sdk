// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLivePackageOriginEndpointRequest extends $dara.Model {
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
   * The endpoint name.
   * 
   * This parameter is required.
   * 
   * @example
   * endpoint-1
   */
  endpointName?: string;
  /**
   * @remarks
   * The channel group name.
   * 
   * This parameter is required.
   * 
   * @example
   * channel-group-1
   */
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      endpointName: 'EndpointName',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      endpointName: 'string',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

