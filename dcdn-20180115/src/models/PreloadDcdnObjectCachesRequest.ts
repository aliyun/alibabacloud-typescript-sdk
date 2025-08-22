// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadDcdnObjectCachesRequest extends $dara.Model {
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
   * The path of the content that you want to prefetch. Separate multiple URLs with line feed characters (\\n) or a pair of carriage return and line feed characters (\\r\\n).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com/examplefile.txt
   */
  objectPath?: string;
  ownerId?: number;
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

