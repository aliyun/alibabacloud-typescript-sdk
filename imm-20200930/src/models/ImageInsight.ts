// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MultilingualContentEntry } from "./MultilingualContentEntry";


export class ImageInsight extends $dara.Model {
  /**
   * @remarks
   * The short description of the image content.
   * 
   * @example
   * An orange tabby cat lying on the living room sofa with sunlight streaming in through the window
   * 
   * **if can be null:**
   * true
   */
  caption?: string;
  /**
   * @remarks
   * The image description.
   * 
   * @example
   * The image shows a person wearing a dark suit jacket over a white shirt. The background features a gradient from light blue to gray
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  /**
   * @remarks
   * The multilingual image information content.
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

