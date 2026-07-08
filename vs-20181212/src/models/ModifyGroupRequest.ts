// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Callback URL for device or stream status updates in the group.
   * 
   * @example
   * http://example.com/callback
   */
  callback?: string;
  /**
   * @remarks
   * Description of the space.
   * 
   * @example
   * 用于测试使用
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the space is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the space.
   * 
   * This parameter is required.
   * 
   * @example
   * 32388487739092994-cn-qingdao
   */
  id?: string;
  /**
   * @remarks
   * Ingest protocol used by the group. Valid values:
   * 
   * - gb28181
   * 
   * - rtmp
   * 
   * @example
   * gb28181
   */
  inProtocol?: string;
  /**
   * @remarks
   * Whether on-demand stream pulling is enabled. Valid values:
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
   * Space name.
   * 
   * @example
   * myGroup
   */
  name?: string;
  /**
   * @remarks
   * Playback protocols used by the group. Separate multiple values with commas. Valid values:
   * 
   * - flv
   * 
   * - hls
   * 
   * - rtmp
   * 
   * @example
   * flv,rtmp,hls
   */
  outProtocol?: string;
  ownerId?: number;
  /**
   * @remarks
   * Streaming domain used by the group.
   * 
   * @example
   * myplay.com
   */
  playDomain?: string;
  /**
   * @remarks
   * Ingest domain used by the group. Applies only to groups that use the RTMP ingest protocol.
   * 
   * @example
   * mypush.com
   */
  pushDomain?: string;
  /**
   * @remarks
   * The region where the space is located. This region serves as the service center.
   * 
   * @example
   * cn-qingdao
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      description: 'Description',
      enabled: 'Enabled',
      id: 'Id',
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
      callback: 'string',
      description: 'string',
      enabled: 'boolean',
      id: 'string',
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

