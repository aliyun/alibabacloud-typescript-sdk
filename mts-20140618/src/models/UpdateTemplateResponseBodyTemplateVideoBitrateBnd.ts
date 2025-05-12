// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTemplateResponseBodyTemplateVideoBitrateBnd extends $dara.Model {
  /**
   * @remarks
   * The lower limit of the total bitrate. Unit: Kbit/s.
   * 
   * @example
   * 500
   */
  max?: string;
  /**
   * @remarks
   * The pixel format. Valid values: standard pixel formats such as yuv420p and yuvj420p.
   * 
   * @example
   * 100
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

