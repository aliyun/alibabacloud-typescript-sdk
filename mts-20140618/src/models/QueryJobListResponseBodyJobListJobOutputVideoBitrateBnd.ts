// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryJobListResponseBodyJobListJobOutputVideoBitrateBnd extends $dara.Model {
  /**
   * @remarks
   * The maximum bitrate.
   * 
   * @example
   * 1000
   */
  max?: string;
  /**
   * @remarks
   * The minimum bitrate.
   * 
   * @example
   * 300
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

