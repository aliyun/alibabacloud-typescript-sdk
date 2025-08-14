// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LivePackagingConfig } from "./LivePackagingConfig";


export class CreateLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * @example
   * Abcded123
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
   * The endpoint description.
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
   * The IP address blacklist.
   * 
   * @example
   * 103.21.222.1/32,192.168.100.0/24
   */
  ipBlacklist?: string;
  /**
   * @remarks
   * The IP address whitelist.
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
  livePackagingConfig?: LivePackagingConfig;
  /**
   * @remarks
   * The playlist name.
   * 
   * @example
   * manifest
   */
  manifestName?: string;
  /**
   * @remarks
   * The protocol. Only HLS is supported.
   * 
   * @example
   * HLS
   */
  protocol?: string;
  /**
   * @remarks
   * The number of days that time-shifted content is available. Maximum value: 30.
   * 
   * @example
   * 1
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

export class CreateLivePackageOriginEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the origin endpoint.
   */
  livePackageOriginEndpoint?: CreateLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
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
      livePackageOriginEndpoint: CreateLivePackageOriginEndpointResponseBodyLivePackageOriginEndpoint,
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

