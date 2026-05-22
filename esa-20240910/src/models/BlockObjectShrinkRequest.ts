// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BlockObjectShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contentShrink?: string;
  maxage?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  siteId?: number;
  /**
   * @remarks
   * This parameter is required.
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

