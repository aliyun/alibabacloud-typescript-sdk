// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultilingualContentEntry extends $dara.Model {
  /**
   * @remarks
   * The multilingual brief description.
   * 
   * @example
   * No personnel activity at the office desk
   */
  caption?: string;
  /**
   * @remarks
   * The multilingual detailed description.
   * 
   * @example
   * This is a close-up shot of an office desk setup. In the left foreground stands a tall, cylindrical, off-white insulated tumbler. A rectangular black mousepad occupies the center of the desk, holding a black backlit mechanical keyboard. Directly behind the keyboard sits a computer monitor with its screen illuminated, displaying the operating system\\"s application dock at the bottom. To the front right of the monitor stands a red metal beverage can, surrounded by a tangle of white data cables and a charging adapter. A small, silver, rectangular device (possibly a USB drive or an adapter) rests in the gap behind the left side of the keyboard, and a tiny pink decorative object is faintly visible on the desk surface. The scene is devoid of human activity; all objects remain motionless.
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

