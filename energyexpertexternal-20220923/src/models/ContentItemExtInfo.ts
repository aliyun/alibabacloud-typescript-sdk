// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContentItemExtInfoPos } from "./ContentItemExtInfoPos";


export class ContentItemExtInfo extends $dara.Model {
  /**
   * @example
   * center
   */
  alignment?: string;
  /**
   * @example
   * 8
   */
  index?: number;
  /**
   * @example
   * 2
   */
  level?: number;
  pageNum?: number[];
  pos?: ContentItemExtInfoPos[];
  /**
   * @example
   * picture
   */
  subType?: string;
  /**
   * @example
   * 版面内容
   */
  text?: string;
  /**
   * @example
   * table
   */
  type?: string;
  /**
   * @example
   * 88c712db271443dd4e3697cb9b5dab3a
   */
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      alignment: 'alignment',
      index: 'index',
      level: 'level',
      pageNum: 'pageNum',
      pos: 'pos',
      subType: 'subType',
      text: 'text',
      type: 'type',
      uniqueId: 'uniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignment: 'string',
      index: 'number',
      level: 'number',
      pageNum: { 'type': 'array', 'itemType': 'number' },
      pos: { 'type': 'array', 'itemType': ContentItemExtInfoPos },
      subType: 'string',
      text: 'string',
      type: 'string',
      uniqueId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pageNum)) {
      $dara.Model.validateArray(this.pageNum);
    }
    if(Array.isArray(this.pos)) {
      $dara.Model.validateArray(this.pos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

