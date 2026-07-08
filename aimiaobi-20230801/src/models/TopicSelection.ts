// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TopicSelectionOutlines extends $dara.Model {
  /**
   * @remarks
   * The topic outline.
   * 
   * @example
   * 大纲
   */
  outline?: string;
  /**
   * @remarks
   * The summary of the outline.
   * 
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outline: 'Outline',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outline: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TopicSelection extends $dara.Model {
  /**
   * @remarks
   * A list of topic outlines.
   */
  outlines?: TopicSelectionOutlines[];
  /**
   * @remarks
   * The perspective of the topic.
   * 
   * @example
   * 选题视角
   */
  point?: string;
  /**
   * @remarks
   * The summary of the topic.
   * 
   * @example
   * 摘要
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      outlines: 'Outlines',
      point: 'Point',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outlines: { 'type': 'array', 'itemType': TopicSelectionOutlines },
      point: 'string',
      summary: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outlines)) {
      $dara.Model.validateArray(this.outlines);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

