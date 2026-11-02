// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LivePackagingConfig } from "./LivePackagingConfig";


export class UpdateLivePackageOriginEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code. You must specify at least one of AuthorizationCode and IpWhitelist. The code can be up to 200 characters in length. Format: [A-Za-z0-9-_.]+.
   * 
   * @example
   * Abc123Def456
   */
  authorizationCode?: string;
  /**
   * @remarks
   * The name of an existing channel.
   * 
   * This parameter is required.
   * 
   * @example
   * channel-1
   */
  channelName?: string;
  /**
   * @remarks
   * The description of the endpoint.
   * 
   * @example
   * This is an origin endpoint
   */
  description?: string;
  /**
   * @remarks
   * The name of the origin endpoint. The name must be 1 to 200 characters in length and can contain only uppercase and lowercase letters, digits, hyphens (-), and underscores (_). Format: [A-Za-z0-9_-]+.
   * 
   * This parameter is required.
   * 
   * @example
   * endpoint-1
   */
  endpointName?: string;
  /**
   * @remarks
   * The name of an existing channel group.
   * 
   * This parameter is required.
   * 
   * @example
   * channel-group-1
   */
  groupName?: string;
  /**
   * @remarks
   * The IP blacklist. CIDR blocks are supported. Separate multiple IP addresses or CIDR blocks with commas (,).
   * 
   * @example
   * 103.0.0.0/8
   */
  ipBlacklist?: string;
  /**
   * @remarks
   * The IP whitelist. CIDR blocks are supported. You cannot configure 0.0.0.0/0. Separate multiple IP addresses or CIDR blocks with commas (,). You must specify at least one of IpWhitelist and AuthorizationCode. The whitelist can be up to 1,000 characters in length.
   * 
   * @example
   * 192.168.1.0/24,10.0.0.1
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * The live packaging configuration.
   */
  livePackagingConfig?: LivePackagingConfig;
  /**
   * @remarks
   * The name of the playlist. Default value: manifest.
   * 
   * @example
   * manifest
   */
  manifestName?: string;
  /**
   * @remarks
   * The protocol. Only HTTP Live Streaming (HLS) is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * HLS
   */
  protocol?: string;
  /**
   * @remarks
   * The number of time-shift days. Maximum value: 30.
   * 
   * @example
   * 5
   */
  timeshiftVision?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationCode: 'AuthorizationCode',
      channelName: 'ChannelName',
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

