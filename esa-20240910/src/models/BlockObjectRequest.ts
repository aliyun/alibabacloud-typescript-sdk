// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BlockObjectRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  content?: string[];
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
      content: 'Content',
      maxage: 'Maxage',
      siteId: 'SiteId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': 'string' },
      maxage: 'number',
      siteId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

