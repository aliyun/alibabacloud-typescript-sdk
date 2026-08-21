// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadVodObjectCachesRequest extends $dara.Model {
  /**
   * @remarks
   * The prefetch region. Valid values: **domestic**, **overseas**.
   * 
   * @example
   * domestic
   */
  area?: string;
  /**
   * @remarks
   * Specifies whether to directly prefetch content to L2 nodes. Valid values:
   * 
   * - **true**: The prefetch node level must include L2 nodes.
   * 
   * - **false**: Only back-to-origin layer nodes are prefetched. This is the **default value**. The back-to-origin layer node may be an L2 node or an L3 node.
   * 
   * @example
   * true
   */
  l2Preload?: boolean;
  /**
   * @remarks
   * The URL of the file to prefetch. Separate multiple URLs with line breaks (
   *  or 
   * ).
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
   * The default header carried in a prefetch request is Accept-Encoding:gzip. If you want the prefetch request to carry other headers or implement multi-copy prefetch, use this parameter to customize prefetch headers. Submit the value in JSON format.
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

