// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLivePackageOriginEndpointShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code. You must specify at least one of AuthorizationCode and IpWhitelist. Maximum length: 200 characters. Format: [A-Za-z0-9-_.]+
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
   * This is an origin endpoint.
   */
  description?: string;
  /**
   * @remarks
   * The name of the origin endpoint. The name can contain uppercase and lowercase letters, digits, hyphens (-), and underscores (_). The name must be 1 to 200 characters in length. Format: [A-Za-z0-9_-]+
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
   * The IP blacklist. Subnet masks are supported. Separate multiple IP addresses with commas (,).
   * 
   * @example
   * 103.0.0.0/8
   */
  ipBlacklist?: string;
  /**
   * @remarks
   * The IP whitelist. Subnet masks are supported. The value 0.0.0.0/0 is not allowed. Separate multiple IP addresses with commas (,). You must specify at least one of IpWhitelist and AuthorizationCode. Maximum length: 1000 characters.
   * 
   * @example
   * 192.168.1.0/24,10.0.0.1
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * The live packaging configuration.
   */
  livePackagingConfigShrink?: string;
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
   * The protocol. Currently, only HLS is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * HLS
   */
  protocol?: string;
  /**
   * @remarks
   * The number of time-shifting days. Maximum value: 30.
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
      livePackagingConfigShrink: 'LivePackagingConfig',
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
      livePackagingConfigShrink: 'string',
      manifestName: 'string',
      protocol: 'string',
      timeshiftVision: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

