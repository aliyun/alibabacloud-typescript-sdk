// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupRequest extends $dara.Model {
  /**
   * @example
   * live
   */
  app?: string;
  /**
   * @example
   * http://example.com/callback
   */
  callback?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rtmp
   */
  inProtocol?: string;
  /**
   * @example
   * false
   */
  lazyPull?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * flv,rtmp
   */
  outProtocol?: string;
  ownerId?: number;
  /**
   * @example
   * demo.aliyundoc.com
   */
  playDomain?: string;
  /**
   * @example
   * example.aliyundoc.com
   */
  pushDomain?: string;
  /**
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

