// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VideoInsight extends $dara.Model {
  /**
   * @remarks
   * Video summary.
   * 
   * **if can be null:**
   * true
   */
  caption?: string;
  /**
   * @remarks
   * The description of the video file.
   * 
   * >  Not supported.
   * 
   * **if can be null:**
   * true
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: 'string',
      description: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

