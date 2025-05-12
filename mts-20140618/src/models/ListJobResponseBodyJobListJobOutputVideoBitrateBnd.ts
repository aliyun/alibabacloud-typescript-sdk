// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobResponseBodyJobListJobOutputVideoBitrateBnd extends $dara.Model {
  /**
   * @remarks
   * The maximum bitrate. Unit: Kbit/s.
   * 
   * @example
   * 1000
   */
  max?: string;
  /**
   * @remarks
   * The minimum bitrate. Unit: Kbit/s.
   * 
   * @example
   * 200
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

