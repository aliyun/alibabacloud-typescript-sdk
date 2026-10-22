// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MultilingualContentEntry } from "./MultilingualContentEntry";


export class VideoInsight extends $dara.Model {
  /**
   * @remarks
   * The video synopsis.
   * 
   * @example
   * The video shows two different scenes: one features a stationary white plate, a black bottle, and a transparent glass, and the other shows a hand holding a shampoo bottle labeled "YEZOLU" moving slowly upward in a bathroom
   * 
   * **if can be null:**
   * true
   */
  caption?: string;
  /**
   * @remarks
   * The detailed description of the video content.
   * 
   * @example
   * The scene shows a slightly chubby orange cat lying on a light gray fabric sofa with its body slightly curled up
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The multilingual video information content.
   */
  multilingualContent?: { [key: string]: MultilingualContentEntry };
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      description: 'Description',
      multilingualContent: 'MultilingualContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      description: 'string',
      multilingualContent: { 'type': 'map', 'keyType': 'string', 'valueType': MultilingualContentEntry },
    };
  }

  validate() {
    if(this.multilingualContent) {
      $dara.Model.validateMap(this.multilingualContent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

