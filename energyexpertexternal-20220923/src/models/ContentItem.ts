// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContentItemExtInfo } from "./ContentItemExtInfo";


export class ContentItem extends $dara.Model {
  extInfo?: ContentItemExtInfo[];
  /**
   * @example
   * 0.45
   */
  score?: number;
  text?: string;
  /**
   * @example
   * img
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      extInfo: 'extInfo',
      score: 'score',
      text: 'text',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extInfo: { 'type': 'array', 'itemType': ContentItemExtInfo },
      score: 'number',
      text: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extInfo)) {
      $dara.Model.validateArray(this.extInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

