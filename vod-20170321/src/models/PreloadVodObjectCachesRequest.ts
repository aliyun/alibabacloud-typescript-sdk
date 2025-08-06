// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadVodObjectCachesRequest extends $dara.Model {
  /**
   * @remarks
   * The acceleration region in which you want to prefetch content. If you do not specify a region, the value overseas is used.
   * 
   * *   **domestic**: Chinese mainland
   * *   **overseas**: outside the Chinese mainland
   * 
   * @example
   * domestic
   */
  area?: string;
  /**
   * @remarks
   * Specifies whether to prefetch content to POPs. Valid values:
   * 
   * *   **true**: prefetches content to nodes that include L2 DCDN nodes.
   * *   **false**: prefetches content to L2 POPs or L3 POPs.
   * 
   * @example
   * true
   */
  l2Preload?: boolean;
  /**
   * @remarks
   * The URL of the file to be prefetched. Separate multiple URLs with line breaks (\\n or \\r\\n).
   * 
   * This parameter is required.
   * 
   * @example
   * vod.test.com/test.txt
   */
  objectPath?: string;
  ownerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The custom header for prefetch in the JSON format.
   * 
   * @example
   * {
   *       "Accept-Encoding": [
   *             "gzip, deflate, br"
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

