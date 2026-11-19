// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadVodObjectCachesRequest extends $dara.Model {
  /**
   * @remarks
   * The prefetch region.
   * 
   * @example
   * domestic
   */
  area?: string;
  /**
   * @remarks
   * Specifies whether to prefetch content directly to L2 nodes. Valid values:
   * 
   * - **true**: The prefetch node hierarchy must include L2 nodes.
   * 
   * - **false**: Content is prefetched only to the origin-fetching layer nodes. This is the **default value**. The origin-fetching layer nodes can be L2 or L3 nodes.
   * 
   * @example
   * true
   */
  l2Preload?: boolean;
  /**
   * @remarks
   * The URLs of the files to be prefetched. Separate multiple URLs with line breaks (
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
   * By default, prefetch requests carry the Accept-Encoding: gzip header. If you want prefetch requests to carry other headers or implement multi-replica prefetching, you can use this parameter to specify custom prefetch headers. Submit the headers in JSON format.
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

