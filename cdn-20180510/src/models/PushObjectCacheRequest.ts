// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushObjectCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The acceleration region where content is to be prefetched. Valid values:
   * 
   * *   **domestic****: Chinese mainland**
   * *   **overseas****: regions outside the Chinese mainland**
   * 
   * If you do not set this parameter, content in the service location (specified by parameter Coverage) that you configured for the domain is prefetched. Content is prefetched based on the following rules:
   * 
   * *   If the acceleration region is set to **Chinese Mainland Only**, content in regions in the Chinese mainland is prefetched.
   * *   If the acceleration region is set to **Global**, content in all regions is prefetched.
   * *   If the acceleration region is set to **Global (Excluding the Chinese Mainland)**, content in regions outside the Chinese mainland is prefetched.
   * 
   * @example
   * domestic
   */
  area?: string;
  /**
   * @remarks
   * Specifies whether to prefetch content to L2 points of presence (POPs). Valid values:
   * 
   * *   **true**: prefetches content to L2 POPs.
   * *   **false**: prefetches content to regular POPs. Regular POPs can be L2 POPs or L3 POPs. Default value: **false**.
   * 
   * @example
   * true
   */
  l2Preload?: boolean;
  /**
   * @remarks
   * The URLs based on which content is prefetched. Format: **accelerated domain name/files to be prefetched**.
   * 
   * > Separate URLs with line feeds (\\n or \\r\\n). Each object path can be up to 1,024 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com/image/1.png\\nexample.org/image/2.png
   */
  objectPath?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter specifies whether to enable the hash key query mode when you run a prefetch task. Valid values:
   * 
   * *   false: The default mode, in which the submitted URL is used as the hash key for the prefetch.
   * *   true: In this mode, the actual hash key used for the prefetch is queried based on the configuration of the domain name.
   * 
   * @example
   * true
   */
  queryHashkey?: boolean;
  securityToken?: string;
  /**
   * @remarks
   * The custom header for prefetch in the JSON format.
   * 
   * @example
   * {
   *       "Accept-Encoding": [
   *             "gzip"
   *       ]
   * }
   */
  withHeader?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      l2Preload: 'L2Preload',
      objectPath: 'ObjectPath',
      ownerId: 'OwnerId',
      queryHashkey: 'QueryHashkey',
      securityToken: 'SecurityToken',
      withHeader: 'WithHeader',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      l2Preload: 'boolean',
      objectPath: 'string',
      ownerId: 'number',
      queryHashkey: 'boolean',
      securityToken: 'string',
      withHeader: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

