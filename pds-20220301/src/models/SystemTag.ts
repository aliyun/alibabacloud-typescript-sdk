// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SystemTag extends $dara.Model {
  /**
   * @remarks
   * The center value of the tag, which specifies whether the tag is the subject in the image. Valid values: 0 to 1. A value of 0 specifies the lowest proportion. A value of 1 specifies the highest proportion.
   * 
   * @example
   * 0.877
   */
  centricScore?: number;
  /**
   * @remarks
   * The confidence level of the tag. Valid values: 0 to 1. A value of 0 specifies the lowest confidence level. A value of 1 specifies the highest confidence level.
   * 
   * @example
   * 0.98
   */
  confidence?: number;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * basketball
   */
  name?: string;
  /**
   * @remarks
   * The name of the parent tag of the tag.
   * 
   * @example
   * sport
   */
  parentName?: string;
  /**
   * @remarks
   * The level of the tag. The value must be greater than or equal to 1.
   * 
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

