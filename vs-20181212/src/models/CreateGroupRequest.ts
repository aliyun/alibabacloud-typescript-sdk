// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Application name used by the workspace. Default value: live
   * 
   * @example
   * live
   */
  app?: string;
  /**
   * @remarks
   * Callback URL triggered when device or stream status updates in the workspace
   * 
   * @example
   * http://example.com/callback
   */
  callback?: string;
  /**
   * @remarks
   * Workspace description
   * 
   * @example
   * 我的视频监控
   */
  description?: string;
  /**
   * @remarks
   * Ingest protocol used by the workspace. Valid values:
   * 
   * - gb28181
   * 
   * - rtmp
   * 
   * This parameter is required.
   * 
   * @example
   * rtmp
   */
  inProtocol?: string;
  /**
   * @remarks
   * Whether to enable on-demand stream pulling. Valid values:
   * 
   * - false (default)
   * 
   * - true
   * 
   * @example
   * false
   */
  lazyPull?: boolean;
  /**
   * @remarks
   * Workspace name
   * 
   * This parameter is required.
   * 
   * @example
   * 我的视频监控
   */
  name?: string;
  /**
   * @remarks
   * Playback protocols used by the workspace. Separate multiple values with commas. Valid values:
   * 
   * - flv
   * 
   * - hls
   * 
   * - rtmp
   * 
   * @example
   * flv,rtmp
   */
  outProtocol?: string;
  ownerId?: number;
  /**
   * @remarks
   * Streaming domain used by the workspace
   * 
   * @example
   * demo.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @remarks
   * Ingest domain used by the workspace
   * 
   * @example
   * example.aliyundoc.com
   */
  pushDomain?: string;
  /**
   * @remarks
   * Region where the workspace is located, that is, the service center
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      callback: 'Callback',
      description: 'Description',
      inProtocol: 'InProtocol',
      lazyPull: 'LazyPull',
      name: 'Name',
      outProtocol: 'OutProtocol',
      ownerId: 'OwnerId',
      playDomain: 'PlayDomain',
      pushDomain: 'PushDomain',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      callback: 'string',
      description: 'string',
      inProtocol: 'string',
      lazyPull: 'boolean',
      name: 'string',
      outProtocol: 'string',
      ownerId: 'number',
      playDomain: 'string',
      pushDomain: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

