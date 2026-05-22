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
   * The period of time during which the URL is blocked. Unit: seconds. Specify this parameter if Type is set to block.
   * 
   * @example
   * 864000
   */
  maxage?: number;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * BlockObject
   */
  siteId?: number;
  /**
   * @remarks
   * The type. Valid values:
   * 
   * *   **block**
   * *   **unblock**
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

