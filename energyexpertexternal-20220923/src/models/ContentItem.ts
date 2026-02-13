// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ContentItemExtInfoPos extends $dara.Model {
  /**
   * @remarks
   * X coordinate of the layout.
   * 
   * @example
   * 1
   */
  x?: number;
  /**
   * @remarks
   * Y coordinate of the layout.
   * 
   * @example
   * 2
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'x',
      y: 'y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContentItemExtInfo extends $dara.Model {
  /**
   * @remarks
   * Enumeration values for page alignment options: center, left, and right.
   * 
   * @example
   * center
   */
  alignment?: string;
  /**
   * @remarks
   * The index of the layout in the text.
   * 
   * @example
   * 8
   */
  index?: number;
  /**
   * @remarks
   * Hierarchy of the layout.
   * 
   * @example
   * 2
   */
  level?: number;
  /**
   * @remarks
   * Page numbers of the layout, which may include multiple page numbers.
   */
  pageNum?: number[];
  /**
   * @remarks
   * Position information of the layout, in list format.
   */
  pos?: ContentItemExtInfoPos[];
  /**
   * @remarks
   * Enumeration values for the layout subtypes: picture, para, none
   * 
   * @example
   * picture
   */
  subType?: string;
  /**
   * @remarks
   * text
   * 
   * @example
   * content
   */
  text?: string;
  /**
   * @remarks
   * Enumeration values for the layout types: table, figure, text, and none.
   * 
   * @example
   * table
   */
  type?: string;
  /**
   * @remarks
   * Unique layout ID.
   * 
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

export class ContentItem extends $dara.Model {
  /**
   * @remarks
   * The coordinates of the text are in list format.
   */
  extInfo?: ContentItemExtInfo[];
  /**
   * @remarks
   * Recall confidence
   * 
   * @example
   * 0.45
   */
  score?: number;
  /**
   * @remarks
   * Recall text.
   * 
   * @example
   * content
   */
  text?: string;
  /**
   * @remarks
   * Text sources: img, table, para.
   * 
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

