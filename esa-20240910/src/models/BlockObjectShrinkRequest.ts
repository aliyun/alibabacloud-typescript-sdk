// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BlockObjectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The content to block.
   * 
   * This parameter is required.
   */
  contentShrink?: string;
  /**
   * @remarks
   * The effective period of the block, in seconds. This parameter is required when the type is set to block.
   * 
   * @example
   * 864000
   */
  maxage?: number;
  /**
   * @remarks
   * The site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456****
   */
  siteId?: number;
  /**
   * @remarks
   * The type. Valid values:
   * 
   * - **block**: blocks the URLs.
   * - **unblock**: unblocks the URLs.
   * 
   * This parameter is required.
   * 
   * @example
   * block
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      contentShrink: 'Content',
      maxage: 'Maxage',
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentShrink: 'string',
      maxage: 'number',
      siteId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

