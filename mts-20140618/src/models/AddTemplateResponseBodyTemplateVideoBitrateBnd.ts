// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddTemplateResponseBodyTemplateVideoBitrateBnd extends $dara.Model {
  /**
   * @remarks
   * The maximum bitrate.
   * 
   * @example
   * 1500
   */
  max?: string;
  /**
   * @remarks
   * The minimum bitrate.
   * 
   * @example
   * 800
   */
  min?: string;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'string',
      min: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

