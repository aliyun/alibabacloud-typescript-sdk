// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LivePackagingConfig } from "./LivePackagingConfig";


export class UpdateLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * @example
   * Abc123Def456
   */
  authorizationCode?: string;
  /**
   * @remarks
   * The channel name.
   * 
   * @example
   * channel-1
   */
  channelName?: string;
  /**
   * @remarks
   * The time when the endpoint was created.
   * 
   * @example
   * 2023-04-01T12:00:00Z
   */
  createTime?: string;
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
   * The endpoint name.
   * 
   * @example
   * endpoint-1
   */
  endpointName?: string;
  /**
   * @remarks
   * The endpoint URL.
   * 
   * @example
   * https://xxx.packagepull-abcxxx.ap-southeast-1.aliyuncsiceintl.com/v1/group01/1/ch01/manifest
   */
  endpointUrl?: string;
  /**
   * @remarks
   * The channel group name.
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
   * 10.21.222.1/32,192.168.100.0/24
   */
  ipBlacklist?: string;
  /**
   * @remarks
   * The IP whitelist. Subnet masks are supported. Multiple IP addresses are separated with commas (,).
   * 
   * @example
   * 192.168.1.0/24,10.0.0.1/24
   */
  ipWhitelist?: string;
  /**
   * @remarks
   * The time when the endpoint was last modified.
   * 
   * @example
   * 2023-04-01T12:00:00Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The live packaging configuration.
   */
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
   * The protocol. Currently, only HLS is supported.
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
      createTime: 'CreateTime',
      description: 'Description',
      endpointName: 'EndpointName',
      endpointUrl: 'EndpointUrl',
      groupName: 'GroupName',
      ipBlacklist: 'IpBlacklist',
      ipWhitelist: 'IpWhitelist',
      lastModified: 'LastModified',
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
      createTime: 'string',
      description: 'string',
      endpointName: 'string',
      endpointUrl: 'string',
      groupName: 'string',
      ipBlacklist: 'string',
      ipWhitelist: 'string',
      lastModified: 'string',
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

export class UpdateLivePackageOriginEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The origin endpoint information.
   */
  livePackageOriginEndpoint?: UpdateLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5D87B753-0250-5D9D-B248-D40C3271F864
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      livePackageOriginEndpoint: 'LivePackageOriginEndpoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livePackageOriginEndpoint: UpdateLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint,
      requestId: 'string',
    };
  }

  validate() {
    if(this.livePackageOriginEndpoint && typeof (this.livePackageOriginEndpoint as any).validate === 'function') {
      (this.livePackageOriginEndpoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

