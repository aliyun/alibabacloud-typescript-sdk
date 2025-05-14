// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAdInsertionResponseBodyConfigCdnConfig extends $dara.Model {
  /**
   * @remarks
   * The CDN prefix for ad segments.
   * 
   * @example
   * http://cdn.com/
   */
  adSegmentUrlPrefix?: string;
  /**
   * @remarks
   * The CDN prefix for content segments.
   * 
   * @example
   * http://cdn.com/
   */
  contentSegmentUrlPrefix?: string;
  static names(): { [key: string]: string } {
    return {
      adSegmentUrlPrefix: 'AdSegmentUrlPrefix',
      contentSegmentUrlPrefix: 'ContentSegmentUrlPrefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adSegmentUrlPrefix: 'string',
      contentSegmentUrlPrefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

