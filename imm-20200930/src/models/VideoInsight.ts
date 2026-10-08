// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MultilingualContentEntry } from "./MultilingualContentEntry";


export class VideoInsight extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  caption?: string;
  /**
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

