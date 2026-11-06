// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateSceneKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Agent Gateway endpoint, which includes the cluster offset mapping port. This parameter is returned only for desktop scenarios.
   * 
   * @example
   * gw-agent-cn-hangzhou.wuyinggw.com:18008
   */
  baseUrl?: string;
  /**
   * @remarks
   * The expiration time of the key.
   * 
   * @example
   * 2026-07-13T12:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The scenario access key.
   * 
   * @example
   * sk-0123456789abcdef0123456789abcdef
   */
  key?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The scenario access URL.
   * 
   * @example
   * https://gw-example.cn-hangzhou.aigclinks.com:18008
   */
  sceneUrl?: string;
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'BaseUrl',
      expireTime: 'ExpireTime',
      key: 'Key',
      requestId: 'RequestId',
      sceneUrl: 'SceneUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
      expireTime: 'string',
      key: 'string',
      requestId: 'string',
      sceneUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

