// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SystemTag extends $dara.Model {
  /**
   * @example
   * 0.877
   */
  centricScore?: number;
  /**
   * @example
   * 0.98
   */
  confidence?: number;
  /**
   * @example
   * 篮球
   */
  name?: string;
  /**
   * @example
   * 运动
   */
  parentName?: string;
  /**
   * @example
   * 3
   */
  tagLevel?: number;
  static names(): { [key: string]: string } {
    return {
      centricScore: 'centric_score',
      confidence: 'confidence',
      name: 'name',
      parentName: 'parent_name',
      tagLevel: 'tag_level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centricScore: 'number',
      confidence: 'number',
      name: 'string',
      parentName: 'string',
      tagLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

