// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LivePackagingConfig } from "./LivePackagingConfig";


export class CreateLivePackageOriginEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code. It can be up to 200 characters in length. You must configure AuthorizationCode, IpWhitelist, or both. Format: [A-Za-z0-9-_.]+
   * 
   * @example
   * AbcDef123
   */
  authorizationCode?: string;
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
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ****0311a423d11a5f7dee713535****
   */
  clientToken?: string;
  /**
   * @remarks
   * The endpoint description.
   */
  description?: string;
  /**
   * @remarks
   * The origin endpoint name. It can contain letters, digits, hyphens (-), and underscores (_). The name must be 1 to 200 characters in length. Format: [A-Za-z0-9_-]+
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
  /**
   * @remarks
   * The IP address blacklist. It supports subnet masks. 0.0.0.0/0 is not allowed. It can be up to 1,000 characters in length. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 103.21.222.1/32,192.168.100.0/24
   */
  ipBlacklist?: string;
  /**
   * @remarks
   * The IP address whitelist. It supports subnet masks. 0.0.0.0/0 is not allowed. It can be up to 1,000 characters in length. Separate multiple IP addresses with commas (,). You must configure AuthorizationCode, IpWhitelist, or both.
   * 
   * @example
   * 192.168.1.0/24,10.0.0.1/24
   */
  ipWhitelist?: string;
  livePackagingConfig?: LivePackagingConfig;
  /**
   * @remarks
   * The playlist name. Default value: manifest.
   * 
   * @example
   * manifest
   */
  manifestName?: string;
  /**
   * @remarks
   * The distribution protocol.
   * 
   * This parameter is required.
   * 
   * @example
   * HLS
   */
  protocol?: string;
  /**
   * @remarks
   * The number of days that time-shifted content is available. Maximum value: 30. Default value: 0, which indicates that time shifting is not supported.
   * 
   * @example
   * 1
   */
  timeshiftVision?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationCode: 'AuthorizationCode',
      channelName: 'ChannelName',
      clientToken: 'ClientToken',
      description: 'Description',
      endpointName: 'EndpointName',
      groupName: 'GroupName',
      ipBlacklist: 'IpBlacklist',
      ipWhitelist: 'IpWhitelist',
      livePackagingConfig: 'LivePackagingConfig',
      manifestName: 'ManifestName',
      protocol: 'Protocol',
      timeshiftVision: 'TimeshiftVision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationCode: 'string',
      channelName: 'string',
      clientToken: 'string',
      description: 'string',
      endpointName: 'string',
      groupName: 'string',
      ipBlacklist: 'string',
      ipWhitelist: 'string',
      livePackagingConfig: LivePackagingConfig,
      manifestName: 'string',
      protocol: 'string',
      timeshiftVision: 'number',
    };
  }

  validate() {
    if(this.livePackagingConfig && typeof (this.livePackagingConfig as any).validate === 'function') {
      (this.livePackagingConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

