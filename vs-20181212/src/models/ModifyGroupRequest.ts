// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyGroupRequest extends $dara.Model {
  /**
   * @example
   * http://example.com/callback
   */
  callback?: string;
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 32388487739092994-cn-qingdao
   */
  id?: string;
  /**
   * @example
   * gb28181
   */
  inProtocol?: string;
  /**
   * @example
   * false
   */
  lazyPull?: boolean;
  /**
   * @example
   * myGroup
   */
  name?: string;
  /**
   * @example
   * flv,rtmp,hls
   */
  outProtocol?: string;
  ownerId?: number;
  /**
   * @example
   * myplay.com
   */
  playDomain?: string;
  /**
   * @example
   * mypush.com
   */
  pushDomain?: string;
  /**
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

